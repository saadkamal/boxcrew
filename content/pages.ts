import type { StaticPage } from "./types";
import { slug } from "./types";

/**
 * Static pages catalog.
 * 2 pages: grok-vs-grok-bot, glossary. Locked slugs per Vera.
 */
export const pages = [
  {
    kind: "page",
    slug: slug("grok-vs-grok-bot"),
    title: "Grok vs Grok Bot",
    description: "Understand the difference between Grok (the model) and Grok Bot (the Cursor agent).",
    body: `Grok is a language model from xAI. Grok Bot is Cursor's agent implementation that uses models like Grok.

**Grok (the model)**

Grok is the underlying AI model. It powers various applications through APIs. You might use Grok chat directly on x.ai or through other interfaces.

**Grok Bot (the agent)**

Grok Bot is what you configure in Cursor. It's the agent with skills, plugins, routines, and approval workflows. The bot runs in a shared box tied to your Cursor account (Ultra, Teams Premium, or SuperGrok Heavy required).

**Key differences**

- Grok chat is direct model access. Grok Bot is structured workflows.
- Grok Bot has plugins (Gmail, Notion, Slack). Grok chat does not.
- Grok Bot produces reviewable artifacts. Every action requires approval.
- Grok Bot runs in a shared box. Not isolated between users.

Grok Bot is not Cursor Cloud Agents—those are different.

**Affiliation**

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI. This is an independent resource.`,
  },
  {
    kind: "page",
    slug: slug("glossary"),
    title: "Glossary",
    description: "Key terms and concepts for Grok Bot users.",
    body: `**Bot**

A configured Grok Bot instance with skills, plugins, and approval rules. Runs in the shared box with your Cursor account.

**Skill**

A specific capability a bot can perform. Skills produce artifacts for human review. Example: ICP Outreach Drafts.

**Routine**

A scheduled skill execution. Routines run automatically but queue outputs for human review. Master the skill before automating.

**The Box**

The shared execution environment. All bots on your Cursor account share the same box. Shared box does not mean isolation between users.

**Plugin**

A connection to an external service. Verified plugins: Gmail, Notion, Slack. Zoom is broken.

**MCP**

Model Context Protocol. Lets Grok Bot connect to external tools. Remote MCP requires public HTTPS endpoints.

**Approval**

Human sign-off before outbound actions. Grok Bot never auto-sends, auto-spends, auto-publishes, or auto-files.

**Artifact**

The output of a skill. Drafts, reports, recommendations. Humans review before action.

**Cursor Account**

Required for Grok Bot. Ultra, Teams Premium, or SuperGrok Heavy subscription needed.

**Anti-doorway**

Content requirements for skills and jobs: outcome, sources, artifact, reviewable artifact, approval rule, stale data rule.`,
  },
] as const satisfies readonly StaticPage[];
