---
title: Grok Bot on iOS (and what is missing)
slug: grok-bot-ios
description: Grok Bot has an iOS 18+ iPhone app. No iPad app, no Android, no Linux desktop. iOS and Mac share one usage bucket. Routines keep running with the laptop closed.
---

# Grok Bot on iOS (and what is missing)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok Bot has an iPhone app on iOS 18 or later. [Official mobile docs](https://docs.x.ai/grok-bot/mobile) say it is designed for iOS on iPhone, not iPad or Android. There is no Linux desktop client either. The phone talks to the same Bots, conversations, routines, connectors, and shared cloud computer as the Mac or Windows app. macOS and iOS share one usage bucket on the signed-in Cursor account. Closing the laptop does not stop cloud work. This is the Bot product, not Grok chat. Sign in with a Cursor account on Ultra, a Teams Premium seat, or SuperGrok Heavy.

## What exists: iOS 18+

[Get started](https://docs.x.ai/grok-bot/get-started) points at the mobile page. Requirements there:

- iPhone with iOS 18 or later
- An eligible plan: SuperGrok Heavy, Cursor Ultra, or Cursor Teams Premium
- Internet

Download Grok Bot from the App Store. Official link on the mobile page: app id 6794501026.

Sign-in is Login with Cursor. Finish Cursor authentication in the browser. Return to the app. Same Cursor account as desktop. [There is no separate Grok Bot login](https://cursor.com/help/grok-bot/sign-in). If you already have Ultra, [mobile-purchase](https://cursor.com/help/grok-bot/mobile-purchase) says access should open without a second Apple purchase. If you do not, Ultra is an Apple in-app path. SuperGrok Heavy still needs the desktop-style link flow.

New users can finish the first-run tour, pick a first Bot, and wait while the shared computer is set up. Existing users land on the synced Bot list.

From a conversation you can send text, dictate, take or attach a photo, choose an image or file, mention another Bot or `@everyone` in a group, reply in a thread, and react. Drafts save per conversation when you leave.

Open the computer from a conversation when you need to watch the browser, take over for a password, 2FA, or CAPTCHA, inspect the screen, or return control. That screen is the same shared box every Bot on the account already uses.

The install sitting is [/setup/install-plan](/setup/install-plan). The phone-and-roster sitting is [/setup/roster-group-ios](/setup/roster-group-ios).

Enable notifications if you want a ping when a Bot has a result, a question, or an approval request. Official note: push delivery is still rolling out. In-app attention states remain when push is not on for the account. That is not a reliability SLA.

## What does not: iPad, Android, Linux desktop

Say the missing list out loud. Recaps will invent clients.

| Surface | Grok Bot client? |
| --- | --- |
| iPhone, iOS 18+ | Yes |
| iPad | No |
| Android | No |
| macOS desktop | Yes |
| Windows desktop | Yes |
| Linux desktop | No. The box runs Linux. The app does not. |

[Get started](https://docs.x.ai/grok-bot/get-started): Grok Bot is not currently available as a Linux desktop app. [Teams FAQ](https://docs.x.ai/grok-bot/teams-and-enterprises): computers run Linux, but the desktop app ships for macOS and Windows, plus the mobile apps. [Mobile](https://docs.x.ai/grok-bot/mobile): designed for iOS on iPhone, not iPad or Android.

We will not write "Android coming soon." We will not write that the iPhone build is an iPad app in compatibility mode. We did not verify feature parity on a device beyond what the docs list, so this page will not invent a hidden iPad layout.

If you only have an iPad or a Pixel, you do not have a Grok Bot client. Use a Mac, a Windows machine, or an iPhone on iOS 18+.

This is also not the Grok chat app. Grok chat Skills shipped on grok.com, iOS, and Android. Different product. Different store listing.

## Same account, same usage

[Plans](https://cursor.com/help/grok-bot/plans): macOS and iOS share a single usage bucket tied to the signed-in Cursor account. Both apps call the same backend. Usage you see on Mac is the same quota shown on iOS.

One account. One box. One weekly include. A long desktop routine empties the phone. A long phone takeover empties the desktop. Usage resets weekly. Help does not publish the number, so we do not either.

Settings on iPhone can review usage or manage an eligible iOS subscription. Apple handles cancel for an Apple-billed plan. Cursor cannot cancel that one for you.

Plugins are the same account-wide connectors. Confirmed today: Gmail, Notion, Slack. Zoom is broken (error 4700). Installing a plugin on the phone is still one login for the whole roster.

## Closed-laptop routines

The box is in the cloud. The laptop in front of you is not the box.

[Computer docs](https://docs.x.ai/grok-bot/computer-and-apps): closing the Grok Bot app or your laptop does not stop cloud work. [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations): background routines can run while your laptop is closed. [Mobile](https://docs.x.ai/grok-bot/mobile): work continues in the cloud when the app is closed.

That is architecture, not an uptime promise. Do not read launch "always-on" copy as an SLA.

A routine still belongs to one Bot. Skill first, routine second. Official triggers we will name: a schedule, Slack, or GitHub. Cap: 50 routines per Bot. Do not listen to every new message. The sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

On iPhone you can open a Bot's profile, inspect the schedule, next run, and instruction, then use Active to pause or resume. Editing the schedule or instruction, viewing run history, testing, and deleting a routine currently require the desktop app. Teach-by-demonstration is also a desktop flow. Use the Mac or Windows app when the phone is missing the control.

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## Group chat from the phone

The phone is a real roster surface, not a read-only viewer.

Use + on the home screen for New Agent or New Group Chat. You can edit a Bot profile, manage group members, pin or hide a conversation, and delete a Bot. Mention another Bot. Mention `@everyone`. Reply in a thread.

That is the official group pattern on a small screen. A chief-of-staff Bot that delegates is the job. The catalog page is [/jobs/chief-of-staff](/jobs/chief-of-staff). Combined cap: 50 Bots and group chats. A group is not isolation. They still share the box.

Search from the home screen finds conversations and available message, file, link, or routine results. Swipe for pin and hide.

If you are building the first roster, do it on desktop, then pick the same thread up on the phone. The first named Bot still wants a short name, one job, and a never-list. Do not start with eight Bots from an iPhone keyboard.

## FAQ

**Does Grok Bot have an iPhone app?**
Yes. iOS 18 or later. Same Cursor account, same box, same roster as desktop.

**Is there an iPad app?**
No. Official mobile copy: designed for iOS on iPhone, not iPad or Android.

**Is there an Android app?**
No.

**Is there a Linux desktop app?**
No. The shared computer runs Linux. The client does not.

**Do iPhone and Mac use separate usage?**
No. One bucket on the signed-in Cursor account.

**Do routines keep running if I close the laptop?**
Yes. They run on the box. Closing the app or the laptop does not stop cloud work.

**Can I edit a routine on iPhone?**
You can pause or resume. Editing the schedule or instruction, run history, test, and delete currently need desktop.

**Is this the Grok chat iOS app?**
No. Grok chat is a different product. See [/grok-vs-grok-bot](/grok-vs-grok-bot) if the name is still colliding.

## Sources

- [Grok Bot for iOS](https://docs.x.ai/grok-bot/mobile)
- [Grok Bot on mobile (Help)](https://cursor.com/help/grok-bot/mobile)
- [Help getting-started](https://cursor.com/help/grok-bot/getting-started)
- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Subscribe from the mobile app](https://cursor.com/help/grok-bot/mobile-purchase)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
