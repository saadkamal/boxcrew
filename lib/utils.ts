/**
 * Utility functions for Boxcrew.
 */

/** Combine class names, filtering out falsy values */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Convert slug to title case (e.g., "bug-repro-pack" → "Bug Repro Pack") */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/** Normalize text for search (lowercase, trim) */
export function normalizeForSearch(text: string): string {
  return text.toLowerCase().trim();
}
