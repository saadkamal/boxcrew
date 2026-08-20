"use client";

interface FilterChipsProps {
  selected: string | null;
  onSelect: (kind: string | null) => void;
}

const KINDS = ["setup", "skill", "job", "industry"] as const;

const LABELS: Record<(typeof KINDS)[number], string> = {
  setup: "Setup",
  skill: "Skill",
  job: "Job",
  industry: "Industry",
};

export function FilterChips({ selected, onSelect }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter by type">
      {KINDS.map((kind) => {
        const isPressed = selected === kind;
        return (
          <button
            key={kind}
            type="button"
            onClick={() => onSelect(isPressed ? null : kind)}
            aria-pressed={isPressed}
            className="border px-3 text-sm transition-colors"
            style={{
              height: "var(--chip-height)",
              borderRadius: 9999,
              borderColor: isPressed ? "var(--accent)" : "var(--border)",
              backgroundColor: isPressed ? "var(--accent-muted)" : "transparent",
              color: isPressed ? "var(--accent)" : "var(--text-2)",
            }}
          >
            {LABELS[kind]}
          </button>
        );
      })}
      {selected && (
        <button
          type="button"
          onClick={() => onSelect(null)}
          className="border px-3 text-sm text-text-3 transition-colors hover:text-text-2"
          style={{
            height: "var(--chip-height)",
            borderRadius: 9999,
            borderColor: "var(--border)",
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
}
