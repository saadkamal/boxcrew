import Link from "next/link";
import { DISAMBIGUATION_TEXT } from "@/lib/site";

export function StickyDisambiguation() {
  return (
    <div
      className="sticky z-30 border-b border-border"
      style={{
        top: "var(--header-height)",
        backgroundColor: "var(--bg)",
      }}
    >
      <div
        className="mx-auto flex flex-wrap items-center justify-between gap-2 py-2 text-sm"
        style={{
          maxWidth: "var(--page-max)",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
        }}
      >
        <p className="text-text-2">{DISAMBIGUATION_TEXT}</p>
        <Link href="/grok-vs-grok-bot" className="quiet-link whitespace-nowrap">
          Grok vs Grok Bot
        </Link>
      </div>
    </div>
  );
}
