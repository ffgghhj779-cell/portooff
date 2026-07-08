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
    label: string;
    line1: string;
    line2: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  numbers: {
    stat1: { value: string; label: string };
    stat2: { value: string; label: string };
    stat3: { value: string; label: string };
  };
  story: {
    label: string;
    heading: string;
    body: string;
    cta: string;
  };
  marquee: string;
  projects: {
    title: string;
    viewAll: string;
    view: string;
  };
  projectStory: {
    theBrand: string;
    theProblem: string;
    whatWeBuilt: string;
    theOutcome: string;
    previous: string;
    next: string;
  };
  services: {
    title: string;
    intro: string;
    viewAll: string;
    items: Array<{ number: string; title: string; description: string }>;
    cta: string;
  };
  belief: {
    label: string;
    body: string;
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
      slogan: 'We build digital things that actually work.',
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
      label: 'Cairo — Est. 2020',
      line1: 'We build digital',
      line2: 'things that work.',
      subtitle:
        'For brands in Egypt and the Gulf who are serious about what they put online.',
      cta: 'See our work',
      ctaSecondary: 'Start a conversation',
    },
    numbers: {
      stat1: { value: '15', label: 'Brands built' },
      stat2: { value: 'EG · KSA', label: 'Markets served' },
      stat3: { value: '2025', label: 'All delivered' },
    },
    story: {
      label: 'Who we are',
      heading: 'We started because bad websites bother us.',
      body: 'Tasami was founded in Cairo in 2020 out of a simple frustration: too many businesses with genuine value were being let down by digital work that felt cheap, generic, or abandoned at the first sign of complexity.\n\nWe do not do templates, quick fixes, or hand-off packages. We stay involved until what we build is genuinely good — and we know the difference.',
      cta: 'How we work',
    },
    marquee: 'Food & FMCG  ·  Real Estate  ·  SaaS & AI  ·  Agriculture & Export  ·  Industrial  ·  Beauty Tech  ·  Sports & Wellness  ·  E-commerce  ·  ',
    projects: {
      title: 'Selected work',
      viewAll: 'View all projects',
      view: 'View',
    },
    projectStory: {
      theBrand: 'The Brand',
      theProblem: 'The Problem',
      whatWeBuilt: 'What We Built',
      theOutcome: 'The Outcome',
      previous: 'Previous',
      next: 'Next',
    },
    services: {
      title: 'How we work',
      intro:
        'Three disciplines. One consistent standard.',
      viewAll: 'Start a project',
      items: [
        {
          number: '01',
          title: 'Strategy & Brand Identity',
          description:
            'We figure out who you are and who you are talking to before we design anything. The visual work comes second.',
        },
        {
          number: '02',
          title: 'UX / UI Design',
          description:
            'Interfaces designed for the people who will actually use them — not for a portfolio screenshot.',
        },
        {
          number: '03',
          title: 'Development',
          description:
            'We build what we design. There is no hand-off, no translation loss, no gap between what was promised and what ships.',
        },
      ],
      cta: 'Get in touch',
    },
    belief: {
      label: 'What we believe',
      body: 'The internet has too many impressive-looking things that do very little. Our job is the opposite — to make things that are quietly useful, built with care, and designed to last longer than a trend cycle.',
    },
    footer: {
      idea: 'Have a project in mind?',
      tellUs: "Let's talk.",
      primaryContact: 'Get in touch',
      navigate: 'Navigate',
      social: 'Follow us',
      privacy: 'Privacy Policy',
      tagline: 'Tasami — Cairo, Egypt. Est. 2020.',
    },
    menu: {
      tagline: 'Built in Cairo. Working across Egypt and the Gulf.',
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
        'A website from scratch',
        'UX / UI design',
        'Product design',
        'Web development',
        'Motion design',
        'Brand identity',
        'Mobile development',
      ],
      placeholderName: 'Your name',
      placeholderEmail: 'Email address',
      placeholderPhone: 'Phone (optional)',
      placeholderMessage: 'Tell us about your project',
      messageSent: "Message sent — we'll be in touch soon.",
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
      slogan: 'نبني تجارب رقمية حقيقية.',
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
      label: 'القاهرة — تأسست 2020',
      line1: 'نصمم منتجات رقمية',
      line2: 'ذات أثر حقيقي.',
      subtitle:
        'للعلامات التجارية الطموحة في مصر والخليج التي لا تساوم على جودة حضورها الرقمي.',
      cta: 'اكتشف أعمالنا',
      ctaSecondary: 'ابدأ محادثة',
    },
    numbers: {
      stat1: { value: '١٥', label: 'علامة تجارية بنيناها' },
      stat2: { value: 'مصر · السعودية', label: 'أسواق نخدمها' },
      stat3: { value: '٢٠٢٥', label: 'جميعها سُلّمت' },
    },
    story: {
      label: 'من نحن',
      heading: 'انطلقنا من إيماننا بأن الرداءة الرقمية لا تليق بالعلامات الطموحة.',
      body: 'تأسست تسامي في القاهرة عام 2020، من إحباط بسيط: كثير من الأعمال التي تملك قيمة حقيقية، تُخذل يومياً بتجارب رقمية رخيصة أو مكررة أو متروكة عند أول تعقيد.\n\nلا نعتمد على القوالب الجاهزة أو الحلول المؤقتة، ولا نكتفي بتسليم المشروع والرحيل. نلتزم بالعمل حتى نصل إلى نتيجة نفخر بها - فنحن ندرك تماماً معنى الجودة الحقيقية.',
      cta: 'منهجيتنا',
    },
    marquee: 'غذاء ومستهلكات  ·  عقارات  ·  SaaS والذكاء الاصطناعي  ·  زراعة وتصدير  ·  صناعة  ·  تقنية تجميل  ·  رياضة وصحة  ·  تجارة إلكترونية  ·  ',
    projects: {
      title: 'مختارات من أعمالنا',
      viewAll: 'عرض كل المشاريع',
      view: 'عرض',
    },
    projectStory: {
      theBrand: 'جوهر العلامة',
      theProblem: 'التحدي',
      whatWeBuilt: 'الحل المُبتكر',
      theOutcome: 'الأثر والنتيجة',
      previous: 'السابق',
      next: 'التالي',
    },
    services: {
      title: 'منهجيتنا',
      intro: 'ثلاثة تخصصات، ومعيار جودة لا يقبل المساومة.',
      viewAll: 'ابدأ مشروعاً',
      items: [
        {
          number: '٠١',
          title: 'الاستراتيجية وهوية العلامة',
          description:
            'نستوعب جوهر هويتك وشريحتك المستهدفة قبل الشروع في التصميم؛ فالتأسيس الاستراتيجي يسبق التنفيذ البصري.',
        },
        {
          number: '٠٢',
          title: 'تصميم UX / UI',
          description:
            'نبتكر واجهات مستخدم تُصمم خصيصاً للتفاعل الحقيقي، وليس لمجرد العرض في ملفات الأعمال.',
        },
        {
          number: '٠٣',
          title: 'التطوير',
          description:
            'ننفذ ما نصممه بدقة متناهية؛ لضمان تطابق الرؤية مع المنتج النهائي دون أي تنازلات.',
        },
      ],
      cta: 'تواصل معنا',
    },
    belief: {
      label: 'ما نؤمن به',
      body: 'الإنترنت مليء بأشياء تبدو مبهرة وتفعل القليل. عملنا عكس ذلك تماماً — نصنع ما هو مفيد بهدوء، مبني بعناية، ومصمم ليدوم أطول من أي موضة.',
    },
    footer: {
      idea: 'لديك مشروع في ذهنك؟',
      tellUs: 'تحدّث معنا.',
      primaryContact: 'للتواصل المباشر',
      navigate: 'تصفح',
      social: 'تابعنا',
      privacy: 'سياسة الخصوصية',
      tagline: 'تسامي — القاهرة، مصر. تأسست 2020.',
    },
    menu: {
      tagline: 'من القاهرة. نعمل عبر مصر والخليج.',
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
        'تصميم UX / UI',
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
