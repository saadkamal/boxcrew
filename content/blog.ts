/**
 * Blog post content type and catalog.
 * Template ready - do not invent essays.
 */

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly aeoQuestion: string;
  readonly category: "compare" | "setup" | "skills" | "the-box";
  readonly stickyLine?: string;
  readonly body?: string;
  readonly catalogLinks?: readonly string[];
  readonly faq?: readonly { question: string; answer: string }[];
}

export const BLOG_CATEGORIES = {
  compare: "Compare",
  setup: "Setup & plans",
  skills: "Skills",
  "the-box": "The box",
} as const;

export const blogPosts: readonly BlogPost[] = [
  // Template posts - no invented content
] as const;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(
  category: BlogPost["category"]
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
