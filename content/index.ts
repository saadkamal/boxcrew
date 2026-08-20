/**
 * Content catalog index.
 * Exports all content types and collections for use across the app.
 */

export * from "./types";
export { setupGuides, getSetupGuideBySlug } from "./setup";
export { skills, getSkillBySlug } from "./skills";
export { jobs, getJobBySlug } from "./jobs";
export { industries, getIndustryBySlug } from "./industries";
export { pages, getPageBySlug } from "./pages";
