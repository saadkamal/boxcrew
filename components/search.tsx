"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { normalizeForSearch } from "@/lib/utils";
import type { Content } from "@/content/types";

interface SearchableItem {
  title: string;
  description: string;
  href: string;
  kind: Content["kind"];
}

type FilterKind = "" | "setup" | "skill" | "job" | "industry";

interface SearchProps {
  items: readonly SearchableItem[];
  placeholder?: string;
  heroMode?: boolean;
  initialQuery?: string;
  initialKind?: string;
  onSearchChange?: (q: string, kind: string) => void;
}

const FILTER_CHIPS: { kind: FilterKind; label: string }[] = [
  { kind: "setup", label: "Setup" },
  { kind: "skill", label: "Skill" },
  { kind: "job", label: "Job" },
  { kind: "industry", label: "Industry" },
];

const KIND_LABELS: Record<Content["kind"], string> = {
  setup: "SETUP",
  skill: "SKILL",
  job: "JOB",
  industry: "INDUSTRY",
  page: "PAGE",
};

export function Search({
  items,
  placeholder = "Search...",
  heroMode = false,
  initialQuery = "",
  initialKind = "",
  onSearchChange,
}: SearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeFilter, setActiveFilter] = useState<FilterKind>(
    (initialKind as FilterKind) || ""
  );
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    let filtered = [...items];

    if (activeFilter) {
      filtered = filtered.filter((item) => item.kind === activeFilter);
    }

    if (query.trim()) {
      const normalized = normalizeForSearch(query);
      filtered = filtered.filter(
        (item) =>
          normalizeForSearch(item.title).includes(normalized) ||
          normalizeForSearch(item.description).includes(normalized)
      );
    }

    return filtered.slice(0, 8);
  }, [items, query, activeFilter]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newQuery = e.target.value;
      setQuery(newQuery);
      setIsOpen(true);
      setSelectedIndex(0);
      onSearchChange?.(newQuery, activeFilter);
    },
    [activeFilter, onSearchChange]
  );

  const handleFilterChange = useCallback(
    (filter: FilterKind) => {
      const newFilter = activeFilter === filter ? "" : filter;
      setActiveFilter(newFilter);
      setSelectedIndex(0);
      inputRef.current?.focus();
      onSearchChange?.(query, newFilter);
    },
    [query, activeFilter, onSearchChange]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filteredItems.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
        window.location.href = filteredItems[selectedIndex].href;
      } else if (e.key === "Escape") {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    },
    [filteredItems, selectedIndex]
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };
    document.addEventListener("keydown", handleGlobalKeyDown);
    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  if (heroMode) {
    return (
      <div className="w-full" ref={containerRef}>
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsOpen(true)}
            placeholder={placeholder}
            className="w-full h-14 px-5 pr-20 bg-transparent text-[15px] placeholder:opacity-50 focus:outline-none transition-colors"
            style={{
              border: "1px solid #2A2A2E",
              borderRadius: "8px",
              color: "#F2F0EA",
            }}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <kbd
              className="inline-flex h-6 px-1.5 items-center text-[11px] font-medium rounded"
              style={{ border: "1px solid #2A2A2E", color: "#6E6A62" }}
            >
              ⌘K
            </kbd>
          </div>

          {isOpen && (query || activeFilter) && filteredItems.length > 0 && (
            <div
              className="absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden z-50"
              style={{ backgroundColor: "#0B0B0C", border: "1px solid #2A2A2E" }}
            >
              <div className="max-h-[320px] overflow-y-auto">
                {filteredItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-center gap-4 px-4 py-3 transition-colors"
                    style={{
                      backgroundColor: index === selectedIndex ? "#111112" : "transparent",
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <span
                      className="text-[10px] font-medium tracking-[0.1em] w-16 flex-shrink-0"
                      style={{ color: "#6E6A62" }}
                    >
                      {KIND_LABELS[item.kind]}
                    </span>
                    <span className="text-[14px] truncate" style={{ color: "#A8A49A" }}>
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {isOpen && query && filteredItems.length === 0 && (
            <div
              className="absolute top-full left-0 right-0 mt-2 rounded-lg p-4 text-center z-50"
              style={{ backgroundColor: "#0B0B0C", border: "1px solid #2A2A2E" }}
            >
              <p className="text-[13px]" style={{ color: "#6E6A62" }}>
                No results
              </p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          {FILTER_CHIPS.map((chip) => (
            <button
              key={chip.kind}
              type="button"
              onClick={() => handleFilterChange(chip.kind)}
              className="px-3 py-1.5 text-[12px] rounded-full transition-colors"
              style={{
                border: `1px solid ${activeFilter === chip.kind ? "#E3A53A" : "#2A2A2E"}`,
                color: activeFilter === chip.kind ? "#E3A53A" : "#6E6A62",
              }}
            >
              {chip.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={containerRef}>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsOpen(true)}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 bg-transparent text-[14px] placeholder:opacity-50 focus:outline-none transition-colors"
        style={{
          border: "1px solid #2A2A2E",
          borderRadius: "8px",
          color: "#F2F0EA",
        }}
      />

      {isOpen && query && filteredItems.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden z-50"
          style={{ backgroundColor: "#0B0B0C", border: "1px solid #2A2A2E" }}
        >
          {filteredItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 transition-colors"
              style={{
                backgroundColor: index === selectedIndex ? "#111112" : "transparent",
              }}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span
                className="text-[10px] font-medium tracking-[0.1em]"
                style={{ color: "#6E6A62" }}
              >
                {KIND_LABELS[item.kind]}
              </span>
              <span className="text-[13px] truncate" style={{ color: "#A8A49A" }}>
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
