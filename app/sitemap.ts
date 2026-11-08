import type { MetadataRoute } from "next";
import { getSiteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  // Do not publish placeholder or localhost URLs: configure SITE_URL when the
  // production domain is known.
  if (!siteUrl) return [];

  const lastModified = new Date();
  return [
    { url: new URL("/", siteUrl).toString(), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: new URL("/sq", siteUrl).toString(), lastModified, changeFrequency: "monthly", priority: 0.9 },
  ];
}
