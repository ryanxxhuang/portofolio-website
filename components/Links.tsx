import CopyEmail from './CopyEmail';
import { Download, GitHub, LinkedIn } from './Icons';
import { site } from '@/lib/site';

export function ResumeButton() {
  return (
    <a className="btn btn-primary" href={site.resume} download>
      <Download />
      Download resume
      <span className="btn-meta">PDF, 1 page</span>
    </a>
  );
}

export default function Links({ resume = true }: { resume?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[15px]">
      {resume ? (
        <a className="link-i" href={site.resume}>
          <Download />
          <span className="ul">Resume</span>
        </a>
      ) : null}
      <CopyEmail email={site.email} />
      <a className="link-i" href={site.linkedin} target="_blank" rel="me noopener">
        <LinkedIn />
        <span className="ul">LinkedIn</span>
      </a>
      <a className="link-i" href={site.github} target="_blank" rel="me noopener">
        <GitHub />
        <span className="ul">GitHub</span>
      </a>
    </div>
  );
}
