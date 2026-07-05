'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HOVER_SCALE, MOTION } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

/** Abstract motion reel — no human figures */
const REEL_SRC =
  'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-background-loop-31647-large.mp4';

export function VideoShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const mediaInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = videoWrapperRef.current;
      const mediaInner = mediaInnerRef.current;
      if (!container || !wrapper) return;

      gsap.fromTo(
        wrapper,
        { scale: 0.94, borderRadius: '2.5rem' },
        {
          scale: 1,
          borderRadius: '0rem',
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'center center',
            scrub: 0.6,
          },
        }
      );

      if (!mediaInner) return;

      gsap.set(mediaInner, { scale: 1, force3D: true });

      const onEnter = () => {
        gsap.to(mediaInner, {
          scale: HOVER_SCALE,
          duration: HOVER_DURATION,
          ease: MOTION.hoverEase,
          overwrite: 'auto',
          force3D: true,
        });
      };

      const onLeave = () => {
        gsap.to(mediaInner, {
          scale: 1,
          duration: HOVER_DURATION,
          ease: MOTION.hoverEase,
          overwrite: 'auto',
          force3D: true,
        });
      };

      wrapper.addEventListener('mouseenter', onEnter);
      wrapper.addEventListener('mouseleave', onLeave);

      return () => {
        wrapper.removeEventListener('mouseenter', onEnter);
        wrapper.removeEventListener('mouseleave', onLeave);
        gsap.killTweensOf(mediaInner);
      };
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="section-pad relative overflow-hidden">
      <div className="section-shell">
        <div
          ref={videoWrapperRef}
          data-cursor="play"
          data-cursor-label="Play"
          className="media-hover relative mx-auto aspect-video w-full overflow-hidden rounded-[2.5rem] bg-black"
        >
          <div
            ref={mediaInnerRef}
            className="absolute inset-0 will-change-transform"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="h-full w-full object-cover opacity-75 mix-blend-luminosity"
              poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
            >
              <source src={REEL_SRC} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
