import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { blogPosts, getBlogPostsByCategory, BLOG_CATEGORIES } from "@/content";
import { itemListJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blog · Grok Bot",
  description: "Grok Bot guides, comparisons, and setup articles.",
  path: "/blog",
});

const CATEGORY_ORDER: Array<keyof typeof BLOG_CATEGORIES> = [
  "compare",
  "setup",
  "skills",
  "the-box",
];

export default function BlogIndexPage() {
  const jsonLd = itemListJsonLd(
    "Grok Bot Blog",
    blogPosts.map((post) => ({
      title: post.title,
      href: `/blog/${post.slug}`,
    }))
  );

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="interior-stack" style={{ maxWidth: "var(--prose-max)" }}>
        <header>
          <h1>Blog</h1>
          <p className="mt-4 text-text-2">
            Grok Bot guides, comparisons, and setup articles.
          </p>
        </header>

        {CATEGORY_ORDER.map((category) => {
          const posts = getBlogPostsByCategory(category);
          if (posts.length === 0) return null;

          return (
            <section key={category}>
              <h2 className="text-text-3">{BLOG_CATEGORIES[category]}</h2>
              <div>
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="block border-b border-border py-4 hover:no-underline"
                  >
                    <span className="text-text">{post.title}</span>
                    <p className="mt-1 text-sm text-text-3">{post.description}</p>
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
