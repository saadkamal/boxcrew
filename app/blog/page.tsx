import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { blogPosts, getBlogPostsByCategory, BLOG_CATEGORIES } from "@/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "Grok Bot guides, comparisons, and setup articles.",
};

const CATEGORY_ORDER: Array<keyof typeof BLOG_CATEGORIES> = [
  "compare",
  "setup",
  "skills",
  "the-box",
];

export default function BlogIndexPage() {
  return (
    <Layout>
      <article>
        <h1 className="mb-4">Blog</h1>
        <p className="mb-8 text-muted">
          Grok Bot guides, comparisons, and setup articles.
        </p>
        {CATEGORY_ORDER.map((category) => {
          const posts = getBlogPostsByCategory(category);
          if (posts.length === 0) return null;
          return (
            <section key={category} className="mb-10">
              <h2 className="mb-4 text-sm uppercase tracking-wide text-muted">
                {BLOG_CATEGORIES[category]}
              </h2>
              <div className="space-y-3">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                    <span>{post.title}</span>
                    <p className="mt-1 text-sm text-muted">{post.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </article>
    </Layout>
  );
}
