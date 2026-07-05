'use client';

import {
  createContext,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

type MotionPreferenceContextValue = {
  reducedMotion: boolean;
};

const MotionPreferenceContext = createContext<MotionPreferenceContextValue>({
  reducedMotion: false,
});

export function useMotionPreference() {
  return useContext(MotionPreferenceContext);
}

export function MotionPreferenceProvider({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: reduce)', () => {
        setReducedMotion(true);
        document.documentElement.classList.add('reduce-motion');
        document.documentElement.dataset.motion = 'reduce';

        gsap.defaults({ duration: 0.01, ease: 'none' });

        return () => {
          document.documentElement.classList.remove('reduce-motion');
          delete document.documentElement.dataset.motion;
          gsap.defaults({ duration: 0.5, ease: 'power2.out' });
        };
      });

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        setReducedMotion(false);
        document.documentElement.classList.remove('reduce-motion');
        document.documentElement.dataset.motion = 'full';
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <MotionPreferenceContext.Provider value={{ reducedMotion }}>
      <div ref={rootRef}>{children}</div>
    </MotionPreferenceContext.Provider>
  );
}
