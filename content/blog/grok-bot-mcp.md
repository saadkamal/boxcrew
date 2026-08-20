---
title: Grok Bot MCP (public HTTPS only)
slug: grok-bot-mcp
description: Grok Bot remote MCP is public HTTPS (streamable HTTP) with OAuth from Cursor infrastructure. Not localhost. Not stdio. An IDE mcp.json that works can fail on the Bot.
---

# Grok Bot MCP (public HTTPS only)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok Bot remote MCP is public HTTPS. Streamable HTTP. OAuth runs from Cursor infrastructure, not from your laptop. Localhost will not attach. stdio will not attach. A URL that works in Cursor IDE `mcp.json` can fail on the Bot with `fetch failed` before any OAuth card appears. Cursor staff called that an architectural split, not a misconfig, on [forum thread 168188](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188). Team MCP allowlists are team policy. Prefer a first-party plugin when one exists. This is Grok Bot, not Grok Build, not grok.com Skills.

## Direct answer

| Path | Where the handshake runs | What can work | What fails |
| --- | --- | --- | --- |
| Grok Bot remote MCP | Cursor cloud infrastructure | Public HTTPS, streamable HTTP, OAuth the infra can reach | localhost, private DNS, VPN-only hosts, stdio |
| Cursor IDE `mcp.json` (URL MCP) | A process on your machine | The same URL if your laptop can reach it, including local network and VPN | Nothing about this proves the Bot can reach it |
| Cursor IDE stdio / `mcp-remote` | Your machine | Local bridges the IDE can spawn | Grok Bot cannot use that bridge |
| First-party plugin (Help-confirmed) | Account-wide Plugins | Gmail, Notion, Slack | Zoom (error 4700). Do not inventory the rest. |
| Box browser | The shared Agent Computer | Sites with no connector and no public MCP | Not a substitute for a private MCP you cannot publish |

If the host is not reachable over public HTTPS from the open internet, stop. Do not paste the IDE config into Grok Bot and expect OAuth to start. The click path lives on [Remote MCP](/setup/remote-mcp). The reusable pack is [Remote MCP connector](/skills/remote-mcp-connector).

## Public HTTPS vs localhost

Grok Bot is a cloud agent on a shared box. The connection to a remote MCP, and the OAuth discovery against `/.well-known/...`, run from Cursor's side. Dean Rie, 12 Aug 2026, on thread 168188: "the endpoint has to be publicly reachable over HTTPS from the open internet." `fetch failed` before the connect card means that first fetch from their side did not work. DNS or connection. The reporter's own probe timed out or returned 500. Same diagnosis.

Treat "public endpoint only" as the rule for the cloud path. Staff said exactly that. A host-local bridge, like the IDE's stdio `mcp-remote` flow, was not confirmed and has no ETA. Do not wait on a product change you were not promised.

Localhost is a laptop address. The box is not your laptop. stdio is a process the IDE can spawn. The Bot will not spawn it. A second forum thread asked whether Grok Bot supports local MCP. The intended path is remote HTTP from the cloud, plus the catalog, plus the box browser. Do not build a private desktop-bridge story and call it supported.

OAuth tokens for hosted MCP stay with Cursor's backend. The computer does not store those tokens. That is a teams-doc fact, not a reason to point the Bot at an internal host.

If you need the tool tonight and the MCP is private, use the [box browser](/setup/the-box) and take over for login. That is the fallback the computer docs already name: prefer a connector when one exists, use the browser when there is no connector.

## Why the Cursor IDE config is not the Bot config

Same URL. Different network path.

In the IDE, a URL-based MCP connects locally. The process on your machine calls the gateway and opens the browser OAuth flow. Servers on a local network, behind a VPN, or on a private host can work, because your laptop can see them.

In Grok Bot, that handshake is not on your laptop. The cloud path has to complete discovery from Cursor infra. The server can show `Failed to load MCP server`, flip to `needsAuth`, and sit at 0 tools. Authenticate returns "Sign-in never started" plus `fetch failed`. No connect card. No IdP `redirect_uri` error, because you never got that far.

