import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/content";
import { Layout } from "@/components";
import { collisionTableJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Grok vs Grok Bot",
  description:
    "Understand the difference between Grok (the model) and Grok Bot (the Cursor agent).",
};

const COMPARISON_DATA = [
  {
    aspect: "Type",
    grok: "AI language model",
    grokBot: "Cursor agent",
  },
  {
    aspect: "Creator",
    grok: "xAI",
    grokBot: "Cursor",
  },
  {
    aspect: "Access",
    grok: "API / various interfaces",
    grokBot: "Cursor Desktop + iOS 18",
  },
  {
    aspect: "Configuration",
    grok: "Prompts only",
    grokBot: "Skills, jobs, routines, plugins",
  },
  {
    aspect: "Guardrails",
    grok: "Model-level safety",
    grokBot: "Approval workflows, never lists",
  },
] as const;

export default function GrokVsGrokBotPage() {
  const page = getPageBySlug("grok-vs-grok-bot");
  if (!page) notFound();

  const jsonLd = collisionTableJsonLd();

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">{page.title}</h1>
        <p className="mb-8 text-text-2">{page.description}</p>

        <section className="mb-8 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="py-3 pr-4 text-left font-medium text-text-3">
                  Aspect
                </th>
                <th className="px-4 py-3 text-left font-medium text-text-3">
                  Grok
                </th>
                <th className="py-3 pl-4 text-left font-medium text-text-3">
                  Grok Bot
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_DATA.map((row) => (
                <tr key={row.aspect} className="border-b border-border">
                  <td className="py-3 pr-4 text-text-2">{row.aspect}</td>
                  <td className="px-4 py-3 text-text-2">{row.grok}</td>
                  <td className="py-3 pl-4 text-text-2">{row.grokBot}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <div className="space-y-6">
          {page.sections.map((section, index) => (
            <section key={index}>
              <h2 className="mb-3 text-xl font-medium">{section.heading}</h2>
              <p className="text-text-2">{section.content}</p>
            </section>
          ))}
        </div>
      </article>
    </Layout>
  );
}
