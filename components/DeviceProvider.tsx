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

type DeviceContextValue = {
  isMobile: boolean;
  isTouch: boolean;
};

const DeviceContext = createContext<DeviceContextValue>({
  isMobile: false,
  isTouch: false,
});

export function useDevice() {
  return useContext(DeviceContext);
}

export function DeviceProvider({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(max-width: 767px)', () => {
        setIsMobile(true);
        document.documentElement.dataset.mobile = 'true';
        return () => {
          setIsMobile(false);
          delete document.documentElement.dataset.mobile;
        };
      });

      mm.add('(hover: none), (pointer: coarse)', () => {
        setIsTouch(true);
        document.documentElement.dataset.touch = 'true';
        return () => {
          setIsTouch(false);
          delete document.documentElement.dataset.touch;
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <DeviceContext.Provider value={{ isMobile, isTouch }}>
      <div ref={rootRef}>{children}</div>
    </DeviceContext.Provider>
  );
}
