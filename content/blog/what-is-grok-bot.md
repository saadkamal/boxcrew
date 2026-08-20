---
title: What is Grok Bot? (not Grok chat)
slug: what-is-grok-bot
description: Grok Bot is named, persistent teammates that share one cloud Linux computer. It is not the Grok chat assistant.
---

# What is Grok Bot?

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok Bot is a Cursor desktop and iOS 18 app for named teammates. You [sign in with a Cursor account](https://cursor.com/help/grok-bot/sign-in). Each Bot has a name, a job, skills, and routines. All of them share one cloud Linux computer. xAI calls that computer the Agent Computer. Cursor Help calls it the box. They share files, cookies, and CLI creds. Each Bot has its own screen, not its own machine. It is not Grok chat. The short collision table is [/grok-vs-grok-bot](/grok-vs-grok-bot). Access is Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not include it.

## The 80-word definition

Grok Bot is a Cursor desktop and iOS 18 app for named teammates. Each named Bot has a job, skills, and routines. They share one cloud Linux computer called the box: browser, files, terminal. Plugins and MCP are structured tools. A routine fires on a schedule or an event. A skill is the how. You review send, spend, and delete. Not Grok chat. Not Cursor Cloud Agents. Sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy.

That is the product. A thread on grok.com is a different one. So is a Cloud Agent that clones a repo and opens a pull request.

[Official overview](https://docs.x.ai/grok-bot/overview) names a Bot as one persistent teammate. You message it. You give it a task, the sources, and a stop. It works on the shared computer and comes back when something needs approval. [Cursor Help](https://cursor.com/help/grok-bot/getting-started) says the same thing in fewer words: agents you keep around, with plugins, a cloud computer, and routines.

## Not Grok. Not Grok 4.x. Not Cursor Cloud Agents

The name is the mess. People search "what is grok bot" and land on a chat window, a model card, or a coding VM.

| Name | What it actually is | Shared box? |
| --- | --- | --- |
| Grok chat | xAI's chat assistant on grok.com and X | No |
| Grok 4.x | A model family | No |
| Cursor Cloud Agents | Isolated coding VMs on a repo | No. Each run is its own VM |
| Grok Bot | Named teammates on desktop and iOS | Yes. One box per account |

Grok chat is a conversation. No named roster. No skills. No routines. No box. If that is the collision you have, stop here and read [/grok-vs-grok-bot](/grok-vs-grok-bot).

Grok 4.x is a model. Cloud Agents can pick it. That does not make the Cloud Agent a Grok Bot.

Cursor Cloud Agents clone a repo, work on a branch, and open a pull request. Same Cursor login. Different product. The longer split is [Grok Bot vs Cursor Cloud Agents](/blog/grok-bot-vs-cursor-cloud-agents).

Press still writes "a computer per Bot." [The launch post](https://x.ai/news/introducing-grok-bot) talks about Bots having a computer of their own. [The forum announcement](https://forum.cursor.com/t/introducing-grok-bot/168053) is clearer: your Bots share one computer, and each gets its own screen. Screens are work surfaces. They are not security walls.

## The shared computer (box / Agent Computer)

Open Agent Computer from a conversation. That is the box. Browser, filesystem, terminal, `/workspace`.

What is shared across the roster:

- Browser cookies and signed-in sessions
- Files, including `/workspace`
- Command-line credentials
- Plugins. Confirmed today: Gmail, Notion, Slack. Zoom is broken (error 4700)

What is not your laptop: the box is a separate computer. [Official computer docs](https://docs.x.ai/grok-bot/computer-and-apps) say a Bot only runs commands on the Mac or Windows machine in front of you when that capability is enabled and you approve it.

You can leave the preview. Closing the app or the laptop does not stop cloud work. That is architecture, not a reliability SLA. Do not read launch "always-on" copy as an uptime promise.

When a site needs a password, 2FA, or a CAPTCHA, you take over, complete the blocked step, and hand control back. Do not paste secrets into chat.

The sitting is [/setup/the-box](/setup/the-box). If you only remember one fact: a second Bot is not isolation.

## Skills, routines, plugins: the three verbs

Three objects. Do not merge them.

A **skill** is how. A reusable instruction set: sources, sequence, output, approval. You run the job once, then save the method. Type `/` in the desktop composer to reference it. Enable it per Bot under Settings → Plugins → Yours. Skills can be used across your Bots. The Bot still needs the login.

A **routine** is when. It tells one Bot to run a skill on a schedule, or on a Slack or GitHub event. Cap: 50 routines per Bot. Combined cap: 50 Bots and group chats. Do not listen to every new message. Background routines can run with the laptop closed.

A **plugin** is a signed-in connector. Settings → Plugins. Account-wide. Confirmed: Gmail, Notion, Slack. Prefer a plugin when one exists. Use the box browser when it does not.

A job stops at a reviewable artifact. Never auto-send, spend, publish, or file. A chief-of-staff Bot that delegates is the official roster pattern. That page is [/jobs/chief-of-staff](/jobs/chief-of-staff).

[Get started](https://docs.x.ai/grok-bot/get-started) wants a first task with an outcome, sources, constraints, a deliverable, and a review point. Attach a file if you want a five-minute result with no login. Then give it one real tool.

## Who can use it

[Plans and billing](https://cursor.com/help/grok-bot/plans) lists three doors. No dollar amounts on that page, so none here.

- Cursor Ultra: included on the same account
- Cursor Teams: a Premium seat. A Standard seat alone does not provide access
- SuperGrok Heavy: the other door

Pro and Pro+ do not include Grok Bot. There is no second Grok Bot subscription. Sign-in is a Cursor account, not grok.com, not an xAI account.

Platforms: macOS, Windows, iOS 18+. No Linux desktop. No Android. No iPad. Legacy Privacy Mode blocks start. [Get started](https://docs.x.ai/grok-bot/get-started) says accounts on Legacy Privacy Mode must move to a supported Cursor data setting before Grok Bot can start.

macOS and iOS share one usage bucket on the signed-in Cursor account. Usage resets weekly. Help does not publish the number, so we do not either.

The click path is [/setup/install-plan](/setup/install-plan).

## What to read next on Boxcrew

1. [/grok-vs-grok-bot](/grok-vs-grok-bot) if the name is still colliding
2. [/setup/install-plan](/setup/install-plan) if the plan gate is next
3. [/setup/the-box](/setup/the-box) if you need the shared computer
4. [/glossary](/glossary) for Bot, skill, routine, box, plugin
5. [/jobs/chief-of-staff](/jobs/chief-of-staff) if you want a small roster, not one mega-Bot

Body explains. Those pages are the paste.

## FAQ

**What is Grok Bot?**
Named, persistent teammates on a Cursor desktop and iOS 18 app. They share one cloud Linux computer. Not Grok chat.

**Is Grok Bot an AI agent?**
Official docs call a Bot a persistent, named agent or one AI teammate. It has a computer, skills, and routines. It is not a one-off chat tab.

**Is Grok Bot the same as Grok?**
No. Grok is the chat assistant. Grok Bot is the Bot product. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Who makes Grok Bot?**
You sign in with a Cursor account. Docs live on docs.x.ai. The [launch post](https://x.ai/news/introducing-grok-bot) is on x.ai/news under SpaceXAI branding. Boxcrew is not affiliated with any of them.

**Does each Bot get its own computer?**
No. All Bots on your account share one computer. Each Bot has a screen.

**What plans include it?**
Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not.

**Can I use it on Linux, Android, or iPad?**
No. Desktop is macOS and Windows. Phone is iOS 18+.

## Sources

- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Getting started with Grok Bot](https://cursor.com/help/grok-bot/getting-started)
- [Introducing Grok Bot (Cursor forum)](https://forum.cursor.com/t/introducing-grok-bot/168053)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
