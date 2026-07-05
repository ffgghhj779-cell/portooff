'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SITE } from '@/lib/data/site';

export function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const played = sessionStorage.getItem('tasami-preloader');
    if (played === '1') {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem('tasami-preloader', '1');
        setDone(true);
      },
    });

    tl.fromTo(root.querySelector('.preloader-logo'), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
      .to(root.querySelector('.preloader-bar'), { scaleX: 1, duration: 0.9, ease: 'power2.inOut' }, 0.2)
      .to(root, { yPercent: -100, duration: 0.7, ease: 'power4.inOut' }, 1.1);

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={rootRef}
      className="preloader fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black text-white"
      aria-hidden="true"
    >
      <p className="preloader-logo font-display text-2xl font-bold lowercase tracking-tighter md:text-3xl">
        {SITE.name}
        <span className="ml-2 text-sm font-normal uppercase tracking-[0.2em] opacity-50">
          {SITE.nameAr}
        </span>
      </p>
      <div className="mt-8 h-[2px] w-40 overflow-hidden bg-white/10">
        <div className="preloader-bar h-full w-full origin-left scale-x-0 bg-white" />
      </div>
    </div>
  );
}
