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
  const track2Ref = useRef<HTMLDivElement>(null);
  const velocityRef = useRef(0);
  const offset1Ref = useRef(0);
  const offset2Ref = useRef(0);

  useGSAP(
    () => {
      const container = containerRef.current;
      const track1 = track1Ref.current;
      const track2 = track2Ref.current;
      if (!container || !track1 || !track2) return;

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
          : Math.min(Math.abs(velocityRef.current) * 0.004, 5.5);
        const speed = (isMobile ? 0.45 : 0.6) + velocityBoost;

        offset1Ref.current -= speed;
        offset2Ref.current += speed * 0.88;

        const halfWidth1 = track1.scrollWidth / 2;
        const halfWidth2 = track2.scrollWidth / 2;

        if (Math.abs(offset1Ref.current) >= halfWidth1) offset1Ref.current = 0;
        if (Math.abs(offset2Ref.current) >= halfWidth2) offset2Ref.current = 0;

        gsap.set(track1, { x: offset1Ref.current, force3D: true });
        gsap.set(track2, { x: offset2Ref.current, force3D: true });
      };

      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  const marqueeText = t.marquee.repeat(4);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden border-y border-black/[0.06] py-14 md:py-16"
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={track1Ref} className="inline-flex will-change-transform">
          <span className="heading-display type-marquee px-2 font-medium lowercase tracking-tighter leading-none text-black">
            {marqueeText}
          </span>
        </div>
      </div>
      <div className="mt-4 overflow-hidden whitespace-nowrap md:mt-5">
        <div ref={track2Ref} className="inline-flex will-change-transform">
          <span
            className="heading-display type-marquee px-2 font-medium lowercase tracking-tighter leading-none text-transparent"
            style={{ WebkitTextStroke: '1px rgba(0,0,0,0.35)' }}
          >
            {marqueeText}
          </span>
        </div>
      </div>
    </section>
  );
}
