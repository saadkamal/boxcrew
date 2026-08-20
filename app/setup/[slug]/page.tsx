import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
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

  const currentIndex = setupGuides.findIndex((g) => g.slug === slug);
  const prevGuide = currentIndex > 0 ? setupGuides[currentIndex - 1] : null;
  const nextGuide = currentIndex < setupGuides.length - 1 ? setupGuides[currentIndex + 1] : null;

  return (
    <article className="prose">
      <span className="text-label">GUIDE</span>
      <h1 className="text-headline mt-3 mb-3">{guide.title}</h1>
      <p className="text-body text-foreground-muted">{guide.description}</p>

      {guide.prerequisites.length > 0 && (
        <section>
          <h2>Prerequisites</h2>
          <ul className="text-small text-foreground-muted">
            {guide.prerequisites.map((prereq, i) => (
              <li key={i}>{prereq}</li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h2>Steps</h2>
        <ol className="text-small text-foreground-muted list-decimal">
          {guide.steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {guide.troubleshooting.length > 0 && (
        <section className="mt-12 p-5 bg-surface border border-border rounded-lg">
          <h3 className="text-small font-medium text-foreground mb-3">Troubleshooting</h3>
          <ul className="space-y-2 text-small text-foreground-muted list-none p-0">
            {guide.troubleshooting.map((item, i) => (
              <li key={i} className="m-0">{item}</li>
            ))}
          </ul>
        </section>
      )}

      <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
        {prevGuide ? (
          <Link
            href={`/setup/${prevGuide.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted"
          >
            <span className="text-caption block mb-1">Previous</span>
            <span className="group-hover:text-foreground transition-colors">{prevGuide.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextGuide && (
          <Link
            href={`/setup/${nextGuide.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted text-right"
          >
            <span className="text-caption block mb-1">Next</span>
            <span className="group-hover:text-foreground transition-colors">{nextGuide.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
