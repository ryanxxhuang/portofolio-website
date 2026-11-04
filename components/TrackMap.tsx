import track from '@/data/track.json';

const RES = track.resolution;
const walls = track.occupied as number[][];
const race = track.raceline as number[][];
const rec = track.recorded as number[][];

// Map frame (x right, y up) -> SVG frame (x right, y down).
const X = (x: number) => x;
const Y = (y: number) => -y;

const pad = 0.12;
const xs = walls.map((p) => p[0]);
const ys = walls.map((p) => p[1]);
const minX = Math.min(...xs) - pad;
const maxX = Math.max(...xs) + pad;
const minY = Math.min(...ys) - pad;
const maxY = Math.max(...ys) + pad;
const scaleBarGap = 0.42;
const vb = [X(minX), Y(maxY), maxX - minX, maxY - minY + scaleBarGap];

const racePath =
  race.map((p, i) => `${i ? 'L' : 'M'}${X(p[0]).toFixed(3)} ${Y(p[1]).toFixed(3)}`).join('') + 'Z';
const recPoints = rec.map((p) => `${X(p[0]).toFixed(3)},${Y(p[1]).toFixed(3)}`).join(' ');

export default function TrackMap({ className }: { className?: string }) {
  const sbY = Y(minY) + 0.24;
  const sbX = X(minX) + 0.1;
  return (
    <svg
      viewBox={vb.map((n) => n.toFixed(3)).join(' ')}
      className={className}
      role="img"
      aria-labelledby="trk-title"
    >
      <title id="trk-title">
        Top view of the F1TENTH test track: walls from the SLAM map, the teleoperated recorded path, and the
        minimum-curvature raceline.
      </title>
      <g>
        {walls.map((p, i) => (
          <rect
            key={i}
            className="trk-wall"
            x={(X(p[0]) - RES / 2).toFixed(3)}
            y={(Y(p[1]) - RES / 2).toFixed(3)}
            width={RES}
            height={RES}
          />
        ))}
      </g>
      <polyline className="trk-recorded" points={recPoints} />
      <path className="trk-raceline" d={racePath} />
      <circle className="trk-start" cx={X(race[0][0])} cy={Y(race[0][1])} r={0.045} />
      {/* 1 m dimension line */}
      <g>
        <path className="trk-dim" d={`M${sbX} ${sbY}H${sbX + 1}`} />
        <path className="trk-dim" d={`M${sbX} ${sbY - 0.05}V${sbY + 0.05}M${sbX + 1} ${sbY - 0.05}V${sbY + 0.05}`} />
        <text className="trk-dim-text" x={sbX + 1.06} y={sbY + 0.035}>
          1 m
        </text>
      </g>
    </svg>
  );
}

export function TrackLegend() {
  return (
    <ul className="muted mt-3 flex flex-wrap gap-x-5 gap-y-1 p-0 text-[13px]" style={{ listStyle: 'none' }}>
      <li className="flex items-center gap-2">
        <span aria-hidden className="inline-block h-2.5 w-2.5 bg-ink-3" />
        Walls from the SLAM map
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden className="inline-block w-5 border-t border-dashed border-ink-2" />
        Path I drove by hand
      </li>
      <li className="flex items-center gap-2">
        <span aria-hidden className="inline-block w-5 border-t-2 border-ink" />
        Optimized raceline
      </li>
    </ul>
  );
}
