import { compileMDX } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import Figure from './Figure';
import TrackMap, { TrackLegend } from './TrackMap';
import VideoFacade from './VideoFacade';

type H = React.HTMLAttributes<HTMLHeadingElement>;

/** Headings get a "#" link on hover so a section can be shared directly. */
const anchored = (Tag: 'h2' | 'h3') =>
  function Heading({ id, children, ...rest }: H) {
    return (
      <Tag id={id} className="anchored" {...rest}>
        {children}
        {id ? (
          <a href={`#${id}`} className="anchor" aria-label="Link to this section">
            #
          </a>
        ) : null}
      </Tag>
    );
  };

const components = {
  h2: anchored('h2'),
  h3: anchored('h3'),
  Figure,
  TrackMap: () => <TrackMap className="block h-auto w-full" />,
  TrackLegend,
  Video: VideoFacade,
  Videos: ({ children }: { children: React.ReactNode }) => (
    <div className="!my-8 grid gap-5 sm:grid-cols-2">{children}</div>
  ),
};

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components,
    options: { mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } },
  });
  return content;
}

/** Rough reading time at 230 words per minute. */
export function readingTime(source: string) {
  const words = source.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}
