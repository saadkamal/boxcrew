/**
 * Boxcrew catalog type definitions.
 * 
 * Schema per Alec's BUILD-SPEC. Quinn rejects any deviation.
 * - Branded Slug via slug()
 * - Discriminated unions with `kind` literal
 * - Non-empty tuples for required arrays
 * - No optional-field bags
 */

/** Content kinds for discriminated union */
export type Kind = "setup" | "skill" | "job" | "industry" | "page";

/** Branded slug type. Validate once at creation via slug(). */
export type Slug = string & { readonly __brand: "Slug" };

/** Create a validated slug. Only place `as` is allowed. */
export function slug(value: string): Slug {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(value)) {
    throw new Error(`invalid slug: ${value}`);
  }
  return value as Slug;
}

/** Verified plugins. Zoom is broken. */
export type VerifiedPlugin = "Gmail" | "Notion" | "Slack";

/** Data sources for skills and jobs. */
export type Source = {
  plugins: VerifiedPlugin[];
  boxLogins: string[];
  officialDocs: string[];
};

/** Artifact kinds for copy-paste content. */
export type ArtifactKind = "bot-description" | "skill" | "routine-prompt" | "first-task-prompt";

/** Copy-paste artifact with markdown content. */
export type Artifact = {
  kind: ArtifactKind;
  filename: string;
  markdown: string;
};

/** Base fields shared by all catalog items. */
export type CatalogBase = {
  slug: Slug;
  title: string;
  description: string;
  body: string;
};

/** Reference to a related catalog item. */
export type RelatedRef = {
  kind: Kind;
  slug: Slug;
};

/** Non-empty array of related items. */
export type Related = [RelatedRef, ...RelatedRef[]];

/**
 * Setup guide.
 * Teaches users how to configure Grok Bot features.
 */
export type Setup = CatalogBase & {
  kind: "setup";
  steps: [{ title: string; body: string }, ...Array<{ title: string; body: string }>];
  endState: string;
  commonMiss: string;
  officialDocs: string[];
  related: Related;
};

/**
 * Skill.
 * A specific capability Grok Bot can perform.
 * Anti-doorway: outcome, sources, artifact, reviewableArtifact, approvalRule, staleDataRule.
 */
export type Skill = CatalogBase & {
  kind: "skill";
  outcome: string;
  sources: Source;
  artifact: Artifact;
  reviewableArtifact: string;
  approvalRule: string;
  staleDataRule: string;
  related: Related;
};

/**
 * Job.
 * A role archetype using multiple skills.
 * Anti-doorway: outcome, sources, botDescription, firstTask, skill, routine, neverList,
 * reviewableArtifact, approvalRule, staleDataRule.
 */
export type Job = CatalogBase & {
  kind: "job";
  outcome: string;
  sources: Source;
  botDescription: Artifact;
  firstTask: Artifact;
  skill: Artifact;
  routine: Artifact;
  neverList: [string, ...string[]];
  reviewableArtifact: string;
  approvalRule: string;
  staleDataRule: string;
  related: Related;
};

/**
 * Industry vertical.
 * Links to relevant jobs for a specific industry.
 */
export type Industry = CatalogBase & {
  kind: "industry";
  jobSlugs: [Slug, ...Slug[]];
  startGuide: Slug;
};

/** Standalone page (home, glossary, etc.) */
export type StaticPage = CatalogBase & {
  kind: "page";
};

/** Discriminated union of all catalog item types. */
export type CatalogItem = Setup | Skill | Job | Industry | StaticPage;
