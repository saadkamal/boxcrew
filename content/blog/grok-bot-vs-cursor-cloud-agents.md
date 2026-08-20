---
title: Grok Bot vs Cursor Cloud Agents
slug: grok-bot-vs-cursor-cloud-agents
description: Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box that can drive apps. Same Cursor account, different product.
---

# Grok Bot vs Cursor Cloud Agents

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok chat is not Grok Bot. Cursor Cloud Agents are not Grok Bot either. Cloud Agents are isolated coding VMs on a repo. They clone, branch, test, and open a pull request. Grok Bot is named teammates on one shared box that can drive apps, inboxes, and `/workspace`. Same Cursor account. Different product. Grok Bot access is Ultra, Teams Premium, or SuperGrok Heavy. Cloud Agents do not share that box. The short three-way table is [/grok-vs-grok-bot](/grok-vs-grok-bot). This page is the longer split.

## Direct answer

First, the collision that sent you here.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI chat assistant on grok.com and X | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None. A conversation | One shared managed box | A fresh isolated VM per run |
| Sign-in | A Grok / xAI account | A Cursor account | A Cursor account plus source control |

Grok is the chat assistant. Grok 4.x is a model name. A Cloud Agent can pick that name. That does not make the run a Grok Bot. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

Then the product split.

| | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- |
| Job | Named teammates. Inbox, browser, `/workspace` | Isolated coding VM. Repo to pull request |
| Computer | One shared box per account (Agent Computer / the box) | A fresh isolated VM per run |
| Isolation | Screens, not security boundaries. Files and cookies are shared | VM isolation. Secrets and network controls on the Cloud Agent side |
| Sign-in | Cursor account on Ultra, Teams Premium, or SuperGrok Heavy | Cursor account on a paid plan, with source control connected |
| Surface | Grok Bot desktop + iOS 18+ | Cursor Desktop, cursor.com/agents, iOS, Slack, GitHub, Linear, API |
| Skills | Saved in the Bot product. `/` and Settings → Plugins → Yours | Repo `SKILL.md` under `.cursor/skills/` or `.agents/skills/` |
| Schedule | A routine on one Bot: schedule, Slack, or GitHub | Cloud Agent automations: schedule plus GitHub, Slack, Linear, webhooks |
| Artifact | A reviewable draft in chat or `/workspace`. Human sends, spends, files | A merge-ready PR, plus screenshots, videos, logs |

Neither row is "better." They solve different rooms. Coding isolation wins for PR work. The shared box wins when the job lives in a site with no clean API.

## Isolation vs a shared box

