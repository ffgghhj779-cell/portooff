'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { HOVER_SCALE, MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

/** Local images — always available, zero network dependency */
const SERVICE_IMAGES = [
  '/services/ux-design.png',
  '/services/development.png',
  '/services/brand-identity.png',
] as const;

const SERVICE_TALL = [false, true, false] as const;

function ServiceCard({
  service,
}: {
  service: { title: string; description: string; image: string; tall: boolean };
}) {
  return (
    <article className="service-card group">
      <div
        className={`service-media relative w-full overflow-hidden rounded-[2.5rem] bg-[#e8e8e8] transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.98] ${
          service.tall ? 'aspect-[4/5]' : 'aspect-[5/4]'
        }`}
        data-cursor="explore"
        data-cursor-label={t.common.explore}
      >
        <div className="service-image-inner absolute inset-0 will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 95vw, 44vw"
          />
        </div>
      </div>

      <div className="service-caption mt-5 md:mt-6">
        <h3 className="heading-display text-xl font-bold tracking-tighter text-black md:text-2xl">
          {service.title}
        </h3>
        <p className="mt-2 max-w-md text-base leading-[1.35] tracking-tight text-black/75 md:text-lg">
          {service.description}
        </p>
      </div>
    </article>
  );
}

export function Services() {
  const t = useTranslations();
  const services = t.services.items.map((item, i) => ({
    ...item,
    image: SERVICE_IMAGES[i],
    tall: SERVICE_TALL[i],
  }));
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const colLeftRef = useRef<HTMLDivElement>(null);
  const colRightRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const grid = gridRef.current;
      if (!section || !grid) return;

      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const mm = gsap.matchMedia();

      gsap.from('.services-heading-inner', {
        y: isMobile ? 24 : 48,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: grid,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.services-intro', {
        y: isMobile ? 16 : 36,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: grid,
          start: 'top 84%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.service-card', {
        y: isMobile ? 24 : 48,
        opacity: 0,
        duration: isMobile ? 0.55 : MOTION.reveal,
        stagger: isMobile ? 0.04 : MOTION.revealStagger,
        ease: MOTION.revealEase,
        clearProps: isMobile ? 'all' : '',
        scrollTrigger: {
          trigger: grid,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });

      // Parallax columns — desktop only
      mm.add('(min-width: 768px)', () => {
        if (colLeftRef.current) {
          gsap.to(colLeftRef.current, {
            y: -32,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }

        if (colRightRef.current) {
          gsap.to(colRightRef.current, {
            y: 32,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      });

      // Hover image scale — desktop fine pointer only
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
      if (!hasFinePointer) return () => mm.revert();

      const cards = gsap.utils.toArray<HTMLElement>('.service-card', section);
      const cleanups: Array<() => void> = [];

      cards.forEach((card) => {
        const imageInner = card.querySelector<HTMLElement>('.service-image-inner');
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
        mm.revert();
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="theme-light section-pad relative w-full overflow-hidden bg-[#f4f4f4] text-black"
    >
      <div className="section-shell">
        <div className="services-heading mb-10 overflow-hidden md:mb-14">
          <h2 className="services-heading-inner heading-display type-section font-bold tracking-tighter leading-none text-black">
            {t.services.title}
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
            <p className="services-intro max-w-md text-base leading-[1.35] tracking-tight text-black/75 md:text-lg">
              {t.services.intro}
            </p>
            <ServiceCard service={services[0]} />
            <ServiceCard service={services[2]} />
          </div>

          <div
            ref={colRightRef}
            className="flex flex-col gap-12 md:mt-32 md:gap-[5rem] lg:mt-40 lg:gap-[6.25rem]"
          >
            <ServiceCard service={services[1]} />
          </div>
        </div>

        <div className="mt-16 flex justify-center md:mt-24">
          <MagneticButton>
            <Link
              href="#services"
              className="btn-pill block bg-black text-white transition-colors hover:bg-black/90"
            >
              {t.services.viewAll}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
