import type { Industry } from "./types";

/**
 * Industries catalog.
 * 4 industry verticals with relevant job links.
 * Job associations are locked per requirements.
 */
export const industries: readonly Industry[] = [
  {
    kind: "industry",
    slug: "b2b-saas",
    title: "B2B SaaS",
    description: "Grok Bot use cases for B2B software companies.",
    jobSlugs: ["sales-outbound", "account-health", "paid-media", "chief-of-staff"],
  },
  {
    kind: "industry",
    slug: "recruiting",
    title: "Recruiting",
    description: "Grok Bot use cases for recruiting and staffing.",
    jobSlugs: ["talent-scout", "chief-of-staff"],
  },
  {
    kind: "industry",
    slug: "engineering-product",
    title: "Engineering & Product",
    description: "Grok Bot use cases for engineering and product teams.",
    jobSlugs: ["product-performance", "bug-reproduction", "chief-of-staff"],
  },
  {
    kind: "industry",
    slug: "finance-ops",
    title: "Finance Ops",
    description: "Grok Bot use cases for finance and operations teams.",
    jobSlugs: ["expense-manager", "chief-of-staff"],
  },
] as const;

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((industry) => industry.slug === slug);
}
