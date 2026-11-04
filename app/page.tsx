import Link from 'next/link';
import HeroFigure from '@/components/HeroFigure';
import TrackMap from '@/components/TrackMap';
import WorkList from '@/components/WorkList';
import { getLog, getWork } from '@/lib/content';
import { site } from '@/lib/site';

export default function Home() {
  const work = getWork();
  const log = getLog().slice(0, 3);

  return (
    <>
      <section className="sheet grid items-center gap-x-12 gap-y-10 pt-14 pb-20 lg:grid-cols-12 lg:pt-20">
        <div className="lg:col-span-5">
          <h1 className="t-display max-w-[13ch]">I build the robots I ship specs for.</h1>
          <p className="t-lead mt-6 max-w-[46ch]">
            I&apos;m Ryan Huang, a robotics product and program manager finishing my MBA at UCLA Anderson. I
            solo-built an autonomous race car from the parts list up, and spent five years running public
            infrastructure programs as large as $3.3B.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={site.resumes.pm} download>
              Download PM resume
            </a>
            <a className="btn btn-secondary" href={site.resumes.tpm} download>
              Download TPM resume
            </a>
          </div>
        </div>

        <figure className="m-0 lg:col-span-7">
          <div className="figure-frame">
            <HeroFigure fallback={<TrackMap className="h-full w-full" />} />
          </div>
          <figcaption className="t-note mt-3 max-w-[70ch]">
            Fig. 1. The room my F1TENTH car mapped with its own LiDAR, rebuilt in 3D. The highlighted loop is the
            minimum-curvature raceline it drives, and the rays are a scan simulated against the real map. On a
            desktop, drag to rotate.
          </figcaption>
        </figure>
      </section>

      <section className="sheet pb-20" aria-labelledby="work-h">
        <div className="rule-top flex items-baseline justify-between gap-6 pt-6">
          <h2 id="work-h" className="t-h2">
            Work
          </h2>
          <Link href="/work/" className="link t-small">
            All case studies
          </Link>
        </div>
        <WorkList items={work} />
      </section>

      <section className="sheet grid gap-x-12 gap-y-14 pb-6 lg:grid-cols-12">
        <div className="lg:col-span-5" aria-labelledby="now-h">
          <div className="rule-top pt-6">
            <h2 id="now-h" className="t-h2">
              Now
            </h2>
            <ul className="mt-6 space-y-4 p-0" style={{ listStyle: 'none' }}>
              <li>Graduate student researcher in Prof. Yuchen Cui&apos;s Robot Intelligence Lab at UCLA.</li>
              <li>Leading a 5-person UCLA Anderson capstone with Avride on autonomous delivery robots.</li>
              <li>Starting Georgia Tech&apos;s MS in Computer Science, robotics specialization, in spring 2027.</li>
              <li>Looking for full-time robotics product and program roles from summer 2027.</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7" aria-labelledby="log-h">
          <div className="rule-top flex items-baseline justify-between gap-6 pt-6">
            <h2 id="log-h" className="t-h2">
              Build log
            </h2>
            <Link href="/log/" className="link t-small">
              All entries
            </Link>
          </div>
          <ul className="mt-4 p-0" style={{ listStyle: 'none' }}>
            {log.map((e) => (
              <li key={e.slug} className="rule-bottom py-4">
                <Link href={`/log/${e.slug}/`} className="group block no-underline">
                  <span className="t-note">{e.displayDate}</span>
                  <span className="t-h3 mt-1 block group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
                    {e.title}
                  </span>
                  <span className="t-small t-muted mt-1 block">{e.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
