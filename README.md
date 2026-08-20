# Boxcrew

Grok Bot use-case directory. Skills, jobs, and setup guides.

## What It Is

Boxcrew is a static catalog of Grok Bot configurations and workflows. Browse skills (specific capabilities), jobs (role archetypes), setup guides, and industry-specific recommendations.

Key principles:
- Never auto-send, auto-spend, or auto-publish
- Every outbound action requires human approval
- Grok Bot is a research assistant, not an autonomous actor

## Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4
- **Content**: Typed TypeScript catalog (no MDX, no CMS, no database)
- **Deployment**: Railway via `next start` (standalone build)

## Project Structure

```
boxcrew/
├── app/              # Next.js App Router pages
│   ├── setup/        # Setup guide routes
│   ├── skills/       # Skill routes
│   ├── jobs/         # Job routes
│   ├── industries/   # Industry routes
│   └── ...           # Other pages (home, glossary, etc.)
├── components/       # React components
├── content/          # Typed content catalog
│   ├── types.ts      # Content type definitions
│   ├── setup.ts      # Setup guides data
│   ├── skills.ts     # Skills data
│   ├── jobs.ts       # Jobs data
│   ├── industries.ts # Industries data
│   └── pages.ts      # Standalone pages data
├── lib/              # Utility functions
└── docs/             # Documentation (not a public route)
```

Four layers only: `content`, `lib`, `app`, `components`. No fifth layer.

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Railway Deployment

This project uses `output: "standalone"` in `next.config.ts` for Railway deployment.

```bash
# Railway build command
npm run build

# Railway start command
npm start
```

No environment variables required. Zero-env standalone build.

## Content Model

All content is typed TypeScript. See `content/types.ts` for definitions.

### Content Types

- **SetupGuide**: Configuration tutorials with steps, prerequisites, and troubleshooting
- **Skill**: Specific capabilities with outcome, sources, copy-paste prompt, reviewable artifact, and approval requirements
- **Job**: Role archetypes that combine skills with persona, routine, and never-do lists
- **Industry**: Vertical groupings with curated job recommendations
- **Page**: Standalone content pages (home, glossary, etc.)

### Adding Content

See [docs/adding-content.md](docs/adding-content.md) for instructions.

## Routes

39 total routes:

- `/` - Home
- `/grok-vs-grok-bot` - Model vs agent comparison
- `/glossary` - Terms and concepts
- `/setup/[slug]` - 8 setup guides
- `/skills/[slug]` - 16 skills
- `/jobs/[slug]` - 8 jobs
- `/industries/[slug]` - 4 industries

## Design

- Background: `#0B0B0C`
- Text: `#F2F0EA`
- Accent: `#E3A53A`
- Font: Geist
- No gradients

## Facts

- Requires Cursor account for Grok Bot access
- Shared box does not provide isolation between users
- Plugins available: Gmail, Notion, Slack (Zoom is broken)
- Remote MCP requires public HTTPS endpoints
- Never auto-send, auto-spend, or auto-publish
- Not affiliated with Cursor, xAI, or SpaceXAI
