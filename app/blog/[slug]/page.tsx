import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Layout } from "@/components";
import { posts, getPostBySlug } from "@/content/posts";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { getContentPath } from "@/lib/routes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} · ${SITE_NAME}`,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `${SITE_URL}/blog/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl">
        <header className="mb-8">
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground mb-4 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-lg text-muted mb-4">{post.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="px-2 py-0.5 bg-card border border-border rounded">
              {post.cluster}
            </span>
          </div>
        </header>

        <section className="mb-8 p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-2 text-sm">Disambiguation</h2>
          <p className="text-sm text-muted">
            Grok Bot is Cursor's agent with skills and approval workflows. It is
            not Grok chat (x.ai) and not Cursor Cloud Agents. Runs in a shared
            box with your Cursor account (Ultra/Teams Premium/SuperGrok Heavy).
          </p>
        </section>

        <div className="prose prose-invert max-w-none mb-8">
          {post.body.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return (
                <h2 key={i} className="text-xl font-semibold mt-8 mb-4">
                  {block.slice(3)}
                </h2>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="list-disc list-inside space-y-1 text-muted mb-4">
                  {items.map((item, j) => (
                    <li key={j}>{item.slice(2)}</li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-muted mb-4">
                {block}
              </p>
            );
          })}
        </div>

        {post.internalLinks.length > 0 && (
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Related Guides</h2>
            <div className="flex flex-wrap gap-2">
              {post.internalLinks.map((link, i) => (
                <Link
                  key={i}
                  href={getContentPath(link.kind, link.slug)}
                  className="px-3 py-1.5 bg-card border border-border rounded text-sm hover:border-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        )}

        {post.citations.length > 0 && (
          <section className="mb-8 p-4 bg-card border border-border rounded-lg">
            <h2 className="font-semibold mb-3">Citations</h2>
            <ul className="space-y-2">
              {post.citations.map((citation, i) => (
                <li key={i}>
                  <a
                    href={citation.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline"
                  >
                    {citation.title}
                  </a>
                  <span className="text-xs text-muted ml-2">({citation.url})</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="pt-6 border-t border-border">
          <p className="text-sm text-muted">
            {SITE_NAME} is not affiliated with Cursor, xAI, or SpaceXAI.
          </p>
        </footer>
      </article>
    </Layout>
  );
}
