import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Layout, Markdown } from "@/components";
import { blogPosts, getBlogPostBySlug } from "@/content";

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
      <article>
        <h1 className="mb-4">{post.title}</h1>
        {post.body ? (
          <div className="mb-8 text-sm">
            <Markdown>{post.body}</Markdown>
          </div>
        ) : null}
      </article>
    </Layout>
  );
}
