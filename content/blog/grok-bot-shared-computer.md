---
title: Grok Bot's shared computer (and why Bots are not a security boundary)
slug: grok-bot-shared-computer
description: All Grok Bots share cookies and credentials on one box. A second Bot is not isolation. Your laptop is a different computer and defaults to Ask every time.
---

# Grok Bot's shared computer (and why Bots are not a security boundary)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

All of your Grok Bots share one cloud Linux computer. Browser cookies, files, and command-line credentials are shared. A second Bot is not isolation. It is a second job description on the same machine. Your Mac or Windows PC is a different computer. Local execution defaults to Ask every time. Cursor Help calls the shared machine [the box](https://cursor.com/help/grok-bot/computer-recovery). xAI calls it the [Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps). Press still writes "a computer per Bot." That is wrong. Sign-in is a Cursor account. This is not a Cursor Cloud Agent VM.

## Shared cookies are a feature and a risk

You sign in once. The session stays. The next Bot on the roster can open the same site without the same tap dance. That is the feature. Official computer docs: "Because the browser is shared, signing in for one Bot makes the session available to your other Bots." Handoffs work because [files in `/workspace`](https://docs.x.ai/grok-bot/files-and-results) and the cookie jar are already there.

It is also the blast radius. A login you placed for the expense Bot is a login the outbound Bot can use. A CLI token in a dotfile is a CLI token for the whole roster. The [approvals page](https://docs.x.ai/grok-bot/approvals-security-and-privacy) says it without decoration: "Do not use separate Bots as a security boundary."

| Shared on the box | Not a boundary |
| --- | --- |
| Browser cookies and signed-in sessions | A second Bot |
| Files under `/workspace` | A group chat |
| Command-line credentials | A hidden Bot |
| Installed plugins (account-wide) | A duplicated Bot |
| Local-computer permission (per member) | A new job title |

Connectors are account-wide too. Settings → Plugins is not per-Bot isolation. Type `@` to attach a connector. Type `/` to reference a skill. The login behind that connector is still one login.

Put a credential on this computer only if every Bot on the account may use it. If that sentence makes you uncomfortable, do not put the credential there. Use a [secure handoff](/skills/secret-handoff). Do not paste the key into chat.

Shared cookies are how a [chief of staff](/jobs/chief-of-staff) roster works at all. They are also why you write a never-list before you add the fifth Bot.

## Screens vs boundaries

Each Bot gets its own screen on the shared computer. Several Bots can use the browser at once. One Bot can run one computer-use task on its screen at a time. Official wording: "The screens are separate work surfaces, not separate security boundaries."

A screen keeps two click-paths from fighting over the same cursor. It does not keep two Bots from reading the same cookie. It does not keep two Bots from opening the same file. The computer is assigned to your user account, not to an individual Bot.

Conversation and memory are closer to per-Bot. A Bot keeps its own thread, its own role, its own learned preferences. Deleting a Bot removes that profile, that conversation, and that Bot's routines. It does not remove shared-computer files or browser sessions. Hide the Bot if you may need the work later. Hiding does not pause routines.

A group chat is also not a wall. Bots pass context in the group on purpose. The group is a visible handoff, not a sandbox.

If you need a reviewable file to move from one Bot to another, write it under `/workspace` and name the path. That is the intended share. Pasting the file into chat, or inventing a second machine, is the long way around a fact the product already admits.

## Local computer is opt-in + Ask every time

The box is in the cloud. The laptop in front of you is not the box.

A Bot runs commands on your local computer only when that capability is enabled and you approve it under your local-computer policy. Official path: **Settings → General → Agent → Execution on Local Computer**. Choices: always require approval, always allowed, never allowed. [The default is Ask every time](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

Use Never allowed unless a Bot has a specific reason to touch local files. Cloud work does not need this setting. Closing the laptop does not stop box work. Local execution is the scary extra, not the normal path.

These settings do not prevent the Bot from using its cloud computer. Turning local access off is not the same as locking the box. The box still has your cookies.

Organization admins may later set a team ceiling (Never, Ask every time, Always) so members can only go stricter. Treat that as team policy when it ships. Do not assume it is already on your tenant.

Do not paste a password or one-time code into ordinary chat on either computer. Take over the Agent Computer for 2FA, CAPTCHA, passkeys, and payment checks. For a supported connection that presents a secure secret request, enter the value there. It is masked and is not added to the conversation. It is not a general-purpose password manager.

## Duplicate a Bot for scope, not for security

Official [bots](https://docs.x.ai/grok-bot/bots) docs already name the move: duplicate when you want the same role as a starting point for a different scope. One Account Health Bot per region. The copy gets the profile, settings, enabled skills, routines, and avatar. It does not copy conversation history, learned memory, or chat attachments. Rename it. Write the new scope before you assign work.

That is a scope split. It is not a security split. The duplicate still sits on the same computer. It still sees the same cookies. It still reads `/workspace`. It still uses the same plugins.

Create a separate Bot when the work has a distinct goal, a distinct set of sources, a distinct working style, a distinct approval boundary, or a distinct schedule. Those are job reasons. "So this one cannot see the CRM login" is not a job reason the product can honor.

Cap: 50 Bots and group chats combined. Spend that budget on named jobs, not on imaginary walls.

If a login should die, sign out of the site on the box. Remove the file. Uninstall the connector and revoke it in the source service. Pause or delete the routine. Deleting the Bot is not sufficient.

## What to put in the never-list

Write the never-list in the Bot description, in the skill, and in Auto-review. One place will miss.

Minimum verbs, from official approval language and the catalog [Auto-review pack](/skills/auto-review-rules):

- Do not send external mail, Slack, or invitations without approval.
- Do not publish.
- Do not purchase or move money.
- Do not delete or overwrite data.
- Do not change production systems.
- Do not accept legal terms.
- Do not treat a second Bot, a group, or a duplicate as isolation.
- Do not paste secrets in chat.
- Do not run local-computer commands unless the sitting named that machine.
- Do not Reset the box to "fix" a login. Update and Recover first. See [box login hygiene](/skills/box-login-hygiene).

An approval controls the proposed action. It does not reverse work already completed. Read the target before you hit Allow once. Always allow is a saved rule, not a personality trait. If Require Approval and Always Allow both match, Require wins.

Auto-review is model-based. It complements least privilege. It does not replace it. Do not write "allow everything in the browser."

Put standing boundaries in the description. Use the conversation for the task in front of you. "Never send external messages without approval" belongs in the description. "Draft follow-ups for these twelve accounts" belongs in the message.

Open [approvals](/setup/approvals) and set Require Approval for send, purchase, delete, and prod before you add the third Bot. The roster is not a security product. It is a shared desk.

## FAQ

**Do Grok Bots have separate computers?**
No. Every Bot on your account uses one persistent cloud computer. Each Bot has its own screen, not its own machine.

**If I create a second Bot, is that Bot isolated?**
No. Files, cookies, CLI credentials, and plugins stay shared. Duplicate for a different scope, not for a wall.

**Does a group chat isolate data?**
No. A group is a visible handoff on the same box.

**Can Grok Bot use my laptop?**
Only if local-computer execution is enabled and you approve it. Default is Ask every time. Cloud work does not need it.

**Is the box the same as a Cursor Cloud Agent VM?**
No. Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box.

**Where do I put a secret?**
Settings secrets or a secure request. Not chat. The box is still shared after that.

## Sources

- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)
- [Files and results](https://docs.x.ai/grok-bot/files-and-results)
- [Create and manage Bots](https://docs.x.ai/grok-bot/bots)
- [Grok Bot FAQ](https://docs.x.ai/grok-bot/faq)
- [Recover Grok Bot computer data](https://cursor.com/help/grok-bot/computer-recovery)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
