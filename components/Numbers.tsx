'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

export function Numbers() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.numbers-item', {
        y: 20,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.12,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      });
    },
    { scope: sectionRef }
  );

  const t = useTranslations();
  const stats = [t.numbers.stat1, t.numbers.stat2, t.numbers.stat3];

  return (
    <section
      ref={sectionRef}
      className="border-y border-white/[0.06] bg-black py-12 md:py-14"
    >
      <div className="section-shell">
        <dl className="grid grid-cols-3 divide-x divide-white/[0.06]">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="numbers-item flex flex-col items-center gap-1.5 px-4 text-center md:px-8"
            >
              <dt className="heading-display text-2xl font-semibold tracking-tighter text-white md:text-4xl">
                {stat.value}
              </dt>
              <dd className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/30 md:text-[0.7rem]">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
