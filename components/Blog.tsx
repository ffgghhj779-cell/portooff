'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from './MagneticButton';
import Image from 'next/image';
import Link from 'next/link';
import { HOVER_SCALE, MOTION } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

const HOVER_DURATION = MOTION.hover;

/** Local images — always available, zero network dependency */
const posts = [
  {
    title: 'How to Make UI/UX website // Frontend development',
    date: '10/23/2024',
    image: '/blog/ui-ux-course.png',
    tag: 'DESIGN COURSE',
  },
  {
    title: 'How to Cook an Emotional Site // Web Development',
    date: '10/21/2024',
    image: '/blog/emotional-web.png',
    tag: 'DESIGN COURSE',
  },
  {
    title: 'Cuberto Mouse Follower',
    date: '4/11/2022',
    image: '/blog/mouse-cursor.png',
    tag: 'DEV SOURCE',
  },
] as const;

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const isMobile = window.matchMedia('(max-width: 767px)').matches;
      const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

      const rows = gsap.utils.toArray<HTMLElement>('.blog-row', section);
      const cleanups: Array<() => void> = [];

      // Only attach hover listeners on desktop with fine pointer
      if (hasFinePointer) {
        rows.forEach((row) => {
        const imageInner = row.querySelector<HTMLElement>('.blog-image-inner');
        if (!imageInner) return;

        gsap.set(imageInner, { scale: 1, force3D: true });

        const onEnter = () => {
          gsap.to(imageInner, {
            scale: HOVER_SCALE,
            duration: HOVER_DURATION,
            ease: MOTION.hoverEase,
            overwrite: 'auto',
            force3D: true,
          });
        };

        const onLeave = () => {
          gsap.to(imageInner, {
            scale: 1,
            duration: HOVER_DURATION,
            ease: MOTION.hoverEase,
            overwrite: 'auto',
            force3D: true,
          });
        };

        row.addEventListener('mouseenter', onEnter);
        row.addEventListener('mouseleave', onLeave);

          cleanups.push(() => {
            row.removeEventListener('mouseenter', onEnter);
            row.removeEventListener('mouseleave', onLeave);
            gsap.killTweensOf(imageInner);
          });
        });
      } // end hasFinePointer

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
      className="section-pad w-full rounded-t-[2.5rem]"
    >
      <div className="section-shell flex flex-col gap-12 md:flex-row md:gap-16">
        <div className="w-full md:w-1/3">
          <h2 className="blog-heading heading-display type-section sticky top-32 font-bold tracking-tighter leading-none text-white">
            Blog
          </h2>
        </div>

        <div className="flex w-full flex-col gap-12 md:w-2/3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="blog-row group flex cursor-pointer flex-col items-start gap-6 md:flex-row md:items-center"
            >
              <div
                data-cursor="explore"
                data-cursor-label="Explore"
                className="media-hover relative aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-white/5 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.98] md:w-[42%]"
              >
                <div className="blog-image-inner absolute inset-0 will-change-transform transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 95vw, 44vw"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-3 md:w-[58%]">
                <span className="inline-flex items-center rounded-full border border-white/15 px-4 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/45">
                  {post.tag}
                </span>
                <h3 className="heading-display text-lg font-bold tracking-tighter leading-[1.1] text-white md:text-2xl">
                  {post.title}
                </h3>
                <p className="text-sm text-white/40">{post.date}</p>
              </div>
            </article>
          ))}

          <div className="mt-8">
            <MagneticButton className="inline-block">
              <Link
                href="#blog"
                className="btn-pill inline-block border border-white/30 text-white"
              >
                Visit our blog
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
