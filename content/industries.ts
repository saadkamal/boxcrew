import type { Industry } from "./types";
import { slug } from "./types";

/**
 * Industries catalog.
 * 4 industries. Locked slugs and job associations per Vera.
 * Each industry startGuide = install-plan.
 */
export const industries = [
  {
    kind: "industry",
    slug: slug("b2b-saas"),
    title: "B2B SaaS",
    description: "Grok Bot use cases for B2B software companies.",
    body: "B2B SaaS teams use Grok Bot for sales prospecting, customer health monitoring, paid media optimization, and executive operations. Each bot runs in a shared box tied to your Cursor account (Ultra, Teams Premium, or SuperGrok Heavy required).",
    jobSlugs: [slug("sales-outbound"), slug("account-health"), slug("paid-media"), slug("chief-of-staff")],
    startGuide: slug("install-plan"),
  },
  {
    kind: "industry",
    slug: slug("recruiting"),
    title: "Recruiting",
    description: "Grok Bot use cases for recruiting and staffing.",
    body: "Recruiting teams use Grok Bot for candidate sourcing and executive coordination. Bots search your ATS and produce shortlists—never contact candidates directly. Runs in the shared box with your Cursor account.",
    jobSlugs: [slug("talent-scout"), slug("chief-of-staff")],
    startGuide: slug("install-plan"),
  },
  {
    kind: "industry",
    slug: slug("engineering-product"),
    title: "Engineering & Product",
    description: "Grok Bot use cases for engineering and product teams.",
    body: "Engineering and product teams use Grok Bot for metrics monitoring and bug documentation. Bots produce reports and repro packs—never deploy code or close tickets. Runs in the shared box with your Cursor account.",
    jobSlugs: [slug("product-performance"), slug("bug-reproduction"), slug("chief-of-staff")],
    startGuide: slug("install-plan"),
  },
  {
    kind: "industry",
    slug: slug("finance-ops"),
    title: "Finance Ops",
    description: "Grok Bot use cases for finance and operations teams.",
    body: "Finance and ops teams use Grok Bot for expense processing and executive coordination. Bots match receipts and flag policy violations—never approve expenses or process payments. Runs in the shared box with your Cursor account.",
    jobSlugs: [slug("expense-manager"), slug("chief-of-staff")],
    startGuide: slug("install-plan"),
  },
] as const satisfies readonly Industry[];
