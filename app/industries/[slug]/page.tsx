import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, getIndustryBySlug, getJobBySlug } from "@/content";
import { Layout } from "@/components";
import { industryItemListJsonLd } from "@/lib/seo";

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
    description: `Grok Bot use cases for ${industry.title}: ${industry.description}`,
  };
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const relevantJobs = industry.jobSlugs
    .map((jobSlug) => getJobBySlug(jobSlug))
    .filter((job): job is NonNullable<typeof job> => job !== undefined);

  const jsonLd = industryItemListJsonLd(
    industry,
    relevantJobs.map((j) => j.title)
  );

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">{industry.title}</h1>
        <p className="mb-8 text-text-2">{industry.description}</p>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-medium">Jobs</h2>
          <div className="space-y-2">
            {relevantJobs.map((job) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}`}
                className="flex items-center rounded border border-border px-4 py-3 transition-colors hover:border-accent hover:no-underline"
                style={{ minHeight: "var(--rail-row-min)" }}
              >
                <div>
                  <span className="text-text hover:text-accent">{job.title}</span>
                  <p className="mt-1 text-sm text-text-3">{job.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section
          className="rounded border border-border p-4"
          style={{ backgroundColor: "var(--bg-raised)" }}
        >
          <h2 className="mb-3 font-medium">Start Guide</h2>
          <p className="mb-3 text-sm text-text-2">
            New to Grok Bot for {industry.title.toLowerCase()}? Start with the
            install plan, then explore the jobs above.
          </p>
          <Link
            href="/setup/install-plan"
            className="inline-block text-sm text-text-2 underline decoration-border hover:text-accent"
          >
            Go to Install Plan →
          </Link>
        </section>
      </article>
    </Layout>
  );
}
