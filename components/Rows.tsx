import Link from 'next/link';

type Item = { role: string; org: string; dates: string; href?: string };

/** Resume-style rows: role and organization on the left, dates on the right. */
export default function Rows({ items }: { items: Item[] }) {
  return (
    <ul className="rows">
      {items.map((x) => {
        const inner = (
          <>
            <span>
              <span className="block font-medium">{x.role}</span>
              <span className="muted block text-[15px]">{x.org}</span>
            </span>
            <span className="muted num text-right text-[14px] whitespace-nowrap">{x.dates}</span>
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
