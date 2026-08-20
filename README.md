# Boxcrew

Grok Bot use-case directory. Skills, jobs, and setup guides.

## What It Is

Boxcrew is a 39-page catalog of Grok Bot configurations and workflows. Browse skills (specific capabilities), jobs (role archetypes), setup guides, and industry-specific recommendations. Readers copy artifacts into their own Cursor desktop. We do not host user skills or a marketplace.

Key principles:
- Never auto-send, auto-spend, or auto-publish
- Every outbound action requires human approval
- Grok Bot is a research assistant, not an autonomous actor

Not affiliated with Cursor, xAI, or SpaceXAI.

## Stack

- Next.js 15 (App Router, standalone output)
- TypeScript (strict mode)
- Tailwind CSS v4
- Typed content catalog in git (no MDX, no CMS, no database)
- Railway deployment via `next start`

## Project Structure

```
boxcrew/
├── app/           # Next.js App Router pages
├── components/    # React components
├── content/       # Typed content catalog
├── lib/           # Utilities and site constants
└── docs/          # Documentation (not a public route)
```

Four layers: `content`, `lib`, `app`, `components`. No fifth layer.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

No environment variables required. Zero-env build.

## Railway Deployment

Railway runs `next start` with standalone output. No wrangler, no adapter, no extra account.

### Setup

1. Connect GitHub repo to Railway
2. Railway auto-detects Nixpacks/Node
3. Build command: `npm run build` (auto-detected)
4. Start command: `npm start` (auto-detected)

### Configuration

- **Variables**: None. Do not add any.
- **Volumes**: None. Do not add any.
- **Add-ons**: None. No database, no Redis, no nothing.
- **Custom domain**: Not in v1. boxcrew.dev is later; do not buy; do not block.

### Rollback

Redeploy previous Railway deployment. That's it.

### After First Deploy

Kai sets `SITE_URL` in `lib/site.ts` to the Railway URL. Never an env var. Commit and push.

## Content Model

All content is typed TypeScript in `content/`. Git is the CMS.

- **SetupGuide**: Configuration tutorials
- **Skill**: Specific capabilities with anti-doorway fields
- **Job**: Role archetypes combining skills
- **Industry**: Vertical groupings with job links

See [docs/adding-content.md](docs/adding-content.md) for how to add content.

## Routes

39 routes total:

- `/` - Home with search
- `/grok-vs-grok-bot` - Model vs agent comparison
- `/glossary` - Terms and concepts
- `/setup/[slug]` - 8 setup guides
- `/skills/[slug]` - 16 skills
- `/jobs/[slug]` - 8 jobs
- `/industries/[slug]` - 4 industries

## Architecture Decision

See [docs/adr-001-boundaries-railway-no-db.md](docs/adr-001-boundaries-railway-no-db.md) for why Railway, why no database, and what we rejected.