So: an `mcp.json` that works is evidence about your machine. It is not evidence about the Bot.

Do not claim every Cursor MCP works on Grok Bot. Do not publish a community server list as supported. Help-confirmed plugins by name are Gmail, Notion, and Slack. Zoom is broken (error 4700). Everything else is box-browser, a public MCP you verified, or unknown.

If a secret is required, put it in Settings secrets or a secure request. Do not paste it in chat. The [secret handoff](/skills/secret-handoff) sitting still applies. The box is shared. A second Bot does not hide the token.

Add one server per sitting. Test one tool call. Stop. The skill is written that way on purpose.

## Team allowlists

On a team, Grok Bot follows the existing Cursor plugin and MCP policy. There are no separate Grok Bot plugin controls. [Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) says that in one paragraph. MCP authentication is shared across Cursor and Grok Bot.

Admins set this under Team Settings → MCP Configuration:

- Disable All MCP Commands Globally
- A server allowlist and denylist
- Whether members can add their own servers
- Require Team Network Allowlist, so each server's address must also sit on the team network allowlist

When policy blocks a server, members see it disabled on the Grok Bot Plugins page with "Disabled by team admin." Sign-in attempts get the same message. That is team policy, not a broken OAuth card. Enable the plugin on the team plugins page, add its server URL to the allowlist if you use one, and have the member restart the app.

Some vendors restrict their MCP endpoints to their own administrators. A vendor-side permission error is not an allowlist miss and not a localhost miss. Check the provider.

Legacy Privacy Mode still blocks Grok Bot entirely. That is a different gate. Fix it before you debug MCP.

Do not treat an allowlist as a security boundary between Bots. The roster still shares one computer. Allowlists decide which servers the member may call. They do not give the expense Bot a private network the outbound Bot cannot see.

## Prefer a first-party plugin when one exists

[Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps): prefer a connector when one is available. It is often more reliable than clicking through a website. Use the browser for services without a connector, or for a visual workflow the connector does not expose.

Help-confirmed names, as of the pages we fetched: Gmail, Notion, Slack. See [Plugins](/setup/plugins). Zoom is broken (error 4700, no workaround on Help). Do not write "220 plugins." That number is press, not Help. Do not install a Grok Build marketplace package and expect the Bot to see it. Different product.

Plugins are account-wide. One Gmail login is every Bot's Gmail login. Set [approvals](/setup/approvals) before you add a server that can send. Require Approval for send, purchase, delete, and prod. Auto-review is a check, not a guarantee.

If the job only needs a page the box can open, skip MCP. Teach the path, save a [draft skill](/skills/teach-a-task), stop at a reviewable artifact. MCP is for a public, structured endpoint you actually need. It is not a personality.

## FAQ

**Does Grok Bot support localhost MCP?**
No. The endpoint must be publicly reachable over HTTPS from the open internet.

**Does Grok Bot support stdio MCP?**
No. The IDE's stdio / `mcp-remote` bridge is not a Grok Bot path.

**Why does the same URL work in Cursor IDE and fail on Grok Bot?**
The IDE runs OAuth on your machine. Grok Bot runs discovery from Cursor infrastructure. Staff confirmed this on [thread 168188](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188).

**What does `fetch failed` mean?**
The initial fetch to your gateway from Cursor's side did not work. Check public HTTPS and that `/.well-known/` is reachable from the open internet. It is not the same error as an IdP rejecting `redirect_uri`.

**My admin sees "Disabled by team admin."**
Team MCP policy is blocking the server. Allowlist, denylist, or "members cannot add servers." That is team policy.

**Should I add a custom MCP if Gmail, Notion, or Slack already covers the job?**
No. Use the plugin. Add MCP only for a public HTTPS server you verified.

## Sources

- [Grok Bot custom remote MCP OAuth (forum 168188)](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188)
- [Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Connect plugins](https://cursor.com/help/grok-bot/connect-plugins)
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
