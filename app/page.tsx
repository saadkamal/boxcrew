"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "@/components";
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

const featuredItems = [
  { label: "Setup", title: "Install Plan", href: "/setup/install-plan" },
  { label: "Job", title: "Sales Outbound", href: "/jobs/sales-outbound" },
  { label: "Skill", title: "Account Health Watch", href: "/skills/account-health-watch" },
  { label: "Blog", title: "Does Cursor Ultra include Grok Bot?", href: "/blog/does-cursor-ultra-include-grok-bot" },
];

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") ?? "";
  const initialKind = searchParams.get("kind") ?? "all";

  const handleSearchChange = useCallback((q: string, kind: string) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (kind && kind !== "all") params.set("kind", kind);
    const qs = params.toString();
    router.replace(qs ? `/?${qs}` : "/", { scroll: false });
  }, [router]);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#0B0B0C" }}>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{ backgroundColor: "#0B0B0C", borderBottom: "1px solid #2A2A2E" }}
      >
        <div className="max-w-[720px] mx-auto px-6 h-11 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-medium tracking-[-0.01em]" style={{ color: "#F2F0EA" }}>
            Boxcrew
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/skills/account-health-watch" className="text-[13px]" style={{ color: "#6E6A62" }}>
              Skills
            </Link>
            <Link href="/jobs/sales-outbound" className="text-[13px]" style={{ color: "#6E6A62" }}>
              Jobs
            </Link>
            <Link href="/industries/b2b-saas" className="text-[13px]" style={{ color: "#6E6A62" }}>
              Industries
            </Link>
            <Link href="/blog" className="text-[13px]" style={{ color: "#6E6A62" }}>
              Blog
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-11">
        <div className="w-full max-w-[720px] mx-auto">
          <p
            className="text-[40px] leading-[48px] font-medium tracking-[-0.02em] text-center mb-12"
            style={{ color: "#F2F0EA" }}
          >
            Grok Bot use-case directory
          </p>

          <Search
            items={searchItems}
            placeholder="Search..."
            heroMode
            initialQuery={initialQuery}
            initialKind={initialKind}
            onSearchChange={handleSearchChange}
          />

          <div className="mt-16" style={{ borderTop: "1px solid #2A2A2E" }}>
            {featuredItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-3 group"
                style={{ borderBottom: i < featuredItems.length - 1 ? "1px solid #2A2A2E" : "none" }}
              >
                <span
                  className="text-[10px] font-medium tracking-[0.1em] uppercase w-14"
                  style={{ color: "#6E6A62" }}
                >
                  {item.label}
                </span>
                <span className="text-[14px] group-hover:text-[#F2F0EA] transition-colors" style={{ color: "#A8A49A" }}>
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-[11px] text-center" style={{ color: "#6E6A62" }}>
            Ultra · Teams Premium · SuperGrok Heavy
          </p>
        </div>
      </main>

      <div
        className="sticky bottom-0"
        style={{ borderTop: "1px solid #2A2A2E", backgroundColor: "#0B0B0C" }}
      >
        <div className="max-w-[720px] mx-auto px-6 py-3 text-center">
          <p className="text-[11px]" style={{ color: "#6E6A62" }}>
            Not Grok chat. Not Cursor Cloud Agents.
          </p>
        </div>
      </div>

      <footer style={{ borderTop: "1px solid #2A2A2E" }}>
        <div className="max-w-[720px] mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-[11px]" style={{ color: "#6E6A62" }}>
            Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
          </p>
          <Link href="/glossary" className="text-[11px]" style={{ color: "#6E6A62" }}>
            Glossary
          </Link>
        </div>
      </footer>
    </div>
  );
}

import { Suspense } from "react";

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" style={{ backgroundColor: "#0B0B0C" }} />}>
      <HomeContent />
    </Suspense>
  );
}
