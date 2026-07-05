'use client';

import { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const HERO_LINES = [
  { text: 'We are a digital', italic: false, withOrb: false },
  { text: 'design and', italic: true, withOrb: true },
  { text: 'motion agency', italic: false, withOrb: false },
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

      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });

      intro
        .fromTo(
          '.hero-line-inner',
          {
            clipPath: 'inset(100% 0 0 0)',
            yPercent: 110,
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            yPercent: 0,
            duration: 1.15,
            stagger: 0.14,
          }
        )
        .fromTo(
          '.hero-orb',
          { scale: 0, opacity: 0, rotate: -90 },
          {
            scale: 1,
            opacity: 1,
            rotate: 0,
            duration: 1,
            ease: 'back.out(1.4)',
          },
          '-=0.85'
        )
        .fromTo(
          '.hero-subtitle-inner',
          {
            clipPath: 'inset(100% 0 0 0)',
            yPercent: 80,
          },
          {
            clipPath: 'inset(0% 0 0 0)',
            yPercent: 0,
            duration: 1,
            ease: 'power4.out',
          },
          '-=0.55'
        )
        .fromTo(
          floatRef.current,
          { opacity: 0, y: 80, scale: 0.88 },
          { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: 'power4.out' },
          '-=1.1'
        );

      if (floatInnerRef.current) {
        gsap.to(floatInnerRef.current, {
          y: -18,
          duration: 3.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          force3D: true,
        });
      }

      if (geoRef.current) {
        gsap.to(geoRef.current, {
          rotateY: 18,
          rotateX: -10,
          rotateZ: 4,
          duration: 5.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          force3D: true,
        });
      }

      if (mediaRef.current) {
        gsap.to(mediaRef.current, {
          y: -12,
          duration: 4.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          delay: 0.6,
          force3D: true,
        });
      }

      gsap.to(contentRef.current, {
        yPercent: 18,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });

      gsap.to(floatRef.current, {
        y: -140,
        x: 40,
        rotateZ: -6,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });

      gsap.to(mediaRef.current, {
        yPercent: -25,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="mesh-glow relative z-10 min-h-screen overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,107,53,0.08),transparent)]" />

      <div
        ref={contentRef}
        className="section-shell relative flex min-h-screen flex-col justify-center pb-28 pt-36 lg:px-16"
      >
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="flex flex-col">
            {HERO_LINES.map((line) => (
              <div key={line.text} className="hero-line overflow-hidden">
                <h1
                  className={`hero-line-inner heading-display flex items-center gap-4 md:gap-8 ${
                    line.italic ? 'font-light italic' : 'font-medium'
                  } text-[clamp(3.5rem,10vw,9rem)] leading-[0.82] tracking-[-0.045em]`}
                >
                  {line.withOrb && (
                    <span className="hero-orb inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/20 md:h-[7.5rem] md:w-[7.5rem]">
                      <span className="h-2 w-2 rounded-full bg-white/90 shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
                    </span>
                  )}
                  {line.text}
                </h1>
              </div>
            ))}
          </div>

          <div
            ref={floatRef}
            className="relative mx-auto flex w-full max-w-md items-center justify-center opacity-0 lg:mx-0 lg:max-w-none lg:justify-end"
          >
            <div
              ref={floatInnerRef}
              className="relative w-[min(88vw,26rem)] md:w-[28rem] lg:w-[32rem]"
              style={{ perspective: '1200px' }}
            >
              <div
                ref={geoRef}
                className="relative aspect-square w-full"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-[8%] rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
                <div className="absolute inset-[14%] rotate-12 rounded-[1.5rem] border border-glow-blue/30 bg-glow-blue/5" />
                <div className="absolute inset-[20%] -rotate-6 rounded-[1.25rem] border border-glow-green/25 bg-glow-green/5" />
                <div className="absolute left-[10%] top-[18%] h-px w-[45%] bg-gradient-to-r from-glow-orange/60 to-transparent" />
                <div className="absolute bottom-[22%] right-[12%] h-px w-[38%] bg-gradient-to-l from-glow-blue/50 to-transparent" />

                <div
                  ref={mediaRef}
                  data-cursor="explore"
                  data-cursor-label="Explore"
                  className="media-hover absolute inset-[24%] overflow-hidden rounded-2xl border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
                  style={{ transform: 'translateZ(40px)' }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
                    alt="Abstract isometric geometry render"
                    fill
                    priority
                    className="object-cover opacity-90"
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 80vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-cinematic-black/40 via-transparent to-glow-orange/10" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                </div>

                <div
                  className="absolute -right-4 top-1/4 h-16 w-16 rounded-lg border border-glow-orange/40 bg-glow-orange/10"
                  style={{ transform: 'translateZ(60px) rotateY(-20deg)' }}
                />
                <div
                  className="absolute -left-3 bottom-1/4 h-12 w-12 rounded-full border border-glow-green/35 bg-glow-green/10"
                  style={{ transform: 'translateZ(30px)' }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero-subtitle mt-10 flex w-full justify-start overflow-hidden lg:mt-16 lg:justify-end">
          <p className="hero-subtitle-inner max-w-md text-base font-medium leading-relaxed text-white/55 md:text-xl md:leading-relaxed lg:max-w-lg lg:text-right">
            We help companies build scalable digital products with thoughtful
            design systems and carefully crafted development.
          </p>
        </div>
      </div>
    </section>
  );
}
