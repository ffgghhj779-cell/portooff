'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';

export function MagneticButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const magnetic = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = magnetic.current;
      if (!el) return;

      const xTo = gsap.quickTo(el, 'x', {
        duration: MOTION.magnetic,
        ease: 'expo.out',
      });
      const yTo = gsap.quickTo(el, 'y', {
        duration: MOTION.magnetic,
        ease: 'expo.out',
      });

      const mouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = el.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.2);
        yTo(y * 0.2);
      };

      const mouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener('mousemove', mouseMove);
      el.addEventListener('mouseleave', mouseLeave);

      return () => {
        el.removeEventListener('mousemove', mouseMove);
        el.removeEventListener('mouseleave', mouseLeave);
        gsap.set(el, { x: 0, y: 0 });
      };
    },
    { scope: magnetic }
  );

  return (
    <div ref={magnetic} className={`magnetic ${className ?? ''}`}>
      {children}
    </div>
  );
}
