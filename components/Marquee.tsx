'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslations } from '@/lib/i18n/LocaleProvider';
import { useDevice } from '@/components/DeviceProvider';

gsap.registerPlugin(ScrollTrigger);

export function Marquee() {
  const t = useTranslations();
  const { isMobile } = useDevice();
  const containerRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const offsetRef = useRef(0);

  useGSAP(
    () => {
      const container = containerRef.current;
      const track1 = track1Ref.current;
      if (!container || !track1) return;

      ScrollTrigger.create({
        trigger: container,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          velocityRef.current = self.getVelocity();
        },
      });

      const tick = () => {
        const velocityBoost = isMobile
          ? 0
          : Math.min(Math.abs(velocityRef.current) * 0.003, 4);
        const speed = (isMobile ? 0.4 : 0.55) + velocityBoost;

        offsetRef.current -= speed;
        const halfWidth = track1.scrollWidth / 2;
        if (Math.abs(offsetRef.current) >= halfWidth) offsetRef.current = 0;

        gsap.set(track1, { x: offsetRef.current, force3D: true });
      };

      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  // Repeat text enough to fill double viewport width
  const marqueeText = t.marquee.repeat(3);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden border-y border-black/[0.07] bg-[#f5f0ea] py-10 md:py-12"
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={track1Ref} className="inline-flex will-change-transform">
          <span className="heading-display type-marquee px-2 font-medium lowercase tracking-tighter leading-none text-black/70">
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
