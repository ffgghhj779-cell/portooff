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

/** Minimalist typographic SVG cover */
function cover(slug: string): string {
  return `/projects/logos/${slug}.svg`;
}

export const PROJECTS: Project[] = [

  {
    slug: 'eladawigroup',
    name: {
      en: 'El Adawi Group',
      ar: 'El Adawi Group'
    },
    tagline: {
      en: 'Premium Wholesale Paints',
      ar: 'علامة رائدة في تجارة الدهانات'
    },
    brand: {
      en: 'El Adawi Group',
      ar: 'مجموعة العدوي'
    },
    problem: {
      en: 'El Adawi Group needed a professional B2B platform to showcase their extensive range of premium wholesale paints and building materials to distributors and large-scale contractors.',
      ar: 'احتاجت مجموعة العدوي إلى منصة B2B احترافية لعرض مجموعتها الواسعة من الدهانات ومواد البناء الفاخرة بالجملة للموزعين وشركات المقاولات الكبرى.'
    },
    built: {
      en: 'We built a high-performance corporate catalog website with advanced filtering, a seamless quote request system, and an authoritative brand presence.',
      ar: 'قمنا ببناء موقع كتالوج تفاعلي عالي الأداء مع نظام تصفية متقدم، وآلية سلسة لطلب عروض الأسعار، وحضور رقمي يعكس ثقل العلامة التجارية.'
    },
    outcome: {
      en: 'A massive increase in B2B inquiries and a strengthened market position as a top-tier wholesale supplier.',
      ar: 'زيادة هائلة في استفسارات B2B وتعزيز مكانة الشركة كمورد جملة من الدرجة الأولى.'
    },
    tags: ['Next.js', 'Tailwind', 'B2B Catalog'],
    year: '2023',
    liveUrl: 'https://eladawigroup.com/',
    image: cover('eladawigroup'),
    tall: false,
  },
  {
    slug: 'esteemmedia',
    name: {
      en: 'Esteem Media',
      ar: 'Esteem Media'
    },
    tagline: {
      en: 'Elite Media Production',
      ar: 'إنتاج إعلامي نخبوي'
    },
    brand: {
      en: 'Esteem Media',
      ar: 'إستيم ميديا'
    },
    problem: {
      en: 'Esteem Media required a visually striking portfolio to highlight their high-end media production, photography, and videography services to premium clients.',
      ar: 'تطلبت إستيم ميديا معرض أعمال جذاب بصرياً لتسليط الضوء على خدمات الإنتاج الإعلامي والتصوير الفوتوغرافي والفيديو الراقية للعملاء النخبويين.'
    },
    built: {
      en: 'We designed a dark-themed, highly visual experience powered by smooth GSAP animations and optimized media delivery to ensure flawless playback.',
      ar: 'صممنا تجربة بصرية فائقة النعومة تعتمد على النمط المظلم (Dark Theme)، مدعومة بحركات GSAP سلسة وتسليم محسن للوسائط لضمان تشغيل بلا تشويش.'
    },
    outcome: {
      en: 'A stunning showcase that elevated their brand perception and significantly boosted high-ticket client acquisitions.',
      ar: 'معرض أعمال مبهر أدى إلى الارتقاء بتصور العلامة التجارية وزيادة ملحوظة في استقطاب العملاء ذوي الميزانيات الكبيرة.'
    },
    tags: ['React', 'GSAP', 'Portfolio'],
    year: '2024',
    liveUrl: 'https://esteemmediaa.com/',
    image: cover('esteemmedia'),
    tall: true,
  },
  {
    slug: 'alwafeer',
    name: {
      en: 'Al-Wafeer Discounts',
      ar: 'Al-Wafeer Discounts'
    },
    tagline: {
      en: 'Discount retail e-commerce for Saudi Arabia',
      ar: 'تجارة إلكترونية رائدة في قطاع التجزئة السعودي'
    },
    brand: {
      en: 'Al-Wafeer is a prominent Saudi retail and FMCG enterprise offering daily essentials, frozen foods, appliances, and home goods at highly competitive prices.',
      ar: 'مؤسسة سعودية بارزة في قطاع التجزئة والسلع الاستهلاكية، تقدم تشكيلة واسعة من المنتجات الأساسية والأغذية المجمدة والأدوات المنزلية بأسعار شديدة التنافسية.'
    },
    problem: {
      en: 'Al-Wafeer needed to transition its massive daily discount model into a seamless e-commerce experience capable of handling heavy traffic, vast inventories, and time-sensitive promotions.',
      ar: 'كان التحدي يكمن في تحويل نموذج التخفيضات اليومية الضخم إلى تجربة تجارة إلكترونية انسيابية، قادرة على استيعاب حركة الزيارات الكثيفة، وإدارة المخزونات الهائلة، والعروض الترويجية الحساسة للوقت.'
    },
    built: {
      en: 'A high-performance e-commerce platform optimized for high conversion. We integrated dynamic product categorization, urgency drivers (weekly mega-deals), and a streamlined checkout process tailored for the Saudi market.',
      ar: 'ابتكرنا منصة تجارة إلكترونية عالية الأداء ومصممة لرفع معدلات التحويل. دمجنا نظام تصنيف ديناميكي للمنتجات، مع أدوات محفزة للشراء (كالعروض الأسبوعية الكبرى)، وعملية دفع سلسة ومخصصة للسوق السعودي.'
    },
    outcome: {
      en: 'A robust digital storefront that successfully digitized their discount model, resulting in over 10,000 happy customers and a seamless shopping experience for bulk and retail buyers.',
      ar: 'واجهة متجر رقمية متينة نجحت في رقمنة نموذج التخفيضات الخاص بهم بشكل احترافي، محققة أكثر من 10,000 عميل راضٍ وتجربة تسوق لا تشوبها شائبة لمشتري الجملة والتجزئة.'
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
      ar: 'Motivation Aura'
    },
    tagline: {
      en: 'Mood-intelligent gear for Saudi athletes',
      ar: 'معدات رياضية ذكية تتناغم مع الحالة الذهنية'
    },
    brand: {
      en: 'Motivation Aura is a premium sports equipment and mental conditioning platform curated specifically for the elite Saudi athlete.',
      ar: 'منصة فاخرة للمعدات الرياضية والتهيئة الذهنية، صُممت بعناية لتلبية متطلبات نخبة الرياضيين في السعودية.'
    },
    problem: {
      en: 'The sports retail market is crowded with generic stores. The client wanted to create an emotional, psychology-driven shopping experience that matches premium gear to the athlete\'s current mental state.',
      ar: 'يغص سوق التجزئة الرياضية بالمتاجر التقليدية. استهدف العميل خلق تجربة تسوق استثنائية ترتكز على الجانب النفسي والعاطفي، لتربط المعدات الفاخرة بالحالة الذهنية الحالية للرياضي.'
    },
    built: {
      en: 'We engineered the first "mood-intelligent" gear platform in the Kingdom. The core feature is a dynamic Mood Quiz that reads the user\'s mental frequency and curates precise product recommendations accordingly.',
      ar: 'صممنا أول منصة معدات "ذكية مزاجياً" في المملكة. تعتمد المنصة على اختبار مزاج ديناميكي يستقرئ التردد الذهني للمستخدم، ليقدم توصيات منتجات فائقة الدقة.'
    },
    outcome: {
      en: 'A highly differentiated, premium e-commerce experience that transcends traditional retail, creating a deep psychological connection with the modern Saudi athlete.',
      ar: 'تجربة تجارة إلكترونية راقية وفائقة التميز، تتجاوز مفاهيم التجزئة التقليدية لتخلق ارتباطاً نفسياً عميقاً مع الرياضي السعودي المعاصر.'
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
      ar: 'Arkan'
    },
    tagline: {
      en: 'Premium frozen food brand experience',
      ar: 'تجربة فاخرة في عالم الأغذية المجمدة'
    },
    brand: {
      en: 'Arkan is a trusted Middle Eastern food manufacturer specializing in high-quality frozen poultry and meat products.',
      ar: 'شركة رائدة وموثوقة في الشرق الأوسط في مجال تصنيع الأغذية، تتخصص في تقديم منتجات الدواجن واللحوم المجمدة وفق أعلى معايير الجودة.'
    },
    problem: {
      en: 'Arkan required a digital presence that communicated their rigorous quality standards, lack of preservatives, and Halal certification to health-conscious families and wholesale buyers.',
      ar: 'تطلب الأمر بناء حضور رقمي قوي يعكس بوضوح معايير الجودة الصارمة للعلامة، ويبرز خلو منتجاتها من المواد الحافظة والتزامها بشهادة الحلال للعائلات الباحثة عن الغذاء الصحي ولمشتري الجملة.'
    },
    built: {
      en: 'A clean, appetizing digital showcase highlighting their product range. We structured the site around transparency—bringing nutritional facts, product purity, and culinary inspiration to the forefront.',
      ar: 'صممنا واجهة رقمية جذابة وأنيقة تسلط الضوء على تنوع منتجاتهم. ركزنا في بناء الموقع على مبدأ الشفافية، حيث وضعنا الحقائق الغذائية ونقاء المنتجات والإلهام الطهوي في صدارة اهتمام الزائر.'
    },
    outcome: {
      en: 'A modern brand platform that elevates frozen food from a commodity to a premium, trusted choice for family dining across the region.',
      ar: 'منصة علامة تجارية عصرية ترتقي بمنتجات الأغذية المجمدة من مجرد سلعة استهلاكية إلى خيار فاخر وموثوق لموائد العائلات في جميع أنحاء المنطقة.'
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
      ar: 'AFAQ'
    },
    tagline: {
      en: 'Elite Saudi AI intelligence platform',
      ar: 'منصة ذكاء اصطناعي سعودية نخبوية'
    },
    brand: {
      en: 'AFAQ is a next-generation Saudi AI intelligence ecosystem providing automated business management and compliance solutions.',
      ar: 'منظومة سعودية متطورة للذكاء الاصطناعي من الجيل القادم، تقدم حلولاً مؤتمتة فائقة الذكاء لإدارة الأعمال وضمان الامتثال.'
    },
    problem: {
      en: 'The client needed to market a highly complex 9-Agent AI system to Saudi enterprises while proving absolute compliance with ZATCA Phase 2, PDPL, and NCA security standards.',
      ar: 'تمثل التحدي في تقديم نظام ذكاء اصطناعي معقد يعتمد على 9 وكلاء للشركات السعودية، مع إثبات الامتثال التام لمعايير الهيئة السعودية للبيانات (PDPL)، والزكاة والضريبة (ZATCA)، والأمن السيبراني (NCA).'
    },
    built: {
      en: 'A sleek, ultra-fast tech platform. We translated complex AI capabilities into clear business value, featuring interactive ROI calculators and a dark-mode, terminal-inspired aesthetic that signals elite engineering.',
      ar: 'ابتكرنا منصة تقنية فائقة السرعة والأناقة. قمنا بترجمة قدرات الذكاء الاصطناعي المعقدة إلى قيم أعمال واضحة، مدعومة بحاسبات عائد استثمار تفاعلية، وتصميم مستوحى من بيئة الأكواد البرمجية ليعكس طابع الهندسة النخبوية.'
    },
    outcome: {
      en: 'A commanding digital presence that positions AFAQ as the definitive, secure AI infrastructure choice for the Saudi enterprise market.',
      ar: 'حضور رقمي مهيب يرسخ مكانة AFAQ كالخيار الأول والآمن للبنية التحتية للذكاء الاصطناعي في قطاع الشركات بالسوق السعودي.'
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
      ar: 'Khair Aljaar Foods'
    },
    tagline: {
      en: 'Egyptian B2B food export command center',
      ar: 'مركز القيادة لتصدير الأغذية المصري (B2B)'
    },
    brand: {
      en: 'Khair Aljaar Foods is a premium Egyptian food export corporation serving the GCC, Europe, and Africa with over 50,000 MT annual capacity.',
      ar: 'شركة مصرية رائدة في تصدير المنتجات الغذائية الفاخرة، تخدم أسواق الخليج وأوروبا وأفريقيا بقدرة إنتاجية تتجاوز 50,000 طن متري سنوياً.'
    },
    problem: {
      en: 'The company needed a sophisticated B2B command center that didn\'t just list products, but functioned as a live trading platform for international wholesale buyers demanding rigorous export certifications.',
      ar: 'تطلبت الشركة بناء منصة مركزية متطورة للأعمال (B2B) لا تقتصر على عرض المنتجات، بل تعمل كمنصة تداول حية تلبي متطلبات مشتري الجملة الدوليين الباحثين عن أعلى شهادات جودة التصدير.'
    },
    built: {
      en: 'A comprehensive B2B export platform featuring a live commodity index, instant quotation systems, and detailed cold-chain logistics data. The interface was designed to build immediate trust with global importers.',
      ar: 'طورنا منصة تصدير شاملة تتميز بمؤشر حي لأسعار السلع، وأنظمة تسعير فورية، وبيانات دقيقة لسلاسل التبريد واللوجستيات. صُممت الواجهة لتبني ثقة فورية مع المستوردين حول العالم.'
    },
    outcome: {
      en: 'A digital infrastructure that successfully handles massive B2B export operations, positioning Khair Aljaar as a transparent, uncompromising leader in the global food supply chain.',
      ar: 'بنية رقمية صلبة تدير عمليات التصدير الضخمة بكفاءة، مما يرسخ مكانة الشركة كقائد شفاف لا يساوم على الجودة في سلسلة التوريد الغذائي العالمية.'
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
      ar: 'Ali Hamad'
    },
    tagline: {
      en: 'Luxury flooring & carpet alternatives',
      ar: 'أرضيات فاخرة وبدائل متطورة للسجاد'
    },
    brand: {
      en: 'Ali Hamad is a leading Egyptian supplier of modern flooring and luxury carpet alternatives with over 15 years of market experience.',
      ar: 'مورد مصري بارز للأرضيات العصرية وبدائل السجاد الفاخرة، يمتلك إرثاً يمتد لأكثر من 15 عاماً من الخبرة في السوق.'
    },
    problem: {
      en: 'The brand needed to serve two distinct audiences (B2B wholesale distributors and B2C retail customers) simultaneously without confusing the user journey.',
      ar: 'واجهت العلامة تحدي خدمة شريحتين مختلفتين (موزعي الجملة والعملاء الأفراد) في آن واحد، مما تطلب مسار مستخدم مرن لا يسبب تشتتاً لأي من الطرفين.'
    },
    built: {
      en: 'A dual-purpose e-commerce and lead generation platform. We implemented an interactive, swipeable gallery showcasing 30+ real-world installations, alongside dedicated portals for wholesale pricing and individual home consultations.',
      ar: 'صممنا منصة مزدوجة الغرض تجمع بين التجارة الإلكترونية وجذب العملاء. ابتكرنا معرضاً تفاعلياً يبرز أكثر من 30 نموذجاً للتركيبات الواقعية، إلى جانب بوابات مخصصة لتسعير الجملة واستشارات المنازل.'
    },
    outcome: {
      en: 'A streamlined sales funnel that efficiently captures both individual homeowners and large-scale distributors across 27 Egyptian governorates.',
      ar: 'مسار مبيعات انسيابي ينجح بامتياز في استقطاب أصحاب المنازل والموزعين الكبار على حد سواء، ليغطي كافة المحافظات المصرية.'
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
      ar: 'Khair Al-Jiwar'
    },
    tagline: {
      en: 'Real estate developer compliance intelligence',
      ar: 'تحليلات ذكية لتقييم المطورين العقاريين'
    },
    brand: {
      en: 'Khair Al-Jiwar is Egypt\'s premier real estate analytics platform, dedicated to tracking developer compliance and project risk.',
      ar: 'المنصة الرائدة في التحليلات العقارية بمصر، مكرسة لتتبع مدى التزام المطورين وتقييم مخاطر المشاريع بدقة متناهية.'
    },
    problem: {
      en: 'Real estate investors in Egypt lacked a centralized, unbiased source of truth regarding developer delivery rates, complaint resolution, and actual construction quality.',
      ar: 'افتقر المستثمرون في السوق العقاري المصري إلى مصدر محايد وموثوق يوضح معدلات تسليم المشاريع، وسرعة حل الشكاوى، وجودة البناء الفعلية للمطورين.'
    },
    built: {
      en: 'A data-driven analytical engine that ranks real estate projects based on a proprietary "Commitment Score." We built intuitive comparison tools, risk indicators, and advanced search filters for high-end compounds.',
      ar: 'طورنا محركاً تحليلياً متقدماً يصنف المشاريع العقارية بناءً على معيار "مؤشر الالتزام" الحصري. ابتكرنا أدوات مقارنة ذكية، ومؤشرات للمخاطر، وفلاتر بحث دقيقة للمجمعات السكنية الراقية.'
    },
    outcome: {
      en: 'A disruptive, transparent platform that empowers investors to make safe, data-backed decisions before committing capital to off-plan developments.',
      ar: 'منصة شفافة أحدثت نقلة نوعية، تُمكّن المستثمرين من اتخاذ قرارات آمنة ومبنية على بيانات حقيقية قبل استثمار أموالهم في المشاريع قيد الإنشاء.'
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
      ar: 'NODRA'
    },
    tagline: {
      en: 'AI-powered makeup shade matching',
      ar: 'مطابقة درجات المكياج بتقنيات الذكاء الاصطناعي'
    },
    brand: {
      en: 'NODRA is an innovative, privacy-first AI beauty platform that matches users with their perfect makeup shade without requiring personal photos.',
      ar: 'منصة تجميل مبتكرة تعتمد على الذكاء الاصطناعي مع أولوية قصوى للخصوصية، تطابق درجات المكياج المثالية للمستخدمات دون الحاجة لإرفاق أي صور شخصية.'
    },
    problem: {
      en: 'Consumers frequently waste money on the wrong foundation shades, and beauty salons suffer from high return rates. The challenge was creating a highly accurate matching system that respected user privacy.',
      ar: 'تُهدر المستهلكات أموالاً طائلة على درجات كريم الأساس غير المناسبة، وتعاني الصالونات من كثرة المرتجعات. كان التحدي هو ابتكار نظام مطابقة فائق الدقة لا يمس بخصوصية المستخدمة.'
    },
    built: {
      en: 'An intelligent, photo-free AI diagnostic tool. We designed an engaging, conversational quiz interface that determines the user\'s undertone and seamlessly delivers personalized brand recommendations via WhatsApp.',
      ar: 'أداة تشخيص ذكية تعتمد على الذكاء الاصطناعي بالكامل وتستغني عن الصور. صممنا واجهة تفاعلية تحدد الدرجات اللونية للبشرة، وترسل توصيات مخصصة للعلامات التجارية عبر واتساب بسلاسة تامة.'
    },
    outcome: {
      en: 'A viral, user-friendly tool that bridges the gap between digital discovery and physical beauty products, serving both individual consumers and professional salons.',
      ar: 'أداة رقمية جذابة وسريعة الانتشار جسّرت الفجوة بين استكشاف المنتجات رقمياً وتجربتها واقعياً، لخدمة كل من المستهلكات وصالونات التجميل الاحترافية.'
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
      ar: 'KhasStock'
    },
    tagline: {
      en: 'Egypt\'s premium stock fashion marketplace',
      ar: 'بورصة الأزياء والاستوك الفاخرة في مصر'
    },
    brand: {
      en: 'KhasStock is Egypt\'s first specialized "stock clothing exchange," offering premium original fashion brands at massive wholesale discounts.',
      ar: 'أول بورصة متخصصة في مصر لتجارة الملابس الاستوك، توفر وصولاً حصرياً لأرقى العلامات التجارية الأصلية بخصومات جملة غير مسبوقة.'
    },
    problem: {
      en: 'The client needed to digitize a traditionally offline, chaotic clearance market into a premium, organized, and eco-friendly shopping experience.',
      ar: 'استهدف العميل نقل سوق التصفيات -الذي يتسم بالعشوائية والاعتماد على التجارة التقليدية- إلى منصة رقمية فاخرة ومنظمة تقدم تجربة تسوق عصرية وصديقة للبيئة.'
    },
    built: {
      en: 'A dynamic e-commerce environment featuring real-time "stock exchange" style indicators, highlighting limited quantities, active viewers, and deep B2B/B2C pricing tiers.',
      ar: 'بيئة تجارة إلكترونية ديناميكية تستوحي تصميمها من شاشات التداول بالبورصة، تُبرز الكميات المحدودة والمشاهدين النشطين لحظياً، مع توفير شرائح تسعير متعمقة لتجار الجملة والأفراد.'
    },
    outcome: {
      en: 'A high-urgency, highly engaging digital marketplace that successfully gamifies the stock clothing buying experience for over 50,000 customers.',
      ar: 'سوق رقمي تفاعلي يرفع من وتيرة اتخاذ قرار الشراء، نجح في تحويل تجربة تسوق الملابس الاستوك إلى بيئة ممتعة لأكثر من 50,000 عميل.'
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
      ar: 'RYADCO'
    },
    tagline: {
      en: 'Executive HVAC & contracting',
      ar: 'مقاولات وحلول تكييف تنفيذية'
    },
    brand: {
      en: 'RYADCO is an elite HVAC and climate engineering contracting firm operating within the Kingdom of Saudi Arabia.',
      ar: 'شركة مقاولات هندسية نخبوية تتخصص في أنظمة التكييف والتحكم المناخي داخل المملكة العربية السعودية.'
    },
    problem: {
      en: 'RYADCO needed to elevate its brand from a standard contracting company to a premium engineering consultancy, communicating executive-level execution and absolute reliability.',
      ar: 'تطلبت رؤية الشركة الارتقاء بعلامتها التجارية من مجرد شركة مقاولات تقليدية إلى استشارية هندسية فاخرة، لتعكس مستوى التنفيذ الاستثنائي والموثوقية المطلقة في مشاريعها.'
    },
    built: {
      en: 'A strictly professional, corporate platform that emphasizes engineering precision. We integrated interactive cost calculators, structured service modules, and a strong emphasis on transparent, documented delivery.',
      ar: 'منصة مؤسسية تتسم بالاحترافية الصارمة وتُبرز الدقة الهندسية. دمجنا حاسبات تكلفة تفاعلية، وهيكلنا وحدات الخدمات بوضوح، مع التركيز التام على الشفافية وتوثيق مراحل التسليم.'
    },
    outcome: {
      en: 'A digital presence that radiates authority and trust, successfully securing high-value commercial and residential climate engineering contracts.',
      ar: 'حضور رقمي يفيض بالقوة والموثوقية، أسهم بنجاح في تأمين عقود ضخمة لهندسة المناخ في القطاعين التجاري والسكني.'
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
      ar: 'Tasami Industrial'
    },
    tagline: {
      en: 'Saudi clinker supply — MENA export',
      ar: 'توريد الكلينكر السعودي ותصدير للشرق الأوسط'
    },
    brand: {
      en: 'Tasami Industrial is a major player in the Saudi industrial manufacturing sector, specializing in the export and supply of premium clinker and cement products.',
      ar: 'ركيزة أساسية في قطاع التصنيع الصناعي السعودي، تتخصص في تصدير وتوريد منتجات الكلينكر والأسمنت الفاخرة.'
    },
    problem: {
      en: 'The industrial sector often suffers from outdated, clunky digital footprints. Tasami Industrial needed a modern platform to facilitate massive B2B international supply chain logistics.',
      ar: 'غالباً ما يتسم الحضور الرقمي للقطاع الصناعي بالجمود والتقادم. احتاجت الشركة إلى منصة عصرية تُسهّل إدارة العمليات اللوجستية الضخمة لسلاسل التوريد الدولية (B2B).'
    },
    built: {
      en: 'A streamlined, data-heavy B2B portal. We focused on technical specifications, quality certifications, and logistical capabilities, wrapping complex industrial data in a sleek, accessible interface.',
      ar: 'بوابة أعمال (B2B) غنية بالبيانات ومصممة بانسيابية. ركزنا على إبراز المواصفات الفنية، وشهادات الجودة، والقدرات اللوجستية، مع تقديم هذه المعلومات الصناعية المعقدة في واجهة أنيقة وسهلة الاستخدام.'
    },
    outcome: {
      en: 'A commanding industrial platform that bridges the gap between Saudi manufacturing capabilities and global market demands.',
      ar: 'منصة صناعية مهيبة تسد الفجوة بكفاءة بين قدرات التصنيع السعودية ومتطلبات الأسواق العالمية.'
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
      ar: 'Al Rehan Almasi'
    },
    tagline: {
      en: 'Premium food supply for the Saudi market',
      ar: 'إمدادات غذائية فاخرة للسوق السعودي'
    },
    brand: {
      en: 'Al Rehan Almasi is a trusted B2B partner for the supply of fresh and frozen food products.',
      ar: 'شريك استراتيجي موثوق لقطاع الأعمال (B2B) في توريد أرقى المنتجات الغذائية الطازجة والمجمدة.'
    },
    problem: {
      en: 'The company required a digital catalog that could efficiently showcase a vast inventory to corporate clients (restaurants, hotels) while streamlining the quotation process.',
      ar: 'تطلبت عمليات الشركة كتالوجاً رقمياً يستعرض مخزونها الهائل بكفاءة لعملاء الشركات (كالمطاعم والفنادق)، مع تبسيط أتمتة طلبات عروض الأسعار.'
    },
    built: {
      en: 'A clean, corporate supply chain portal emphasizing reliability. We built a structured catalog system with direct "Request for Quote" functionalities to accelerate the B2B sales cycle.',
      ar: 'بوابة سلسلة توريد مؤسسية تتسم بالوضوح وتُعزز الموثوقية. أسسنا نظام كتالوج منظم ومزود بخاصية "طلب عرض سعر" مباشرةً، بهدف تسريع دورة مبيعات الشركات.'
    },
    outcome: {
      en: 'An optimized digital supply chain hub that connects premium food products with high-volume commercial buyers effortlessly.',
      ar: 'مركز رقمي محسن لسلاسل التوريد، يربط المنتجات الغذائية الفاخرة بكبار المشترين التجاريين بكل سهولة واحترافية.'
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
      ar: 'Soul Gold'
    },
    tagline: {
      en: 'Fresh produce supplier & Artisan Food E-commerce',
      ar: 'تجارة إلكترونية للأغذية الحرفية والمنتجات الطازجة'
    },
    brand: {
      en: 'Soul Gold is an artisan, farm-to-table e-commerce brand delivering premium, organic fresh produce and specialty foods across Saudi Arabia.',
      ar: 'علامة تجارية حرفية في مجال التجارة الإلكترونية، تتبنى مفهوم "من المزرعة إلى المائدة"، وتقدم منتجات طازجة وأطعمة عضوية متخصصة وفاخرة في جميع أنحاء المملكة العربية السعودية.'
    },
    problem: {
      en: 'The brand needed to communicate the luxury and purity of its "Alchemy of Taste" philosophy while managing the practicalities of same-day fresh food delivery.',
      ar: 'تمثل التحدي في ترجمة التجربة الحسية والملموسة لشراء الأطعمة الحرفية الطازجة إلى واجهة رقمية، مع بناء ثقة مطلقة في سلسلة التبريد أثناء التوصيل.'
    },
    built: {
      en: 'An elegant, high-end e-commerce experience. We utilized rich, organic art direction paired with highly functional features like a countdown timer for same-day delivery and an exclusive VIP loyalty program.',
      ar: 'تجربة تجارة إلكترونية حسية وغنية بصرياً. استخدمنا تصويراً فوتوغرافياً عالي الجودة للأطعمة، ولوحة ألوان مستوحاة من الطبيعة، مع سرد قصصي لجذور المنتجات الزراعية لرفع قيمتها المُدركة.'
    },
    outcome: {
      en: 'A premium digital boutique that successfully positions fresh produce as a luxury lifestyle choice for the discerning Saudi consumer.',
      ar: 'تجربة بقالة رقمية استثنائية وبوتيكية تبرر تسعيرها الفاخر، وتزرع ولاءً عميقاً لدى الذواقة والمهتمين بالصحة.'
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
