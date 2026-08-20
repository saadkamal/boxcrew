"use client";

import { useCallback } from "react";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function Search({
  value,
  onChange,
  placeholder = "chief of staff, account health, install",
}: SearchProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="relative">
      <input
        type="search"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full border border-border px-4 text-text outline-none placeholder:text-text-3 focus:border-border-focus"
        style={{
          height: "var(--search-height)",
          backgroundColor: "var(--bg-input)",
          borderRadius: 0,
        }}
        aria-label="Search Grok Bot pages"
      />
    </div>
  );
}
