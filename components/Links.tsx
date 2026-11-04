import CopyEmail from './CopyEmail';
import { site } from '@/lib/site';

export function ResumeButtons() {
  return (
    <div className="flex flex-wrap gap-2.5">
      <a className="btn btn-primary" href={site.resumes.pm} download>
        Download PM resume
      </a>
      <a className="btn" href={site.resumes.tpm} download>
        Download TPM resume
      </a>
    </div>
  );
}

export default function Links({ resumes = true }: { resumes?: boolean }) {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
      {resumes ? (
        <>
          <a className="ul" href={site.resumes.pm}>
            Resume (PM)
          </a>
          <a className="ul" href={site.resumes.tpm}>
            Resume (TPM)
          </a>
        </>
      ) : null}
      <CopyEmail email={site.email} />
      <a className="ul" href={site.linkedin} target="_blank" rel="me noopener">
        LinkedIn
      </a>
      <a className="ul" href={site.github} target="_blank" rel="me noopener">
        GitHub
      </a>
    </div>
  );
}
