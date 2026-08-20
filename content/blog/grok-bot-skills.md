---
title: Grok Bot skills, explained
slug: grok-bot-skills
description: A Grok Bot skill is a reusable how. You run the job once, save the method, then optionally put it on a routine. There is no public ClawHub-style registry.
---

# Grok Bot skills, explained

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

A Grok Bot skill is a reusable instruction set. It is the how. You run the job once, save the method, then optionally put it on a routine (the when). Type `/` in the desktop composer. Enable the skill per Bot under Settings → Plugins → Yours. There is no public ClawHub-style registry. This is not [Grok chat Skills](https://x.ai/news/grok-skills) (May 2026, grok.com / iOS / Android). This is not the [Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace) (`/marketplace`, `.grok/skills/`). This is not a Cursor IDE `SKILL.md`. Sign-in is a Cursor account. The official manual is [skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## Skill = how, routine = when

[xAI splits the two objects](https://docs.x.ai/grok-bot/skills-routines-and-automations). A skill is a reusable set of instructions for how to do a task. A routine tells one Bot when to run a workflow, on a schedule or after an event.

Start with a one-time task. Make it reliable. Save the method. Only then automate.

A useful skill, per the official list, states:

1. When to use it
2. Required inputs and access
3. The sequence of work
4. How to validate the result
5. What to return
6. What requires approval

Skills are available across your Bots. A Bot may still need the connector or the login. Installed private skills can be enabled per Bot. If `/` does not show it, open Settings → Plugins → Yours and enable it for the current Bot.

A routine is optional. Many jobs should stay a skill you run by hand. Cap: 50 routines per Bot. Official triggers we will name: a schedule, Slack, or GitHub. Do not fire on every new message. The sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

Do not merge grok.com Automations into this. That is Grok chat, 16 July 2026. Do not merge Cursor Cloud Agent schedules. Isolated coding VMs. Different product.

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## Save after one real task

Do the work once in chat. Then ask:

> Save the process we just used as a skill called "Weekly account health." Include the source systems, risk definitions, output format, and the rule that customer contact always requires approval.

That prompt is from the skills page. Steal the shape. Name the sources. Name the output. Name the approval.

[Dennis Yu's writeup](https://dennisyu.com/how-i-use-grok-bot/) is a practitioner example of a saved method, including a `.skill.md` file he publishes on his own site. Treat it as one operator's notes, not as product spec. Official Grok Bot skills do not live as `SKILL.md` in `.cursor/skills/` or `.grok/skills/`. Do not copy his filename into a repo and expect the Bot to load it.

Teach a task is the other door. It records a box-browser workflow for up to ten minutes, no microphone, and writes a **draft** skill. You still add the rules the demo missed. Launch copy that says it "saves as a routine" is the wrong noun. Follow the skills page. The catalog sitting is [/skills/teach-a-task](/skills/teach-a-task).

The artifact you leave holding is the saved skill. Reviewable. Not live. Not scheduled.

## `/` to reference, enable per Bot under Settings → Plugins → Yours

Two menus. Do not invent a third.

Type `/` in the desktop composer to reference a saved skill. Type `@` for Bots, groups, routines, and connectors.

Use Settings → Plugins to discover and install supported connectors and packaged skills. Then, for a private skill that does not appear in `/`, open Settings → Plugins → Yours and enable it for the current Bot.

That toggle is why a skill you saved last Tuesday is invisible on the new specialist. Skills are not isolated per Bot as files. They are available across the roster. Enablement is per Bot. The login is still shared. A second Bot is not a second skill store.

The name-and-never-list that belongs on the Bot itself is [/skills/bot-persona-kit](/skills/bot-persona-kit). A skill without a named owner becomes a junk drawer.

## What a good skill names

Four fields people skip. Name them or the Bot will guess.

**Sources.** Which plugin, which box-browser URL, which file in `/workspace`. If the export is missing, report the miss. Do not invent the row.

**Output.** A table in this chat. A CSV in `/workspace/account-health/`. A draft mail that has not been sent. Official [use-cases](https://docs.x.ai/grok-bot/use-cases) are jobs with an artifact. Mirror that.

**Approval.** Send, spend, publish, delete, and prod stay behind a human. Write the verbs. Auto-review is a check, not a guarantee.

**Stale-data.** If the file in `/workspace` is older than the live view, mark the row stale. Official routine language: report the failure instead of using old data. Put the same sentence in the skill.

Also name the stop. Staging down. Wrong account. Empty search. A taught click path that keeps going on empty data is how you get a confident wrong list.

The [account-health](/jobs/account-health) job is this shape: ranked watch list, stale rows marked, no customer email. The skill paste is [/skills/account-health-watch](/skills/account-health-watch).

## There is no public ClawHub for Grok Bot

OpenClaw has [ClawHub](https://docs.openclaw.ai/clawhub). A public registry. `openclaw skills install @owner/slug`. Grok Bot does not.

Three nearby nouns will show up in the same search. None of them install a Bot skill.

| Noun | Product | Where it lives | Installs a Grok Bot skill? |
| --- | --- | --- | --- |
| Grok Bot skill | Grok Bot | Settings → Plugins → Yours, `/` in the Bot composer | Yes. This product |
| Cursor Agent Skill | Cursor IDE / Cloud Agents | `SKILL.md` under `.cursor/skills/` or `.agents/skills/` | No |
| Grok chat Skills | Grok chat, May 2026 | grok.com, Grok iOS, Grok Android | No |
| Grok Build marketplace | Grok Build, Jun 2026 | `/marketplace`, plugins that can bundle `.grok/skills/` | No |
| Cursor Teams marketplace | Cursor Teams Premium | Team plugins page | No. Team policy, not a Bot registry |
| ClawHub | OpenClaw | clawhub.ai | No |

Boxcrew is an index of pasteable how-tos. It is not a host. It is not a public Grok Bot skill store. We will not scrape Settings → Plugins. We will not invent a "220 plugins" catalog. Help-confirmed connectors stay Gmail, Notion, Slack. Zoom is broken (error 4700).

Do not paste a `.cursor/skills` or `.grok/skills` file into a Bot chat and expect it to load. The long split is [Grok Bot skills vs Cursor Agent Skills](/blog/grok-bot-skills-vs-cursor-skills).

## Copy-paste next

Three catalog skills, then the job they serve.

1. [/skills/account-health-watch](/skills/account-health-watch). ranked table, stale rows, no customer email. Pair with [/jobs/account-health](/jobs/account-health).
2. [/skills/bot-persona-kit](/skills/bot-persona-kit). short name, one job, never-list. Put this on the Bot before you save the how.
3. [/skills/teach-a-task](/skills/teach-a-task). record the box-browser path, keep the draft a draft, add the missed rules.

Then [/setup/skill-then-routine](/setup/skill-then-routine) if the when is next. Test run performs real work. Use a safe example. Keep writes behind approval.

## FAQ

**What is a Grok Bot skill?**
A reusable how. Sources, sequence, output, approval. Save it after one real task. Optionally put it on a routine.

**Is a Grok Bot skill a `SKILL.md` file?**
Not in `.cursor/skills/` or `.grok/skills/`. Those are other products. Grok Bot skills live in the Bot product under Settings → Plugins → Yours.

**Are Grok Bot skills the same as Grok chat Skills?**
No. Grok chat Skills shipped 18 May 2026 on grok.com, iOS, and Android. Different app. No shared box.

**Are Grok Bot skills the same as the Grok Build marketplace?**
No. Grok Build `/marketplace` is a terminal plugin catalog. It does not install Bot skills.

**Is there a public Grok Bot skill marketplace?**
No. No ClawHub for this product. Boxcrew is an index, not a host.

**How do I attach a skill in chat?**
Type `/` in the desktop composer. If it is missing, enable it for that Bot under Settings → Plugins → Yours.

**When do I add a routine?**
After the skill produces a reviewable artifact on a Test run. Not before.

## Sources

- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Use cases](https://docs.x.ai/grok-bot/use-cases)
- [How I use Grok Bot (Dennis Yu, practitioner)](https://dennisyu.com/how-i-use-grok-bot/)
- [Skills in web, iOS, and Android (Grok chat Skills)](https://x.ai/news/grok-skills)
- [Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace)
- [Cursor Agent Skills](https://cursor.com/docs/skills)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
