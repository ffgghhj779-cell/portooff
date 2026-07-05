'use client';

import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export const SCROLL_THEMES = {
  dark: { backgroundColor: '#050505', color: '#f5f5f5' },
  light: { backgroundColor: '#fafaf9', color: '#050505' },
} as const;

export type ScrollThemeName = keyof typeof SCROLL_THEMES;

function isScrollTheme(value: string | undefined): value is ScrollThemeName {
  return value === 'dark' || value === 'light';
}

export function ScrollThemeController({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useGSAP(
    () => {
      const root = containerRef.current;
      if (!root) return;

      const body = document.body;
      const sections = gsap.utils.toArray<HTMLElement>(
        '[data-scroll-theme]',
        root
      );

      if (!sections.length) {
        gsap.set(body, SCROLL_THEMES.dark);
        document.documentElement.dataset.theme = 'dark';
        return;
      }

      const firstTheme = sections[0].dataset.scrollTheme;
      const initialTheme = isScrollTheme(firstTheme) ? firstTheme : 'dark';
      gsap.set(body, SCROLL_THEMES[initialTheme]);
      document.documentElement.dataset.theme = initialTheme;

      for (let i = 1; i < sections.length; i += 1) {
        const prevTheme = sections[i - 1].dataset.scrollTheme;
        const nextTheme = sections[i].dataset.scrollTheme;
        if (
          !isScrollTheme(prevTheme) ||
          !isScrollTheme(nextTheme) ||
          prevTheme === nextTheme
        ) {
          continue;
        }

        const from = SCROLL_THEMES[prevTheme];
        const to = SCROLL_THEMES[nextTheme];

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
            overwrite: 'auto',
            scrollTrigger: {
              trigger: sections[i],
              start: 'top center',
              end: 'bottom center',
              scrub: 1.1,
              onEnter: () => {
                document.documentElement.dataset.theme = nextTheme;
              },
              onLeaveBack: () => {
                document.documentElement.dataset.theme = prevTheme;
              },
            },
          }
        );
      }
    },
    { scope: containerRef, dependencies: [pathname] }
  );

  return <div ref={containerRef}>{children}</div>;
}
