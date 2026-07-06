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

  const textClass = isLight ? 'text-black' : 'text-white mix-blend-difference';

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12">
      <div className="section-shell flex items-center justify-between gap-3 !px-0">
        <Link href="/" className="pointer-events-auto min-w-0 shrink">
          <Logo theme={isLight ? 'light' : 'dark'} showSlogan size="sm" />
        </Link>

        <div className="pointer-events-auto flex items-center gap-3 md:gap-6">
          <LanguageToggle theme={isLight ? 'light' : 'dark'} />

          <div
            className={`hidden items-center gap-6 text-sm font-medium uppercase tracking-[0.16em] md:flex ${textClass}`}
          >
            <Link href="/projects" className="transition-opacity duration-200 hover:opacity-60">
              {t.nav.work}
            </Link>
            <Link href="/#services" className="transition-opacity duration-200 hover:opacity-60">
              {t.nav.services}
            </Link>
            <Link href="/contact" className="transition-opacity duration-200 hover:opacity-60">
              {t.nav.contact}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
