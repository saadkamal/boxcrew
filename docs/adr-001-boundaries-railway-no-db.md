# ADR-001: Boundaries, Railway, no database

Status: accepted. 21 Aug 2026. Alec.
Product: Boxcrew. SITE_NAME is Boxcrew. boxcrew.dev is later; do not buy; do not block.

## Context

v1 is a 39-URL Grok Bot catalog. Overnight. Zero env. No auth. No UGC. Diana locked Railway. pstack is required.

## Decision

One Next.js App Router app. Typed TypeScript catalog in git. Client search. Railway standalone. No database. No Clerk. No Stripe.

## Boundaries

- Boxcrew owns catalog, SEO, and UI.
- Cursor / xAI own Grok Bot. We link official docs. We do not proxy sign-in, plugins, or the box.
- Readers copy artifacts into their own desktop. We do not host user skills or a marketplace.
- Four code layers: content (data), lib (query + SEO), app (HTTP), components (UI). No fifth layer.
- Nia owns tokens. Cora assigns. Quinn gates. This note does not invent product claims.

## Why Railway

Railway runs next start + standalone with no wrangler, no adapter, no extra account. PR previews if GitHub is connected. Diana locked it.

Cloudflare would be the edge pick for a static export. We are not doing a static export in v1: OG image generation and a SITE_URL constant patched after first deploy want a Node server. 39 pages do not need the edge. Trade-off: colder TTFB. Accept it.

## Why no database

The catalog is 39 rows and is the product. Git is the CMS. Search is an in-memory filter. A database adds env vars (forbidden), migrations, and a path to UGC we forbade. Vera slug patches are pull requests. Trade-off: content ships with a deploy. That is the review path we want.

## Rejected

MDX + a generated index (two sources of truth). Clerk / Stripe. Custom domain in v1. Repository interfaces, CMS adapters, Contentlayer, search services, i18n, env schemas, feature flags.

## Consequences

- Kai sets SITE_URL in site.ts after Railway exists. Never an env var.
- Ben implements catalog-contract.ts. No 17th skill. No old IA routes.
- Nora implements tokens.md. No extra hues.
- Quinn rejects any of the rejected items and any missing anti-doorway field.
