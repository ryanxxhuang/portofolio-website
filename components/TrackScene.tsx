'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Edges, Line, OrbitControls } from '@react-three/drei';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import track from '@/data/track.json';

/* ------------------------------------------------------------------
   Real data from the F1TENTH repo: slam_toolbox occupancy grid and the
   TUM minimum-curvature raceline. The LiDAR is simulated against that grid.
   ------------------------------------------------------------------ */
const RES = track.resolution;
const [OX, OY] = track.origin as [number, number];
const walls = track.occupied as number[][];
const race = track.raceline as number[][];
const rec = track.recorded as number[][];

const cx = race.reduce((s, p) => s + p[0], 0) / race.length;
const cy = race.reduce((s, p) => s + p[1], 0) / race.length;
const toV = (x: number, y: number, h = 0) => new THREE.Vector3(x - cx, h, -(y - cy));

const occ = new Set(walls.map(([x, y]) => `${Math.round((x - OX) / RES - 0.5)},${Math.round((y - OY) / RES - 0.5)}`));
const isWall = (x: number, y: number) => occ.has(`${Math.floor((x - OX) / RES)},${Math.floor((y - OY) / RES)}`);

// Arc-length parameterisation of the closed raceline.
const cum: number[] = [0];
for (let i = 1; i <= race.length; i++) {
  const a = race[i - 1];
  const b = race[i % race.length];
  cum.push(cum[i - 1] + Math.hypot(b[0] - a[0], b[1] - a[1]));
}
const LAP = cum[cum.length - 1];

function poseAt(s: number) {
  s = ((s % LAP) + LAP) % LAP;
  let i = 0;
  while (cum[i + 1] < s) i++;
  const a = race[i];
  const b = race[(i + 1) % race.length];
  const t = (s - cum[i]) / (cum[i + 1] - cum[i]);
  const x = a[0] + (b[0] - a[0]) * t;
  const y = a[1] + (b[1] - a[1]) * t;
  const v = a[3] + (b[3] - a[3]) * t;
  // Heading from a short look-ahead for smoothness.
  const ahead = (s + 0.12) % LAP;
  let j = 0;
  while (cum[j + 1] < ahead) j++;
  const c = race[j];
  const d = race[(j + 1) % race.length];
  const u = (ahead - cum[j]) / (cum[j + 1] - cum[j]);
  const hx = c[0] + (d[0] - c[0]) * u;
  const hy = c[1] + (d[1] - c[1]) * u;
  return { x, y, v, yaw: Math.atan2(hy - y, hx - x) };
}

const RAYS = 180;
const MAX_R = 4;
const STEP = 0.02;
const LIDAR_OFFSET = 0.12; // LiDAR sits ahead of the rear axle.

function scan(px: number, py: number, out: Float32Array, hits: Float32Array) {
  const o = toV(px, py, 0.17);
  for (let k = 0; k < RAYS; k++) {
    const a = (k / RAYS) * Math.PI * 2;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    let r = 0.08;
    let hit = false;
    while (r < MAX_R) {
      if (isWall(px + ca * r, py + sa * r)) {
        hit = true;
        break;
      }
      r += STEP;
    }
    const e = toV(px + ca * r, py + sa * r, 0.17);
    out.set([o.x, o.y, o.z, e.x, e.y, e.z], k * 6);
    if (hit) hits.set([e.x, 0.075, e.z], k * 3);
    else hits.set([0, -10, 0], k * 3);
  }
}

type Palette = { ink: string; ink2: string; rule: string; grid: string; accent: string; paper: string };

function readPalette(): Palette {
  const s = getComputedStyle(document.documentElement);
  const g = (n: string) => s.getPropertyValue(n).trim();
  return { ink: g('--ink'), ink2: g('--ink-2'), rule: g('--rule'), grid: g('--grid-major'), accent: g('--accent'), paper: g('--paper') };
}

function Walls({ color }: { color: string }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  useEffect(() => {
    const m = new THREE.Matrix4();
    walls.forEach(([x, y], i) => {
      const v = toV(x, y, 0.035);
      m.makeTranslation(v.x, v.y, v.z);
      ref.current!.setMatrixAt(i, m);
    });
    ref.current!.instanceMatrix.needsUpdate = true;
  }, []);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, walls.length]}>
      <boxGeometry args={[RES * 0.9, 0.07, RES * 0.9]} />
      <meshBasicMaterial color={color} transparent opacity={0.42} depthWrite={false} />
    </instancedMesh>
  );
}

function Part({ size, pos, p }: { size: [number, number, number]; pos: [number, number, number]; p: Palette }) {
  return (
    <mesh position={pos}>
      <boxGeometry args={size} />
      <meshBasicMaterial color={p.paper} polygonOffset polygonOffsetFactor={1} />
      <Edges color={p.ink} />
    </mesh>
  );
}

function Wheel({ pos, p }: { pos: [number, number, number]; p: Palette }) {
  return (
    <mesh position={pos} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.058, 0.058, 0.05, 18]} />
      <meshBasicMaterial color={p.paper} polygonOffset polygonOffsetFactor={1} />
      <Edges color={p.ink} threshold={30} />
    </mesh>
  );
}

