import type { Skill } from "./types";
import { slug } from "./types";

/**
 * Skills catalog.
 * 16 skills. No 17th. Locked slugs per Vera.
 * Each skill has anti-doorway fields: outcome, sources, artifact,
 * reviewableArtifact, approvalRule, staleDataRule.
 */
export const skills = [
  {
    kind: "skill",
    slug: slug("account-health-watch"),
    title: "Account Health Watch",
    description: "Monitor customer accounts for churn signals and engagement drops.",
    body: "Grok Bot scans CRM usage data, support tickets, and billing records to flag accounts showing warning signs. The bot produces a review list—never contacts customers directly. Requires Cursor account with Ultra, Teams Premium, or SuperGrok Heavy.",
    outcome: "Weekly report listing accounts with warning signals: usage decline, support spikes, missed renewals.",
    sources: {
      plugins: ["Notion"],
      boxLogins: ["CRM read access", "Support system read access", "Billing system read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "account-health-watch.md",
      markdown: `# Account Health Watch

Monitor accounts for these signals:
- Usage drop >30% week-over-week
- More than 2 support tickets in 7 days
- Renewal within 30 days with no recent activity
- Champion contact silent (no login 14+ days)

Output per account:
- Account name
- Warning signals detected
- Last healthy date
- Suggested action (for human review)

Stop at the review list. Never contact customers.`,
    },
    reviewableArtifact: "Account health report with flagged accounts and recommended actions. Reviewer verifies signals before any outreach.",
    approvalRule: "All customer outreach requires human approval. Bot never sends emails or messages.",
    staleDataRule: "Data older than 7 days triggers refresh before report generation. Stale reports marked as stale.",
    related: [{ kind: "job", slug: slug("account-health") }, { kind: "job", slug: slug("product-performance") }],
  },
  {
    kind: "skill",
    slug: slug("icp-outreach-drafts"),
    title: "ICP Outreach Drafts",
    description: "Generate personalized outreach drafts for ideal customer profile leads.",
    body: "Grok Bot researches each lead and drafts personalized messages. Drafts queue for human review—never sent automatically. Runs in the shared box with your Cursor account credentials.",
    outcome: "Draft emails or LinkedIn messages tailored to each prospect's company, role, and recent activity.",
    sources: {
      plugins: ["Gmail", "Notion"],
      boxLogins: ["LinkedIn read access", "CRM read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "icp-outreach-drafts.md",
      markdown: `# ICP Outreach Drafts

For each lead:

1. Research company: size, funding, recent news, tech stack
2. Research contact: role, tenure, LinkedIn activity
3. Draft personalized message:
   - Reference something specific (recent hire, product launch)
   - One sentence on relevant pain point
   - Soft CTA (15-min call, not a demo)
4. Note research confidence (high/medium/low)

Tone: Professional, warm. No buzzwords. Under 100 words.

Stop at drafts. Never send without human approval.`,
    },
    reviewableArtifact: "Draft message with research summary. Reviewer checks personalization accuracy and approves tone.",
    approvalRule: "All sends require human click. Bot never sends outreach automatically.",
    staleDataRule: "Lead data refreshed before each batch. Drafts expire after 7 days without approval.",
    related: [{ kind: "job", slug: slug("sales-outbound") }],
  },
  {
    kind: "skill",
    slug: slug("candidate-slate-ats"),
    title: "Candidate Slate ATS",
    description: "Build shortlists of candidates from ATS matching job requirements.",
    body: "Grok Bot searches your ATS for candidates matching role requirements and produces a ranked shortlist. Recruiter reviews before any contact. Shared box access means all team bots see the same ATS data.",
    outcome: "Ranked list of candidates with match scores and key qualifications for each open role.",
    sources: {
      plugins: ["Notion"],
      boxLogins: ["ATS read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "candidate-slate-ats.md",
      markdown: `# Candidate Slate ATS

For role [JOB_TITLE]:

1. Pull candidates matching key requirements
2. Score each on: years experience, skill match, location, availability
3. Exclude: Already rejected, withdrew, accepted elsewhere
4. Rank top 10 with reasoning

Output per candidate:
- Name and current role
- Match score (1-10)
- Top 3 relevant experiences
- Any flags (gaps, job hopping)

Stop at the slate. Never contact candidates.`,
    },
    reviewableArtifact: "Candidate slate with scores and reasoning. Recruiter validates fit before any contact.",
    approvalRule: "All candidate outreach requires recruiter approval. Bot never sends messages.",
    staleDataRule: "Candidate status checked against ATS before finalizing. Profiles older than 30 days flagged for refresh.",
    related: [{ kind: "job", slug: slug("talent-scout") }],
  },
  {
    kind: "skill",
    slug: slug("paid-media-budget"),
    title: "Paid Media Budget",
    description: "Analyze ad spend efficiency and recommend budget reallocation.",
    body: "Grok Bot pulls ad performance data and calculates efficiency metrics. Produces recommendations for human review—never adjusts bids or budgets directly. Requires read access to ad platforms via box logins.",
    outcome: "Weekly budget recommendation showing which campaigns to scale, maintain, reduce, or pause.",
    sources: {
      plugins: ["Notion"],
      boxLogins: ["Google Ads read access", "Meta Ads read access", "LinkedIn Ads read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "paid-media-budget.md",
      markdown: `# Paid Media Budget Analysis

Analyze last 7 days:
- CPA by campaign, ad set, creative
- ROAS vs. target
- Budget utilization %
- Trending keywords and audiences

Recommend:
- Scale: CPA below target with capacity
- Maintain: Meeting targets
- Reduce: CPA >1.5x target
- Pause: No conversions in 7 days

Include data tables backing each recommendation.

Stop at recommendations. Never adjust bids or budgets.`,
    },
    reviewableArtifact: "Performance report with data tables and recommendations. Marketing manager approves changes.",
    approvalRule: "All budget changes require human approval. Bot never adjusts bids or spend.",
    staleDataRule: "Data must be less than 24h old. Recommendations expire after 48h.",
    related: [{ kind: "job", slug: slug("paid-media") }],
  },
  {
    kind: "skill",
    slug: slug("expense-receipt-match"),
    title: "Expense Receipt Match",
    description: "Match expense transactions to receipts and flag discrepancies.",
    body: "Grok Bot pulls transactions and OCRs receipts to match them. Flags missing receipts and amount mismatches. Finance reviews before processing—bot never approves expenses or processes reimbursements.",
    outcome: "Reconciliation report showing matched expenses, missing receipts, and amount mismatches.",
    sources: {
      plugins: ["Gmail", "Notion"],
      boxLogins: ["Credit card feed read access", "Expense system read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "expense-receipt-match.md",
      markdown: `# Expense Receipt Match

Match process:
1. Pull transactions from date range
2. OCR receipts from expense inbox
3. Match by: Amount (within $1), Date (within 2 days), Vendor name
4. Flag discrepancies:
   - Missing receipt
   - Amount mismatch >$5
   - Policy violation

Output per transaction:
- Match status (Matched / Unmatched / Flagged)
- Receipt link if matched
- Discrepancy type if flagged
- Policy status

Stop at the reconciliation report. Never approve or reimburse.`,
    },
    reviewableArtifact: "Reconciliation spreadsheet with match status and flags. Finance reviews before processing.",
    approvalRule: "All expense approvals require human sign-off. Bot never approves or processes payments.",
    staleDataRule: "Transactions pulled fresh each run. OCR confidence below 90% flagged for manual review.",
    related: [{ kind: "job", slug: slug("expense-manager") }],
  },
  {
    kind: "skill",
    slug: slug("bug-repro-pack"),
    title: "Bug Repro Pack",
    description: "Compile reproduction packages for bug reports.",
    body: "Grok Bot gathers bug report details, pulls relevant logs, and structures a repro document for engineering. Attaches to the ticket for triage—never modifies code or closes tickets.",
    outcome: "Structured repro document with steps, environment, logs, and screenshots ready for eng triage.",
    sources: {
      plugins: ["Slack", "Notion"],
      boxLogins: ["Bug tracker read access", "Log system read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "bug-repro-pack.md",
      markdown: `# Bug Repro Pack

For bug [TICKET_ID], compile:

1. Summary: One sentence description
2. Steps to reproduce: Numbered, specific
3. Expected vs. Actual behavior
4. Environment: OS, browser, app version, user type
5. Logs: Relevant error snippets (redact PII)
6. Visual: Screenshots or recording link if available
7. Frequency: Always / Sometimes / Once

Attach to ticket for QA/eng review.

Stop at the repro pack. Never modify code or close tickets.`,
    },
    reviewableArtifact: "Repro pack document attached to ticket. QA validates completeness before eng triage.",
    approvalRule: "Bot never closes, reassigns, or modifies ticket state. Document only.",
    staleDataRule: "Logs pulled at time of report. Environment data verified current before attaching.",
    related: [{ kind: "job", slug: slug("bug-reproduction") }],
  },
  {
    kind: "skill",
    slug: slug("event-to-digest"),
    title: "Event to Digest",
    description: "Summarize calendar events into actionable digests.",
    body: "Grok Bot reads calendar events and meeting notes, then produces a digest of decisions, action items, and follow-ups. Owner reviews before sharing—bot never assigns tasks or sends updates.",
    outcome: "Daily or weekly digest of meetings with key decisions, action items, and follow-ups.",
    sources: {
      plugins: ["Notion", "Slack"],
      boxLogins: ["Calendar read access"],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "event-to-digest.md",
      markdown: `# Event to Digest

For each meeting in range:
- Title and attendees
- Key decisions made (bullet points)
- Action items with owners and deadlines
- Open questions or blockers
- Follow-up meetings scheduled

Group by: Project/Team or Chronological
Highlight: Overdue items, conflicting decisions

Output as shareable digest document.

Stop at the digest. Never assign tasks or send communications.`,
    },
    reviewableArtifact: "Meeting digest document. Owner reviews for accuracy before sharing with team.",
    approvalRule: "Bot never assigns tasks or sends meeting summaries. Human distributes.",
    staleDataRule: "Meeting notes must be from past 7 days. Action items cross-checked with task tracker.",
    related: [{ kind: "job", slug: slug("chief-of-staff") }],
  },
  {
    kind: "skill",
    slug: slug("teach-a-task"),
    title: "Teach a Task",
    description: "Document a manual task as a repeatable bot instruction.",
    body: "Grok Bot observes a task walkthrough and produces structured documentation that can train other bots or team members. Process owner validates before publishing.",
    outcome: "Step-by-step task documentation that can be used to train other bots or team members.",
    sources: {
      plugins: ["Notion"],
      boxLogins: [],
      officialDocs: ["https://cursor.com/help/grok-bot/skills"],
    },
    artifact: {
      kind: "skill",
      filename: "teach-a-task.md",
      markdown: `# Teach a Task

Document task structure:
1. Trigger: What initiates this task?
2. Inputs: What data/access is needed?
3. Steps: Numbered actions (specific clicks, fields, values)
4. Decision points: If X, do Y; otherwise Z
5. Output: What does completion look like?
6. Verification: How to confirm it worked?
7. Exceptions: Common edge cases and handling

Include example walkthrough with screenshots.

Stop at documentation. Never auto-execute documented tasks.`,
    },
    reviewableArtifact: "Task documentation with example walkthrough. Process owner validates before publishing.",
    approvalRule: "Bot never executes documented tasks without human trigger.",
    staleDataRule: "Documentation expires if underlying tools change. Version stamp required.",
    related: [{ kind: "setup", slug: slug("skill-then-routine") }],
  },
  {
    kind: "skill",
    slug: slug("remote-mcp-connector"),
    title: "Remote MCP Connector",
    description: "Configure and test connections to external MCP servers.",
    body: "Grok Bot sets up and validates MCP connections over public HTTPS. Produces a connection test report—never stores credentials in plaintext or exposes endpoints.",
    outcome: "Working MCP connection with verified read/write capabilities and error handling documented.",
    sources: {
      plugins: [],
      boxLogins: ["MCP server credentials"],
      officialDocs: ["https://docs.x.ai/grok-bot/mcp"],
    },
    artifact: {
      kind: "skill",
      filename: "remote-mcp-connector.md",
      markdown: `# Remote MCP Connector

Connection setup:
1. Endpoint: Public HTTPS URL (internal/VPN URLs fail)
2. Auth: API key or OAuth config
3. Test sequence:
   - Ping/health check
   - Read-only operation
   - Write operation (to test namespace only)
4. Error handling: Timeout (30s), retry (3x), fallback

Document:
- Rate limits
- Available tools
- Data formats
- Rotation policy for credentials

Stop at the test report. Never store credentials in plaintext.`,
    },
    reviewableArtifact: "Connection test report with success/failure for each operation. Ops approves before production use.",
    approvalRule: "Credential storage follows security policy. Bot never exposes secrets.",
    staleDataRule: "Connection status checked before each use. Credentials rotated per policy.",
    related: [{ kind: "setup", slug: slug("remote-mcp") }],
  },
  {
    kind: "skill",
    slug: slug("box-login-hygiene"),
    title: "Box Login Hygiene",
    description: "Audit and maintain bot login credentials and sessions.",
    body: "Grok Bot audits active sessions and credential expiration across the shared box. Produces a hygiene report—never auto-revokes sessions or rotates credentials without approval.",
    outcome: "Audit report of active sessions, credential expiration dates, and security recommendations.",
    sources: {
      plugins: [],
      boxLogins: ["Session log access", "Credential store read access"],
      officialDocs: ["https://docs.x.ai/grok-bot/security"],
    },
    artifact: {
      kind: "skill",
      filename: "box-login-hygiene.md",
      markdown: `# Box Login Hygiene

Audit checklist:
1. Active sessions: List all, flag stale (>30 days inactive)
2. Credentials: Expiration dates, last rotation date
3. Access patterns: Unusual times, locations, or volumes
4. Permissions: Compare to least-privilege baseline
5. Recommendations: Sessions to revoke, credentials to rotate

Output as hygiene report with priority actions.

Stop at the report. Never auto-revoke or rotate without approval.`,
    },
    reviewableArtifact: "Hygiene report with action items. Security team reviews before credential changes.",
    approvalRule: "All credential changes and session revocations require human approval with MFA.",
    staleDataRule: "Report regenerated weekly. Session data must be current (within 1 day).",
    related: [{ kind: "setup", slug: slug("the-box") }],
  },
  {
    kind: "skill",
    slug: slug("auto-review-rules"),
    title: "Auto Review Rules",
    description: "Define and maintain rules for automated content review.",
    body: "Grok Bot helps define review rules that check content before human review. Rules flag or pass content—never auto-reject without a human-defined rule.",
    outcome: "Rule set document specifying what content passes, flags, or fails automated review.",
    sources: {
      plugins: ["Notion"],
      boxLogins: [],
      officialDocs: ["https://cursor.com/help/grok-bot/rules"],
    },
    artifact: {
      kind: "skill",
      filename: "auto-review-rules.md",
      markdown: `# Auto Review Rules

Rule format:
- Rule ID: Unique identifier
- Trigger: What content triggers this rule
- Action: Pass / Flag for review / Reject
- Reason: Why this rule exists
- Examples: Pass example, fail example
- Exceptions: When to override

Categories:
- Compliance rules
- Quality rules
- Brand rules
- Legal rules

Version rules with change log.

Stop at the rule set. New rules require human testing before deployment.`,
    },
    reviewableArtifact: "Rule set document with examples. Legal/Compliance approves before activation.",
    approvalRule: "New rules require human testing. Bot never auto-rejects without human-defined rule.",
    staleDataRule: "Rules versioned with change log. Review quarterly for relevance.",
    related: [{ kind: "setup", slug: slug("approvals") }],
  },
  {
    kind: "skill",
    slug: slug("secret-handoff"),
    title: "Secret Handoff",
    description: "Securely transfer credentials and secrets between systems.",
    body: "Grok Bot facilitates secure secret transfer with audit trail. Uses one-time links or encrypted payloads—never plaintext, never email. Security reviews before and after transfer.",
    outcome: "Completed secret transfer with audit trail and confirmation of successful receipt.",
    sources: {
      plugins: [],
      boxLogins: ["Source secret store", "Destination secret store"],
      officialDocs: ["https://docs.x.ai/grok-bot/security"],
    },
    artifact: {
      kind: "skill",
      filename: "secret-handoff.md",
      markdown: `# Secret Handoff

Transfer process:
1. Verify source: Secret exists, not expired
2. Generate transfer: One-time link or encrypted payload
3. Transmit: Via approved channel (never plaintext, never email)
4. Confirm receipt: Destination acknowledges
5. Audit: Log transfer with timestamp, parties, secret ID (not value)
6. Cleanup: Revoke transfer mechanism after confirmation

Transfer links expire in 1 hour maximum.

Stop at audit log. Never log or display secret values.`,
    },
    reviewableArtifact: "Transfer audit log with confirmation. Security reviews before and after transfer.",
    approvalRule: "All secret transfers require security approval. Bot never displays secret values.",
    staleDataRule: "Secrets must be current at transfer time. Transfer links expire in 1 hour.",
    related: [{ kind: "skill", slug: slug("box-login-hygiene") }],
  },
  {
    kind: "skill",
    slug: slug("multi-bot-kickoff"),
    title: "Multi Bot Kickoff",
    description: "Coordinate startup of multiple bots for complex workflows.",
    body: "Grok Bot manages startup sequence when multiple bots need to work together. Checks dependencies, verifies health, logs startup—never auto-starts without health verification.",
    outcome: "All bots in workflow started in correct sequence with dependency verification.",
    sources: {
      plugins: ["Slack"],
      boxLogins: [],
      officialDocs: ["https://cursor.com/help/grok-bot/workflows"],
    },
    artifact: {
      kind: "skill",
      filename: "multi-bot-kickoff.md",
      markdown: `# Multi Bot Kickoff

Startup sequence:
1. Check prerequisites: Dependencies running, resources available
2. Start order: Define explicit order (Bot A → Bot B → Bot C)
3. Health check: Wait for ready signal from each bot
4. Verify connections: Inter-bot communication working
5. Log startup: Timestamps, status, any warnings

Rollback:
- If any bot fails startup, stop sequence
- Alert operator
- Preserve state for debugging

Stop at startup log. Never auto-start bots without health verification.`,
    },
    reviewableArtifact: "Startup log with status of each bot. Ops reviews before marking workflow active.",
    approvalRule: "Bot startup requires health verification. Failed health check blocks startup.",
    staleDataRule: "Dependency graph verified before each kickoff. Stale config (>24h) requires refresh.",
    related: [{ kind: "job", slug: slug("chief-of-staff") }],
  },
  {
    kind: "skill",
    slug: slug("update-vs-reset"),
    title: "Update vs Reset",
    description: "Determine whether a bot needs configuration update or full reset.",
    body: "Grok Bot analyzes current bot state and desired state to recommend update (preserve state) or reset (clean slate). Produces recommendation with reasoning—never auto-resets.",
    outcome: "Recommendation with reasoning for update or reset approach, plus rollback plan.",
    sources: {
      plugins: [],
      boxLogins: ["Bot config access"],
      officialDocs: ["https://cursor.com/help/grok-bot/maintenance"],
    },
    artifact: {
      kind: "skill",
      filename: "update-vs-reset.md",
      markdown: `# Update vs Reset Decision

UPDATE when:
- Config change is additive
- State is valuable and consistent
- Change is reversible

RESET when:
- State is corrupted or inconsistent
- Major version change required
- Security incident recovery
- Simpler than debugging

Output:
- Recommendation: Update or Reset
- Reasoning: Why this approach
- Rollback plan: How to recover if it fails
- State snapshot: Current config backup

Stop at recommendation. Never auto-reset without explicit human trigger.`,
    },
    reviewableArtifact: "Recommendation document with impact analysis. Bot owner approves before execution.",
    approvalRule: "All resets require explicit human trigger. Bot never auto-resets.",
    staleDataRule: "Current state snapshot required before any change. Changes logged with before/after.",
    related: [{ kind: "skill", slug: slug("workspace-handoff") }],
  },
  {
    kind: "skill",
    slug: slug("workspace-handoff"),
    title: "Workspace Handoff",
    description: "Transfer bot ownership and workspace access between users.",
    body: "Grok Bot facilitates ownership transfer when team members change. Produces handoff checklist—never removes access without new owner confirmation.",
    outcome: "Complete transfer of bot ownership with permissions, secrets, and documentation.",
    sources: {
      plugins: ["Notion"],
      boxLogins: ["Workspace admin access"],
      officialDocs: ["https://cursor.com/help/grok-bot/teams"],
    },
    artifact: {
      kind: "skill",
      filename: "workspace-handoff.md",
      markdown: `# Workspace Handoff

Handoff checklist:
1. Inventory: List all bots, credentials, docs owned
2. Permissions: Transfer admin access to new owner
3. Secrets: Rotate and share via secure channel
4. Documentation: Verify new owner has access
5. Training: Schedule walkthrough session
6. Verification: New owner confirms working access
7. Cleanup: Remove old owner access after grace period (7 days)

Both parties sign off on checklist completion.

Stop at checklist. Never remove access without new owner confirmation.`,
    },
    reviewableArtifact: "Handoff checklist with sign-off from both parties. Manager approves ownership transfer.",
    approvalRule: "Access removal requires new owner confirmation. Grace period of 7 days before removal.",
    staleDataRule: "Audit trail of all permission changes. Inventory must be current.",
    related: [{ kind: "skill", slug: slug("update-vs-reset") }],
  },
  {
    kind: "skill",
    slug: slug("bot-persona-kit"),
    title: "Bot Persona Kit",
    description: "Define and configure a consistent personality for bot interactions.",
    body: "Grok Bot helps define persona guidelines for consistent bot behavior. Produces persona document—never generates content outside defined boundaries.",
    outcome: "Persona document with tone, vocabulary, boundaries, and example responses.",
    sources: {
      plugins: ["Notion"],
      boxLogins: [],
      officialDocs: ["https://cursor.com/help/grok-bot/persona"],
    },
    artifact: {
      kind: "skill",
      filename: "bot-persona-kit.md",
      markdown: `# Bot Persona Kit

Persona definition:
1. Name and role: What the bot calls itself
2. Tone: Professional / Casual / Technical (pick one)
3. Vocabulary: Words to use, words to avoid
4. Boundaries: Topics it will not discuss
5. Signature phrases: Consistent greetings, sign-offs
6. Error responses: How to handle confusion gracefully
7. Escalation: When to hand off to human

Include 3-5 example conversations showing persona in action.

Stop at persona document. Never generate content outside boundaries.`,
    },
    reviewableArtifact: "Persona document with example conversations. Brand/Marketing approves before deployment.",
    approvalRule: "Persona changes require brand approval. Bot stays within defined boundaries.",
    staleDataRule: "Persona reviewed quarterly for brand alignment. Version with change date.",
    related: [{ kind: "job", slug: slug("chief-of-staff") }],
  },
] as const satisfies readonly Skill[];
