import type { SetupGuide } from "./types";

/**
 * Setup guides catalog.
 * 8 guides covering Grok Bot configuration and usage.
 */
export const setupGuides: readonly SetupGuide[] = [
  {
    kind: "setup",
    slug: "install-plan",
    title: "Install Plan",
    description: "Map out your Grok Bot installation before you start.",
    prerequisites: [
      "Cursor account (required for Grok Bot access)",
      "Clear understanding of your team's workflows",
    ],
    steps: [
      "Identify 2-3 workflows you want to automate first",
      "List the data sources each workflow needs (Gmail, Notion, Slack)",
      "Determine who will review bot outputs",
      "Set up a test workspace separate from production",
      "Schedule weekly review for first month",
    ],
    troubleshooting: [
      "If unsure which workflows to start with, pick the most repetitive one",
      "If you lack data source access, coordinate with IT first",
    ],
  },
  {
    kind: "setup",
    slug: "first-bot",
    title: "First Bot",
    description: "Create and configure your first Grok Bot instance.",
    prerequisites: [
      "Cursor account",
      "Completed install plan",
    ],
    steps: [
      "Open Cursor and navigate to Grok Bot settings",
      "Click 'Create New Bot'",
      "Choose a descriptive name (e.g., 'Sales-Outbound-Draft')",
      "Select initial skill from the library",
      "Configure data source connections",
      "Run a test task with sample data",
      "Review the output before enabling for real work",
    ],
    troubleshooting: [
      "Bot not appearing? Check your Cursor subscription includes Grok Bot",
      "Connection failed? Verify OAuth permissions for each data source",
    ],
  },
  {
    kind: "setup",
    slug: "plugins",
    title: "Plugins",
    description: "Connect Gmail, Notion, and Slack to your Grok Bot.",
    prerequisites: [
      "Active Grok Bot instance",
      "Admin access to Gmail, Notion, or Slack workspaces",
    ],
    steps: [
      "Go to Bot Settings > Plugins",
      "Click 'Add Plugin' and select from available options",
      "For Gmail: Complete OAuth flow with Google account",
      "For Notion: Authorize workspace access and select pages",
      "For Slack: Install Grok Bot app to workspace, select channels",
      "Test each connection with a read-only operation first",
    ],
    troubleshooting: [
      "Gmail: If OAuth fails, check if admin has allowed third-party apps",
      "Notion: Ensure bot has access to specific pages/databases you need",
      "Slack: Verify the app is installed to the correct workspace",
      "Note: Zoom plugin is currently broken and not recommended",
    ],
  },
  {
    kind: "setup",
    slug: "the-box",
    title: "The Box",
    description: "Understand shared boxes and why they don't provide isolation.",
    prerequisites: [
      "Basic understanding of Grok Bot architecture",
    ],
    steps: [
      "Understand that 'the box' is a shared execution environment",
      "Recognize that shared box does NOT mean isolation between users",
      "Configure appropriate access controls at the data source level",
      "Use separate bots for sensitive vs. non-sensitive workflows",
      "Document which team members have access to which bots",
    ],
    troubleshooting: [
      "If you need true isolation, use separate Cursor accounts",
      "For compliance requirements, consult your security team about data handling",
    ],
  },
  {
    kind: "setup",
    slug: "skill-then-routine",
    title: "Skill Then Routine",
    description: "Master a skill before automating it into a routine.",
    prerequisites: [
      "Working bot with at least one skill",
    ],
    steps: [
      "Run the skill manually 10+ times",
      "Review every output carefully",
      "Note edge cases and failure modes",
      "Adjust prompts based on observed issues",
      "Only then convert to a scheduled routine",
      "Start with weekly frequency, increase gradually",
    ],
    troubleshooting: [
      "If outputs are inconsistent, the skill needs more refinement",
      "If you're surprised by outputs, you're not ready for automation",
    ],
  },
  {
    kind: "setup",
    slug: "approvals",
    title: "Approvals",
    description: "Set up human-in-the-loop approval workflows.",
    prerequisites: [
      "Bot with skills configured",
      "Slack or email for notifications",
    ],
    steps: [
      "Identify which actions require approval (never auto-send, auto-spend, or auto-publish)",
      "Configure approval notifications to Slack or email",
      "Set up approval timeouts (default: 24 hours)",
      "Define escalation paths for urgent items",
      "Train reviewers on what to look for",
    ],
    troubleshooting: [
      "Approval backlog building up? Reduce routine frequency",
      "Reviewers missing notifications? Add redundant channels",
    ],
  },
  {
    kind: "setup",
    slug: "remote-mcp",
    title: "Remote MCP",
    description: "Connect to external MCP servers over public HTTPS.",
    prerequisites: [
      "MCP server with public HTTPS endpoint",
      "API credentials for the MCP server",
    ],
    steps: [
      "Obtain the public HTTPS URL for your MCP server",
      "Navigate to Bot Settings > MCP Connections",
      "Add new connection with the HTTPS URL",
      "Configure authentication (API key or OAuth)",
      "Test connection with a read-only operation",
      "Map MCP tools to bot skills",
    ],
    troubleshooting: [
      "Connection timeout? Verify the HTTPS endpoint is publicly accessible",
      "Auth errors? Check API key/token expiration",
      "Note: Only public HTTPS endpoints work; internal/VPN endpoints are not supported",
    ],
  },
  {
    kind: "setup",
    slug: "roster-group-ios",
    title: "Roster Group iOS",
    description: "Manage bot access and permissions for iOS team members.",
    prerequisites: [
      "Cursor workspace with team members",
      "Admin access to configure roster",
    ],
    steps: [
      "Go to Workspace Settings > Roster",
      "Create a group for iOS team",
      "Add team members by email",
      "Assign bots to the group",
      "Configure group-level permissions",
      "Set up audit logging for the group",
    ],
    troubleshooting: [
      "Member not receiving access? Check email matches their Cursor account",
      "Permission denied? Verify group has bot assignment",
    ],
  },
] as const;

export function getSetupGuideBySlug(slug: string): SetupGuide | undefined {
  return setupGuides.find((guide) => guide.slug === slug);
}
