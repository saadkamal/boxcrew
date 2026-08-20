# Adding Content to Boxcrew

All content lives in typed TypeScript files under `content/`. Git is the CMS.

## Contract

**Do not add slugs.** Slugs are locked by Vera. Quinn rejects any unlocked slug.

**Clone the Jules template.** Copy an existing item of the same type and modify.

**Five anti-doorway fields required for Skills and Jobs:**
1. `outcome` - What the skill/job produces
2. `sources` - Where data comes from (plugins, boxLogins, officialDocs)
3. `artifact` / `botDescription` + `firstTask` + `skill` + `routine` - Copy-paste markdown
4. `reviewableArtifact` - What human reviews before action
5. `approvalRule` + `staleDataRule` - Guardrails

Missing any field fails `assertComplete()` at build time.

## Locked Slugs

**Setup (8):** install-plan, first-bot, plugins, the-box, skill-then-routine, approvals, remote-mcp, roster-group-ios

**Skills (16):** account-health-watch, icp-outreach-drafts, candidate-slate-ats, paid-media-budget, expense-receipt-match, bug-repro-pack, event-to-digest, teach-a-task, remote-mcp-connector, box-login-hygiene, auto-review-rules, secret-handoff, multi-bot-kickoff, update-vs-reset, workspace-handoff, bot-persona-kit

**Jobs (8):** sales-outbound, talent-scout, paid-media, expense-manager, product-performance, bug-reproduction, account-health, chief-of-staff

**Industries (4):** b2b-saas, recruiting, engineering-product, finance-ops

**Pages (2):** grok-vs-grok-bot, glossary

No 17th skill. product-performance reuses account-health-watch.

## Content Types

### Setup

```typescript
{
  kind: "setup",
  slug: slug("existing-locked-slug"),
  title: "Title",
  description: "Short description.",
  body: "Longer body text.",
  steps: [
    { title: "Step 1", body: "Do this." },
    { title: "Step 2", body: "Then this." },
  ],
  endState: "What success looks like.",
  commonMiss: "Common mistake to avoid.",
  officialDocs: ["https://cursor.com/help/grok-bot/..."],
  related: [{ kind: "setup", slug: slug("other-slug") }],
}
```

### Skill

```typescript
{
  kind: "skill",
  slug: slug("existing-locked-slug"),
  title: "Title",
  description: "Short description.",
  body: "Longer body text.",
  outcome: "What the skill produces.",
  sources: {
    plugins: ["Gmail", "Notion", "Slack"], // or []
    boxLogins: ["CRM read access"],
    officialDocs: ["https://cursor.com/help/grok-bot/..."],
  },
  artifact: {
    kind: "skill",
    filename: "skill-name.md",
    markdown: `# Skill Name

Copy-paste content for Quinn to exercise.`,
  },
  reviewableArtifact: "What human reviews.",
  approvalRule: "When approval is required.",
  staleDataRule: "Data freshness requirements.",
  related: [{ kind: "job", slug: slug("related-job") }],
}
```

### Job

```typescript
{
  kind: "job",
  slug: slug("existing-locked-slug"),
  title: "Title",
  description: "Short description.",
  body: "Longer body text.",
  outcome: "What the job produces.",
  sources: {
    plugins: ["Gmail"],
    boxLogins: ["System access"],
    officialDocs: [],
  },
  botDescription: {
    kind: "bot-description",
    filename: "job-persona.md",
    markdown: `# Persona...`,
  },
  firstTask: {
    kind: "first-task-prompt",
    filename: "job-first-task.md",
    markdown: `# First Task...`,
  },
  skill: {
    kind: "skill",
    filename: "job-skill.md",
    markdown: `# Core Skill...`,
  },
  routine: {
    kind: "routine-prompt",
    filename: "job-routine.md",
    markdown: `# Routine...`,
  },
  neverList: [
    "Never do X",
    "Never do Y",
  ],
  reviewableArtifact: "What human reviews.",
  approvalRule: "When approval is required.",
  staleDataRule: "Data freshness requirements.",
  related: [{ kind: "skill", slug: slug("primary-skill") }],
}
```

### Industry

```typescript
{
  kind: "industry",
  slug: slug("existing-locked-slug"),
  title: "Title",
  description: "Short description.",
  body: "Longer body text.",
  jobSlugs: [slug("job-1"), slug("job-2")], // Only locked job slugs
  startGuide: slug("install-plan"),
}
```

### Page

```typescript
{
  kind: "page",
  slug: slug("existing-locked-slug"),
  title: "Title",
  description: "Short description.",
  body: `Markdown-ish content with **bold** headings.`,
}
```

## Copy Rules

- Not Grok chat, not Cursor Cloud Agents
- Shared box, Cursor account required
- Ultra / Teams Premium / SuperGrok Heavy
- Skills stop at a review list
- Never auto-send, spend, publish, or file
- SITE_NAME is Boxcrew
- No Fieldbook, chatbot, copilot, OpenClaw, todayly, em dashes

## Validation

`npm run build` runs `assertComplete()` which throws if:
- Counts != 8/16/8/4/2
- Extra or missing slugs
- Industry jobs outside the locked 8
- Missing anti-doorway fields
- A 17th skill

## Plugins

Verified: Gmail, Notion, Slack. Zoom is broken.

## Official Docs

Only real URLs:
- `https://docs.x.ai/grok-bot/*`
- `https://cursor.com/help/grok-bot/*`
- `https://cursor.com/bot/onboarding`

Do not invent URLs.
