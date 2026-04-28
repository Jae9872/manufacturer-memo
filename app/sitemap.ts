import type { MetadataRoute } from 'next'

// Current live Azure URL - update this once you set up your custom domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://brave-rock-066fa4610.7.azurestaticapps.net'

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
