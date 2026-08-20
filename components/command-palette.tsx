"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { setupGuides, skills, jobs, industries, blogPosts } from "@/content";

interface PaletteItem {
  title: string;
  href: string;
  group: string;
}

const GROUPS = [
  "Setup",
  "Skills",
  "Jobs",
  "Industries",
  "Collision/Glossary",
  "Blog",
] as const;

function buildItems(): PaletteItem[] {
  const items: PaletteItem[] = [];

  setupGuides.forEach((g) => {
    items.push({ title: g.title, href: `/setup/${g.slug}`, group: "Setup" });
  });

  skills.forEach((s) => {
    items.push({ title: s.title, href: `/skills/${s.slug}`, group: "Skills" });
  });

  jobs.forEach((j) => {
    items.push({ title: j.title, href: `/jobs/${j.slug}`, group: "Jobs" });
  });

  industries.forEach((i) => {
    items.push({
      title: i.title,
      href: `/industries/${i.slug}`,
      group: "Industries",
    });
  });

  items.push({
    title: "Grok vs Grok Bot",
    href: "/grok-vs-grok-bot",
    group: "Collision/Glossary",
  });
  items.push({
    title: "Glossary",
    href: "/glossary",
    group: "Collision/Glossary",
  });

  items.push({
    title: "Blog",
    href: "/blog",
    group: "Blog",
  });

  blogPosts.forEach((p) => {
    items.push({ title: p.title, href: `/blog/${p.slug}`, group: "Blog" });
  });

  return items;
}

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const allItems = useMemo(() => buildItems(), []);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const q = query.toLowerCase();
    return allItems.filter((item) => item.title.toLowerCase().includes(q));
  }, [allItems, query]);

  const groupedItems = useMemo(() => {
    const groups: Record<string, PaletteItem[]> = {};
    GROUPS.forEach((g) => {
      groups[g] = [];
    });
    filteredItems.forEach((item) => {
      if (groups[item.group]) {
        groups[item.group].push(item);
      }
    });
    return groups;
  }, [filteredItems]);

  const flatFiltered = useMemo(() => {
    const result: PaletteItem[] = [];
    GROUPS.forEach((g) => {
      result.push(...groupedItems[g]);
    });
    return result;
  }, [groupedItems]);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = useCallback(
    (item: PaletteItem) => {
      router.push(item.href);
      onClose();
    },
    [router, onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, flatFiltered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && flatFiltered[selectedIndex]) {
        handleSelect(flatFiltered[selectedIndex]);
      }
    },
    [flatFiltered, selectedIndex, handleSelect, onClose]
  );

  if (!isOpen) return null;

  let itemIndex = -1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 sm:pt-32"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="flex max-h-[80vh] w-full flex-col overflow-hidden border border-border sm:max-h-[60vh]"
        style={{
          maxWidth: "var(--palette-width)",
          borderRadius: "var(--palette-radius)",
          backgroundColor: "var(--bg-raised)",
          boxShadow: "var(--shadow-palette)",
        }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div className="border-b border-border p-3">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search pages..."
            className="w-full border-none bg-transparent text-text outline-none placeholder:text-text-3"
            style={{ fontSize: "15px" }}
            aria-label="Search"
          />
        </div>

        <div
          className="flex-1 overflow-y-auto p-2"
          role="listbox"
          aria-label="Search results"
        >
          {flatFiltered.length === 0 ? (
            <p className="px-3 py-4 text-sm text-text-3">No results found.</p>
          ) : (
            GROUPS.map((group) => {
              const groupItems = groupedItems[group];
              if (groupItems.length === 0) return null;
              return (
                <div key={group} className="mb-2">
                  <div className="px-3 py-1 text-xs font-medium uppercase tracking-wide text-text-3">
                    {group}
                  </div>
                  {groupItems.map((item) => {
                    itemIndex++;
                    const isSelected = itemIndex === selectedIndex;
                    return (
                      <button
                        key={item.href}
                        type="button"
                        onClick={() => handleSelect(item)}
                        className="flex w-full items-center rounded px-3 py-2 text-left text-sm text-text transition-colors"
                        style={{
                          backgroundColor: isSelected
                            ? "var(--accent-muted)"
                            : "transparent",
                        }}
                        role="option"
                        aria-selected={isSelected}
                      >
                        {item.title}
                      </button>
                    );
                  })}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
