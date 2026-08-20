import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs, getJobBySlug } from "@/content";
import { Layout, CopyBlock, IncompleteWell } from "@/components";
import { jobArticleJsonLd } from "@/lib/seo";

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
  return {
    title: job.title,
    description: `Grok Bot job: ${job.description}`,
  };
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

      <article style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">{job.title}</h1>
        <p className="mb-8 text-text-2">{job.description}</p>

        {missingFields.length > 0 && (
          <div className="mb-8">
            <IncompleteWell missingFields={missingFields} />
          </div>
        )}

        <section
          className="mb-8 rounded border border-border p-4"
          style={{ backgroundColor: "var(--bg-raised)" }}
        >
          <h2 className="mb-2 font-medium">Bot Persona</h2>
          <p className="text-text-2">{job.botDescription}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">Outcome</h2>
          <p className="text-text-2">{job.outcome}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">First Task</h2>
          <p className="text-text-2">{job.firstTask}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">Primary Skill</h2>
          <Link
            href={`/skills/${job.primarySkill}`}
            className="inline-block rounded border border-border px-3 py-2 text-text-2 transition-colors hover:border-accent hover:text-accent"
          >
            {job.primarySkill}
          </Link>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">Sources</h2>
          <ul className="list-inside list-disc space-y-1 text-text-2">
            {job.sources.map((source, i) => (
              <li key={i}>{source}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">Routine</h2>
          <p className="text-text-2">{job.routine}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-4 text-xl font-medium">Copy-Paste Prompt</h2>
          <CopyBlock text={job.copyPaste} />
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">Reviewable Artifact</h2>
          <p className="text-text-2">{job.reviewableArtifact}</p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-xl font-medium">Never List</h2>
          <ul className="space-y-2">
            {job.neverList.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-text-2">
                <span className="flex-shrink-0" style={{ color: "var(--danger)" }}>
                  ✕
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="rounded border border-border p-4"
          style={{ backgroundColor: "var(--bg-raised)" }}
        >
          <h2 className="mb-3 font-medium">Approval & Stale Data</h2>
          <p className="text-sm text-text-2">{job.approvalAndStaleData}</p>
        </section>
      </article>
    </Layout>
  );
}
