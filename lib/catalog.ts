/**
 * Catalog query and validation functions.
 * 
 * assertComplete() throws if:
 * - Counts != 8 setup / 16 skills / 8 jobs / 4 industries / 2 pages
 * - Extra slugs or kinds
 * - Industry jobs outside the locked 8
 * - Missing anti-doorway fields
 * - A 17th skill
 */

import type { Kind, Slug, CatalogItem, Setup, Skill, Job, Industry, StaticPage } from "@/content/types";
import { slug } from "@/content/types";
import { setupGuides as _setupGuides } from "@/content/setup";
import { skills as _skills } from "@/content/skills";
import { jobs as _jobs } from "@/content/jobs";
import { industries as _industries } from "@/content/industries";
import { pages as _pages } from "@/content/pages";

const setupGuides: readonly Setup[] = _setupGuides;
const skills: readonly Skill[] = _skills;
const jobs: readonly Job[] = _jobs;
const industries: readonly Industry[] = _industries;
const pages: readonly StaticPage[] = _pages;

/** Locked slugs per Vera. No additions allowed. */
const LOCKED_SETUP_SLUGS = new Set([
  "install-plan", "first-bot", "plugins", "the-box",
  "skill-then-routine", "approvals", "remote-mcp", "roster-group-ios",
]);

const LOCKED_SKILL_SLUGS = new Set([
  "account-health-watch", "icp-outreach-drafts", "candidate-slate-ats",
  "paid-media-budget", "expense-receipt-match", "bug-repro-pack",
  "event-to-digest", "teach-a-task", "remote-mcp-connector",
  "box-login-hygiene", "auto-review-rules", "secret-handoff",
  "multi-bot-kickoff", "update-vs-reset", "workspace-handoff", "bot-persona-kit",
]);

const LOCKED_JOB_SLUGS = new Set([
  "sales-outbound", "talent-scout", "paid-media", "expense-manager",
  "product-performance", "bug-reproduction", "account-health", "chief-of-staff",
]);

const LOCKED_INDUSTRY_SLUGS = new Set([
  "b2b-saas", "recruiting", "engineering-product", "finance-ops",
]);

const LOCKED_PAGE_SLUGS = new Set([
  "grok-vs-grok-bot", "glossary",
]);

/** All catalog items flattened. */
export function all(): readonly CatalogItem[] {
  return [
    ...setupGuides,
    ...skills,
    ...jobs,
    ...industries,
    ...pages,
  ];
}

/** Get items by kind. */
export function byKind<K extends Kind>(kind: K): readonly CatalogItem[] {
  return all().filter((item) => item.kind === kind);
}

/** Get single item by kind and slug. */
export function get<K extends Kind>(
  kind: K,
  itemSlug: Slug
): CatalogItem | undefined {
  return all().find((item) => item.kind === kind && item.slug === itemSlug);
}

/** Search items by query and optional kind filter. */
export function search(opts: { q: string; kind?: Kind }): readonly CatalogItem[] {
  const query = opts.q.toLowerCase().trim();
  if (!query) return opts.kind ? byKind(opts.kind) : all();
  
  return all().filter((item) => {
    if (opts.kind && item.kind !== opts.kind) return false;
    return (
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.body.toLowerCase().includes(query)
    );
  });
}

/** All routes for sitemap. Home + 38 content routes = 39. */
export function allRoutes(): readonly string[] {
  const routes: string[] = ["/"];
  
  for (const item of setupGuides) {
    routes.push(`/setup/${item.slug}`);
  }
  for (const item of skills) {
    routes.push(`/skills/${item.slug}`);
  }
  for (const item of jobs) {
    routes.push(`/jobs/${item.slug}`);
  }
  for (const item of industries) {
    routes.push(`/industries/${item.slug}`);
  }
  for (const item of pages) {
    routes.push(`/${item.slug}`);
  }
  
  return routes;
}

/** Get jobs for an industry. */
export function jobsOf(industrySlug: Slug): readonly Job[] {
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) return [];
  
  const result: Job[] = [];
  for (const jobSlug of industry.jobSlugs) {
    const job = jobs.find((j) => j.slug === jobSlug);
    if (job) {
      result.push(job);
    }
  }
  return result;
}

