type P = { className?: string };
const base = { width: 14, height: 14, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

export const Download = (p: P) => (
  <svg {...base} className={p.className}><path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 20h14" /></svg>
);
export const Mail = (p: P) => (
  <svg {...base} className={p.className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
);
export const Check = (p: P) => (
  <svg {...base} className={p.className}><path d="m5 12.5 4.5 4.5L19 7.5" /></svg>
);
export const LinkedIn = (p: P) => (
  <svg {...base} className={p.className}><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M8 10.5V16M8 7.5v.01M12 16v-5.5M12 13c0-1.7 1-2.6 2.3-2.6 1.4 0 2.2.9 2.2 2.6V16" /></svg>
);
export const GitHub = (p: P) => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" aria-hidden className={p.className}>
    <path d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.3 1.1 2.9.9.1-.7.3-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.2 10.2 0 0 0 22 12.2C22 6.6 17.5 2 12 2Z" />
  </svg>
);
export const Play = (p: P) => (
  <svg width={10} height={12} viewBox="0 0 10 12" fill="currentColor" aria-hidden className={p.className}><path d="M0 0l10 6-10 6z" /></svg>
);
export const Sun = (p: P) => (
  <svg {...base} className={p.className}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
);
export const Moon = (p: P) => (
  <svg {...base} className={p.className}><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" /></svg>
);
export const External = (p: P) => (
  <svg width={11} height={11} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={`ext ${p.className ?? ''}`}>
    <path d="M8 16 16 8M9 8h7v7" />
  </svg>
);
export const ArrowUp = (p: P) => (
  <svg {...base} className={p.className}><path d="M12 19V5m0 0-6 6m6-6 6 6" /></svg>
);
