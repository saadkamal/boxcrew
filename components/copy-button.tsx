"use client";

import { useState, useCallback } from "react";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy text");
    }
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="text-xs px-3 py-1.5 bg-card border border-border rounded hover:border-accent transition-colors"
      type="button"
    >
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
