'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import { MagneticButton } from './MagneticButton';
import { MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';
import { useDevice } from '@/components/DeviceProvider';

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const t = useTranslations();
  const { isMobile } = useDevice();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section || isMobile) return; // Skip heavy animations on mobile

      gsap.from('.services-label', {
        y: 16,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.services-heading', {
        y: 28,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 83%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.service-row', {
        y: 24,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.1,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.services-cta', {
        y: 16,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef, dependencies: [isMobile] }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="section-pad relative w-full overflow-hidden bg-black text-white"
    >
      <div className="section-shell">
        {/* Label */}
        <div className="services-label mb-8 md:mb-10">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/30">
            {t.services.intro}
          </span>
        </div>

        {/* Heading */}
        <h2 className="services-heading heading-display type-section mb-16 font-semibold tracking-tighter leading-none text-white md:mb-20">
          {t.services.title}
        </h2>

        {/* Editorial list */}
        <div className="divide-y divide-white/[0.07]">
          {t.services.items.map((item, i) => (
            <div
              key={i}
              className="service-row grid grid-cols-1 gap-4 py-10 md:grid-cols-12 md:gap-8 md:py-12"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="heading-display text-sm font-medium text-white/25 md:text-base">
                  {item.number}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4 lg:col-span-3">
                <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-6 md:col-start-7 lg:col-start-6">
                <p className="text-base leading-relaxed text-white/50 md:text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="services-cta mt-16 flex justify-start md:mt-20">
          <MagneticButton>
            <Link
              href="/contact"
              className="btn-pill block bg-white text-sm font-semibold text-black transition-colors hover:bg-white/90"
            >
              {t.services.cta}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
