import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/content";
import { Layout } from "@/components";
import { glossaryItemListJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Key terms and concepts for Grok Bot users.",
};

export default function GlossaryPage() {
  const page = getPageBySlug("glossary");
  if (!page) notFound();

  const jsonLd = glossaryItemListJsonLd(page.sections);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">{page.title}</h1>
        <p className="mb-8 text-text-2">{page.description}</p>

        <dl className="space-y-4">
          {page.sections.map((section, index) => (
            <div
              key={index}
              className="rounded border border-border p-4"
              style={{ backgroundColor: "var(--bg-raised)" }}
            >
              <dt className="mb-2 font-medium" style={{ color: "var(--accent)" }}>
                {section.heading}
              </dt>
              <dd className="text-text-2">{section.content}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Layout>
  );
}
