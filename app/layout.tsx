import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/archivo/standard.css';
import '@fontsource-variable/martian-mono/standard.css';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import TitleBlock from '@/components/TitleBlock';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name}, robotics product and program manager`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name}, robotics product and program manager`,
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: '/favicon.svg' },
  alternates: { canonical: '/' },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f3f5f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0f2a4d' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <TitleBlock />
      </body>
    </html>
  );
}
