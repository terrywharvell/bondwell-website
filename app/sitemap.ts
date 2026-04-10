import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.oleni.app";
  const lastModified = new Date("2026-03-28");

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];
}
