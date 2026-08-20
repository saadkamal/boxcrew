---
title: Grok Bot vs Hermes Agent
slug: grok-bot-vs-hermes
description: Hermes Agent is an open-source harness you host, with Bot Mode as isolated profiles. Grok Bot named Bots share one managed box. Different tenancy.
---

Pick Hermes Agent if you want to host an open-source harness and keep named Bots as isolated profiles. Pick Grok Bot if you want one managed box and you already pay Cursor Ultra, Teams Premium, or SuperGrok Heavy.

Hermes Agent is Nous Research software. Canonical docs: [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/). It is not the Hermes model family. Grok Bot Bots share one Agent Computer. [Overview](https://docs.x.ai/grok-bot/overview). Identity once: [/grok-vs-grok-bot](/grok-vs-grok-bot). The other self-host compare is [Grok Bot vs OpenClaw](/blog/grok-bot-vs-openclaw).

| | Hermes Agent | Grok Bot |
| --- | --- | --- |
| What it is | Open-source harness you host | Hosted product on a Cursor plan |
| Tenancy | Isolated `~/.hermes/profiles/` | One shared box |
| Talk | Messaging gateways | Desktop + iOS 18+ |
| Learning loop | Hermes has one | This page will not claim one |

## Agent vs the Hermes LLM line

Hermes the model line is weights. Hermes Agent is a harness with skills, messaging gateways, and a learning loop. If a page mixes them, leave.

Official host is hermes-agent.nousresearch.com. Do not take install counts from hermes-agent.org. Those numbers were stale on 21 Aug 2026.

## Isolated profiles vs one shared box

[Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode) keeps named Bots as isolated profiles under `~/.hermes/profiles/`.

Grok Bot named Bots share files, cookies, and CLI creds. Own screen, not own machine. [Computer](https://docs.x.ai/grok-bot/computer-and-apps). [/setup/the-box](/setup/the-box).

That is the tenancy difference. Do not write that Hermes Bot Mode shares one security boundary the way Grok Bots share a box.

## hermes claw migrate

The [repo README](https://github.com/NousResearch/hermes-agent) documents `hermes claw migrate` for an OpenClaw move. Quote that command. Do not invent flags.

GitHub showed 233,470 stars on 21 Aug 2026 AEST. Date it. Ignore undated recap counts.

## Messaging gateways vs desktop plus iOS

Hermes talks Telegram, Discord, Slack, WhatsApp, Signal, and more.

Grok Bot is desktop and iOS 18+. Plan gate: [Plans](https://cursor.com/help/grok-bot/plans). Start: [/setup/install-plan](/setup/install-plan). A Bot description: [/skills/bot-persona-kit](/skills/bot-persona-kit).

Grok Bot does not have a Hermes-style learning loop. This page will not claim one.

## Who should run which

You want to run the process and keep profiles isolated. Hermes Agent.

You want the computer managed and you already have Ultra, Premium, or Heavy. Grok Bot.

Nous Research: [nousresearch.com](https://nousresearch.com). Boxcrew is not affiliated.

## FAQ

**Is Hermes Agent the Hermes model?**
No. Agent is the harness. The model line is separate.

**Do Grok Bot Bots isolate like Hermes Bot Mode?**
No. Grok Bots share one box.

**Is Hermes the only self-improving agent?**
This page will not say that.

## Sources

- [Hermes Agent](https://hermes-agent.nousresearch.com/)
- [Docs](https://hermes-agent.nousresearch.com/docs/)
- [Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)
- [hermes-agent on GitHub](https://github.com/NousResearch/hermes-agent)
- [Nous Research](https://nousresearch.com)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Plans](https://cursor.com/help/grok-bot/plans)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
