import type { Metadata } from "next";
import { Layout } from "@/components";
import { getPageBySlug } from "@/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Grok vs Grok Bot",
  description: "Understand the difference between Grok (the model) and Grok Bot (the Cursor agent).",
};

export default function GrokVsGrokBotPage() {
  const page = getPageBySlug("grok-vs-grok-bot");
  if (!page) notFound();

  return (
    <Layout>
      <article className="prose max-w-[680px]">
        <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase">
          Reference
        </span>
        <h1 className="mt-4 mb-6">{page.title}</h1>
        <p className="text-[15px] leading-[24px] text-foreground-muted">{page.description}</p>

        <div className="space-y-10 mt-8">
          {page.sections.map((section, index) => (
            <section key={index}>
              <h2>{section.heading}</h2>
              <p className="text-[15px] leading-[24px] text-foreground-muted">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  );
}
