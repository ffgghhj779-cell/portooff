'use client';

import { useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import { useDevice } from '@/components/DeviceProvider';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const t = useTranslations();
  const { isMobile } = useDevice();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        // Stagger in the label, two heading lines, subtitle, CTAs
        gsap.from('.hero-reveal', {
          y: isMobile ? 20 : 36,
          opacity: 0,
          duration: isMobile ? 0.6 : MOTION.reveal,
          stagger: isMobile ? 0.06 : 0.1,
          ease: MOTION.revealEase,
          clearProps: 'transform,opacity',
        });

        // Subtle parallax on scroll — desktop only
        if (contentRef.current && !isMobile) {
          gsap.to(contentRef.current, {
            yPercent: 8,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 0.8,
            },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-[100svh] overflow-hidden bg-transparent"
    >
      {/* Single, subtle top vignette — no color blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(255,255,255,0.03),transparent)]" />

      <div
        ref={contentRef}
        className="hero-content-pad section-shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-24 sm:pb-20 sm:pt-32 md:justify-center md:pb-24 md:pt-36"
      >
        {/* Established label */}
        <div className="hero-reveal mb-10 md:mb-14">
          <span className="inline-block rounded-full border border-[#B8976A]/30 px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#B8976A]/70">
            {t.hero.label}
          </span>
        </div>

        {/* Main heading — two lines, no 3D objects */}
        <div className="max-w-3xl lg:max-w-4xl">
          <div className="hero-line hero-reveal overflow-hidden">
            <h1 className="heading-display type-hero font-medium leading-none tracking-tighter text-white">
              {t.hero.line1}
            </h1>
          </div>
          <div className="hero-line hero-reveal overflow-hidden">
            <h1 className="heading-display type-hero font-light md:font-medium leading-none tracking-tighter text-[#B8976A]">
              {t.hero.line2}
            </h1>
          </div>
        </div>

        {/* Divider + subtitle row */}
        <div className="hero-reveal mt-10 flex flex-col gap-8 md:mt-14 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-base font-normal leading-relaxed text-white/45 md:text-lg">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex shrink-0 items-center gap-5">
            <Link
              href="/work"
              className="btn-pill inline-flex items-center border border-[#B8976A] text-[#B8976A] bg-transparent hover:bg-[#B8976A] hover:text-[#141210] transition-colors duration-300 text-sm font-semibold"
            >
              {t.hero.cta}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/40 underline underline-offset-4 transition-colors hover:text-white/70"
            >
              {t.hero.ctaSecondary}
            </Link>
          </div>
        </div>

        {/* Scroll indicator — desktop only */}
        {!isMobile && (
          <div
            className="hero-reveal pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-[#B8976A]/50">
                Scroll
              </span>
              <div className="h-10 w-[2px] overflow-hidden bg-[#B8976A]/10 rounded-full">
                <div className="h-full w-full origin-top animate-[scroll-line_2s_ease-in-out_infinite] bg-[#B8976A]/80 rounded-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
