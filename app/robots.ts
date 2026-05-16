import type { MetadataRoute } from "next";

import { getSiteOrigin } from "@/lib/site";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const siteOrigin = await getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteOrigin}/sitemap.xml`,
    host: siteOrigin,
  };
}
