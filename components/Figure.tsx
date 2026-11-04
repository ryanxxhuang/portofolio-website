import type { ReactNode } from 'react';

export default function Figure({ caption, children }: { n?: string; caption: string; children: ReactNode }) {
  return (
    <figure className="!my-8">
      <div>{children}</div>
      <figcaption className="muted mt-2 text-[13px]">{caption}</figcaption>
    </figure>
  );
}
