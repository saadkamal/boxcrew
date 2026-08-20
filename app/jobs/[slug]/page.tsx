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
      <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase">
        Job
      </span>
      <h1 className="mt-4 mb-6">{job.title}</h1>
      <p className="text-[15px] leading-[24px] text-foreground-muted">{job.description}</p>

      <section className="mt-8 p-5 border border-border rounded-lg">
        <h3 className="text-[15px] font-medium text-foreground mb-2 mt-0">Bot Persona</h3>
        <p className="text-[14px] leading-[22px] text-foreground-muted m-0">{job.botDescription}</p>
      </section>

      <section>
        <h2>Outcome</h2>
        <p className="text-[15px] leading-[24px] text-foreground-muted">{job.outcome}</p>
      </section>

      <section>
        <h2>First Task</h2>
        <p className="text-[15px] leading-[24px] text-foreground-muted">{job.firstTask}</p>
      </section>

      <section>
        <h2>Primary Skill</h2>
        <Link
          href={`/skills/${job.primarySkill}`}
          className="inline-flex items-center gap-3 px-4 py-2.5 border border-border rounded-lg text-[14px] text-foreground-muted hover:border-foreground-subtle hover:text-foreground transition-colors"
        >
          <span className="text-[10px] font-medium tracking-[0.1em] text-foreground-subtle uppercase">Skill</span>
          <span>{primarySkill?.title ?? job.primarySkill}</span>
        </Link>
      </section>

      <section>
        <h2>Sources</h2>
        <ul className="text-[15px] leading-[24px] text-foreground-muted">
          {job.sources.map((source, i) => (
            <li key={i}>{source}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Routine</h2>
        <p className="text-[15px] leading-[24px] text-foreground-muted">{job.routine}</p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="m-0">Copy-Paste Prompt</h2>
          <CopyButton text={job.copyPaste} />
        </div>
        <div className="command-block">
          <div className="command-block-header">
            <span className="text-[10px] font-medium tracking-[0.1em] text-foreground-subtle uppercase">
              Prompt
            </span>
          </div>
          <div className="command-block-content">
            {job.copyPaste}
          </div>
        </div>
      </section>

      <section>
        <h2>Reviewable Artifact</h2>
        <p className="text-[15px] leading-[24px] text-foreground-muted">{job.reviewableArtifact}</p>
      </section>

      <section>
        <h2>Never List</h2>
        <ul className="space-y-2 text-[15px] list-none p-0">
          {job.neverList.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground-muted m-0">
              <span className="text-red-500/80 flex-shrink-0">×</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 p-5 border border-border rounded-lg">
        <h3 className="text-[15px] font-medium text-foreground mb-2 mt-0">Approval &amp; Stale Data</h3>
        <p className="text-[14px] leading-[22px] text-foreground-muted m-0">{job.approvalAndStaleData}</p>
      </section>

      <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
        {prevJob ? (
          <Link
            href={`/jobs/${prevJob.slug}`}
            className="group"
          >
            <span className="text-[11px] text-foreground-subtle block mb-1">Previous</span>
            <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">{prevJob.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextJob && (
          <Link
            href={`/jobs/${nextJob.slug}`}
            className="group text-right"
          >
            <span className="text-[11px] text-foreground-subtle block mb-1">Next</span>
            <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">{nextJob.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
