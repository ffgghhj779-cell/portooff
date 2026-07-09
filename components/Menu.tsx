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
import { SITE } from '@/lib/data/site';

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
    { href: '/work', label: t.nav.work },
    { href: '/#services', label: t.nav.services },
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
          .to(links, { yPercent: 0, opacity: 1, duration: 0.45, stagger: 0.05 }, 0.1)
          .to(brands, { y: 0, opacity: 1, duration: 0.4, stagger: 0.04 }, 0.15);

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
        className="magnetic fixed top-4 end-4 z-[70] flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-2 p-2 text-white sm:top-6 sm:end-6 md:end-12"
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
        className="menu-backdrop pointer-events-none fixed inset-0 z-[55] bg-[#050505]/50 opacity-0"
        aria-hidden={!isOpen}
      />

      <div
        ref={overlayRef}
        className="menu-overlay mesh-glow pointer-events-none fixed inset-0 z-[60] flex min-h-[100svh] flex-col bg-[#050505] text-white"
        style={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2.5rem)' }}
        data-lenis-prevent
        aria-hidden={!isOpen}
      >
        <div className="section-shell flex min-h-[100svh] flex-1 flex-col justify-between py-24 sm:py-28 md:py-36">
          <div className="menu-brand flex flex-wrap items-center justify-between gap-4">
            <Logo theme="dark" showSlogan size="sm" />
            <LanguageToggle theme="dark" />
          </div>

          <nav className="flex flex-col gap-0 sm:gap-1 md:gap-4" aria-label="Main menu">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="overflow-hidden">
                <Link href={link.href} onClick={closeMenu} className="menu-link group flex items-center py-2">
                  <span className="menu-link-inner heading-display type-menu inline-block font-semibold tracking-tighter leading-[1.15] text-[#CFCAC2] transition-colors duration-300 group-hover:text-[#B8976A]">
                    {link.label}
                  </span>
                </Link>
              </div>
            ))}
          </nav>

          <div className="menu-brand flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-sm leading-relaxed text-white/45">
              {t.menu.tagline}
            </p>
            {/* Quick social links in menu */}
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.16em] text-white/35">
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Ig</a>
              <a href={SITE.social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Li</a>
              <a href={SITE.social.behance} target="_blank" rel="noopener noreferrer" className="hover:text-white/70 transition-colors">Be</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(menu, document.body);
}
