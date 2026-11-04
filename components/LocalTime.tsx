'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from './Icons';

const fmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', minute: '2-digit' });
const hourFmt = new Intl.DateTimeFormat('en-US', { timeZone: 'America/Los_Angeles', hour: 'numeric', hourCycle: 'h23' });

/** Ryan's local time with a sun or moon, so a recruiter knows whether he's awake. */
export default function LocalTime() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);
  const h = now ? Number(hourFmt.format(now)) : 12;
  const day = h >= 7 && h < 19;
  return (
    <span className="num inline-flex items-center gap-1.5">
      {now ? day ? <Sun /> : <Moon /> : null}
      Los Angeles{now ? `, ${fmt.format(now)}` : ''}
    </span>
  );
}
