import type { Metadata } from 'next';
import { SITE } from '@/lib/data/site';

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Digital Agency`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'digital agency',
    'web design',
    'UX UI',
    'Cairo',
    'Tasami',
    'تسامي',
    'development',
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Digital Agency`,
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Digital Agency`,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export function pageMetadata(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title: `${title} | ${SITE.name}`, description },
    twitter: { title: `${title} | ${SITE.name}`, description },
  };
}
