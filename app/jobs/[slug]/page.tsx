import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CopyButton } from "@/components";
import { jobs, getJobBySlug } from "@/content";

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
    description: job.description,
  };
}

export default async function JobPage({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);
  if (!job) notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
      <p className="text-lg text-muted mb-8">{job.description}</p>

      <section className="mb-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-3">Bot Persona</h2>
        <p className="text-muted">{job.botDescription}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Outcome</h2>
        <p className="text-muted">{job.outcome}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">First Task</h2>
        <p className="text-muted">{job.firstTask}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Primary Skill</h2>
        <Link
          href={`/skills/${job.primarySkill}`}
          className="inline-block px-3 py-1.5 bg-card border border-border rounded hover:border-accent transition-colors"
        >
          {job.primarySkill}
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <ul className="list-disc list-inside space-y-1 text-muted">
          {job.sources.map((source, i) => (
            <li key={i}>{source}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Routine</h2>
        <p className="text-muted">{job.routine}</p>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Copy-Paste Prompt</h2>
          <CopyButton text={job.copyPaste} />
        </div>
        <pre className="p-4 bg-card border border-border rounded-lg overflow-x-auto text-sm text-muted whitespace-pre-wrap font-mono">
          {job.copyPaste}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Reviewable Artifact</h2>
        <p className="text-muted">{job.reviewableArtifact}</p>
      </section>

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

      <section className="p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-3">Approval & Stale Data</h2>
        <p className="text-sm text-muted">{job.approvalAndStaleData}</p>
      </section>
    </article>
  );
}
