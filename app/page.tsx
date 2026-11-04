import Link from 'next/link';
import Footer from '@/components/Footer';
import HeroFigure from '@/components/HeroFigure';
import TrackMap from '@/components/TrackMap';
import { External, Play } from '@/components/Icons';
import Links, { ResumeButton } from '@/components/Links';
import Rows from '@/components/Rows';
import { getLog } from '@/lib/content';
import { education, experience, highlights, projects, site } from '@/lib/site';

export default function Home() {
  const log = getLog();
  const i = (n: number) => ({ ['--i' as string]: n });

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: 'Ching Yu Huang',
    jobTitle: 'Robotics product and program manager',
    description: site.description,
    url: site.url,
    image: `${site.url}/og.png`,
    sameAs: [site.linkedin, site.github],
    address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'UCLA Anderson School of Management' },
      { '@type': 'CollegeOrUniversity', name: 'National Chiao Tung University' },
      { '@type': 'CollegeOrUniversity', name: 'National Central University' },
    ],
    knowsAbout: ['Robotics', 'Product management', 'Technical program management', 'ROS 2', 'Autonomous vehicles', 'SLAM', 'Model predictive control'],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      <header className="rise" style={i(0)}>
        <h1 className="m-0 text-[20px] font-semibold tracking-[-0.01em]">Ryan Huang</h1>
        <p className="muted m-0">Robotics product and program manager</p>
      </header>

      <section className="rise mt-7 space-y-4" style={i(1)}>
        <p>
          UCLA Anderson MBA, class of 2027, starting Georgia Tech&apos;s MS in Computer Science (robotics) in spring
          2027. Five years of product and program management, now focused on robotics.
        </p>
        <p className="status">
          <i aria-hidden />
          Open to full-time robotics PM and TPM roles from June 2027
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2">
          <ResumeButton />
          <Links resume={false} />
        </div>
      </section>

      <section className="rise" style={i(2)}>
        <h2 className="label">
          Highlights <span className="count">{highlights.length}</span>
        </h2>
        <ul className="hl">
          {highlights.map((h) => (
            <li key={h.text}>
              <Link href={h.href}>{h.text}</Link>
            </li>
          ))}
        </ul>
      </section>

      <figure className="rise relative m-0 mt-10" style={i(3)}>
        <div className="relative">
          <HeroFigure fallback={<TrackMap className="h-full w-full" />} />
          <a
            className="chip absolute bottom-3 left-3"
          href="https://www.youtube.com/watch?v=QS4dnrDDZss"
          target="_blank"
          rel="noopener"
        >
            <Play /> Watch it drive
            <External />
          </a>
        </div>
        <figcaption className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-0.5 text-[13px]">
          <span className="muted">
            My F1TENTH car on its real LiDAR map, driving the optimized raceline.{' '}
            <span className="hidden [@media(pointer:fine)]:inline">Drag to rotate.</span>
          </span>
          <Link href="/work/f1tenth/" className="faint ul">
            How I built it
          </Link>
        </figcaption>
      </figure>

      <section className="rise" style={i(4)}>
        <h2 className="label">
          Experience <span className="count">{experience.length}</span>
        </h2>
        <Rows items={experience} />
      </section>

      <section className="rise" style={i(5)}>
        <h2 className="label">
          Projects <span className="count">{projects.length}</span>
        </h2>
        <Rows items={projects} />
      </section>

      <section className="rise" style={i(6)}>
        <h2 className="label">
          Education <span className="count">{education.length}</span>
        </h2>
        <Rows items={education} />
      </section>

      <section className="rise" style={i(7)}>
        <h2 className="label">
          Writing <span className="count">{log.length}</span>
        </h2>
        <ul className="rows">
          {log.map((e) => (
            <li key={e.slug}>
              <Link href={`/log/${e.slug}/`} className="row">
                <span className="font-medium">{e.title}</span>
                <span className="muted num text-[14px]">{e.date.slice(0, 4)}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer links={false} />
    </>
  );
}
