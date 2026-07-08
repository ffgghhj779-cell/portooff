'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from '@/components/MagneticButton';
import { type Project } from '@/lib/data/projects';
import { useLocale } from '@/lib/i18n/LocaleProvider';

type Props = {
  project: Project;
  prev: Project | null;
  next: Project | null;
};

export function ProjectContent({ project, prev, next }: Props) {
  const { t, locale, dir } = useLocale();

  return (
    <main className="overflow-x-hidden font-sans">
      {/* ── Hero ── */}
      <section data-scroll-theme="dark" className="theme-dark">
        <div className="pt-32 md:pt-44 pb-0">
          <div className="section-shell">
            {/* Back link */}
            <Link
              href="/work"
              className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#EAE8E3]/50 transition-opacity hover:text-[#EAE8E3]"
            >
              <span className="text-base leading-none">{dir === 'rtl' ? '→' : '←'}</span>
              {t.common.allProjects}
            </Link>

            {/* Title block */}
            <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                {/* Meta pills */}
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#EAE8E3]/10 bg-[#EAE8E3]/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#EAE8E3]/60">
                    {project.year}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#EAE8E3]/10 bg-[#EAE8E3]/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#EAE8E3]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="heading-display type-section font-bold tracking-tighter text-[#EAE8E3] leading-tight">
                  {project.name[locale]}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#EAE8E3]/70 md:text-xl">
                  {project.tagline[locale]}
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-3 lg:col-span-4 lg:justify-end">
                {project.liveUrl && (
                  <MagneticButton>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-pill block border border-[#EAE8E3]/20 text-[#EAE8E3] hover:bg-[#EAE8E3] hover:text-[#0A0A0A]"
                    >
                      {t.common.visitLive} ↗
                    </a>
                  </MagneticButton>
                )}
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="btn-pill block bg-[#EAE8E3] text-[#0A0A0A] hover:bg-[#EAE8E3]/90"
                  >
                    {t.common.startProject}
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Hero image — full bleed */}
          <div className="section-shell">
            <div className="relative mb-0 aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-[#0f0f0f]">
              <Image
                src={project.image}
                alt={project.name[locale]}
                fill
                priority
                quality={92}
                className="object-cover"
                sizes="100vw"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Storytelling Layout ── */}
      <section data-scroll-theme="dark" className="theme-dark">
        <div className="section-shell">
          <div className="grid gap-14 border-t border-[#EAE8E3]/10 pt-20 md:grid-cols-12 md:gap-20 my-20 md:my-32">
            {/* The Brand */}
            <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
              
              <div className="mb-24 md:mb-32 border-b border-[#EAE8E3]/10 pb-20">
                <p className="mb-6 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#EAE8E3]/40">
                  01 — {t.projectStory.theBrand}
                </p>
                <h2 className="heading-display text-3xl font-bold leading-[1.3] text-[#EAE8E3] md:text-4xl lg:text-5xl max-w-5xl">
                  {project.brand[locale]}
                </h2>
              </div>

              {/* The Problem */}
              <div className="mb-24 md:mb-32 grid gap-10 md:grid-cols-12 border-b border-[#EAE8E3]/10 pb-20">
                <div className="md:col-span-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#EAE8E3]/40">
                    02 — {t.projectStory.theProblem}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xl leading-[1.9] text-[#EAE8E3]/80 md:text-2xl font-light">
                    {project.problem[locale]}
                  </p>
                </div>
              </div>

              {/* What We Built */}
              <div className="mb-24 md:mb-32 grid gap-10 md:grid-cols-12 border-b border-[#EAE8E3]/10 pb-20">
                <div className="md:col-span-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#EAE8E3]/40">
                    03 — {t.projectStory.whatWeBuilt}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xl leading-[1.9] text-[#EAE8E3]/80 md:text-2xl font-light">
                    {project.built[locale]}
                  </p>
                </div>
              </div>

              {/* The Outcome */}
              <div className="grid gap-10 md:grid-cols-12 pb-10">
                <div className="md:col-span-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-[#EAE8E3]/40">
                    04 — {t.projectStory.theOutcome}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-xl leading-[1.9] text-[#EAE8E3]/80 md:text-2xl font-light">
                    {project.outcome[locale]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prev / Next navigation ── */}
      <section data-scroll-theme="dark" className="theme-dark">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 border-t border-[#EAE8E3]/10 py-16 md:flex-row md:items-center">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className={`group flex items-center gap-5 text-[#EAE8E3]/50 transition-colors hover:text-[#EAE8E3] ${dir === 'rtl' ? 'flex-row-reverse md:text-right' : ''}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#EAE8E3]/10 text-sm transition-colors group-hover:border-[#EAE8E3]/30">
                  {dir === 'rtl' ? '→' : '←'}
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#EAE8E3]/30 mb-1">
                    {t.projectStory.previous}
                  </p>
                  <p className="text-base font-medium text-[#EAE8E3]/70 group-hover:text-[#EAE8E3]">
                    {prev.name[locale]}
                  </p>
                </div>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}`}
                className={`group flex items-center gap-5 text-[#EAE8E3]/50 transition-colors hover:text-[#EAE8E3] ${dir === 'rtl' ? 'md:text-left' : 'md:flex-row-reverse text-right'}`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#EAE8E3]/10 text-sm transition-colors group-hover:border-[#EAE8E3]/30">
                  {dir === 'rtl' ? '←' : '→'}
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-[#EAE8E3]/30 mb-1">
                    {t.projectStory.next}
                  </p>
                  <p className="text-base font-medium text-[#EAE8E3]/70 group-hover:text-[#EAE8E3]">
                    {next.name[locale]}
                  </p>
                </div>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
