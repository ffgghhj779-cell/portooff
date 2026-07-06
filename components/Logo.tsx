'use client';

import { useLocale, useTranslations } from '@/lib/i18n/LocaleProvider';

type LogoProps = {
  theme?: 'dark' | 'light';
  showSlogan?: boolean;
  size?: 'sm' | 'md';
};

export function Logo({ theme = 'dark', showSlogan = true, size = 'md' }: LogoProps) {
  const { locale } = useLocale();
  const t = useTranslations();
  const isLight = theme === 'light';
  const markClass = isLight ? 'text-black' : 'text-white';
  const sloganClass = isLight ? 'text-black/50' : 'text-white/50';
  const nameSize = size === 'sm' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl';
  const sloganSize = size === 'sm' ? 'text-[0.6rem]' : 'text-[0.65rem] md:text-xs';

  return (
    <div className="flex items-center gap-2.5 md:gap-3">
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`h-9 w-9 shrink-0 md:h-10 md:w-10 ${markClass}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="t-grad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35" />
            <stop offset="50%" stopColor="#2dd4a8" />
            <stop offset="100%" stopColor="#4f8cff" />
          </linearGradient>
          <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* T Stem */}
        <rect x="17" y="16" width="6" height="20" rx="2.5" fill="currentColor" opacity="0.85" />
        
        {/* T Top Bar */}
        <rect x="5" y="6" width="30" height="6" rx="2.5" fill="currentColor" />

        {/* Upward Arrow (Tasami / Elevation) */}
        <path 
          d="M 9 28 L 20 14.5 L 31 28" 
          stroke="url(#t-grad)" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          filter="url(#logo-glow)"
        />
      </svg>

      <div className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display ${nameSize} font-bold tracking-tighter ${markClass} ${
            locale === 'ar' ? 'font-[family-name:var(--font-arabic)]' : 'lowercase'
          }`}
        >
          {locale === 'ar' ? t.brand.nameAr : t.brand.name}
        </span>
        {showSlogan && (
          <span
            className={`mt-1 ${sloganSize} font-medium uppercase tracking-[0.22em] ${sloganClass} ${
              locale === 'ar'
                ? 'font-[family-name:var(--font-arabic)] normal-case tracking-normal'
                : ''
            }`}
          >
            {t.brand.slogan}
          </span>
        )}
      </div>
    </div>
  );
}
