'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState, type ReactNode } from 'react';

const TrackScene = dynamic(() => import('./TrackScene'), { ssr: false });

function hasWebGL() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

/**
 * Server-rendered top-view SVG shows first (and stays for no-WebGL visitors);
 * the 3D scene of the same track loads on top of it.
 */
export default function HeroFigure({ fallback }: { fallback: ReactNode }) {
  const [webgl, setWebgl] = useState(false);
  const [ready, setReady] = useState(false);
  useEffect(() => setWebgl(hasWebGL()), []);

  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-hover max-sm:aspect-[4/3] [@media(pointer:fine)]:cursor-grab [@media(pointer:fine)]:active:cursor-grabbing">
      <div
        className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-500"
        style={{ opacity: ready ? 0 : 1 }}
        aria-hidden={ready}
      >
        {fallback}
      </div>
      {webgl && <TrackScene onReady={() => setReady(true)} />}
    </div>
  );
}
