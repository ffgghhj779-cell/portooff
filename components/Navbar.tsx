'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavbarProps = {
  variant?: 'auto' | 'light' | 'dark';
};

export function Navbar({ variant = 'auto' }: NavbarProps) {
  const pathname = usePathname();
  const isLight =
    variant === 'light' || pathname === '/contact' || pathname === '/privacy';

  const textClass = isLight ? 'text-black' : 'text-white mix-blend-difference';

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 px-6 py-6 md:px-12">
      <div className="section-shell flex items-center justify-between !px-0">
        <Link
          href="/"
          className={`font-display pointer-events-auto text-xl font-bold lowercase tracking-tighter md:text-2xl ${textClass}`}
        >
          tasami
          <span className="ml-2 hidden text-sm font-normal uppercase tracking-[0.2em] opacity-60 md:inline">
            تسامي
          </span>
        </Link>

        <div
          className={`pointer-events-auto hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.16em] md:flex ${textClass}`}
        >
          <Link href="/projects" className="transition-opacity duration-200 hover:opacity-60">
            Work
          </Link>
          <Link href="/#services" className="transition-opacity duration-200 hover:opacity-60">
            Services
          </Link>
          <Link href="/contact" className="transition-opacity duration-200 hover:opacity-60">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
