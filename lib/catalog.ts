import { setupGuides } from "@/content/setup";
import { skills } from "@/content/skills";
import { jobs } from "@/content/jobs";
import { industries } from "@/content/industries";
import { pages } from "@/content/pages";
import type { Content, Kind, Slug } from "@/content/types";

const EXPECTED_ROUTE_COUNT = 39;
const EXPECTED_SKILL_COUNT = 16;
const EXPECTED_GLOSSARY_TERM_COUNT = 9;

const SETUP_SLUGS: readonly string[] = [
  "install-plan",
  "first-bot",
  "plugins",
  "the-box",
  "skill-then-routine",
  "approvals",
  "remote-mcp",
  "roster-group-ios",
];

const CHIEF_OF_STAFF_REQUIRED_SKILLS: readonly string[] = ["multi-bot-kickoff", "bot-persona-kit"];

export function all(): readonly Content[] {
  return [
    ...setupGuides,
    ...skills,
    ...jobs,
    ...industries,
    ...pages,
  ];
}

export function byKind<K extends Kind>(kind: K): readonly Content[] {
  return all().filter((item) => item.kind === kind);
}

export function get(kind: Kind, s: Slug | string): Content | undefined {
  return all().find((item) => item.kind === kind && item.slug === s);
}

export interface SearchParams {
  readonly q?: string;
  readonly kind?: Kind;
}

export function search(params: SearchParams): readonly Content[] {
  let results = all();

  if (params.kind) {
    results = results.filter((item) => item.kind === params.kind);
  }

  if (params.q) {
    const query = params.q.toLowerCase();
    results = results.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.slug.toLowerCase().includes(query)
    );
  }

  return results;
}

export interface Route {
  readonly path: string;
  readonly kind: Kind;
  readonly slug: string;
  readonly title: string;
}

export function allRoutes(): readonly Route[] {
  const routes: Route[] = [];

  for (const page of pages) {
    const path = page.slug === "home" ? "/" : `/${page.slug}`;
    routes.push({ path, kind: "page", slug: page.slug, title: page.title });
  }

  for (const setup of setupGuides) {
    routes.push({ path: `/setup/${setup.slug}`, kind: "setup", slug: setup.slug, title: setup.title });
  }

  for (const skill of skills) {
    routes.push({ path: `/skills/${skill.slug}`, kind: "skill", slug: skill.slug, title: skill.title });
  }

  for (const job of jobs) {
    routes.push({ path: `/jobs/${job.slug}`, kind: "job", slug: job.slug, title: job.title });
  }

  for (const industry of industries) {
    routes.push({ path: `/industries/${industry.slug}`, kind: "industry", slug: industry.slug, title: industry.title });
  }

  return routes;
}

export function jobsOf(industrySlug: string): readonly (typeof jobs)[number][] {
  const industry = industries.find((i) => i.slug === industrySlug);
  if (!industry) {
    throw new Error(`Unknown industry: ${industrySlug}`);
  }
  return jobs.filter((job) => (industry.jobSlugs as readonly string[]).includes(job.slug));
}

function assertSetupComplete(): void {
  const setupSlugs = new Set(setupGuides.map((s) => s.slug as string));
  for (const expectedSlug of SETUP_SLUGS) {
    if (!setupSlugs.has(expectedSlug)) {
      throw new Error(`Missing setup guide: ${expectedSlug}`);
    }
  }

  for (const setup of setupGuides) {
    if (!setup.endState || setup.endState.trim() === "") {
      throw new Error(`Setup "${setup.slug}" missing endState`);
    }
    if (!setup.commonMiss || setup.commonMiss.trim() === "") {
      throw new Error(`Setup "${setup.slug}" missing commonMiss`);
    }
    if (!Array.isArray(setup.steps) || setup.steps.length < 1) {
      throw new Error(`Setup "${setup.slug}" missing steps`);
    }
    for (const step of setup.steps) {
      if (!step.title || !step.body) {
        throw new Error(`Setup "${setup.slug}" has step with missing title or body`);
      }
    }
  }

  const theBox = setupGuides.find((s) => s.slug === "the-box");
  if (theBox) {
    const allText = [
      theBox.endState,
      theBox.commonMiss,
      ...theBox.steps.map((s) => s.title + " " + s.body),
    ].join(" ").toLowerCase();

    if (allText.includes("between users")) {
      throw new Error('the-box copy must not say "between users"');
    }
  }
}

