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

  const currentIndex = skills.findIndex((s) => s.slug === slug);
  const prevSkill = currentIndex > 0 ? skills[currentIndex - 1] : null;
  const nextSkill = currentIndex < skills.length - 1 ? skills[currentIndex + 1] : null;

  return (
    <article className="prose">
      <span className="text-label">SKILL</span>
      <h1 className="text-headline mt-3 mb-3">{skill.title}</h1>
      <p className="text-body text-foreground-muted">{skill.description}</p>

      <section>
        <h2>Outcome</h2>
        <p className="text-small text-foreground-muted">{skill.outcome}</p>
      </section>

      <section>
        <h2>Sources</h2>
        <ul className="text-small text-foreground-muted">
          {skill.sources.map((source, i) => (
            <li key={i}>{source}</li>
          ))}
        </ul>
      </section>

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="m-0">Copy-Paste Prompt</h2>
          <CopyButton text={skill.copyPaste} />
        </div>
        <div className="command-block">
          <div className="command-block-header">
            <span className="text-label">PROMPT</span>
          </div>
          <div className="command-block-content">
            {skill.copyPaste}
          </div>
        </div>
      </section>

      <section>
        <h2>Reviewable Artifact</h2>
        <p className="text-small text-foreground-muted">{skill.reviewableArtifact}</p>
      </section>

      <section className="mt-12 p-5 bg-surface border border-border rounded-lg">
        <h3 className="text-small font-medium text-foreground mb-2">Approval &amp; Stale Data</h3>
        <p className="text-small text-foreground-muted m-0">{skill.approvalAndStaleData}</p>
      </section>

      <nav className="mt-16 pt-8 border-t border-border flex items-center justify-between gap-4">
        {prevSkill ? (
          <Link
            href={`/skills/${prevSkill.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted"
          >
            <span className="text-caption block mb-1">Previous</span>
            <span className="group-hover:text-foreground transition-colors">{prevSkill.title}</span>
          </Link>
        ) : (
          <div />
        )}
        {nextSkill && (
          <Link
            href={`/skills/${nextSkill.slug}`}
            className="group text-small text-foreground-subtle hover:text-foreground-muted text-right"
          >
            <span className="text-caption block mb-1">Next</span>
            <span className="group-hover:text-foreground transition-colors">{nextSkill.title}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
