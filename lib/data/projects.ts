export type LocalizedString = {
  en: string;
  ar: string;
};

export type Project = {
  slug: string;
  name: LocalizedString;
  tagline: LocalizedString;
  brand: LocalizedString;
  problem: LocalizedString;
  built: LocalizedString;
  outcome: LocalizedString;
  tags: string[];
  year: string;
  liveUrl?: string;
  image: string;
  tall: boolean;
};

/** High-res cover stored locally */
function cover(slug: string): string {
  return `/projects/covers/${slug}.png`;
}

export const PROJECTS: Project[] = [
  {
    slug: 'tasami-alwataniya',
    name: {
      en: 'Tasami Al-Wataniah',
      ar: 'تسامي الوطنية'
    },
    tagline: {
      en: 'Multilingual national brand gateway',
      ar: 'بوابة العلامة التجارية الوطنية متعددة اللغات'
    },
    brand: {
      en: 'Tasami Al-Wataniah is a corporate entity requiring a multilingual digital presence to serve a diverse audience across Saudi Arabia and beyond.',
      ar: 'تسامي الوطنية هي كيان مؤسسي يتطلب تواجدًا رقميًا متعدد اللغات لخدمة جمهور متنوع في جميع أنحاء المملكة العربية السعودية وخارجها.'
    },
    problem: {
      en: 'The client needed a unified digital gateway that could seamlessly handle multiple languages (Arabic, English, Urdu, Tagalog) without compromising performance or user experience.',
      ar: 'احتاج العميل إلى بوابة رقمية موحدة يمكنها التعامل بسلاسة مع لغات متعددة (العربية، الإنجليزية، الأردية، التاغالوغية) دون التضحية بالأداء أو تجربة المستخدم.'
    },
    built: {
      en: 'We developed a highly responsive, multilingual corporate portal. The architecture was built to instantly route users to their preferred language while maintaining a unified corporate identity across all localized versions.',
      ar: 'قمنا بتطوير بوابة مؤسسية متعددة اللغات وسريعة الاستجابة. تم بناء الهيكلية لتوجيه المستخدمين فوراً إلى لغتهم المفضلة مع الحفاظ على هوية مؤسسية موحدة عبر جميع النسخ المترجمة.'
    },
    outcome: {
      en: 'A frictionless entry point for a global workforce and client base, ensuring accessibility and brand consistency across four distinct languages.',
      ar: 'نقطة دخول سلسة لقوة عاملة وقاعدة عملاء عالمية، مما يضمن سهولة الوصول واتساق العلامة التجارية عبر أربع لغات مختلفة.'
    },
    tags: ['Corporate', 'i18n', 'Brand'],
    year: '2025',
    liveUrl: 'https://tasami-1.vercel.app/',
    image: cover('tasami-alwataniya'),
    tall: true
  },
  {
    slug: 'alwafeer',
    name: {
      en: 'Al-Wafeer Discounts',
      ar: 'مؤسسة الوفير للتخفيضات'
    },
    tagline: {
      en: 'Discount retail e-commerce for Saudi Arabia',
      ar: 'منصة تجارة إلكترونية للتخفيضات في السعودية'
    },
    brand: {
      en: 'Al-Wafeer is a prominent Saudi retail and FMCG enterprise offering daily essentials, frozen foods, appliances, and home goods at highly competitive prices.',
      ar: 'الوفير هي مؤسسة سعودية بارزة في مجال التجزئة والمواد الاستهلاكية تقدم السلع الأساسية، والأطعمة المجمدة، والأجهزة، والأدوات المنزلية بأسعار تنافسية للغاية.'
    },
    problem: {
      en: 'Al-Wafeer needed to transition its massive daily discount model into a seamless e-commerce experience capable of handling heavy traffic, vast inventories, and time-sensitive promotions.',
      ar: 'احتاجت الوفير إلى تحويل نموذج التخفيضات اليومية الضخم الخاص بها إلى تجربة تجارة إلكترونية سلسة قادرة على التعامل مع الزيارات العالية، والمخزونات الضخمة، والعروض الحساسة للوقت.'
    },
    built: {
      en: 'A high-performance e-commerce platform optimized for high conversion. We integrated dynamic product categorization, urgency drivers (weekly mega-deals), and a streamlined checkout process tailored for the Saudi market.',
      ar: 'منصة تجارة إلكترونية عالية الأداء محسنة لزيادة المبيعات. قمنا بدمج تصنيف ديناميكي للمنتجات، ومحفزات الاستعجال (عروض أسبوعية كبرى)، وعملية دفع مبسطة مصممة للسوق السعودي.'
    },
    outcome: {
      en: 'A robust digital storefront that successfully digitized their discount model, resulting in over 10,000 happy customers and a seamless shopping experience for bulk and retail buyers.',
      ar: 'واجهة متجر رقمية قوية نجحت في رقمنة نموذج التخفيضات الخاص بهم، مما أدى إلى أكثر من 10,000 عميل سعيد وتجربة تسوق سلسة لمشتري الجملة والتجزئة.'
    },
    tags: ['E-commerce', 'Retail', 'KSA'],
    year: '2025',
    liveUrl: 'https://alwafeer-store.web.app/',
    image: cover('alwafeer'),
    tall: false
  },
  {
    slug: 'aura',
    name: {
      en: 'Motivation Aura',
      ar: 'موتيفيشن أورا'
    },
    tagline: {
      en: 'Mood-intelligent gear for Saudi athletes',
      ar: 'معدات رياضية تعتمد على الحالة المزاجية للرياضيين'
    },
    brand: {
      en: 'Motivation Aura is a premium sports equipment and mental conditioning platform curated specifically for the elite Saudi athlete.',
      ar: 'موتيفيشن أورا هي منصة للمعدات الرياضية الفاخرة والتهيئة الذهنية مصممة خصيصًا لنخبة الرياضيين في السعودية.'
    },
    problem: {
      en: 'The sports retail market is crowded with generic stores. The client wanted to create an emotional, psychology-driven shopping experience that matches premium gear to the athlete\'s current mental state.',
      ar: 'سوق التجزئة الرياضية مزدحم بالمتاجر التقليدية. أراد العميل ابتكار تجربة تسوق عاطفية مدفوعة بعلم النفس تطابق المعدات الفاخرة مع الحالة الذهنية الحالية للرياضي.'
    },
    built: {
      en: 'We engineered the first "mood-intelligent" gear platform in the Kingdom. The core feature is a dynamic Mood Quiz that reads the user\'s mental frequency and curates precise product recommendations accordingly.',
      ar: 'هندسنا أول منصة معدات "ذكية مزاجياً" في المملكة. الميزة الأساسية هي اختبار مزاج ديناميكي يقرأ التردد الذهني للمستخدم وينسق توصيات المنتجات بدقة بناءً على ذلك.'
    },
    outcome: {
      en: 'A highly differentiated, premium e-commerce experience that transcends traditional retail, creating a deep psychological connection with the modern Saudi athlete.',
      ar: 'تجربة تجارة إلكترونية فاخرة ومميزة تتجاوز التجزئة التقليدية، مما يخلق ارتباطًا نفسيًا عميقًا مع الرياضي السعودي الحديث.'
    },
    tags: ['Sports', 'E-commerce', 'Wellness'],
    year: '2025',
    liveUrl: 'https://aura-omega-jade.vercel.app/',
    image: cover('aura'),
    tall: true
  },
  {
    slug: 'arkan',
    name: {
      en: 'Arkan',
      ar: 'أركان'
    },
    tagline: {
      en: 'Premium frozen food brand experience',
      ar: 'تجربة علامة تجارية فاخرة للأطعمة المجمدة'
    },
    brand: {
      en: 'Arkan is a trusted Middle Eastern food manufacturer specializing in high-quality frozen poultry and meat products.',
      ar: 'أركان هي شركة تصنيع أغذية شرق أوسطية موثوقة متخصصة في منتجات الدواجن واللحوم المجمدة عالية الجودة.'
    },
    problem: {
      en: 'Arkan required a digital presence that communicated their rigorous quality standards, lack of preservatives, and Halal certification to health-conscious families and wholesale buyers.',
      ar: 'احتاجت أركان إلى تواجد رقمي ينقل معايير الجودة الصارمة الخاصة بها، وخلو منتجاتها من المواد الحافظة، وشهادة الحلال للعائلات المهتمة بالصحة ومشتري الجملة.'
    },
    built: {
      en: 'A clean, appetizing digital showcase highlighting their product range. We structured the site around transparency—bringing nutritional facts, product purity, and culinary inspiration to the forefront.',
      ar: 'واجهة عرض رقمية نظيفة ومشهية تسلط الضوء على مجموعة منتجاتهم. نظمنا الموقع حول الشفافية—مما جعل الحقائق الغذائية ونقاء المنتج والإلهام في الطهي في الواجهة.'
    },
    outcome: {
      en: 'A modern brand platform that elevates frozen food from a commodity to a premium, trusted choice for family dining across the region.',
      ar: 'منصة علامة تجارية حديثة ترتقي بالأطعمة المجمدة من مجرد سلعة إلى خيار فاخر وموثوق لتناول الطعام العائلي في جميع أنحاء المنطقة.'
    },
    tags: ['FMCG', 'Food', 'Brand'],
    year: '2025',
    liveUrl: 'https://arkan-alpha.vercel.app/',
    image: cover('arkan'),
    tall: false
  },
  {
    slug: 'afaq',
    name: {
      en: 'AFAQ',
      ar: 'آفاق'
    },
    tagline: {
      en: 'Elite Saudi AI intelligence platform',
      ar: 'منصة ذكاء اصطناعي نخبوية سعودية'
    },
    brand: {
      en: 'AFAQ is a next-generation Saudi AI intelligence ecosystem providing automated business management and compliance solutions.',
      ar: 'آفاق هي منظومة ذكاء اصطناعي سعودية من الجيل القادم توفر حلولاً مؤتمتة لإدارة الأعمال والامتثال.'
    },
    problem: {
      en: 'The client needed to market a highly complex 9-Agent AI system to Saudi enterprises while proving absolute compliance with ZATCA Phase 2, PDPL, and NCA security standards.',
      ar: 'احتاج العميل إلى تسويق نظام ذكاء اصطناعي معقد مكون من 9 وكلاء للشركات السعودية، مع إثبات الامتثال المطلق لمعايير الأمن التابعة لـ ZATCA المرحلة الثانية وPDPL وNCA.'
    },
    built: {
      en: 'A sleek, ultra-fast tech platform. We translated complex AI capabilities into clear business value, featuring interactive ROI calculators and a dark-mode, terminal-inspired aesthetic that signals elite engineering.',
      ar: 'منصة تقنية أنيقة وفائقة السرعة. قمنا بترجمة قدرات الذكاء الاصطناعي المعقدة إلى قيمة تجارية واضحة، مع حاسبات عائد استثمار تفاعلية وجمالية مستوحاة من الشاشات الطرفية توحي بالهندسة النخبوية.'
    },
    outcome: {
      en: 'A commanding digital presence that positions AFAQ as the definitive, secure AI infrastructure choice for the Saudi enterprise market.',
      ar: 'حضور رقمي قوي يضع آفاق كخيار البنية التحتية الآمنة والنهائية للذكاء الاصطناعي لسوق الشركات السعودية.'
    },
    tags: ['AI', 'SaaS', 'Enterprise'],
    year: '2025',
    liveUrl: 'https://afaq-ivory.vercel.app/',
    image: cover('afaq'),
    tall: true
  },
  {
    slug: 'khair-aljaar',
    name: {
      en: 'Khair Aljaar Foods',
      ar: 'خير الجوار للأغذية'
    },
    tagline: {
      en: 'Egyptian B2B food export command center',
      ar: 'مركز قيادة تصدير الأغذية المصري B2B'
    },
    brand: {
      en: 'Khair Aljaar Foods is a premium Egyptian food export corporation serving the GCC, Europe, and Africa with over 50,000 MT annual capacity.',
      ar: 'خير الجوار للأغذية هي شركة مصرية فاخرة لتصدير الأغذية تخدم دول مجلس التعاون الخليجي وأوروبا وأفريقيا بقدرة سنوية تتجاوز 50,000 طن متري.'
    },
    problem: {
      en: 'The company needed a sophisticated B2B command center that didn\'t just list products, but functioned as a live trading platform for international wholesale buyers demanding rigorous export certifications.',
      ar: 'احتاجت الشركة إلى مركز قيادة B2B متطور لا يعرض المنتجات فحسب، بل يعمل كمنصة تداول حية لمشتري الجملة الدوليين الذين يتطلبون شهادات تصدير صارمة.'
    },
    built: {
      en: 'A comprehensive B2B export platform featuring a live commodity index, instant quotation systems, and detailed cold-chain logistics data. The interface was designed to build immediate trust with global importers.',
      ar: 'منصة تصدير B2B شاملة تتميز بمؤشر أسعار سلع حي، وأنظمة تسعير فورية، وبيانات تفصيلية لسلسلة التبريد اللوجستية. تم تصميم الواجهة لبناء ثقة فورية مع المستوردين العالميين.'
    },
    outcome: {
      en: 'A digital infrastructure that successfully handles massive B2B export operations, positioning Khair Aljaar as a transparent, uncompromising leader in the global food supply chain.',
      ar: 'بنية تحتية رقمية تتعامل بنجاح مع عمليات التصدير B2B الضخمة، مما يضع خير الجوار كشركة رائدة شفافة ولا تساوم في سلسلة التوريد الغذائي العالمية.'
    },
    tags: ['Export', 'B2B', 'Agriculture'],
    year: '2025',
    liveUrl: 'https://khaireljewar.vercel.app/en',
    image: cover('khair-aljaar'),
    tall: false
  },
  {
    slug: 'badeel-alsejad',
    name: {
      en: 'Ali Hamad',
      ar: 'علي حمد'
    },
    tagline: {
      en: 'Luxury flooring & carpet alternatives',
      ar: 'أرضيات فاخرة وبديل السجاد'
    },
    brand: {
      en: 'Ali Hamad is a leading Egyptian supplier of modern flooring and luxury carpet alternatives with over 15 years of market experience.',
      ar: 'علي حمد هو مورد مصري رائد للأرضيات الحديثة وبدائل السجاد الفاخرة مع خبرة تزيد عن 15 عاماً في السوق.'
    },
    problem: {
      en: 'The brand needed to serve two distinct audiences (B2B wholesale distributors and B2C retail customers) simultaneously without confusing the user journey.',
      ar: 'احتاجت العلامة التجارية إلى خدمة جمهورين مختلفين (موزعي الجملة B2B وعملاء التجزئة B2C) في وقت واحد دون إرباك رحلة المستخدم.'
    },
    built: {
      en: 'A dual-purpose e-commerce and lead generation platform. We implemented an interactive, swipeable gallery showcasing 30+ real-world installations, alongside dedicated portals for wholesale pricing and individual home consultations.',
      ar: 'منصة مزدوجة للتجارة الإلكترونية وجلب العملاء. قمنا بتنفيذ معرض تفاعلي يعرض أكثر من 30 تركيباً واقعياً، إلى جانب بوابات مخصصة لتسعير الجملة واستشارات المنازل الفردية.'
    },
    outcome: {
      en: 'A streamlined sales funnel that efficiently captures both individual homeowners and large-scale distributors across 27 Egyptian governorates.',
      ar: 'مسار مبيعات مبسط يستقطب بكفاءة كل من أصحاب المنازل الأفراد والموزعين على نطاق واسع عبر 27 محافظة مصرية.'
    },
    tags: ['Retail', 'Interior', 'B2B'],
    year: '2025',
    liveUrl: 'https://badeel-alsejad.web.app/#/',
    image: cover('badeel-alsejad'),
    tall: true
  },
  {
    slug: 'khair-al-jiwar',
    name: {
      en: 'Khair Al-Jiwar',
      ar: 'خير الجوار العقارية'
    },
    tagline: {
      en: 'Real estate developer compliance intelligence',
      ar: 'تحليل التزام المطورين العقاريين'
    },
    brand: {
      en: 'Khair Al-Jiwar is Egypt\'s premier real estate analytics platform, dedicated to tracking developer compliance and project risk.',
      ar: 'خير الجوار هي منصة التحليلات العقارية الرائدة في مصر، والمكرسة لتتبع امتثال المطورين ومخاطر المشاريع.'
    },
    problem: {
      en: 'Real estate investors in Egypt lacked a centralized, unbiased source of truth regarding developer delivery rates, complaint resolution, and actual construction quality.',
      ar: 'افتقر المستثمرون العقاريون في مصر إلى مصدر مركزي ومحايد للحقيقة فيما يتعلق بمعدلات تسليم المطورين، وحل الشكاوى، وجودة البناء الفعلية.'
    },
    built: {
      en: 'A data-driven analytical engine that ranks real estate projects based on a proprietary "Commitment Score." We built intuitive comparison tools, risk indicators, and advanced search filters for high-end compounds.',
      ar: 'محرك تحليلي يعتمد على البيانات يصنف المشاريع العقارية بناءً على "نقاط التزام" خاصة. قمنا ببناء أدوات مقارنة بديهية، ومؤشرات مخاطر، وعوامل تصفية بحث متقدمة للمجمعات السكنية الراقية.'
    },
    outcome: {
      en: 'A disruptive, transparent platform that empowers investors to make safe, data-backed decisions before committing capital to off-plan developments.',
      ar: 'منصة شفافة ومبتكرة تمكن المستثمرين من اتخاذ قرارات آمنة مدعومة بالبيانات قبل الالتزام برأس المال في مشاريع قيد الإنشاء.'
    },
    tags: ['Proptech', 'Data', 'FinTech'],
    year: '2025',
    liveUrl: 'https://khair-al-jiwar.web.app/#/',
    image: cover('khair-al-jiwar'),
    tall: false
  },
  {
    slug: 'nodra',
    name: {
      en: 'NODRA',
      ar: 'نُدرة'
    },
    tagline: {
      en: 'AI-powered makeup shade matching',
      ar: 'تطابق ألوان المكياج بالذكاء الاصطناعي'
    },
    brand: {
      en: 'NODRA is an innovative, privacy-first AI beauty platform that matches users with their perfect makeup shade without requiring personal photos.',
      ar: 'نُدرة هي منصة تجميل مبتكرة تعتمد على الذكاء الاصطناعي وتعطي الأولوية للخصوصية لمطابقة المستخدمات مع درجة المكياج المثالية دون الحاجة لصور شخصية.'
    },
    problem: {
      en: 'Consumers frequently waste money on the wrong foundation shades, and beauty salons suffer from high return rates. The challenge was creating a highly accurate matching system that respected user privacy.',
      ar: 'كثيراً ما تهدر المستهلكات أموالهن على درجات كريم الأساس الخاطئة، وتعاني صالونات التجميل من معدلات إرجاع عالية. كان التحدي هو إنشاء نظام مطابقة دقيق للغاية يحترم خصوصية المستخدم.'
    },
    built: {
      en: 'An intelligent, photo-free AI diagnostic tool. We designed an engaging, conversational quiz interface that determines the user\'s undertone and seamlessly delivers personalized brand recommendations via WhatsApp.',
      ar: 'أداة تشخيص ذكية بالذكاء الاصطناعي بدون صور. صممنا واجهة اختبار تفاعلية تحدد النغمة التحتية للمستخدم وتقدم بسلاسة توصيات مخصصة للعلامات التجارية عبر واتساب.'
    },
    outcome: {
      en: 'A viral, user-friendly tool that bridges the gap between digital discovery and physical beauty products, serving both individual consumers and professional salons.',
      ar: 'أداة سريعة الانتشار وسهلة الاستخدام تسد الفجوة بين الاكتشاف الرقمي ومنتجات التجميل المادية، وتخدم كلاً من المستهلكات الأفراد والصالونات المحترفة.'
    },
    tags: ['Beauty', 'AI', 'Consumer'],
    year: '2025',
    liveUrl: 'https://nodra-985b0.web.app/',
    image: cover('nodra'),
    tall: true
  },
  {
    slug: 'khasstock',
    name: {
      en: 'KhasStock',
      ar: 'خاص ستوك'
    },
    tagline: {
      en: 'Egypt\'s premium stock fashion marketplace',
      ar: 'بورصة الاستوك المصري للملابس'
    },
    brand: {
      en: 'KhasStock is Egypt\'s first specialized "stock clothing exchange," offering premium original fashion brands at massive wholesale discounts.',
      ar: 'خاص ستوك هي أول "بورصة ملابس استوك" متخصصة في مصر، تقدم علامات أزياء أصلية فاخرة بخصومات جملة ضخمة.'
    },
    problem: {
      en: 'The client needed to digitize a traditionally offline, chaotic clearance market into a premium, organized, and eco-friendly shopping experience.',
      ar: 'احتاج العميل إلى رقمنة سوق التصفية التقليدي الفوضوي وغير المتصل بالإنترنت وتحويله إلى تجربة تسوق فاخرة ومنظمة وصديقة للبيئة.'
    },
    built: {
      en: 'A dynamic e-commerce environment featuring real-time "stock exchange" style indicators, highlighting limited quantities, active viewers, and deep B2B/B2C pricing tiers.',
      ar: 'بيئة تجارة إلكترونية ديناميكية تتميز بمؤشرات حية بأسلوب "البورصة"، وتسلط الضوء على الكميات المحدودة، والمشاهدين النشطين، ومستويات تسعير B2B/B2C العميقة.'
    },
    outcome: {
      en: 'A high-urgency, highly engaging digital marketplace that successfully gamifies the stock clothing buying experience for over 50,000 customers.',
      ar: 'سوق رقمي عالي الاستعجال والتفاعل نجح في تحويل تجربة شراء الملابس الاستوك إلى لعبة ممتعة لأكثر من 50,000 عميل.'
    },
    tags: ['Fashion', 'Marketplace', 'Wholesale'],
    year: '2025',
    liveUrl: 'https://khasstock-8833a.web.app/',
    image: cover('khasstock'),
    tall: false
  },
  {
    slug: 'ryadco',
    name: {
      en: 'RYADCO',
      ar: 'الرياضكو'
    },
    tagline: {
      en: 'Executive HVAC & contracting',
      ar: 'مقاولات وحلول تكييف تنفيذية'
    },
    brand: {
      en: 'RYADCO is an elite HVAC and climate engineering contracting firm operating within the Kingdom of Saudi Arabia.',
      ar: 'الرياضكو هي شركة مقاولات وهندسة مناخ وتكييف نخبوية تعمل داخل المملكة العربية السعودية.'
    },
    problem: {
      en: 'RYADCO needed to elevate its brand from a standard contracting company to a premium engineering consultancy, communicating executive-level execution and absolute reliability.',
      ar: 'احتاجت الرياضكو إلى الارتقاء بعلامتها التجارية من شركة مقاولات عادية إلى استشارات هندسية فاخرة، مع إيصال مستوى التنفيذ التنفيذي والموثوقية المطلقة.'
    },
    built: {
      en: 'A strictly professional, corporate platform that emphasizes engineering precision. We integrated interactive cost calculators, structured service modules, and a strong emphasis on transparent, documented delivery.',
      ar: 'منصة مؤسسية احترافية بحتة تؤكد على الدقة الهندسية. قمنا بدمج حاسبات تكلفة تفاعلية، ووحدات خدمة منظمة، وتركيز قوي على التسليم الشفاف والموثق.'
    },
    outcome: {
      en: 'A digital presence that radiates authority and trust, successfully securing high-value commercial and residential climate engineering contracts.',
      ar: 'حضور رقمي يشع بالسلطة والثقة، مما نجح في تأمين عقود هندسة مناخية تجارية وسكنية عالية القيمة.'
    },
    tags: ['HVAC', 'Industrial', 'B2B'],
    year: '2025',
    liveUrl: 'https://ryadco-513b2.web.app/#/',
    image: cover('ryadco'),
    tall: true
  },
  {
    slug: 'tasami-industrial',
    name: {
      en: 'Tasami Industrial',
      ar: 'تسامي الصناعية'
    },
    tagline: {
      en: 'Saudi clinker supply — MENA export',
      ar: 'توريد الكلينكر السعودي - تصدير للشرق الأوسط'
    },
    brand: {
      en: 'Tasami Industrial is a major player in the Saudi industrial manufacturing sector, specializing in the export and supply of premium clinker and cement products.',
      ar: 'تسامي الصناعية هي لاعب رئيسي في قطاع التصنيع الصناعي السعودي، متخصصة في تصدير وتوريد منتجات الكلينكر والأسمنت الفاخرة.'
    },
    problem: {
      en: 'The industrial sector often suffers from outdated, clunky digital footprints. Tasami Industrial needed a modern platform to facilitate massive B2B international supply chain logistics.',
      ar: 'غالبًا ما يعاني القطاع الصناعي من بصمات رقمية قديمة وغير عملية. احتاجت تسامي الصناعية إلى منصة حديثة لتسهيل لوجستيات سلسلة التوريد الدولية B2B الضخمة.'
    },
    built: {
      en: 'A streamlined, data-heavy B2B portal. We focused on technical specifications, quality certifications, and logistical capabilities, wrapping complex industrial data in a sleek, accessible interface.',
      ar: 'بوابة B2B مبسطة وغنية بالبيانات. ركزنا على المواصفات الفنية، وشهادات الجودة، والقدرات اللوجستية، مع تغليف البيانات الصناعية المعقدة في واجهة أنيقة يسهل الوصول إليها.'
    },
    outcome: {
      en: 'A commanding industrial platform that bridges the gap between Saudi manufacturing capabilities and global market demands.',
      ar: 'منصة صناعية قوية تسد الفجوة بين قدرات التصنيع السعودية ومتطلبات السوق العالمية.'
    },
    tags: ['Industrial', 'Export', 'B2B'],
    year: '2025',
    liveUrl: 'https://tasami-klinker.vercel.app/',
    image: cover('tasami-industrial'),
    tall: false
  },
  {
    slug: 'alrehan-almasi',
    name: {
      en: 'Al Rehan Almasi',
      ar: 'الرهان الماسي'
    },
    tagline: {
      en: 'Premium food supply for the Saudi market',
      ar: 'توريد غذائي فاخر للسوق السعودي'
    },
    brand: {
      en: 'Al Rehan Almasi is a trusted B2B partner for the supply of fresh and frozen food products.',
      ar: 'الرهان الماسي هو شريك B2B موثوق لتوريد المنتجات الغذائية الطازجة والمجمدة.'
    },
    problem: {
      en: 'The company required a digital catalog that could efficiently showcase a vast inventory to corporate clients (restaurants, hotels) while streamlining the quotation process.',
      ar: 'احتاجت الشركة إلى كتالوج رقمي يمكنه عرض مخزون هائل بكفاءة للعملاء من الشركات (المطاعم، الفنادق) مع تبسيط عملية طلب عروض الأسعار.'
    },
    built: {
      en: 'A clean, corporate supply chain portal emphasizing reliability. We built a structured catalog system with direct "Request for Quote" functionalities to accelerate the B2B sales cycle.',
      ar: 'بوابة سلسلة توريد مؤسسية ونظيفة تؤكد على الموثوقية. قمنا ببناء نظام كتالوج منظم مع وظائف "طلب عرض سعر" مباشرة لتسريع دورة مبيعات B2B.'
    },
    outcome: {
      en: 'An optimized digital supply chain hub that connects premium food products with high-volume commercial buyers effortlessly.',
      ar: 'مركز سلسلة توريد رقمي محسن يربط المنتجات الغذائية الفاخرة بالمشترين التجاريين ذوي الحجم الكبير بسهولة.'
    },
    tags: ['Food supply', 'B2B', 'Logistics'],
    year: '2025',
    liveUrl: 'https://alrehan-almasi.vercel.app/',
    image: cover('alrehan-almasi'),
    tall: true
  },
  {
    slug: 'soul-gold',
    name: {
      en: 'Soul Gold',
      ar: 'صول الذهبية'
    },
    tagline: {
      en: 'Fresh produce supplier & Artisan Food E-commerce',
      ar: 'مورد منتجات طازجة وتجارة إلكترونية للأغذية الفاخرة'
    },
    brand: {
      en: 'Soul Gold is an artisan, farm-to-table e-commerce brand delivering premium, organic fresh produce and specialty foods across Saudi Arabia.',
      ar: 'صول الذهبية هي علامة تجارية للتجارة الإلكترونية من المزرعة إلى المائدة تقدم منتجات طازجة عضوية وفاخرة وأطعمة متخصصة في جميع أنحاء المملكة العربية السعودية.'
    },
    problem: {
      en: 'The brand needed to communicate the luxury and purity of its "Alchemy of Taste" philosophy while managing the practicalities of same-day fresh food delivery.',
      ar: 'احتاجت العلامة التجارية إلى إيصال فخامة ونقاء فلسفتها "خيمياء المذاق" مع إدارة الجوانب العملية لتوصيل الطعام الطازج في نفس اليوم.'
    },
    built: {
      en: 'An elegant, high-end e-commerce experience. We utilized rich, organic art direction paired with highly functional features like a countdown timer for same-day delivery and an exclusive VIP loyalty program.',
      ar: 'تجربة تجارة إلكترونية أنيقة وراقية. استخدمنا توجهاً فنياً غنياً وعضوياً مقترناً بميزات وظيفية عالية مثل مؤقت العد التنازلي للتوصيل في نفس اليوم وبرنامج ولاء VIP حصري.'
    },
    outcome: {
      en: 'A premium digital boutique that successfully positions fresh produce as a luxury lifestyle choice for the discerning Saudi consumer.',
      ar: 'بوتيك رقمي فاخر ينجح في وضع المنتجات الطازجة كخيار أسلوب حياة فاخر للمستهلك السعودي المميز.'
    },
    tags: ['Food', 'E-commerce', 'KSA'],
    year: '2025',
    liveUrl: 'https://soul-gold.vercel.app/',
    image: cover('soul-gold'),
    tall: false
  }
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = PROJECTS.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? PROJECTS[index - 1] : null,
    next: index < PROJECTS.length - 1 ? PROJECTS[index + 1] : null,
  };
}
