/**
 * Content type definitions for Boxcrew catalog.
 * 
 * Uses discriminated unions with `kind` literal for type-safe
 * content handling. Each content type has specific required fields
 * to enforce anti-doorway content requirements.
 */

/** Base fields shared by all content items */
interface ContentBase {
  /** URL slug, used as route segment */
  readonly slug: string;
  /** Display title */
  readonly title: string;
  /** Short description for cards and meta tags */
  readonly description: string;
}

/**
 * Setup guide content.
 * Teaches users how to configure Grok Bot features.
 */
export interface SetupGuide extends ContentBase {
  readonly kind: "setup";
  /** Step-by-step instructions */
  readonly steps: readonly string[];
  /** Prerequisites or requirements */
  readonly prerequisites: readonly string[];
  /** Common issues and solutions */
  readonly troubleshooting: readonly string[];
}

/**
 * Skill content - a specific capability Grok Bot can perform.
 * 
 * Anti-doorway requirements:
 * - outcome: what the skill produces
 * - sources: where data comes from
 * - copyPaste: ready-to-use prompt or config
 * - reviewableArtifact: what human reviews
 * - approvalAndStaleData: guardrails
 */
export interface Skill extends ContentBase {
  readonly kind: "skill";
  /** What the skill produces when complete */
  readonly outcome: string;
  /** Data sources the skill reads from */
  readonly sources: readonly string[];
  /** Ready-to-use prompt or configuration */
  readonly copyPaste: string;
  /** What artifact human reviews before action */
  readonly reviewableArtifact: string;
  /** Approval requirements and stale data handling */
  readonly approvalAndStaleData: string;
}

/**
 * Job content - a role archetype using multiple skills.
 * 
 * Includes all Skill anti-doorway fields plus:
 * - botDescription: personality/role for the bot
 * - firstTask: suggested starting task
 * - skill: primary skill reference
 * - routine: recurring workflow
 * - neverList: explicit prohibitions
 */
export interface Job extends ContentBase {
  readonly kind: "job";
  readonly outcome: string;
  readonly sources: readonly string[];
  readonly copyPaste: string;
  readonly reviewableArtifact: string;
  readonly approvalAndStaleData: string;
  /** Bot personality and role description */
  readonly botDescription: string;
  /** Suggested first task to try */
  readonly firstTask: string;
  /** Primary skill this job uses */
  readonly primarySkill: string;
  /** Recurring workflow pattern */
  readonly routine: string;
  /** Explicit list of things bot must never do */
  readonly neverList: readonly string[];
}

/**
 * Industry vertical page.
 * Links to relevant jobs for a specific industry.
 */
export interface Industry extends ContentBase {
  readonly kind: "industry";
  /** Job slugs available for this industry */
  readonly jobSlugs: readonly string[];
}

/**
 * Standalone page (home, glossary, etc.)
 */
export interface Page extends ContentBase {
  readonly kind: "page";
  /** Main content sections */
  readonly sections: readonly PageSection[];
}

export interface PageSection {
  readonly heading: string;
  readonly content: string;
}

/** Discriminated union of all content types */
export type Content = SetupGuide | Skill | Job | Industry | Page;

/** Type guard for SetupGuide */
export function isSetupGuide(content: Content): content is SetupGuide {
  return content.kind === "setup";
}

/** Type guard for Skill */
export function isSkill(content: Content): content is Skill {
  return content.kind === "skill";
}

/** Type guard for Job */
export function isJob(content: Content): content is Job {
  return content.kind === "job";
}

/** Type guard for Industry */
export function isIndustry(content: Content): content is Industry {
  return content.kind === "industry";
}

/** Type guard for Page */
export function isPage(content: Content): content is Page {
  return content.kind === "page";
}
