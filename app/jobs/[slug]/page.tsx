import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CopyButton } from "@/components";
import { jobs, getJobBySlug, getSkillBySlug } from "@/content";

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

  const primarySkill = getSkillBySlug(job.primarySkill);
  const currentIndex = jobs.findIndex((j) => j.slug === slug);
  const prevJob = currentIndex > 0 ? jobs[currentIndex - 1] : null;
  const nextJob = currentIndex < jobs.length - 1 ? jobs[currentIndex + 1] : null;

  return (
    <article className="prose">
      <span className="text-label">JOB</span>
      <h1 className="text-headline mt-3 mb-3">{job.title}</h1>
      <p className="text-body text-foreground-muted">{job.description}</p>

      <section className="mt-8 p-5 bg-surface border border-border rounded-lg">
        <h3 className="text-small font-medium text-foreground mb-2">Bot Persona</h3>
        <p className="text-small text-foreground-muted m-0">{job.botDescription}</p>
      </section>

      <section>
        <h2>Outcome</h2>
        <p className="text-small text-foreground-muted">{job.outcome}</p>
      </section>

      <section>
        <h2>First Task</h2>
        <p className="text-small text-foreground-muted">{job.firstTask}</p>
      </section>

      <section>
        <h2>Primary Skill</h2>
        <Link
          href={`/skills/${job.primarySkill}`}
          className="inline-flex items-center gap-2 px-3 py-2 border border-border rounded-lg text-small text-foreground-muted hover:border-foreground-subtle hover:text-foreground transition-colors"
        >
          <span className="text-label">SKILL</span>
          <span>{primarySkill?.title ?? job.primarySkill}</span>
        </Link>
      </section>

      <section>
        <h2>Sources</h2>
        <ul className="text-small text-foreground-muted">
          {job.sources.map((source, i) => (
            <li key={i}>{source}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Routine</h2>
        <p className="text-small text-foreground-muted">{job.routine}</p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="m-0">Copy-Paste Prompt</h2>
          <CopyButton text={job.copyPaste} />
        </div>
        <div className="command-block">
          <div className="command-block-header">
            <span className="text-label">PROMPT</span>
          </div>
          <div className="command-block-content">
            {job.copyPaste}
          </div>
        </div>
      </section>

      <section>
        <h2>Reviewable Artifact</h2>
        <p className="text-small text-foreground-muted">{job.reviewableArtifact}</p>
      </section>

      <section>
        <h2>Never List</h2>
        <ul className="space-y-2 text-small list-none p-0">
          {job.neverList.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-foreground-muted m-0">
              <span className="text-red-500 flex-shrink-0 text-sm">×</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 p-5 bg-surface border border-border rounded-lg">
        <h3 className="text-small font-medium text-foreground mb-2">Approval &amp; Stale Data</h3>
        <p className="text-small text-foreground-muted m-0">{job.approvalAndStaleData}</p>
      </section>

      <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
        {prevJob ? (
          <Link
            href={`/jobs/${prevJob.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted"
          >
            <span className="text-caption block mb-1">Previous</span>
            <span className="group-hover:text-foreground transition-colors">{prevJob.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextJob && (
          <Link
            href={`/jobs/${nextJob.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted text-right"
          >
            <span className="text-caption block mb-1">Next</span>
            <span className="group-hover:text-foreground transition-colors">{nextJob.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
