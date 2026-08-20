import type { Metadata } from "next";
import { Layout } from "@/components";
import { getPageBySlug } from "@/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Key terms and concepts for Grok Bot users.",
};

export default function GlossaryPage() {
  const page = getPageBySlug("glossary");
  if (!page) notFound();

  return (
    <Layout>
      <article className="prose max-w-[680px]">
        <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase">
          Reference
        </span>
        <h1 className="mt-4 mb-6">{page.title}</h1>
        <p className="text-[15px] leading-[24px] text-foreground-muted">{page.description}</p>

        <dl className="border-t border-border mt-8">
          {page.sections.map((section, index) => (
            <div key={index} className="py-4 border-b border-border">
              <dt className="text-[15px] font-medium text-foreground mb-2">{section.heading}</dt>
              <dd className="text-[14px] leading-[22px] text-foreground-muted m-0">{section.content}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Layout>
  );
}
