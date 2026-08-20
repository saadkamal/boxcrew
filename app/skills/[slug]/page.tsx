import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
        <ul className="list-disc list-inside space-y-1 text-muted">
          {skill.sources.map((source, i) => (
            <li key={i}>{source}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-semibold">Copy-Paste Prompt</h2>
          <CopyButton text={skill.copyPaste} />
        </div>
        <pre className="p-4 bg-card border border-border rounded-lg overflow-x-auto text-sm text-muted whitespace-pre-wrap font-mono">
          {skill.copyPaste}
        </pre>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Reviewable Artifact</h2>
        <p className="text-muted">{skill.reviewableArtifact}</p>
      </section>

      <section className="p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-3">Approval & Stale Data</h2>
        <p className="text-sm text-muted">{skill.approvalAndStaleData}</p>
      </section>
    </article>
  );
}
