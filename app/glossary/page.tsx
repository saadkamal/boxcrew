import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { getPageBySlug, jobs } from "@/content";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Glossary",
  description: "Key terms and concepts for Grok Bot users.",
};

export default function GlossaryPage() {
  const page = getPageBySlug("glossary");
  if (!page) notFound();

  return (
    <Layout>
      <article className="max-w-3xl">
        <h1 className="text-3xl font-bold mb-4">{page.title}</h1>
        <p className="text-lg text-muted mb-8">{page.description}</p>

        <dl className="space-y-6">
          {page.sections.map((section, index) => (
            <div key={index} className="p-4 bg-card border border-border rounded-lg">
              <dt className="font-semibold text-accent mb-2">{section.heading}</dt>
              <dd className="text-muted">{section.content}</dd>
            </div>
          ))}
        </dl>

        <section className="mt-8 p-4 bg-card border border-border rounded-lg">
          <h2 className="font-semibold mb-3">Quick Links</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/setup/install-plan"
              className="text-accent hover:underline"
            >
              → Install Plan (Start Here)
            </Link>
            <Link
              href="/jobs/sales-outbound"
              className="text-accent hover:underline"
            >
              → Jobs Index
            </Link>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium mb-2">All Jobs ({jobs.length})</h3>
            <div className="flex flex-wrap gap-2">
              {jobs.map((job) => (
                <Link
                  key={job.slug}
                  href={`/jobs/${job.slug}`}
                  className="px-2 py-1 text-xs bg-border rounded hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {job.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  );
}
