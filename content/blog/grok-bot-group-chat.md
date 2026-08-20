---
title: Grok Bot group chat and a chief-of-staff roster
slug: grok-bot-group-chat
description: Put 2 to 6 named Bots in a group with a chief-of-staff Bot that delegates. Combined cap is 50 Bots plus groups, and they still share one box.
---

# Grok Bot group chat and a chief-of-staff roster

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Put two to six named Bots in a group chat. Mention them with `@`. A chief-of-staff Bot routes. The account cap is 50 Bots and group chats combined. They still share one box. A group is a conversation, not a vault. Bots can hand work to each other and post into the group. They do not publish, send, or spend unless you approve it. This is roster work on desktop and iOS, not Grok the chat assistant and not a Cloud Agent thread.

## Why a group, not one mega-Bot

A Bot is a durable teammate with a name, a job, a conversation, and context that builds up. [xAI's bots page](https://docs.x.ai/grok-bot/bots) says to create a separate Bot when the work has a distinct goal, tool set, working style, approval boundary, or schedule. "General Helper" is how you get a pile of half-remembered preferences and a never-list nobody trusts.

A group is for a shared outcome with visible handoffs. One Bot owns the source. Another owns the draft. A third owns the pass/fail. You see the pass in one transcript instead of pasting notes between chats.

The [launch post](https://x.ai/news/introducing-grok-bot) describes the pattern SpaceXAI used internally: a chief of staff on top, specialists in each lane, a small team that can work in parallel so you are not the middleman. Stick to that size language. Official group create is two to six Bots. Do not turn a launch quote about "eight arms" into a recommended roster of eight.

Start with the smallest useful set. Give one Bot an end-to-end outcome. Add a specialist only when that role is stable. Open a group when the handoff itself needs to be visible. Keep external actions behind approval.

The click path is short. **New** in the sidebar, **New chat**, pick two to six Bots, then rename the generated title if you want. On iPhone: **+ → New Group Chat**. Membership can change later. [Chat and collaboration](https://docs.x.ai/grok-bot/chat-and-collaboration) is the official page. [Roster, group, iOS](/setup/roster-group-ios) is the Boxcrew sitting.

Write each Bot with a four-part description before you add it to the group: job, sources, output, never-list. The [Bot persona kit](/skills/bot-persona-kit) is that block. If two descriptions say the same job, you do not have a roster. You have a crowd.

## @ mentions

Write normally when the participating Bots can decide who should answer. Type `@` and pick a Bot when one teammate owns the request. Mention more than one only when the request actually needs each of them. `@everyone` is a group-wide poke. Use it sparingly.

`@` also mentions groups, routines, and connectors. `/` is the skill. Mixing those up is how a Bot "runs the weekly health check" without the skill you thought you attached.

A useful kickoff, from the official page, in operator English:

`@Researcher` gather the source material and link every claim. `@Writer` turn the findings into a launch draft. `@Reviewer` check the draft against the sources and list only blocking issues. Do not publish anything.

Your messages can carry attachments. Bot-to-group handoffs are currently text-only. If a teammate must *see* an image, send the image to that Bot directly.

Bots can also message each other outside the group. The receiving Bot wakes, does the work, and can reply later. You can see the handoff. Ask for a single owner at each stage. Parallel handoffs without an owner are how you get two drafts and no decision.

Threads hold feedback that applies to one result or one approval. Reactions are a nod, not a safety-critical yes. Do not let a thumbs-up stand in for Allow once.

The pasteable version of this sitting is [multi-bot-kickoff](/skills/multi-bot-kickoff). Confirm the group. Address one Bot per task. Collect files in `/workspace`. Return one review list. Do not publish. Do not send. Do not spend.

## Official CoS pattern

[Chief of Staff](https://docs.x.ai/grok-bot/use-cases) is an official use case, not a Boxcrew invention. It owns a source-linked digest of what changed and what needs attention. Suggested sources: Slack, email, calendar, meeting notes, planning docs.

The official start looks like this. Review activity since yesterday across approved channels, inbox, calendar, and notes. Return only items that map to a priority document. For each item: source, why it matters, proposed next step, whether you owe a decision. Do not send messages. Do not change meetings.

Tune it by marking what was useful and what was noise. Then schedule the digest for a time you will actually read it.

On Boxcrew that job lives at [Chief of staff](/jobs/chief-of-staff). Name, title, description, first task, skill, routine, never-list. The Bot writes a one-page brief. You route. The Bot does not accept the meeting, post to Slack, or mail the founder update.

A CoS that also "does the outreach" and "closes the ticket" is a mega-Bot wearing a nicer title. Split the specialist. Keep the CoS on the digest and the kickoff. Let [sales outbound](/jobs/sales-outbound) own the draft list if that is the work. Let the group be the place those jobs meet.

iOS 18 can run the same group from a phone. No iPad client. No Android. Desktop is macOS or Windows. Closed-laptop routines still run on the box. The CoS digest does not need your lid open.

## Caps

An account can have up to 50 Bots and group chats *combined*. That number is from the [bots](https://docs.x.ai/grok-bot/bots) page. It is not 50 Bots plus 50 groups. It is one bucket.

A group of six named Bots is seven objects if you count the group. Hide Bots you are not using. Hiding takes them off the sidebar. It does not pause them, and it does not pause their routines. Delete only when you mean to drop that Bot's conversation and routines. Shared files stay.

| Object | Official number we will cite | What it is not |
| --- | --- | --- |
| Bots in one group | 2 to 6 | A recommended "team of 12" |
| Bots + groups on the account | 50 combined | 50 of each |
| Routines on one Bot | 50 | Unlimited automations |
| Bots in a "small team" | Launch language, keep it small | A headcount from a quote |

Pin the active roster. Hide the rest. Do not burn the cap on experiments you will not open tomorrow.

## Still one box

Say it again, because press still writes "a computer per Bot."

Every Bot on the account uses the same cloud computer. Cookies, files, CLI creds, `/workspace`. Own screen, not own machine. A group chat does not partition any of that. The Researcher can open the Writer's download. The Reviewer can use the same logged-in CRM session.

That is the feature. A kickoff that says "put the pack in `/workspace/launch`" works because there is one disk. It is also the risk. Do not use a group as a security boundary. Do not put a credential on the box that another Bot should not see.

Duplicate a Bot for scope, not for isolation. One CoS, one researcher, one writer is a roster. Three CoS Bots "so finance cannot see sales" is a story the computer will not keep.

Nothing in a group publishes without you. Official kickoffs end on a draft and a stop. Boxcrew skills end on a reviewable artifact. If a Bot offers to post the launch, that is an approval moment, not a personality.

## FAQ

**What is a Grok Bot group chat?**

A conversation with two to six named Bots and a shared outcome. You `@` the owner of the next step. They still share one box.

**How many Bots can I put in a Grok Bot group?**

Two to six. That is the create flow on [chat and collaboration](https://docs.x.ai/grok-bot/chat-and-collaboration).

**How many Grok Bots can I have?**

Up to 50 Bots and group chats combined.

**What is the Grok Bot chief-of-staff pattern?**

One Bot owns the digest and the routing. Specialists own the lanes. Official use case, plus the [chief-of-staff](/jobs/chief-of-staff) job on Boxcrew. The Bot does not send.

**Does a group chat give each Bot its own computer?**

No. One computer per account. Separate screens. Shared cookies, files, and credentials.

**Can Bots in a group publish or send without me?**

They can propose it. Keep send, purchase, delete, and prod on Require Approval. Official examples stop at the draft.

**Is Grok Bot group chat the same as a Slack huddle or a Cloud Agent thread?**

No. It is a Grok Bot roster feature. Slack may be a plugin or an event source. A Cloud Agent thread is a different product on an isolated VM.

## Sources

- [Message and collaborate](https://docs.x.ai/grok-bot/chat-and-collaboration) (xAI)
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots) (xAI)
- [Use cases](https://docs.x.ai/grok-bot/use-cases) (Chief of Staff)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot) (11 Aug 2026)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
