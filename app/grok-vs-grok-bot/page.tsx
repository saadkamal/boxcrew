import type { Metadata } from "next";
import { Layout } from "@/components";
import { pages } from "@/content/pages";
import { notFound } from "next/navigation";

const page = pages.find((p) => p.slug === "grok-vs-grok-bot");

export const metadata: Metadata = {
  title: page?.title ?? "Not Found",
  description: page?.description,
};

export default function GrokVsGrokBotPage() {
  if (!page) notFound();

  return (
    <Layout>
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-lg text-muted mb-8">{page.description}</p>
        <div className="prose prose-invert max-w-none">
          {page.body.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
              return (
                <h2 key={i} className="text-xl font-semibold mt-8 mb-4">
                  {paragraph.slice(2, -2)}
                </h2>
              );
            }
            return (
              <p key={i} className="text-muted mb-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>
    </Layout>
  );
}
