"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Layout, Search, FilterChips } from "@/components";
import { jobs, setupGuides, skills, industries } from "@/content";
import { JULES_DEFINITION, PLAN_GATES } from "@/lib/site";
import { websiteJsonLd, itemListJsonLd } from "@/lib/seo";
import type { Content } from "@/content/types";

const homeJsonLd = websiteJsonLd();
const jobsItemListJsonLd = itemListJsonLd(
  "Grok Bot Jobs",
  jobs.map((j) => ({ title: j.title, href: `/jobs/${j.slug}` }))
);

interface SearchableItem {
  title: string;
  description: string;
  href: string;
  kind: Content["kind"];
}

function buildSearchItems(): SearchableItem[] {
  const items: SearchableItem[] = [];

  setupGuides.forEach((g) => {
    items.push({
      title: g.title,
      description: g.description,
      href: `/setup/${g.slug}`,
      kind: "setup",
    });
  });

  skills.forEach((s) => {
    items.push({
      title: s.title,
      description: s.description,
      href: `/skills/${s.slug}`,
      kind: "skill",
    });
  });

  jobs.forEach((j) => {
    items.push({
      title: j.title,
      description: j.description,
      href: `/jobs/${j.slug}`,
      kind: "job",
    });
  });

  industries.forEach((i) => {
    items.push({
      title: i.title,
      description: i.description,
      href: `/industries/${i.slug}`,
      kind: "industry",
    });
  });

  return items;
}

function LoadingSkeleton() {
  return (
    <div className="space-y-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-16 rounded border border-border"
          style={{ backgroundColor: "var(--bg-raised)" }}
        />
      ))}
    </div>
  );
}

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);

  const initialQuery = searchParams.get("q") ?? "";
  const initialKind = searchParams.get("kind") ?? null;

  const [query, setQuery] = useState(initialQuery);
  const [kindFilter, setKindFilter] = useState<string | null>(initialKind);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (kindFilter) params.set("kind", kindFilter);
    const search = params.toString();
    router.replace(search ? `/?${search}` : "/", { scroll: false });
  }, [query, kindFilter, router]);

  const allItems = useMemo(() => buildSearchItems(), []);

  const filteredItems = useMemo(() => {
    let items = allItems;

    if (kindFilter) {
      items = items.filter((item) => item.kind === kindFilter);
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      items = items.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q)
      );
    }

    return items;
  }, [allItems, query, kindFilter]);

  const displayItems = useMemo(() => {
    if (query || kindFilter) return filteredItems;
    return jobs.map((j) => ({
      title: j.title,
      description: j.description,
      href: `/jobs/${j.slug}`,
      kind: "job" as const,
    }));
  }, [filteredItems, query, kindFilter]);

  const noResults = query.trim() && filteredItems.length === 0;
  const noMatch = kindFilter && !query.trim() && filteredItems.length === 0;

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobsItemListJsonLd) }}
      />

      <h1 className="sr-only">Grok Bot setups you paste</h1>

      <section className="mb-8">
        <p className="text-text-2" style={{ maxWidth: "680px" }}>
          {JULES_DEFINITION}
        </p>
      </section>

      <section className="mb-6">
        <div className="flex flex-wrap items-center gap-2">
          {PLAN_GATES.map((plan) => (
            <span
              key={plan}
              className="rounded-full border border-border px-3 text-sm text-text-3"
              style={{ height: "var(--chip-height)", lineHeight: "var(--chip-height)" }}
            >
              {plan}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <Search value={query} onChange={setQuery} />
      </section>

      <section className="mb-6">
        <FilterChips selected={kindFilter} onSelect={setKindFilter} />
      </section>

      <section className="mb-8">
        {!mounted ? (
          <LoadingSkeleton />
        ) : noResults ? (
          <p className="py-4 text-text-2">Nothing for &ldquo;{query}&rdquo;.</p>
        ) : noMatch ? (
          <p className="py-4 text-text-2">No pages in this filter.</p>
        ) : (
          <div className="space-y-1">
            {displayItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded border border-transparent px-3 py-3 transition-colors hover:border-border hover:no-underline"
                style={{
                  minHeight: "var(--rail-row-min)",
                  backgroundColor: "transparent",
                }}
              >
                <span className="text-text hover:text-accent">{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <Link
          href="/setup/install-plan"
          className="inline-flex items-center rounded border border-accent px-4 py-2 text-accent transition-colors hover:bg-accent-muted hover:no-underline"
        >
          Start with Install Plan →
        </Link>
      </section>
    </Layout>
  );
}

import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<Layout><LoadingSkeleton /></Layout>}>
      <HomeContent />
    </Suspense>
  );
}
