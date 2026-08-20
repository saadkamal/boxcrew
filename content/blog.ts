/**
 * Blog catalog. Generated from Jules posts. Do not invent essays here.
 */

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly category: "compare" | "setup" | "skills" | "the-box";
  readonly body: string;
}

export const BLOG_CATEGORIES = {
  compare: "Compare",
  setup: "Setup & plans",
  skills: "Skills",
  "the-box": "The box",
} as const;

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "grok-bot-computer",
    title: "Grok Bot shared computer",
    description: "All your Bots share one persistent cloud Linux computer. xAI calls it the Agent Computer. Cursor Help calls it the box. Screens are not a security boundary.",
    category: "the-box",
    body: `All of your Grok Bots share one persistent cloud Linux computer. [xAI](https://docs.x.ai/grok-bot/computer-and-apps) calls it the Agent Computer. [Cursor Help](https://cursor.com/help/grok-bot/computer-recovery) calls it the box. It is not Box.com. It is not one VM per Bot. Cookies, files, and CLI creds live on that machine. A second Bot is another screen, not another wall.

## One computer, two official names

The computer belongs to the account. Every Bot on that account uses it. [Teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises) say the same: one computer per member, shared by their Bots.

xAI writes Agent Computer and cloud computer. Help writes the box. Same object. Tour: [/setup/the-box](/setup/the-box). Word: [/glossary](/glossary).

## The query grok bot box hits Box.com

Search \`grok bot box\` today and you get Box.com MCP pages, not Cursor Help. If you meant the Grok Bot computer, start at [computer recovery](https://cursor.com/help/grok-bot/computer-recovery). This page will not pretend Help ranks for that query.

## What is shared

Files in \`/workspace\`. Browser cookies. CLI credentials. [Files and results](https://docs.x.ai/grok-bot/files-and-results) is the handoff pattern. [/skills/workspace-handoff](/skills/workspace-handoff) is the copy-paste.

One takeover sign-in for 2FA covers the roster. That is the point. It is also the risk. [/skills/box-login-hygiene](/skills/box-login-hygiene).

## Own screen is not own machine

Each Bot has a screen. Press still writes a computer per Bot. Official computer docs say the opposite. Do not treat a screen as a security boundary. [Approvals](https://docs.x.ai/grok-bot/approvals-security-and-privacy) say do not use Bots as a security boundary. Settings: [/setup/approvals](/setup/approvals).

## Local computer is opt-in

Your laptop is a different machine. Local execution is separate and defaults to Ask every time. The box recovery buttons do not restore files that only lived on the Mac.

## A second Bot is not isolation

Duplicate a Bot for scope. A client roster. A staging login. Not because you want a clean cookie jar. Group chat does not isolate data. Same box.

## FAQ

**Do my Bots share a computer?**
Yes. One Agent Computer. Help calls it the box.

**Is that Box.com?**
No. The query is colliding with Box MCP.

**Does a second Bot isolate cookies?**
No.

## Sources

- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Computer recovery](https://cursor.com/help/grok-bot/computer-recovery)
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- [Files and results](https://docs.x.ai/grok-bot/files-and-results)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-first-hour",
    title: "Grok Bot in the first hour",
    description: "Download desktop or iOS 18+, sign in on Ultra, Premium, or Heavy, create one named Bot, run one real task, then save a skill. Pro will not start.",
    category: "setup",
    body: `Download the desktop app or the iOS 18+ app, sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy, create one named Bot, and run one real task. Then save a skill. Pro and Pro+ will not start. There is no Linux desktop client, no Android app, and no iPad app.

## Plan gate

