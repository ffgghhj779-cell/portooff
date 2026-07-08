'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { MOTION } from '@/lib/motion';
import { PROJECTS, type Project } from '@/lib/data/projects';
import { useLocale } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

function splitColumns(items: Project[]) {
  const left: Project[] = [];
  const right: Project[] = [];
  items.forEach((item, index) => {
    if (index % 2 === 0) left.push(item);
    else right.push(item);
  });
  return { left, right };
}

function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLocale();
  return (
    <Link
      href={`/work/${project.slug}`}
      className="project-card group block"
      data-cursor="explore"
      data-cursor-label={t.projects.view}
    >
      {/* Image container */}
      <div
        className={`project-media relative w-full overflow-hidden rounded-[2.5rem] bg-[#111] ${
          project.tall ? 'aspect-[4/5]' : 'aspect-[5/4]'
        }`}
      >
        <div className="project-image-inner absolute inset-0">
          <Image
            src={project.image}
            alt={`${project.name[locale]} — ${project.tagline[locale]}`}
            fill
            quality={85}
            className="object-cover"
            referrerPolicy="no-referrer"
            sizes="(max-width: 768px) 96vw, 42vw"
          />
        </div>
        {/* Tags overlay — bottom left */}
        <div className="pointer-events-none absolute bottom-4 left-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-black/50 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/70 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Year badge — top right */}
        <div className="pointer-events-none absolute top-4 right-4">
          <span className="rounded-full bg-black/50 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/60 backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Caption */}
      <div className="mt-5 md:mt-6">
        <p className="project-caption text-base leading-[1.35] tracking-tight text-white/90 md:text-lg">
          <span className="font-semibold text-white">{project.name[locale]}</span>
          <span className="text-white/50"> – {project.tagline[locale]}</span>
        </p>
        <p className="mt-1.5 text-xs font-medium text-white/30 tracking-wide">
          {project.tags.join(' · ')}
        </p>
      </div>
    </Link>
  );
}


export function Projects({ limit }: { limit?: number }) {
  const { t } = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);

  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  const { left, right } = splitColumns(items);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid) return;

      const isMobile = window.matchMedia('(max-width: 767px)').matches;

      gsap.from('.projects-heading-inner', {
        y: isMobile ? 24 : 56,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: grid,
          start: 'top 88%',
          // No scrub on mobile — simple fire-and-done
          toggleActions: 'play none none none',
          ...(isMobile ? {} : { end: 'top 62%', scrub: 0.55, toggleActions: undefined }),
        },
      });

      gsap.from('.project-card', {
        y: isMobile ? 32 : 64,
        opacity: 0,
        duration: isMobile ? 0.55 : MOTION.reveal,
        stagger: isMobile ? 0.04 : MOTION.revealStagger,
        ease: MOTION.revealEase,
        clearProps: isMobile ? 'all' : '',
        scrollTrigger: {
          trigger: grid,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });

      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        if (colLeftRef.current) {
          gsap.to(colLeftRef.current, {
            y: -48,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
        if (colRightRef.current) {
          gsap.to(colRightRef.current, {
            y: 48,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          });
        }
      });

      // Hover image scale — desktop only (touch devices skip)
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (hasFinePointer) {
        const cards = gsap.utils.toArray<HTMLElement>('.project-card', section);
        const cleanups: Array<() => void> = [];

        cards.forEach((card) => {
          const imageInner = card.querySelector<HTMLElement>('.project-image-inner');
          if (!imageInner) return;
          gsap.set(imageInner, { scale: 1, force3D: true });
          const onEnter = () =>
            gsap.to(imageInner, {
              scale: 1.04,
              duration: 1.2,
              ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
              overwrite: 'auto',
              force3D: true,
            });
          const onLeave = () =>
            gsap.to(imageInner, {
              scale: 1,
              duration: 1.2,
              ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
              overwrite: 'auto',
              force3D: true,
            });
          card.addEventListener('mouseenter', onEnter);
          card.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            card.removeEventListener('mouseenter', onEnter);
            card.removeEventListener('mouseleave', onLeave);
            gsap.killTweensOf(imageInner);
          });
        });

        return () => {
          mm.revert();
          cleanups.forEach((fn) => fn());
        };
      }

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-pad relative w-full overflow-hidden bg-black text-white"
    >
      <div className="section-shell">
        <div className="projects-heading mb-12 overflow-hidden md:mb-16">
          <h2 className="projects-heading-inner heading-display type-section font-bold tracking-tighter leading-none text-white">
            {t.projects.title}
          </h2>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[5rem] lg:gap-[6.25rem]"
        >
          <div
            ref={colLeftRef}
            className="flex flex-col gap-12 md:gap-[5rem] lg:gap-[6.25rem]"
          >
            {left.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div
            ref={colRightRef}
            className="flex flex-col gap-12 md:mt-24 md:gap-[5rem] lg:mt-32 lg:gap-[6.25rem]"
          >
            {right.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>

        {limit && (
          <div className="mt-16 flex justify-center md:mt-24">
            <MagneticButton>
              <Link
                href="/work"
                className="btn-pill block border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
              >
                {t.projects.viewAll}
              </Link>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}
