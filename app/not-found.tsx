import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <h1 className="m-0 text-[20px] font-semibold">Page not found</h1>
      <p className="muted mt-2">
        This page doesn&apos;t exist.{' '}
        <Link href="/" className="ul text-ink">
          Go to the home page
        </Link>
        .
      </p>
    </>
  );
}
