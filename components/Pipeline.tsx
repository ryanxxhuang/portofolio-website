const stages = [
  { name: 'SLAM', what: 'slam_toolbox pose graph with loop closure builds the map.' },
  { name: 'Localization', what: 'Particle filter, 4,000 particles, ray casting on the GPU.' },
  { name: 'Planning', what: 'Minimum-curvature raceline offline, Pure Pursuit online.' },
  { name: 'Control', what: 'Pure Pursuit or linear MPC (12 steps of 0.1 s) to the VESC.' },
];

export default function Pipeline() {
  return (
    <div className="my-8">
      <p className="t-note mb-3">In: LiDAR (RPLIDAR A2M12), wheel odometry from the VESC, IMU</p>
      <ol className="grid gap-px border border-rule bg-rule sm:grid-cols-4" style={{ listStyle: 'none', padding: 0 }}>
        {stages.map((s, i) => (
          <li key={s.name} className="m-0 bg-paper p-4">
            <span className="t-note">Stage {i + 1}</span>
            <div className="t-h3 mt-1">{s.name}</div>
            <p className="t-small t-muted mt-2">{s.what}</p>
          </li>
        ))}
      </ol>
      <p className="t-note mt-3">Out: speed and steering commands to the motor controller and servo</p>
    </div>
  );
}
