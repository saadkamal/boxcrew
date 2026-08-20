import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Layout } from "@/components";
import { blogPosts, getBlogPostBySlug } from "@/content";
import { blogPostJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const hasFaq = Boolean(post.faq && post.faq.length > 0);
  const jsonLdArray = blogPostJsonLd(
    post.title,
    post.description,
    slug,
    hasFaq,
    post.faq as { question: string; answer: string }[] | undefined
  );

  return (
    <Layout>
      {jsonLdArray.map((jsonLd, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ))}

      <article className="prose" style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">{post.title}</h1>
        <p className="mb-8 text-text-2">{post.description}</p>

        {post.stickyLine && (
          <p
            className="mb-8 rounded border-l-2 py-2 pl-4 text-text-2"
            style={{ borderColor: "var(--accent)" }}
          >
            {post.stickyLine}
          </p>
        )}

        {post.body ? (
          <div className="mb-8 text-text-2">
            {post.body.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        ) : (
          <p className="mb-8 text-text-3">Post content coming soon.</p>
        )}

        {post.catalogLinks && post.catalogLinks.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-3 text-lg font-medium">Related</h2>
            <ul className="space-y-2">
              {post.catalogLinks.map((link) => (
                <li key={link}>
                  <Link
                    href={link}
                    className="text-text-2 underline decoration-border hover:text-accent"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {post.faq && post.faq.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-lg font-medium">FAQ</h2>
            <dl className="space-y-4">
              {post.faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded border border-border p-4"
                  style={{ backgroundColor: "var(--bg-raised)" }}
                >
                  <dt className="mb-2 font-medium">{item.question}</dt>
                  <dd className="text-text-2">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </article>
    </Layout>
  );
}
