/**
 * Content type definitions for Boxcrew catalog.
 *
 * Uses branded types, discriminated unions with `kind` literal,
 * and exhaustive type-safe content handling. No optional-field bags.
 * No `as` except inside slug() after regex.
 */

const SLUG_REGEX = /^[a-z][a-z0-9-]*$/;

declare const SlugBrand: unique symbol;
export type Slug = string & { readonly [SlugBrand]: true };

export function slug(value: string): Slug {
  if (!SLUG_REGEX.test(value)) {
    throw new Error(`Invalid slug: "${value}" must match ${SLUG_REGEX}`);
  }
  return value as Slug;
}

export type Kind = "setup" | "skill" | "job" | "industry" | "page";

export type Plugin = "Gmail" | "Notion" | "Slack";

export interface Source {
  readonly plugins: readonly Plugin[];
  readonly boxLogins: readonly string[];
  readonly officialDocs: readonly string[];
}

export type ArtifactKind =
  | "bot-description"
  | "skill"
  | "routine-prompt"
  | "first-task-prompt";

export interface Artifact {
  readonly kind: ArtifactKind;
  readonly filename: string;
  readonly markdown: string;
}

export interface SetupStep {
  readonly title: string;
  readonly body: string;
}

export interface RelatedItem {
  readonly kind: Kind;
  readonly slug: Slug;
}

interface ContentBase {
  readonly slug: Slug;
  readonly title: string;
  readonly description: string;
}

export interface Setup extends ContentBase {
  readonly kind: "setup";
  readonly steps: readonly SetupStep[];
  readonly endState: string;
  readonly commonMiss: string;
  readonly officialDocs: readonly string[];
  readonly related: readonly RelatedItem[];
}

export interface Skill extends ContentBase {
  readonly kind: "skill";
  readonly outcome: string;
  readonly sources: Source;
  readonly artifact: Artifact;
  readonly reviewableArtifact: string;
  readonly approvalRule: string;
  readonly staleDataRule: string;
  readonly related: readonly RelatedItem[];
}

export interface Job extends ContentBase {
  readonly kind: "job";
  readonly outcome: string;
  readonly sources: Source;
  readonly botDescription: string;
  readonly firstTask: string;
  readonly skills: readonly Slug[];
  readonly routine: string;
  readonly neverList: readonly string[];
  readonly reviewableArtifact: string;
  readonly approvalRule: string;
  readonly staleDataRule: string;
  readonly related: readonly RelatedItem[];
}

export interface Industry extends ContentBase {
  readonly kind: "industry";
  readonly jobSlugs: readonly Slug[];
  readonly startGuide: Slug;
}

export interface PageSection {
  readonly heading: string;
  readonly content: string;
}

export interface StaticPage extends ContentBase {
  readonly kind: "page";
  readonly sections: readonly PageSection[];
}

export type Content = Setup | Skill | Job | Industry | StaticPage;

export function isSetup(content: Content): content is Setup {
  return content.kind === "setup";
}

export function isSkill(content: Content): content is Skill {
  return content.kind === "skill";
}

export function isJob(content: Content): content is Job {
  return content.kind === "job";
}

export function isIndustry(content: Content): content is Industry {
  return content.kind === "industry";
}

export function isPage(content: Content): content is StaticPage {
  return content.kind === "page";
}

export function exhaustiveKindSwitch(kind: never): never {
  throw new Error(`Unhandled kind: ${kind}`);
}
