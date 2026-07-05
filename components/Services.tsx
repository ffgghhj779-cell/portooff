'use client';



import { useRef } from 'react';

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useGSAP } from '@gsap/react';

import Image from 'next/image';

import Link from 'next/link';

import { MagneticButton } from './MagneticButton';

import { HOVER_SCALE, MOTION } from '@/lib/motion';



gsap.registerPlugin(ScrollTrigger);



const HOVER_DURATION = MOTION.hover;



const services = [

  {

    title: 'Brand Identity',

    description:

      'Strategic design that positions AI products for trust and clarity.',

    image:

      'https://images.unsplash.com/photo-1614850523459-40c4e63ac874?q=80&w=1600&auto=format&fit=crop',

    tall: false,

  },

  {

    title: 'AI-enhanced UX/UI design',

    description:

      'Interfaces that adapt, predict, and respond intelligently.',

    image:

      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1600&auto=format&fit=crop',

    tall: true,

  },

  {

    title: 'Custom development',

    description:

      'Frontend + backend + AI integrations — built for performance and scalability.',

    image:

      'https://images.unsplash.com/photo-1620641788421-a37b341781a6?q=80&w=1600&auto=format&fit=crop',

    tall: false,

  },

] as const;



function ServiceCard({

  service,

}: {

  service: (typeof services)[number];

}) {

  return (

    <article className="service-card group">

      <div

        className={`service-media relative w-full overflow-hidden rounded-[2rem] bg-[#ececec] md:rounded-[2.5rem] ${

          service.tall ? 'aspect-[4/5]' : 'aspect-[5/4]'

        }`}

        data-cursor="explore"

        data-cursor-label="Explore"

      >

        <div className="service-image-inner absolute inset-0 will-change-transform">

          <Image

            src={service.image}

            alt={service.title}

            fill

            className="object-cover transition-[filter] duration-700 group-hover:brightness-105"

            referrerPolicy="no-referrer"

            sizes="(max-width: 768px) 100vw, 42vw"

          />

        </div>

      </div>



      <div className="service-caption mt-5 md:mt-6">

        <h3 className="heading-display text-xl font-bold tracking-tighter text-black md:text-2xl">

          {service.title}

        </h3>

        <p className="mt-2 max-w-md text-base leading-[1.35] tracking-tight text-black/55 md:text-lg">

          {service.description}

        </p>

      </div>

    </article>

  );

}



export function Services() {

  const sectionRef = useRef<HTMLElement>(null);

  const gridRef = useRef<HTMLDivElement>(null);

  const colLeftRef = useRef<HTMLDivElement>(null);

  const colRightRef = useRef<HTMLDivElement>(null);



  useGSAP(

    () => {

      const section = sectionRef.current;

      const grid = gridRef.current;

      if (!section || !grid) return;



      gsap.from('.services-heading-inner', {

        y: 56,

        opacity: 0,

        duration: MOTION.reveal,

        ease: MOTION.revealEase,

        scrollTrigger: {

          trigger: grid,

          start: 'top 88%',

          end: 'top 62%',

          scrub: 0.55,

        },

      });



      gsap.from('.services-intro', {

        y: 40,

        opacity: 0,

        duration: MOTION.reveal,

        ease: MOTION.revealEase,

        scrollTrigger: {

          trigger: grid,

          start: 'top 86%',

          end: 'top 58%',

          scrub: 0.5,

        },

      });



      gsap.from('.service-card', {

        y: 56,

        opacity: 0,

        duration: MOTION.reveal,

        stagger: MOTION.revealStagger,

        ease: MOTION.revealEase,

        scrollTrigger: { trigger: grid, start: 'top 82%' },

      });



      gsap.from('.service-caption', {

        y: 24,

        opacity: 0,

        duration: MOTION.reveal,

        stagger: MOTION.revealStagger,

        ease: MOTION.revealEase,

        scrollTrigger: { trigger: grid, start: 'top 80%' },

      });



      const mm = gsap.matchMedia();



      mm.add('(min-width: 768px)', () => {

        if (colLeftRef.current) {

          gsap.to(colLeftRef.current, {

            y: -32,

            ease: 'none',

            scrollTrigger: {

              trigger: section,

              start: 'top bottom',

              end: 'bottom top',

              scrub: 1,

            },

          });

        }



        if (colRightRef.current) {

          gsap.to(colRightRef.current, {

            y: 32,

            ease: 'none',

            scrollTrigger: {

              trigger: section,

              start: 'top bottom',

              end: 'bottom top',

              scrub: 1,

            },

          });

        }

      });



      const cards = gsap.utils.toArray<HTMLElement>('.service-card', section);

      const cleanups: Array<() => void> = [];



      cards.forEach((card) => {

        const imageInner = card.querySelector<HTMLElement>('.service-image-inner');

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



        card.addEventListener('mouseenter', onEnter);

        card.addEventListener('mouseleave', onLeave);

        cleanups.push(() => {

          card.removeEventListener('mouseenter', onEnter);

          card.removeEventListener('mouseleave', onLeave);

          gsap.killTweensOf(imageInner);

        });

      });



      return () => {

        mm.revert();

        cleanups.forEach((fn) => fn());

      };

    },

    { scope: sectionRef }

  );



  return (

    <section

      id="services"

      ref={sectionRef}

      className="section-pad relative w-full overflow-hidden bg-[#f4f4f4] text-black"

    >

      <div className="section-shell">

        <div className="services-heading mb-10 overflow-hidden md:mb-14">

          <h2 className="services-heading-inner heading-display type-section font-bold tracking-tighter leading-none text-black">

            Our services

          </h2>

        </div>



        <div

          ref={gridRef}

          className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-[5rem] lg:gap-[6.25rem]"

        >

          <div

            ref={colLeftRef}

            className="flex flex-col gap-12 md:gap-[5rem] lg:gap-[6.25rem]"

          >

            <p className="services-intro max-w-md text-base leading-[1.35] tracking-tight text-black/55 md:text-lg">

              From motion design to AI-powered products — we design and build

              interfaces for the future.

            </p>

            <ServiceCard service={services[0]} />

            <ServiceCard service={services[2]} />

          </div>



          <div

            ref={colRightRef}

            className="flex flex-col gap-12 md:mt-32 md:gap-[5rem] lg:mt-40 lg:gap-[6.25rem]"

          >

            <ServiceCard service={services[1]} />

          </div>

        </div>



        <div className="mt-16 flex justify-center md:mt-24">

          <MagneticButton>

            <Link

              href="#services"

              className="btn-pill block bg-black text-white transition-colors hover:bg-black/85"

            >

              View all services

            </Link>

          </MagneticButton>

        </div>

      </div>

    </section>

  );

}


