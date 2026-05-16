import type { MetadataRoute } from "next";

import { getSiteOrigin } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteOrigin = await getSiteOrigin();

  return [
    {
      url: siteOrigin,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
