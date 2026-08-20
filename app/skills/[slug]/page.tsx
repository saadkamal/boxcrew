import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CopyButton } from "@/components";
import { skills } from "@/content/skills";
import { getContentPath } from "@/lib/routes";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getSkillBySlug(s: string) {
  return skills.find((skill) => skill.slug === s);
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
      <p className="text-lg text-muted mb-6">{skill.description}</p>
      <p className="text-muted mb-8">{skill.body}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Outcome</h2>
        <p className="text-muted">{skill.outcome}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Sources</h2>
        <div className="space-y-3">
          {skill.sources.plugins.length > 0 && (
            <div>
              <span className="text-sm text-muted">Plugins:</span>
              <div className="flex flex-wrap gap-2 mt-1">
                {skill.sources.plugins.map((plugin, i) => (
                  <span key={i} className="px-2 py-1 bg-card border border-border rounded text-sm">
                    {plugin}
                  </span>
                ))}
              </div>
            </div>
          )}
          {skill.sources.boxLogins.length > 0 && (
            <div>
              <span className="text-sm text-muted">Box Logins:</span>
              <ul className="list-disc list-inside mt-1 text-sm text-muted">
                {skill.sources.boxLogins.map((login, i) => (
                  <li key={i}>{login}</li>
                ))}
              </ul>
            </div>
          )}
          {skill.sources.officialDocs.length > 0 && (
            <div>
              <span className="text-sm text-muted">Official Docs:</span>
              <ul className="mt-1 space-y-1">
                {skill.sources.officialDocs.map((url, i) => (
                  <li key={i}>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                      {url}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Artifact: {skill.artifact.filename}</h2>
          <CopyButton text={skill.artifact.markdown} />
        </div>
        <pre className="p-4 bg-card border border-border rounded-lg overflow-x-auto text-sm text-muted whitespace-pre-wrap font-mono">
          {skill.artifact.markdown}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Reviewable Artifact</h2>
        <p className="text-muted">{skill.reviewableArtifact}</p>
      </section>

      <section className="mb-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Approval Rule</h2>
        <p className="text-sm text-muted">{skill.approvalRule}</p>
      </section>

      <section className="mb-8 p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Stale Data Rule</h2>
        <p className="text-sm text-muted">{skill.staleDataRule}</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Related</h2>
        <div className="flex flex-wrap gap-2">
          {skill.related.map((ref, i) => (
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
