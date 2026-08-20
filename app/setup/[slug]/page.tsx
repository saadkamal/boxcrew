import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setupGuides, getSetupGuideBySlug } from "@/content";

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
    description: guide.description,
  };
}

export default async function SetupGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getSetupGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{guide.title}</h1>
      <p className="text-lg text-muted mb-8">{guide.description}</p>

      {guide.prerequisites.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Prerequisites</h2>
          <ul className="list-disc list-inside space-y-1 text-muted">
            {guide.prerequisites.map((prereq, i) => (
              <li key={i}>{prereq}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Steps</h2>
        <ol className="list-decimal list-inside space-y-2">
          {guide.steps.map((step, i) => (
            <li key={i} className="text-muted">
              {step}
            </li>
          ))}
        </ol>
      </section>

      {guide.troubleshooting.length > 0 && (
        <section className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-3">Troubleshooting</h2>
          <ul className="space-y-2 text-sm text-muted">
            {guide.troubleshooting.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
}
