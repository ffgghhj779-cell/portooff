'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE } from '@/lib/data/site';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { label: 'LinkedIn', href: SITE.social.linkedin, abbr: 'In' },
  { label: 'Instagram', href: SITE.social.instagram, abbr: 'Ig' },
  { label: 'Twitter', href: SITE.social.twitter, abbr: 'Tw' },
  { label: 'Dribbble', href: SITE.social.dribbble, abbr: 'Dr' },
  { label: 'Behance', href: SITE.social.behance, abbr: 'Be' },
] as const;

export function Footer() {
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

      gsap.from('.footer-reveal', {
        y: 48,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.08,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: footer,
          start: 'top 85%',
        },
      });

      gsap.from('.footer-cta-block', {
        y: 56,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: footer,
          start: 'top 88%',
          end: 'top 55%',
          scrub: 0.6,
        },
      });

      if (!tellUs || !tellUsText) return;

      const onEnter = () => {
        gsap.to(tellUsText, {
          color: '#ffffff',
          duration: 0.35,
          ease: 'expo.out',
        });
      };

      const onLeave = () => {
        gsap.to(tellUsText, {
          color: 'transparent',
          duration: 0.35,
          ease: 'expo.out',
        });
      };

      tellUs.addEventListener('mouseenter', onEnter);
      tellUs.addEventListener('mouseleave', onLeave);

      return () => {
        tellUs.removeEventListener('mouseenter', onEnter);
        tellUs.removeEventListener('mouseleave', onLeave);
        gsap.killTweensOf(tellUsText);
      };
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="section-pad relative z-10 w-full overflow-hidden !pt-8 text-white"
    >
      <div className="footer-ambient pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="footer-ambient__blob footer-ambient__blob--orange" />
        <div className="footer-ambient__blob footer-ambient__blob--blue" />
        <div className="footer-ambient__blob footer-ambient__blob--green" />
        <div className="footer-ambient__cables" />
      </div>

      <div className="section-shell relative z-10 pb-12 pt-16 md:pb-16">
        {!isContactPage && (
          <div className="footer-cta-block mb-24 text-center md:mb-32">
            <h2 className="heading-display mb-6 text-2xl font-medium text-white/70 md:text-4xl">
              Have an idea?
            </h2>
            <Link
              ref={tellUsRef}
              href="/contact"
              className="magnetic tell-us-cta inline-block"
            >
              <span
                ref={tellUsTextRef}
                className="tell-us-text type-display-xl block font-bold tracking-tighter leading-[1.05]"
              >
                TELL US
              </span>
            </Link>
          </div>
        )}

        <div className="footer-reveal mb-16 grid grid-cols-1 gap-12 border-t border-white/10 pt-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Primary contact
            </p>
            <a
              href={`tel:${SITE.phone}`}
              className="mb-4 block text-3xl font-bold tracking-tight text-white md:text-4xl"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex rounded-full border border-white/20 px-6 py-3 text-sm font-medium"
            >
              {SITE.email}
            </a>
          </div>

          <div className="md:col-span-3 md:col-start-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Navigate
            </p>
            <nav className="flex flex-col gap-2 text-base font-medium">
              <Link href="#services" className="w-fit">
                Services
              </Link>
              <Link href="/projects" className="w-fit">
                Projects
              </Link>
              <Link href="#blog" className="w-fit">
                Blog
              </Link>
              <Link href="/contact" className="w-fit">
                Contact
              </Link>
            </nav>
          </div>

          <div className="md:col-span-3 md:col-start-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/35">
              Social
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold"
                >
                  {social.abbr}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/40 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy">Privacy Policy</Link>
            <span>© {new Date().getFullYear()} {SITE.name} ({SITE.nameAr})</span>
          </div>
          <p className="text-white/30">Elite digital craftsmanship.</p>
        </div>
      </div>
    </footer>
  );
}
