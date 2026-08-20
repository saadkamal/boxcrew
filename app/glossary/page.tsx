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
      <article className="prose max-w-3xl">
        <span className="text-label">REFERENCE</span>
        <h1 className="text-headline mt-3 mb-3">{page.title}</h1>
        <p className="text-body text-foreground-muted">{page.description}</p>

        <dl className="space-y-4 mt-8">
          {page.sections.map((section, index) => (
            <div key={index} className="p-5 border border-border rounded-lg">
              <dt className="text-small font-medium text-foreground mb-2">{section.heading}</dt>
              <dd className="text-small text-foreground-muted m-0">{section.content}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Layout>
  );
}
