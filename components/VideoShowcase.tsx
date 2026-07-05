'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { HOVER_SCALE, MOTION } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

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
        { scale: 0.9, opacity: 0.6 },
        {
          scale: 1,
          opacity: 1,
          borderRadius: '0rem',
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: container,
            start: 'top bottom',
            end: 'center center',
            scrub: 0.85,
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
    <section ref={containerRef} className="relative w-full overflow-hidden py-6 md:py-10">
      <div
        ref={videoWrapperRef}
        data-cursor="play"
        data-cursor-label="Play"
        className="media-hover relative mx-auto aspect-[16/9] w-[94%] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] will-change-transform md:w-[90%]"
      >
        <div ref={mediaInnerRef} className="absolute inset-0 will-change-transform">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop"
          >
            <source src={REEL_SRC} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
