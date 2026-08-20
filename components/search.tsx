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

type FilterKind = "all" | "setup" | "skill" | "job" | "industry";

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
  const containerRef = useRef<HTMLDivElement>(null);

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
    
    return filtered.slice(0, 8);
  }, [items, query, activeFilter]);

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

  const availableFilters: FilterKind[] = ["all", "setup", "skill", "job", "industry"];

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
            className="w-full h-14 px-5 pr-20 bg-transparent border border-border rounded-lg text-[15px] text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-foreground-subtle transition-colors"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <kbd className="inline-flex h-6 px-1.5 items-center text-[11px] font-medium text-foreground-subtle border border-border rounded">
              ⌘K
            </kbd>
          </div>
          
          {isOpen && (query || activeFilter !== "all") && filteredItems.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg overflow-hidden z-50">
              <div className="max-h-[320px] overflow-y-auto">
                {filteredItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 px-4 py-3 transition-colors ${
                      index === selectedIndex ? "bg-surface" : ""
                    }`}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <span className="text-[10px] font-medium tracking-[0.1em] text-foreground-subtle w-16 flex-shrink-0">
                      {KIND_LABELS[item.kind]}
                    </span>
                    <span className="text-[14px] text-foreground-muted truncate">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
          
          {isOpen && query && filteredItems.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg p-4 text-center z-50">
              <p className="text-[13px] text-foreground-subtle">No results</p>
            </div>
          )}
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-4">
          {availableFilters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => {
                setActiveFilter(filter);
                setSelectedIndex(0);
                inputRef.current?.focus();
              }}
              className={`px-3 py-1.5 text-[12px] rounded-full border transition-colors ${
                activeFilter === filter
                  ? "border-accent text-accent"
                  : "border-border text-foreground-subtle hover:text-foreground-muted hover:border-foreground-subtle"
              }`}
            >
              {FILTER_LABELS[filter]}
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
        className="w-full px-4 py-2.5 bg-transparent border border-border rounded-lg text-[14px] text-foreground placeholder:text-foreground-subtle focus:outline-none focus:border-foreground-subtle transition-colors"
      />
      
      {isOpen && query && filteredItems.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg overflow-hidden z-50">
          {filteredItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 transition-colors ${
                index === selectedIndex ? "bg-surface" : ""
              }`}
              onMouseEnter={() => setSelectedIndex(index)}
            >
              <span className="text-[10px] font-medium tracking-[0.1em] text-foreground-subtle">
                {KIND_LABELS[item.kind]}
              </span>
              <span className="text-[13px] text-foreground-muted truncate">
                {item.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
