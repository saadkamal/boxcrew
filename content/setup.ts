import type { Setup } from "./types";
import { slug } from "./types";

export const setupGuides = [
  {
    kind: "setup",
    slug: slug("install-plan"),
    title: "Install Plan",
    description: "Map out your Grok Bot installation before you start.",
    steps: [
      {
        title: "Identify workflows",
        body: "Pick 2-3 workflows you want to automate first. Focus on repetitive tasks where the output can be reviewed.",
      },
      {
        title: "List data sources",
        body: "For each workflow, list the data sources needed (Gmail, Notion, Slack). Verify you have access or know who does.",
      },
      {
        title: "Determine reviewers",
        body: "Decide who will review bot outputs. Every outbound action needs human approval.",
      },
      {
        title: "Set up test workspace",
        body: "Create a test workspace separate from production. Use sample data for initial runs.",
      },
      {
        title: "Schedule reviews",
        body: "Plan weekly reviews for the first month. Track what works and what needs adjustment.",
      },
    ],
    endState: "A documented plan with target workflows, data sources, reviewers, and a test workspace ready for your first bot.",
    commonMiss: "Starting with production data before validating the workflow in a test environment.",
    officialDocs: [
      "https://cursor.com/bot/onboarding",
    ],
    related: [
      { kind: "setup", slug: slug("first-bot") },
      { kind: "setup", slug: slug("plugins") },
      { kind: "job", slug: slug("chief-of-staff") },
    ],
  },
  {
    kind: "setup",
    slug: slug("first-bot"),
    title: "First Bot",
    description: "Create and configure your first Grok Bot instance.",
    steps: [
      {
        title: "Open Grok Bot settings",
        body: "In Cursor, navigate to the Grok Bot settings panel.",
      },
      {
        title: "Create new bot",
        body: "Click 'Create New Bot' and choose a descriptive name (e.g., 'Sales-Outbound-Draft').",
      },
      {
        title: "Select initial skill",
        body: "Pick one skill from the library to start. Simpler skills help you learn the system.",
      },
      {
        title: "Configure data sources",
        body: "Connect the data sources your skill needs. Test each connection.",
      },
      {
        title: "Run test task",
        body: "Run a test task with sample data. Review the output carefully before enabling for real work.",
      },
    ],
    endState: "A working bot with one skill, connected data sources, and a successful test run completed.",
    commonMiss: "Skipping the test run and going straight to production data.",
    officialDocs: [
      "https://cursor.com/bot/onboarding",
    ],
    related: [
      { kind: "setup", slug: slug("install-plan") },
      { kind: "setup", slug: slug("skill-then-routine") },
    ],
  },
  {
    kind: "setup",
    slug: slug("plugins"),
    title: "Plugins",
    description: "Connect Gmail, Notion, and Slack to your Grok Bot.",
    steps: [
      {
        title: "Open plugin settings",
        body: "Go to Bot Settings > Plugins and click 'Add Plugin'.",
      },
      {
        title: "Connect Gmail",
        body: "Complete the OAuth flow with your Google account. Ensure admin has allowed third-party apps if in a workspace.",
      },
      {
        title: "Connect Notion",
        body: "Authorize workspace access and select the specific pages and databases your bot needs.",
      },
      {
        title: "Connect Slack",
        body: "Install the Grok Bot app to your workspace and select which channels the bot can access.",
      },
      {
        title: "Test connections",
        body: "Test each connection with a read-only operation before using in workflows. Note: Zoom plugin is currently broken.",
      },
    ],
    endState: "Gmail, Notion, and Slack plugins connected and tested with read-only operations.",
    commonMiss: "Not granting access to specific Notion pages or Slack channels the bot actually needs.",
    officialDocs: [
      "https://cursor.com/help/grok-bot/plugins",
    ],
    related: [
      { kind: "setup", slug: slug("the-box") },
      { kind: "setup", slug: slug("remote-mcp") },
    ],
  },
  {
    kind: "setup",
    slug: slug("the-box"),
    title: "The Box",
    description: "Understand the shared box execution environment.",
    steps: [
      {
        title: "Understand shared box",
        body: "The box is ONE shared execution environment. All Bots run on the same shared box with shared files, cookies, and CLI credentials.",
      },
      {
        title: "Bot-to-Bot isolation",
        body: "Isolation is Bot-to-Bot on ONE shared box. Each Bot has a screen, not a machine. Bots cannot see each other's screens.",
      },
      {
        title: "Data source controls",
        body: "Configure access controls at the data source level. Use OAuth scopes to limit what each bot can access.",
      },
      {
        title: "Separate sensitive workflows",
        body: "Use separate bots for sensitive vs. non-sensitive workflows. This provides logical separation on the shared box.",
      },
      {
        title: "Document access",
        body: "Keep a record of which team members have access to which bots and their connected data sources.",
      },
    ],
    endState: "Clear understanding that isolation is Bot-to-Bot on the shared box, with appropriate data source controls configured.",
    commonMiss: "Expecting machine-level isolation. The box is shared; each Bot has a screen, not its own machine.",
    officialDocs: [
      "https://cursor.com/help/grok-bot/box",
    ],
    related: [
      { kind: "setup", slug: slug("plugins") },
      { kind: "skill", slug: slug("box-login-hygiene") },
      { kind: "page", slug: slug("glossary") },
    ],
  },
  {
    kind: "setup",
    slug: slug("skill-then-routine"),
    title: "Skill Then Routine",
    description: "Master a skill before automating it into a routine.",
    steps: [
      {
        title: "Run skill manually",
        body: "Run the skill manually at least 10 times. Do not automate until you understand its behavior.",
      },
      {
        title: "Review every output",
        body: "Carefully review every output. Note patterns, edge cases, and failure modes.",
      },
      {
        title: "Adjust prompts",
        body: "Refine prompts based on observed issues. Document what changes improved output quality.",
      },
      {
        title: "Convert to routine",
        body: "Only after consistent quality, convert to a scheduled routine. Start with weekly frequency.",
      },
      {
        title: "Increase gradually",
        body: "Increase frequency gradually based on continued quality. Daily routines require high confidence.",
      },
    ],
    endState: "A routine that runs automatically with consistent quality, built on a skill you ran manually 10+ times.",
    commonMiss: "Automating a skill after only 1-2 manual runs, then being surprised by unexpected outputs.",
    officialDocs: [
      "https://cursor.com/help/grok-bot/routines",
    ],
    related: [
      { kind: "setup", slug: slug("approvals") },
      { kind: "page", slug: slug("glossary") },
    ],
  },
  {
    kind: "setup",
    slug: slug("approvals"),
    title: "Approvals",
    description: "Set up human-in-the-loop approval workflows.",
    steps: [
      {
        title: "Identify approval actions",
        body: "List which actions require approval. Never auto-send emails, auto-spend money, or auto-publish content.",
      },
      {
        title: "Configure notifications",
        body: "Set up approval notifications to Slack or email. Reviewers need timely alerts.",
      },
      {
        title: "Set timeouts",
        body: "Configure approval timeouts (default: 24 hours). Expired items should not auto-approve.",
      },
      {
        title: "Define escalation",
        body: "Define escalation paths for urgent items. Know who to contact when primary reviewer is unavailable.",
      },
      {
        title: "Train reviewers",
        body: "Train reviewers on what to look for. Document approval criteria for each workflow.",
      },
    ],
    endState: "Approval workflow configured with notifications, timeouts, escalation paths, and trained reviewers.",
    commonMiss: "Not setting up redundant notification channels, causing approvals to be missed.",
    officialDocs: [
      "https://cursor.com/help/grok-bot/approvals",
    ],
    related: [
      { kind: "setup", slug: slug("skill-then-routine") },
      { kind: "skill", slug: slug("auto-review-rules") },
    ],
  },
  {
    kind: "setup",
    slug: slug("remote-mcp"),
    title: "Remote MCP",
    description: "Connect to external MCP servers over public HTTPS.",
    steps: [
      {
        title: "Obtain endpoint",
        body: "Get the public HTTPS URL for your MCP server. Internal or VPN endpoints will not work.",
      },
      {
        title: "Add connection",
        body: "Navigate to Bot Settings > MCP Connections and add the HTTPS URL.",
      },
      {
        title: "Configure auth",
        body: "Set up authentication (API key or OAuth). Ensure credentials are stored securely.",
      },
      {
        title: "Test connection",
        body: "Test with a read-only operation first. Verify the connection works before mapping tools.",
      },
      {
        title: "Map tools",
        body: "Map MCP tools to bot skills. Document rate limits and available data formats.",
      },
    ],
    endState: "Working MCP connection over public HTTPS with authentication configured and tools mapped to skills.",
    commonMiss: "Trying to connect to internal or VPN endpoints. Only public HTTPS endpoints work.",
    officialDocs: [
      "https://cursor.com/help/grok-bot/mcp",
    ],
    related: [
      { kind: "setup", slug: slug("plugins") },
      { kind: "skill", slug: slug("remote-mcp-connector") },
      { kind: "page", slug: slug("glossary") },
    ],
  },
  {
    kind: "setup",
    slug: slug("roster-group-ios"),
    title: "Roster Group iOS",
    description: "Manage bot access and permissions for iOS team members.",
    steps: [
      {
        title: "Open roster settings",
        body: "Go to Workspace Settings > Roster to manage team access.",
      },
      {
        title: "Create group",
        body: "Create a group for your iOS team. Use a clear name that identifies the team.",
      },
      {
        title: "Add members",
        body: "Add team members by email. Emails must match their Cursor account.",
      },
      {
        title: "Assign bots",
        body: "Assign specific bots to the group. Members only see bots assigned to their groups.",
      },
      {
        title: "Configure permissions",
        body: "Set group-level permissions and enable audit logging for compliance.",
      },
    ],
    endState: "iOS team group created with members, bots assigned, permissions configured, and audit logging enabled.",
    commonMiss: "Team member emails not matching their Cursor account, causing access issues.",
    officialDocs: [
      "https://cursor.com/help/grok-bot/roster",
    ],
    related: [
      { kind: "setup", slug: slug("approvals") },
      { kind: "job", slug: slug("chief-of-staff") },
      { kind: "skill", slug: slug("workspace-handoff") },
    ],
  },
] as const satisfies readonly Setup[];

export function getSetupBySlug(s: string): Setup | undefined {
  return setupGuides.find((guide) => guide.slug === s);
}
