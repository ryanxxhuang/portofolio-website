import Link from 'next/link';
import type { WorkMeta } from '@/lib/content';

export default function WorkList({ items }: { items: WorkMeta[] }) {
  return (
    <ul className="rows">
      {items.map((w) => (
        <li key={w.slug}>
          <Link href={`/work/${w.slug}/`} className="row">
            <span>
              <span className="block font-medium">{w.title}</span>
              <span className="muted block text-[15px]">{w.role}</span>
            </span>
            <span className="muted num text-[14px]">{w.year}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
