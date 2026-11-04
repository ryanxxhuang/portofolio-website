'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const nav = [
  { href: '/work/', label: 'Work' },
  { href: '/log/', label: 'Build log' },
  { href: '/resume/', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function SiteHeader() {
  const path = usePathname() || '/';
  return (
    <header className="sheet">
      <div className="rule-bottom flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 py-5">
        <Link href="/" className="text-[19px] font-[660] no-underline [font-stretch:76%]">
          Ryan Huang
        </Link>
        <nav aria-label="Main">
          <ul className="m-0 flex list-none flex-wrap gap-x-6 gap-y-1 p-0 text-[15px]">
            {nav.map((n) => {
              const active = n.href !== '#contact' && path.startsWith(n.href);
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? 'page' : undefined}
                    className={`no-underline underline-offset-[6px] hover:underline ${
                      active ? 'underline decoration-2 decoration-accent' : ''
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
