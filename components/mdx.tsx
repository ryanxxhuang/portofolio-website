import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Figure from './Figure';
import TrackMap, { TrackLegend } from './TrackMap';
import VideoFacade from './VideoFacade';

const components = {
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
    options: { mdxOptions: { remarkPlugins: [remarkGfm] } },
  });
  return content;
}
