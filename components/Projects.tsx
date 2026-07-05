'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { HOVER_SCALE, MOTION } from '@/lib/motion';
import { PROJECTS, type Project } from '@/lib/data/projects';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

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
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="project-card group block"
      data-cursor="explore"
      data-cursor-label="View"
    >
      <div
        className={`project-media relative w-full overflow-hidden rounded-[2rem] bg-[#111] md:rounded-[2.5rem] ${
          project.tall ? 'aspect-[4/5]' : 'aspect-[5/4]'
        }`}
      >
        <div className="project-image-inner absolute inset-0 will-change-transform">
          <Image
            src={project.image}
            alt={`${project.name} — ${project.tagline}`}
            fill
            className="object-cover transition-[filter] duration-700 group-hover:brightness-110"
            referrerPolicy="no-referrer"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>
      </div>
      <p className="project-caption mt-5 text-base leading-[1.35] tracking-tight text-white/90 md:mt-6 md:text-lg">
        <span className="font-semibold text-white">{project.name}</span>
        <span className="text-white/55"> – {project.tagline}</span>
      </p>
    </Link>
  );
}

export function Projects({ limit }: { limit?: number }) {
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

      gsap.from('.projects-heading-inner', {
        y: 56,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: grid,
          start: 'top 88%',
          end: 'top 62%',
          scrub: 0.55,
        },
      });

      gsap.from('.project-card', {
        y: 64,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: MOTION.revealStagger,
        ease: MOTION.revealEase,
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

      const cards = gsap.utils.toArray<HTMLElement>('.project-card', section);
      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const imageInner = card.querySelector<HTMLElement>('.project-image-inner');
        if (!imageInner) return;
        gsap.set(imageInner, { scale: 1, force3D: true });
        const onEnter = () =>
          gsap.to(imageInner, {
            scale: HOVER_SCALE,
            duration: HOVER_DURATION,
            ease: MOTION.hoverEase,
            overwrite: 'auto',
            force3D: true,
          });
        const onLeave = () =>
          gsap.to(imageInner, {
            scale: 1,
            duration: HOVER_DURATION,
            ease: MOTION.hoverEase,
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
            Featured projects
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
                href="/projects"
                className="btn-pill block border border-white/25 text-white transition-colors hover:bg-white hover:text-black"
              >
                View all projects
              </Link>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}
