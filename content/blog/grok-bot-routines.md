---
title: Grok Bot routines vs Cursor Cloud Agent schedules
slug: grok-bot-routines
description: A Grok Bot routine tells one Bot when to run a skill on a schedule or a Slack or GitHub event. It is not a Cloud Agent schedule and not grok.com Automations.
---

# Grok Bot routines vs Cursor Cloud Agent schedules

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

A Grok Bot routine tells one named Bot when to run a skill. Official triggers are a schedule, or a Slack or GitHub event. Cap is 50 routines per Bot. Do not fire on every new message. This is not a [Cursor Cloud Agent](https://cursor.com/docs/cloud-agent) schedule. Cloud Agents are isolated coding VMs with their own automations, including Linear and PagerDuty listeners that Grok Bot docs do not give you. This is also not [grok.com Automations](https://x.ai/news/grok-automations), the 16 July 2026 Grok chat feature. Same noun. Three products. Save the skill first. Then schedule the when.

## Skill first, routine second

[xAI splits the two objects cleanly](https://docs.x.ai/grok-bot/skills-routines-and-automations). A skill is how. A routine is when. Start with a one-time task. Make the artifact reliable. Save the method. Only then automate.

A useful skill states when to use it, the inputs, the sequence, how you will know the result is good, what to return, and what requires approval. Installed private skills can be enabled per Bot under **Settings → Plugins → Yours**. If `/` does not show it, that toggle is why.

Ask the Bot that should *own* the recurring job. Confirm the owner, the schedule and time zone, the input, the expected result, the approval boundary, and what happens when the source is missing. The Bot creates the routine and shows the next run. Background routines keep going with the laptop closed. They run on the box, not on your Mac.

Then **Test run**. Official warning, worth repeating: a test run performs real work. It can navigate sites, change files, and call connected tools. Use safe inputs. Keep writes behind approval.

Review the test the way you would review a junior's first pass. Current inputs? Right format? Source or audit trail on every claim? Did it stop where you said? Did a missing source become a failure report, or a confident guess from last week?

The [skill-then-routine setup](/setup/skill-then-routine) is that sitting, in order. This post is the collision page for everyone who searched "grok bot automations" and landed in the wrong product.

Do not treat Teach a task as a routine saver. The skills page says the recording becomes a **draft skill**. You add the rules the demo missed. You test. You schedule later, if at all.

## Schedule vs event

Two official when-clauses.

A **schedule** is a clock. Weekdays at 8:00 in the owner's time zone. Weekly on Monday. The [account-health](/jobs/account-health) job is this shape: rebuild the watch list, write the table in chat, do not email the customer.

An **event** is a Cursor account integration. Official examples are a Slack message or a GitHub notification. They are separate from the Slack or GitHub *plugins* and may need their own connection flow. Connecting Slack so a Bot can read a channel is not the same object as a Slack trigger that wakes a routine.

| When | Grok Bot routine | What you actually get |
| --- | --- | --- |
| Clock | Schedule plus time zone | A digest, a watch list, a draft pack waiting in that Bot's conversation |
| Slack | Narrow match on a message | One artifact from one kind of ping |
| GitHub | Narrow match on a notification | A repro pack, not a comment storm |
| "Every new message" | Do not | Noise, usage, and a Bot acting on junk |
| Linear / Teams / PagerDuty | Not in Grok Bot docs we fetched | Those listeners belong to other products |

`@` can attach a routine the same way it attaches a Bot or a connector. That is a mention, not a new trigger type.

## Narrow the event (not every Slack message)

Official copy is already the policy: avoid broad listeners such as "every new message." They create noise, consume usage, and raise the chance the Bot acts on irrelevant input.

Write the match the way you would write a search.

When a message in `#customer-escalations` contains a ticket link *and* the phrase "needs repro," open the ticket, reproduce in staging, and drop a repro pack in this conversation. Never post back to Slack without approval.

That is an event with a noun, a channel, and a stop. "Watch Slack" is not.

The [event-to-digest](/skills/event-to-digest) skill is the pasteable version. One Slack or GitHub event. One digest or one repro pack. If the source will not open, say so. Do not invent the event from memory. Do not reply in Slack. Do not comment on GitHub.

MindStudio and other recaps name Teams triggers for this product. The Grok Bot pages we fetched on 21 August 2026 do not. Linear, PagerDuty, Sentry, and generic webhooks show up on [Cursor Automations](https://cursor.com/docs/cloud-agent/automations). That is the Cloud Agent product. Do not copy that table onto a Bot.

## Not a Cloud Agent, not grok.com Automations

Three products share the word.

**Grok Bot routines** live on a named Bot. They run a skill on the shared box. Triggers we will write down: schedule, Slack, GitHub. Output is a reviewable artifact in that Bot's conversation or in `/workspace`. Sign-in is a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy.

**Cursor Cloud Agent automations** ([docs](https://cursor.com/docs/cloud-agent), [automations](https://cursor.com/docs/cloud-agent/automations)) start isolated coding VMs. They clone a repo, open a PR, comment, or sit in Slack as `@cursor`. Triggers include cron, GitHub, GitLab, Bitbucket, Slack, webhooks, Linear, Sentry, and PagerDuty. That list is real for Cloud Agents. It is not a Grok Bot menu. We will not teach you to build one here. Different product, different computer, different blast radius.

**grok.com Automations** shipped 16 July 2026. Describe a job once. Grok runs it on a schedule or when an email arrives, then reports back. Available on grok.com and in the Grok app on iOS *and* Android. Scheduled automations are for everyone. Email triggers need SuperGrok. That is Grok, the chat assistant, not this product. No named Bot roster. No shared box. No Cursor Ultra gate. If you searched `grok bot automations` and opened that news post, you are in the wrong building.

Grok chat Skills (May 2026) and the Grok Build plugin marketplace are two more collisions on nearby nouns. Neither is a Grok Bot routine. Neither installs a Bot skill under **Plugins → Yours**.

| Object | Product | Computer | Official when-clause we will cite |
| --- | --- | --- | --- |
| Routine | Grok Bot | One shared box | Schedule, or Slack / GitHub event |
| Automation | Cursor Cloud Agents | Isolated repo VM | Schedule, plus GitHub / Slack / Linear / and the rest of that docs page |
| Automation | grok.com | Grok chat, no box | Schedule, or an inbound email |

If the work is a production PR, use a Cloud Agent and stay there. If the work is a morning watch list from Gmail and Slack, use a Bot routine and stay here.

## 50-routine cap

A Bot can own up to 50 routines. The app keeps the 20 most recent run records for each routine. Those two numbers are from the skills page. Do not invent a third cap.

Deleting a routine is immediate. No undo. Deleting a Bot deletes the routines that Bot owned. Shared files and sign-ins stay on the computer.

Open the Bot, **View conversation details**, then **Routines**. Enable, pause, test, edit, inspect, delete. After a long stretch away, Grok Bot may ask whether to keep routines running and pause them if you do not answer. Review the paused list when you come back. That is usage control, not a reliability promise.

Fifty is enough for a small roster if each Bot owns a job. It is not enough if every Bot listens to every channel. Narrow the event. Pause what you are not reading. Do not stack a digest, a "backup digest," and a "just in case" on the same input.

The [account-health watch](/skills/account-health-watch) skill is the model: ranked table, stale rows marked, no customer email. The routine around it is a weekday clock, not a firehose.

## FAQ

**What is a Grok Bot routine?**

A when-clause on one Bot. It runs a saved skill on a schedule or on a Slack or GitHub event. It is not a Cloud Agent, and it is not grok.com Automations.

**What can trigger a Grok Bot routine?**

A schedule, or a Slack or GitHub event. Do not add Linear, Teams, or PagerDuty as Grok Bot listeners unless Help or xAI docs say so on a later fetch.

**Are Grok Bot automations the same as grok.com Automations?**

No. grok.com Automations launched 16 July 2026 for Grok chat. Different app, different computer, different plan story.

**Are Grok Bot routines the same as Cursor Cloud Agent schedules?**

No. Cloud Agent automations run isolated coding VMs and can open PRs. Grok Bot routines run skills on the shared box.

**How many routines can a Grok Bot have?**

Up to 50 per Bot. The app keeps 20 recent run records per routine. There is no "unlimited automations" line in the docs we fetched.

**Should a routine fire on every new Slack message?**

No. Official docs tell you not to. Narrow the match. Keep the reply behind approval.

**Do routines run on my laptop?**

No. They run on the shared cloud computer. Closing the laptop does not stop them.

## Sources

- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) (xAI)
- [Cloud Agents](https://cursor.com/docs/cloud-agent) (Cursor)
- [Cursor Automations](https://cursor.com/docs/cloud-agent/automations) (Cursor)
- [Automations in Grok](https://x.ai/news/grok-automations) (16 Jul 2026)
- [Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration) (xAI)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