/** Validate catalog completeness. Throws on any violation. */
export function assertComplete(): void {
  const errors: string[] = [];
  
  // Count validation
  if (setupGuides.length !== 8) {
    errors.push(`Expected 8 setup guides, got ${setupGuides.length}`);
  }
  if (skills.length !== 16) {
    errors.push(`Expected 16 skills (no 17th), got ${skills.length}`);
  }
  if (jobs.length !== 8) {
    errors.push(`Expected 8 jobs, got ${jobs.length}`);
  }
  if (industries.length !== 4) {
    errors.push(`Expected 4 industries, got ${industries.length}`);
  }
  if (pages.length !== 2) {
    errors.push(`Expected 2 pages, got ${pages.length}`);
  }
  
  // Slug validation - no extras, no missing
  for (const guide of setupGuides) {
    if (!LOCKED_SETUP_SLUGS.has(guide.slug)) {
      errors.push(`Unlocked setup slug: ${guide.slug}`);
    }
  }
  for (const lockedSlug of LOCKED_SETUP_SLUGS) {
    if (!setupGuides.some((g) => g.slug === lockedSlug)) {
      errors.push(`Missing setup slug: ${lockedSlug}`);
    }
  }
  
  for (const skill of skills) {
    if (!LOCKED_SKILL_SLUGS.has(skill.slug)) {
      errors.push(`Unlocked skill slug: ${skill.slug}`);
    }
  }
  for (const lockedSlug of LOCKED_SKILL_SLUGS) {
    if (!skills.some((s) => s.slug === lockedSlug)) {
      errors.push(`Missing skill slug: ${lockedSlug}`);
    }
  }
  
  for (const job of jobs) {
    if (!LOCKED_JOB_SLUGS.has(job.slug)) {
      errors.push(`Unlocked job slug: ${job.slug}`);
    }
  }
  for (const lockedSlug of LOCKED_JOB_SLUGS) {
    if (!jobs.some((j) => j.slug === lockedSlug)) {
      errors.push(`Missing job slug: ${lockedSlug}`);
    }
  }
  
  for (const industry of industries) {
    if (!LOCKED_INDUSTRY_SLUGS.has(industry.slug)) {
      errors.push(`Unlocked industry slug: ${industry.slug}`);
    }
  }
  for (const lockedSlug of LOCKED_INDUSTRY_SLUGS) {
    if (!industries.some((i) => i.slug === lockedSlug)) {
      errors.push(`Missing industry slug: ${lockedSlug}`);
    }
  }
  
  for (const page of pages) {
    if (!LOCKED_PAGE_SLUGS.has(page.slug)) {
      errors.push(`Unlocked page slug: ${page.slug}`);
    }
  }
  for (const lockedSlug of LOCKED_PAGE_SLUGS) {
    if (!pages.some((p) => p.slug === lockedSlug)) {
      errors.push(`Missing page slug: ${lockedSlug}`);
    }
  }
  
  // Industry job validation - only locked job slugs allowed
  for (const industry of industries) {
    for (const jobSlug of industry.jobSlugs) {
      if (!LOCKED_JOB_SLUGS.has(jobSlug)) {
        errors.push(`Industry ${industry.slug} references unlocked job: ${jobSlug}`);
      }
    }
  }
  
  // Anti-doorway validation for skills
  for (const skill of skills) {
    if (!skill.outcome) errors.push(`Skill ${skill.slug} missing outcome`);
    if (!skill.sources) errors.push(`Skill ${skill.slug} missing sources`);
    if (!skill.artifact) errors.push(`Skill ${skill.slug} missing artifact`);
    if (!skill.reviewableArtifact) errors.push(`Skill ${skill.slug} missing reviewableArtifact`);
    if (!skill.approvalRule) errors.push(`Skill ${skill.slug} missing approvalRule`);
    if (!skill.staleDataRule) errors.push(`Skill ${skill.slug} missing staleDataRule`);
  }
  
  // Anti-doorway validation for jobs
  for (const job of jobs) {
    if (!job.outcome) errors.push(`Job ${job.slug} missing outcome`);
    if (!job.sources) errors.push(`Job ${job.slug} missing sources`);
    if (!job.botDescription) errors.push(`Job ${job.slug} missing botDescription`);
    if (!job.firstTask) errors.push(`Job ${job.slug} missing firstTask`);
    if (!job.skill) errors.push(`Job ${job.slug} missing skill`);
    if (!job.routine) errors.push(`Job ${job.slug} missing routine`);
    if (!job.neverList || job.neverList.length === 0) errors.push(`Job ${job.slug} missing neverList`);
    if (!job.reviewableArtifact) errors.push(`Job ${job.slug} missing reviewableArtifact`);
    if (!job.approvalRule) errors.push(`Job ${job.slug} missing approvalRule`);
    if (!job.staleDataRule) errors.push(`Job ${job.slug} missing staleDataRule`);
  }
  
  // Route count validation
  const routes = allRoutes();
  if (routes.length !== 39) {
    errors.push(`Expected 39 routes, got ${routes.length}`);
  }
  
  if (errors.length > 0) {
    throw new Error(`Catalog validation failed:\n${errors.join("\n")}`);
  }
}

// Run validation at module import
assertComplete();
