---
title: Grok Bot skills vs Cursor Agent Skills
slug: grok-bot-skills-vs-cursor-skills
description: Cursor Agent Skills are SKILL.md files in the IDE or repo. Grok Bot skills live in the Bot product. A search for grok bot SKILL.md also hits Grok Build and Grok chat Skills.
---

# Grok Bot skills vs Cursor Agent Skills

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Cursor Agent Skills are `SKILL.md` files in the IDE or the repo. Grok Bot skills live in the Bot product. You save after a real task, type `/` in the Grok Bot composer, and enable the skill under Settings → Plugins → Yours. They are not interchangeable. A search for `grok bot SKILL.md` will also surface **Grok Build** (`.grok/skills/`, `/marketplace`) and **Grok chat Skills**. Four products. One noun. This is not Grok chat Skills, not Grok Build, and not a Cursor IDE skill that the Bot can see. The three-way product collision is [/grok-vs-grok-bot](/grok-vs-grok-bot).

## Direct answer

First, the three products people mix with "Grok." Then the skills split.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI's chat assistant | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None | One shared managed box | A fresh isolated VM per run |
| Skills noun | Grok chat Skills (May 2026) | Grok Bot skills (Plugins → Yours) | Cursor Agent Skills (`SKILL.md`) |

Grok is the chat assistant. Grok 4.x is a model family. A Cloud Agent can pick that family. That does not make the Cloud Agent a Grok Bot.

| | Grok Bot skills | Cursor Agent Skills |
| --- | --- | --- |
| Product | Grok Bot desktop + iOS | Cursor IDE and Cloud Agents |
| Format | Saved in the Bot product | A folder with `SKILL.md` |
| Disk path | None you copy. Settings → Plugins → Yours | `.cursor/skills/`, `.agents/skills/`, plus user-level `~/.cursor/skills/` |
| Invoke | `/` in the Grok Bot composer | `/` in Agent chat |
| Schedule | A Grok Bot routine on one Bot | Cursor Automations on a Cloud Agent, or `/automate` |
| Portable? | Across your Bots, once enabled | Across agents that implement Agent Skills |

Neither format installs the other. Do not paste a `.cursor/skills` file into a Bot chat. Do not save a Bot skill and expect Agent chat to load it.

