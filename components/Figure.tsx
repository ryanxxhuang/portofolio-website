import type { ReactNode } from 'react';

export default function Figure({ n, caption, children, wide }: { n: string; caption: string; children: ReactNode; wide?: string }) {
  return (
    <figure className={`not-prose my-10 ${wide ? 'wide' : ''}`}>
      <div className="figure-frame p-4 sm:p-6">{children}</div>
      <figcaption className="t-note mt-3 max-w-[72ch]">
        Fig. {n}. {caption}
      </figcaption>
    </figure>
  );
}