/** Stylised version of the real car: off-road chassis, LiDAR up front, Jetson and antennas behind. */
function Car({ p }: { p: Palette }) {
  return (
    <group>
      <Part size={[0.46, 0.03, 0.2]} pos={[0.02, 0.085, 0]} p={p} />
      <Part size={[0.05, 0.05, 0.24]} pos={[0.27, 0.07, 0]} p={p} />
      <Part size={[0.14, 0.035, 0.12]} pos={[-0.05, 0.135, 0]} p={p} />
      <Part size={[0.1, 0.04, 0.09]} pos={[-0.17, 0.12, 0]} p={p} />
      <mesh position={[LIDAR_OFFSET, 0.15, 0]}>
        <cylinderGeometry args={[0.042, 0.042, 0.045, 24]} />
        <meshBasicMaterial color={p.paper} polygonOffset polygonOffsetFactor={1} />
        <Edges color={p.accent} threshold={30} />
      </mesh>
      <Line points={[[-0.09, 0.15, 0.04], [-0.11, 0.33, 0.06]]} color={p.ink} lineWidth={1.2} />
      <Line points={[[-0.09, 0.15, -0.04], [-0.11, 0.33, -0.06]]} color={p.ink} lineWidth={1.2} />
      <Wheel pos={[0.19, 0.058, 0.13]} p={p} />
      <Wheel pos={[0.19, 0.058, -0.13]} p={p} />
      <Wheel pos={[-0.15, 0.058, 0.13]} p={p} />
      <Wheel pos={[-0.15, 0.058, -0.13]} p={p} />
    </group>
  );
}

function Scene({ p, moving }: { p: Palette; moving: boolean }) {
  const car = useRef<THREE.Group>(null);
  const rays = useRef<THREE.BufferGeometry>(null);
  const dots = useRef<THREE.BufferGeometry>(null);
  const s = useRef(0);
  const since = useRef(1);
  const buf = useMemo(() => ({ seg: new Float32Array(RAYS * 6), hit: new Float32Array(RAYS * 3) }), []);
  const racePts = useMemo(() => race.map(([x, y]) => toV(x, y, 0.004)), []);
  const recPts = useMemo(() => rec.map(([x, y]) => toV(x, y, 0.003)), []);
  const grid = useMemo(() => {
    const g = new THREE.GridHelper(6, 24, p.grid, p.grid);
    (g.material as THREE.Material).transparent = true;
    (g.material as THREE.Material).opacity = 0.9;
    return g;
  }, [p.grid]);

  const update = (dt: number) => {
    if (moving) s.current += dt * 0.8 * poseAt(s.current).v * 0.75;
    const pose = poseAt(s.current);
    const g = car.current!;
    const v = toV(pose.x, pose.y);
    g.position.set(v.x, 0, v.z);
    g.rotation.y = pose.yaw;
    since.current += dt;
    if (since.current > 0.05) {
      since.current = 0;
      const lx = pose.x + Math.cos(pose.yaw) * LIDAR_OFFSET;
      const ly = pose.y + Math.sin(pose.yaw) * LIDAR_OFFSET;
      scan(lx, ly, buf.seg, buf.hit);
      rays.current!.attributes.position.needsUpdate = true;
      dots.current!.attributes.position.needsUpdate = true;
    }
  };

  useEffect(() => {
    update(0.06);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useFrame((_, dt) => update(Math.min(dt, 0.05)));

  return (
    <>
      <primitive object={grid} position={[0, 0, 0]} />
      <Walls color={p.ink} />
      <Line points={recPts} color={p.ink2} lineWidth={1} dashed dashSize={0.06} gapSize={0.05} />
      <Line points={racePts} color={p.accent} lineWidth={2.4} />
      <lineSegments>
        <bufferGeometry ref={rays}>
          <bufferAttribute attach="attributes-position" args={[buf.seg, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={p.accent} transparent opacity={0.22} />
      </lineSegments>
      <points>
        <bufferGeometry ref={dots}>
          <bufferAttribute attach="attributes-position" args={[buf.hit, 3]} />
        </bufferGeometry>
        <pointsMaterial color={p.accent} size={0.035} sizeAttenuation />
      </points>
      <group ref={car}>
        <Car p={p} />
      </group>
    </>
  );
}

export default function TrackScene({ onReady }: { onReady?: () => void }) {
  const [p, setP] = useState<Palette | null>(null);
  const [moving, setMoving] = useState(true);
  const [visible, setVisible] = useState(true);
  const [coarse, setCoarse] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mqDark = window.matchMedia('(prefers-color-scheme: dark)');
    const mqMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => {
      setP(readPalette());
      setMoving(!mqMotion.matches);
    };
    sync();
    setCoarse(window.matchMedia('(pointer: coarse)').matches);
    mqDark.addEventListener('change', sync);
    mqMotion.addEventListener('change', sync);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '100px' });
    if (wrap.current) io.observe(wrap.current);
    return () => {
      mqDark.removeEventListener('change', sync);
      mqMotion.removeEventListener('change', sync);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0" style={{ touchAction: coarse ? 'pan-y' : 'none' }}>
      {p && (
        <Canvas
          frameloop={visible && moving ? 'always' : 'demand'}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [2.4, 2.7, 2.95], fov: 34 }}
          onCreated={() => onReady?.()}
          aria-hidden
        >
          <Scene p={p} moving={moving} />
          <OrbitControls
            enabled={!coarse}
            enablePan={false}
            enableZoom={false}
            enableDamping
            minPolarAngle={0.25}
            maxPolarAngle={1.32}
            target={[0, 0, 0]}
          />
        </Canvas>
      )}
    </div>
  );
}
