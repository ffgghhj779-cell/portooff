'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/Logo';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

type NavbarProps = {
  variant?: 'auto' | 'light' | 'dark';
};

export function Navbar({ variant = 'auto' }: NavbarProps) {
  const pathname = usePathname();
  const t = useTranslations();
  const isLight =
    variant === 'light' || pathname === '/contact' || pathname === '/privacy';

  const textClass = 'text-white';

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12">
      <div className="section-shell flex items-center justify-between !px-0">
        {/* Logo */}
        <Link href="/" className="pointer-events-auto min-w-0 shrink">
          <Logo theme={isLight ? 'light' : 'dark'} showSlogan size="sm" />
        </Link>

        {/* Right side */}
        <div className="pointer-events-auto flex items-center gap-3 md:gap-6">
          {/* Language toggle — desktop only (on mobile it lives inside the Menu overlay) */}
          <div className="hidden md:flex">
            <LanguageToggle theme={isLight ? 'light' : 'dark'} />
          </div>

          {/* Desktop nav links */}
          <div className={`hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.16em] md:flex ${textClass}`}>
            <Link href="/work" className="nav-link-animated transition-opacity duration-300 hover:opacity-75">
              {t.nav.work}
            </Link>
            <Link href="/#services" className="nav-link-animated transition-opacity duration-300 hover:opacity-75">
              {t.nav.services}
            </Link>
            <Link href="/contact" className="nav-link-animated transition-opacity duration-300 hover:opacity-75">
              {t.nav.contact}
            </Link>
          </div>

          {/* Mobile spacer — keeps logo from sliding under hamburger button (w-12 = 48px = hamburger size) */}
          <div className="w-12 md:hidden" aria-hidden="true" />
        </div>
      </div>
    </nav>
  );
}
