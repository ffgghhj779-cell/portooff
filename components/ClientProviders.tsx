'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider';
import { ScrollThemeController } from '@/components/ScrollThemeController';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Menu } from '@/components/Menu';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionPreferenceProvider>
      <CustomCursor />
      <Menu />
      <SmoothScroll>
        <ScrollThemeController>{children}</ScrollThemeController>
      </SmoothScroll>
    </MotionPreferenceProvider>
  );
}
