import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { blogPosts, getBlogPostsByCategory, BLOG_CATEGORIES } from "@/content";
import { itemListJsonLd } from "@/lib/seo";

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
  const jsonLd = itemListJsonLd(
    "Boxcrew Blog",
    blogPosts.map((post) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
    }))
  );

  const hasAnyPosts = blogPosts.length > 0;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">Blog</h1>
        <p className="mb-8 text-text-2">
          Grok Bot guides, comparisons, and setup articles.
        </p>

        {!hasAnyPosts && (
          <div className="mb-8">
            <p className="mb-4 text-text-3">No posts yet.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/setup/install-plan"
                className="text-text-2 underline decoration-border hover:text-accent"
              >
                Start with Install Plan
              </Link>
              <Link
                href="/grok-vs-grok-bot"
                className="text-text-2 underline decoration-border hover:text-accent"
              >
                Grok vs Grok Bot
              </Link>
              <Link
                href="/glossary"
                className="text-text-2 underline decoration-border hover:text-accent"
              >
                Glossary
              </Link>
            </div>
          </div>
        )}

        {hasAnyPosts &&
          CATEGORY_ORDER.map((category) => {
            const posts = getBlogPostsByCategory(category);
            if (posts.length === 0) return null;

            return (
              <section key={category} className="mb-8">
                <h2 className="mb-4 text-lg font-medium text-text-3">
                  {BLOG_CATEGORIES[category]}
                </h2>
                <div className="space-y-2">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block rounded border border-border p-4 transition-colors hover:border-accent hover:no-underline"
                    >
                      <span className="text-text hover:text-accent">
                        {post.title}
                      </span>
                      <p className="mt-1 text-sm text-text-3">
                        {post.aeoQuestion}
                      </p>
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
