"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'ar';

export const dict = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      advantage: 'Advantage',
      contact: 'Let\'s Talk',
    },
    hero: {
      tag: 'Pioneering Digital Transcendence',
      title1: 'Empowering the Future with',
      title2: 'Elite Digital Craftsmanship.',
      desc: 'Madar architects next-generation web platforms, ultra-fast mobile applications, and intelligent AI automation for ambitious startups and scaling enterprises.',
      start: 'START A PROJECT',
      explore: 'EXPLORE WORK',
    },
    services: {
      title: 'Elite Services',
      desc: 'We deliver end-to-end digital solutions engineered for peak performance.',
      s1_title: 'Next-Gen Web Engineering',
      s1_desc: 'Building robust, scalable, and visually stunning web applications using edge technologies.',
      s2_title: 'High-Performance Mobile Apps',
      s2_desc: 'Developing fluid, native-feeling mobile experiences designed for speed and 120fps smooth interactions.',
      s3_title: 'Intelligent Automation & AI',
      s3_desc: 'Transforming business operations with smart automation, AI integrations, and tailored digital workflows.',
    },
    works: {
      title: 'Selected Works',
      desc: 'Showcasing complex software projects and sophisticated architectures.',
      case_study: 'Case Study',
      projects: [
        {
          name: 'Fintech OS',
          tech: 'Next.js • Tailwind • D3.js'
        },
        {
          name: 'Enterprise Commerce',
          tech: 'React Native • Node.js'
        },
        {
          name: 'AI Doc Analysis',
          tech: 'Python • AWS • React'
        },
        {
          name: 'Global Logistics',
          tech: 'Next.js • Postgres • Go'
        }
      ]
    },
    advantage: {
      tag: 'Why Madar?',
      title: 'The Madar Advantage',
      desc: 'Built for ambitious startups and mid-to-large enterprises. We don\'t just write code; we engineer competitive advantages through elite digital craftsmanship.',
      a1_title: 'Uncompromising Code Quality',
      a1_desc: 'We write clean, strictly typed, and thoroughly tested code that scales seamlessly with your business.',
      a2_title: 'Future-Proof Architecture',
      a2_desc: 'Designing decoupled, microservice-ready systems built to handle millions of users seamlessly.',
      a3_title: 'Seamless User Experiences',
      a3_desc: 'Obsessive attention to detail, polished micro-interactions, and 120fps front-end performance.',
      art_title: 'Engineering',
      art_desc: 'System Architecture',
    },
    tech: {
      title: 'Powered by Top-Tier Technologies',
    },
    footer: {
      title: 'Ready to build something extraordinary?',
      cta: 'LET\'S TALK',
      contact: 'Contact Us',
      email: 'Email',
      rights: 'Madar Digital Solutions. All Rights Reserved.',
    }
  },
  ar: {
    nav: {
      services: 'خدماتنا',
      work: 'أعمالنا',
      advantage: 'ميزتنا',
      contact: 'لنتحدث',
    },
    hero: {
      tag: 'ريادة في التفوق الرقمي',
      title1: 'نمكّن المستقبل من خلال',
      title2: 'حرفية رقمية نخبوية.',
      desc: 'مدار تصمم منصات ويب لجيل المستقبل، وتطبيقات هواتف فائقة السرعة، وأتمتة ذكاء اصطناعي للشركات الناشئة والمؤسسات الطموحة.',
      start: 'ابدأ مشروعك',
      explore: 'استكشف أعمالنا',
    },
    services: {
      title: 'خدمات نخبوية',
      desc: 'نقدم حلولاً رقمية متكاملة مصممة لأعلى مستويات الأداء.',
      s1_title: 'هندسة ويب متقدمة',
      s1_desc: 'بناء تطبيقات ويب قوية وقابلة للتطوير ومذهلة بصريًا باستخدام أحدث التقنيات.',
      s2_title: 'تطبيقات هواتف عالية الأداء',
      s2_desc: 'تطوير تجارب هواتف سلسة تبدو كأنها أصلية، مصممة للسرعة وتفاعلات سلسة بتردد 120 إطارًا في الثانية.',
      s3_title: 'أتمتة ذكية وذكاء اصطناعي',
      s3_desc: 'تحويل العمليات التجارية بأتمتة ذكية، وتكاملات ذكاء اصطناعي، ومسارات عمل رقمية مخصصة.',
    },
    works: {
      title: 'أعمال مختارة',
      desc: 'نعرض مشاريع برمجية معقدة وهيكليات متطورة.',
      case_study: 'دراسة حالة',
      projects: [
        {
          name: 'نظام التشغيل المالي',
          tech: 'Next.js • Tailwind • D3.js'
        },
        {
          name: 'التجارة المؤسسية',
          tech: 'React Native • Node.js'
        },
        {
          name: 'تحليل المستندات بالذكاء الاصطناعي',
          tech: 'Python • AWS • React'
        },
        {
          name: 'الخدمات اللوجستية العالمية',
          tech: 'Next.js • Postgres • Go'
        }
      ]
    },
    advantage: {
      tag: 'لماذا مدار؟',
      title: 'ميزة مدار',
      desc: 'صُممت للشركات الناشئة الطموحة والمؤسسات المتوسطة إلى الكبيرة. نحن لا نكتب الكود فقط؛ نحن نهندس ميزات تنافسية من خلال حرفية رقمية نخبوية.',
      a1_title: 'جودة كود لا تقبل المساومة',
      a1_desc: 'نكتب كودًا نظيفًا ومكتوبًا بدقة ومختبرًا بعناية يتوسع بسلاسة مع عملك.',
      a2_title: 'هيكلية جاهزة للمستقبل',
      a2_desc: 'تصميم أنظمة منفصلة جاهزة للخدمات المصغرة مصممة للتعامل مع ملايين المستخدمين بسلاسة.',
      a3_title: 'تجارب مستخدم سلسة',
      a3_desc: 'اهتمام شديد بالتفاصيل، وتفاعلات دقيقة مصقولة، وأداء واجهة أمامية بتردد 120 إطارًا في الثانية.',
      art_title: 'الهندسة',
      art_desc: 'هيكلية النظام',
    },
    tech: {
      title: 'مدعوم بأفضل التقنيات',
    },
    footer: {
      title: 'هل أنت مستعد لبناء شيء استثنائي؟',
      cta: 'لنتحدث',
      contact: 'اتصل بنا',
      email: 'البريد الإلكتروني',
      rights: 'مدار للحلول الرقمية. جميع الحقوق محفوظة.',
    }
  }
};

type I18nContextType = {
  lang: Language;
  dir: 'ltr' | 'rtl';
  t: typeof dict.en;
  setLanguage: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Language;
    if (stored && (stored === 'en' || stored === 'ar')) {
      setLangState(stored);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, mounted]);

  const setLanguage = (newLang: Language) => {
    localStorage.setItem('lang', newLang);
    setLangState(newLang);
  };

  const contextValue: I18nContextType = {
    lang,
    dir: lang === 'ar' ? 'rtl' : 'ltr',
    t: dict[lang],
    setLanguage
  };

  // Prevent hydration mismatch by rendering a stable layout first, 
  // or we accept initial English render and client-side swap.
  // Given strict 120fps requirements, minimizing flash is good, 
  // but SSR requires it to match.
  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>;
}

export function useLanguage() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
