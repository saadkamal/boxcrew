"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Layout, Search, FilterChips } from "@/components";
import { jobs, setupGuides, skills, industries } from "@/content";
import { JULES_DEFINITION, FEATURED_HOME } from "@/lib/site";
import { websiteJsonLd, itemListJsonLd } from "@/lib/seo";
import type { Content } from "@/content/types";

const homeJsonLd = websiteJsonLd();
const featuredJsonLd = itemListJsonLd(
  "Grok Bot featured",
  FEATURED_HOME.map((item) => ({ title: item.title, href: item.href }))
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

export function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialQuery = searchParams.get("q") ?? "";
  const initialKind = searchParams.get("kind") ?? null;

  const [query, setQuery] = useState(initialQuery);
  const [kindFilter, setKindFilter] = useState<string | null>(initialKind);

  useEffect(() => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (kindFilter) params.set("kind", kindFilter);
    const search = params.toString();
    const next = search ? `/?${search}` : "/";
    const current = `${window.location.pathname}${window.location.search}`;
    if (current !== next) {
      router.replace(next, { scroll: false });
    }
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

  const isDefault = !query && !kindFilter;
  const displayItems: SearchableItem[] = isDefault
    ? FEATURED_HOME.map((item) => ({
        title: item.title,
        description: "",
        href: item.href,
        kind: item.kind,
      }))
    : filteredItems;

  const noResults = Boolean(query.trim()) && filteredItems.length === 0;
  const noMatch =
    Boolean(kindFilter) && !query.trim() && filteredItems.length === 0;

  return (
    <Layout variant="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredJsonLd) }}
      />

      <h1 className="sr-only">Grok Bot setups you paste</h1>

      <p className="home-definition">{JULES_DEFINITION}</p>

      <p className="plan-gate" style={{ marginTop: "var(--space-32)" }}>
        Ultra · Teams Premium · SuperGrok Heavy
      </p>

      <div style={{ marginTop: "var(--space-32)" }}>
        <Search value={query} onChange={setQuery} />
      </div>

      <div style={{ marginTop: "var(--space-16)" }}>
        <FilterChips selected={kindFilter} onSelect={setKindFilter} />
      </div>

      <section style={{ marginTop: "var(--space-96)" }}>
        {noResults ? (
          <p className="text-text-2">Nothing for &ldquo;{query}&rdquo;.</p>
        ) : noMatch ? (
          <p className="text-text-2">No pages in this filter.</p>
        ) : (
          <div>
            {displayItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center border-b border-border hover:no-underline"
                style={{
                  minHeight: "var(--rail-row-min)",
                }}
              >
                <span className="text-text">{item.title}</span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <div style={{ marginTop: "var(--space-64)" }}>
        <Link href="/setup/install-plan" className="text-text-2">
          Start with Install Plan
        </Link>
      </div>
    </Layout>
  );
}
