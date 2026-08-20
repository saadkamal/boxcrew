import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/grok-vs-grok-bot"
              className="text-sm text-muted hover:text-foreground"
            >
              Grok vs Grok Bot
            </Link>
            <Link
              href="/glossary"
              className="text-sm text-muted hover:text-foreground"
            >
              Glossary
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
