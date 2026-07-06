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
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="11"
          className={isLight ? 'stroke-black/12' : 'stroke-white/15'}
          strokeWidth="1"
        />
        <rect x="11" y="22" width="5" height="10" rx="1.5" fill="currentColor" opacity="0.45" />
        <rect x="17.5" y="16" width="5" height="16" rx="1.5" fill="currentColor" opacity="0.7" />
        <rect x="24" y="10" width="5" height="22" rx="1.5" fill="currentColor" />
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
