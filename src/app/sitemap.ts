import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mithriveglobal.com';

  // Core static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/social-impact',
    '/work',
    '/team',
    '/clients',
    '/alliances',
    '/path',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Legal routes (lower priority)
  const legalRoutes = [
    '/privacy',
    '/terms',
    '/cookie-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.3,
  }));

  return [...routes, ...legalRoutes];
}
