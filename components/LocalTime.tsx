'use client';

import { useEffect, useState } from 'react';

const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' });

/** Ryan's local time, so a recruiter knows whether he's awake. */
export default function LocalTime() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const tick = () => setT(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return <span className="num">Los Angeles{t ? `, ${t}` : ''}</span>;
}
