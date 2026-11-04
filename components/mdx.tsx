import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Figure from './Figure';
import Pipeline from './Pipeline';
import TrackMap, { TrackLegend } from './TrackMap';
import VideoFacade from './VideoFacade';

const components = {
  Figure,
  Pipeline,
  TrackMap: () => <TrackMap className="block h-auto w-full" />,
  TrackLegend,
  Video: VideoFacade,
  Videos: ({ children }: { children: React.ReactNode }) => (
    <div className="not-prose my-8 grid gap-6 sm:grid-cols-2">{children}</div>
  ),
};

export async function renderMDX(source: string) {
  const { content } = await compileMDX({
    source,
    components,
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return content;
}
