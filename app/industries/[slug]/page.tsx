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
      <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase">
        Industry
      </span>
      <h1 className="mt-4 mb-6">{industry.title}</h1>
      <p className="text-[15px] leading-[24px] text-foreground-muted">{industry.description}</p>

      <section>
        <h2>Relevant Jobs</h2>
        <div className="border-t border-border mt-4">
          {relevantJobs.map((job) => (
            <Link
              key={job.slug}
              href={`/jobs/${job.slug}`}
              className="flex items-center justify-between py-4 border-b border-border group"
            >
              <div className="min-w-0">
                <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">
                  {job.title}
                </span>
                <span className="text-[12px] text-foreground-subtle ml-4">
                  {job.primarySkill}
                </span>
              </div>
              <span className="text-[10px] font-medium tracking-[0.1em] text-foreground-subtle uppercase flex-shrink-0">
                Job
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12 p-5 border border-border rounded-lg">
        <h3 className="text-[15px] font-medium text-foreground mb-2 mt-0">Industry Notes</h3>
        <p className="text-[14px] leading-[22px] text-foreground-muted m-0">
          These jobs are curated for {industry.title.toLowerCase()} teams. Each
          job includes specific prompts, approval workflows, and never-do lists
          tailored to industry requirements.
        </p>
      </section>

      <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
        {prevIndustry ? (
          <Link
            href={`/industries/${prevIndustry.slug}`}
            className="group"
          >
            <span className="text-[11px] text-foreground-subtle block mb-1">Previous</span>
            <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">{prevIndustry.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextIndustry && (
          <Link
            href={`/industries/${nextIndustry.slug}`}
            className="group text-right"
          >
            <span className="text-[11px] text-foreground-subtle block mb-1">Next</span>
            <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">{nextIndustry.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