function assertChiefOfStaffSkills(): void {
  const cos = jobs.find((j) => j.slug === "chief-of-staff");
  if (!cos) {
    throw new Error("Missing chief-of-staff job");
  }

  const cosSkillStrings = cos.skills as readonly string[];
  
  if (cosSkillStrings.includes("event-to-digest")) {
    throw new Error("chief-of-staff skills must NOT include event-to-digest");
  }

  for (const requiredSkill of CHIEF_OF_STAFF_REQUIRED_SKILLS) {
    if (!cosSkillStrings.includes(requiredSkill)) {
      throw new Error(`chief-of-staff missing required skill: ${requiredSkill}`);
    }
  }
}

function assertIndustryStartGuides(): void {
  for (const industry of industries) {
    if (!industry.startGuide) {
      throw new Error(`Industry "${industry.slug}" missing startGuide`);
    }
    const guideExists = setupGuides.some((s) => s.slug === industry.startGuide);
    if (!guideExists) {
      throw new Error(`Industry "${industry.slug}" references non-existent startGuide: ${industry.startGuide}`);
    }
  }
}

function assertGlossary(): void {
  const glossary = pages.find((p) => p.slug === "glossary");
  if (!glossary) {
    throw new Error("Missing glossary page");
  }
  if (glossary.sections.length !== EXPECTED_GLOSSARY_TERM_COUNT) {
    throw new Error(`Glossary must have exactly ${EXPECTED_GLOSSARY_TERM_COUNT} terms, found ${glossary.sections.length}`);
  }

  const glossaryText = glossary.sections.map((s) => s.content).join(" ").toLowerCase();
  if (glossaryText.includes("between users")) {
    throw new Error('Glossary must not say "between users"');
  }
}

function assertAntiDoorwayFields(): void {
  for (const skill of skills) {
    const s = skill.slug;
    if (!skill.outcome) throw new Error(`Skill "${s}" missing outcome`);
    if (!skill.sources) throw new Error(`Skill "${s}" missing sources`);
    if (!skill.artifact) throw new Error(`Skill "${s}" missing artifact`);
    if (!skill.reviewableArtifact) throw new Error(`Skill "${s}" missing reviewableArtifact`);
    if (!skill.approvalRule) throw new Error(`Skill "${s}" missing approvalRule`);
    if (!skill.staleDataRule) throw new Error(`Skill "${s}" missing staleDataRule`);
  }

  for (const job of jobs) {
    const s = job.slug;
    if (!job.outcome) throw new Error(`Job "${s}" missing outcome`);
    if (!job.sources) throw new Error(`Job "${s}" missing sources`);
    if (!job.botDescription) throw new Error(`Job "${s}" missing botDescription`);
    if (!job.firstTask) throw new Error(`Job "${s}" missing firstTask`);
    if (!Array.isArray(job.skills) || job.skills.length < 1) throw new Error(`Job "${s}" missing skills`);
    if (!job.routine) throw new Error(`Job "${s}" missing routine`);
    if (!Array.isArray(job.neverList) || job.neverList.length < 1) throw new Error(`Job "${s}" missing neverList`);
    if (!job.reviewableArtifact) throw new Error(`Job "${s}" missing reviewableArtifact`);
    if (!job.approvalRule) throw new Error(`Job "${s}" missing approvalRule`);
    if (!job.staleDataRule) throw new Error(`Job "${s}" missing staleDataRule`);
  }
}

function assertRouteCount(): void {
  const routes = allRoutes();
  if (routes.length !== EXPECTED_ROUTE_COUNT) {
    throw new Error(`Expected ${EXPECTED_ROUTE_COUNT} routes, found ${routes.length}`);
  }
}

function assertSkillCount(): void {
  if (skills.length !== EXPECTED_SKILL_COUNT) {
    throw new Error(`Expected ${EXPECTED_SKILL_COUNT} skills, found ${skills.length}`);
  }
}

function assertNoExtraSlugs(): void {
  const allSlugs = all().map((item) => item.slug as string);
  const slugSet = new Set(allSlugs);
  if (slugSet.size !== allSlugs.length) {
    const seen = new Set<string>();
    for (const s of allSlugs) {
      if (seen.has(s)) {
        throw new Error(`Duplicate slug: ${s}`);
      }
      seen.add(s);
    }
  }
}

export function assertComplete(): void {
  assertSetupComplete();
  assertChiefOfStaffSkills();
  assertIndustryStartGuides();
  assertGlossary();
  assertAntiDoorwayFields();
  assertRouteCount();
  assertSkillCount();
  assertNoExtraSlugs();
}

assertComplete();
