import { OFFICIAL_DOCS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div
        className="mx-auto py-6"
        style={{
          maxWidth: "var(--page-max)",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
        }}
      >
        <p className="mb-3 text-sm text-text-3">
          Not affiliated with Cursor, xAI, or SpaceXAI.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-text-3">
          <a
            href={OFFICIAL_DOCS.grokBot}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Grok Bot Docs
          </a>
          <a
            href={OFFICIAL_DOCS.plans}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Plans
          </a>
          <a
            href={OFFICIAL_DOCS.onboarding}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Onboarding
          </a>
        </div>
      </div>
    </footer>
  );
}
