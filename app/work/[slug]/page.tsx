import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { readingTime, renderMDX } from '@/components/mdx';
import Progress from '@/components/Progress';
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
  const src = getSource('work', slug).content;
  const body = await renderMDX(src);
  const mins = readingTime(src);

  const meta: [string, React.ReactNode][] = [
    ['Role', w.org ? `${w.role}, ${w.org}` : w.role],
    ['Period', w.period],
  ];
  if (w.stack?.length) meta.push(['Stack', w.stack.join(', ')]);
  if (w.links?.length)
    meta.push([
      'Links',
      <span key="l" className="flex flex-wrap gap-x-4">
        {w.links.map((l) => (
          <a key={l.href} href={l.href} className="ul" target="_blank" rel="noopener">
            {l.label}
          </a>
        ))}
      </span>,
    ]);

  meta.push(['Reading', `${mins} min`]);

  return (
    <article>
      <Progress />
      <Link href="/" className="muted ul text-[14px] no-underline">
        Ryan Huang
      </Link>
      <h1 className="mt-10 mb-0 text-[26px] leading-tight font-semibold tracking-[-0.02em]">{w.title}</h1>
      <p className="muted mt-3 mb-0">{w.summary}</p>

      {w.stats?.length ? (
        <div className="stats" role="list" aria-label="Key numbers">
          {w.stats.map((x) => (
            <div key={x.value + x.label} className="stat" role="listitem">
              <b>{x.value}</b>
              <span>{x.label}</span>
            </div>
          ))}
        </div>
      ) : null}

      <dl className="mt-8 mb-0 grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-1.5 text-[14.5px]">
        {meta.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="muted">{k}</dt>
            <dd className="m-0">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="prose mt-2">{body}</div>

      <nav className="mt-16" aria-label="Next case study">
        <span className="muted text-[13px]">Next</span>
        <Link href={`/work/${next.slug}/`} className="ul mt-1 block w-fit font-medium">
          {next.title}
        </Link>
      </nav>
      <Footer />
    </article>
  );
}
