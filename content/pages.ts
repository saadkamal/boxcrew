import type { Page } from "./types";

/**
 * Standalone pages catalog.
 * Home, Grok vs Grok Bot comparison, and Glossary.
 */
export const pages: readonly Page[] = [
  {
    kind: "page",
    slug: "home",
    title: "Boxcrew",
    description: "Grok Bot use-case directory. Skills, jobs, and setup guides.",
    sections: [
      {
        heading: "What is Boxcrew?",
        content: "Boxcrew is a use-case directory for Grok Bot—the AI assistant built into Cursor. Browse skills (specific capabilities), jobs (role archetypes), and setup guides to get the most out of your Grok Bot.",
      },
      {
        heading: "Getting Started",
        content: "Start with the Setup section to configure your first bot. Then explore Skills to see what Grok Bot can do, or browse Jobs to find role-based workflows for your team.",
      },
      {
        heading: "Key Principles",
        content: "Never auto-send, auto-spend, or auto-publish. Every outbound action requires human approval. Grok Bot is your research assistant, draft generator, and data organizer—not an autonomous actor.",
      },
    ],
  },
  {
    kind: "page",
    slug: "grok-vs-grok-bot",
    title: "Grok vs Grok Bot",
    description: "Understand the difference between Grok (the model) and Grok Bot (the Cursor agent).",
    sections: [
      {
        heading: "Grok (the model)",
        content: "Grok is an AI language model created by xAI. It powers various applications and can be accessed through different interfaces. The model itself is the underlying intelligence.",
      },
      {
        heading: "Grok Bot (the agent)",
        content: "Grok Bot is Cursor's implementation of an AI agent that uses models like Grok. It's the interface you interact with in Cursor, complete with plugins, skills, routines, and approval workflows.",
      },
      {
        heading: "Why it matters",
        content: "When configuring Grok Bot, you're setting up the agent's behavior—what it can access, how it responds, and what approvals it requires. The model provides the intelligence; the bot provides the structure and guardrails.",
      },
      {
        heading: "Affiliation notice",
        content: "Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI. This is an independent resource for Grok Bot users.",
      },
    ],
  },
  {
    kind: "page",
    slug: "glossary",
    title: "Glossary",
    description: "Key terms and concepts for Grok Bot users.",
    sections: [
      {
        heading: "Bot",
        content: "A configured instance of Grok Bot with specific skills, data sources, and approval settings.",
      },
      {
        heading: "Skill",
        content: "A specific capability a bot can perform, like drafting outreach or matching receipts. Skills are modular and can be combined.",
      },
      {
        heading: "Routine",
        content: "A scheduled execution of one or more skills. Routines run automatically but queue outputs for human review.",
      },
      {
        heading: "The Box",
        content: "The shared execution environment for Grok Bot. Note: shared box does not provide isolation between users.",
      },
      {
        heading: "Plugin",
        content: "A connection to an external service (Gmail, Notion, Slack). Zoom plugin is currently broken.",
      },
      {
        heading: "MCP (Model Context Protocol)",
        content: "A protocol for connecting to external tools and data sources. Remote MCP requires public HTTPS endpoints.",
      },
      {
        heading: "Approval",
        content: "Human sign-off required before a bot takes an outbound action. Never auto-send, auto-spend, or auto-publish.",
      },
      {
        heading: "Artifact",
        content: "The output of a skill—a draft, report, or recommendation—that humans review before action.",
      },
    ],
  },
] as const;

export function getPageBySlug(slug: string): Page | undefined {
  return pages.find((page) => page.slug === slug);
}
