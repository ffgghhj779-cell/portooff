'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from './MagneticButton';
import Image from 'next/image';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const HOVER_SCALE = 1.05;
const HOVER_DURATION = 1.4;

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
    title: 'Tasami Mouse Follower',
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
            ease: 'power2.out',
            overwrite: 'auto',
            force3D: true,
          });
        };

        const onLeave = () => {
          gsap.to(imageInner, {
            scale: 1,
            duration: HOVER_DURATION,
            ease: 'power2.out',
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

      gsap.from('.blog-row', {
        y: 48,
        opacity: 0,
        duration: 0.95,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
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
      className="section-pad w-full rounded-t-[3rem]"
    >
      <div className="section-shell flex flex-col gap-16 md:flex-row">
        <div className="w-full md:w-1/3">
          <h2 className="heading-display sticky top-40 text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-[0.9]">
            Blog
          </h2>
        </div>

        <div className="flex w-full flex-col gap-16 md:w-2/3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="blog-row group flex cursor-pointer flex-col items-center gap-8 md:flex-row"
            >
              <div
                data-cursor="explore"
                data-cursor-label="Explore"
                className="media-hover relative aspect-video w-full overflow-hidden rounded-3xl bg-gray-800 md:w-1/2"
              >
                <div className="blog-image-inner absolute inset-0 will-change-transform">
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
              <div className="flex w-full flex-col items-start gap-4 md:w-1/2">
                <span className="rounded-full border border-white/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-zinc-300">
                  {post.tag}
                </span>
                <h3 className="heading-display text-xl font-bold leading-snug md:text-3xl">
                  {post.title}
                </h3>
                <p className="text-zinc-500">{post.date}</p>
              </div>
            </article>
          ))}

          <div className="mt-8">
            <MagneticButton className="inline-block">
              <Link
                href="#blog"
                className="inline-block rounded-full border border-white px-10 py-5 font-medium text-white"
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
