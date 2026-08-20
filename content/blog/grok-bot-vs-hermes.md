---
title: Grok Bot vs Hermes Agent
slug: grok-bot-vs-hermes
description: Hermes Agent is an open-source agent you run yourself, with a learning loop and an OpenClaw migrator. Grok Bot is a hosted, plan-gated product with a shared managed box.
---

# Grok Bot vs Hermes Agent

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Hermes Agent is Nous Research's open-source agent. You run it. Learning loop. Skills. Messaging gateways. An OpenClaw migrator. Grok Bot is a hosted Cursor/xAI product. Named Bots. One managed box. Plan-gated install. They are not the same job. This is not Grok chat, not a Cursor Cloud Agent, and not the Hermes model family. The three-way collision table is [/grok-vs-grok-bot](/grok-vs-grok-bot). Canonical Hermes docs live at [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/), not on stale recap domains.

## Direct answer

First, the collision. Then Hermes.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI's chat assistant on grok.com and X | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None. A conversation | One shared managed box | A fresh isolated VM per run |
| Sign-in | A Grok / xAI account | A Cursor account | A Cursor account plus source control |

Grok is the chat assistant. Grok 4.x is a model family. A Cloud Agent can pick that family. That does not make it a Grok Bot. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

| | Grok Bot | Hermes Agent |
| --- | --- | --- |
| Shape | Hosted product. Desktop + iOS 18+ | Open-source agent you install (MIT) |
| Who | Cursor / xAI | [Nous Research](https://nousresearch.com) |
| Computer | One managed cloud Linux box per account | Your host, a VPS, Docker, SSH, or serverless |
| Named Bots | Roster on one shared box. Screens, not walls | [Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode): isolated profiles under `~/.hermes/profiles/` |
| Learning | Preferences in the Bot product. No Hermes-style loop | Official docs: a built-in learning loop that writes skills from experience |
| OpenClaw path | None | `hermes claw migrate` |
| Channels | Grok Bot desktop and iPhone | Telegram, Discord, Slack, WhatsApp, Signal, and more |
| Access | Ultra, Teams Premium, or SuperGrok Heavy | You bring a provider or a local endpoint |

Different jobs. Hermes if you want to run it. Grok Bot if you already pay Ultra, a Premium seat, or Heavy.

The [hermes-agent repo](https://github.com/NousResearch/hermes-agent) had 233,470 stars on 21 Aug 2026 AEST. Date it if you reuse the number. Recaps still quote 64k or 140k. Those are stale. Do not cite [hermes-agent.org](https://hermes-agent.org/) for platform counts.

## Hermes the model family vs Hermes Agent

Two products share a name. Do not merge them.

Hermes, Nomos, and Psyche are Nous model families. People search "Hermes" and land on a weight card.

[Hermes Agent](https://hermes-agent.nousresearch.com/docs/) is the agent harness. CLI, desktop, gateway, skills, memory, Bot Mode. Built by the same lab. It talks to Nous Portal, OpenRouter, or any endpoint. It is not "the Hermes model with a chat skin." It is not a Cursor product.

Grok Bot has no model picker. [Teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises) say model choice is fully managed. That is a different contract. A Bot does not run Hermes. Hermes Agent is not Grok.

If you only wanted the model card, stop. This page is the agent.

## Self-host vs one managed box

[Hermes docs](https://hermes-agent.nousresearch.com/docs/) are blunt about place. Local. Docker. SSH. Daytona. Modal. You pick the host. Talk to it from Telegram while it works on a VM you never SSH into. It is not tied to your laptop.

Grok Bot is the opposite bet. [Computer docs](https://docs.x.ai/grok-bot/computer-and-apps): one persistent cloud Linux computer, assigned to your user, shared by every Bot on the account. Cursor Help calls it the box. xAI calls it the Agent Computer. You do not provision it. You do not pick the image. Update / Recover / Reset are Help verbs. The tour is [/setup/the-box](/setup/the-box).

That is the whole argument. Hermes: you run the runtime. Grok Bot: Cursor runs the box. Do not flatten them into "both have a computer."

We will not quote a VPS price. We will not invent VM sizes. We will not call Hermes serverless "free when idle" a Grok Bot feature.

## Named Bots: shared box vs isolated profiles

Grok Bot's roster is names on one machine. Piper does account health. Jordan does outbound. They share cookies, `/workspace`, and CLI creds. Each Bot gets a screen so they can click in parallel. Official wording: screens are work surfaces, not security boundaries. Duplicate a Bot for scope, not for isolation. Cap: 50 Bots and group chats combined. The name kit is [/skills/bot-persona-kit](/skills/bot-persona-kit).

Hermes Bot Mode is a UI over profiles. Official line: a Bot is a Hermes profile. Isolated config, memory, skills, credentials, and chat history under `~/.hermes/profiles/<name>/`. `hermes -p <name> chat` is the same agent. Routines show up in `hermes cron list`. Groups are 2 to 6 Bots in a room. `@` mentions hand work off.

Hermes Bot Mode Bots do not share one security boundary the way Grok Bots share one box. Official Bot Mode: isolated profiles. A Grok Bot second name is a second job description on the same cookie jar.

## Learning loop and `hermes claw migrate`

Hermes ships a learning loop. [Docs](https://hermes-agent.nousresearch.com/docs/): it creates skills from experience, improves them during use, and builds a user model across sessions. That is their claim. We will not call it the only self-improving agent. We will not write that Grok Bot has the same loop.

Grok Bot remembers how you like a job done. You save a skill after a real task. You optionally put it on a routine. That is a how and a when. It is not Hermes' learning loop.

If you are coming from OpenClaw, the [repo README](https://github.com/NousResearch/hermes-agent) names the command: `hermes claw migrate`. Dry-run first with `--dry-run`. `--preset user-data` migrates without secrets. `hermes setup` offers the same import when it sees `~/.openclaw`. The longer OpenClaw split is [Grok Bot vs OpenClaw](/blog/grok-bot-vs-openclaw). Grok Bot has no migrator from either project.

Cite the README for those commands. Do not invent a third flag.

## Messaging gateways vs Desktop + iOS

Hermes lives where you already chat. Official gateway list includes Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Mattermost, email, SMS, Teams, Google Chat, and more. One gateway. Many surfaces. Desktop exists for macOS, Windows, and Linux. Android via Termux is in the install matrix.

Grok Bot is a Cursor desktop app (macOS, Windows) and an iPhone app on iOS 18+. Same Cursor account. Same usage bucket. No Linux desktop client. No Android client. No iPad client. Confirmed plugins: Gmail, Notion, Slack. Zoom is broken (error 4700). You message a named Bot in that app, not in WhatsApp.

If the job is "Telegram the agent on a host I run," Hermes is the shape. If the job is "named teammates on a box I did not stand up," Grok Bot is the shape.

## Fair pick

Pick Hermes Agent when you want to run the agent. You want isolated profiles. You want a gateway. You want `hermes claw migrate`. You will read [the docs](https://hermes-agent.nousresearch.com/docs/) and the [Bot Mode page](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode). You will not ask Boxcrew to operate it.

Pick Grok Bot when you already pay Cursor Ultra, hold a Teams Premium seat, or can claim SuperGrok Heavy. You want a managed box and a plan-gated install. You will accept Desktop + iOS and a shared cookie jar. The sitting is [/setup/install-plan](/setup/install-plan).

Plenty of desks will run both. Same human. Two computers. Do not paste a Hermes profile into a Bot chat. Do not point a Bot at `~/.hermes` and call it Bot Mode.

We will not publish a benchmark. We will not invent a launch month. We will not claim affiliation with Nous.

A Grok Bot job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## FAQ

**Is Grok Bot the same as Hermes Agent?**
No. Hermes Agent is an open-source agent you run. Grok Bot is a hosted Cursor/xAI product with one managed box.

**Is this the Hermes model?**
No. Hermes Agent is the harness. Hermes, Nomos, and Psyche are Nous model families. Different objects.

**Is Grok Bot the same as Grok chat?**
No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Do Hermes Bots share one box like Grok Bots?**
No. Official Bot Mode: isolated profiles under `~/.hermes/profiles/`. Grok Bots share cookies on one computer.

**Can I migrate OpenClaw into Grok Bot?**
No. Hermes has `hermes claw migrate`. Grok Bot does not.

**Who should pick which?**
Run it yourself: Hermes. Already on Ultra / Premium / Heavy: Grok Bot.

## Sources

- [Hermes Agent](https://hermes-agent.nousresearch.com/)
- [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/)
- [Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- [Nous Research](https://nousresearch.com)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
