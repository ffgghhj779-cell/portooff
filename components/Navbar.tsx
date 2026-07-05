'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 py-6 md:px-12">
      <div className="section-shell flex items-center justify-between !px-0">
        <Link
          href="/"
          className="font-display pointer-events-auto text-xl font-bold lowercase tracking-tight text-white mix-blend-difference md:text-2xl"
        >
          tasami
          <span className="ml-2 hidden text-sm font-normal uppercase tracking-[0.2em] opacity-60 md:inline">
            تسامي
          </span>
        </Link>

        <div className="pointer-events-auto hidden items-center gap-10 text-sm font-medium uppercase tracking-[0.2em] text-white mix-blend-difference md:flex">
          <Link href="#projects" className="transition-opacity hover:opacity-60">
            Work
          </Link>
          <Link href="#services" className="transition-opacity hover:opacity-60">
            Services
          </Link>
          <Link href="/contact" className="transition-opacity hover:opacity-60">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
