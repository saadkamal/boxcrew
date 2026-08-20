import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs, getJobBySlug } from "@/content";
import { Layout, CopyBlock, IncompleteWell } from "@/components";
import { jobArticleJsonLd, buildMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) return { title: "Not Found" };
  return buildMetadata({
    title: `${job.title} · Grok Bot`,
    description: `Grok Bot job: ${job.description}`,
    path: `/jobs/${slug}`,
  });
}

function getMissingFields(job: {
  outcome?: string;
  sources?: readonly string[];
  copyPaste?: string;
  reviewableArtifact?: string;
  approvalAndStaleData?: string;
}): string[] {
  const missing: string[] = [];
  if (!job.outcome) missing.push("outcome");
  if (!job.sources || job.sources.length === 0) missing.push("sources");
  if (!job.copyPaste) missing.push("copyPaste");
  if (!job.reviewableArtifact) missing.push("reviewableArtifact");
  if (!job.approvalAndStaleData) missing.push("approvalAndStaleData");
  return missing;
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  const jsonLd = jobArticleJsonLd(job);
  const missingFields = getMissingFields(job);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="interior-stack" style={{ maxWidth: "var(--prose-max)" }}>
        <header>
          <h1>{job.title}</h1>
          <p className="mt-4 text-text-2">{job.description}</p>
        </header>

        {missingFields.length > 0 && (
          <IncompleteWell missingFields={missingFields} />
        )}

        <section>
          <h2>First task</h2>
          <p className="text-text-2">{job.firstTask}</p>
        </section>

        <section>
          <h2>Primary skill</h2>
          <Link href={`/skills/${job.primarySkill}`} className="text-text-2">
            {job.primarySkill}
          </Link>
        </section>

        <section>
          <h2>Routine</h2>
          <p className="text-text-2">{job.routine}</p>
        </section>

        <section>
          <h2>Never list</h2>
          <ul className="space-y-2 text-text-2">
            {job.neverList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Outcome</h2>
          <p className="text-text-2">{job.outcome}</p>
        </section>

        <section>
          <h2>Sources</h2>
          <ul className="list-inside list-disc space-y-1 text-text-2">
            {job.sources.map((source, i) => (
              <li key={i}>{source}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Copy-paste prompt</h3>
          <CopyBlock text={job.copyPaste} />
        </section>

        <section>
          <h2>Reviewable artifact</h2>
          <p className="text-text-2">{job.reviewableArtifact}</p>
        </section>

        <section
          className="border border-border p-4"
          style={{ backgroundColor: "var(--bg-raised)" }}
        >
          <h2>Approval and stale data</h2>
          <p className="text-sm text-text-2">{job.approvalAndStaleData}</p>
        </section>
      </article>
    </Layout>
  );
}
