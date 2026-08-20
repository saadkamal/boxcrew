import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { allRoutes } from "@/lib/catalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return allRoutes().map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.kind === "page" ? "weekly" : "monthly",
    priority: route.kind === "page" ? (route.path === "/" ? 1 : 0.8) : 0.7,
  }));
}