Confirm the plan first. The long version is [Does Cursor Ultra include Grok Bot?](/blog/grok-bot-plans). Official table: [Plans and billing](https://cursor.com/help/grok-bot/plans). Click path: [/setup/install-plan](/setup/install-plan).

Legacy Privacy Mode blocks start. Turn it off. [Sign-in](https://cursor.com/help/grok-bot/sign-in) is a Cursor account, not grok.com.

## Install

Desktop: macOS or Windows from [cursor.com/bot/onboarding](https://cursor.com/bot/onboarding). Phone: iOS 18+. Official get-started: [docs](https://docs.x.ai/grok-bot/get-started) and [Help](https://cursor.com/help/grok-bot/getting-started).

No Linux desktop. No Android. No iPad. Do not wait for a coming-soon.

## Create one named Bot

A human first name. A title that is the job, two to five words. A description that names sources, the artifact, and a never-list. [/setup/first-bot](/setup/first-bot).

Do not connect Slack yet. Do not write a routine yet. One Bot. Not a roster.

## One real task, then save

Official get-started uses a short attach-a-file sitting. Attach something real. Read the reply. If it is a plan for six other jobs, the description is soft. Tighten the refuse line. Send the same task again.

When the method is worth repeating, save it as a skill. Teach a task can wait. Next hour, not this one, is plugins and a routine.

## Plugins

[Help](https://cursor.com/help/grok-bot/connect-plugins) confirms Gmail, Notion, Slack. Zoom dies with error 4700. Everything else is the box browser or unknown. Shared across the roster. [/setup/plugins](/setup/plugins). The computer: [/setup/the-box](/setup/the-box). A first roster pattern: [/jobs/chief-of-staff](/jobs/chief-of-staff).

## FAQ

**Will Cursor Pro start Grok Bot?**
No.

**Can I do this on iPad?**
No iPad app. iOS 18+ phone, or desktop.

**Should I make six Bots in the first hour?**
No. One Bot. One task. Then save.

## Sources

- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Help getting-started](https://cursor.com/help/grok-bot/getting-started)
- [Sign-in](https://cursor.com/help/grok-bot/sign-in)
- [Plans](https://cursor.com/help/grok-bot/plans)
- [Onboarding](https://cursor.com/bot/onboarding)
- [Connect plugins](https://cursor.com/help/grok-bot/connect-plugins)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-mcp",
    title: "Grok Bot MCP is public HTTPS only",
    description: "Grok Bot remote MCP is public HTTPS with OAuth from Cursor infra. Localhost and stdio do not attach. An IDE mcp.json can fail on the Bot.",
    category: "setup",
    body: `Grok Bot remote MCP is public HTTPS. OAuth runs from Cursor infrastructure. Localhost will not attach. stdio will not attach. A URL that works in Cursor IDE \`mcp.json\` can fail on the Bot with \`fetch failed\` before any OAuth card.

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

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-plans",
    title: "Does Cursor Ultra include Grok Bot?",
    description: "Yes. Cursor Ultra includes Grok Bot on the same account. Pro and Pro+ do not. There is no second Grok Bot SKU.",
    category: "setup",
    body: `Yes. [Cursor Help](https://cursor.com/help/grok-bot/plans) puts Grok Bot on the same Cursor account as Ultra. Pro and Pro+ do not include it. Teams need a Premium seat. SuperGrok Heavy is the other personal door. There is no second Grok Bot subscription.

If you came here to pick a plan, that is the whole answer. The rest is the edges Help actually writes down.

## Yes. Ultra includes it

Sign in with the Ultra Cursor account. Download from [cursor.com/bot/onboarding](https://cursor.com/bot/onboarding). The first sitting is [/setup/install-plan](/setup/install-plan).

The [launch post](https://x.ai/news/introducing-grok-bot) names the same three doors: Ultra, Teams Premium, SuperGrok Heavy.

## Pro and Pro+ do not

Help has a heading for people already on Pro or Pro+. Grok Bot is not on those plans. Sign-in is still a Cursor account. The plan is the gate.

## Teams: Premium vs Standard

Help: a Standard seat alone does not provide access.

[xAI teams](https://docs.x.ai/grok-bot/teams-and-enterprises) says Standard seats can use the free trial or on-demand usage.

Those two sentences do not match. Do not flatten them. Ask your admin which rule your org actually runs.

## SuperGrok Heavy

The other personal door is SuperGrok Heavy. [Heavy help](https://cursor.com/help/grok-bot/supergrok-heavy) covers the claim flow. Claiming Heavy can cancel a Stripe-billed Pro or Pro+. Do not assume SuperGrok or SuperGrok Plus.

## Trial

Help describes the trial as a usage credit with a 7-day window. It is not a day-count only. When the credit is gone, the window does not matter.

## Mac and iOS share one bucket

Desktop and iOS 18+ draw from the same usage. Help says it resets weekly. It does not publish the number, so this page will not invent one.

Identity, if you still need it, is one link: [/grok-vs-grok-bot](/grok-vs-grok-bot). Words: [/glossary](/glossary).

## FAQ

**Does Cursor Ultra include Grok Bot?**
Yes, on that Cursor account.

**Does Cursor Pro include Grok Bot?**
No. Pro and Pro+ do not.

**Do I need a Grok Bot subscription?**
No. There is not one.

**Does SuperGrok include it?**
Help names SuperGrok Heavy. Not SuperGrok.

## Sources

- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy)
- [Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-skills",
    title: "Grok Bot skills are not SKILL.md",
    description: "A Grok Bot skill is a reusable how you save in the Bot product. It is not a repo SKILL.md, not Grok chat Skills, and not Grok Build.",
    category: "skills",
    body: `A Grok Bot skill is a reusable how. You run the job once, save the method, call it with \`/\`, and enable it on that Bot under Settings, Plugins, Yours. A routine is when that how runs. Official page: [skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations).

If you searched \`grok bot SKILL.md\`, you hit another product. This page names them so you can leave.

## Skill is how. Routine is when

Do the work. If you would do it again next week, save the skill. Then, if it should fire without you, add a routine. Official triggers: a schedule, Slack, or GitHub. Fifty routines per Bot. Do not listen to every new message.

Path: [/setup/skill-then-routine](/setup/skill-then-routine).

## Run once, then save

A good skill names sources, the reviewable artifact, the approval line, and what to do with stale data. It stops at a list a human acts on. It does not send, spend, or publish.

Copy these:

1. [/skills/account-health-watch](/skills/account-health-watch)
2. [/skills/bot-persona-kit](/skills/bot-persona-kit)
3. [/skills/teach-a-task](/skills/teach-a-task)

Pair the first with [/jobs/account-health](/jobs/account-health).

## Teach a task writes a draft skill

The skills page says Teach a task records a browser pass on the box and produces a draft skill. Up to ten minutes. No microphone. You add the rules the demo missed. You test.

The [launch post](https://x.ai/news/introducing-grok-bot) says the recording saves as a routine. That is the wrong noun. Follow the skills page.

## Four other products named skills

[Cursor Agent Skills](https://cursor.com/docs/skills) are \`SKILL.md\` in the IDE or a repo. Grok Bot does not watch \`.cursor/skills/\`.

[Grok chat Skills](https://x.ai/news/grok-skills) (May 2026) belong to grok.com.

[Grok Build marketplace](https://x.ai/news/grok-plugin-marketplace) uses \`.grok/skills/\`. Installing there does not add a Bot skill.

[grok.com Automations](https://x.ai/news/grok-automations) (16 Jul 2026) are scheduled Grok chat jobs. Not a Bot routine.

There is no public ClawHub for Grok Bot. Boxcrew indexes copy-paste text. It does not host a registry.

## FAQ

**Are Grok Bot skills SKILL.md files?**
No. Those are Cursor Agent Skills. Bot skills live under Plugins, Yours.

**Does Teach a task save a routine?**
No. Official output is a draft skill.

**Is there a Grok Bot skill store?**
No public one.

## Sources

- [Skills, routines, and automations](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Cursor Agent Skills](https://cursor.com/docs/skills)
- [Grok chat Skills](https://x.ai/news/grok-skills)
- [Grok Build marketplace](https://x.ai/news/grok-plugin-marketplace)
- [Grok Automations](https://x.ai/news/grok-automations)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-update-vs-reset",
    title: "Update vs Reset the Grok Bot computer",
    description: "Update and Recover keep durable state. Reset drops unsynced work. Do not Reset first. Updating the app is not updating the computer.",
    category: "the-box",
    body: `Update or Recover first. Reset last. [Computer recovery](https://cursor.com/help/grok-bot/computer-recovery) is the page. Update and Recover keep durable state. Reset drops unsynced work. Updating the Grok Bot app on your Mac or phone is a different button. It does not refresh the computer.

Do not Reset because the screen looks stuck.

## Least-destructive order

1. Wait, or reopen the computer view.
2. Update or Recover the Grok Bot computer.
3. Reset only if you accept data loss.

Copy-paste skill: [/skills/update-vs-reset](/skills/update-vs-reset). Tour: [/setup/the-box](/setup/the-box). [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps). [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting).

## Update and Recover

These keep files and logins that already synced. Installed packages on the box may still need a reinstall. That is cheaper than a Reset.

Use Update or Recover when the computer is slow, a package broke, or the desktop will not render. You are asking for a refresh of the same machine, not a new one.

The app update on desktop or iOS is a client bump. The computer is still the same box.

## When Reset is right

The computer will not come back after Update or Recover. You have copied out what you need from \`/workspace\`. You accept that unsynced work is gone. Then Reset.

Every Bot shares this computer. Reset hits the whole roster. Do not Reset to isolate one Bot. A second Bot is not a new machine.

## What you lose

Unsynced files in \`/workspace\`. Recent browser state that never made it to durable storage. Session cookies that never synced. This page will not invent a percentage.

Files that never left your Mac were never on the box. Recovery will not bring them back.

## Then fix logins

After Update, Recover, or Reset, check the shared cookies. One takeover sign-in covers the roster. [/skills/box-login-hygiene](/skills/box-login-hygiene). Re-drop handoff folders: [/skills/workspace-handoff](/skills/workspace-handoff).

## FAQ

**Should I Reset first?**
No.

**Is app update the same as computer update?**
No.

**Will Reset restore everything?**
No. It drops unsynced work.

**Does Reset isolate one Bot?**
No. One computer. The whole roster feels it.

## Sources

- [Computer recovery](https://cursor.com/help/grok-bot/computer-recovery)
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-vs-cursor-cloud-agents",
    title: "Grok Bot vs Cursor Cloud Agents",
    description: "Use a Cloud Agent for repo and pull request work. Use Grok Bot when the job lives in inbox, browser, or /workspace on one shared box.",
    category: "compare",
    body: `Use a Cursor Cloud Agent when the job is a repo and a pull request. Use Grok Bot when the job lives in an inbox, a site with a weak API, or \`/workspace\` on one shared box. Same Cursor account. Different computer.

[Cloud Agents](https://cursor.com/docs/cloud-agent) are isolated coding VMs. [Grok Bot](https://docs.x.ai/grok-bot/overview) is named teammates on one Agent Computer. Identity table if you still need it: [/grok-vs-grok-bot](/grok-vs-grok-bot). Once.

| | Cloud Agent | Grok Bot |
| --- | --- | --- |
| Computer | Isolated VM on the repo | One shared box |
| Job | Branch, test, PR | Inbox, browser, \`/workspace\` |
| Skills | \`SKILL.md\` in the repo | Settings, Plugins, Yours |
| Schedule | Cloud Agent automations (GitHub, Slack, Linear, webhooks) | Routine: schedule, Slack, or GitHub |

## Isolation vs shared box

A Cloud Agent gets a fresh VM on the repo. Secrets and network stay on that run. [cursor.com/cloud](https://cursor.com/cloud).

Grok Bot Bots share files, cookies, and CLI creds. Each Bot has a screen. That is not a wall. [Computer docs](https://docs.x.ai/grok-bot/computer-and-apps). Tour: [/setup/the-box](/setup/the-box).

Do not clone a repo onto the box to have a look. That is a Cloud Agent job.

## Repo and PR vs apps with no API

Cloud Agent: branch, test, open a PR.

Grok Bot: Gmail, Slack, Notion, or the box browser. A review list. A human sends. Bug sitting that needs a staging browser: [/jobs/bug-reproduction](/jobs/bug-reproduction), [/skills/bug-repro-pack](/skills/bug-repro-pack).

## Cloud Agent schedules vs Grok Bot routines

Cloud Agent automations can include GitHub, Slack, Linear, webhooks.

A Grok Bot routine belongs to one Bot. Official triggers: schedule, Slack, or GitHub. Save the skill first. [/setup/skill-then-routine](/setup/skill-then-routine).

Do not merge those products because both say schedule.

## Skills live in different places

Cloud Agents and the IDE read \`SKILL.md\` in the repo. Grok Bot skills live under Settings, Plugins, Yours. They do not watch \`.cursor/skills/\`.

## FAQ

**Should I use Grok Bot for a production PR?**
No. Use a Cloud Agent.

**Do Cloud Agents share the Grok Bot box?**
No.

**Which is better?**
Neither. Different rooms.

## Sources

- [Cloud Agents](https://cursor.com/docs/cloud-agent)
- [cursor.com/cloud](https://cursor.com/cloud)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-vs-hermes",
    title: "Grok Bot vs Hermes Agent",
    description: "Hermes Agent is an open-source harness you host, with Bot Mode as isolated profiles. Grok Bot named Bots share one managed box. Different tenancy.",
    category: "compare",
    body: `Pick Hermes Agent if you want to host an open-source harness and keep named Bots as isolated profiles. Pick Grok Bot if you want one managed box and you already pay Cursor Ultra, Teams Premium, or SuperGrok Heavy.

Hermes Agent is Nous Research software. Canonical docs: [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/). It is not the Hermes model family. Grok Bot Bots share one Agent Computer. [Overview](https://docs.x.ai/grok-bot/overview). Identity once: [/grok-vs-grok-bot](/grok-vs-grok-bot). The other self-host compare is [Grok Bot vs OpenClaw](/blog/grok-bot-vs-openclaw).

| | Hermes Agent | Grok Bot |
| --- | --- | --- |
| What it is | Open-source harness you host | Hosted product on a Cursor plan |
| Tenancy | Isolated \`~/.hermes/profiles/\` | One shared box |
| Talk | Messaging gateways | Desktop + iOS 18+ |
| Learning loop | Hermes has one | This page will not claim one |

## Agent vs the Hermes LLM line

Hermes the model line is weights. Hermes Agent is a harness with skills, messaging gateways, and a learning loop. If a page mixes them, leave.

Official host is hermes-agent.nousresearch.com. Do not take install counts from hermes-agent.org. Those numbers were stale on 21 Aug 2026.

## Isolated profiles vs one shared box

[Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode) keeps named Bots as isolated profiles under \`~/.hermes/profiles/\`.

Grok Bot named Bots share files, cookies, and CLI creds. Own screen, not own machine. [Computer](https://docs.x.ai/grok-bot/computer-and-apps). [/setup/the-box](/setup/the-box).

That is the tenancy difference. Do not write that Hermes Bot Mode shares one security boundary the way Grok Bots share a box.

## hermes claw migrate

The [repo README](https://github.com/NousResearch/hermes-agent) documents \`hermes claw migrate\` for an OpenClaw move. Quote that command. Do not invent flags.

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

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
  {
    slug: "grok-bot-vs-openclaw",
    title: "Grok Bot vs OpenClaw",
    description: "OpenClaw wins if you want to host a gateway and talk from WhatsApp or Telegram. Grok Bot wins if you want a managed box and desktop plus iOS.",
    category: "compare",
    body: `Pick OpenClaw if you want to host the gateway and message it from WhatsApp, Telegram, or iMessage, with a public skill registry. Pick Grok Bot if you want a managed computer you do not run, and you already pay Cursor Ultra, Teams Premium, or SuperGrok Heavy.

OpenClaw is a self-hosted agent gateway. Docs: [openclaw.ai](https://openclaw.ai/), [docs.openclaw.ai](https://docs.openclaw.ai/). Grok Bot is a hosted Cursor-signed-in product with one Agent Computer. [Overview](https://docs.x.ai/grok-bot/overview). Identity once: [/grok-vs-grok-bot](/grok-vs-grok-bot).

| | OpenClaw | Grok Bot |
| --- | --- | --- |
| Runs | Your machine or a VPS | One managed box |
| Talk | WhatsApp, Telegram, iMessage, and other channels | Desktop + iOS 18+ |
| Skills | \`SKILL.md\` + ClawHub | Settings, Plugins, Yours |
| Who keeps it up | You | Cursor / xAI |

## Where it runs

OpenClaw: your machine or a VPS. You keep the process up.

Grok Bot: one managed Linux computer. [Computer](https://docs.x.ai/grok-bot/computer-and-apps). Install: [/setup/install-plan](/setup/install-plan). The box: [/setup/the-box](/setup/the-box).

## How you talk to it

OpenClaw is built around channels. WhatsApp, Telegram, Discord, Slack, iMessage, Signal.

Grok Bot is desktop (macOS, Windows) and iOS 18+. No Linux desktop app. No Android. No iPad.

## Skills install vs Settings, Plugins

OpenClaw skills are a folder with \`SKILL.md\`. [ClawHub](https://docs.openclaw.ai/clawhub) is a public registry. \`openclaw skills install\` is the loop. Skills docs: [tools/skills](https://docs.openclaw.ai/tools/skills).

Grok Bot skills live under Settings, Plugins, Yours. There is no public Bot registry. Boxcrew indexes copy-paste. It does not host OpenClaw skills. A first description: [/skills/bot-persona-kit](/skills/bot-persona-kit). A roster: [/jobs/chief-of-staff](/jobs/chief-of-staff).

## Clawdbot and Moltbot

Those are old names for OpenClaw. Clawd / Clawdbot, then Moltbot, then OpenClaw on 29 Jan 2026. [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html). Do not make extra Boxcrew URLs for the aliases.

GitHub [openclaw/openclaw](https://github.com/openclaw/openclaw) showed 386,904 stars on 21 Aug 2026 AEST. Date it or ignore older recap numbers.

## Stewardship

The [OpenClaw Foundation post](https://openclaw.ai/blog/introducing-openclaw-foundation) keeps the project MIT. OpenAI shows up as a donor and inference supporter. That is not ownership. Do not write that OpenAI acquired OpenClaw. Do not write that Grok Bot replaced it.

## FAQ

**Is OpenClaw the same as Grok Bot?**
No. One you host. One is a managed box behind a Cursor plan.

**What about Clawdbot or Moltbot?**
Old names. Same project.

**Who should pick Grok Bot?**
Someone who wants the computer managed and already has Ultra, Premium, or Heavy.

## Sources

- [openclaw.ai](https://openclaw.ai/)
- [OpenClaw docs](https://docs.openclaw.ai/)
- [OpenClaw skills](https://docs.openclaw.ai/tools/skills)
- [ClawHub](https://docs.openclaw.ai/clawhub)
- [openclaw/openclaw](https://github.com/openclaw/openclaw)
- [CNBC](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html)
- [Foundation](https://openclaw.ai/blog/introducing-openclaw-foundation)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.`,
  },
] as const;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(
  category: BlogPost["category"]
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
