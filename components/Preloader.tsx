'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Logo } from '@/components/Logo';
import { useDevice } from '@/components/DeviceProvider';

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const { isMobile } = useDevice();
  const [done, setDone] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const played = sessionStorage.getItem('tasami-preloader');
    if (played === '1' || document.documentElement.classList.contains('preloader-skipped')) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('tasami-preloader', '1');
        setDone(true);
      },
    });

    const slideDuration = isMobile ? 0.5 : 0.7;
    const barDuration = isMobile ? 0.55 : 1.2;

    tl.fromTo(
      root.querySelector('.preloader-brand'),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }
    )
      .to(
        root.querySelector('.preloader-bar'),
        { scaleX: 1, duration: barDuration, ease: 'power2.inOut' },
        0.15
      )
      .to(
        { value: 0 },
        {
          value: 100,
          duration: barDuration,
          ease: 'power2.inOut',
          onUpdate: function () {
            setProgress(Math.round(this.targets()[0].value));
          },
        },
        0.15
      )
      .to(root, { yPercent: -100, duration: slideDuration, ease: 'power4.inOut' }, '+=0.1');

    return () => {
      tl.kill();
    };
  }, [isMobile]);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="preloader fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0A0A0A] px-6 text-[#EAE8E3]"
      aria-hidden="true"
    >
      <div className="preloader-brand">
        <Logo theme="dark" showSlogan size="md" />
      </div>
      <div className="mt-12 flex flex-col items-center gap-4">
        <span className="text-[0.65rem] font-medium tracking-[0.2em] text-[#B8976A]">
          {progress.toString().padStart(3, '0')}
        </span>
        <div className="h-[2px] w-48 overflow-hidden bg-white/5">
          <div className="preloader-bar h-full w-full origin-left scale-x-0 bg-[#B8976A]" />
        </div>
      </div>
    </div>
  );
}
