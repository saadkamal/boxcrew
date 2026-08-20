import type { StaticPage } from "./types";
import { slug } from "./types";

export const pages = [
  {
    kind: "page",
    slug: slug("home"),
    title: "Boxcrew",
    description: "Grok Bot use-case directory. Skills, jobs, and setup guides.",
    sections: [
      {
        heading: "What is Boxcrew?",
        content: "Boxcrew is a use-case directory for Grok Bot. Browse skills (specific capabilities), jobs (role archetypes), and setup guides to get the most out of your Grok Bot.",
      },
      {
        heading: "Getting Started",
        content: "Start with the Setup section to configure your first bot. Then explore Skills to see what Grok Bot can do, or browse Jobs to find role-based workflows for your team.",
      },
      {
        heading: "Key Principles",
        content: "Never auto-send, auto-spend, or auto-publish. Every outbound action requires human approval. Grok Bot is your research assistant, draft generator, and data organizer.",
      },
    ],
  },
  {
    kind: "page",
    slug: slug("grok-vs-grok-bot"),
    title: "Grok vs Grok Bot",
    description: "Understand the difference between Grok (the model) and Grok Bot (the Cursor agent).",
    sections: [
      {
        heading: "Grok (the model)",
        content: "Grok is an AI language model created by xAI. It powers various applications and can be accessed through different interfaces. The model itself is the underlying intelligence.",
      },
      {
        heading: "Grok Bot (the agent)",
        content: "Grok Bot is Cursor's implementation of an AI agent that uses models like Grok. It runs on a shared box complete with plugins, skills, routines, and approval workflows.",
      },
      {
        heading: "Why it matters",
        content: "When configuring Grok Bot, you're setting up the agent's behavior: what it can access, how it responds, and what approvals it requires. The model provides the intelligence; the bot provides the structure and guardrails.",
      },
      {
        heading: "Affiliation notice",
        content: "Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI. This is an independent resource for Grok Bot users.",
      },
    ],
  },
  {
    kind: "page",
    slug: slug("glossary"),
    title: "Glossary",
    description: "Key terms and concepts for Grok Bot users.",
    sections: [
      {
        heading: "Bot",
        content: "A configured instance of Grok Bot with specific skills, data sources, and approval settings.",
      },
      {
        heading: "Skill",
        content: "A specific capability a bot can perform, like drafting outreach or matching receipts.",
      },
      {
        heading: "Routine",
        content: "A scheduled execution of skills that runs automatically but queues outputs for human review.",
      },
      {
        heading: "Box",
        content: "The shared execution environment where Bots run with shared files, cookies, and CLI credentials.",
      },
      {
        heading: "Plugin",
        content: "A connection to an external service: Gmail, Notion, or Slack (Zoom is broken).",
      },
      {
        heading: "MCP",
        content: "Model Context Protocol for connecting to external tools via public HTTPS endpoints.",
      },
      {
        heading: "Cloud Agent",
        content: "A Cursor agent that runs in the cloud, separate from your local Cursor instance.",
      },
      {
        heading: "Teach a Task",
        content: "Document a manual task as a repeatable bot instruction for training bots or team members.",
      },
      {
        heading: "Auto-review",
        content: "Rules that automatically pass, flag, or reject content before human review.",
      },
    ],
  },
] as const satisfies readonly StaticPage[];

export function getPageBySlug(s: string): StaticPage | undefined {
  return pages.find((page) => page.slug === s);
}
