import CopyEmail from './CopyEmail';
import { site } from '@/lib/site';

export default function Links() {
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1 text-[15px]">
      <a className="ul" href={site.resumes.pm}>
        Resume (PM)
      </a>
      <a className="ul" href={site.resumes.tpm}>
        Resume (TPM)
      </a>
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
