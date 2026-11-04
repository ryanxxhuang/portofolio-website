import Link from 'next/link';
import Footer from '@/components/Footer';
import Links from '@/components/Links';
import WorkList from '@/components/WorkList';
import { getLog, getWork } from '@/lib/content';

export default function Home() {
  const work = getWork();
  const log = getLog();

  return (
    <>
      <header className="rise" style={{ ['--i' as string]: 0 }}>
        <h1 className="m-0 text-[20px] font-semibold tracking-[-0.01em]">Ryan Huang</h1>
        <p className="muted m-0">Robotics product and program manager</p>
      </header>

      <section className="rise mt-7 space-y-4" style={{ ['--i' as string]: 1 }}>
        <p>
          I&apos;m finishing my MBA at UCLA Anderson and looking for full-time robotics PM and TPM roles from summer
          2027.
        </p>
        <p>
          I solo-built an autonomous race car, from the parts list to model predictive control, and spent five years
          running public infrastructure programs as large as $3.3B. Before business school, I was a product manager on
          an AI support platform.
        </p>
        <div className="pt-2">
          <Links />
        </div>
      </section>

      <figure className="rise m-0 mt-12" style={{ ['--i' as string]: 2 }}>
        <Link href="/work/f1tenth/" className="group block overflow-hidden rounded-lg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/f1tenth-hero.jpg"
            srcSet="/f1tenth-hero-sm.jpg 600w, /f1tenth-hero.jpg 1200w"
            sizes="(max-width: 640px) 100vw, 620px"
            alt="The F1TENTH car Ryan built, with a LiDAR sensor on the front and a Jetson computer behind it"
            width={1200}
            height={1600}
            className="block h-[340px] w-full object-cover object-[center_62%] transition duration-500 group-hover:scale-[1.015] max-sm:h-[260px]"
          />
        </Link>
        <figcaption className="muted mt-2 text-[13px]">The F1TENTH car I built, LiDAR up front.</figcaption>
      </figure>

      <section className="rise" style={{ ['--i' as string]: 3 }}>
        <h2 className="label">Work</h2>
        <WorkList items={work} />
      </section>

      <section className="rise" style={{ ['--i' as string]: 4 }}>
        <h2 className="label">Writing</h2>
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
