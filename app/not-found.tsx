"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Layout, Search } from "@/components";

export default function NotFound() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <Layout>
      <div style={{ maxWidth: "var(--prose-max)" }}>
        <h1>This page is not in Boxcrew</h1>
        <p className="mt-4 text-text-2">Grok Bot pages live on Boxcrew. This URL is not one of them.</p>

        <div style={{ marginTop: "var(--space-64)" }}>
          <Search
            value={query}
            onChange={(value) => {
              setQuery(value);
              const params = new URLSearchParams();
              if (value) params.set("q", value);
              router.replace(value ? `/?${params.toString()}` : "/", { scroll: false });
            }}
            placeholder="Search Grok Bot pages"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/" className="text-text-2">
            Home
          </Link>
          <Link href="/glossary" className="text-text-2">
            Glossary
          </Link>
        </div>
      </div>
    </Layout>
  );
}
