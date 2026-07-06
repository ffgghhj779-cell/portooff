'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useLenis } from '@/components/SmoothScroll';
import { Logo } from '@/components/Logo';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useTranslations } from '@/lib/i18n/LocaleProvider';
import { MOTION } from '@/lib/motion';

export function Menu() {
  const t = useTranslations();
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

  const NAV_LINKS = [
    { href: '/', label: t.nav.home },
    { href: '#projects', label: t.nav.projects },
    { href: '#services', label: t.nav.services },
    { href: '#blog', label: t.nav.blog },
    { href: '/contact', label: t.nav.contact },
  ] as const;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    if (isOpen) lenis.stop();
    else lenis.start();
  }, [isOpen, lenis]);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((open) => !open);

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
            { clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' },
            {
              clipPath: 'circle(150% at calc(100% - 2.5rem) 2.5rem)',
              duration: MOTION.menuOpen,
            },
            0
          )
          .to(links, { yPercent: 0, opacity: 1, duration: 0.55, stagger: 0.06 }, 0.12)
          .to(brands, { y: 0, opacity: 1, duration: 0.45, stagger: 0.05 }, 0.18);

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
            { clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)', duration: 0.45 },
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
        className="magnetic fixed top-4 end-4 z-[70] flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-2 p-2 text-white mix-blend-difference sm:top-6 sm:end-6 md:end-12"
        aria-label={isOpen ? t.menu.close : t.menu.open}
        aria-expanded={isOpen}
      >
        <span ref={lineTopRef} className="block h-[2px] w-7 origin-center bg-white sm:w-8" />
        <span ref={lineMidRef} className="block h-[2px] w-7 bg-white sm:w-8" />
        <span ref={lineBotRef} className="block h-[2px] w-7 origin-center bg-white sm:w-8" />
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
        style={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
        data-lenis-prevent
        aria-hidden={!isOpen}
      >
        <div className="section-shell flex min-h-[100svh] flex-1 flex-col justify-between py-24 sm:py-28 md:py-36">
          <div className="menu-brand flex flex-wrap items-center justify-between gap-4">
            <Logo theme="dark" showSlogan size="sm" />
            <LanguageToggle theme="dark" />
          </div>

          <nav className="flex flex-col gap-1 sm:gap-2 md:gap-4" aria-label="Main menu">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="overflow-hidden py-0.5">
                <Link href={link.href} onClick={closeMenu} className="menu-link block py-1">
                  <span className="menu-link-inner heading-display type-menu inline-block font-semibold tracking-tighter leading-[1.1] text-white">
                    {link.label}
                  </span>
                </Link>
              </div>
            ))}
          </nav>

          <p className="menu-brand max-w-sm text-sm leading-relaxed text-white/45">
            {t.menu.tagline}
          </p>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(menu, document.body);
}
