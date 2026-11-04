import type { Metadata } from 'next';
import Link from 'next/link';
import { getLog } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Build log',
  description: 'Engineering notes from building robots: what broke, what I measured, and why I chose what I chose.',
  alternates: { canonical: '/log/' },
};

export default function LogIndex() {
  return (
    <section className="sheet pt-14">
      <h1 className="t-h1">Build log</h1>
      <p className="t-lead t-muted mt-4 max-w-[52ch]">
        Notes from the bench: what broke, what I measured, and why I picked one design over another.
      </p>
      <ul className="mt-10 p-0" style={{ listStyle: 'none' }}>
        {getLog().map((e) => (
          <li key={e.slug} className="rule-bottom">
            <Link href={`/log/${e.slug}/`} className="group grid gap-x-8 gap-y-1 py-5 no-underline sm:grid-cols-[6.5rem_1fr]">
              <span className="t-note pt-1">{e.displayDate}</span>
              <span>
                <span className="t-h3 block group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
                  {e.title}
                </span>
                <span className="t-muted mt-1 block max-w-[64ch]">{e.summary}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
