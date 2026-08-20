import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-foreground-subtle">
            Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/grok-vs-grok-bot"
              className="text-caption text-foreground-subtle hover:text-foreground-muted"
            >
              Grok vs Grok Bot
            </Link>
            <Link
              href="/glossary"
              className="text-caption text-foreground-subtle hover:text-foreground-muted"
            >
              Glossary
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
