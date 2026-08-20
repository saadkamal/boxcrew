import Link from "next/link";
import { PageLayout, Search, FeaturedCard } from "@/components";
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

const featuredGuides = setupGuides.slice(0, 3);
const featuredJobs = jobs.slice(0, 4);

export default function HomePage() {
  return (
    <PageLayout>
      <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24">
        <h1 className="text-display text-foreground text-center text-balance">
          Boxcrew
        </h1>
        <p className="mt-6 text-lg text-foreground-muted text-center max-w-xl text-balance">
          Grok Bot use-case directory. Skills, jobs, and setup guides.
        </p>
        
        <div className="mt-12 w-full">
          <Search 
            items={searchItems} 
            placeholder="Search skills, jobs, guides..." 
            heroMode 
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-label">Getting Started</span>
            <h2 className="text-headline mt-2">Setup Guides</h2>
          </div>
          <Link 
            href="/setup/install-plan" 
            className="text-small text-foreground-subtle hover:text-foreground-muted transition-colors"
          >
            View all guides
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredGuides.map((guide) => (
            <FeaturedCard
              key={guide.slug}
              href={`/setup/${guide.slug}`}
              title={guide.title}
              description={guide.description}
              label="GUIDE"
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-label">Role Archetypes</span>
            <h2 className="text-headline mt-2">Jobs</h2>
          </div>
          <Link 
            href="/jobs/sales-outbound" 
            className="text-small text-foreground-subtle hover:text-foreground-muted transition-colors"
          >
            View all jobs
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredJobs.map((job) => (
            <FeaturedCard
              key={job.slug}
              href={`/jobs/${job.slug}`}
              title={job.title}
              description={job.description}
              label="JOB"
            />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="flex items-end justify-between mb-8">
          <div>
            <span className="text-label">By vertical</span>
            <h2 className="text-headline mt-2">Industries</h2>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group block p-5 border border-border rounded-lg hover:border-foreground-subtle transition-colors"
            >
              <h3 className="text-small font-medium text-foreground group-hover:text-accent transition-colors">
                {industry.title}
              </h3>
              <p className="mt-1 text-caption text-foreground-subtle">
                {industry.jobSlugs.length} job{industry.jobSlugs.length !== 1 ? "s" : ""}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-border">
        <div className="max-w-2xl">
          <span className="text-label">Principles</span>
          <p className="mt-4 text-small text-foreground-muted leading-relaxed">
            Never auto-send, auto-spend, or auto-publish. Every outbound action
            requires human approval. Grok Bot is your research assistant, draft
            generator, and data organizer—not an autonomous actor.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
