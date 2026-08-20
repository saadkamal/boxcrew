import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Layout } from "@/components";
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
        
        {post.stickyLine && (
          <p className="text-[14px] leading-[22px] text-foreground-subtle mb-8 pb-8 border-b border-border">
            {post.stickyLine}
          </p>
        )}
        
        {post.body && (
          <div className="text-[15px] leading-[24px] text-foreground-muted whitespace-pre-wrap mb-12">
            {post.body}
          </div>
        )}
        
        {post.faq && post.faq.length > 0 && (
          <section className="mb-12">
            <h2 className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase mb-4">
              FAQ
            </h2>
            <dl className="border-t border-border">
              {post.faq.map((item) => (
                <div key={item.question} className="py-4 border-b border-border">
                  <dt className="text-[15px] font-medium text-foreground mb-2">{item.question}</dt>
                  <dd className="text-[14px] leading-[22px] text-foreground-muted">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>
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
