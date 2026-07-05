'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { initSectionReveals } from '@/lib/scrollReveal';

gsap.registerPlugin(ScrollTrigger);

export function ScrollRevealController({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cleanup = initSectionReveals(containerRef.current);
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return cleanup;
    },
    { scope: containerRef }
  );

  return <div ref={containerRef}>{children}</div>;
}
