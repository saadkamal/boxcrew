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
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-lg text-muted mb-8">{page.description}</p>

        <dl className="space-y-6">
          {page.sections.map((section, index) => (
            <div key={index} className="p-4 bg-card border border-border rounded-lg">
              <dt className="font-semibold text-accent mb-2">{section.heading}</dt>
              <dd className="text-muted">{section.content}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Layout>
  );
}
