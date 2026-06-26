import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*'], // Disallow crawling of API routes if added later
    },
    sitemap: 'https://mithriveglobal.com/sitemap.xml',
  };
}
