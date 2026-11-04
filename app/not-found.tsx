import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="sheet pt-20">
      <p className="t-note">Error 404</p>
      <h1 className="t-h1 mt-2">This sheet isn&apos;t in the set.</h1>
      <p className="t-lead t-muted mt-4 max-w-[48ch]">The page you followed doesn&apos;t exist. Start from the work index instead.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="btn btn-primary" href="/work/">
          Go to work
        </Link>
        <Link className="btn btn-secondary" href="/">
          Go home
        </Link>
      </div>
    </section>
  );
}
