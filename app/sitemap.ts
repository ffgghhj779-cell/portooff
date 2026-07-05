import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/data/site';
import { PROJECTS } from '@/lib/data/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const projectUrls = PROJECTS.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...projectUrls,
  ];
}
