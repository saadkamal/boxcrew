import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { skills, getSkillBySlug } from "@/content";
import { Layout, CopyBlock, IncompleteWell } from "@/components";
import { skillArticleJsonLd, buildMetadata } from "@/lib/seo";

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
  return buildMetadata({
    title: `${skill.title} · Grok Bot`,
    description: `Grok Bot skill: ${skill.description}`,
    path: `/skills/${slug}`,
  });
}

function getMissingFields(skill: {
  outcome?: string;
  sources?: readonly string[];
  copyPaste?: string;
  reviewableArtifact?: string;
  approvalAndStaleData?: string;
}): string[] {
  const missing: string[] = [];
  if (!skill.outcome) missing.push("outcome");
  if (!skill.sources || skill.sources.length === 0) missing.push("sources");
  if (!skill.copyPaste) missing.push("copyPaste");
  if (!skill.reviewableArtifact) missing.push("reviewableArtifact");
  if (!skill.approvalAndStaleData) missing.push("approvalAndStaleData");
  return missing;
}

export default async function SkillPage({ params }: PageProps) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const jsonLd = skillArticleJsonLd(skill);
  const missingFields = getMissingFields(skill);

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="interior-stack" style={{ maxWidth: "var(--prose-max)" }}>
        <header>
          <h1>{skill.title}</h1>
          <p className="mt-4 text-text-2">{skill.description}</p>
        </header>

        {missingFields.length > 0 && (
          <IncompleteWell missingFields={missingFields} />
        )}

        <section>
          <h2>Outcome</h2>
          <p className="text-text-2">{skill.outcome}</p>
        </section>

        <section>
          <h2>Sources</h2>
          <ul className="list-inside list-disc space-y-1 text-text-2">
            {skill.sources.map((source, i) => (
              <li key={i}>{source}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3>Copy-paste prompt</h3>
          <CopyBlock text={skill.copyPaste} />
        </section>

        <section>
          <h2>Reviewable artifact</h2>
          <p className="text-text-2">{skill.reviewableArtifact}</p>
        </section>

        <section
          className="border border-border p-4"
          style={{ backgroundColor: "var(--bg-raised)" }}
        >
          <h2>Approval and stale data</h2>
          <p className="text-sm text-text-2">{skill.approvalAndStaleData}</p>
        </section>
      </article>
    </Layout>
  );
}
