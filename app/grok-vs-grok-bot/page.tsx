import type { Metadata } from "next";
import Link from "next/link";
import { Layout } from "@/components";
import { collisionTableJsonLd, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Grok vs Grok Bot",
  description:
    "Grok chat, Grok Bot, and Cursor Cloud Agents are three different products. Grok Bot is named desktop and iOS teammates that share one box.",
  path: "/grok-vs-grok-bot",
});

const COLUMNS = [
  {
    name: "Grok chat",
    body: "xAI chat assistant on grok.com and X. A conversation. No named roster, skills, routines, or box.",
  },
  {
    name: "Grok Bot",
    body: "Named teammates on Cursor desktop and iOS 18. They share one cloud Linux computer: browser, files, terminal.",
  },
  {
    name: "Cursor Cloud Agents",
    body: "Isolated coding VMs. Each run clones a repo, works a branch, and opens a pull request. Not a shared box.",
  },
] as const;

export default function GrokVsGrokBotPage() {
  const jsonLd = collisionTableJsonLd();

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="interior-stack" style={{ maxWidth: "var(--page-max)" }}>
        <header style={{ maxWidth: "var(--prose-max)" }}>
          <h1>Grok, Grok Bot, Cloud Agents</h1>
          <p className="mt-4 text-text-2">
            Three products. One messy name. Grok Bot is the desktop and iOS
            teammate product, not a chat window and not a coding VM.
          </p>
        </header>

        <section>
          <div className="grid gap-8 md:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.name} className="border-t border-border pt-4">
                <h2>{col.name}</h2>
                <p className="mt-3 text-text-2">{col.body}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-text-2" style={{ maxWidth: "var(--prose-max)" }}>
          <Link href="/blog/grok-bot-vs-grok">
            Long answer → /blog/grok-bot-vs-grok
          </Link>
        </p>
      </article>
    </Layout>
  );
}
