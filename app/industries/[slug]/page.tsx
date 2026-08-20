import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, getIndustryBySlug, getJobBySlug } from "@/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Not Found" };
  return {
    title: industry.title,
    description: industry.description,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relevantJobs = industry.jobSlugs
    .map((jobSlug) => getJobBySlug(jobSlug))
    .filter((job): job is NonNullable<typeof job> => job !== undefined);

  const currentIndex = industries.findIndex((i) => i.slug === slug);
  const prevIndustry = currentIndex > 0 ? industries[currentIndex - 1] : null;
  const nextIndustry = currentIndex < industries.length - 1 ? industries[currentIndex + 1] : null;

  return (
    <article className="prose">
      <span className="text-label">INDUSTRY</span>
      <h1 className="text-headline mt-3 mb-3">{industry.title}</h1>
      <p className="text-body text-foreground-muted">{industry.description}</p>

      <section>
        <h2>Relevant Jobs</h2>
        <div className="space-y-3 mt-4">
          {relevantJobs.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="group block p-4 border border-border rounded-lg hover:border-foreground-subtle transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-small font-medium text-foreground group-hover:text-accent transition-colors m-0">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-caption text-foreground-muted m-0">{job.description}</p>
                </div>
                <span className="text-label flex-shrink-0">JOB</span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <span className="text-label">Primary skill:</span>
                <span className="text-caption text-foreground-subtle">{job.primarySkill}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 p-5 bg-surface border border-border rounded-lg">
        <h3 className="text-small font-medium text-foreground mb-2">Industry Notes</h3>
        <p className="text-small text-foreground-muted m-0">
          These jobs are curated for {industry.title.toLowerCase()} teams. Each
          job includes specific prompts, approval workflows, and never-do lists
          tailored to industry requirements.
        </p>
      </section>

      <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
        {prevIndustry ? (
          <Link
            href={`/industries/${prevIndustry.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted"
          >
            <span className="text-caption block mb-1">Previous</span>
            <span className="group-hover:text-foreground transition-colors">{prevIndustry.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextIndustry && (
          <Link
            href={`/industries/${nextIndustry.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted text-right"
          >
            <span className="text-caption block mb-1">Next</span>
            <span className="group-hover:text-foreground transition-colors">{nextIndustry.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
