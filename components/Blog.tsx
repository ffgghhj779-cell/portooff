'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MOTION } from '@/lib/motion';
import { useTranslations } from '@/lib/i18n/LocaleProvider';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

/** Local images — always available, zero network dependency */
const POST_IMAGES = [
  '/blog/ui-ux-course.png',
  '/blog/emotional-web.png',
  '/blog/mouse-cursor.png',
] as const;

const POST_DATES = ['10/23/2024', '10/21/2024', '4/11/2022'] as const;

export function Blog() {
  const t = useTranslations();
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      const rows = gsap.utils.toArray<HTMLElement>('.blog-row', section);
      const cleanups: Array<() => void> = [];

      if (hasFinePointer) {
        rows.forEach((row) => {
          const imageInner = row.querySelector<HTMLElement>('.blog-image-inner');
          if (!imageInner) return;

          gsap.set(imageInner, { scale: 1, force3D: true });

          const onEnter = () =>
            gsap.to(imageInner, {
              scale: 1.05,
              duration: HOVER_DURATION,
              ease: MOTION.hoverEase,
              overwrite: 'auto',
              force3D: true,
            });

          const onLeave = () =>
            gsap.to(imageInner, {
              scale: 1,
              duration: HOVER_DURATION,
              ease: MOTION.hoverEase,
              overwrite: 'auto',
              force3D: true,
            });

          row.addEventListener('mouseenter', onEnter);
          row.addEventListener('mouseleave', onLeave);

          cleanups.push(() => {
            row.removeEventListener('mouseenter', onEnter);
            row.removeEventListener('mouseleave', onLeave);
            gsap.killTweensOf(imageInner);
          });
        });
      }

      gsap.from('.blog-heading', {
        y: isMobile ? 24 : 48,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      gsap.from('.blog-row', {
        y: isMobile ? 20 : 48,
        opacity: 0,
        duration: isMobile ? 0.55 : MOTION.reveal,
        stagger: isMobile ? 0.05 : 0.08,
        ease: MOTION.revealEase,
        clearProps: isMobile ? 'all' : '',
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          toggleActions: 'play none none none',
        },
      });

      return () => {
        cleanups.forEach((fn) => fn());
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="section-pad relative w-full overflow-hidden bg-black text-white"
    >
      <div className="section-shell">
        <div className="mb-10 flex items-end justify-between md:mb-14">
          <h2 className="blog-heading heading-display type-section font-bold tracking-tighter leading-none text-white">
            {t.blog.title}
          </h2>
          <Link
            href="/blog"
            className="hidden text-sm font-medium text-white/45 underline underline-offset-4 hover:text-white/80 md:block"
          >
            {t.blog.visitBlog}
          </Link>
        </div>

        <div className="flex flex-col divide-y divide-white/[0.07]">
          {t.blog.posts.map((post, i) => (
            <Link
              key={i}
              href="/blog"
              className="blog-row group flex items-center gap-5 py-6 md:gap-8 md:py-8"
              data-cursor="explore"
              data-cursor-label={t.common.explore}
            >
              {/* Image */}
              <div className="media-hover relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-2xl bg-white/5 md:w-40">
                <div className="blog-image-inner absolute inset-0">
                  <Image
                    src={POST_IMAGES[i]}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 112px, 160px"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-1 flex-col gap-2 min-w-0">
                <span className="w-fit rounded-full bg-white/10 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-white/50">
                  {post.tag}
                </span>
                <p className="type-body-lg font-semibold tracking-tight text-white leading-snug truncate md:whitespace-normal">
                  {post.title}
                </p>
                <span className="text-xs text-white/30">{POST_DATES[i]}</span>
              </div>

              {/* Arrow */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="h-5 w-5 shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white/60"
              >
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          ))}
        </div>

        {/* Mobile: visit blog link */}
        <div className="mt-8 md:hidden">
          <Link
            href="/blog"
            className="text-sm font-medium text-white/45 underline underline-offset-4"
          >
            {t.blog.visitBlog}
          </Link>
        </div>
      </div>
    </section>
  );
}
