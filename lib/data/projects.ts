export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  overview: string;
  deliverables: string[];
  tags: string[];
  year: string;
  services: string[];
  liveUrl?: string;
  image: string;
  gallery: string[];
  tall: boolean;
};

/** Live site preview via thum.io — updates automatically from production URL */
function shot(url: string): string {
  const clean = url.replace(/#.*$/, '');
  return `https://image.thum.io/get/width/1200/crop/675/noanimate/${clean}`;
}

export const PROJECTS: Project[] = [
  {
    slug: 'afaq',
    name: 'AFAQ',
    tagline: 'Elite Saudi AI intelligence platform',
    description:
      'Nine-agent AI ecosystem for Saudi businesses — ZATCA, PDPL, and Nafath-ready.',
    overview:
      'Enterprise-grade landing and product experience for an integrated AI platform built for the Saudi market. Features live system status, ROI calculator, tiered pricing, and compliance badges (ZATCA Phase 2, PDPL, NCA).',
    deliverables: ['Marketing site', 'Product UI', 'Pricing flows', 'Arabic/English'],
    tags: ['AI', 'SaaS', 'Enterprise'],
    year: '2025',
    services: ['UX/UI Design', 'Frontend Development'],
    liveUrl: 'https://afaq-ivory.vercel.app/',
    image: shot('https://afaq-ivory.vercel.app/'),
    gallery: [shot('https://afaq-ivory.vercel.app/')],
    tall: true,
  },
  {
    slug: 'alwafeer',
    name: 'Al-Wafeer',
    tagline: 'Discount retail e-commerce for Saudi Arabia',
    description:
      'Full-featured discount store — groceries, appliances, furniture, and WhatsApp ordering.',
    overview:
      'High-conversion retail storefront with category browsing, weekly deals, bestsellers, testimonials, and instant WhatsApp checkout. Built for a multi-category discount trading institution serving all Saudi regions.',
    deliverables: ['E-commerce UI', 'Product catalog', 'WhatsApp integration', 'RTL layout'],
    tags: ['E-commerce', 'Retail', 'KSA'],
    year: '2025',
    services: ['UX/UI Design', 'Web Development'],
    liveUrl: 'https://alwafeer-store.web.app/',
    image: shot('https://alwafeer-store.web.app/'),
    gallery: [shot('https://alwafeer-store.web.app/')],
    tall: false,
  },
  {
    slug: 'alrehan-almasi',
    name: 'Al Rehan Almasi',
    tagline: 'Premium food supply for the Saudi market',
    description:
      'B2B food distribution — fresh fish, poultry, rice, oils, and frozen goods nationwide.',
    overview:
      'Corporate supply platform for restaurants, hotels, and wholesale buyers. Category-driven catalog, cold-chain messaging, partner trust strip, and professional Arabic-first brand presentation across the Kingdom.',
    deliverables: ['Corporate website', 'Category system', 'B2B lead flows', 'Gallery'],
    tags: ['Food supply', 'B2B', 'Logistics'],
    year: '2025',
    services: ['Brand UI', 'Web Development'],
    liveUrl: 'https://alrehan-almasi.vercel.app/',
    image: shot('https://alrehan-almasi.vercel.app/'),
    gallery: [shot('https://alrehan-almasi.vercel.app/')],
    tall: true,
  },
  {
    slug: 'arkan',
    name: 'Arkan',
    tagline: 'Premium frozen food brand experience',
    description:
      'Consumer frozen food brand site — burgers, fries, chicken, and recipe discovery.',
    overview:
      'Appetite-driven product storytelling for a halal frozen food brand. Hero campaign, product grid with nutritional badges, recipe inspiration, and freezing benefits education — all optimized for Arabic retail audiences.',
    deliverables: ['Brand site', 'Product pages', 'Recipe hub', 'Motion'],
    tags: ['FMCG', 'Food', 'Brand'],
    year: '2025',
    services: ['UX/UI Design', 'Frontend Development'],
    liveUrl: 'https://arkan-alpha.vercel.app/',
    image: shot('https://arkan-alpha.vercel.app/'),
    gallery: [shot('https://arkan-alpha.vercel.app/')],
    tall: false,
  },
  {
    slug: 'aura',
    name: 'Motivation Aura',
    tagline: 'Mood-intelligent gear for Saudi athletes',
    description:
      'Premium athletic e-commerce with mood quiz and curated performance collections.',
    overview:
      'English-first premium sports retail experience for the Saudi market. Trending products, brand partnerships (Nike, Adidas, Lululemon), mood-based recommendations, and climate-aware copy tailored to Gulf athletes.',
    deliverables: ['E-commerce UI', 'Mood quiz', 'Collections', 'Cart flows'],
    tags: ['Sports', 'E-commerce', 'Wellness'],
    year: '2025',
    services: ['Product Design', 'Frontend Development'],
    liveUrl: 'https://aura-omega-jade.vercel.app/',
    image: shot('https://aura-omega-jade.vercel.app/'),
    gallery: [shot('https://aura-omega-jade.vercel.app/')],
    tall: true,
  },
  {
    slug: 'badeel-alsejad',
    name: 'Badeel Al-Sejad',
    tagline: 'Luxury flooring & carpet alternatives — Egypt',
    description:
      'Retail + wholesale platform for premium European flooring with nationwide delivery.',
    overview:
      'Ali Hamad brand site for carpet alternatives since 2009. Dual retail/wholesale paths, free home inspection booking, animated product gallery (30 designs), and trust signals across 27 Egyptian governorates.',
    deliverables: ['Dual storefront', 'Wholesale portal', 'Gallery', 'Lead capture'],
    tags: ['Retail', 'Interior', 'B2B'],
    year: '2025',
    services: ['UX/UI Design', 'Web Development'],
    liveUrl: 'https://badeel-alsejad.web.app/',
    image: shot('https://badeel-alsejad.web.app/'),
    gallery: [shot('https://badeel-alsejad.web.app/')],
    tall: false,
  },
  {
    slug: 'khair-al-jiwar',
    name: 'Khair Al-Jiwar',
    tagline: 'Real estate developer compliance intelligence',
    description:
      'Independent platform scoring developer delivery, quality, and complaint resolution.',
    overview:
      'Data-driven proptech product for Egyptian investors. Project search, side-by-side comparison, commitment scores (0–100), risk indicators, and verified complaint history — helping buyers decide before they pay.',
    deliverables: ['Platform UI', 'Search & compare', 'Scoring dashboard', 'Onboarding'],
    tags: ['Proptech', 'Data', 'FinTech-adjacent'],
    year: '2025',
    services: ['UX/UI Design', 'Frontend Development'],
    liveUrl: 'https://khair-al-jiwar.web.app/',
    image: shot('https://khair-al-jiwar.web.app/'),
    gallery: [shot('https://khair-al-jiwar.web.app/')],
    tall: true,
  },
  {
    slug: 'khair-aljaar',
    name: 'Khair Aljaar Foods',
    tagline: 'Egyptian B2B food export command center',
    description:
      'Wholesale export platform — live commodity index, MOQ quotes, and cold-chain logistics.',
    overview:
      'Premium B2B export portal for Egyptian agricultural commodities to GCC, Europe, and Africa. Live commodity ticker, certified export standards, product gallery, global footprint map, and WhatsApp-assisted quoting.',
    deliverables: ['B2B portal', 'Catalog', 'Quote system', 'EN/AR'],
    tags: ['Export', 'B2B', 'Agriculture'],
    year: '2025',
    services: ['Product Design', 'Web Development'],
    liveUrl: 'https://khaireljewar.vercel.app/en',
    image: shot('https://khaireljewar.vercel.app/en'),
    gallery: [shot('https://khaireljewar.vercel.app/en')],
    tall: false,
  },
  {
    slug: 'khasstock',
    name: 'KhasStock',
    tagline: 'Egypt\'s premium stock & wholesale fashion marketplace',
    description:
      'Stock fashion marketplace — A+ grade inventory, wholesale tiers, and nationwide shipping.',
    overview:
      'High-energy retail experience for Egyptian stock fashion. Hero carousel promos, A+ quality badges, social proof counters, trader registration, and 70% savings messaging across 27 governorates.',
    deliverables: ['Marketplace UI', 'Wholesale signup', 'Product feeds', 'RTL'],
    tags: ['Fashion', 'Marketplace', 'Wholesale'],
    year: '2025',
    services: ['UX/UI Design', 'Frontend Development'],
    liveUrl: 'https://khasstock-8833a.web.app/',
    image: shot('https://khasstock-8833a.web.app/'),
    gallery: [shot('https://khasstock-8833a.web.app/')],
    tall: true,
  },
  {
    slug: 'nodra',
    name: 'NODRA',
    tagline: 'AI-powered makeup shade matching — no photos needed',
    description:
      'Privacy-first beauty quiz delivering foundation undertone results via WhatsApp.',
    overview:
      'Arabic-first beauty tech product using questionnaire-based AI instead of personal photos. Warm/cool/neutral results, salon partner program, newsletter, and conversion-optimized quiz funnel for Egyptian consumers.',
    deliverables: ['Quiz product', 'Salon portal', 'WhatsApp delivery', 'Brand site'],
    tags: ['Beauty', 'AI', 'Consumer'],
    year: '2025',
    services: ['UX/UI Design', 'Web Development'],
    liveUrl: 'https://nodra-985b0.web.app/',
    image: shot('https://nodra-985b0.web.app/'),
    gallery: [shot('https://nodra-985b0.web.app/')],
    tall: false,
  },
  {
    slug: 'ryadco',
    name: 'RYADCO',
    tagline: 'Executive HVAC & contracting — Saudi Arabia',
    description:
      'Premium HVAC installation, maintenance contracts, and general contracting.',
    overview:
      'Executive-grade corporate site for climate engineering in KSA. Instant cost estimator, case studies (VRF, hospitals, logistics), methodology timeline, client testimonials, and structured service detail pages.',
    deliverables: ['Corporate site', 'Cost calculator', 'Case studies', 'Lead forms'],
    tags: ['HVAC', 'Industrial', 'B2B'],
    year: '2025',
    services: ['Brand UI', 'Web Development'],
    liveUrl: 'https://ryadco-513b2.web.app/',
    image: shot('https://ryadco-513b2.web.app/'),
    gallery: [shot('https://ryadco-513b2.web.app/')],
    tall: true,
  },
  {
    slug: 'soul-gold',
    name: 'Soul Gold',
    tagline: 'Fresh produce supplier — Jeddah & Kingdom-wide',
    description:
      'Premium fruits, vegetables, and kitchen essentials with same-day delivery in KSA.',
    overview:
      'Consumer-facing fresh produce commerce for Soul Gold Trading (CR 7053178781). Category promos, bestsellers, weekly deals, gift baskets, and trust badges for cold-chain quality across Saudi Arabia.',
    deliverables: ['E-commerce UI', 'Category promos', 'SEO landing', 'RTL'],
    tags: ['Food', 'E-commerce', 'KSA'],
    year: '2025',
    services: ['UX/UI Design', 'Frontend Development'],
    liveUrl: 'https://soul-gold.vercel.app/',
    image: shot('https://soul-gold.vercel.app/'),
    gallery: [shot('https://soul-gold.vercel.app/')],
    tall: false,
  },
  {
    slug: 'soul-gold-trading',
    name: 'Soul Gold Trading',
    tagline: 'B2B fresh & frozen supply portal',
    description:
      'Registered Saudi trading company supplying households, restaurants, and retailers.',
    overview:
      'Brand presence for Soul Gold Trading — Jeddah-based fresh and frozen food supplier. Hero promotions, category blocks, bulk ordering cues, and compliance messaging for VAT-registered LLC operations.',
    deliverables: ['Brand site', 'Catalog sections', 'Trust compliance', 'Mobile-first'],
    tags: ['Food supply', 'B2B', 'Retail'],
    year: '2025',
    services: ['UX/UI Design', 'Web Development'],
    liveUrl: 'https://soul-ubbd.vercel.app/',
    image: shot('https://soul-ubbd.vercel.app/'),
    gallery: [shot('https://soul-ubbd.vercel.app/')],
    tall: true,
  },
  {
    slug: 'tasami-industrial',
    name: 'Tasami Industrial',
    tagline: 'Saudi clinker supply — MENA export',
    description:
      'B2B industrial export platform for certified Saudi clinker with SGS documentation.',
    overview:
      'High-trust industrial sales site for Saudi clinker export to Syria, Lebanon, Jordan, and MENA markets. Technical specs (ASTM/EN), logistics tables, LC payment terms, market demand reports, and lead capture for bulk orders.',
    deliverables: ['Industrial site', 'Spec tables', 'Market data', 'Lead forms'],
    tags: ['Industrial', 'Export', 'B2B'],
    year: '2025',
    services: ['UX/UI Design', 'Web Development'],
    liveUrl: 'https://tasami-klinker.vercel.app/',
    image: shot('https://tasami-klinker.vercel.app/'),
    gallery: [shot('https://tasami-klinker.vercel.app/')],
    tall: false,
  },
  {
    slug: 'tasami-alwataniya',
    name: 'Tasami Al-Wataniya',
    tagline: 'Multilingual national brand gateway',
    description:
      'Language-selection entry portal — Arabic, English, Urdu, and Tagalog.',
    overview:
      'Elegant multilingual landing for Tasami\'s national division. Minimal language picker with four locale options, premium typography, and instant routing to localized experiences for diverse Saudi audiences.',
    deliverables: ['Landing page', 'i18n routing', 'Brand UI', 'Motion'],
    tags: ['Corporate', 'i18n', 'Brand'],
    year: '2025',
    services: ['Brand Identity', 'Frontend Development'],
    liveUrl: 'https://tasami-1.vercel.app/',
    image: shot('https://tasami-1.vercel.app/'),
    gallery: [shot('https://tasami-1.vercel.app/')],
    tall: true,
  },
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
