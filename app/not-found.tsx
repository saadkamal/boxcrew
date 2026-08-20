"use client";

import { useState } from "react";
import Link from "next/link";
import { Layout, Search } from "@/components";

export default function NotFound() {
  const [query, setQuery] = useState("");

  return (
    <Layout>
      <div className="py-12" style={{ maxWidth: "var(--blog-measure)" }}>
        <h1 className="mb-4">This page is not in Boxcrew</h1>

        <div className="mb-8">
          <Search value={query} onChange={setQuery} placeholder="Search Boxcrew..." />
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="rounded border border-border px-4 py-2 text-text-2 transition-colors hover:border-accent hover:text-accent hover:no-underline"
          >
            Home
          </Link>
          <Link
            href="/glossary"
            className="rounded border border-border px-4 py-2 text-text-2 transition-colors hover:border-accent hover:text-accent hover:no-underline"
          >
            Glossary
          </Link>
        </div>
      </div>
    </Layout>
  );
}
