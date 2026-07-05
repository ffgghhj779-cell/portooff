import Link from 'next/link';
import { Navbar } from '@/components/Navbar';

export default function NotFound() {
  return (
    <>
      <Navbar variant="dark" />
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-black px-6 text-center text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/40">404</p>
        <h1 className="heading-display type-section font-bold tracking-tighter">
          Page not found
        </h1>
        <p className="max-w-md text-white/55">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn-pill mt-4 border border-white/25 text-white hover:bg-white hover:text-black"
        >
          Return home
        </Link>
      </div>
    </>
  );
}
