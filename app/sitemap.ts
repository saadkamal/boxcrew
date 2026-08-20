import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { setupGuides, skills, jobs, industries } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/grok-vs-grok-bot`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const setupPages: MetadataRoute.Sitemap = setupGuides.map((guide) => ({
    url: `${SITE_URL}/setup/${guide.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const skillPages: MetadataRoute.Sitemap = skills.map((skill) => ({
    url: `${SITE_URL}/skills/${skill.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const jobPages: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${SITE_URL}/jobs/${job.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((industry) => ({
    url: `${SITE_URL}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...setupPages, ...skillPages, ...jobPages, ...industryPages];
}
