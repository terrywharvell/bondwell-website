import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.oleni.app";
  const homepageLastModified = new Date("2026-07-22");
  const contentLastModified = new Date("2026-03-28");

  return [
    {
      url: baseUrl,
      lastModified: homepageLastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/help`,
      lastModified: contentLastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
