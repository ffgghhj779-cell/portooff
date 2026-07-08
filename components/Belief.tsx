'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

export function Belief() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.belief-reveal', {
        y: 24,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.12,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="section-pad w-full overflow-hidden bg-[#f5f0ea]"
    >
      <div className="section-shell">
        <div className="mx-auto max-w-2xl md:max-w-3xl">
          {/* Label */}
          <div className="belief-reveal mb-10 md:mb-12">
            <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-black/35">
              {t.belief.label}
            </span>
          </div>

          {/* The manifesto — generous type, no decoration */}
          <p className="belief-reveal heading-display text-2xl font-medium leading-[1.25] tracking-tight text-black/80 md:text-3xl lg:text-4xl">
            &ldquo;{t.belief.body}&rdquo;
          </p>

          {/* Signature line */}
          <div className="belief-reveal mt-10 flex items-center gap-3 md:mt-12">
            <div className="h-[1px] w-8 bg-black/25" />
            <span className="text-sm font-medium text-black/40">Tasami</span>
          </div>
        </div>
      </div>
    </section>
  );
}
