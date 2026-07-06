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

/** Abstract 3D geometry / isometric UI only */
const posts = [
  {
    title: 'How to Make UI/UX website // Frontend development',
    date: '10/23/2024',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop',
    tag: 'DESIGN COURSE',
  },
  {
    title: 'How to Cook an Emotional Site // Web Development',
    date: '10/21/2024',
    image:
      'https://images.unsplash.com/photo-1614850523459-40c4e63ac874?q=80&w=2564&auto=format&fit=crop',
    tag: 'DESIGN COURSE',
  },
  {
    title: 'Cuberto Mouse Follower',
    date: '4/11/2022',
    image:
      'https://images.unsplash.com/photo-1617791160505-40fe982dbdcc?q=80&w=2426&auto=format&fit=crop',
    tag: 'DEV SOURCE',
  },
] as const;

export function Blog() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const rows = gsap.utils.toArray<HTMLElement>('.blog-row', section);
      const cleanups: Array<() => void> = [];

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

      gsap.from('.blog-heading', {
        y: 48,
        opacity: 0,
        duration: MOTION.reveal,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 85%',
          end: 'top 60%',
          scrub: 0.55,
        },
      });

      gsap.from('.blog-row', {
        y: 48,
        opacity: 0,
        duration: MOTION.reveal,
        stagger: 0.08,
        ease: MOTION.revealEase,
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
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
                    referrerPolicy="no-referrer"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
