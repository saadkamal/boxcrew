import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
        <p className="text-[12px] text-foreground-subtle">
          Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
        </p>
        <div className="flex items-center gap-6">
          <Link href="/grok-vs-grok-bot" className="text-[12px] text-foreground-subtle hover:text-foreground-muted">
            Grok vs Grok Bot
          </Link>
          <Link href="/glossary" className="text-[12px] text-foreground-subtle hover:text-foreground-muted">
            Glossary
          </Link>
        </div>
      </div>
    </footer>
  );
}
