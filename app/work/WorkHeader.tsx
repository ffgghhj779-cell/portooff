'use client';

import { useLocale } from '@/lib/i18n/LocaleProvider';

export function WorkHeader() {
  const { t } = useLocale();

  return (
    <div className="section-pad pb-0 pt-32 md:pt-40">
      <div className="section-shell mb-8 md:mb-12">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
          Portfolio
        </p>
        <h1 className="heading-display type-section max-w-3xl font-bold tracking-tighter text-white">
          {t.common.allProjects}
        </h1>
      </div>
    </div>
  );
}
