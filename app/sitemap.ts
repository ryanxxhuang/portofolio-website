import type { MetadataRoute } from 'next';
import { getLog, getWork } from '@/lib/content';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['/', '/work/', '/log/', '/resume/'];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}` })),
    ...getWork().map((w) => ({ url: `${site.url}/work/${w.slug}/` })),
    ...getLog().map((e) => ({ url: `${site.url}/log/${e.slug}/` })),
  ];
}
