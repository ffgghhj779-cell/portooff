'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';
import { MagneticButton } from './MagneticButton';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from('.story-reveal', {
        y: 28,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.1,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
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
        {/* Label */}
        <div className="story-reveal mb-10 md:mb-14">
          <span className="text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-black/35">
            {t.story.label}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
          {/* Left: heading */}
          <div className="md:col-span-5 lg:col-span-4">
            <h2 className="story-reveal heading-display text-2xl font-semibold leading-[1.1] tracking-tighter text-black md:text-3xl lg:text-4xl">
              {t.story.heading}
            </h2>
          </div>

          {/* Right: body + CTA */}
          <div className="md:col-span-6 md:col-start-7 lg:col-span-7 lg:col-start-6">
            <div className="story-reveal">
              {t.story.body.split('\n\n').map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed text-black/65 md:text-lg ${
                    i > 0 ? 'mt-5' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="story-reveal mt-10">
              <MagneticButton>
                <Link
                  href="#services"
                  className="btn-pill block border border-black/20 text-sm font-medium text-black hover:bg-black hover:text-white"
                >
                  {t.story.cta}
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
