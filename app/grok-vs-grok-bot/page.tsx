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
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-lg text-muted mb-8">{page.description}</p>

        <div className="space-y-8">
          {page.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
              <p className="text-muted">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  );
}
