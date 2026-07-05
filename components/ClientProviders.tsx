'use client';

import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider';
import { ScrollThemeController } from '@/components/ScrollThemeController';
import { ScrollLayoutStabilizer } from '@/components/ScrollLayoutStabilizer';
import { ScrollTriggerRouteSync } from '@/components/ScrollTriggerRouteSync';
import { Menu } from '@/components/Menu';
import { markGsapReady } from '@/lib/gsap-ready';

const CustomCursor = dynamic(
  () =>
    import('@/components/CustomCursor').then((mod) => ({
      default: mod.CustomCursor,
    })),
  { ssr: false }
);

const SmoothScroll = dynamic(
  () =>
    import('@/components/SmoothScroll').then((mod) => ({
      default: mod.SmoothScroll,
    })),
  { ssr: false }
);

function GsapReadyFallback() {
  useEffect(() => {
    const timer = window.setTimeout(markGsapReady, 2500);
    return () => window.clearTimeout(timer);
  }, []);

  return null;
}

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionPreferenceProvider>
      <GsapReadyFallback />
      <CustomCursor />
      <Menu />
      <SmoothScroll>
        <ScrollLayoutStabilizer />
        <ScrollTriggerRouteSync />
        <ScrollThemeController>{children}</ScrollThemeController>
      </SmoothScroll>
    </MotionPreferenceProvider>
  );
}
