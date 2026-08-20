import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { posts } from "@/content/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: `Blog · ${SITE_NAME}`,
  description: "Grok Bot guides, tips, and best practices. Learn how to configure skills, jobs, and routines.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
};

export default function BlogIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${SITE_NAME} Blog`,
    description: "Grok Bot guides, tips, and best practices.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted max-w-2xl">
          Grok Bot guides, tips, and best practices. Grok Bot is not Grok chat
          and not Cursor Cloud Agents. It runs in a shared box with your Cursor
          account.
        </p>
      </section>

      <section className="mb-12 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Disambiguation</h2>
        <p className="text-sm text-muted">
          Grok Bot is Cursor's agent implementation with skills, plugins, and
          approval workflows. It is different from Grok chat (direct model access
          on x.ai) and Cursor Cloud Agents (remote execution). Grok Bot runs
          locally in your Cursor desktop with the shared box.
        </p>
      </section>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet. Check back soon.</p>
      ) : (
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors"
            >
              <Link href={`/blog/${post.slug}`} className="hover:no-underline group">
                <h2 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-muted mt-1">{post.description}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="px-2 py-0.5 bg-border rounded">{post.cluster}</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      <footer className="mt-12 pt-6 border-t border-border">
        <p className="text-sm text-muted">
          {SITE_NAME} is not affiliated with Cursor, xAI, or SpaceXAI.
        </p>
      </footer>
    </Layout>
  );
}
