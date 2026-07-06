'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';
import { MagneticButton } from './MagneticButton';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function WhatWeDo() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);
  const sphere1Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.to(sphere1Ref.current, {
        y: '-30%',
        rotation: 45,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: MOTION.reveal,
            ease: MOTION.revealEase,
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 82%',
              end: 'top 55%',
              scrub: 0.6,
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-pad w-full overflow-hidden pb-8">
      <div className="section-shell relative flex flex-col items-center gap-10 md:flex-row md:gap-12">
        <div className="relative flex h-[320px] w-full items-center justify-center md:h-[380px] md:w-[45%]">
          <div
            ref={sphere1Ref}
            data-reveal="up"
            className="relative h-[260px] w-[260px] overflow-hidden rounded-[2.5rem] md:h-[340px] md:w-[340px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
              alt="3D abstract spheres"
              fill
              className="object-cover opacity-80 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start md:w-[55%]">
          <h2
            ref={textRef}
            className="heading-display type-body-lg mb-8 font-medium tracking-tighter leading-[0.95] text-black/85"
          >
            {t.whatWeDo.body.split('\n\n').map((paragraph, i) => (
              <span key={i}>
                {i > 0 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
                {paragraph}
              </span>
            ))}
          </h2>

          <MagneticButton>
            <Link
              href="#services"
              data-reveal="up"
              className="btn-pill block border border-black/20 text-black hover:bg-black hover:text-white"
            >
              {t.whatWeDo.cta}
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
