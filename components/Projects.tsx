'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { HOVER_SCALE, MOTION } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

const projects = [
  {
    name: 'Punto Pago — The First Super-App in Latin America',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    glow: 'orange' as const,
    layout: 'hero' as const,
  },
  {
    name: 'Kelvin Zero — Passwordless authentication product',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop',
    glow: 'blue' as const,
    layout: 'tall' as const,
  },
  {
    name: 'Sweeping Corp — Enterprise design system',
    image:
      'https://images.unsplash.com/photo-1617791160505-40fe982dbdcc?q=80&w=2000&auto=format&fit=crop',
    glow: 'green' as const,
    layout: 'wide' as const,
  },
  {
    name: 'DaoWay — Planner app interface',
    image:
      'https://images.unsplash.com/photo-1614850523459-40c4e63ac874?q=80&w=2000&auto=format&fit=crop',
    glow: 'blue' as const,
    layout: 'standard' as const,
  },
  {
    name: 'Magma — Web3 builder tooling',
    image:
      'https://images.unsplash.com/photo-1620641788421-a37b341781a6?q=80&w=2000&auto=format&fit=crop',
    glow: 'orange' as const,
    layout: 'standard' as const,
  },
] as const;

const glowStyles = {
  orange:
    'shadow-[0_0_0_1px_rgba(255,107,53,0.22),0_0_48px_-12px_rgba(255,107,53,0.35),0_0_80px_-24px_rgba(79,140,255,0.12)]',
  green:
    'shadow-[0_0_0_1px_rgba(45,212,168,0.22),0_0_48px_-12px_rgba(45,212,168,0.3),0_0_80px_-24px_rgba(255,107,53,0.1)]',
  blue:
    'shadow-[0_0_0_1px_rgba(79,140,255,0.24),0_0_48px_-12px_rgba(79,140,255,0.32),0_0_80px_-24px_rgba(45,212,168,0.12)]',
} as const;

const layoutStyles = {
  hero: 'col-span-12 md:col-span-7 md:row-span-2 min-h-[320px] md:min-h-[520px]',
  tall: 'col-span-12 md:col-span-5 md:row-span-2 min-h-[320px] md:min-h-[520px]',
  wide: 'col-span-12 md:col-span-12 md:row-span-1 min-h-[240px] md:min-h-[300px]',
  standard: 'col-span-12 md:col-span-6 md:row-span-1 min-h-[260px] md:min-h-[320px]',
} as const;

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid) return;

      gsap.set('.projects-heading-inner', {
        clipPath: 'inset(100% 0 0 0)',
        yPercent: 110,
      });

      gsap.from('.projects-heading-inner', {
        clipPath: 'inset(100% 0 0 0)',
        yPercent: 110,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
        },
      });

      gsap.from('.project-card', {
        y: 48,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.06,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: grid,
          start: 'top 78%',
        },
      });

      const cards = gsap.utils.toArray<HTMLElement>('.project-card', section);
      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const imageInner = card.querySelector<HTMLElement>('.project-image-inner');
        if (!imageInner) return;

        gsap.set(imageInner, { scale: 1, force3D: true });

        const onEnter = () => {
          gsap.to(imageInner, {
            scale: HOVER_SCALE,
            duration: HOVER_DURATION,
            ease: MOTION.hoverEase,
            overwrite: 'auto',
            force3D: true,
          });
        };

        const onLeave = () => {
          gsap.to(imageInner, {
            scale: 1,
            duration: HOVER_DURATION,
            ease: MOTION.hoverEase,
            overwrite: 'auto',
            force3D: true,
          });
        };

        card.addEventListener('mouseenter', onEnter);
        card.addEventListener('mouseleave', onLeave);

        cleanups.push(() => {
          card.removeEventListener('mouseenter', onEnter);
          card.removeEventListener('mouseleave', onLeave);
          gsap.killTweensOf(imageInner);
        });
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-pad relative w-full overflow-hidden"
    >
      <div className="section-shell">
        <div className="projects-heading mb-10 overflow-hidden md:mb-14">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/45">
            Selected Works
          </p>
          <h2 className="projects-heading-inner heading-display type-section font-bold tracking-tighter leading-[1.1]">
            Featured projects
          </h2>
        </div>

        <div
          ref={gridRef}
          className="projects-grid grid grid-cols-12 gap-4 md:gap-6"
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className={`project-card group flex flex-col gap-5 ${layoutStyles[project.layout]}`}
            >
              <div
                data-cursor="explore"
                data-cursor-label="Explore"
                className={`media-hover project-media relative h-full min-h-[inherit] overflow-hidden rounded-[2.5rem] bg-cinematic-surface ${glowStyles[project.glow]}`}
              >
                <div className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-gradient-to-br from-glow-orange/5 via-transparent to-glow-blue/8" />
                <div className="project-image-inner absolute inset-0 will-change-transform">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>

              <h3 className="heading-display max-w-lg text-base font-medium tracking-tighter leading-[1.1] text-white/90 md:text-lg">
                {project.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-20 flex justify-center md:mt-28">
          <MagneticButton>
            <Link
              href="#projects"
              className="btn-pill block border border-white/25 text-white"
            >
              View all projects
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
