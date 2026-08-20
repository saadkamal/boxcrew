import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CopyButton } from "@/components";
import { skills, getSkillBySlug } from "@/content";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return skills.map((skill) => ({ slug: skill.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return { title: "Not Found" };
  return {
    title: skill.title,
    description: skill.description,
  };
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  return (
    <article>
      <h1 className="text-3xl font-bold mb-2">{skill.title}</h1>
      <p className="text-lg text-muted mb-8">{skill.description}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Outcome</h2>
        <p className="text-muted">{skill.outcome}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <div className="space-y-2">
          {skill.sources.plugins.length > 0 && (
            <div>
              <span className="text-sm font-medium">Plugins:</span>
              <span className="text-muted ml-2">{skill.sources.plugins.join(", ")}</span>
            </div>
          )}
          {skill.sources.boxLogins.length > 0 && (
            <div>
              <span className="text-sm font-medium">Box Logins:</span>
              <span className="text-muted ml-2">{skill.sources.boxLogins.join(", ")}</span>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Artifact</h2>
          <CopyButton text={skill.artifact.markdown} />
        </div>
        <div className="p-4 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-2 text-sm text-muted mb-2">
            <span className="px-2 py-0.5 bg-border rounded">{skill.artifact.kind}</span>
            <span>{skill.artifact.filename}</span>
          </div>
          <pre className="overflow-x-auto text-sm text-muted whitespace-pre-wrap font-mono">
            {skill.artifact.markdown}
          </pre>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Reviewable Artifact</h2>
        <p className="text-muted">{skill.reviewableArtifact}</p>
      </section>

      <section className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-2">Approval Rule</h2>
          <p className="text-sm text-muted">{skill.approvalRule}</p>
        </div>
        <div className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-2">Stale Data Rule</h2>
          <p className="text-sm text-muted">{skill.staleDataRule}</p>
        </div>
      </section>

      {skill.related.length > 0 && (
        <section className="p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-3">Related</h2>
          <div className="flex flex-wrap gap-2">
            {skill.related.map((item, i) => (
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
