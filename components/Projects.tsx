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
    name: 'Magma — Web3 builder tooling',
    image:
      'https://images.unsplash.com/photo-1620641788421-a37b341781a6?q=80&w=2000&auto=format&fit=crop',
    glow: 'orange' as const,
    layout: 'standard' as const,
  },
  {
    name: 'DaoWay — Planner app interface',
    image:
      'https://images.unsplash.com/photo-1614850523459-40c4e63ac874?q=80&w=2000&auto=format&fit=crop',
    glow: 'blue' as const,
    layout: 'standard' as const,
  },
  {
    name: 'FlipaClip — Stop-motion animation tool',
    image:
      'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000&auto=format&fit=crop',
    glow: 'green' as const,
    layout: 'standard' as const,
  },
  {
    name: 'Zelt — HR, IT & Finance in one place',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop',
    glow: 'blue' as const,
    layout: 'standard' as const,
  },
  {
    name: 'Ferrumpipe — Galvanized steel manufacturer',
    image:
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2000&auto=format&fit=crop',
    glow: 'orange' as const,
    layout: 'standard' as const,
  },
  {
    name: 'Riyadh — Official capital city website',
    image:
      'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2000&auto=format&fit=crop',
    glow: 'green' as const,
    layout: 'standard' as const,
  },
  {
    name: 'Qvino — Wine marketplace',
    image:
      'https://images.unsplash.com/photo-1510812431401-41e2bd2722f3?q=80&w=2000&auto=format&fit=crop',
    glow: 'blue' as const,
    layout: 'standard' as const,
  },
  {
    name: 'Potion — Sales conversion tool',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
    glow: 'orange' as const,
    layout: 'standard' as const,
  },
] as const;

const glowStyles = {
  orange:
    'shadow-[0_0_0_1px_rgba(255,107,53,0.18),0_0_40px_-12px_rgba(255,107,53,0.28)]',
  green:
    'shadow-[0_0_0_1px_rgba(45,212,168,0.18),0_0_40px_-12px_rgba(45,212,168,0.26)]',
  blue:
    'shadow-[0_0_0_1px_rgba(79,140,255,0.2),0_0_40px_-12px_rgba(79,140,255,0.3)]',
} as const;

const layoutStyles = {
  hero: 'col-span-12 md:col-span-7 md:row-span-2 min-h-[300px] md:min-h-[480px]',
  tall: 'col-span-12 md:col-span-5 md:row-span-2 min-h-[300px] md:min-h-[480px]',
  wide: 'col-span-12 md:col-span-12 md:row-span-1 min-h-[220px] md:min-h-[280px]',
  standard: 'col-span-12 md:col-span-6 md:row-span-1 min-h-[240px] md:min-h-[300px]',
} as const;

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid) return;

      gsap.from('.projects-heading-inner', {
        y: 40,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        clearProps: 'transform',
        scrollTrigger: { trigger: grid, start: 'top 88%' },
      });

      gsap.from('.project-card', {
        y: 48,
        duration: MOTION.reveal,
        stagger: 0.05,
        ease: MOTION.revealEase,
        clearProps: 'transform',
        scrollTrigger: { trigger: grid, start: 'top 85%' },
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

      return () => cleanups.forEach((fn) => fn());
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-pad relative w-full overflow-hidden !pt-12"
    >
      <div className="section-shell">
        <div className="projects-heading mb-10 overflow-hidden md:mb-14">
          <h2 className="projects-heading-inner heading-display type-section font-bold tracking-tighter leading-none text-black">
            Featured projects
          </h2>
        </div>

        <div
          ref={gridRef}
          className="projects-grid grid grid-cols-12 gap-3 md:gap-5"
        >
          {projects.map((project) => (
            <article
              key={project.name}
              className={`project-card group flex flex-col gap-4 ${layoutStyles[project.layout]}`}
            >
              <div
                data-cursor="explore"
                data-cursor-label="Explore"
                className={`media-hover project-media relative h-full min-h-[inherit] overflow-hidden rounded-[2.5rem] bg-[#111] ${glowStyles[project.glow]}`}
              >
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

              <h3 className="heading-display text-base font-medium tracking-tighter leading-[1.1] text-black/80 md:text-lg">
                {project.name}
              </h3>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <MagneticButton>
            <Link
              href="#projects"
              className="btn-pill block border border-black/20 text-black"
            >
              View all projects
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
