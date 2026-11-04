import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { renderMDX } from '@/components/mdx';
import { getSource, getWork } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getWork().map((w) => ({ slug: w.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork().find((x) => x.slug === slug);
  if (!w) return {};
  return { title: w.title, description: w.summary, alternates: { canonical: `/work/${slug}/` } };
}

export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  const all = getWork();
  const i = all.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const w = all[i];
  const next = all[(i + 1) % all.length];
  const body = await renderMDX(getSource('work', slug).content);

  const specs: { k: string; v: React.ReactNode }[] = [
    { k: 'Role', v: w.org ? `${w.role}, ${w.org}` : w.role },
    { k: 'Period', v: w.period },
  ];
  if (w.stack?.length) specs.push({ k: 'Stack', v: w.stack.join(', ') });
  if (w.links?.length)
    specs.push({
      k: 'Links',
      v: (
        <span className="flex flex-wrap gap-x-4">
          {w.links.map((l) => (
            <a key={l.href} href={l.href} className="link" target="_blank" rel="noopener">
              {l.label}
            </a>
          ))}
        </span>
      ),
    });

  return (
    <article className="sheet pt-10">
      <Link href="/work/" className="link t-small">
        All work
      </Link>
      <h1 className="t-h1 mt-6 max-w-[20ch]">{w.title}</h1>
      <p className="t-lead mt-4 max-w-[58ch]">{w.summary}</p>

      <dl className="mt-8 grid max-w-[68ch] border border-ink sm:grid-cols-[7.5rem_1fr]">
        {specs.map((s, n) => (
          <div key={s.k} className={`contents`}>
            <dt className={`t-note px-4 pt-3 sm:py-3 ${n ? 'sm:border-t border-rule' : ''}`}>{s.k}</dt>
            <dd className={`m-0 px-4 pb-3 sm:py-3 ${n ? 'sm:border-t border-rule' : ''}`}>{s.v}</dd>
          </div>
        ))}
      </dl>

      <div className="prose-sheet mt-4">{body}</div>

      <nav className="rule-top mt-20 max-w-[68ch] pt-6" aria-label="Next case study">
        <span className="t-note">Next case study</span>
        <Link href={`/work/${next.slug}/`} className="t-h3 mt-1 block hover:underline hover:decoration-accent hover:underline-offset-4">
          {next.title}
        </Link>
      </nav>
    </article>
  );
}
