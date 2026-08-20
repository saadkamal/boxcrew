---
title: Grok Bot vs Cursor Cloud Agents
slug: grok-bot-vs-cursor-cloud-agents
description: Use a Cloud Agent for repo and pull request work. Use Grok Bot when the job lives in inbox, browser, or /workspace on one shared box.
---

Use a Cursor Cloud Agent when the job is a repo and a pull request. Use Grok Bot when the job lives in an inbox, a site with a weak API, or `/workspace` on one shared box. Same Cursor account. Different computer.

[Cloud Agents](https://cursor.com/docs/cloud-agent) are isolated coding VMs. [Grok Bot](https://docs.x.ai/grok-bot/overview) is named teammates on one Agent Computer. Identity table if you still need it: [/grok-vs-grok-bot](/grok-vs-grok-bot). Once.

| | Cloud Agent | Grok Bot |
| --- | --- | --- |
| Computer | Isolated VM on the repo | One shared box |
| Job | Branch, test, PR | Inbox, browser, `/workspace` |
| Skills | `SKILL.md` in the repo | Settings, Plugins, Yours |
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

Cloud Agents and the IDE read `SKILL.md` in the repo. Grok Bot skills live under Settings, Plugins, Yours. They do not watch `.cursor/skills/`.

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

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
