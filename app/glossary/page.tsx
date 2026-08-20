import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPageBySlug } from "@/content";
import { Layout } from "@/components";
import { glossaryItemListJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Glossary · Grok Bot",
  description: "Key terms and concepts for Grok Bot users.",
  path: "/glossary",
});

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

      <article className="interior-stack" style={{ maxWidth: "var(--prose-max)" }}>
        <header>
          <h1>{page.title}</h1>
          <p className="mt-4 text-text-2">{page.description}</p>
        </header>

        <dl>
          {page.sections.map((section, index) => (
            <div
              key={index}
              className="border-b border-border py-6"
            >
              <dt className="mb-2 font-medium">{section.heading}</dt>
              <dd className="text-text-2">{section.content}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Layout>
  );
}
