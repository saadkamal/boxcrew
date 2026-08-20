import type { Skill } from "./types";
import { slug } from "./types";

export const skills = [
  {
    kind: "skill",
    slug: slug("account-health-watch"),
    title: "Account Health Watch",
    description: "Monitor customer accounts for churn signals and engagement drops.",
    outcome: "Weekly report of accounts showing warning signs: usage decline, support ticket spikes, missed renewals.",
    sources: {
      plugins: ["Notion", "Slack"] as const,
      boxLogins: ["CRM", "Product analytics"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "account-health-watch.md",
      markdown: `Monitor these accounts for health signals:
- Usage drop >30% week-over-week
- More than 2 support tickets in 7 days
- Renewal date within 30 days with no recent activity
- Champion contact went silent (no login in 14+ days)

Output: Account name, warning signals, last healthy date, suggested action.`,
    },
    reviewableArtifact: "Account health report with flagged accounts and recommended actions. Reviewer verifies signals match actual customer state before outreach.",
    approvalRule: "Any outreach recommendations require human approval. Never auto-send emails to customers.",
    staleDataRule: "Data older than 7 days triggers refresh before report generation.",
    related: [
      { kind: "job", slug: slug("account-health") },
      { kind: "job", slug: slug("product-performance") },
    ],
  },
  {
    kind: "skill",
    slug: slug("icp-outreach-drafts"),
    title: "ICP Outreach Drafts",
    description: "Generate personalized outreach drafts for ideal customer profile leads.",
    outcome: "Draft emails or LinkedIn messages tailored to each prospect's company, role, and recent activity.",
    sources: {
      plugins: ["Gmail", "Slack"] as const,
      boxLogins: ["LinkedIn Sales Navigator", "CRM"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "icp-outreach-drafts.md",
      markdown: `For each lead, draft outreach:
1. Research: Company size, recent funding, job postings, news mentions
2. Personalize: Reference something specific (recent hire, product launch, etc.)
3. Value prop: One sentence on relevant pain point we solve
4. CTA: Soft ask (15-min call, not a demo)

Tone: Professional but warm. No buzzwords. Under 100 words.`,
    },
    reviewableArtifact: "Draft message with research notes. Reviewer checks personalization accuracy and approves tone before sending.",
    approvalRule: "All drafts queue for human review. Never auto-send outreach.",
    staleDataRule: "Lead data refreshed before each batch.",
    related: [
      { kind: "job", slug: slug("sales-outbound") },
    ],
  },
  {
    kind: "skill",
    slug: slug("candidate-slate-ats"),
    title: "Candidate Slate ATS",
    description: "Build shortlists of candidates from ATS matching job requirements.",
    outcome: "Ranked list of candidates with match scores and key qualifications for each open role.",
    sources: {
      plugins: [] as const,
      boxLogins: ["ATS database"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "candidate-slate-ats.md",
      markdown: `For role [JOB_TITLE]:
1. Pull candidates matching: [KEY_REQUIREMENTS]
2. Score on: years experience, skill match, location, availability
3. Exclude: Already rejected, withdrew, accepted elsewhere
4. Rank top 10 with reasoning

Output: Name, current role, match score, top 3 relevant experiences, any flags.`,
    },
    reviewableArtifact: "Candidate slate with scores and reasoning. Recruiter reviews before scheduling screens.",
    approvalRule: "Human approves all outreach.",
    staleDataRule: "Candidate status checked against ATS before finalizing slate. Stale data (>48h) triggers refresh.",
    related: [
      { kind: "job", slug: slug("talent-scout") },
    ],
  },
  {
    kind: "skill",
    slug: slug("paid-media-budget"),
    title: "Paid Media Budget",
    description: "Analyze ad spend efficiency and recommend budget reallocation.",
    outcome: "Weekly budget recommendation showing which campaigns to increase, decrease, or pause.",
    sources: {
      plugins: ["Notion"] as const,
      boxLogins: ["Google Ads", "Meta Ads", "LinkedIn Ads", "CRM attribution"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "paid-media-budget.md",
      markdown: `Analyze last 7 days of ad performance:
- CPA by campaign, ad set, creative
- ROAS vs. target (target: [X])
- Budget utilization %
- Trending keywords/audiences

Recommend:
- Scale: Campaigns with CPA <target and capacity
- Maintain: Meeting targets
- Reduce: CPA >1.5x target
- Pause: No conversions in 7 days`,
    },
    reviewableArtifact: "Budget reallocation report with data backing each recommendation. Marketing reviews before making changes.",
    approvalRule: "Never auto-adjust budgets or bids.",
    staleDataRule: "Data must be <24h old. Recommendations expire after 48h.",
    related: [
      { kind: "job", slug: slug("paid-media") },
    ],
  },
  {
    kind: "skill",
    slug: slug("expense-receipt-match"),
    title: "Expense Receipt Match",
    description: "Match expense transactions to receipts and flag discrepancies.",
    outcome: "Reconciliation report showing matched expenses, missing receipts, and amount mismatches.",
    sources: {
      plugins: ["Gmail"] as const,
      boxLogins: ["Credit card feeds", "Expense system"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "expense-receipt-match.md",
      markdown: `Match process:
1. Pull transactions from [DATE_RANGE]
2. OCR receipts from expense inbox
3. Match by: Amount (+-$1), Date (+-2 days), Vendor name
4. Flag: Missing receipt, amount mismatch >$5, policy violation

Output per transaction: Matched/Unmatched, Receipt link, Discrepancy type, Policy status.`,
    },
    reviewableArtifact: "Reconciliation spreadsheet with match status and flags. Finance reviews before approving reimbursements.",
    approvalRule: "Never auto-approve expenses.",
    staleDataRule: "Transactions pulled fresh each run. Receipt OCR confidence <90% flagged for manual review.",
    related: [
      { kind: "job", slug: slug("expense-manager") },
    ],
  },
  {
    kind: "skill",
    slug: slug("bug-repro-pack"),
    title: "Bug Repro Pack",
    description: "Compile reproduction packages for bug reports.",
    outcome: "Structured repro document with steps, environment, logs, and screenshots for engineering.",
    sources: {
      plugins: ["Slack"] as const,
      boxLogins: ["Issue tracker", "Error logs", "Session recordings"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "bug-repro-pack.md",
      markdown: `For bug [TICKET_ID], compile:
1. Summary: One sentence description
2. Steps to reproduce: Numbered, specific
3. Expected vs. Actual behavior
4. Environment: OS, browser, app version, user type
5. Logs: Relevant error snippets (redact PII)
6. Visual: Screenshots or recording link
7. Frequency: Always/Sometimes/Once`,
    },
    reviewableArtifact: "Repro pack document attached to ticket. QA or reporter verifies accuracy before eng triage.",
    approvalRule: "Never auto-close or auto-assign tickets.",
    staleDataRule: "Logs pulled at time of report. Environment data verified current.",
    related: [
      { kind: "job", slug: slug("bug-reproduction") },
    ],
  },
  {
    kind: "skill",
    slug: slug("event-to-digest"),
    title: "Event to Digest",
    description: "Summarize calendar events into actionable digests.",
    outcome: "Daily or weekly digest of meetings with key decisions, action items, and follow-ups.",
    sources: {
      plugins: ["Gmail", "Notion", "Slack"] as const,
      boxLogins: ["Calendar", "Task tracker"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "event-to-digest.md",
      markdown: `Digest format:
For each meeting:
- Title and attendees
- Key decisions made (bullet points)
- Action items with owners and deadlines
- Open questions or blockers
- Follow-up meetings scheduled

Group by: Project/Team or Chronological
Highlight: Overdue items, conflicting decisions.`,
    },
    reviewableArtifact: "Meeting digest document. Owner reviews for accuracy before sharing with team.",
    approvalRule: "Never auto-assign tasks.",
    staleDataRule: "Meeting notes must be from past 7 days. Action items cross-checked with task tracker.",
    related: [
      { kind: "setup", slug: slug("skill-then-routine") },
    ],
  },
  {
    kind: "skill",
    slug: slug("teach-a-task"),
    title: "Teach a Task",
    description: "Document a manual task as a repeatable bot instruction.",
    outcome: "Step-by-step task documentation that can be used to train other bots or team members.",
    sources: {
      plugins: ["Notion"] as const,
      boxLogins: ["Screen recording tools"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "teach-a-task.md",
      markdown: `Document task:
1. Trigger: What initiates this task?
2. Inputs: What data/access is needed?
3. Steps: Numbered actions (be specific about clicks, fields)
4. Decision points: If X, do Y; otherwise Z
5. Output: What does completion look like?
6. Verification: How to check it worked?
7. Exceptions: Common edge cases and handling`,
    },
    reviewableArtifact: "Task documentation with example walkthrough. Process owner validates before publishing.",
    approvalRule: "Never auto-execute documented tasks without human trigger.",
    staleDataRule: "Documentation expires if underlying tools change. Version stamp required.",
    related: [
      { kind: "page", slug: slug("glossary") },
    ],
  },
  {
    kind: "skill",
    slug: slug("remote-mcp-connector"),
    title: "Remote MCP Connector",
    description: "Configure and test connections to external MCP servers.",
    outcome: "Working MCP connection with verified read/write capabilities and error handling.",
    sources: {
      plugins: [] as const,
      boxLogins: ["MCP server credentials"],
      officialDocs: ["https://cursor.com/help/grok-bot/mcp"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "remote-mcp-connector.md",
      markdown: `Connection setup:
1. Endpoint: [HTTPS_URL] (must be public)
2. Auth: [API_KEY or OAUTH_CONFIG]
3. Test sequence:
   - Ping/health check
   - Read-only operation
   - Write operation (to test namespace)
4. Error handling: Timeout (30s), retry (3x), fallback

Document: Rate limits, available tools, data formats.`,
    },
    reviewableArtifact: "Connection test report with success/failure for each operation. Ops team approves before production use.",
    approvalRule: "Never store credentials in plaintext.",
    staleDataRule: "Credentials must be rotated per security policy. Connection status checked before each use.",
    related: [
      { kind: "setup", slug: slug("remote-mcp") },
      { kind: "page", slug: slug("glossary") },
    ],
  },
  {
    kind: "skill",
    slug: slug("box-login-hygiene"),
    title: "Box Login Hygiene",
    description: "Audit and maintain bot login credentials and sessions.",
    outcome: "Audit report of active sessions, credential expiration dates, and security recommendations.",
    sources: {
      plugins: [] as const,
      boxLogins: ["Session logs", "Credential store"],
      officialDocs: ["https://cursor.com/help/grok-bot/box"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "box-login-hygiene.md",
      markdown: `Hygiene check:
1. Active sessions: List all, flag stale (>30 days)
2. Credentials: Expiration dates, last rotation
3. Access patterns: Unusual times, locations, volumes
4. Permissions: Compare to least-privilege baseline
5. Recommendations: Sessions to revoke, credentials to rotate`,
    },
    reviewableArtifact: "Hygiene report with action items. Security team reviews before credential changes.",
    approvalRule: "Credential changes require human approval and MFA. Never auto-revoke active sessions.",
    staleDataRule: "Report regenerated weekly.",
    related: [
      { kind: "setup", slug: slug("the-box") },
    ],
  },
  {
    kind: "skill",
    slug: slug("auto-review-rules"),
    title: "Auto Review Rules",
    description: "Define and maintain rules for automated content review.",
    outcome: "Rule set document specifying what content passes, flags, or fails automated review.",
    sources: {
      plugins: ["Notion"] as const,
      boxLogins: ["Review guidelines"],
      officialDocs: ["https://cursor.com/help/grok-bot/approvals"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "auto-review-rules.md",
      markdown: `Rule format:
- Rule ID: Unique identifier
- Trigger: What content triggers this rule
- Action: Pass / Flag for review / Reject
- Reason: Why this rule exists
- Examples: Pass example, fail example
- Exceptions: When to override

Categories: Compliance, Quality, Brand, Legal.`,
    },
    reviewableArtifact: "Rule set document with examples. Legal/Compliance approves before activation.",
    approvalRule: "New rules require human testing before deployment. Never auto-reject without human-defined rule.",
    staleDataRule: "Rules versioned with change log.",
    related: [
      { kind: "setup", slug: slug("approvals") },
      { kind: "page", slug: slug("glossary") },
    ],
  },
  {
    kind: "skill",
    slug: slug("secret-handoff"),
    title: "Secret Handoff",
    description: "Securely transfer credentials and secrets between systems.",
    outcome: "Completed secret transfer with audit trail and confirmation of successful receipt.",
    sources: {
      plugins: [] as const,
      boxLogins: ["Source secret store", "Destination secret store"],
      officialDocs: ["https://cursor.com/help/grok-bot/security"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "secret-handoff.md",
      markdown: `Transfer process:
1. Verify source: Secret exists, not expired
2. Generate transfer: One-time link or encrypted payload
3. Transmit: Via approved channel (never plaintext, never email)
4. Confirm receipt: Destination acknowledges
5. Audit: Log transfer with timestamp, parties, secret ID (not value)
6. Cleanup: Revoke transfer mechanism`,
    },
    reviewableArtifact: "Transfer audit log with confirmation. Security reviews before and after transfer.",
    approvalRule: "Never log or display secret values.",
    staleDataRule: "Secrets must be current at transfer time. Transfer links expire in 1 hour.",
    related: [
      { kind: "skill", slug: slug("box-login-hygiene") },
    ],
  },
  {
    kind: "skill",
    slug: slug("multi-bot-kickoff"),
    title: "Multi Bot Kickoff",
    description: "Coordinate startup of multiple bots for complex workflows.",
    outcome: "All bots in workflow started in correct sequence with dependency verification.",
    sources: {
      plugins: ["Slack"] as const,
      boxLogins: ["Bot dependency graph", "Health check endpoints"],
      officialDocs: ["https://cursor.com/help/grok-bot/routines"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "multi-bot-kickoff.md",
      markdown: `Kickoff sequence:
1. Check prerequisites: Dependencies running, resources available
2. Start order: [BOT_A] -> [BOT_B] -> [BOT_C]
3. Health check each: Wait for ready signal
4. Verify connections: Inter-bot communication working
5. Log startup: Timestamps, status, any warnings

Rollback: If any fails, stop sequence, alert, preserve state.`,
    },
    reviewableArtifact: "Startup log with status of each bot. Ops reviews before marking workflow active.",
    approvalRule: "Never auto-start bots without health verification.",
    staleDataRule: "Dependency graph verified before each kickoff. Stale config (>24h) requires refresh.",
    related: [
      { kind: "job", slug: slug("chief-of-staff") },
      { kind: "skill", slug: slug("bot-persona-kit") },
    ],
  },
  {
    kind: "skill",
    slug: slug("update-vs-reset"),
    title: "Update vs Reset",
    description: "Determine whether a bot needs configuration update or full reset.",
    outcome: "Recommendation with reasoning for update (preserve state) or reset (clean slate) approach.",
    sources: {
      plugins: [] as const,
      boxLogins: ["Bot config store", "Change history"],
      officialDocs: ["https://cursor.com/help/grok-bot/maintenance"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "update-vs-reset.md",
      markdown: `Decision framework:
UPDATE when:
- Config change is additive
- State is valuable and consistent
- Change is reversible

RESET when:
- State is corrupted or inconsistent
- Major version change
- Security incident recovery
- Simpler than debugging

Output: Recommendation, reasoning, rollback plan.`,
    },
    reviewableArtifact: "Recommendation document with impact analysis. Bot owner approves before execution.",
    approvalRule: "Never auto-reset without explicit human trigger.",
    staleDataRule: "Current state snapshot required before any change. Changes logged with before/after.",
    related: [
      { kind: "setup", slug: slug("the-box") },
    ],
  },
  {
    kind: "skill",
    slug: slug("workspace-handoff"),
    title: "Workspace Handoff",
    description: "Transfer bot ownership and workspace access between users.",
    outcome: "Complete transfer of bot ownership with permissions, secrets, and documentation.",
    sources: {
      plugins: ["Notion", "Slack"] as const,
      boxLogins: ["Workspace settings", "Permission matrices"],
      officialDocs: ["https://cursor.com/help/grok-bot/roster"],
    },
    artifact: {
      kind: "skill" as const,
      filename: "workspace-handoff.md",
      markdown: `Handoff checklist:
1. Inventory: List all bots, credentials, docs owned
2. Permissions: Transfer admin access to new owner
3. Secrets: Rotate and share via secure channel
4. Documentation: Verify new owner has access
5. Training: Schedule walkthrough session
6. Verification: New owner confirms working access
7. Cleanup: Remove old owner access after grace period`,
    },
    reviewableArtifact: "Handoff checklist with sign-off from both parties. Manager approves ownership transfer.",
    approvalRule: "Never remove access without new owner confirmation.",
    staleDataRule: "Access removal delayed 7 days for rollback. Audit trail of all permission changes.",
    related: [
      { kind: "setup", slug: slug("roster-group-ios") },
    ],
  },
  {
    kind: "skill",
    slug: slug("bot-persona-kit"),
    title: "Bot Persona Kit",
    description: "Define and configure a consistent personality for bot interactions.",
    outcome: "Persona document with tone, vocabulary, boundaries, and example responses.",
    sources: {
      plugins: ["Notion"] as const,
      boxLogins: ["Brand guidelines"],
      officialDocs: ["https://cursor.com/help/grok-bot/personas"],
    },
    artifact: {
      kind: "bot-description" as const,
      filename: "bot-persona-kit.md",
      markdown: `Persona definition:
1. Name and role: What the bot calls itself
2. Tone: Professional/Casual/Technical (pick one)
3. Vocabulary: Words to use, words to avoid
4. Boundaries: Topics it won't discuss
5. Signature phrases: Consistent greetings, sign-offs
6. Error responses: How to handle confusion gracefully
7. Escalation: When to hand off to human`,
    },
    reviewableArtifact: "Persona document with example conversations. Brand/Marketing approves before deployment.",
    approvalRule: "Never generate content outside defined persona boundaries.",
    staleDataRule: "Persona reviewed quarterly for brand alignment. Changes require approval.",
    related: [
      { kind: "job", slug: slug("chief-of-staff") },
      { kind: "skill", slug: slug("multi-bot-kickoff") },
    ],
  },
] as const satisfies readonly Skill[];

export function getSkillBySlug(s: string): Skill | undefined {
  return skills.find((skill) => skill.slug === s);
}
