import LocalTime from './LocalTime';
import Links from './Links';
import { site } from '@/lib/site';

export default function Footer({ links = true }: { links?: boolean }) {
  return (
    <footer className="mt-20 border-t border-line pt-6 text-[13px] text-ink-2">
      {links ? (
        <div className="mb-4 text-ink">
          <Links />
        </div>
      ) : null}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <LocalTime />
        <span>
          Updated {site.updated}.{' '}
          <a className="ul" href={site.repo} target="_blank" rel="noopener">
            Source on GitHub
          </a>
        </span>
      </div>
    </footer>
  );
}
