import { MetadataRoute } from 'next'
import { properties } from '@/data/properties'
import { insights } from '@/data/insights'

const baseUrl = 'https://infinityviews.ae'
const locales = ['en', 'ar', 'ru']

function localise(path: string, locale: string) {
  return locale === 'en' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/properties', '/philosophy', '/contact']

  const staticEntries = staticRoutes.flatMap((route) =>
    locales.map((locale) => ({
      url: localise(route, locale),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '/' ? 1 : 0.8,
    })),
  )

  const propertyEntries = properties.flatMap((p) =>
    locales.map((locale) => ({
      url: localise(`/properties/${p.slug}`, locale),
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  )

  const insightEntries = insights.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...staticEntries, ...propertyEntries, ...insightEntries]
}
