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
        <section data-scroll-theme="dark" className="theme-dark">
          <div className="section-pad pt-32 md:pt-40">
            <div className="section-shell">
              <Link
                href="/projects"
                className="mb-8 inline-flex text-sm font-medium uppercase tracking-[0.2em] text-white/45 transition-opacity hover:opacity-70"
              >
                ← All projects
              </Link>

              <div className="mb-10 grid gap-8 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-white/40">
                    {project.year} · {project.tags.join(' · ')}
                  </p>
                  <h1 className="heading-display type-section font-bold tracking-tighter text-white">
                    {project.name}
                  </h1>
                  <p className="mt-4 max-w-2xl text-lg text-white/60 md:text-xl">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                  {project.liveUrl && (
                    <MagneticButton>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-pill block border border-white/25 text-white hover:bg-white hover:text-black"
                      >
                        Visit live site
                      </a>
                    </MagneticButton>
                  )}
                  <MagneticButton>
                    <Link
                      href="/contact"
                      className="btn-pill block bg-white text-black"
                    >
                      Start a project
                    </Link>
                  </MagneticButton>
                </div>
              </div>

              <div className="relative mb-16 aspect-[16/9] overflow-hidden rounded-[2.5rem] bg-[#111] md:mb-20">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  className="object-cover"
                  referrerPolicy="no-referrer"
                  sizes="100vw"
                />
              </div>

              <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-12 md:gap-16">
                <div className="md:col-span-7">
                  <h2 className="heading-display mb-4 text-2xl font-bold text-white md:text-3xl">
                    Overview
                  </h2>
                  <p className="text-base leading-relaxed text-white/70 md:text-lg">
                    {project.overview}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                    Services
                  </h3>
                  <ul className="mb-8 space-y-2 text-white/80">
                    {project.services.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/40">
                    Deliverables
                  </h3>
                  <ul className="space-y-2 text-white/80">
                    {project.deliverables.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.gallery.length > 1 && (
                <div className="mt-16 grid gap-6 md:grid-cols-2">
                  {project.gallery.slice(1).map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#111]"
                    >
                      <Image
                        src={src}
                        alt={project.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-10 md:flex-row md:items-center">
                {prev ? (
                  <Link
                    href={`/projects/${prev.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    ← {prev.name}
                  </Link>
                ) : (
                  <span />
                )}
                {next ? (
                  <Link
                    href={`/projects/${next.slug}`}
                    className="text-white/70 transition-colors hover:text-white"
                  >
                    {next.name} →
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-theme="dark" className="theme-dark rounded-t-[2.5rem]">
          <Footer />
        </section>
      </main>
    </>
  );
}
