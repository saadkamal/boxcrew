"use client";

import { useState, useCallback } from "react";

interface CopyBlockProps {
  text: string;
}

type CopyState = "idle" | "copied" | "failed";

export function CopyBlock({ text }: CopyBlockProps) {
  const [state, setState] = useState<CopyState>("idle");

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setState("copied");
      setTimeout(() => setState("idle"), 2000);
    } catch {
      setState("failed");
    }
  }, [text]);

  const buttonLabel =
    state === "idle"
      ? "Copy."
      : state === "copied"
        ? "Copied."
        : "Could not copy.";

  const buttonColor =
    state === "idle"
      ? "var(--text-2)"
      : state === "copied"
        ? "var(--success)"
        : "var(--danger)";

  return (
    <div className="relative">
      <pre
        className="overflow-x-auto whitespace-pre-wrap rounded border border-border p-4 font-mono text-sm"
        style={{ backgroundColor: "var(--bg-raised)" }}
      >
        <code className="block bg-transparent p-0">{text}</code>
      </pre>
      <div className="mt-2 flex items-start justify-between gap-2">
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1 rounded border border-border px-2 text-sm transition-colors hover:border-text-3"
          style={{
            height: "var(--copy-btn-size)",
            color: buttonColor,
            backgroundColor: "var(--bg-input)",
          }}
        >
          {buttonLabel}
        </button>
        {state === "failed" && (
          <p className="text-sm" style={{ color: "var(--danger)" }}>
            Select the block and copy it yourself.
          </p>
        )}
      </div>
    </div>
  );
}
