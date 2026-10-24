import { MetadataRoute } from "next"
import { CITIES_LIST } from "@/lib/cities"

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes: MetadataRoute.Sitemap = CITIES_LIST.map((city) => ({
    url: `https://trillongraf.com.ar/carteleria/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [
    {
      url: "https://trillongraf.com.ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://trillongraf.com.ar/mastiles",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...cityRoutes,
  ]
}
