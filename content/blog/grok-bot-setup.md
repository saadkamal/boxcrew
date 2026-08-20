---
title: How to set up Grok Bot
slug: grok-bot-setup
description: Download the desktop or iOS app, sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy, create one named Bot, and run one five-minute task. Pro and Pro+ will not start.
---

# How to set up Grok Bot

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Download the Grok Bot desktop app for macOS or Windows, or the iPhone app on iOS 18+. Sign in with a Cursor account on Ultra, a Teams Premium seat, or SuperGrok Heavy. Create one named Bot. Run one five-minute task that stops at a reviewable artifact. [Cursor Pro and Pro+ will not start this product](https://cursor.com/help/grok-bot/plans). There is no Linux desktop app, no Android app, and no iPad app. Legacy Privacy Mode blocks start. This is Grok Bot, not Grok chat.

## Plan gate

The first sitting is not a download. It is a plan check.

[Cursor Help, Plans and billing](https://cursor.com/help/grok-bot/plans) lists three doors: Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. The [11 Aug 2026 launch post](https://x.ai/news/introducing-grok-bot) names the same three. Pro and Pro+ do not include Grok Bot. There is no second Grok Bot SKU.

If you are on a team, Help says a Standard seat alone does not provide access. xAI's teams page is worded differently about Standard, trial, and on-demand. Do not flatten those two sentences here. Check your admin. The longer writeup is [Grok Bot plans](/blog/grok-bot-plans). The Ultra yes/no is [Does Cursor Ultra include Grok Bot?](/blog/does-cursor-ultra-include-grok-bot).

Grok Bot [requires cloud data storage](https://docs.x.ai/grok-bot/get-started). Accounts on Legacy Privacy Mode must move to a supported Cursor data setting before the app will start. That change lives in [Cursor privacy settings](https://cursor.com/dashboard/settings?openPrivacy=true), not an xAI panel.

The click path after the gate is [/setup/install-plan](/setup/install-plan). Stop there if the plan is wrong. The rest of this post assumes it is not.

## Install (desktop macOS/Windows, iOS 18+)

Official download is [cursor.com/bot/onboarding](https://cursor.com/bot/onboarding). Official get-started is the install page: [docs.x.ai/grok-bot/get-started](https://docs.x.ai/grok-bot/get-started). Help's sitting is [Getting started with Grok Bot](https://cursor.com/help/grok-bot/getting-started).

macOS: Apple silicon or Intel. Open the disk image. Drag Grok Bot to Applications. If macOS asks, choose Open. Apple menu, About This Mac. A Chip field means Apple silicon. A Processor field means Intel.

Windows: x64 or Arm64. Run the installer. Open Grok Bot from the Start menu. Settings, System, About, System type if you are not sure which binary.

iPhone: iOS 18 or later. [Grok Bot on the App Store](https://apps.apple.com/us/app/grok-bot/id6794501026). Same account. Same box. What the phone can and cannot do is [Grok Bot on iOS](/blog/grok-bot-ios).

| Surface | Ships? |
| --- | --- |
| macOS desktop (Apple silicon and Intel) | Yes |
| Windows desktop (x64 and Arm64) | Yes |
| iPhone, iOS 18+ | Yes |
| iPad | No |
| Android | No |
| Linux desktop app | No. The box is a Linux VM. That is not a Linux app. |

The box is a managed Linux computer in the cloud. That fact does not give you a Linux desktop client. xAI's teams FAQ is blunt: [there is no Linux desktop app](https://docs.x.ai/grok-bot/teams-and-enterprises).

Do not wait for an Android recap. Official mobile copy is iPhone only.

## Sign in with Cursor

[There is no separate Grok Bot login](https://cursor.com/help/grok-bot/sign-in). Open the app. Choose Get started, or Sign In with Cursor from Settings. Finish in the browser. Come back.

Use the same Cursor account that owns the plan. Not a grok.com account. Not an xAI-only login. If the org uses SSO, complete the normal Cursor SSO flow.

Help getting-started: [sign in with the same Cursor account that should own your plan and usage](https://cursor.com/help/grok-bot/getting-started).

On first use the app introduces Bots, the shared computer, and routines, then asks which tools you use. Those answers shape teammate suggestions. They do not connect Gmail or Slack by themselves. Computer setup runs in the background. The last step opens Meet a future teammate.

If the app will not start and you still have Legacy Privacy Mode on, that is the block. Fix the Cursor setting. Do not reinstall first.

## Create the first named Bot

[Help](https://cursor.com/help/grok-bot/getting-started) says name, shape, color, and title. [xAI get-started](https://docs.x.ai/grok-bot/get-started) says a short name, one primary job, and a description of how it should work.

Pick a suggested teammate from Meet a future teammate, or Create your own.

Give it a human first name. Title is the job, two to five words. Description is four parts: job, sources, output, never-list. Confirmed plugins only if you will actually connect them: Gmail, Notion, Slack. Zoom is broken (error 4700).

Focused Bots build useful context. One catch-all Bot does not. Official copy agrees. You can add more later with New, Create new agent, when the work actually splits.

The sitting for this is [/setup/first-bot](/setup/first-bot). A first roster pattern, if you already know you want a coordinator: [/jobs/chief-of-staff](/jobs/chief-of-staff).

Do not create a dozen desks on day one. One named Bot. One job.

## First task

[xAI's first-task shape](https://docs.x.ai/grok-bot/get-started) is outcome, sources, constraints, deliverable, review point.

For a first result that needs no connector, attach a document:

Summarize this document in five bullets. List every date, decision, and open question in a separate section. Cite the page or section for each item. Do not change the source file.

That is the official attach-a-file sitting. Use it. Then stop. Read the reply. Do not send mail. Do not spend. Do not publish.

A later task can open a dashboard. Take over the box for a password, a passkey, a two-factor code, or a CAPTCHA. The session persists on the shared computer. Other Bots on the roster can use that cookie. Tour: [/setup/the-box](/setup/the-box).

Steer or stop with another message. If the Bot needs a plugin, follow the Connect card. Do not invent Zoom as working.

Help is clear on the risk: [agents can act on real accounts, files, and the web](https://cursor.com/help/grok-bot/getting-started). You sign in on the box yourself. The Bot does not see the password. Never paste API keys into chat.

## What to do next

Plugins first, then a skill.

Connect only what the job needs. Help-confirmed: Gmail, Notion, Slack. Settings, Plugins. Shared across the roster. Sitting: [/setup/plugins](/setup/plugins).

Then do the job once more the way you want it repeated. Save the method as a skill. A skill is how. A routine is when. Do not schedule until the artifact is reliable.

The first hour ends with one named Bot and one reviewable reply. That is setup. Recaps that skip the plan gate, skip Privacy Mode, or invent a Linux installer are not a first hour.

## FAQ

**How do I set up Grok Bot?**

Confirm Ultra, Teams Premium, or SuperGrok Heavy. Download desktop or iOS 18. Sign in with a Cursor account. Create one named Bot. Attach a file. Stop at the reply.

**Where do I download Grok Bot?**

[cursor.com/bot/onboarding](https://cursor.com/bot/onboarding) for desktop. The App Store for iPhone. There is no Linux or Android installer.

**Does Cursor Pro include Grok Bot?**

No. Pro and Pro+ do not.

**Why will Grok Bot not start?**

Wrong plan, or Legacy Privacy Mode. Both are official blocks.

**Do I sign in with a Grok account?**

No. Sign in with a Cursor account. SuperGrok Heavy is a later link flow, not the login.

**Is this Grok chat?**

No. Grok is the chat assistant on grok.com and X. Grok Bot is named teammates on one shared box.

## Sources

- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Help getting-started](https://cursor.com/help/grok-bot/getting-started)
- [Sign in](https://cursor.com/help/grok-bot/sign-in)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Onboarding / download](https://cursor.com/bot/onboarding)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Grok Bot for iOS](https://docs.x.ai/grok-bot/mobile)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
