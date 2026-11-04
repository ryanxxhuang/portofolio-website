import LocalTime from './LocalTime';
import Links from './Links';

export default function Footer({ links = true }: { links?: boolean }) {
  return (
    <footer className="mt-20 flex flex-col gap-3 border-t border-line pt-6 text-[13px] text-ink-2 sm:flex-row sm:items-baseline sm:justify-between">
      <LocalTime />
      {links ? (
        <div className="text-ink">
          <Links />
        </div>
      ) : null}
    </footer>
  );
}
