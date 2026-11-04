import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Footer from '@/components/Footer';
import { readingTime, renderMDX } from '@/components/mdx';
import Progress from '@/components/Progress';
import { getLog, getSource, getWork } from '@/lib/content';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getLog().map((e) => ({ slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = getLog().find((x) => x.slug === slug);
  if (!e) return {};
  return { title: e.title, description: e.summary, alternates: { canonical: `/log/${slug}/` } };
}

export default async function LogEntry({ params }: Props) {
  const { slug } = await params;
  const e = getLog().find((x) => x.slug === slug);
  if (!e) notFound();
  const project = e.project ? getWork().find((w) => w.slug === e.project) : undefined;
  const src = getSource('log', slug).content;
  const body = await renderMDX(src);
  const mins = readingTime(src);

  return (
    <article>
      <Progress />
      <Link href="/" className="muted ul text-[14px] no-underline">
        Ryan Huang
      </Link>
      <h1 className="mt-10 mb-0 text-[26px] leading-tight font-semibold tracking-[-0.02em]">{e.title}</h1>
      <p className="muted mt-3 mb-0 text-[14.5px]">
        {e.displayDate}, {mins} min read
        {project ? (
          <>
            {', '}
            <Link className="ul" href={`/work/${project.slug}/`}>
              {project.title}
            </Link>
          </>
        ) : null}
      </p>
      <div className="prose mt-6">
        <p className="muted">{e.summary}</p>
        {body}
      </div>
      <Footer />
    </article>
  );
}
