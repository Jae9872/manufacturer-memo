import type { MetadataRoute } from 'next'

// TODO: Replace with your actual domain once you set it up
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://manufacturer-memo.azurestaticapps.net'

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