[Cloud Agents docs](https://cursor.com/docs/cloud-agent) are blunt about the VM. The agent gets a development environment like a laptop: cloned repos, dependencies, secrets, startup commands, network access. Cursor manages provisioning and isolation. You can restrict outbound domains and add secrets in the Cloud Agents dashboard.

[Grok Bot computer docs](https://docs.x.ai/grok-bot/computer-and-apps) are blunt the other way. Every Bot on your account uses the same computer. Cookies, files, CLI creds, plugins. The computer is assigned to your user, not to an individual Bot. Each Bot gets a screen so they can work in parallel. The screens are not separate security boundaries.

That is the whole argument. Do not put a credential on the box if another Bot on the account should not use it. Do not spawn a second Bot and call it isolation. The tour is [/setup/the-box](/setup/the-box).

Cloud Agents do not share the Grok Bot box. A Cloud Agent VM is not a named teammate. Do not write that they are the same computer with two skins.

## Repo / PR loop vs inbox / browser / `/workspace`

A Cloud Agent starts from source control. An admin connects GitHub, GitLab, Bitbucket, or Azure DevOps. The agent clones, works on a separate branch, and pushes for handoff. [cursor.com/cloud](https://cursor.com/cloud) sells merge-ready PRs, self-testing in the sandbox, and remote desktop control so you can click the running app without checking out the branch.

That loop is the product. It is why isolation exists.

Grok Bot starts from a conversation with a named Bot. The computer already has a browser and `/workspace`. You take over for 2FA. You connect Gmail, Notion, or Slack if those are the sources. You ask for a draft list, a repro pack, a digest. The Bot stops at the artifact. You send, spend, or file.

Official Grok Bot jobs include bug reproduction. That is a pack: steps, screenshots, what you saw. It is not a production pull request. Use [/jobs/bug-reproduction](/jobs/bug-reproduction) and [/skills/bug-repro-pack](/skills/bug-repro-pack) when the bug lives in a UI the box can open. Hand the pack to a human, or to a Cloud Agent, if the next step is a PR.

We will not claim Grok Bot writes production PRs the way Cloud Agents do. The surfaces are different. The review bar is different.

## Schedules: Cloud Agent triggers vs Grok Bot routines

Do not merge these.

[Cursor Automations](https://cursor.com/cloud) run Cloud Agents on a schedule or on events from GitHub, Slack, Linear, webhooks, and more. They watch a repo. They are a coding product with a clock.

A Grok Bot routine tells one Bot when to run a skill. Official triggers we will name: a schedule, Slack, or GitHub. Narrow the event. Do not listen to every new message. Cap: 50 routines per Bot. Skill first, routine second. The sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

A Slack message that says "needs repro" can start a Grok Bot routine that leaves a pack in the conversation. A Slack message that says "fix this on main" is a Cloud Agent trigger. Same chat app. Different computer. Different artifact.

grok.com Automations are a third product. They are not Grok Bot routines and they are not Cloud Agent schedules. If you searched "grok bot automations," check the URL before you configure anything.

## When to use which

Use a Cloud Agent when the work is a repo. You want a branch, tests, and a PR you can merge. Isolation is the feature. Parallel runs are the feature. [Docs](https://cursor.com/docs/cloud-agent) even say you can run as many as you want in parallel without your laptop on the network.

Use Grok Bot when the work is a tool a person would click. Inbox. CRM in the browser. A Notion page. A file that two Bots will hand off in `/workspace`. A roster with a chief of staff. A routine that drafts overnight and waits for you.

Fair split, not a winner: coding isolation wins for PR work. The shared box wins for multi-app jobs that are not a commit. Plenty of nights you want both. Same Cursor login. Two apps. Do not point a Bot at `main` and call it a Cloud Agent. Do not point a Cloud Agent at your shared Gmail cookies. It does not have them.

This page will not pick a champion. It will not invent VM sizes. It will not quote Cloud Agent prices. Cloud Agents are charged at API pricing for the selected model. That is their billing page, not ours.

## Skills collision

"Skills" is four products sharing a noun.

Cursor Agent Skills are `SKILL.md` files in the repo or in `~/.cursor/skills/`. [Cursor's skills docs](https://cursor.com/docs/skills) are the IDE / Cloud Agent format. You type `/` in Agent chat.

Grok Bot skills live in the Bot product. You save after a real task. You type `/` in the Grok Bot desktop composer. You enable the skill per Bot under Settings → Plugins → Yours. They are not a folder you copy from `.cursor/skills/`.

Grok chat Skills and the Grok Build marketplace are two more xAI nouns. They are not this product.

Do not paste a `.cursor/skills` or `.grok/skills` file into a Bot chat and expect it to load. The long split is [Grok Bot skills vs Cursor Agent Skills](/blog/grok-bot-skills-vs-cursor-skills).

## FAQ

**Is Grok Bot a Cursor Cloud Agent?**
No. Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box.

**Is Grok Bot the same as Grok chat?**
No. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Do Cloud Agents share the Grok Bot box?**
No. Different computers. Different isolation story.

**Can Grok Bot open a production pull request the way Cloud Agents do?**
Do not count on that loop. Cloud Agents are built for clone, branch, PR. Grok Bot is built for the box. A bug-repro Bot leaves a pack. A human or a Cloud Agent can take the next commit.

**Are routines the same as Cursor Automations?**
No. A routine belongs to one Grok Bot. Cursor Automations schedule Cloud Agents. grok.com Automations are a third thing.

**Which should I use?**
PR work: Cloud Agent. Inbox, browser, `/workspace`, named roster: Grok Bot. Same account. Do not merge the products.

## Sources

- [Cloud Agents docs](https://cursor.com/docs/cloud-agent)
- [cursor.com/cloud](https://cursor.com/cloud)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Cursor Agent Skills](https://cursor.com/docs/skills)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
