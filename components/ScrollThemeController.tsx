'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { batchScrollTriggerRefresh } from '@/lib/batch-scroll-trigger-refresh';

gsap.registerPlugin(ScrollTrigger);

export const SCROLL_THEMES = {
  dark: { backgroundColor: '#050505', color: '#f5f5f5' },
  light: { backgroundColor: '#fafaf9', color: '#050505' },
} as const;

export type ScrollThemeName = keyof typeof SCROLL_THEMES;

export function ScrollThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const body = document.body;
      gsap.set(body, SCROLL_THEMES.dark);
      document.documentElement.dataset.theme = 'dark';

      const bridges = gsap.utils.toArray<HTMLElement>('[data-theme-bridge]', root);

      bridges.forEach((bridge) => {
        const fromKey = bridge.dataset.themeFrom as ScrollThemeName | undefined;
        const toKey = bridge.dataset.themeTo as ScrollThemeName | undefined;
        if (!fromKey || !toKey || !(fromKey in SCROLL_THEMES) || !(toKey in SCROLL_THEMES)) {
          return;
        }

        const from = SCROLL_THEMES[fromKey];
        const to = SCROLL_THEMES[toKey];

        gsap.fromTo(
          body,
          {
            backgroundColor: from.backgroundColor,
            color: from.color,
          },
          {
            backgroundColor: to.backgroundColor,
            color: to.color,
            ease: 'none',
            immediateRender: false,
            scrollTrigger: {
              trigger: bridge,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.35,
              onEnter: () => {
                document.documentElement.dataset.theme = toKey;
              },
              onLeaveBack: () => {
                document.documentElement.dataset.theme = fromKey;
              },
            },
          }
        );
      });

      batchScrollTriggerRefresh();
    },
    { scope: containerRef, dependencies: [] }
  );

  return <div ref={containerRef}>{children}</div>;
}
