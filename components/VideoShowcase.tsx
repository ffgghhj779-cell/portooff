'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useDevice } from '@/components/DeviceProvider';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

const REEL_SRC =
  'https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-network-background-loop-31647-large.mp4';

const POSTER_SRC = '/about-sphere.png';

export function VideoShowcase() {
  const t = useTranslations();
  const { isMobile } = useDevice();
  const containerRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const wrapper = videoWrapperRef.current;
      if (!container || !wrapper) return;

      gsap.fromTo(
        wrapper,
        { scale: 0.88, opacity: 0.5 },
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
            scrub: isMobile ? 0.5 : 0.85,
          },
        }
      );
    },
    { scope: containerRef, dependencies: [isMobile] }
  );

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden py-6 md:py-10">
      <div
        ref={videoWrapperRef}
        data-cursor="play"
        data-cursor-label={t.common.play}
        className="media-hover relative mx-auto aspect-[16/9] w-[94%] overflow-hidden rounded-[2.5rem] bg-[#0a0a0a] will-change-transform md:w-[90%]"
      >
        {/* Desktop: autoplay video */}
        {!isMobile && (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
            poster={POSTER_SRC}
          >
            <source src={REEL_SRC} type="video/mp4" />
          </video>
        )}

        {/* Mobile: static poster — saves ~4MB of data */}
        {isMobile && (
          <div className="absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={POSTER_SRC}
              alt="Tasami showreel preview"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 translate-x-0.5 text-white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        )}

        {/* Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>
    </section>
  );
}
