import Link from 'next/link';
import type { WorkMeta } from '@/lib/content';

/** Drawing-index style list of case studies: year, title and summary, role. */
export default function WorkList({ items }: { items: WorkMeta[] }) {
  return (
    <ul className="mt-4 p-0" style={{ listStyle: 'none' }}>
      {items.map((w) => (
        <li key={w.slug} className="rule-bottom">
          <Link
            href={`/work/${w.slug}/`}
            className="group grid gap-x-8 gap-y-1 py-5 no-underline sm:grid-cols-[6.5rem_1fr] lg:grid-cols-[6.5rem_1fr_15rem]"
          >
            <span className="t-note pt-1">{w.year}</span>
            <span>
              <span className="t-h3 block group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
                {w.title}
              </span>
              <span className="t-muted mt-1 block max-w-[64ch]">{w.summary}</span>
            </span>
            <span className="t-small sm:col-start-2 lg:col-start-auto lg:pt-1">
              {w.role}
              {w.org ? <span className="t-muted block">{w.org}</span> : null}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
