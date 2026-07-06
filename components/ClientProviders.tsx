'use client';

import { CustomCursor } from '@/components/CustomCursor';
import { DeviceProvider } from '@/components/DeviceProvider';
import { MotionPreferenceProvider } from '@/components/MotionPreferenceProvider';
import { ScrollThemeController } from '@/components/ScrollThemeController';
import { ScrollRevealController } from '@/components/ScrollRevealController';
import { Preloader } from '@/components/Preloader';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Menu } from '@/components/Menu';
import { LocaleProvider } from '@/lib/i18n/LocaleProvider';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider>
      <DeviceProvider>
        <MotionPreferenceProvider>
          <Preloader />
          <SmoothScroll>
            <ScrollThemeController>
              <ScrollRevealController>{children}</ScrollRevealController>
            </ScrollThemeController>
          </SmoothScroll>
          <CustomCursor />
          <Menu />
        </MotionPreferenceProvider>
      </DeviceProvider>
    </LocaleProvider>
  );
}
