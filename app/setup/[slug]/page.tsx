import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { setupGuides, getSetupBySlug } from "@/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return setupGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getSetupBySlug(slug);
  if (!guide) return { title: "Not Found" };
  return {
    title: guide.title,
    description: guide.description,
  };
}

export default async function SetupGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getSetupBySlug(slug);
  if (!guide) notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{guide.title}</h1>
      <p className="text-lg text-muted mb-8">{guide.description}</p>

      <section className="mb-8 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
        <h2 className="font-semibold text-green-800 dark:text-green-200 mb-2">End State</h2>
        <p className="text-green-700 dark:text-green-300">{guide.endState}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Steps</h2>
        <ol className="space-y-4">
          {guide.steps.map((step, i) => (
            <li key={i} className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-medium">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="text-muted mt-1">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-8 p-4 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg">
        <h2 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Common Miss</h2>
        <p className="text-amber-700 dark:text-amber-300">{guide.commonMiss}</p>
      </section>

      {guide.officialDocs.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3">Official Docs</h2>
          <ul className="space-y-2">
            {guide.officialDocs.map((doc, i) => (
              <li key={i}>
                <a
                  href={doc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {doc}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {guide.related.length > 0 && (
        <section className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-3">Related</h2>
          <div className="flex flex-wrap gap-2">
            {guide.related.map((item, i) => (
              <Link
                key={i}
                href={item.kind === "page" ? `/${item.slug}` : `/${item.kind === "setup" ? "setup" : item.kind === "skill" ? "skills" : item.kind === "job" ? "jobs" : "industries"}/${item.slug}`}
                className="px-3 py-1.5 bg-border rounded hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
              >
                {item.kind}: {item.slug}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
