import Link from 'next/link';
import type { Entry } from '@/lib/site';

function tenure(start?: string, end?: string) {
  if (!start || !end) return null;
  const [sy, sm] = start.split('-').map(Number);
  const [ey, em] = end.split('-').map(Number);
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mo${m > 1 ? 's' : ''}` : ''].filter(Boolean).join(' ');
}

/** Resume-style rows: monogram, role and organization, then dates and length. */
export default function Rows({ items }: { items: Entry[] }) {
  return (
    <ul className="rows">
      {items.map((x) => {
        const current = !!x.start && !x.end;
        const len = tenure(x.start, x.end);
        const inner = (
          <>
            <span className="flex items-start gap-3.5">
              <span className="mark" aria-hidden>
                {x.mark}
              </span>
              <span>
                <span className="block font-medium">{x.role}</span>
                <span className="muted block text-[15px]">{x.org}</span>
              </span>
            </span>
            <span className="num text-right text-[14px] whitespace-nowrap">
              <span className="muted block">
                {x.dates}
                {current ? ' – Present' : ''}
              </span>
              {current ? (
                <span className="now">
                  <i aria-hidden /> Current
                </span>
              ) : len ? (
                <span className="faint block text-[13px]">{len}</span>
              ) : null}
            </span>
          </>
        );
        return (
          <li key={x.role + x.org}>
            {x.href ? (
              <Link href={x.href} className="row">
                {inner}
              </Link>
            ) : (
              <div className="row row-static">{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
