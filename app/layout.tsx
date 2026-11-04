import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/geist/index.css';
import './globals.css';
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
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#101010' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main id="top" className="page">
          {children}
        </main>
      </body>
    </html>
  );
}
