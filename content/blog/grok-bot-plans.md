---
title: Grok Bot plans: Ultra, Teams Premium, SuperGrok Heavy
slug: grok-bot-plans
description: Paid Grok Bot access is Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. The trial is a usage credit with a 7-day window. Pro and Pro+ are out.
---

# Grok Bot plans: Ultra, Teams Premium, SuperGrok Heavy

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Paid Grok Bot access is three doors: Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. [Plans and billing](https://cursor.com/help/grok-bot/plans) names those doors and does not list dollar amounts. Pro and Pro+ do not include Grok Bot. There is no second Grok Bot SKU. The trial is a usage credit with a 7-day window. macOS and iOS share one usage bucket. This is the Bot product, not Grok chat and not a Cursor Cloud Agent. See [Grok vs Grok Bot](/grok-vs-grok-bot). Sign in with a Cursor account.

## The three doors

[Help](https://cursor.com/help/grok-bot/plans) puts the table in one screen.

| Situation | What Help says to do |
| --- | --- |
| You already pay for Cursor Ultra | Sign into Grok Bot with that same account. Access is included. |
| Personal Cursor account, no Ultra | Subscribe to Ultra from the Grok Bot plan screen. |
| Cursor team | Ask the admin for a Premium seat. Team policies still apply. |
| SuperGrok Heavy | Use Get access with SuperGrok Heavy. |
| Cursor Pro or Pro+ | Not included. Use Ultra or an eligible Premium seat. |
| Separate "Grok Bot" plan | Does not exist. |

The [launch post](https://x.ai/news/introducing-grok-bot) lists the same three: SuperGrok Heavy, Cursor Ultra, Cursor Teams Premium. Desktop and iOS. Beta.

Do not read SuperGrok (the non-Heavy grok.com plan) as a door. Help names SuperGrok Heavy. It does not name SuperGrok or SuperGrok Plus.

The yes/no for Ultra lives on [Does Cursor Ultra include Grok Bot?](/blog/does-cursor-ultra-include-grok-bot). The click path is [/setup/install-plan](/setup/install-plan).

Usage resets weekly. Help does not publish the included amount, so we do not invent it. When weekly included usage runs out, extra usage can continue on shared on-demand spend if on-demand is enabled.

## Personal Cursor: Ultra

If you already pay for Ultra, you are done. Open the desktop or iOS 18 app. Sign in with that Cursor account. [There is no separate Grok Bot login](https://cursor.com/help/grok-bot/sign-in).

If you are on a personal account and you do not have Ultra, the plan screen inside Grok Bot is the subscribe path Help names. We will not quote a price. The Help page we fetched has none.

On iPhone, [mobile-purchase](https://cursor.com/help/grok-bot/mobile-purchase) is the Apple in-app path for Ultra. If you already have Ultra, sign in with the same account. Do not buy a second copy. Apple handles cancel for an Apple-billed plan. Cursor cannot cancel that one for you.

Legacy Privacy Mode is a second gate. It blocks start even on Ultra. Turn it off before you debug the plan.

Once you are in, you still have one shared box. Named Bots. Skills and routines. Confirmed plugins: Gmail, Notion, Slack. Zoom is broken (error 4700).

## Teams: Premium vs Standard

Two official tables. They are not worded the same. Do not flatten them.

[Cursor Help](https://cursor.com/help/grok-bot/plans): "A Standard seat alone does not provide access." Ask the admin to assign a Premium seat. Team policies still apply.

[xAI teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises), Availability table: self-serve teams are available. "Premium seats include a weekly Grok Bot usage allowance. Standard seats can use the free trial or on-demand usage."

Those sentences can both be true and still confuse an admin. Help is answering "how do I get access" for a member who wants the product as a seat. xAI is answering "what can a Standard seat still do" (trial or on-demand). We will not collapse them into "Standard is the same as Ultra." We will not collapse them into "Standard can never open the app." Check your admin. Check the dashboard Grok Bot page. If the member sees a paywall, the Help sentence is the one that is biting.

Enterprise organizations: rolling out. Contact the Cursor account team. That is the xAI row. Do not invent a self-serve Enterprise SKU.

A Premium seat still signs in with the Cursor account. Same box. Same roster caps: 50 Bots and group chats combined, 50 routines per Bot. iOS sitting, if the phone is the next surface, is [/setup/roster-group-ios](/setup/roster-group-ios).

## SuperGrok Heavy link flow

[Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy) is a link flow, not a second Grok Bot storefront.

You need an active SuperGrok Heavy subscription on the Grok account you will link, and a Cursor or Grok Bot account to receive access. Linking pairs one Cursor account with one Grok account. The link itself is not a Cursor payment. Qualifying customers receive Cursor Ultra at no Cursor charge while Heavy stays active on renewal.

Click path Help names:

1. On the Grok Bot plan screen, choose Get access with SuperGrok Heavy.
2. Click Link Grok Account.
3. Sign into the Grok account that has SuperGrok Heavy.
4. Return to Grok Bot and confirm access.

Read this before you claim it. If you have a Stripe-billed Cursor Pro or Pro+ subscription and you claim Ultra through Heavy, Cursor cancels that Pro or Pro+ plan and replaces it with the grant. If the grant later ends, the old Pro or Pro+ plan does not return automatically. Apple-billed Pro or Pro+ cannot be transitioned automatically. The promotion may be declined rather than stacked.

Not eligible, per Help: you are already on Ultra (no extra Ultra). Team accounts (the admin manages seats). Any Grok plan that is not SuperGrok Heavy. One Grok account cannot use this promotion on two Cursor accounts at once.

The Link Grok Account control lives on the Get Started paywall, before you are inside the app. Settings does not show it later. Fully quit and relaunch if you need the paywall again.

On mobile, you still need that same link flow. [mobile-purchase](https://cursor.com/help/grok-bot/mobile-purchase) does not replace it.

## Trial is a usage credit, not a day-count only

[Help](https://cursor.com/help/grok-bot/plans): the Grok Bot free trial is a usage credit rather than a set number of days, though a 7-day window also applies.

The credit is drawn down by agent steps and tokens, not by the number of messages you send. A large or long-running job can spend most or all of it at once. That is expected. Used trial credit is not restored or topped up.

Help's own advice: start small, scope tasks tightly, check the plan screen before a long run.

If the trial ran out during a single run, the doors after that are the same three: Ultra, a Teams Premium seat, or SuperGrok Heavy.

Cancel from the plan screen (Cancel Trial). Apple Pay or App Store trial paths use Apple's subscription management if the in-app button is missing. The trial is a usage credit, not a charge, so there is nothing to refund. Used credit is not restored. Paid-subscription refunds follow Cursor's refunds page. We will not invent a dollar figure.

Do not treat a trial as Ultra. Do not treat a burned credit as a billing bug.

xAI's teams table says Standard seats can use the free trial or on-demand. That is the Standard-seat nuance again. Check the admin before you tell a teammate they are "on the trial" as if it were Ultra.

## macOS and iOS share one usage bucket

[Help](https://cursor.com/help/grok-bot/plans): yes. macOS and iOS share a single usage bucket tied to the signed-in Cursor account. Both apps call the same backend. Usage you see on Mac is the same quota shown on iOS.

That is one account, one box, one bucket. Closing the laptop does not stop cloud work. Burning the weekly include on a desktop routine still empties the phone. The iOS post is [Grok Bot on iOS](/blog/grok-bot-ios).

No Linux desktop. No Android. No iPad. Desktop is macOS or Windows. Phone is iOS 18+ on iPhone.

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## FAQ

**What plans include Grok Bot?**
Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not.

**Does Cursor Pro include Grok Bot?**
No. See [Does Cursor Ultra include Grok Bot?](/blog/does-cursor-ultra-include-grok-bot).

**Do I need a separate Grok Bot subscription?**
No. There is no second SKU.

**Does a Teams Standard seat include Grok Bot?**
Help: a Standard seat alone does not provide access. xAI teams: Standard seats can use the free trial or on-demand. Check your admin. Do not flatten those two sentences.

**Does SuperGrok include Grok Bot?**
Help names SuperGrok Heavy. It does not name SuperGrok.

**How does the trial work?**
A usage credit plus a 7-day window. A long run can spend it. Used credit is not restored.

**Is usage separate on iPhone?**
No. macOS and iOS share one bucket on the signed-in Cursor account.

**Is this Grok chat?**
No. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

## Sources

- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy)
- [Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Subscribe from the mobile app](https://cursor.com/help/grok-bot/mobile-purchase)
- [Sign in to Grok Bot](https://cursor.com/help/grok-bot/sign-in)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
