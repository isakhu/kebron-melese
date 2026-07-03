import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-container flex min-h-[70vh] flex-col items-center justify-center text-center py-24">
      <p className="text-sm uppercase tracking-[0.32em] text-brand/70">Page not found</p>
      <h1 className="mt-6 text-5xl font-semibold text-brand">404</h1>
      <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
        The page you are looking for may have moved or is unavailable. Return to the portfolio homepage to continue exploring.
      </p>
      <Link href="#top" className="mt-8 inline-flex rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark">
        Return home
      </Link>
    </div>
  );
}
