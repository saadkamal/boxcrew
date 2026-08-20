# Adding Content to Boxcrew

All content lives in typed TypeScript files under `content/`. No MDX, no CMS, no database.

## Content Types

Each content type has specific required fields. See `content/types.ts` for full definitions.

### Setup Guide

Add to `content/setup.ts`:

```typescript
{
  kind: "setup",
  slug: "your-slug",           // URL segment
  title: "Your Title",
  description: "Short description for cards and meta.",
  prerequisites: ["Requirement 1", "Requirement 2"],
  steps: ["Step 1", "Step 2", "Step 3"],
  troubleshooting: ["If X fails, try Y"],
}
```

### Skill

Add to `content/skills.ts`. Skills have anti-doorway requirements:

```typescript
{
  kind: "skill",
  slug: "your-skill",
  title: "Your Skill",
  description: "What this skill does.",
  outcome: "What the skill produces when complete.",
  sources: ["Data source 1", "Data source 2"],
  copyPaste: `Ready-to-use prompt or configuration.
Can be multiline.`,
  reviewableArtifact: "What artifact human reviews before action.",
  approvalAndStaleData: "Approval requirements and stale data handling.",
}
```

### Job

Add to `content/jobs.ts`. Jobs have all skill fields plus job-specific ones:

```typescript
{
  kind: "job",
  slug: "your-job",
  title: "Your Job",
  description: "Role description.",
  // All skill fields...
  outcome: "...",
  sources: ["..."],
  copyPaste: `...`,
  reviewableArtifact: "...",
  approvalAndStaleData: "...",
  // Job-specific fields:
  botDescription: "Bot personality and role description.",
  firstTask: "Suggested first task to try.",
  primarySkill: "skill-slug",  // Must match a skill slug
  routine: "Recurring workflow pattern.",
  neverList: [
    "Never do X",
    "Never do Y",
  ],
}
```

### Industry

Add to `content/industries.ts`:

```typescript
{
  kind: "industry",
  slug: "your-industry",
  title: "Your Industry",
  description: "Industry vertical description.",
  jobSlugs: ["job-1", "job-2"],  // Must match job slugs
}
```

### Page

Add to `content/pages.ts`:

```typescript
{
  kind: "page",
  slug: "your-page",
  title: "Your Page",
  description: "Page description.",
  sections: [
    { heading: "Section 1", content: "Section content." },
    { heading: "Section 2", content: "More content." },
  ],
}
```

## Anti-Doorway Requirements

Skills and Jobs must include:

1. **outcome**: What the skill/job produces
2. **sources**: Where data comes from
3. **copyPaste**: Ready-to-use prompt or config
4. **reviewableArtifact**: What human reviews
5. **approvalAndStaleData**: Guardrails for approval and data freshness

Jobs additionally require:

6. **botDescription**: Personality and role
7. **firstTask**: Starting point
8. **primarySkill**: Linked skill slug
9. **routine**: Recurring pattern
10. **neverList**: Explicit prohibitions

## Routes

Routes are generated automatically from slugs:

- Setup: `/setup/{slug}`
- Skill: `/skills/{slug}`
- Job: `/jobs/{slug}`
- Industry: `/industries/{slug}`

Static generation uses `generateStaticParams()` in each `[slug]/page.tsx`.

## Type Safety

All content is validated at compile time. TypeScript will error if:

- Required fields are missing
- Field types are wrong
- Referenced slugs don't exist (for linked content)

Run `npm run build` to verify all content is valid.
