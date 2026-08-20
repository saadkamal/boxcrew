import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <Layout>
      <article className="max-w-[680px]">
        <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase">
          Blog
        </span>
        <h1 className="mt-4 mb-6">{post.title}</h1>
        
        {post.body && (
          <div className="text-[15px] leading-[24px] text-foreground-muted mb-12">
            <Markdown>{post.body}</Markdown>
          </div>
        )}

        <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
          {prevPost ? (
            <Link href={`/blog/${prevPost.slug}`} className="group">
              <span className="text-[11px] text-foreground-subtle block mb-1">Previous</span>
              <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">
                {prevPost.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {nextPost && (
            <Link href={`/blog/${nextPost.slug}`} className="group text-right">
              <span className="text-[11px] text-foreground-subtle block mb-1">Next</span>
              <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">
                {nextPost.title}
              </span>
            </Link>
          )}
        </nav>
      </article>
    </Layout>
  );
}
