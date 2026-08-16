import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://webpstudio.online";
  const currentDate = new Date();

  // All high-intent routes
  const routes = [
    "",
    "/png-to-webp",
    "/jpg-to-webp",
    "/avif-to-webp",
    "/heic-to-webp",
    "/tiff-to-webp",
    "/bmp-to-webp",
    "/gif-to-webp",
    "/compress-webp",
    "/batch-webp-converter",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.includes("-to-webp") ? 0.9 : 0.5,
  }));
}
