import type { Metadata } from "next";
import { Layout } from "@/components";
import { pages } from "@/content/pages";
import { notFound } from "next/navigation";

const page = pages.find((p) => p.slug === "glossary");

export const metadata: Metadata = {
  title: page?.title ?? "Not Found",
  description: page?.description,
};

export default function GlossaryPage() {
  if (!page) notFound();

  const terms = page.body.split("\n\n").reduce<Array<{ term: string; definition: string }>>((acc, block) => {
    if (block.startsWith("**") && block.includes("**\n")) {
      const [termLine, ...defLines] = block.split("\n");
      const term = termLine.slice(2, termLine.indexOf("**", 2));
      const definition = defLines.join(" ").trim();
      acc.push({ term, definition });
    } else if (block.startsWith("**")) {
      const match = block.match(/^\*\*(.+?)\*\*\s*([\s\S]+)$/);
      if (match) {
        acc.push({ term: match[1], definition: match[2].trim() });
      }
    }
    return acc;
  }, []);

  return (
    <Layout>
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-lg text-muted mb-8">{page.description}</p>

        <dl className="space-y-6">
          {terms.map((item, index) => (
            <div key={index} className="p-4 bg-card border border-border rounded-lg">
              <dt className="font-semibold text-accent mb-2">{item.term}</dt>
              <dd className="text-muted">{item.definition}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Layout>
  );
}
