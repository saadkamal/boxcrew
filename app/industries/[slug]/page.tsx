import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { industries, getIndustryBySlug, getJobBySlug } from "@/content";
import { Layout } from "@/components";
import { industryItemListJsonLd, buildMetadata } from "@/lib/seo";

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
  return buildMetadata({
    title: `${industry.title} · Grok Bot`,
    description: `Grok Bot use cases for ${industry.title}: ${industry.description}`,
    path: `/industries/${slug}`,
  });
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

      <article className="interior-stack" style={{ maxWidth: "var(--prose-max)" }}>
        <header>
          <h1>{industry.title}</h1>
          <p className="mt-4 text-text-2">{industry.description}</p>
        </header>

        <section>
          <h2>Jobs</h2>
          <div>
            {relevantJobs.map((job) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}`}
                className="flex items-center border-b border-border hover:no-underline"
                style={{ minHeight: "var(--rail-row-min)" }}
              >
                <span className="text-text">{job.title}</span>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <h2>Start guide</h2>
          <p className="mb-3 text-text-2">
            New to Grok Bot for {industry.title.toLowerCase()}? Start with the
            install plan, then the jobs above.
          </p>
          <Link href="/setup/install-plan" className="text-text-2">
            Go to Install Plan
          </Link>
        </section>
      </article>
    </Layout>
  );
}
