import type { MetadataRoute } from 'next'

// Live domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://quoteclarity.huxangroup.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
