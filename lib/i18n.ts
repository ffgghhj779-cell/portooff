'use client';
import { useState } from 'react';

export const useLanguage = () => {
  const [lang, setLang] = useState('en');

  const t = {
    nav: {
      work: 'Work',
      services: 'Services',
      contact: 'Contact Us',
      lang: 'Language',
    },
    hero: {
      title1: 'WE BUILD',
      title2: 'DIGITAL',
      title3: 'EXPERIENCES',
      subtitle: 'Elevating brands through technology and design.',
      cta: 'Explore Our Work'
    },
    services: {
      title: 'Our Services',
      desc: 'We provide top-notch digital solutions tailored to your needs.',
      s1_title: 'Web Development',
      s1_desc: 'Scalable and performant web applications.',
      s2_title: 'Mobile Apps',
      s2_desc: 'Native and cross-platform mobile solutions.',
      s3_title: 'UI/UX Design',
      s3_desc: 'Intuitive and engaging user interfaces.'
    },
    works: {
      title: 'Selected Works',
      desc: 'A showcase of our recent projects.',
      case_study: 'Case Study'
    },
    tech: {
      title: 'Our Tech Stack'
    },
    footer: {
      title: 'TELL US',
      desc: 'We engineer competitive advantages through elite digital craftsmanship.',
      contact: 'Contact',
      email: 'Email',
      rights: 'Madar. All rights reserved.',
      cta: 'Get in touch'
    }
  };

  return { lang, setLang, t, dir: lang === 'ar' ? 'rtl' : 'ltr' };
};
