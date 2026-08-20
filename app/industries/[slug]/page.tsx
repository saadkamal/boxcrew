import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/content/industries";
import { jobs } from "@/content/jobs";
import { setupGuides } from "@/content/setup";
import { jobsOf } from "@/lib/catalog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getIndustryBySlug(s: string) {
  return industries.find((industry) => industry.slug === s);
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

  const relevantJobs = jobsOf(industry.slug);
  const startGuide = setupGuides.find((g) => g.slug === industry.startGuide);

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{industry.title}</h1>
      <p className="text-lg text-muted mb-6">{industry.description}</p>
      <p className="text-muted mb-8">{industry.body}</p>

      {startGuide && (
        <section className="mb-8 p-4 bg-card border border-accent rounded-lg">
          <h2 className="font-semibold mb-2 text-accent">Start Here</h2>
          <Link
            href={`/setup/${startGuide.slug}`}
            className="text-foreground hover:text-accent transition-colors"
          >
            {startGuide.title}
          </Link>
          <p className="text-sm text-muted mt-1">{startGuide.description}</p>
        </section>
      )}

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
              <p className="mt-2 text-sm text-muted">
                <span className="text-accent">Outcome:</span> {job.outcome}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
