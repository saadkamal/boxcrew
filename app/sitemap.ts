import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { allRoutes } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = allRoutes();

  return routes.map((route) => {
    const isBlog = route.startsWith("/blog");
    const isHome = route === "/";
    
    return {
      url: `${SITE_URL}${route}`,
      lastModified: now,
      changeFrequency: isHome ? "weekly" : isBlog ? "weekly" : "monthly",
      priority: isHome ? 1 : isBlog ? 0.8 : 0.7,
    };
  });
}
