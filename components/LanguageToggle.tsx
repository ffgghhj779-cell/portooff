'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';

type LanguageToggleProps = {
  theme?: 'dark' | 'light';
};

export function LanguageToggle({ theme = 'dark' }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();
  const isLight = theme === 'light';

  const base =
    'pointer-events-auto flex items-center rounded-full border p-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] transition-colors duration-200';
  const shell = isLight
    ? `${base} border-black/15 bg-black/[0.04]`
    : `${base} border-white/20 bg-white/[0.06]`;

  const active = isLight
    ? 'bg-black text-white'
    : 'bg-white text-black';
  const idle = isLight
    ? 'text-black/50 hover:text-black'
    : 'text-white/50 hover:text-white';

  return (
    <div className={shell} role="group" aria-label="Language">
      {(['en', 'ar'] as const).map((lang) => (
        <button
          key={lang}
          type="button"
          onClick={() => setLocale(lang)}
          className={`rounded-full px-2.5 py-1.5 min-w-[2.25rem] ${
            locale === lang ? active : idle
          }`}
          aria-pressed={locale === lang}
        >
          {lang === 'en' ? 'EN' : 'ع'}
        </button>
      ))}
    </div>
  );
}
