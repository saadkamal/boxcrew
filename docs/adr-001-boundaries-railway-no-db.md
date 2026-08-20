# ADR-001: Boundaries - Railway Deployment, No Database

## Status

Accepted

## Context

Boxcrew is a Grok Bot use-case directory that needs to:

1. Serve a catalog of skills, jobs, setup guides, and industries
2. Support search and filtering
3. Deploy easily to Railway
4. Remain maintainable without a backend team

## Decision

### Boxcrew Owns

- **Catalog content**: Skills, jobs, setup guides, industries, glossary
- **SEO**: Static pages with proper meta tags
- **UI**: Search, navigation, copy-paste functionality
- **Content management**: Typed TypeScript files in git

### Boxcrew Does Not Own

- **Grok Bot proxy**: We do not proxy requests to Grok Bot
- **Authentication**: No auth, no Clerk, no user accounts
- **Database**: No DB, content lives in git
- **CMS**: No external CMS, content is code
- **Custom domain**: No custom domain setup

### Railway Because

**Why Railway:**
- `next start` with standalone build works out of the box
- Zero config deployment from git
- No Vercel lock-in

**Trade-off: Edge TTFB:**
- Railway serves from a single region (not edge)
- TTFB is higher for distant users
- Acceptable because content is static and cacheable
- SEO is not time-sensitive for this use case

### No Database Because

**Why no DB:**
- 39 routes total (not 39,000)
- Content changes infrequently
- Git provides version history
- TypeScript provides type safety
- No runtime queries means no runtime failures

**What this enables:**
- Zero-env builds (no DB connection string)
- No cold start latency for DB connections
- Content reviewed in PRs like code
- No backup/restore complexity

## Consequences

### Positive

- Simpler deployment and operations
- Content changes are code changes (reviewed, versioned)
- No database maintenance or costs
- Build-time type checking catches content errors

### Negative

- Adding content requires a deploy
- No user-generated content
- No personalization
- No analytics (would need separate service)

### Neutral

- Search is client-side (acceptable for 39 items)
- No real-time updates (acceptable for this use case)

## Alternatives Considered

### Vercel + Edge Functions

- Pros: Better TTFB, more features
- Cons: Vercel pricing, lock-in
- Decision: Railway is simpler and sufficient

### Database (Postgres/SQLite)

- Pros: Dynamic content, querying
- Cons: Complexity, maintenance, env vars
- Decision: 39 rows don't need a database

### Headless CMS (Sanity, Contentful)

- Pros: Non-developer editing
- Cons: Another service, sync complexity, cost
- Decision: Content authors can edit TypeScript

## References

- [Next.js Standalone Output](https://nextjs.org/docs/app/api-reference/next-config-js/output)
- [Railway Next.js Deployment](https://docs.railway.app/guides/nextjs)
