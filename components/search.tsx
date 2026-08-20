"use client";

import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { normalizeForSearch } from "@/lib/utils";
import type { Content } from "@/content/types";

interface SearchableItem {
  title: string;
  description: string;
  href: string;
  kind: Content["kind"];
}

interface SearchProps {
  items: readonly SearchableItem[];
  placeholder?: string;
}

export function Search({ items, placeholder = "Search..." }: SearchProps) {
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const normalized = normalizeForSearch(query);
    return items.filter(
      (item) =>
        normalizeForSearch(item.title).includes(normalized) ||
        normalizeForSearch(item.description).includes(normalized)
    );
  }, [items, query]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-card border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent"
      />
      {query && (
        <p className="text-sm text-muted">
          {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""}
        </p>
      )}
      <div className="space-y-2">
        {filteredItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block p-3 bg-card border border-border rounded hover:border-accent transition-colors hover:no-underline group"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs px-1.5 py-0.5 bg-border rounded text-muted">
                {item.kind}
              </span>
              <span className="font-medium text-foreground group-hover:text-accent">
                {item.title}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted line-clamp-1">
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
