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
        <h2 className="text-xl font-semibold mb-3">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {job.skills.map((skillSlug, i) => (
            <Link
              key={i}
              href={`/skills/${skillSlug}`}
              className="inline-block px-3 py-1.5 bg-card border border-border rounded hover:border-accent transition-colors"
            >
              {skillSlug}
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <div className="space-y-2">
          {job.sources.plugins.length > 0 && (
            <div>
              <span className="text-sm font-medium">Plugins:</span>
              <span className="text-muted ml-2">{job.sources.plugins.join(", ")}</span>
            </div>
          )}
          {job.sources.boxLogins.length > 0 && (
            <div>
              <span className="text-sm font-medium">Box Logins:</span>
              <span className="text-muted ml-2">{job.sources.boxLogins.join(", ")}</span>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Routine</h2>
        <p className="text-muted">{job.routine}</p>
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

      <section className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-2">Approval Rule</h2>
          <p className="text-sm text-muted">{job.approvalRule}</p>
        </div>
        <div className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-2">Stale Data Rule</h2>
          <p className="text-sm text-muted">{job.staleDataRule}</p>
        </div>
      </section>

      {job.related.length > 0 && (
        <section className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-3">Related</h2>
          <div className="flex flex-wrap gap-2">
            {job.related.map((item, i) => (
              <Link
                key={i}
                href={item.kind === "page" ? `/${item.slug}` : `/${item.kind === "setup" ? "setup" : item.kind === "skill" ? "skills" : item.kind === "job" ? "jobs" : "industries"}/${item.slug}`}
                className="px-3 py-1.5 bg-border rounded hover:bg-accent hover:text-accent-foreground transition-colors text-sm"
              >
                {item.kind}: {item.slug}
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
