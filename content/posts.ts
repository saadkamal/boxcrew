import type { Slug, Kind } from "./types";
import { slug } from "./types";

/**
 * Blog post type definition.
 * Each post has anti-doorway content: body, citations, internalLinks.
 */
export type Post = {
  readonly slug: Slug;
  readonly title: string;
  readonly description: string;
  readonly date: string; // ISO date string YYYY-MM-DD
  readonly cluster: string; // Topic cluster for SEO
  readonly body: string;
  readonly citations: readonly Citation[];
  readonly internalLinks: readonly InternalLink[];
};

export type Citation = {
  readonly title: string;
  readonly url: string;
};

export type InternalLink = {
  readonly kind: Kind;
  readonly slug: Slug;
  readonly label: string;
};

/**
 * Blog posts catalog.
 * Add posts here. Each must have real citations and internal links.
 */
export const posts: readonly Post[] = [
  {
    slug: slug("what-is-grok-bot"),
    title: "What is Grok Bot (Not Grok Chat)",
    description: "Grok Bot is Cursor's agent implementation with skills, plugins, and approval workflows. It is not Grok chat and not Cursor Cloud Agents.",
    date: "2026-08-21",
    cluster: "getting-started",
    body: `Grok Bot is often confused with Grok chat or Cursor Cloud Agents. This post clarifies what Grok Bot actually is and how it differs from other AI tools.

## Grok Bot vs Grok Chat

Grok is a language model from xAI. You can use Grok chat directly on x.ai for general conversation. Grok Bot is different: it's Cursor's structured agent implementation that uses models like Grok to perform specific workflows.

The key differences:

- **Grok chat** is direct model access for conversation
- **Grok Bot** is structured workflows with skills, plugins, and approval rules
- Grok Bot runs in a shared box tied to your Cursor account
- Grok Bot produces reviewable artifacts; it never acts autonomously

## Grok Bot vs Cursor Cloud Agents

Cursor Cloud Agents are a separate product. Grok Bot runs locally in your Cursor desktop with the shared box. Cloud Agents run remotely. Do not confuse them.

## Shared Box Architecture

Grok Bot runs in "the box"—a shared execution environment attached to your Cursor account. All bots on your account share this box. Shared box does not mean isolation between users. If you need isolation, use separate Cursor accounts.

## Account Requirements

Grok Bot requires a Cursor account with one of:
- Ultra subscription
- Teams Premium subscription  
- SuperGrok Heavy subscription

Without one of these, you cannot access Grok Bot features.

## What Grok Bot Does

Grok Bot performs skills—specific capabilities like drafting outreach, matching receipts, or building candidate slates. Each skill produces an artifact for human review. The bot stops at the review list. It never:

- Auto-sends emails or messages
- Auto-spends money
- Auto-publishes content
- Auto-files documents

Every outbound action requires explicit human approval.

## Verified Plugins

Grok Bot connects to external services via plugins:
- Gmail (read/draft)
- Notion (read/write)
- Slack (read/post)

Zoom plugin is currently broken and not recommended.

## Getting Started

If you're new to Grok Bot, start with the Install Plan guide to map out your first workflows, then create your First Bot with one skill.`,
    citations: [
      { title: "Grok Bot Overview", url: "https://docs.x.ai/grok-bot/overview" },
      { title: "Grok Bot Getting Started", url: "https://cursor.com/help/grok-bot/getting-started" },
      { title: "Grok Bot Plugins", url: "https://cursor.com/help/grok-bot/plugins" },
      { title: "Grok Bot Approvals", url: "https://cursor.com/help/grok-bot/approvals" },
    ],
    internalLinks: [
      { kind: "setup", slug: slug("install-plan"), label: "Install Plan guide" },
      { kind: "setup", slug: slug("first-bot"), label: "First Bot setup" },
      { kind: "setup", slug: slug("plugins"), label: "Plugins configuration" },
      { kind: "setup", slug: slug("the-box"), label: "The Box architecture" },
      { kind: "page", slug: slug("grok-vs-grok-bot"), label: "Grok vs Grok Bot comparison" },
    ],
  },
] as const;

export function getPostBySlug(s: string): Post | undefined {
  return posts.find((post) => post.slug === s);
}
