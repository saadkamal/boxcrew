import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout, BlogJsonLd } from "@/components";
import { blogPosts, getBlogPostBySlug } from "@/content";
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
  return { title: post.title, description: post.description };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <Layout>
      <BlogJsonLd
        headline={post.title}
        description={post.description}
        url={`${SITE_URL}/blog/${slug}`}
        faq={post.faq}
      />
      <article>
        <h1 className="mb-4">{post.title}</h1>
        {post.stickyLine && (
          <p className="mb-6 text-muted">{post.stickyLine}</p>
        )}
        {post.body ? (
          <div className="mb-8 whitespace-pre-wrap text-sm leading-7">
            {post.body}
          </div>
        ) : null}
        {post.faq && post.faq.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4">FAQ</h2>
            <dl className="space-y-4">
              {post.faq.map((item) => (
                <div key={item.question}>
                  <dt className="font-medium">{item.question}</dt>
                  <dd className="text-muted">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </article>
    </Layout>
  );
}
