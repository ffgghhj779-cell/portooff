'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { MagneticButton } from './MagneticButton';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export function WhatWeDo() {
  const sectionRef = useRef<HTMLElement>(null);
  const sphere1Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      gsap.to(sphere1Ref.current, {
        y: '-30%',
        rotation: 45,
        ease: 'none',
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="section-pad w-full overflow-hidden">
      <div className="section-shell relative flex flex-col items-center gap-16 md:flex-row">
        <div className="relative flex h-[400px] w-full items-center justify-center md:w-1/2">
          <div
            ref={sphere1Ref}
            className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
              alt="3D abstract spheres"
              fill
              className="object-cover opacity-80 mix-blend-multiply"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start md:w-1/2">
          <h2
            ref={textRef}
            className="heading-display mb-12 text-2xl font-medium leading-relaxed md:text-3xl lg:text-4xl"
          >
            Since 2010, we have been helping our clients find exceptional
            solutions for their businesses, creating memorable websites and
            digital products.
            <br />
            <br />
            Tasami doesn&apos;t do cookie-cutter solutions — we build products
            exactly as they were during the design phase, no shortcuts or
            simplifications.
          </h2>

          <MagneticButton>
            <Link
              href="#services"
              className="block rounded-full border border-gray-300 px-10 py-5 font-medium transition-colors hover:bg-black hover:text-white"
            >
              What we do
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
