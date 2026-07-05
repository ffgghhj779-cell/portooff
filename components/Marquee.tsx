'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = 'Tasami — Elite Digital Craftsmanship — ';

export function Marquee() {
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
        const velocityBoost = Math.min(
          Math.abs(velocityRef.current) * 0.004,
          5.5
        );
        const speed = 0.55 + velocityBoost;

        offset1Ref.current -= speed;
        offset2Ref.current += speed * 0.85;

        const halfWidth1 = track1.scrollWidth / 2;
        const halfWidth2 = track2.scrollWidth / 2;

        if (Math.abs(offset1Ref.current) >= halfWidth1) {
          offset1Ref.current = 0;
        }
        if (Math.abs(offset2Ref.current) >= halfWidth2) {
          offset2Ref.current = 0;
        }

        gsap.set(track1, { x: offset1Ref.current, force3D: true });
        gsap.set(track2, { x: offset2Ref.current, force3D: true });
      };

      gsap.ticker.add(tick);

      return () => {
        gsap.ticker.remove(tick);
      };
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="section-pad flex flex-col gap-5 overflow-hidden !py-20 md:gap-6"
    >
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={track1Ref} className="inline-flex will-change-transform">
          <span className="heading-display text-[clamp(3rem,8vw,7rem)] font-medium uppercase italic opacity-90">
            {MARQUEE_TEXT}
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <div ref={track2Ref} className="inline-flex will-change-transform">
          <span
            className="heading-display text-[clamp(3rem,8vw,7rem)] font-medium uppercase italic text-transparent"
            style={{ WebkitTextStroke: '1.5px currentColor' }}
          >
            {MARQUEE_TEXT}
            {MARQUEE_TEXT}
          </span>
        </div>
      </div>
    </section>
  );
}
