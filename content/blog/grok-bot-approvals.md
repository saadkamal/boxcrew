---
title: Grok Bot approvals and Auto-review
slug: grok-bot-approvals
description: Require approval for send, purchase, delete, and prod. Auto-review is a check, not a guarantee, and Bots are not a security boundary.
---

# Grok Bot approvals and Auto-review

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Require approval for send, purchase, delete, and production changes. [Auto-review](https://docs.x.ai/grok-bot/approvals-security-and-privacy) evaluates tool calls and computer actions before they run, but it is model-based and official docs say it should complement least privilege, not replace it. A second Bot does not isolate files, cookies, or CLI credentials. Those live on one shared box. Your laptop is a different computer. Local execution defaults to Ask every time. Do not treat Auto-review, a roster, or a group chat as a security boundary.

## What Auto-review is

Open **Settings → General → Auto-review** and write rules. Two kinds exist when enforcement is available.

**Require Approval** always stops a matching action for you. **Always Allow** lets a matching action proceed only if the automated review does not find another reason to stop. If both match, Require Approval wins.

Write the rule around a known action and a known scope. Official examples look like this, in operator English: require approval before sending any external email. Require approval before changing a production dashboard. Always allow `git status` in `/workspace/reports`.

Do not write "allow everything in the browser." Sites change. Tools change. The model that scores the call is not a contract.

Desktop review UI: **Allow once**, **Deny**, and **Always allow** to save a matching rule. iPhone: **Approve once** and **Deny**. If you cannot name the target or the effect, do not approve it. Ask the Bot for a plain-language restatement, or for a draft.

An approval gates the *next* action. It does not rewind work the Bot already finished. "Stop now" stops the turn. It does not undelete the file.

Personal Auto-review rules live on the current desktop and sync to *that* desktop's Grok Bot computer. A second Mac is not automatically in the same policy. Check it.

The [approvals setup](/setup/approvals) is the sitting. This page is the why.

## The four verbs that should always ask

Boxcrew's standing rule is four verbs: send, purchase, delete, prod. Put **Require Approval** on all four before you give a Bot a real inbox.

| Verb | What it covers in practice | Default Boxcrew stance |
| --- | --- | --- |
| Send | External mail, Slack posts, invites, "just a quick ping" | Require Approval |
| Purchase | Checkout, a budget change that spends, a transfer | Require Approval |
| Delete | Trash, overwrite, revoke, "clean up the old rows" | Require Approval |
| Prod | Production dashboards, live config, the thing customers touch | Require Approval |

[xAI's approvals page](https://docs.x.ai/grok-bot/approvals-security-and-privacy) stretches the same idea: sending messages or invitations, publishing, purchases and transfers, deleting or overwriting, changing permissions, production changes, accepting legal terms. If your workflow publishes or signs a terms page, add those to the never-list too. The four verbs are the floor, not a clever subset.

[Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) repeat the same stop: require approval for sending, purchasing, deleting, publishing, or changing production systems. A skill that "usually does not send" is not a control. A rule is.

Start every job on a reviewable artifact. A watch list. A draft. A repro pack. A budget recommendation. The human sends, spends, files, or publishes. If a vendor demo implies the Bot finishes the swing unattended, that is launch copy. It is not your policy.

## Local-computer policy

The box is a cloud Linux computer. The Mac or Windows machine in front of you is not the box.

A Bot runs commands on your local computer only when that capability is on and you approve it under the local-computer policy. Path, from the official page: **Settings → General → Agent → Execution on Local Computer**. Three states: always require approval, always allowed, never allowed.

The default is **Ask every time**. Use **Never allowed** unless a Bot has a specific reason to touch local files. These settings do not block the cloud computer. They only gate the laptop.

That split is the whole product. Cloud work continues with the laptop closed. Local work should feel like a rare exception you can see. If you cannot find the control, name the object and stop. Do not invent a toggle.

Organization admins can restrict local-computer execution. Available controls depend on the rollout and the plan. Do not assume your teammate's laptop policy is yours.

## Why a second Bot does not isolate you

Official line, not ours: do not use separate Bots as a security boundary.

Every Bot on the account uses the same computer. Browser cookies and signed-in sessions are shared. Files are visible to every Bot. Command-line credentials are shared. One Bot can continue from a file another Bot saved. Each Bot gets its own *screen*. Screens are work surfaces. They are not vaults.

Duplicate a Bot when you want the same role on a different scope. One account-health Bot per region is a scope split. It is not a permissions split. The copy gets the profile, settings, enabled skills, routines, and avatar. It does not get a new machine.

A group chat does not isolate data either. It makes the handoff visible. Cookies do not care who you `@`.

If a login should die, sign out of the site on the box. Uninstall the connector. Revoke it at the source. Remove the sensitive files from `/workspace`. Pause or delete the routines that used them. Deleting the Bot is cleanup of a name. It is not a wipe.

Do not put a credential on the box if another Bot on the account should not be able to use it. That sentence is in [computer-and-apps](https://docs.x.ai/grok-bot/computer-and-apps). It is the whole security model.

The [box-login-hygiene skill](/skills/box-login-hygiene) is the sitting for a shared sign-in. Write the login note. Do not Reset the box to "clear" a session unless Update and Recover already failed.

Untrusted teammates on a shared Cursor account are an account problem. Approvals do not make that safe. Auto-review does not make that safe. A fourth Bot named Vault does not make that safe.

## Pasteable never-list

The catalog skill is [Auto-review rules](/skills/auto-review-rules). Paste this, then confirm the four verbs actually require Approval in Settings.

```
Require Approval for send.
Require Approval for purchase.
Require Approval for delete.
Require Approval for prod.
Leave local-computer execution on a prompt, not a silent yes.
Bots share one box. They are not a security boundary.
Do not paste keys in chat. Use Settings secrets or a secure request.
```

The reviewable artifact is a short confirmation that those four actions stop. If you cannot find Auto-review, name the object and stop. Do not invent a tab.

Pair it with [secret-handoff](/skills/secret-handoff) the first time a Bot needs a key. Name which Bot may read it. The box is still shared. If the skill would echo the secret into `/workspace` or Slack, do not run it.

A least-privilege setup, in the official order: connect only the tools the workflow needs, use a scoped service account when the source system allows it, start on read-only tasks and drafts, keep the consequential verbs behind approval, review connectors and routines, pause a routine when the source changes.

That is a checklist. It is not a certification. Boxcrew will not hang a compliance badge on this page.

## FAQ

**What are Grok Bot approval rules?**

Write Require Approval for send, purchase, delete, and prod. Add publishing, permission changes, and legal-term accepts if those show up in the job. Review the target before you click Allow once.

**What is Grok Bot Auto-review?**

A Settings rule set that scores tool calls and computer actions before they run. Require Approval beats Always Allow. It is model-based. It is a check, not a guarantee.

**Does Auto-review catch everything?**

No. Official docs say it should complement least privilege and explicit boundaries. Broad "allow the browser" rules are how you fool yourself.

**Can I use a second Bot as a security boundary?**

No. [Do not use separate Bots as a security boundary](https://docs.x.ai/grok-bot/approvals-security-and-privacy). Files, cookies, and CLI creds are account-wide on one computer.

**What is the local-computer policy?**

The laptop is opt-in. Default is Ask every time. Prefer Never allowed. Cloud work on the box is a different switch.

**If I turn on approvals, is the shared box safe for untrusted teammates?**

No. Approvals gate actions. They do not partition the computer. Account access is the boundary. The roster is not.

## Sources

- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy) (xAI)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) (xAI)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) (xAI)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
