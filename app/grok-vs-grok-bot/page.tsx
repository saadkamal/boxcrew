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
      <article className="prose max-w-3xl">
        <span className="text-label">REFERENCE</span>
        <h1 className="text-headline mt-3 mb-3">{page.title}</h1>
        <p className="text-body text-foreground-muted">{page.description}</p>

        <div className="space-y-8 mt-8">
          {page.sections.map((section, index) => (
            <section key={index}>
              <h2>{section.heading}</h2>
              <p className="text-small text-foreground-muted">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  );
}
