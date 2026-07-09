'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMotionPreference } from '@/components/MotionPreferenceProvider';

gsap.registerPlugin(ScrollTrigger);

type LenisContextValue = {
  lenis: Lenis | null;
};

const LenisContext = createContext<LenisContextValue>({ lenis: null });

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  const { reducedMotion } = useMotionPreference();
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      setLenisInstance(null);
      return;
    }

    const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

    document.documentElement.classList.add('lenis', 'lenis-smooth');

    const lenis = new Lenis({
      // On touch devices: snappier lerp so scroll feels immediate, not floaty
      lerp: isTouch ? 0.14 : 0.08,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      // syncTouch: false — letting native touch handle momentum, Lenis just smooths the rest
      syncTouch: false,
      wheelMultiplier: 1.0,
      // Higher touch multiplier = more responsive swipe
      touchMultiplier: isTouch ? 2.2 : 1.55,
      infinite: false,
    });

    setLenisInstance(lenis);

    lenis.on('scroll', ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    requestAnimationFrame(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        lenis.resize();
        ScrollTrigger.refresh();
      }, 250);
    };
    window.addEventListener('resize', onResize, { passive: true });

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(resizeTimer);
      gsap.ticker.remove(ticker);
      ScrollTrigger.killAll();
      lenis.destroy();
      document.documentElement.classList.remove('lenis', 'lenis-smooth');
      setLenisInstance(null);
    };
  }, [reducedMotion]);

  return (
    <LenisContext.Provider value={{ lenis: lenisInstance }}>
      {children}
    </LenisContext.Provider>
  );
}
