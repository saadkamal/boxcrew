import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CopyButton } from "@/components";
import { jobs } from "@/content/jobs";
import type { Artifact } from "@/content/types";
import { getContentPath } from "@/lib/routes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getJobBySlug(s: string) {
  return jobs.find((job) => job.slug === s);
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
    description: job.description,
  };
}

function ArtifactSection({ artifact, title }: { artifact: Artifact; title: string }) {
  return (
    <section className="mb-8">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold">{title}: {artifact.filename}</h2>
        <CopyButton text={artifact.markdown} />
      </div>
      <pre className="p-4 bg-card border border-border rounded-lg overflow-x-auto text-sm text-muted whitespace-pre-wrap font-mono">
        {artifact.markdown}
      </pre>
    </section>
  );
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-lg text-muted mb-6">{job.description}</p>
      <p className="text-muted mb-8">{job.body}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Outcome</h2>
        <p className="text-muted">{job.outcome}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <div className="space-y-3">
          {job.sources.plugins.length > 0 && (
            <div>
              <span className="text-sm text-muted">Plugins:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {job.sources.plugins.map((plugin, i) => (
                  <span key={i} className="px-2 py-1 bg-card border border-border rounded text-sm">
                    {plugin}
                  </span>
                ))}
              </div>
            </div>
          )}
          {job.sources.boxLogins.length > 0 && (
            <div>
              <span className="text-sm text-muted">Box Logins:</span>
              <ul className="list-disc list-inside mt-1 text-sm text-muted">
                {job.sources.boxLogins.map((login, i) => (
                  <li key={i}>{login}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <ArtifactSection artifact={job.botDescription} title="Bot Description" />
      <ArtifactSection artifact={job.firstTask} title="First Task" />
      <ArtifactSection artifact={job.skill} title="Skill" />
      <ArtifactSection artifact={job.routine} title="Routine" />

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Never List</h2>
        <ul className="space-y-2">
          {job.neverList.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-muted">
              <span className="text-red-500 flex-shrink-0">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Reviewable Artifact</h2>
        <p className="text-muted">{job.reviewableArtifact}</p>
      </section>

      <section className="mb-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Approval Rule</h2>
        <p className="text-sm text-muted">{job.approvalRule}</p>
      </section>

      <section className="mb-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Stale Data Rule</h2>
        <p className="text-sm text-muted">{job.staleDataRule}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Related</h2>
        <div className="flex flex-wrap gap-2">
          {job.related.map((ref, i) => (
            <Link
              key={i}
              href={getContentPath(ref.kind, ref.slug)}
              className="px-3 py-1.5 bg-card border border-border rounded text-sm hover:border-accent transition-colors"
            >
              {ref.kind}: {ref.slug}
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
