---
title: Grok Bot MCP is public HTTPS only
slug: grok-bot-mcp
description: Grok Bot remote MCP is public HTTPS with OAuth from Cursor infra. Localhost and stdio do not attach. An IDE mcp.json can fail on the Bot.
---

Grok Bot remote MCP is public HTTPS. OAuth runs from Cursor infrastructure. Localhost will not attach. stdio will not attach. A URL that works in Cursor IDE `mcp.json` can fail on the Bot with `fetch failed` before any OAuth card.

[Dean Rie, 12 Aug 2026](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188) called that an architectural split, not a misconfig. This page will not invent a fix date.

## Public HTTPS only

Streamable HTTP. Reachable from the internet. Not a process on your laptop. The Bot fetches from Cursor infra, so a tunnel to your desk is not a documented path.

Catalog: [/setup/remote-mcp](/setup/remote-mcp), [/skills/remote-mcp-connector](/skills/remote-mcp-connector).

## Why IDE mcp.json is not the Bot config

The IDE can spawn local servers. The Bot cannot see localhost. Staff repeated that on [Does Grok Bot support local MCP?](https://forum.cursor.com/t/does-grok-bot-support-local-mcp-e-g-workflowy/168182). Workflowy and 1Password ENOENT reports sit in that thread. They are not a supported-server list.

If it only works because the IDE started it, it will not work here.

## Local, stdio, 1Password

If the server only listens on 127.0.0.1, the Bot will not complete OAuth. Do not wrap it in Tailscale or Cloudflare and call that official. No Grok Bot doc we cite blesses those paths.

stdio is an IDE pattern. The Bot does not spawn it.

## Team allowlists

[Teams](https://docs.x.ai/grok-bot/teams-and-enterprises) puts MCP on a team allowlist. Your admin can block a URL that works on a personal Ultra account. Check policy before you debug the Bot.

## Prefer a first-party plugin

Help-confirmed plugins: Gmail, Notion, Slack. Zoom is broken (error 4700). [/setup/plugins](/setup/plugins). If there is no plugin, use the box browser and stop at a review list. Approvals: [/setup/approvals](/setup/approvals).

Do not build a community MCP list on this page.

## FAQ

**Does Grok Bot support local MCP?**
No. Public HTTPS only.

**Why does the same URL work in Cursor and fail here?**
OAuth and fetch run from Cursor infra, not your machine. Forum 168188.

**When will localhost work?**
No date on this page.

## Sources

- [Forum 168188](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188)
- [Forum 168182](https://forum.cursor.com/t/does-grok-bot-support-local-mcp-e-g-workflowy/168182)
- [Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
