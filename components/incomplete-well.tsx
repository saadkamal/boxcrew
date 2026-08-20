interface IncompleteWellProps {
  missingFields: string[];
}

export function IncompleteWell({ missingFields }: IncompleteWellProps) {
  if (missingFields.length === 0) return null;

  return (
    <div
      className="rounded border p-4"
      style={{
        borderColor: "var(--danger)",
        backgroundColor: "rgba(226, 106, 106, 0.08)",
      }}
    >
      <p className="mb-2 text-sm font-medium" style={{ color: "var(--danger)" }}>
        Incomplete content
      </p>
      <ul className="list-inside list-disc space-y-1 text-sm text-text-2">
        {missingFields.map((field) => (
          <li key={field}>Missing: {field}</li>
        ))}
      </ul>
    </div>
  );
}
