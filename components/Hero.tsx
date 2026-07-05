'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

const HERO_LINES = [
  { text: 'Digital design', italic: false, withOrb: false },
  { text: '& development', italic: true, withOrb: true },
  { text: 'agency', italic: false, withOrb: false },
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const floatInnerRef = useRef<HTMLDivElement>(null);
  const geoRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-line-inner', {
          y: 48,
          duration: MOTION.reveal,
          stagger: MOTION.revealStagger,
          ease: MOTION.revealEase,
          clearProps: 'transform',
        });

        gsap.from('.hero-orb', {
          scale: 0.75,
          duration: 0.55,
          ease: 'expo.out',
          clearProps: 'transform',
          delay: 0.12,
        });

        gsap.from('.hero-subtitle-inner', {
          y: 28,
          duration: MOTION.reveal,
          ease: MOTION.revealEase,
          clearProps: 'transform',
          delay: 0.22,
        });

        if (floatRef.current) {
          gsap.from(floatRef.current, {
            y: 56,
            duration: 0.8,
            ease: 'expo.out',
            clearProps: 'transform',
            delay: 0.18,
          });
        }
      });

      if (floatInnerRef.current) {
        gsap.to(floatInnerRef.current, {
          y: -16,
          duration: 3.6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          force3D: true,
        });
      }

      if (geoRef.current) {
        gsap.to(geoRef.current, {
          rotateY: 16,
          rotateX: -8,
          rotateZ: 3,
          duration: 5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          force3D: true,
        });
      }

      if (contentRef.current) {
        gsap.to(contentRef.current, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.75,
          },
        });
      }

      if (floatRef.current) {
        gsap.to(floatRef.current, {
          y: -120,
          x: 28,
          rotateZ: -5,
          ease: 'none',
          force3D: true,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.1,
          },
        });
      }

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="mesh-glow relative z-10 min-h-[100svh] overflow-hidden bg-black"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_0%,rgba(255,107,53,0.07),transparent)]" />

      <div
        ref={contentRef}
        className="section-shell relative flex min-h-[100svh] flex-col justify-center pb-16 pt-28 md:pb-20 md:pt-32"
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col lg:col-span-6">
            {HERO_LINES.map((line) => (
              <div key={line.text} className="hero-line">
                <h1
                  className={`hero-line-inner heading-display type-hero flex items-center gap-3 md:gap-5 ${
                    line.italic ? 'font-light italic' : 'font-medium'
                  } tracking-tighter leading-none text-white`}
                >
                  {line.withOrb && (
                    <span className="hero-orb inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 md:h-[5.5rem] md:w-[5.5rem]">
                      <span className="h-2 w-2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.55)]" />
                    </span>
                  )}
                  {line.text}
                </h1>
              </div>
            ))}

            <div className="hero-subtitle mt-10 md:mt-12">
              <p className="hero-subtitle-inner type-body-lg max-w-md font-medium tracking-tighter leading-[1.1] text-white/60">
                We help companies build scalable digital products with thoughtful
                design systems and carefully crafted development.
              </p>
            </div>
          </div>

          <div
            ref={floatRef}
            className="relative mx-auto flex w-full max-w-md items-center justify-center lg:col-span-6 lg:mx-0 lg:max-w-none lg:justify-end"
          >
            <div
              ref={floatInnerRef}
              className="relative w-[min(85vw,24rem)] md:w-[26rem] lg:w-[30rem]"
              style={{ perspective: '1200px' }}
            >
              <div
                ref={geoRef}
                className="relative aspect-square w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-[8%] rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
                <div className="absolute inset-[14%] rotate-12 rounded-[2rem] border border-glow-blue/30 bg-glow-blue/5" />
                <div className="absolute inset-[20%] -rotate-6 rounded-[1.75rem] border border-glow-green/25 bg-glow-green/5" />

                <div
                  ref={mediaRef}
                  data-cursor="explore"
                  data-cursor-label="Explore"
                  className="media-hover absolute inset-[22%] overflow-hidden rounded-[2.5rem] border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
                    alt="Abstract geometry"
                    fill
                    priority
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 80vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/35 via-transparent to-glow-orange/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
