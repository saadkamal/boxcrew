import type { Industry } from "./types";
import { slug } from "./types";

export const industries = [
  {
    kind: "industry",
    slug: slug("b2b-saas"),
    title: "B2B SaaS",
    description: "Grok Bot use cases for B2B software companies.",
    jobSlugs: [
      slug("sales-outbound"),
      slug("account-health"),
      slug("paid-media"),
      slug("chief-of-staff"),
    ],
    startGuide: slug("install-plan"),
  },
  {
    kind: "industry",
    slug: slug("recruiting"),
    title: "Recruiting",
    description: "Grok Bot use cases for recruiting and staffing.",
    jobSlugs: [
      slug("talent-scout"),
      slug("chief-of-staff"),
    ],
    startGuide: slug("install-plan"),
  },
  {
    kind: "industry",
    slug: slug("engineering-product"),
    title: "Engineering & Product",
    description: "Grok Bot use cases for engineering and product teams.",
    jobSlugs: [
      slug("product-performance"),
      slug("bug-reproduction"),
      slug("chief-of-staff"),
    ],
    startGuide: slug("install-plan"),
  },
  {
    kind: "industry",
    slug: slug("finance-ops"),
    title: "Finance Ops",
    description: "Grok Bot use cases for finance and operations teams.",
    jobSlugs: [
      slug("expense-manager"),
      slug("chief-of-staff"),
    ],
    startGuide: slug("install-plan"),
  },
] as const satisfies readonly Industry[];

export function getIndustryBySlug(s: string): Industry | undefined {
  return industries.find((industry) => industry.slug === s);
}
