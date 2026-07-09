'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/data/site';
import { useLocale, useTranslations } from '@/lib/i18n/LocaleProvider';
import { useDevice } from '@/components/DeviceProvider';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: 'LinkedIn', href: SITE.social.linkedin, abbr: 'In' },
  { label: 'Instagram', href: SITE.social.instagram, abbr: 'Ig' },
  { label: 'Twitter', href: SITE.social.twitter, abbr: 'Tw' },
  { label: 'Dribbble', href: SITE.social.dribbble, abbr: 'Dr' },
  { label: 'Behance', href: SITE.social.behance, abbr: 'Be' },
] as const;

export function Footer() {
  const { locale } = useLocale();
  const t = useTranslations();
  const { isMobile } = useDevice();
  const footerRef = useRef<HTMLElement>(null);
  const tellUsRef = useRef<HTMLAnchorElement>(null);
  const tellUsTextRef = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  useGSAP(
    () => {
      const footer = footerRef.current;
      const tellUs = tellUsRef.current;
      const tellUsText = tellUsTextRef.current;
      if (!footer) return;

      // Skip scroll-triggered reveal animations on mobile — they cause jank
      if (!isMobile) {
        gsap.from('.footer-reveal', {
          y: 24,
          opacity: 0,
          duration: MOTION.reveal,
          stagger: 0.08,
          ease: MOTION.revealEase,
          scrollTrigger: {
            trigger: footer,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        });

        gsap.from('.footer-cta-block', {
          y: 32,
          opacity: 0,
          duration: MOTION.reveal,
          ease: MOTION.revealEase,
          scrollTrigger: {
            trigger: footer,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      }

      if (!tellUs || !tellUsText) return;

      const onEnter = () => {
        gsap.to(tellUsText, { color: '#ffffff', duration: 0.35, ease: 'expo.out' });
      };

      const onLeave = () => {
        gsap.to(tellUsText, { color: 'transparent', duration: 0.35, ease: 'expo.out' });
      };

      tellUs.addEventListener('mouseenter', onEnter);
      tellUs.addEventListener('mouseleave', onLeave);

      return () => {
        tellUs.removeEventListener('mouseenter', onEnter);
        tellUs.removeEventListener('mouseleave', onLeave);
        gsap.killTweensOf(tellUsText);
      };
    },
    { scope: footerRef, dependencies: [isMobile] }
  );

  return (
    <footer
      ref={footerRef}
      className="section-pad relative z-10 w-full overflow-hidden bg-[#050505] !pt-8 text-white"
    >
      <div className="section-shell relative z-10 pb-12 pt-16 md:pb-16">
        {/* CTA — only shown when not on contact page */}
        {!isContactPage && (
          <div className="footer-cta-block mb-24 text-center md:mb-32">
            <p className="mb-6 text-base font-normal text-white/40 md:text-lg">
              {t.footer.idea}
            </p>
            <Link
              ref={tellUsRef}
              href="/contact"
              className="magnetic tell-us-cta inline-block"
            >
              <span
                ref={tellUsTextRef}
                className="tell-us-text type-display-xl block font-bold tracking-tighter leading-[0.95]"
              >
                {t.footer.tellUs}
              </span>
            </Link>
          </div>
        )}

        {/* Footer grid */}
        <div className="footer-reveal mb-16 grid grid-cols-1 gap-12 border-t border-white/[0.07] pt-12 md:grid-cols-12 md:gap-8">
          {/* Contact */}
          <div className="md:col-span-4">
            <p className="mb-3 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-white/30">
              {t.footer.primaryContact}
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="mb-4 block text-2xl font-semibold tracking-tight text-white transition-opacity hover:opacity-70 md:text-3xl"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/30 hover:text-white"
            >
              {SITE.email}
            </a>
          </div>

          {/* Navigate */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-white/30">
              {t.footer.navigate}
            </p>
            <nav className="flex flex-col gap-2.5 text-sm font-medium text-white/60">
              <Link href="/work" className="w-fit transition-colors hover:text-white">
                {t.nav.work}
              </Link>
              <Link href="/#services" className="w-fit transition-colors hover:text-white">
                {t.nav.services}
              </Link>
              <Link href="/contact" className="w-fit transition-colors hover:text-white">
                {t.nav.contact}
              </Link>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-3 md:col-start-10">
            <p className="mb-4 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-white/30">
              {t.footer.social}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xs font-semibold text-white/50 transition-colors hover:border-white/30 hover:text-white"
                >
                  {social.abbr}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/[0.07] pt-8 text-xs text-white/30 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy" className="transition-colors hover:text-white/60">
              {t.footer.privacy}
            </Link>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <span className="hidden w-1 h-1 rounded-full bg-white/20 md:block" />
            <span className="text-[#B8976A]/80 font-medium">
              {locale === 'ar' ? 'إدارة مصطفى راضي' : 'Managed by Mustafa Rady'}
            </span>
          </div>
          <p className="text-white/20">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
