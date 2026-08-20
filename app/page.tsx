import { Layout, Card, CardGrid, Search } from "@/components";
import { setupGuides, skills, jobs, industries } from "@/content";

const searchItems = [
  ...setupGuides.map((g) => ({
    title: g.title,
    description: g.description,
    href: `/setup/${g.slug}`,
    kind: g.kind,
  })),
  ...skills.map((s) => ({
    title: s.title,
    description: s.description,
    href: `/skills/${s.slug}`,
    kind: s.kind,
  })),
  ...jobs.map((j) => ({
    title: j.title,
    description: j.description,
    href: `/jobs/${j.slug}`,
    kind: j.kind,
  })),
  ...industries.map((i) => ({
    title: i.title,
    description: i.description,
    href: `/industries/${i.slug}`,
    kind: i.kind,
  })),
] as const;

export default function HomePage() {
  return (
    <Layout>
      <section className="mb-12">
        <h1 className="text-3xl font-bold mb-4">Boxcrew</h1>
        <p className="text-lg text-muted max-w-2xl">
          Grok Bot use-case directory. Skills, jobs, and setup guides. Browse to
          find the right configuration for your team.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Search</h2>
        <Search items={searchItems} placeholder="Search skills, jobs, setup guides..." />
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
        <p className="text-muted mb-4">
          New to Grok Bot? Start with these setup guides.
        </p>
        <CardGrid>
          {setupGuides.slice(0, 3).map((guide) => (
            <Card
              key={guide.slug}
              href={`/setup/${guide.slug}`}
              title={guide.title}
              description={guide.description}
              badge="Setup"
            />
          ))}
        </CardGrid>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Popular Skills</h2>
        <CardGrid>
          {skills.slice(0, 6).map((skill) => (
            <Card
              key={skill.slug}
              href={`/skills/${skill.slug}`}
              title={skill.title}
              description={skill.description}
              badge="Skill"
            />
          ))}
        </CardGrid>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Jobs by Role</h2>
        <CardGrid>
          {jobs.map((job) => (
            <Card
              key={job.slug}
              href={`/jobs/${job.slug}`}
              title={job.title}
              description={job.description}
              badge="Job"
            />
          ))}
        </CardGrid>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">Industries</h2>
        <CardGrid>
          {industries.map((industry) => (
            <Card
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              title={industry.title}
              description={industry.description}
              badge="Industry"
            />
          ))}
        </CardGrid>
      </section>

      <section className="p-4 bg-card border border-border rounded-lg">
        <h2 className="font-semibold mb-2">Key Principles</h2>
        <p className="text-sm text-muted">
          Never auto-send, auto-spend, or auto-publish. Every outbound action
          requires human approval. Grok Bot is your research assistant, draft
          generator, and data organizer—not an autonomous actor.
        </p>
      </section>
    </Layout>
  );
}
