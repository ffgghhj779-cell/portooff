import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { MagneticButton } from '@/components/MagneticButton';
import { PROJECTS, getAdjacentProjects, getProject } from '@/lib/data/projects';
import { pageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return pageMetadata(project.name, project.description);
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden font-sans">

        {/* ── Hero ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <div className="pt-32 md:pt-44 pb-0">
            <div className="section-shell">

              {/* Back link */}
              <Link
                href="/projects"
                className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/40 transition-opacity hover:text-white/70"
              >
                <span className="text-base leading-none">←</span>
                All projects
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
                    {project.name}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/55 md:text-xl">
                    {project.tagline}
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
                        Visit live site ↗
                      </a>
                    </MagneticButton>
                  )}
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="btn-pill block bg-white text-black hover:bg-white/90"
                    >
                      Start a project
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
                  alt={project.name}
                  fill
                  priority
                  quality={92}
                  className="object-cover"
                  sizes="100vw"
                />
                {/* Overlay gradient for depth */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats strip ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <div className="section-shell">
            <div className="grid grid-cols-2 gap-px border border-white/8 md:grid-cols-4 rounded-[1.5rem] overflow-hidden bg-white/8 my-12">
              {[
                { label: 'Client type', value: project.clientType },
                { label: 'Market', value: project.market },
                { label: 'Year', value: project.year },
                { label: 'Services', value: `${project.services.length} disciplines` },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#080808] px-6 py-8">
                  <p className="mb-2 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                    {label}
                  </p>
                  <p className="text-sm font-medium leading-snug text-white/80 md:text-base">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Overview + sidebar ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <div className="section-shell">
            <div className="grid gap-14 border-t border-white/8 pt-14 md:grid-cols-12 md:gap-20">

              {/* Overview */}
              <div className="md:col-span-7">
                <p className="mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                  Overview
                </p>
                <h2 className="heading-display mb-6 text-2xl font-bold text-white md:text-3xl">
                  About the project
                </h2>
                <p className="text-base leading-[1.8] text-white/60 md:text-lg">
                  {project.overview}
                </p>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-5">
                {/* Services */}
                <div className="mb-10">
                  <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                    Services
                  </p>
                  <ul className="space-y-3">
                    {project.services.map((s) => (
                      <li key={s} className="flex items-center gap-3 text-sm text-white/75 md:text-base">
                        <span className="h-px w-5 bg-white/20 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <p className="mb-5 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                    Deliverables
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.deliverables.map((d) => (
                      <li
                        key={d}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Challenge / Result ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <div className="section-shell section-pad">
            <div className="grid gap-8 md:grid-cols-2">

              {/* Challenge */}
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 md:p-10">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <span className="text-base text-white/50">⚡</span>
                </div>
                <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                  The Challenge
                </p>
                <p className="text-base leading-[1.8] text-white/65 md:text-lg">
                  {project.challenge}
                </p>
              </div>

              {/* Result */}
              <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 md:p-10">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <span className="text-base text-white/50">✦</span>
                </div>
                <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                  The Result
                </p>
                <p className="text-base leading-[1.8] text-white/65 md:text-lg">
                  {project.result}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        {project.gallery.length > 1 && (
          <section data-scroll-theme="dark" className="theme-dark">
            <div className="section-shell pb-16">
              <p className="mb-8 text-[0.6rem] font-semibold uppercase tracking-[0.26em] text-white/35">
                Gallery
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {project.gallery.slice(1).map((src, i) => (
                  <div
                    key={src + i}
                    className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#0f0f0f]"
                  >
                    <Image
                      src={src}
                      alt={`${project.name} screenshot ${i + 2}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── Prev / Next navigation ── */}
        <section data-scroll-theme="dark" className="theme-dark">
          <div className="section-shell">
            <div className="flex flex-col justify-between gap-6 border-t border-white/8 py-12 md:flex-row md:items-center">
              {prev ? (
                <Link
                  href={`/projects/${prev.slug}`}
                  className="group flex items-center gap-4 text-white/50 transition-colors hover:text-white"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition-colors group-hover:border-white/30">
                    ←
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/30 mb-0.5">
                      Previous
                    </p>
                    <p className="text-sm font-medium text-white/70 group-hover:text-white">
                      {prev.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/projects/${next.slug}`}
                  className="group flex items-center gap-4 text-right text-white/50 transition-colors hover:text-white md:flex-row-reverse"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-sm transition-colors group-hover:border-white/30">
                    →
                  </span>
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/30 mb-0.5">
                      Next
                    </p>
                    <p className="text-sm font-medium text-white/70 group-hover:text-white">
                      {next.name}
                    </p>
                  </div>
                </Link>
              ) : (
                <span />
              )}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Footer />
        </section>

      </main>
    </>
  );
}
