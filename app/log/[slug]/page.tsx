import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { renderMDX } from '@/components/mdx';
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
  const body = await renderMDX(getSource('log', slug).content);

  return (
    <article className="sheet pt-10">
      <Link href="/log/" className="link t-small">
        All build log entries
      </Link>
      <p className="t-note mt-6">
        {e.displayDate}
        {project ? (
          <>
            {', '}
            <Link className="link" href={`/work/${project.slug}/`}>
              {project.title}
            </Link>
          </>
        ) : null}
      </p>
      <h1 className="t-h1 mt-2 max-w-[22ch]">{e.title}</h1>
      <p className="t-lead mt-4 max-w-[58ch]">{e.summary}</p>
      <div className="prose-sheet mt-2">{body}</div>
    </article>
  );
}
