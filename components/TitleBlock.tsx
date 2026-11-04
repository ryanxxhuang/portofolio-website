'use client';

import { usePathname } from 'next/navigation';
import { site, sheets } from '@/lib/site';

function sheetNo(path: string) {
  let n = 1;
  sheets.forEach((s, i) => {
    if (s.href !== '/' && path.startsWith(s.href)) n = i + 1;
  });
  return n;
}

/** The footer is an engineering-drawing title block: who drew it, how to reach him, which sheet. */
export default function TitleBlock() {
  const path = usePathname() || '/';
  const cell = 'border-rule p-4';
  const label = 't-note block';
  return (
    <footer id="contact" className="sheet mt-28 mb-10">
      <h2 className="t-h2 mb-2">Contact</h2>
      <p className="t-muted mb-6 max-w-[56ch]">
        Hiring for robotics product or program roles starting summer 2027? Email is fastest.
      </p>
      <div className="grid border border-ink bg-paper sm:grid-cols-[1.4fr_1fr_1fr] lg:grid-cols-[1.6fr_1.2fr_1fr_1fr]">
        <div className={`${cell} border-b sm:col-span-3 lg:col-span-1 lg:row-span-2 lg:border-r lg:border-b-0`}>
          <span className={label}>Drawn by</span>
          <span className="t-h2 mt-1 block">{site.name}</span>
          <span className="t-muted mt-1 block">{site.role}</span>
        </div>
        <div className={`${cell} border-b sm:border-r`}>
          <span className={label}>Email</span>
          <a className="link break-all" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <div className={`${cell} border-b sm:border-r`}>
          <span className={label}>LinkedIn</span>
          <a className="link" href={site.linkedin} rel="me noopener" target="_blank">
            ching-yu-huang
          </a>
        </div>
        <div className={`${cell} border-b`}>
          <span className={label}>GitHub</span>
          <a className="link" href={site.github} rel="me noopener" target="_blank">
            ryanxxhuang
          </a>
        </div>
        <div className={`${cell} border-b sm:border-r sm:border-b-0`}>
          <span className={label}>Location</span>
          {site.location}
        </div>
        <div className={`${cell} border-b sm:border-r sm:border-b-0`}>
          <span className={label}>Revision</span>
          {site.revision}
        </div>
        <div className={cell}>
          <span className={label}>Sheet</span>
          {sheetNo(path)} of {sheets.length}
        </div>
      </div>
    </footer>
  );
}
