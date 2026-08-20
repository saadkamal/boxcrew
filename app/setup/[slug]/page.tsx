import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setupGuides, getSetupGuideBySlug } from "@/content";
import { Layout } from "@/components";
import { howToJsonLd } from "@/lib/seo";

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
  return {
    title: guide.title,
    description: `Grok Bot setup guide: ${guide.description}`,
  };
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

      <article style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">{guide.title}</h1>
        <p className="mb-8 text-text-2">{guide.description}</p>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-medium">Steps</h2>
          <ol className="list-inside list-decimal space-y-3">
            {guide.steps.map((step, i) => (
              <li key={i} className="text-text-2">
                {step}
              </li>
            ))}
          </ol>
        </section>

        {guide.prerequisites.length > 0 && (
          <section className="mb-8">
            <h2 className="mb-4 text-xl font-medium">End State</h2>
            <p className="text-text-2">
              After completing these steps, you will have:{" "}
              {guide.prerequisites.join(", ")}.
            </p>
          </section>
        )}

        {guide.troubleshooting.length > 0 && (
          <section
            className="rounded border border-border p-4"
            style={{ backgroundColor: "var(--bg-raised)" }}
          >
            <h2 className="mb-3 font-medium">Common Miss</h2>
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
