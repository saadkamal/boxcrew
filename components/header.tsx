"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface HeaderProps {
  onOpenPalette: () => void;
}

export function Header({ onOpenPalette }: HeaderProps) {
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(navigator.platform.toLowerCase().includes("mac"));
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (
        (e.target as HTMLElement)?.tagName === "INPUT" ||
        (e.target as HTMLElement)?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        onOpenPalette();
      }
      if (e.key === "/" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        onOpenPalette();
      }
    },
    [onOpenPalette]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <header
      className="sticky top-0 z-40 border-b border-border"
      style={{
        height: "var(--header-height)",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        className="mx-auto flex h-full items-center justify-between"
        style={{
          maxWidth: "var(--page-max)",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
        }}
      >
        <Link href="/" className="wordmark text-lg">
          Boxcrew
        </Link>

        <button
          type="button"
          onClick={onOpenPalette}
          className="flex items-center gap-2 rounded border border-border px-3 transition-colors hover:border-text-3"
          style={{
            height: "var(--copy-btn-size)",
            backgroundColor: "var(--bg-input)",
          }}
          aria-label="Open command palette"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="text-text-3"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="M10.5 10.5L14 14" strokeLinecap="round" />
          </svg>
          <span
            className="hidden items-center gap-1 text-xs text-text-3 sm:flex"
            aria-hidden="true"
          >
            <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">
              {isMac ? "⌘" : "Ctrl"}
            </kbd>
            <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px]">
              K
            </kbd>
          </span>
        </button>
      </div>
    </header>
  );
}
