---
title: What is the Grok Bot computer? (the box / Agent Computer)
slug: what-is-the-grok-bot-box
description: All your Grok Bots share one persistent cloud Linux computer. xAI says Agent Computer. Cursor Help says the box. It is not Box.com, and it is not one VM per Bot.
---

# What is the Grok Bot computer? (the box / Agent Computer)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

All of your Grok Bots share one persistent cloud Linux computer. xAI calls it the [Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps). Cursor Help calls it [the box](https://cursor.com/help/grok-bot/computer-recovery). Both names are official. It is not Box.com. A search for `grok bot box` currently surfaces Box.com MCP, not this Help page. It is not one VM per Bot. Each Bot has its own screen, not its own machine. Sign-in is a Cursor account. This is not Grok chat and not a Cursor Cloud Agent.

## Direct answer: one shared computer, two official names

[Computer docs](https://docs.x.ai/grok-bot/computer-and-apps): every Bot on your account uses the same computer. The computer is assigned to your user, not to an individual Bot. Open **Agent Computer** from a conversation to see the shared desktop.

[Computer recovery](https://cursor.com/help/grok-bot/computer-recovery) is the page that actually says "the box." `rm -rf` inside the box does not delete conversation history. Synced box data has a durable copy. Reset rebuilds the box from scratch. Use it last.

| Official name | Who says it | Same machine? |
| --- | --- | --- |
| Agent Computer | xAI computer docs, Settings → Beta | Yes |
| The box | Cursor Help, computer-recovery | Yes |
| Cloud computer | Launch and overview copy | Yes |
| Your laptop | Not this machine | No |

Two houses. One Linux VM per member. [Teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises) say it again: each member gets one dedicated cloud computer. All of that member's Bots share it. Files, sign-in sessions, and permissions belong to the member, not to an individual Bot. FAQ on that page: "Does each Bot get its own computer? No."

Press still writes "a computer per Bot." The [launch post](https://x.ai/news/introducing-grok-bot) talks about Bots having a computer of their own, then says they share a computer of their own in the cloud. Follow the computer page. Screens, not VMs.

The catalog tour is [/setup/the-box](/setup/the-box). Words are in [/glossary](/glossary).

## Not Box.com

The query `grok bot box` is a SERP mess. Today it hits Box.com MCP (the file-storage company, the connector), not Cursor Help's "the box."

This page is the Grok Bot computer. It is not:

- Box.com
- A Box MCP server
- A Box.com skill
- A per-Bot VM you provision
- Your Mac or Windows PC

If you landed here from a Box MCP result, you are in the right place only if you meant the Grok Bot cloud computer. If you meant Box.com, this is the wrong site.

We will not claim that Cursor Help currently ranks for `grok bot box`. It does not, on the research pass that commissioned this slug. That is why the title leads with "computer" and puts "box / Agent Computer" in parentheses.

Slug stays `what-is-the-grok-bot-box` so the URL matches the query people type.

## What is shared (cookies, files, CLI creds)

Official list, not ours:

- Browser cookies and signed-in sessions
- Files, including `/workspace`
- Command-line credentials
- Installed connectors (Settings → Plugins). Account-wide. Confirmed today: Gmail, Notion, Slack. Zoom is broken (error 4700)

One Bot can continue from work another Bot saved. That is the feature. It is also the blast radius. Do not place a credential or file on this computer if another Bot on the account should not use it.

Conversation history lives outside the box filesystem. [Recovery Help](https://cursor.com/help/grok-bot/computer-recovery): running `rm -rf` inside the box does not delete agent conversations. Synced box data rehydrates from a durable copy. Local files on your Mac or Windows machine are not covered.

Login hygiene after you share a session is [/skills/box-login-hygiene](/skills/box-login-hygiene). A second Bot is not isolation.

## Own screen ≠ own machine

Each Bot gets its own screen on the shared computer. Several Bots can use the browser and desktop tools in parallel. One Bot can run only one computer-use task on its screen at a time. Official wording: "The screens are separate work surfaces, not separate security boundaries."

A screen keeps two click-paths from fighting over the same cursor. It does not keep two Bots from reading the same cookie. It does not keep two Bots from opening the same file.

Cursor Cloud Agents are the other computer people mix in. Isolated coding VMs. A fresh VM per run. They do not share this box. The split is [Grok Bot vs Cursor Cloud Agents](/blog/grok-bot-vs-cursor-cloud-agents).

We will not publish CPU or RAM specs. Help does not. We will not write "your own computer" as if the box were the laptop in front of you. The laptop is a different machine. Local execution is opt-in and defaults to Ask every time.

## `/workspace` + take over for 2FA

The shared workspace is `/workspace`. [Files and results](https://docs.x.ai/grok-bot/files-and-results): Bots can read files other Bots save there. Use project folders and descriptive names. Keep durable project files in `/workspace`. Treat temporary directories, manually installed packages, and uncommitted app state as replaceable.

The conversation should still hold the final result, or a clear link to it. A file that only lives in a temp dir is a file you will lose on Update. The handoff paste is [/skills/workspace-handoff](/skills/workspace-handoff).

When a site needs a password, passkey, 2FA, CAPTCHA, payment check, or a human, take over. Open Agent Computer. Complete only the blocked step. Tell the Bot to continue. Do not paste passwords or one-time codes into chat. For a supported connection that presents a secure secret request, enter the value there. It is masked and is not added to the conversation.

You can leave the preview. Closing the app or the laptop does not stop cloud work. That is architecture, not an SLA.

Stuck computer: Update or Recover first. Reset last. Reset returns to the most recent durable snapshot and can discard recent unsaved work. The sitting is [/skills/update-vs-reset](/skills/update-vs-reset).

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## FAQ

**What is the Grok Bot computer?**
One persistent cloud Linux computer shared by every Bot on your account. xAI: Agent Computer. Cursor Help: the box.

**What is the Grok Bot box?**
The same machine. Help's name. It is not Box.com. The query `grok bot box` currently hits Box.com MCP.

**Does each Bot get its own VM?**
No. One computer per member. Each Bot has a screen.

**Is the box my laptop?**
No. The box is a separate cloud computer. Local execution is a different permission.

**What is shared?**
Cookies, files, CLI creds, and account-wide plugins. Conversations live outside the box filesystem.

**Where do I put files two Bots should both see?**
`/workspace`, in a named project folder. Say the path in chat.

**Is this Grok chat?**
No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

## Sources

- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Recover Grok Bot computer data](https://cursor.com/help/grok-bot/computer-recovery)
- [Files and results](https://docs.x.ai/grok-bot/files-and-results)
- [Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
