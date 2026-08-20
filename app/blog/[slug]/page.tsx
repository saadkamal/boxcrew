import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout } from "@/components";
import { blogPosts, getBlogPostBySlug } from "@/content";
import { blogPostJsonLd, buildMetadata } from "@/lib/seo";
import { Markdown } from "@/lib/markdown";

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
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
  });
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

      <article style={{ maxWidth: "var(--prose-max)" }}>
        {post.body ? (
          <Markdown source={post.body} />
        ) : (
          <>
            <h1>{post.title}</h1>
            <p className="text-text-2">{post.description}</p>
          </>
        )}
      </article>
    </Layout>
  );
}
