'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenis } from '@/components/SmoothScroll';
import { MOTION } from '@/lib/motion';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
] as const;

export function Menu() {
  const rootRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);
  const lineTopRef = useRef<HTMLSpanElement>(null);
  const lineMidRef = useRef<HTMLSpanElement>(null);
  const lineBotRef = useRef<HTMLSpanElement>(null);
  const wasOpenRef = useRef(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { lenis } = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (isOpen) lenis.stop();
    else lenis.start();
  }, [isOpen, lenis]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const backdrop = backdropRef.current;
      const lineTop = lineTopRef.current;
      const lineMid = lineMidRef.current;
      const lineBot = lineBotRef.current;
      if (!overlay || !backdrop) return;

      const links = gsap.utils.toArray<HTMLElement>('.menu-link-inner', overlay);
      const brands = gsap.utils.toArray<HTMLElement>('.menu-brand', overlay);

      if (isOpen) {
        wasOpenRef.current = true;
        document.body.style.overflow = 'hidden';

        gsap.set(overlay, { pointerEvents: 'auto', visibility: 'visible' });
        gsap.set(backdrop, { pointerEvents: 'auto' });
        gsap.set(links, { yPercent: 100, opacity: 0 });
        gsap.set(brands, { y: 24, opacity: 0 });

        gsap
          .timeline({ defaults: { ease: MOTION.menuEase } })
          .to(backdrop, { opacity: 1, duration: 0.35 }, 0)
          .fromTo(
            overlay,
            { clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' },
            {
              clipPath: 'circle(150% at calc(100% - 3rem) 3rem)',
              duration: MOTION.menuOpen,
            },
            0
          )
          .to(
            links,
            {
              yPercent: 0,
              opacity: 1,
              duration: 0.55,
              stagger: 0.06,
              ease: MOTION.menuEase,
            },
            0.15
          )
          .to(
            brands,
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'expo.out' },
            0.2
          );

        if (lineTop && lineMid && lineBot) {
          gsap.to(lineTop, { rotate: 45, y: 10, duration: 0.28, ease: 'expo.out' });
          gsap.to(lineMid, { opacity: 0, duration: 0.15 });
          gsap.to(lineBot, { rotate: -45, y: -10, duration: 0.28, ease: 'expo.out' });
        }
      } else if (wasOpenRef.current) {
        document.body.style.overflow = '';

        gsap
          .timeline({
            defaults: { ease: MOTION.menuEase },
            onComplete: () => {
              gsap.set(overlay, { pointerEvents: 'none' });
              gsap.set(backdrop, { pointerEvents: 'none' });
            },
          })
          .to(links, {
            yPercent: -60,
            opacity: 0,
            duration: MOTION.menuClose,
            stagger: 0.03,
          })
          .to(brands, { y: -12, opacity: 0, duration: 0.3, stagger: 0.04 }, 0)
          .to(
            overlay,
            { clipPath: 'circle(0% at calc(100% - 3rem) 3rem)', duration: 0.45 },
            0.05
          )
          .to(backdrop, { opacity: 0, duration: 0.35 }, 0.08);

        if (lineTop && lineMid && lineBot) {
          gsap.to(lineTop, { rotate: 0, y: 0, duration: 0.28, ease: 'expo.out' });
          gsap.to(lineMid, { opacity: 1, duration: 0.15 });
          gsap.to(lineBot, { rotate: 0, y: 0, duration: 0.28, ease: 'expo.out' });
        }
      }
    },
    { dependencies: [isOpen] }
  );

  const menu = (
    <div ref={rootRef}>
      <button
        type="button"
        onClick={toggleMenu}
        className="magnetic fixed top-6 right-6 z-[70] flex flex-col gap-2 p-2 text-white mix-blend-difference md:right-12"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <span ref={lineTopRef} className="block h-[2px] w-8 origin-center bg-white" />
        <span ref={lineMidRef} className="block h-[2px] w-8 bg-white" />
        <span ref={lineBotRef} className="block h-[2px] w-8 origin-center bg-white" />
      </button>

      <div
        ref={backdropRef}
        role="presentation"
        onClick={closeMenu}
        className="menu-backdrop pointer-events-none fixed inset-0 z-[55] bg-black/50 opacity-0"
        aria-hidden={!isOpen}
      />

      <div
        ref={overlayRef}
        className="menu-overlay mesh-glow pointer-events-none fixed inset-0 z-[60] flex min-h-[100svh] flex-col bg-black text-white"
        style={{ clipPath: 'circle(0% at calc(100% - 3rem) 3rem)' }}
        data-lenis-prevent
        aria-hidden={!isOpen}
      >
        <div className="section-shell flex min-h-[100svh] flex-1 flex-col justify-between py-28 md:py-36">
          <p className="menu-brand font-display text-sm font-medium uppercase tracking-[0.32em] text-white/40">
            Tasami · تسامي
          </p>

          <nav className="flex flex-col gap-2 md:gap-4" aria-label="Main menu">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="overflow-hidden py-0.5">
                <Link href={link.href} onClick={closeMenu} className="menu-link block">
                  <span className="menu-link-inner heading-display type-menu inline-block font-semibold tracking-tighter leading-[1.1] text-white">
                    {link.label}
                  </span>
                </Link>
              </div>
            ))}
          </nav>

          <p className="menu-brand max-w-sm text-sm leading-relaxed text-white/45">
            Elite digital craftsmanship — Cairo & beyond.
          </p>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(menu, document.body);
}
