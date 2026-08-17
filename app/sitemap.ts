// app/sitemap.ts
import { MetadataRoute } from "next";
import { ALL_CONVERTER_SLUGS } from "./lib/converter"; // From the file we made earlier

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thewebpstudio.com";

  // Base Routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];

  // Dynamic SEO Format Routes
  const dynamicRoutes: MetadataRoute.Sitemap = ALL_CONVERTER_SLUGS.map(
    (slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9, // High priority for your tool pages
    }),
  );

  return [...routes, ...dynamicRoutes];
}
