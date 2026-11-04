'use client';

import { useEffect, useRef } from 'react';

/** A hairline at the top of long pages that fills as you read. */
export default function Progress() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${p})`;
    };
    on();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
    };
  }, []);
  return <div ref={bar} className="progress" aria-hidden />;
}