[Cursor's skills docs](https://cursor.com/docs/skills) are the IDE / Cloud Agent format. [Grok Bot skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) are the Bot format.

## Where each lives

A Cursor Agent Skill is a folder. `SKILL.md` with YAML frontmatter (`name`, `description`). Optional `scripts/`, `references/`, `assets/`. Cursor discovers it from project and user directories, and for compatibility from `.claude/skills/` and `.codex/skills/`. Type `/` in Agent chat to invoke it. The agent can also pick it from context. You can pin it as a Custom Mode.

That file is version-controlled. It ships with the repo. It is the right object when the work is a repo.

A Grok Bot skill is not a folder you commit. You do the job once on the box. You ask the Bot to save the method. You type `/` in the Grok Bot desktop composer. If it is missing, you enable it for that Bot under Settings → Plugins → Yours. Skills are available across your Bots. The Bot still needs the login. Enablement is per Bot. Isolation is not.

The name-and-never-list on the Bot itself is [/skills/bot-persona-kit](/skills/bot-persona-kit). The order is still skill, then routine. That sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

Teach a task writes a **draft** skill from a box-browser demo. It does not write a `SKILL.md` into your repo. The catalog sitting is [/skills/teach-a-task](/skills/teach-a-task).

## The other two collisions: Grok chat Skills, Grok Build marketplace

Two more xAI nouns. Same week of search results. Wrong product.

**Grok chat Skills** shipped [18 May 2026](https://x.ai/news/grok-skills). Persistent expertise for Grok, the chat assistant. Built-in Word, slides, spreadsheets, PDFs, Skill Creator. Live on grok.com, Grok iOS, and Grok Android. "Skills are live now on Grok 4.3" is that post talking about the chat assistant and the 4.3 model family. It is not a Bot roster. It is not the box.

**Grok Build Plugin Marketplace** shipped [11 Jun 2026](https://x.ai/news/grok-plugin-marketplace). A terminal catalog inside Grok Build. Type `/marketplace`. `grok plugin install <name> --trust`. A plugin can bundle skills, slash commands, agents, hooks, MCP servers, and LSPs. Those bundled skills are Grok Build skills, often under `.grok/skills/`. They are not Grok Bot skills. The marketplace is an open catalog via pull request to `xai-org/plugin-marketplace`. That is not Settings → Plugins → Yours.

Cursor Teams Premium has a team plugins page. That is Cursor team policy. It is not a public Grok Bot skill directory. OpenClaw has ClawHub. Also not this product.

Four products. One noun. Check the URL before you write a file.

## Do not paste a `.cursor/skills` or `.grok/skills` file and expect the Bot to see it

This is the operator error.

You cloned a repo with a beautiful `SKILL.md`. You opened Grok Bot. You attached the file, or you dropped the folder on `/workspace`, or you asked the Bot to "install this skill." The Bot may read the markdown as instructions for one turn. It will not register it under Settings → Plugins → Yours. It will not show up in `/` tomorrow. It is not a Bot skill until you save the method in the Bot product.

The other direction fails too. A skill you saved on Piper does not appear in Cursor Agent chat. Cloud Agents do not read Plugins → Yours. They read the repo.

We did not test a compatibility matrix. We will not invent one. Official docs describe two loaders. They do not describe a bridge.

If you want the Bot to follow the same rules as the `SKILL.md`, do the job once on the box with those rules in the prompt, then save the method. Add the approval verbs the file forgot. Test. Then, if you still want a when, add a routine.

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## When to write which

Write a Cursor Agent Skill when the work is a repo. Conventions for this codebase. A deploy script. A review checklist. The file should travel with the pull request. Cloud Agents and the IDE both see it.

Write a Grok Bot skill when the work is a tool a person would click. Inbox. CRM in the box browser. A Notion page. A file two Bots will hand off in `/workspace`. The method should travel with the Bot, not with `main`.

Write a Grok chat Skill only if you are actually in grok.com and you want the chat assistant to remember a format. That is a different app.

Write a Grok Build plugin only if you are in the Grok Build terminal and you want `/marketplace`. That is a different app.

Same Cursor login can own a Cloud Agent and a Grok Bot. Same human can own a grok.com thread. Do not merge the folders.

If the name is still colliding, the short table is [/grok-vs-grok-bot](/grok-vs-grok-bot). If you only needed the Bot explainer, that page is [Grok Bot skills, explained](/blog/grok-bot-skills).

## FAQ

**Are Grok Bot skills the same as Cursor Agent Skills?**
No. Cursor Agent Skills are `SKILL.md` files in the repo or user skills directories. Grok Bot skills live under Settings → Plugins → Yours.

**Will a `.cursor/skills` file load in Grok Bot?**
Do not count on it. The Bot product does not use that loader.

**Will a Grok Bot skill load in Cursor Agent chat?**
No. Different product. Different `/`.

**Is `grok bot SKILL.md` Grok Build?**
Often. Grok Build uses `.grok/skills/` and `/marketplace`. Grok chat Skills is a fourth hit. Check the URL.

**Are Grok chat Skills Grok Bot skills?**
No. Grok chat Skills shipped 18 May 2026 on grok.com, iOS, and Android.

**When should I write which?**
Repo and PR: Cursor Agent Skill. Inbox, browser, `/workspace`, named Bot: Grok Bot skill.

## Sources

- [Cursor Agent Skills](https://cursor.com/docs/skills)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Skills in web, iOS, and Android (Grok chat Skills)](https://x.ai/news/grok-skills)
- [Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
