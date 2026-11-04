import Link from 'next/link';
import Footer from '@/components/Footer';
import { External, Play } from '@/components/Icons';
import Name from '@/components/Name';
import Links, { ResumeButton } from '@/components/Links';
import Rows from '@/components/Rows';
import { getLog } from '@/lib/content';
import { education, experience, highlights, projects } from '@/lib/site';

export default function Home() {
  const log = getLog();
  const i = (n: number) => ({ ['--i' as string]: n });

  return (
    <>
      <header className="rise" style={i(0)}>
        <Name />
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
        <Link href="/work/f1tenth/" className="group block overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/f1tenth-hero.jpg"
            srcSet="/f1tenth-hero-sm.jpg 600w, /f1tenth-hero.jpg 1200w"
            sizes="(max-width: 640px) 100vw, 620px"
            alt="The F1TENTH car Ryan built, with a LiDAR sensor on the front and a Jetson computer behind it"
            width={1200}
            height={1600}
            className="block h-[300px] w-full object-cover object-[center_62%] transition duration-500 group-hover:scale-[1.015] max-sm:h-[240px]"
          />
        </Link>
        <a
          className="chip absolute bottom-[38px] left-3"
          href="https://www.youtube.com/watch?v=QS4dnrDDZss"
          target="_blank"
          rel="noopener"
        >
          <Play /> Watch it drive
          <External />
        </a>
        <figcaption className="mt-2 flex flex-wrap justify-between gap-x-4 gap-y-0.5 text-[13px]">
          <span className="muted">The F1TENTH car I built on my own, LiDAR up front.</span>
          <span className="faint">Jetson Orin Nano, RPLIDAR A2M12, VESC 6, ROS 2</span>
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
