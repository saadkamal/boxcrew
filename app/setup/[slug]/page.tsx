import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setupGuides, getSetupGuideBySlug } from "@/content";
import { Layout } from "@/components";
import { howToJsonLd, buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return setupGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSetupGuideBySlug(slug);
  if (!guide) return { title: "Not Found" };
  return buildMetadata({
    title: `${guide.title} · Grok Bot`,
    description: `Grok Bot setup: ${guide.description}`,
    path: `/setup/${slug}`,
  });
}

export default async function SetupGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getSetupGuideBySlug(slug);
  if (!guide) notFound();

  const jsonLd = howToJsonLd(guide);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="interior-stack" style={{ maxWidth: "var(--prose-max)" }}>
        <header>
          <h1>{guide.title}</h1>
          <p className="mt-4 text-text-2">{guide.description}</p>
        </header>

        <section>
          <h2>Steps</h2>
          <ol className="list-inside list-decimal space-y-3">
            {guide.steps.map((step, i) => (
              <li key={i} className="text-text-2">
                {step}
              </li>
            ))}
          </ol>
        </section>

        {guide.prerequisites.length > 0 && (
          <section>
            <h2>End state</h2>
            <p className="text-text-2">
              After completing these steps, you will have:{" "}
              {guide.prerequisites.join(", ")}.
            </p>
          </section>
        )}

        {guide.troubleshooting.length > 0 && (
          <section
            className="border border-border p-4"
            style={{ backgroundColor: "var(--bg-raised)" }}
          >
            <h2>Common miss</h2>
            <ul className="space-y-2 text-sm text-text-2">
              {guide.troubleshooting.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </Layout>
  );
}
