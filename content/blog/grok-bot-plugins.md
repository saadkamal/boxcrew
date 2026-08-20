---
title: Grok Bot plugins: what is actually connected
slug: grok-bot-plugins
description: Help-confirmed Grok Bot plugins are Gmail, Notion, and Slack. Zoom is broken with error 4700, and connectors are shared across the roster.
---

# Grok Bot plugins: what is actually connected

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

[Cursor Help](https://cursor.com/help/grok-bot/connect-plugins) names three working Grok Bot plugins: Gmail, Notion, and Slack. Zoom is a known failure. Authorization from the desktop app dies with error 4700, Invalid redirect, and Help says no change on your side will fix it. Everything else in the plugin picker is box-browser work or unconfirmed. Do not treat a marketplace screenshot as a supported list. Do not treat Grok Build plugins as this product. Grok is the chat assistant. This page is the Bot. Connectors belong to the Cursor account you signed in with, so every Bot on the roster can use them. Prefer a connector when one exists. Use the box browser when it does not. Never paste a password into chat.

## Confirmed working (as of this research date)

This was checked on 21 August 2026. The honest list is short.

| Status | Connector | What that means |
| --- | --- | --- |
| Help-confirmed | Gmail | Named on [Connect plugins](https://cursor.com/help/grok-bot/connect-plugins). Use it when mail is a source. |
| Help-confirmed | Notion | Named on the same Help page. Use it when the artifact lives in Notion. |
| Help-confirmed | Slack | Named on the same Help page. Use it when Slack is a source. |
| Broken | Zoom | Error 4700. Do not list it as working. |
| Not Help-confirmed | Everything else | Marketplace, box-browser, or unknown. Do not inventory it. |

Help's first sentence says "Gmail, Notion, Slack, and other services." Those three names are the ones official copy will defend. "Other services" is not a license to publish a directory. The picker moves. Team admins hide rows. Press invents counts. Boxcrew will not scrape that surface.

How you add one is boring, which is the point. On desktop, open **Plugins** in the sidebar, or follow an in-chat **Connect** card. On iPhone, tap the avatar, then **Plugins**. Browse, add, finish the provider login in the browser. If the app sits on **Waiting for authorization**, use **Reopen**. Confirm the row under **Installed**. [xAI's computer page](https://docs.x.ai/grok-bot/computer-and-apps) writes the same sitting as **Settings → Plugins**, then **Add**.

After it is installed, type `@` in chat to attach the connector to a task. Type `/` when you want a saved skill, not a plugin. Those two characters are not interchangeable.

If you are on a Cursor team and a row says **Disabled by team admin**, that is policy, not a broken OAuth dance. Ask the admin. Do not hunt a side door.

Microsoft 365 is not on the Help-confirmed list. Salesforce is not on it either. A [sales outbound](/jobs/sales-outbound) job still works. The CRM is a box-browser login, or it is unknown. Name it that way in the Bot description. Do not write "Salesforce plugin" because a recap did.

Grok Build has its own plugin marketplace. That is a different xAI product. A `.grok` skill pack or a Grok Build listing does not install a Grok Bot connector. If a search result mixes the two, keep scrolling.

## Zoom: broken, error 4700

Help is blunt. Zoom authorization from the Grok Bot desktop app fails with error 4700 (Invalid redirect). Engineers are on it. There is no workaround. Help will update the article when Zoom can be connected.

Do not put Zoom in a first-task prompt. Do not tell a Bot to "join the call." Do not write a skill that assumes a Zoom connector exists. If the work is a meeting note, you already have the artifact somewhere else: a transcript in Gmail, a doc in Notion, a thread in Slack. Use those.

A Connect card that offers Zoom is still a Connect card. It will fail. That is not you.

## Plugins are shared across the roster

This is the part recaps skip.

[Installed connectors are account-wide](https://docs.x.ai/grok-bot/computer-and-apps). Their availability is not isolated to one Bot. The Help page says the same thing in different clothes: plugin connections belong to the **same account** you used to sign in.

So the Gmail you connected for a chief-of-staff Bot is the Gmail the sales Bot can see. Slack is Slack. Notion is Notion. A second Bot is a second job, not a second vault.

That is useful. One sign-in, many named roles. It is also the security fact. If a Bot should not be able to read that mailbox, do not connect the mailbox and then "isolate" the work by creating another teammate. Sign out. Uninstall the connector. Revoke it in the source service. Hide the Bot if you want it off the sidebar. Deleting a Bot does not pull the shared login down with it.

The [plugins setup](/setup/plugins) is the click path. Stop when the three you need are on. Stop before Zoom. Stop before a fourth name you cannot cite.

## Browser when there is no connector

The box can open a website. That is the fallback, and it is a first-class one. [xAI says to prefer a connector](https://docs.x.ai/grok-bot/computer-and-apps) when one exists, because a structured tool is usually more reliable than clicking around. Use the browser for services without a connector, or for a visual flow a connector does not expose.

That is how most of the official jobs actually run. Paid media pulls spend from an ads UI. Talent scout opens an ATS. Bug reproduction uses staging. Account health reads a usage dashboard. None of those are Help-confirmed plugins. They are box logins. You take over for 2FA, a CAPTCHA, or a payment check. You do not paste the code into chat.

Cookies on that browser are shared too. Signing the box into a CRM for one Bot leaves the session for the rest of the roster. Write the login note. Put it in `/workspace`. The [box tour](/setup/the-box) is the sitting for that, not this page.

Remote MCP is a third door, and it is picky. Public HTTPS. Streamable HTTP. OAuth from Cursor infra. Not localhost. Not stdio. An `mcp.json` that works in the IDE can fail on the Bot. If you need that path, it is a different setup. Do not dress an MCP server up as a plugin in the Bot description.

## Do not paste secrets in chat

A plugin login is a browser handoff. A password, a passkey, a one-time code, or a payment confirm is a takeover on the Agent Computer. Official copy is consistent on this: complete the blocked step yourself, then tell the Bot to continue.

If a supported connection shows a secure secret request, use that field. The value is masked. It does not land in the transcript. It is not a general-purpose password manager.

API keys and tokens go in Settings secrets or that same secure request. If a key is already in the thread, rotate it and stop. The [secret-handoff skill](/skills/secret-handoff) is the pasteable pack. This post will not dump a key-shaped example.

A plugin you no longer want is not "forgotten" because you stopped mentioning it. Uninstall it. Revoke it at Google, Notion, or Slack. The box keeps what you leave on it.

## FAQ

**What plugins does Grok Bot support?**

Help-confirmed: Gmail, Notion, Slack. Zoom is broken (error 4700). Help mentions "other services," and the picker may show more rows. Those rows are not a list this site will publish.

**Does Grok Bot have a Gmail plugin?**

Yes. Connect it from Plugins, finish Google's login in the browser, then `@` it on the task that needs mail. Every Bot on the account can use that connection.

**Does Grok Bot connect to Slack?**

Yes. Slack is Help-confirmed. The Slack *plugin* is not the same object as a Slack *event* that starts a routine. Connecting chat access does not, by itself, create a listener. See the routines post for the event path.

**Does Grok Bot connect to Notion?**

Yes. Use it when the reviewable artifact lives in Notion. Do not use it as a dumping ground for secrets.

**Does Grok Bot work with Zoom?**

Not from the desktop app, as of 21 August 2026. Authorization fails with error 4700. Help says there is no workaround.

**Does Grok Bot have Microsoft 365 or Salesforce plugins?**

Not on the Help-confirmed list. If you work in those products, the box browser is the honest source line. Do not invent a connector name.

**Are Grok Bot plugins the same as Grok Build plugins?**

No. Grok Build's marketplace is a different product. Installing something there does not connect Gmail, Notion, or Slack inside Grok Bot.

**Is a plugin isolated to one Bot?**

No. Connectors are account-wide. Screens are separate. The computer is not.

## Sources

- [Connect plugins](https://cursor.com/help/grok-bot/connect-plugins) (Cursor Help)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps) (xAI)
- [Store secrets securely](https://cursor.com/help/grok-bot/secrets)
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
