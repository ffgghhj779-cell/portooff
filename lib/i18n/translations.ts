export type Locale = 'en' | 'ar';

export const LOCALES: Locale[] = ['en', 'ar'];

export type TranslationKeys = {
  brand: {
    name: string;
    nameAr: string;
    slogan: string;
  };
  nav: {
    work: string;
    services: string;
    contact: string;
    home: string;
    projects: string;
    blog: string;
  };
  hero: {
    lines: [string, string, string];
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  whatWeDo: {
    body: string;
    cta: string;
  };
  marquee: string;
  projects: {
    title: string;
    viewAll: string;
    view: string;
  };
  services: {
    title: string;
    intro: string;
    viewAll: string;
    items: Array<{ title: string; description: string }>;
    cta: string;
  };
  blog: {
    title: string;
    readMore: string;
    visitBlog: string;
    posts: Array<{ title: string; tag: string }>;
  };
  footer: {
    idea: string;
    tellUs: string;
    primaryContact: string;
    navigate: string;
    social: string;
    privacy: string;
    tagline: string;
  };
  menu: {
    tagline: string;
    open: string;
    close: string;
  };
  contact: {
    title: string;
    subtitle: string;
    send: string;
    sending: string;
    success: string;
    successBody: string;
    backHome: string;
    callUs: string;
    interestedIn: string;
    budget: string;
    interests: string[];
    placeholderName: string;
    placeholderEmail: string;
    placeholderPhone: string;
    placeholderMessage: string;
    messageSent: string;
  };
  common: {
    explore: string;
    startProject: string;
    visitLive: string;
    allProjects: string;
    play: string;
  };
};

export const translations: Record<Locale, TranslationKeys> = {
  en: {
    brand: {
      name: 'Tasami',
      nameAr: 'تسامي',
      slogan: 'Elevate Your Digital Presence',
    },
    nav: {
      work: 'Work',
      services: 'Services',
      contact: 'Contact',
      home: 'Home',
      projects: 'Projects',
      blog: 'Blog',
    },
    hero: {
      lines: ['Digital design', '& development', 'agency'],
      subtitle:
        'We help companies build scalable digital products with thoughtful design systems and carefully crafted development.',
      cta: 'View Work',
      ctaSecondary: 'Get in touch',
    },
    whatWeDo: {
      body:
        "Since 2010, we have been helping our clients find exceptional solutions for their businesses, creating memorable websites and digital products.\n\nTasami doesn't do cookie-cutter solutions — we build products exactly as they were during the design phase, no shortcuts or simplifications.",
      cta: 'What we do',
    },
    marquee: 'contact — contact — contact — ',
    projects: {
      title: 'Featured projects',
      viewAll: 'View all projects',
      view: 'View',
    },
    services: {
      title: 'Our services',
      intro:
        'From brand identity to full-stack products — we design and build interfaces for the future.',
      viewAll: 'View all services',
      items: [
        {
          title: 'Brand Identity',
          description:
            'Strategic design that positions your product for trust and clarity.',
        },
        {
          title: 'UX/UI Design',
          description: 'Interfaces that feel premium, intuitive, and conversion-ready.',
        },
        {
          title: 'Custom Development',
          description:
            'Frontend + backend — built for performance, scalability, and polish.',
        },
      ],
      cta: 'Get in touch',
    },
    blog: {
      title: 'Latest insights',
      readMore: 'Read more',
      visitBlog: 'Visit our blog',
      posts: [
        { title: 'How to Make UI/UX website // Frontend development', tag: 'DESIGN COURSE' },
        { title: 'How to Cook an Emotional Site // Web Development',  tag: 'DESIGN COURSE' },
        { title: 'Cuberto Mouse Follower',                            tag: 'DEV SOURCE'    },
      ],
    },
    footer: {
      idea: 'Have an idea?',
      tellUs: 'TELL US',
      primaryContact: 'Primary contact',
      navigate: 'Navigate',
      social: 'Social',
      privacy: 'Privacy Policy',
      tagline: 'Elite digital craftsmanship.',
    },
    menu: {
      tagline: 'Elite digital craftsmanship — Cairo & beyond.',
      open: 'Open menu',
      close: 'Close menu',
    },
    contact: {
      title: 'Tell us about your project',
      subtitle: 'We typically respond within 24 hours.',
      send: 'Send request',
      sending: 'Sending…',
      success: 'Message sent',
      successBody: "Thanks — we'll be in touch soon.",
      backHome: 'Back to home',
      callUs: 'Call us directly',
      interestedIn: "I'm interested in...",
      budget: 'Project budget',
      interests: [
        'Site from scratch',
        'UX/UI design',
        'Product design',
        'Web development',
        'Motion design',
        'Branding',
        'Mobile development',
      ],
      placeholderName: 'Your name',
      placeholderEmail: 'Email',
      placeholderPhone: 'Phone (optional)',
      placeholderMessage: 'Tell us about your project',
      messageSent: 'Message sent — we\'ll be in touch soon.',
    },
    common: {
      explore: 'Explore',
      startProject: 'Start a project',
      visitLive: 'Visit live site',
      allProjects: 'All projects',
      play: 'Play',
    },
  },

  ar: {
    brand: {
      name: 'Tasami',
      nameAr: 'تسامي',
      slogan: 'نرتقي بوجودك الرقمي',
    },
    nav: {
      work: 'أعمالنا',
      services: 'خدماتنا',
      contact: 'تواصل',
      home: 'الرئيسية',
      projects: 'المشاريع',
      blog: 'المدونة',
    },
    hero: {
      lines: ['تصميم رقمي', 'وتطوير', 'متقدم'],
      subtitle:
        'نساعد الشركات على بناء منتجات رقمية قابلة للتوسع — بتصميم مدروس وتطوير بمعايير عالمية.',
      cta: 'شاهد أعمالنا',
      ctaSecondary: 'تواصل معنا',
    },
    whatWeDo: {
      body:
        'منذ 2010، نساعد عملاءنا على إيجاد حلول استثنائية لأعمالهم — مواقع وتجارب رقمية لا تُنسى.\n\nتسامي لا تقدّم قوالب جاهزة — نبني المنتج كما صُمّم بالضبط، بدون اختصارات أو تبسيط.',
      cta: 'ماذا نفعل',
    },
    marquee: 'تواصل — تواصل — تواصل — ',
    projects: {
      title: 'مشاريع مميزة',
      viewAll: 'عرض كل المشاريع',
      view: 'عرض',
    },
    services: {
      title: 'خدماتنا',
      intro:
        'من الهوية البصرية إلى المنتجات الكاملة — نصمّم ونبني تجارب رقمية للمستقبل.',
      viewAll: 'عرض كل الخدمات',
      items: [
        {
          title: 'الهوية البصرية',
          description: 'تصميم استراتيجي يبني الثقة ويوضّح قيمة علامتك.',
        },
        {
          title: 'تصميم UX/UI',
          description: 'واجهات فاخرة، سهلة الاستخدام، ومحسّنة للتحويل.',
        },
        {
          title: 'تطوير مخصص',
          description: 'واجهات وخلفيات — أداء عالٍ، قابلية توسع، وتفاصيل دقيقة.',
        },
      ],
      cta: 'تواصل معنا',
    },
    blog: {
      title: 'آخر المقالات',
      readMore: 'اقرأ المزيد',
      visitBlog: 'زيارة المدونة',
      posts: [
        { title: 'كيف تصنع موقع UI/UX // تطوير الواجهات', tag: 'دورة تصميم' },
        { title: 'كيف تطبخ موقعاً عاطفياً // تطوير الويب', tag: 'دورة تصميم' },
        { title: 'متتبع الفأرة من كيوبرتو',                 tag: 'مصدر تقني'  },
      ],
    },
    footer: {
      idea: 'عندك فكرة؟',
      tellUs: 'تواصل معنا',
      primaryContact: 'للتواصل المباشر',
      navigate: 'تصفح',
      social: 'سوشيال',
      privacy: 'سياسة الخصوصية',
      tagline: 'حرفية رقمية بمعايير عالمية.',
    },
    menu: {
      tagline: 'حرفية رقمية — القاهرة وخارجها.',
      open: 'فتح القائمة',
      close: 'إغلاق القائمة',
    },
    contact: {
      title: 'أخبرنا عن مشروعك',
      subtitle: 'نرد عادةً خلال 24 ساعة.',
      send: 'إرسال الطلب',
      sending: 'جاري الإرسال…',
      success: 'تم الإرسال',
      successBody: 'شكراً — سنتواصل معك قريباً.',
      backHome: 'العودة للرئيسية',
      callUs: 'اتصل بنا مباشرة',
      interestedIn: 'أنا مهتم بـ...',
      budget: 'ميزانية المشروع',
      interests: [
        'موقع من الصفر',
        'تصميم UX/UI',
        'تصميم المنتج',
        'تطوير الويب',
        'موشن جرافيك',
        'الهوية البصرية',
        'تطوير تطبيقات',
      ],
      placeholderName: 'اسمك',
      placeholderEmail: 'البريد الإلكتروني',
      placeholderPhone: 'رقم الهاتف (اختياري)',
      placeholderMessage: 'أخبرنا عن مشروعك',
      messageSent: 'تم الإرسال — سنتواصل معك قريباً.',
    },
    common: {
      explore: 'استكشف',
      startProject: 'ابدأ مشروعك',
      visitLive: 'زيارة الموقع',
      allProjects: 'كل المشاريع',
      play: 'تشغيل',
    },
  },
};

export function getTranslations(locale: Locale): TranslationKeys {
  return translations[locale];
}
