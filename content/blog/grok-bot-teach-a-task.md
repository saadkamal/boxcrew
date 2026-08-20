---
title: Grok Bot Teach a task
slug: grok-bot-teach-a-task
description: Teach a task records a box-browser workflow for up to ten minutes with no microphone and writes a draft skill, not a routine.
---

# Grok Bot Teach a task

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Teach a task records a browser workflow on the shared Grok Bot computer for up to ten minutes. There is no microphone. The product writes a [draft skill](https://docs.x.ai/grok-bot/skills-routines-and-automations), not a routine. The [launch post](https://x.ai/news/introducing-grok-bot) and the [overview](https://docs.x.ai/grok-bot/overview) say the recording saves as a routine. Follow the skills page. A skill is how. A routine is when. You still add the rules the demo missed, then test on a safe example. This is Grok Bot, not grok.com Skills, not Grok Build, not grok.com Automations. Sign-in is a Cursor account. The recording is box-browser only. It does not see your laptop.

## What it records (visible computer, not your microphone)

Teach a task watches the box. Cursor Help calls that machine [the box](https://cursor.com/help/grok-bot/computer-recovery). xAI calls it the [Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps). Same Linux computer. Every Bot on your account already shares it.

The recorder sees clicks, typing, and navigation on that screen. Official wording: it records "visible computer interaction for up to ten minutes" and "does not record microphone audio." There is no voice-over. There is no capture of the Mac or Windows machine in front of you. Local-computer execution is a different permission, default Ask every time, and Teach a task is not that path.

| It records | It does not record |
| --- | --- |
| Visible clicks and typing on the box browser | Microphone audio |
| Navigation on the shared Agent Computer | Steps on your laptop |
| One demonstrated path, up to ten minutes | Decision rules you never showed |
| Enough to draft a skill | A finished production skill |
| Enough to start a how | A when (that is a routine) |

Do not type a password into the recording. Do not flash a one-time code on the shared screen and hope the draft forgets it. Cookies on this computer are shared. Use the [secure handoff](/skills/secret-handoff) when a credential is required. Take over for 2FA yourself, then tell the Bot to continue.

Ten minutes is a cap, not a promise that every build shows the control. The [FAQ](https://docs.x.ai/grok-bot/faq) says the same limit and the same draft-skill output. If your demo is longer, split it. Two short recordings beat one that hits the wall mid-form.

## The click path (one-to-one conversation + computer view)

Official steps, in operator English:

1. Open a one-to-one conversation with the Bot that will own the job. Not a group chat. The group is for handoffs, not for teaching.
2. Open that Bot's computer view. You need to see the box. If you cannot see the screen, you are not teaching.
3. Choose **Teach a task**.
4. Describe the result you are about to demonstrate. Name the artifact. "A weekly watch list in this chat" is a result. "Be helpful" is not.
5. Perform the workflow once. Stay on the box browser. Stay inside the ten minutes.
6. Stop the recording. Review the skill the Bot writes.
7. Test on a safe example before you even think about a schedule.

That is the whole path. If a later click is not on the [skills page](https://docs.x.ai/grok-bot/skills-routines-and-automations), stop and name the object. Do not invent a menu.

Teach-by-demonstration may be enabled gradually. If the control is missing, the official fallback is to finish the task in chat and ask the Bot to save the method as a skill from the written steps. Same destination. Slower. Still a skill, still not a routine.

Paste the catalog first-task if you want the sitting to stay short: [Teach a task](/skills/teach-a-task). Record, save the draft, add the missed rules, do not schedule yet.

## Why the output is a draft

One demo is a happy path. It is not a policy.

The skills page is blunt: "The learned skill is a draft. Add decision rules, failure handling, and approval boundaries that may not be obvious from one example." That sentence is the whole product. The demo showed what you clicked. It did not show what you would have refused. It did not show the stale export. It did not show the customer you would never email.

Launch copy is the trap. [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot) says the follow-along "saves your workflow as a routine." The overview repeats the same slip: it "persists that path as a routine." Those pages are marketing the verb "remember." The page that defines the objects says skill, then routine. A [skill](https://docs.x.ai/grok-bot/skills-routines-and-automations) is a reusable how. A routine tells one Bot when to run a workflow. grok.com Automations (16 Jul 2026) is a third product. Grok Build `/marketplace` is a fourth. Do not merge the nouns.

Open the draft and add the rules the recording cannot see:

- When to stop. Missing source, wrong account, staging down.
- Stale-data. If the export in `/workspace` is older than the one you just opened, mark the row stale. Do not rank stale above fresh.
- Approval. Send, spend, publish, delete, and prod stay behind a human. Put the same verbs in [Auto-review](/skills/auto-review-rules).
- Failure handling. Report the miss. Do not invent the number.
- Never-list. Do not send. Do not spend. Do not publish. Do not file.

A useful skill, per the official list, states when to use it, required inputs, the sequence, how to validate, what to return, and what requires approval. The recording gives you item three on a good day. You write the other five.

The artifact you leave holding is the edited skill. Reviewable. Not live. Not scheduled.

## Re-test when the site changes

A taught path is a screenshot of a website on a Tuesday. Buttons move. The CRM view gets a new filter. The ads UI renames a column. Official routine design says to re-test after a website, connector, or source format changes. Teach a task is the same rule, earlier.

Run the skill on a safe example first. Safe means a row you can afford to be wrong about. Safe does not mean fictional. A [Test run](https://docs.x.ai/grok-bot/skills-routines-and-automations) performs real work. It can navigate, change files, and call connected tools. Keep write actions behind approval. Compare the output to the recording. If the Bot skipped a gate you added, the draft is still a draft.

When the site changes, do not "just Reset the box." That is a different post. Re-record the path, or edit the skill by hand and test again. Keep durable files in `/workspace` so the next sitting can see the last good artifact. See [the box](/setup/the-box) if you have not opened that computer on purpose yet.

If the source is gone, the skill should say so and stop. A taught click path that keeps going on empty data is how you get a confident wrong list.

## Then save + optional routine

Order, and do not skip it:

1. One real task. Teach it, or write it.
2. Edit the draft. Add the missed rules.
3. Enable the skill for this Bot under Settings → Plugins → Yours if it does not show in `/`.
4. Test on real work. Fix the skill if the artifact is wrong.
5. Only then ask the owning Bot for a routine.

A routine is optional. Many jobs should stay a skill you run by hand. The catalog sitting is [skill then routine](/setup/skill-then-routine): do the job once, save the how, Test run, then schedule. Cap is 50 routines per Bot. Trigger is a schedule, Slack, or GitHub. Do not fire on every new message. Background routines can run with the laptop closed. That still does not make the taught draft a routine.

When you do schedule, name the owning Bot, the time zone, the input, the artifact, the approval boundary, and what happens when the source is missing. Official example language is "report the failure instead of using old data." Steal that sentence.

Do not let the Bot send, spend, publish, or file from a taught path. The demo showed you clicking Submit on a dummy form. The draft will try Submit on the next form unless you wrote the stop.

## FAQ

**Does Grok Bot Teach a task save a routine?**
No. The official skills page says the learned skill is a draft. A routine is a later step that tells one Bot when to run that skill. Launch copy that says "saves as a routine" is the wrong noun.

**Does Teach a task record my microphone?**
No. It records visible computer interaction on the box. No mic.

**Does it record my laptop?**
No. It records the shared Grok Bot computer. Your Mac or Windows PC is a separate machine with its own approval policy.

**How long can I record?**
Up to ten minutes. Official cap on the skills page and the FAQ. Split a longer job.

**The Teach a task control is missing. Did I do it wrong?**
Maybe not. Rollout can be gradual. Ask the Bot to save a skill from the written steps and the completed task. Same object.

**Is this grok.com Skills or Grok Build?**
No. Those are other xAI products that share the word "skill." This post is Grok Bot, signed in with a Cursor account, desktop and iOS.

**When do I add a routine?**
After the edited skill produces a reviewable artifact on a Test run. Not before.

## Sources

- [Skills and routines (Teach a task)](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Recover Grok Bot computer data](https://cursor.com/help/grok-bot/computer-recovery)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
