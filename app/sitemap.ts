import type { MetadataRoute } from 'next'

const projects = [
  'planer-university-scheduler',
  'hackerium',
  'netnook',
  '4lop',
  'adam-marczak',
  'islandhouse',
  'glg-partner',
  'precimed',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const generateProjectUrls = projects.map((project) => ({
    url: `https://kamilmarczak.pl/projects/${project}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `https://kamilmarczak.pl/en/projects/${project}`,
      },
    },
    priority: 0.8,
  }))
  return [
    {
      url: 'https://kamilmarczak.pl',
      lastModified: new Date(),
      alternates: {
        languages: {
          en: 'https://kamilmarczak.pl/en',
        },
      },
      priority: 1,
    },
    ...generateProjectUrls,
  ]
}
