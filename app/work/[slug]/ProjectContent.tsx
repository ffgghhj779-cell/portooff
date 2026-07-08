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
              className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/40 transition-opacity hover:text-white/70"
            >
              <span className="text-base leading-none">{dir === 'rtl' ? '→' : '←'}</span>
              {t.common.allProjects}
            </Link>

            {/* Title block */}
            <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                {/* Meta pills */}
                <div className="mb-6 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/50">
                    {project.year}
                  </span>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h1 className="heading-display type-section font-bold tracking-tighter text-white">
                  {project.name[locale]}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
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
                      className="btn-pill block border border-white/20 text-white hover:bg-white hover:text-black"
                    >
                      {t.common.visitLive} ↗
                    </a>
                  </MagneticButton>
                )}
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="btn-pill block bg-white text-black hover:bg-white/90"
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
          <div className="grid gap-14 border-t border-white/8 pt-14 md:grid-cols-12 md:gap-20 my-12 md:my-20">
            {/* The Brand */}
            <div className="md:col-span-12 lg:col-span-10 lg:col-start-2">
              <div className="mb-16 md:mb-24">
                <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                  01 — {t.projectStory.theBrand}
                </p>
                <h2 className="heading-display text-2xl font-bold leading-tight text-white md:text-4xl lg:text-5xl max-w-4xl">
                  {project.brand[locale]}
                </h2>
              </div>

              {/* The Problem */}
              <div className="mb-16 md:mb-24 grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                    02 — {t.projectStory.theProblem}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-[1.8] text-white/70 md:text-xl">
                    {project.problem[locale]}
                  </p>
                </div>
              </div>

              {/* What We Built */}
              <div className="mb-16 md:mb-24 grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                    03 — {t.projectStory.whatWeBuilt}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-[1.8] text-white/70 md:text-xl">
                    {project.built[locale]}
                  </p>
                </div>
              </div>

              {/* The Outcome */}
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                    04 — {t.projectStory.theOutcome}
                  </p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg leading-[1.8] text-white/70 md:text-xl">
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
          <div className="flex flex-col justify-between gap-6 border-t border-white/8 py-12 md:flex-row md:items-center">
            {prev ? (
              <Link
                href={`/work/${prev.slug}`}
                className={`group flex items-center gap-4 text-white/50 transition-colors hover:text-white ${dir === 'rtl' ? 'flex-row-reverse md:text-right' : ''}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm transition-colors group-hover:border-white/30">
                  {dir === 'rtl' ? '→' : '←'}
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/30 mb-0.5">
                    {t.projectStory.previous}
                  </p>
                  <p className="text-sm font-medium text-white/70 group-hover:text-white">
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
                className={`group flex items-center gap-4 text-white/50 transition-colors hover:text-white ${dir === 'rtl' ? 'md:text-left' : 'md:flex-row-reverse text-right'}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm transition-colors group-hover:border-white/30">
                  {dir === 'rtl' ? '←' : '→'}
                </span>
                <div>
                  <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/30 mb-0.5">
                    {t.projectStory.next}
                  </p>
                  <p className="text-sm font-medium text-white/70 group-hover:text-white">
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
