'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { batchScrollTriggerRefresh } from '@/lib/batch-scroll-trigger-refresh';
import { useLenis } from '@/components/SmoothScroll';

export function ScrollTriggerRouteSync() {
  const pathname = usePathname();
  const { lenis } = useLenis();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (lenis) {
        lenis.resize();
      }
      ScrollTrigger.clearScrollMemory();
      batchScrollTriggerRefresh();
    });

    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  return null;
}
