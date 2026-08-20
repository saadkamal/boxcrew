import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { getBlogPostsByCategory, BLOG_CATEGORIES } from "@/content";

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
  return (
    <Layout>
      <article className="max-w-[680px]">
        <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase">
          Blog
        </span>
        <h1 className="mt-4 mb-6">Grok Bot articles</h1>
        <p className="text-[15px] leading-[24px] text-foreground-muted mb-12">
          Guides, comparisons, and setup articles.
        </p>
        
        {CATEGORY_ORDER.map((category) => {
          const posts = getBlogPostsByCategory(category);
          if (posts.length === 0) return null;
          return (
            <section key={category} className="mb-12">
              <h2 className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase mb-4">
                {BLOG_CATEGORIES[category]}
              </h2>
              <div className="border-t border-border">
                {posts.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/blog/${post.slug}`} 
                    className="flex items-center justify-between py-3 border-b border-border group"
                  >
                    <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">
                      {post.title}
                    </span>
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
