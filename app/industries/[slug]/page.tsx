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

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{industry.title}</h1>
      <p className="text-lg text-muted mb-8">{industry.description}</p>

      <section>
        <h2 className="text-xl font-semibold mb-4">Relevant Jobs</h2>
        <div className="space-y-4">
          {relevantJobs.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="block p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors hover:no-underline group"
            >
              <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                {job.title}
              </h3>
              <p className="mt-1 text-sm text-muted">{job.description}</p>
              <div className="mt-3 flex items-center gap-2 text-xs text-muted">
                <span className="px-2 py-0.5 bg-border rounded">
                  Primary: {job.primarySkill}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Industry Notes</h2>
        <p className="text-sm text-muted">
          These jobs are curated for {industry.title.toLowerCase()} teams. Each
          job includes specific prompts, approval workflows, and never-do lists
          tailored to industry requirements.
        </p>
      </section>
    </article>
  );
}
