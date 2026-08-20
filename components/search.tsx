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

type FilterKind = "all" | Content["kind"];

interface SearchProps {
  items: readonly SearchableItem[];
  placeholder?: string;
  heroMode?: boolean;
}

const FILTER_LABELS: Record<FilterKind, string> = {
  all: "All",
  setup: "Guides",
  skill: "Skills",
  job: "Jobs",
  industry: "Industries",
  page: "Pages",
};

const KIND_LABELS: Record<Content["kind"], string> = {
  setup: "GUIDE",
  skill: "SKILL",
  job: "JOB",
  industry: "INDUSTRY",
  page: "PAGE",
};

export function Search({ items, placeholder = "Search...", heroMode = false }: SearchProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterKind>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const filteredItems = useMemo(() => {
    let filtered = [...items];
    
    if (activeFilter !== "all") {
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
    
    return filtered.slice(0, heroMode ? 8 : 50);
  }, [items, query, activeFilter, heroMode]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setSelectedIndex(0);
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
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
  }, [filteredItems, selectedIndex]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (resultsRef.current && !resultsRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const availableFilters: FilterKind[] = ["all", "setup", "skill", "job", "industry"];

  if (heroMode) {
    return (
      <div className="w-full max-w-2xl mx-auto" ref={resultsRef}>
        <div className="relative">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsOpen(true)}
              placeholder={placeholder}
              className="w-full h-14 px-5 pr-24 bg-surface border border-border rounded-xl text-foreground text-base placeholder:text-foreground-subtle focus:outline-none focus:border-foreground-subtle transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
              <kbd className="hidden sm:inline-flex h-6 px-2 items-center text-[0.6875rem] font-medium text-foreground-subtle bg-surface-elevated border border-border rounded">
                ⌘K
              </kbd>
            </div>
          </div>
          
          {isOpen && (query || activeFilter !== "all") && filteredItems.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-xl overflow-hidden shadow-2xl shadow-black/20 z-50 animate-fade-in">
              <div className="max-h-80 overflow-y-auto">
                {filteredItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-3 transition-colors ${
                      index === selectedIndex
                        ? "bg-surface-elevated"
                        : "hover:bg-surface-elevated"
                    }`}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-label">{KIND_LABELS[item.kind]}</span>
                      <span className="text-small text-foreground font-medium truncate">
                        {item.title}
                      </span>
                    </div>
                    <p className="mt-0.5 text-caption text-foreground-subtle truncate pl-12">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {isOpen && query && filteredItems.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-surface border border-border rounded-xl p-6 text-center shadow-2xl shadow-black/20 z-50">
              <p className="text-small text-foreground-subtle">No results for &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
          {availableFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setSelectedIndex(0);
              }}
              className={`chip ${activeFilter === filter ? "chip-active" : ""}`}
            >
              {FILTER_LABELS[filter]}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4" ref={resultsRef}>
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full px-4 py-2.5 bg-surface border border-border rounded-lg text-foreground text-small placeholder:text-foreground-subtle focus:outline-none focus:border-foreground-subtle transition-colors"
        />
      </div>
      
      {query && (
        <p className="text-caption text-foreground-subtle">
          {filteredItems.length} result{filteredItems.length !== 1 ? "s" : ""}
        </p>
      )}
      
      {isOpen && filteredItems.length > 0 && (
        <div className="space-y-1">
          {filteredItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2.5 rounded-lg transition-colors ${
                index === selectedIndex
                  ? "bg-surface-elevated"
                  : "hover:bg-surface"
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <div className="flex items-center gap-2">
                <span className="text-label">{KIND_LABELS[item.kind]}</span>
                <span className="text-small text-foreground font-medium">
                  {item.title}
                </span>
              </div>
              <p className="mt-0.5 text-caption text-foreground-subtle line-clamp-1">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
