/**
 * Route utilities.
 */

import type { Kind, Slug } from "@/content/types";

/** Get the URL path for a content item by kind and slug. */
export function getContentPath(kind: Kind, itemSlug: Slug): string {
  switch (kind) {
    case "setup":
      return `/setup/${itemSlug}`;
    case "skill":
      return `/skills/${itemSlug}`;
    case "job":
      return `/jobs/${itemSlug}`;
    case "industry":
      return `/industries/${itemSlug}`;
    case "page":
      return `/${itemSlug}`;
  }
}
