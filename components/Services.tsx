'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Brand Identity',
    description:
      'Strategic design that positions AI products for trust and clarity.',
    image:
      'https://images.unsplash.com/photo-1614850523459-40c4e63ac874?q=80&w=1600&auto=format&fit=crop',
    glow: 'orange' as const,
  },
  {
    title: 'AI-enhanced UX/UI design',
    description:
      'Interfaces that adapt, predict, and respond intelligently.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop',
    glow: 'blue' as const,
  },
  {
    title: 'Custom development',
    description:
      'Frontend, backend, and AI integrations — built for performance and scale.',
    image:
      'https://images.unsplash.com/photo-1620641788421-a37b341781a6?q=80&w=1600&auto=format&fit=crop',
    glow: 'green' as const,
  },
] as const;

const glowStyles = {
  orange:
    'shadow-[0_0_0_1px_rgba(255,107,53,0.18),0_0_40px_-10px_rgba(255,107,53,0.28),0_0_72px_-20px_rgba(79,140,255,0.1)]',
  green:
    'shadow-[0_0_0_1px_rgba(45,212,168,0.18),0_0_40px_-10px_rgba(45,212,168,0.26),0_0_72px_-20px_rgba(255,107,53,0.08)]',
  blue:
    'shadow-[0_0_0_1px_rgba(79,140,255,0.2),0_0_40px_-10px_rgba(79,140,255,0.3),0_0_72px_-20px_rgba(45,212,168,0.1)]',
} as const;

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const pin = pinRef.current;
      const cards = cardsRef.current;
      if (!section || !pin || !cards) return;

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 140px',
          endTrigger: cards,
          end: 'bottom bottom',
          pin: pin,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });

      gsap.from('.service-card', {
        y: 64,
        opacity: 0,
        duration: 1,
        stagger: 0.14,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cards,
          start: 'top 85%',
        },
      });

      gsap.utils.toArray<HTMLElement>('.service-mockup', section).forEach((mockup) => {
        gsap.to(mockup, {
          y: -10,
          duration: 3.6,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
          force3D: true,
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-pad relative w-full overflow-hidden"
    >
      <div className="section-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div ref={pinRef} className="services-pin lg:pt-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-black/40">
                What we do
              </p>
              <h2 className="heading-display mb-8 text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[0.88] text-black">
                Our services
              </h2>
              <p className="max-w-sm text-lg leading-relaxed text-black/60 md:text-xl">
                From motion design to AI-powered products — we design and build
                interfaces for the future.
              </p>
            </div>
          </div>

          <div
            ref={cardsRef}
            className="flex flex-col gap-8 md:gap-12 lg:col-span-8"
          >
            {services.map((service) => (
              <article
                key={service.title}
                className={`service-card grid grid-cols-1 gap-6 rounded-[1.75rem] border border-black/[0.06] bg-white p-5 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.18)] md:grid-cols-2 md:gap-8 md:p-7 ${glowStyles[service.glow]}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f3f3f1]">
                  <div
                    className={`service-mockup absolute inset-4 will-change-transform md:inset-5 ${glowStyles[service.glow]}`}
                  >
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-glow-orange/8 via-transparent to-glow-blue/10" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="heading-display mb-3 text-2xl font-bold md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="text-base leading-relaxed text-black/55 md:text-lg">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 flex justify-center md:mt-28">
          <MagneticButton>
            <Link
              href="#services"
              className="block rounded-full bg-black px-10 py-5 font-medium text-white"
            >
              View all services
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
