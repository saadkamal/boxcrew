import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { setupGuides } from "@/content/setup";
import { getContentPath } from "@/lib/routes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getSetupGuideBySlug(s: string) {
  return setupGuides.find((guide) => guide.slug === s);
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
      <p className="text-lg text-muted mb-6">{guide.description}</p>
      <p className="text-muted mb-8">{guide.body}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Steps</h2>
        <ol className="space-y-4">
          {guide.steps.map((step, i) => (
            <li key={i} className="p-4 bg-card border border-border rounded-lg">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-accent text-background rounded-full flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-medium mb-1">{step.title}</h3>
                  <p className="text-sm text-muted">{step.body}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8 p-4 bg-card border border-accent rounded-lg">
        <h2 className="font-semibold mb-2 text-accent">End State</h2>
        <p className="text-muted">{guide.endState}</p>
      </section>

      <section className="mb-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Common Miss</h2>
        <p className="text-sm text-muted">{guide.commonMiss}</p>
      </section>

      {guide.officialDocs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Official Docs</h2>
          <ul className="space-y-1">
            {guide.officialDocs.map((url, i) => (
              <li key={i}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2 className="text-xl font-semibold mb-3">Related</h2>
        <div className="flex flex-wrap gap-2">
          {guide.related.map((ref, i) => (
            <Link
              key={i}
              href={getContentPath(ref.kind, ref.slug)}
              className="px-3 py-1.5 bg-card border border-border rounded text-sm hover:border-accent transition-colors"
            >
              {ref.kind}: {ref.slug}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
