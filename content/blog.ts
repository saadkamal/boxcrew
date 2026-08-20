/**
 * Jules blog posts. Verbatim from fieldbook/copy/blog.
 */

export interface BlogPost {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly aeoQuestion: string;
  readonly category: "compare" | "setup" | "skills" | "the-box";
  readonly stickyLine?: string;
  readonly body?: string;
  readonly catalogLinks?: readonly string[];
  readonly faq?: readonly { question: string; answer: string }[];
}

export const BLOG_CATEGORIES = {
  compare: "Compare",
  setup: "Setup & plans",
  skills: "Skills",
  "the-box": "The box",
} as const;

export const blogPosts: readonly BlogPost[] = [
  {
    slug: "does-cursor-ultra-include-grok-bot",
    title: "Does Cursor Ultra include Grok Bot?",
    description: "Yes. Cursor Ultra includes Grok Bot on the same account. Pro and Pro+ do not. There is no second Grok Bot SKU.",
    aeoQuestion: "Yes. Cursor Ultra includes Grok Bot on the same account. Pro and Pro+ do not. There is no second Grok Bot SKU.",
    category: "setup",
    body: `# Does Cursor Ultra include Grok Bot?

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Yes. Cursor Ultra includes Grok Bot on the same Cursor account. [Plans and billing](https://cursor.com/help/grok-bot/plans) says access is included. No second subscription. No Grok account link. Pro and Pro+ do not include it. A Teams Standard seat alone does not. The other doors are a Teams Premium seat, or SuperGrok Heavy. This is the Bot product, not [Grok chat](/grok-vs-grok-bot). Named Bots share one box. Sign in with the Cursor account that owns Ultra, then open the desktop or iOS 18 app.

## Yes. Ultra includes it

If you already pay for Cursor Ultra, you do not buy a second SKU. Open Grok Bot. Choose the sign-in button. Finish in the browser with that same Cursor account. [Sign-in Help](https://cursor.com/help/grok-bot/sign-in) is one page: there is no separate Grok Bot login.

If you are on a personal Cursor account and you do not have Ultra yet, the plan screen inside Grok Bot is the subscribe path Help names. We will not quote a dollar amount. The Help page we fetched does not list one.

Once you are in, you still have one shared box. Named Bots. Skills and routines. Gmail, Notion, Slack as the confirmed plugins. Zoom is broken (error 4700). The install sitting is [/setup/install-plan](/setup/install-plan).

Usage resets weekly. Help does not publish the included amount, so this page does not invent it. When weekly included usage runs out, extra usage can continue on shared on-demand spend if on-demand is enabled. macOS and iOS share one bucket.

## Pro / Pro+ do not

[Help answers this in a heading](https://cursor.com/help/grok-bot/plans): "What if I already have Cursor Pro or Pro+?" Cursor Pro and Pro+ do not include Grok Bot access. For ongoing access, use Cursor Ultra or an eligible Premium team seat.

That is the whole miss. Recaps still write Pro, Plus, or "any paid Cursor plan." The official table does not.

If you also have SuperGrok Heavy, read the Heavy flow before you claim it. Help says claiming can cancel an existing Stripe-billed Pro or Pro+ plan. Details sit on [Grok Bot plans](/blog/grok-bot-plans).

Legacy Privacy Mode is a second gate. It blocks start even on Ultra. Turn it off before you debug the plan.

## Teams: Premium seat, not Standard

On a Cursor team, ask the admin to assign a Premium seat. Team policies still apply. Help: a Standard seat alone does not provide access.

Do not flatten that into "Standard is the same as Ultra." It is not. Do not flatten it into xAI's teams page either. Those two official tables are not worded the same. The honest writeup is the [plans post](/blog/grok-bot-plans). Check your admin.

A Premium seat still signs in with the Cursor account. Same box. Same roster caps: 50 Bots and group chats combined, 50 routines per Bot.

## SuperGrok Heavy is the other door

[The launch post](https://x.ai/news/introducing-grok-bot) lists SuperGrok Heavy, Cursor Ultra, and Cursor Teams Premium. Help has a row for Heavy: use "Get access with SuperGrok Heavy."

This page will not say SuperGrok or SuperGrok Plus includes Grok Bot. Those names are not in the Help table we fetched.

Heavy is a link flow, not a second Grok Bot storefront. If you are choosing between Ultra and Heavy, read [Grok Bot plans](/blog/grok-bot-plans). If you already have Ultra, you are done.

## No separate Grok Bot subscription

Help, again: "Do I need a separate Grok Bot subscription?" No. Paid access is included with Cursor Ultra or an eligible Premium team seat.

There is a trial. It is a usage credit with a 7-day window, not a day-count only. A long run can spend the credit in one job. Used trial credit is not restored. After that, the doors are the same three: Ultra, Premium seat, Heavy. The trial FAQ belongs on the plans post. Do not treat a trial as Ultra.

| Situation | Grok Bot access |
| --- | --- |
| Cursor Ultra | Yes. Same account. No second SKU |
| Cursor Pro | No |
| Cursor Pro+ | No |
| Teams Premium seat | Yes. Team policies still apply |
| Teams Standard seat | No. A Standard seat alone does not provide access |
| SuperGrok Heavy | Yes, via Get access with SuperGrok Heavy |
| SuperGrok or SuperGrok Plus | Not in the Help table. Do not assume yes |
| Separate "Grok Bot" plan | Does not exist |

Words for the collision, if you got here from chat: [/grok-vs-grok-bot](/grok-vs-grok-bot) and [/glossary](/glossary).

## FAQ

**Does Cursor Ultra include Grok Bot?**
Yes. Sign in with that same Cursor account. Access is included.

**Does Cursor Pro include Grok Bot?**
No. Pro and Pro+ do not.

**Do I need a Grok Bot subscription?**
No. There is no second SKU.

**Does a Teams Standard seat include Grok Bot?**
Help says a Standard seat alone does not provide access. Ask for Premium.

**Does SuperGrok include Grok Bot?**
Help names SuperGrok Heavy. It does not name SuperGrok.

**Is this Grok chat?**
No. Grok chat is a different product. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**How do I start once Ultra is on the account?**
[/setup/install-plan](/setup/install-plan). macOS or Windows desktop, or iOS 18+. No Linux desktop, Android, or iPad.

## Sources

- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Sign in to Grok Bot](https://cursor.com/help/grok-bot/sign-in)
- [Get access with SuperGrok Heavy](https://cursor.com/help/grok-bot/supergrok-heavy)
- [Getting started with Grok Bot](https://cursor.com/help/grok-bot/getting-started)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Does Cursor Ultra include Grok Bot?",
        answer: "Yes. Sign in with that same Cursor account. Access is included.",
      },
      {
        question: "Does Cursor Pro include Grok Bot?",
        answer: "No. Pro and Pro+ do not.",
      },
      {
        question: "Do I need a Grok Bot subscription?",
        answer: "No. There is no second SKU.",
      },
      {
        question: "Does a Teams Standard seat include Grok Bot?",
        answer: "Help says a Standard seat alone does not provide access. Ask for Premium.",
      },
      {
        question: "Does SuperGrok include Grok Bot?",
        answer: "Help names SuperGrok Heavy. It does not name SuperGrok.",
      },
      {
        question: "Is this Grok chat?",
        answer: "No. Grok chat is a different product. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
      {
        question: "How do I start once Ultra is on the account?",
        answer: "[/setup/install-plan](/setup/install-plan). macOS or Windows desktop, or iOS 18+. No Linux desktop, Android, or iPad.",
      },
    ],
  },
  {
    slug: "grok-bot-approvals",
    title: "Grok Bot approvals and Auto-review",
    description: "Require approval for send, purchase, delete, and prod. Auto-review is a check, not a guarantee, and Bots are not a security boundary.",
    aeoQuestion: "Require approval for send, purchase, delete, and prod. Auto-review is a check, not a guarantee, and Bots are not a security boundary.",
    category: "skills",
    body: `# Grok Bot approvals and Auto-review

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Require approval for send, purchase, delete, and production changes. [Auto-review](https://docs.x.ai/grok-bot/approvals-security-and-privacy) evaluates tool calls and computer actions before they run, but it is model-based and official docs say it should complement least privilege, not replace it. A second Bot does not isolate files, cookies, or CLI credentials. Those live on one shared box. Your laptop is a different computer. Local execution defaults to Ask every time. Do not treat Auto-review, a roster, or a group chat as a security boundary.

## What Auto-review is

Open **Settings → General → Auto-review** and write rules. Two kinds exist when enforcement is available.

**Require Approval** always stops a matching action for you. **Always Allow** lets a matching action proceed only if the automated review does not find another reason to stop. If both match, Require Approval wins.

Write the rule around a known action and a known scope. Official examples look like this, in operator English: require approval before sending any external email. Require approval before changing a production dashboard. Always allow \`git status\` in \`/workspace/reports\`.

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

A group chat does not isolate data either. It makes the handoff visible. Cookies do not care who you \`@\`.

If a login should die, sign out of the site on the box. Uninstall the connector. Revoke it at the source. Remove the sensitive files from \`/workspace\`. Pause or delete the routines that used them. Deleting the Bot is cleanup of a name. It is not a wipe.

Do not put a credential on the box if another Bot on the account should not be able to use it. That sentence is in [computer-and-apps](https://docs.x.ai/grok-bot/computer-and-apps). It is the whole security model.

The [box-login-hygiene skill](/skills/box-login-hygiene) is the sitting for a shared sign-in. Write the login note. Do not Reset the box to "clear" a session unless Update and Recover already failed.

Untrusted teammates on a shared Cursor account are an account problem. Approvals do not make that safe. Auto-review does not make that safe. A fourth Bot named Vault does not make that safe.

## Pasteable never-list

The catalog skill is [Auto-review rules](/skills/auto-review-rules). Paste this, then confirm the four verbs actually require Approval in Settings.

\`\`\`
Require Approval for send.
Require Approval for purchase.
Require Approval for delete.
Require Approval for prod.
Leave local-computer execution on a prompt, not a silent yes.
Bots share one box. They are not a security boundary.
Do not paste keys in chat. Use Settings secrets or a secure request.
\`\`\`

The reviewable artifact is a short confirmation that those four actions stop. If you cannot find Auto-review, name the object and stop. Do not invent a tab.

Pair it with [secret-handoff](/skills/secret-handoff) the first time a Bot needs a key. Name which Bot may read it. The box is still shared. If the skill would echo the secret into \`/workspace\` or Slack, do not run it.

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
`,
    faq: [
      {
        question: "What are Grok Bot approval rules?",
        answer: "Write Require Approval for send, purchase, delete, and prod. Add publishing, permission changes, and legal-term accepts if those show up in the job. Review the target before you click Allow once.",
      },
      {
        question: "What is Grok Bot Auto-review?",
        answer: "A Settings rule set that scores tool calls and computer actions before they run. Require Approval beats Always Allow. It is model-based. It is a check, not a guarantee.",
      },
      {
        question: "Does Auto-review catch everything?",
        answer: "No. Official docs say it should complement least privilege and explicit boundaries. Broad \"allow the browser\" rules are how you fool yourself.",
      },
      {
        question: "Can I use a second Bot as a security boundary?",
        answer: "No. [Do not use separate Bots as a security boundary](https://docs.x.ai/grok-bot/approvals-security-and-privacy). Files, cookies, and CLI creds are account-wide on one computer.",
      },
      {
        question: "What is the local-computer policy?",
        answer: "The laptop is opt-in. Default is Ask every time. Prefer Never allowed. Cloud work on the box is a different switch.",
      },
      {
        question: "If I turn on approvals, is the shared box safe for untrusted teammates?",
        answer: "No. Approvals gate actions. They do not partition the computer. Account access is the boundary. The roster is not.",
      },
    ],
  },
  {
    slug: "grok-bot-group-chat",
    title: "Grok Bot group chat and a chief-of-staff roster",
    description: "Put 2 to 6 named Bots in a group with a chief-of-staff Bot that delegates. Combined cap is 50 Bots plus groups, and they still share one box.",
    aeoQuestion: "Put 2 to 6 named Bots in a group with a chief-of-staff Bot that delegates. Combined cap is 50 Bots plus groups, and they still share one box.",
    category: "skills",
    body: `# Grok Bot group chat and a chief-of-staff roster

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Put two to six named Bots in a group chat. Mention them with \`@\`. A chief-of-staff Bot routes. The account cap is 50 Bots and group chats combined. They still share one box. A group is a conversation, not a vault. Bots can hand work to each other and post into the group. They do not publish, send, or spend unless you approve it. This is roster work on desktop and iOS, not Grok the chat assistant and not a Cloud Agent thread.

## Why a group, not one mega-Bot

A Bot is a durable teammate with a name, a job, a conversation, and context that builds up. [xAI's bots page](https://docs.x.ai/grok-bot/bots) says to create a separate Bot when the work has a distinct goal, tool set, working style, approval boundary, or schedule. "General Helper" is how you get a pile of half-remembered preferences and a never-list nobody trusts.

A group is for a shared outcome with visible handoffs. One Bot owns the source. Another owns the draft. A third owns the pass/fail. You see the pass in one transcript instead of pasting notes between chats.

The [launch post](https://x.ai/news/introducing-grok-bot) describes the pattern SpaceXAI used internally: a chief of staff on top, specialists in each lane, a small team that can work in parallel so you are not the middleman. Stick to that size language. Official group create is two to six Bots. Do not turn a launch quote about "eight arms" into a recommended roster of eight.

Start with the smallest useful set. Give one Bot an end-to-end outcome. Add a specialist only when that role is stable. Open a group when the handoff itself needs to be visible. Keep external actions behind approval.

The click path is short. **New** in the sidebar, **New chat**, pick two to six Bots, then rename the generated title if you want. On iPhone: **+ → New Group Chat**. Membership can change later. [Chat and collaboration](https://docs.x.ai/grok-bot/chat-and-collaboration) is the official page. [Roster, group, iOS](/setup/roster-group-ios) is the Boxcrew sitting.

Write each Bot with a four-part description before you add it to the group: job, sources, output, never-list. The [Bot persona kit](/skills/bot-persona-kit) is that block. If two descriptions say the same job, you do not have a roster. You have a crowd.

## @ mentions

Write normally when the participating Bots can decide who should answer. Type \`@\` and pick a Bot when one teammate owns the request. Mention more than one only when the request actually needs each of them. \`@everyone\` is a group-wide poke. Use it sparingly.

\`@\` also mentions groups, routines, and connectors. \`/\` is the skill. Mixing those up is how a Bot "runs the weekly health check" without the skill you thought you attached.

A useful kickoff, from the official page, in operator English:

\`@Researcher\` gather the source material and link every claim. \`@Writer\` turn the findings into a launch draft. \`@Reviewer\` check the draft against the sources and list only blocking issues. Do not publish anything.

Your messages can carry attachments. Bot-to-group handoffs are currently text-only. If a teammate must *see* an image, send the image to that Bot directly.

Bots can also message each other outside the group. The receiving Bot wakes, does the work, and can reply later. You can see the handoff. Ask for a single owner at each stage. Parallel handoffs without an owner are how you get two drafts and no decision.

Threads hold feedback that applies to one result or one approval. Reactions are a nod, not a safety-critical yes. Do not let a thumbs-up stand in for Allow once.

The pasteable version of this sitting is [multi-bot-kickoff](/skills/multi-bot-kickoff). Confirm the group. Address one Bot per task. Collect files in \`/workspace\`. Return one review list. Do not publish. Do not send. Do not spend.

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

Every Bot on the account uses the same cloud computer. Cookies, files, CLI creds, \`/workspace\`. Own screen, not own machine. A group chat does not partition any of that. The Researcher can open the Writer's download. The Reviewer can use the same logged-in CRM session.

That is the feature. A kickoff that says "put the pack in \`/workspace/launch\`" works because there is one disk. It is also the risk. Do not use a group as a security boundary. Do not put a credential on the box that another Bot should not see.

Duplicate a Bot for scope, not for isolation. One CoS, one researcher, one writer is a roster. Three CoS Bots "so finance cannot see sales" is a story the computer will not keep.

Nothing in a group publishes without you. Official kickoffs end on a draft and a stop. Boxcrew skills end on a reviewable artifact. If a Bot offers to post the launch, that is an approval moment, not a personality.

## FAQ

**What is a Grok Bot group chat?**

A conversation with two to six named Bots and a shared outcome. You \`@\` the owner of the next step. They still share one box.

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
`,
    faq: [
      {
        question: "What is a Grok Bot group chat?",
        answer: "A conversation with two to six named Bots and a shared outcome. You `@` the owner of the next step. They still share one box.",
      },
      {
        question: "How many Bots can I put in a Grok Bot group?",
        answer: "Two to six. That is the create flow on [chat and collaboration](https://docs.x.ai/grok-bot/chat-and-collaboration).",
      },
      {
        question: "How many Grok Bots can I have?",
        answer: "Up to 50 Bots and group chats combined.",
      },
      {
        question: "What is the Grok Bot chief-of-staff pattern?",
        answer: "One Bot owns the digest and the routing. Specialists own the lanes. Official use case, plus the [chief-of-staff](/jobs/chief-of-staff) job on Boxcrew. The Bot does not send.",
      },
      {
        question: "Does a group chat give each Bot its own computer?",
        answer: "No. One computer per account. Separate screens. Shared cookies, files, and credentials.",
      },
      {
        question: "Can Bots in a group publish or send without me?",
        answer: "They can propose it. Keep send, purchase, delete, and prod on Require Approval. Official examples stop at the draft.",
      },
      {
        question: "Is Grok Bot group chat the same as a Slack huddle or a Cloud Agent thread?",
        answer: "No. It is a Grok Bot roster feature. Slack may be a plugin or an event source. A Cloud Agent thread is a different product on an isolated VM.",
      },
    ],
  },
  {
    slug: "grok-bot-ios",
    title: "Grok Bot on iOS (and what is missing)",
    description: "Grok Bot has an iOS 18+ iPhone app. No iPad app, no Android, no Linux desktop. iOS and Mac share one usage bucket. Routines keep running with the laptop closed.",
    aeoQuestion: "Grok Bot has an iOS 18+ iPhone app. No iPad app, no Android, no Linux desktop. iOS and Mac share one usage bucket. Routines keep running with the laptop closed.",
    category: "setup",
    body: `# Grok Bot on iOS (and what is missing)

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

From a conversation you can send text, dictate, take or attach a photo, choose an image or file, mention another Bot or \`@everyone\` in a group, reply in a thread, and react. Drafts save per conversation when you leave.

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

Use + on the home screen for New Agent or New Group Chat. You can edit a Bot profile, manage group members, pin or hide a conversation, and delete a Bot. Mention another Bot. Mention \`@everyone\`. Reply in a thread.

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
`,
    faq: [
      {
        question: "Does Grok Bot have an iPhone app?",
        answer: "Yes. iOS 18 or later. Same Cursor account, same box, same roster as desktop.",
      },
      {
        question: "Is there an iPad app?",
        answer: "No. Official mobile copy: designed for iOS on iPhone, not iPad or Android.",
      },
      {
        question: "Is there an Android app?",
        answer: "No.",
      },
      {
        question: "Is there a Linux desktop app?",
        answer: "No. The shared computer runs Linux. The client does not.",
      },
      {
        question: "Do iPhone and Mac use separate usage?",
        answer: "No. One bucket on the signed-in Cursor account.",
      },
      {
        question: "Do routines keep running if I close the laptop?",
        answer: "Yes. They run on the box. Closing the app or the laptop does not stop cloud work.",
      },
      {
        question: "Can I edit a routine on iPhone?",
        answer: "You can pause or resume. Editing the schedule or instruction, run history, test, and delete currently need desktop.",
      },
      {
        question: "Is this the Grok chat iOS app?",
        answer: "No. Grok chat is a different product. See [/grok-vs-grok-bot](/grok-vs-grok-bot) if the name is still colliding.",
      },
    ],
  },
  {
    slug: "grok-bot-mcp",
    title: "Grok Bot MCP (public HTTPS only)",
    description: "Grok Bot remote MCP is public HTTPS (streamable HTTP) with OAuth from Cursor infrastructure. Not localhost. Not stdio. An IDE mcp.json that works can fail on the Bot.",
    aeoQuestion: "Grok Bot remote MCP is public HTTPS (streamable HTTP) with OAuth from Cursor infrastructure. Not localhost. Not stdio. An IDE mcp.json that works can fail on the Bot.",
    category: "skills",
    body: `# Grok Bot MCP (public HTTPS only)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok Bot remote MCP is public HTTPS. Streamable HTTP. OAuth runs from Cursor infrastructure, not from your laptop. Localhost will not attach. stdio will not attach. A URL that works in Cursor IDE \`mcp.json\` can fail on the Bot with \`fetch failed\` before any OAuth card appears. Cursor staff called that an architectural split, not a misconfig, on [forum thread 168188](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188). Team MCP allowlists are team policy. Prefer a first-party plugin when one exists. This is Grok Bot, not Grok Build, not grok.com Skills.

## Direct answer

| Path | Where the handshake runs | What can work | What fails |
| --- | --- | --- | --- |
| Grok Bot remote MCP | Cursor cloud infrastructure | Public HTTPS, streamable HTTP, OAuth the infra can reach | localhost, private DNS, VPN-only hosts, stdio |
| Cursor IDE \`mcp.json\` (URL MCP) | A process on your machine | The same URL if your laptop can reach it, including local network and VPN | Nothing about this proves the Bot can reach it |
| Cursor IDE stdio / \`mcp-remote\` | Your machine | Local bridges the IDE can spawn | Grok Bot cannot use that bridge |
| First-party plugin (Help-confirmed) | Account-wide Plugins | Gmail, Notion, Slack | Zoom (error 4700). Do not inventory the rest. |
| Box browser | The shared Agent Computer | Sites with no connector and no public MCP | Not a substitute for a private MCP you cannot publish |

If the host is not reachable over public HTTPS from the open internet, stop. Do not paste the IDE config into Grok Bot and expect OAuth to start. The click path lives on [Remote MCP](/setup/remote-mcp). The reusable pack is [Remote MCP connector](/skills/remote-mcp-connector).

## Public HTTPS vs localhost

Grok Bot is a cloud agent on a shared box. The connection to a remote MCP, and the OAuth discovery against \`/.well-known/...\`, run from Cursor's side. Dean Rie, 12 Aug 2026, on thread 168188: "the endpoint has to be publicly reachable over HTTPS from the open internet." \`fetch failed\` before the connect card means that first fetch from their side did not work. DNS or connection. The reporter's own probe timed out or returned 500. Same diagnosis.

Treat "public endpoint only" as the rule for the cloud path. Staff said exactly that. A host-local bridge, like the IDE's stdio \`mcp-remote\` flow, was not confirmed and has no ETA. Do not wait on a product change you were not promised.

Localhost is a laptop address. The box is not your laptop. stdio is a process the IDE can spawn. The Bot will not spawn it. A second forum thread asked whether Grok Bot supports local MCP. The intended path is remote HTTP from the cloud, plus the catalog, plus the box browser. Do not build a private desktop-bridge story and call it supported.

OAuth tokens for hosted MCP stay with Cursor's backend. The computer does not store those tokens. That is a teams-doc fact, not a reason to point the Bot at an internal host.

If you need the tool tonight and the MCP is private, use the [box browser](/setup/the-box) and take over for login. That is the fallback the computer docs already name: prefer a connector when one exists, use the browser when there is no connector.

## Why the Cursor IDE config is not the Bot config

Same URL. Different network path.

In the IDE, a URL-based MCP connects locally. The process on your machine calls the gateway and opens the browser OAuth flow. Servers on a local network, behind a VPN, or on a private host can work, because your laptop can see them.

In Grok Bot, that handshake is not on your laptop. The cloud path has to complete discovery from Cursor infra. The server can show \`Failed to load MCP server\`, flip to \`needsAuth\`, and sit at 0 tools. Authenticate returns "Sign-in never started" plus \`fetch failed\`. No connect card. No IdP \`redirect_uri\` error, because you never got that far.

So: an \`mcp.json\` that works is evidence about your machine. It is not evidence about the Bot.

Do not claim every Cursor MCP works on Grok Bot. Do not publish a community server list as supported. Help-confirmed plugins by name are Gmail, Notion, and Slack. Zoom is broken (error 4700). Everything else is box-browser, a public MCP you verified, or unknown.

If a secret is required, put it in Settings secrets or a secure request. Do not paste it in chat. The [secret handoff](/skills/secret-handoff) sitting still applies. The box is shared. A second Bot does not hide the token.

Add one server per sitting. Test one tool call. Stop. The skill is written that way on purpose.

## Team allowlists

On a team, Grok Bot follows the existing Cursor plugin and MCP policy. There are no separate Grok Bot plugin controls. [Teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises) says that in one paragraph. MCP authentication is shared across Cursor and Grok Bot.

Admins set this under Team Settings → MCP Configuration:

- Disable All MCP Commands Globally
- A server allowlist and denylist
- Whether members can add their own servers
- Require Team Network Allowlist, so each server's address must also sit on the team network allowlist

When policy blocks a server, members see it disabled on the Grok Bot Plugins page with "Disabled by team admin." Sign-in attempts get the same message. That is team policy, not a broken OAuth card. Enable the plugin on the team plugins page, add its server URL to the allowlist if you use one, and have the member restart the app.

Some vendors restrict their MCP endpoints to their own administrators. A vendor-side permission error is not an allowlist miss and not a localhost miss. Check the provider.

Legacy Privacy Mode still blocks Grok Bot entirely. That is a different gate. Fix it before you debug MCP.

Do not treat an allowlist as a security boundary between Bots. The roster still shares one computer. Allowlists decide which servers the member may call. They do not give the expense Bot a private network the outbound Bot cannot see.

## Prefer a first-party plugin when one exists

[Computer and apps](https://docs.x.ai/grok-bot/computer-and-apps): prefer a connector when one is available. It is often more reliable than clicking through a website. Use the browser for services without a connector, or for a visual workflow the connector does not expose.

Help-confirmed names, as of the pages we fetched: Gmail, Notion, Slack. See [Plugins](/setup/plugins). Zoom is broken (error 4700, no workaround on Help). Do not write "220 plugins." That number is press, not Help. Do not install a Grok Build marketplace package and expect the Bot to see it. Different product.

Plugins are account-wide. One Gmail login is every Bot's Gmail login. Set [approvals](/setup/approvals) before you add a server that can send. Require Approval for send, purchase, delete, and prod. Auto-review is a check, not a guarantee.

If the job only needs a page the box can open, skip MCP. Teach the path, save a [draft skill](/skills/teach-a-task), stop at a reviewable artifact. MCP is for a public, structured endpoint you actually need. It is not a personality.

## FAQ

**Does Grok Bot support localhost MCP?**
No. The endpoint must be publicly reachable over HTTPS from the open internet.

**Does Grok Bot support stdio MCP?**
No. The IDE's stdio / \`mcp-remote\` bridge is not a Grok Bot path.

**Why does the same URL work in Cursor IDE and fail on Grok Bot?**
The IDE runs OAuth on your machine. Grok Bot runs discovery from Cursor infrastructure. Staff confirmed this on [thread 168188](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188).

**What does \`fetch failed\` mean?**
The initial fetch to your gateway from Cursor's side did not work. Check public HTTPS and that \`/.well-known/\` is reachable from the open internet. It is not the same error as an IdP rejecting \`redirect_uri\`.

**My admin sees "Disabled by team admin."**
Team MCP policy is blocking the server. Allowlist, denylist, or "members cannot add servers." That is team policy.

**Should I add a custom MCP if Gmail, Notion, or Slack already covers the job?**
No. Use the plugin. Add MCP only for a public HTTPS server you verified.

## Sources

- [Grok Bot custom remote MCP OAuth (forum 168188)](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188)
- [Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Connect plugins](https://cursor.com/help/grok-bot/connect-plugins)
- [Approvals, security, and privacy](https://docs.x.ai/grok-bot/approvals-security-and-privacy)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Does Grok Bot support localhost MCP?",
        answer: "No. The endpoint must be publicly reachable over HTTPS from the open internet.",
      },
      {
        question: "Does Grok Bot support stdio MCP?",
        answer: "No. The IDE's stdio / `mcp-remote` bridge is not a Grok Bot path.",
      },
      {
        question: "Why does the same URL work in Cursor IDE and fail on Grok Bot?",
        answer: "The IDE runs OAuth on your machine. Grok Bot runs discovery from Cursor infrastructure. Staff confirmed this on [thread 168188](https://forum.cursor.com/t/grok-bot-custom-remote-mcp-oauth-never-starts-fetch-failed-same-url-works-in-cursor-ide/168188).",
      },
      {
        question: "What does `fetch failed` mean?",
        answer: "The initial fetch to your gateway from Cursor's side did not work. Check public HTTPS and that `/.well-known/` is reachable from the open internet. It is not the same error as an IdP rejecting `redirect_uri`.",
      },
      {
        question: "My admin sees \"Disabled by team admin.\"",
        answer: "Team MCP policy is blocking the server. Allowlist, denylist, or \"members cannot add servers.\" That is team policy.",
      },
      {
        question: "Should I add a custom MCP if Gmail, Notion, or Slack already covers the job?",
        answer: "No. Use the plugin. Add MCP only for a public HTTPS server you verified.",
      },
    ],
  },
  {
    slug: "grok-bot-plans",
    title: "Grok Bot plans: Ultra, Teams Premium, SuperGrok Heavy",
    description: "Paid Grok Bot access is Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. The trial is a usage credit with a 7-day window. Pro and Pro+ are out.",
    aeoQuestion: "Paid Grok Bot access is Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. The trial is a usage credit with a 7-day window. Pro and Pro+ are out.",
    category: "setup",
    body: `# Grok Bot plans: Ultra, Teams Premium, SuperGrok Heavy

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
`,
    faq: [
      {
        question: "What plans include Grok Bot?",
        answer: "Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not.",
      },
      {
        question: "Does Cursor Pro include Grok Bot?",
        answer: "No. See [Does Cursor Ultra include Grok Bot?](/blog/does-cursor-ultra-include-grok-bot).",
      },
      {
        question: "Do I need a separate Grok Bot subscription?",
        answer: "No. There is no second SKU.",
      },
      {
        question: "Does a Teams Standard seat include Grok Bot?",
        answer: "Help: a Standard seat alone does not provide access. xAI teams: Standard seats can use the free trial or on-demand. Check your admin. Do not flatten those two sentences.",
      },
      {
        question: "Does SuperGrok include Grok Bot?",
        answer: "Help names SuperGrok Heavy. It does not name SuperGrok.",
      },
      {
        question: "How does the trial work?",
        answer: "A usage credit plus a 7-day window. A long run can spend it. Used credit is not restored.",
      },
      {
        question: "Is usage separate on iPhone?",
        answer: "No. macOS and iOS share one bucket on the signed-in Cursor account.",
      },
      {
        question: "Is this Grok chat?",
        answer: "No. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
    ],
  },
  {
    slug: "grok-bot-plugins",
    title: "Grok Bot plugins: what is actually connected",
    description: "Help-confirmed Grok Bot plugins are Gmail, Notion, and Slack. Zoom is broken with error 4700, and connectors are shared across the roster.",
    aeoQuestion: "Help-confirmed Grok Bot plugins are Gmail, Notion, and Slack. Zoom is broken with error 4700, and connectors are shared across the roster.",
    category: "skills",
    body: `# Grok Bot plugins: what is actually connected

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

After it is installed, type \`@\` in chat to attach the connector to a task. Type \`/\` when you want a saved skill, not a plugin. Those two characters are not interchangeable.

If you are on a Cursor team and a row says **Disabled by team admin**, that is policy, not a broken OAuth dance. Ask the admin. Do not hunt a side door.

Microsoft 365 is not on the Help-confirmed list. Salesforce is not on it either. A [sales outbound](/jobs/sales-outbound) job still works. The CRM is a box-browser login, or it is unknown. Name it that way in the Bot description. Do not write "Salesforce plugin" because a recap did.

Grok Build has its own plugin marketplace. That is a different xAI product. A \`.grok\` skill pack or a Grok Build listing does not install a Grok Bot connector. If a search result mixes the two, keep scrolling.

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

Cookies on that browser are shared too. Signing the box into a CRM for one Bot leaves the session for the rest of the roster. Write the login note. Put it in \`/workspace\`. The [box tour](/setup/the-box) is the sitting for that, not this page.

Remote MCP is a third door, and it is picky. Public HTTPS. Streamable HTTP. OAuth from Cursor infra. Not localhost. Not stdio. An \`mcp.json\` that works in the IDE can fail on the Bot. If you need that path, it is a different setup. Do not dress an MCP server up as a plugin in the Bot description.

## Do not paste secrets in chat

A plugin login is a browser handoff. A password, a passkey, a one-time code, or a payment confirm is a takeover on the Agent Computer. Official copy is consistent on this: complete the blocked step yourself, then tell the Bot to continue.

If a supported connection shows a secure secret request, use that field. The value is masked. It does not land in the transcript. It is not a general-purpose password manager.

API keys and tokens go in Settings secrets or that same secure request. If a key is already in the thread, rotate it and stop. The [secret-handoff skill](/skills/secret-handoff) is the pasteable pack. This post will not dump a key-shaped example.

A plugin you no longer want is not "forgotten" because you stopped mentioning it. Uninstall it. Revoke it at Google, Notion, or Slack. The box keeps what you leave on it.

## FAQ

**What plugins does Grok Bot support?**

Help-confirmed: Gmail, Notion, Slack. Zoom is broken (error 4700). Help mentions "other services," and the picker may show more rows. Those rows are not a list this site will publish.

**Does Grok Bot have a Gmail plugin?**

Yes. Connect it from Plugins, finish Google's login in the browser, then \`@\` it on the task that needs mail. Every Bot on the account can use that connection.

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
`,
    faq: [
      {
        question: "What plugins does Grok Bot support?",
        answer: "Help-confirmed: Gmail, Notion, Slack. Zoom is broken (error 4700). Help mentions \"other services,\" and the picker may show more rows. Those rows are not a list this site will publish.",
      },
      {
        question: "Does Grok Bot have a Gmail plugin?",
        answer: "Yes. Connect it from Plugins, finish Google's login in the browser, then `@` it on the task that needs mail. Every Bot on the account can use that connection.",
      },
      {
        question: "Does Grok Bot connect to Slack?",
        answer: "Yes. Slack is Help-confirmed. The Slack *plugin* is not the same object as a Slack *event* that starts a routine. Connecting chat access does not, by itself, create a listener. See the routines post for the event path.",
      },
      {
        question: "Does Grok Bot connect to Notion?",
        answer: "Yes. Use it when the reviewable artifact lives in Notion. Do not use it as a dumping ground for secrets.",
      },
      {
        question: "Does Grok Bot work with Zoom?",
        answer: "Not from the desktop app, as of 21 August 2026. Authorization fails with error 4700. Help says there is no workaround.",
      },
      {
        question: "Does Grok Bot have Microsoft 365 or Salesforce plugins?",
        answer: "Not on the Help-confirmed list. If you work in those products, the box browser is the honest source line. Do not invent a connector name.",
      },
      {
        question: "Are Grok Bot plugins the same as Grok Build plugins?",
        answer: "No. Grok Build's marketplace is a different product. Installing something there does not connect Gmail, Notion, or Slack inside Grok Bot.",
      },
      {
        question: "Is a plugin isolated to one Bot?",
        answer: "No. Connectors are account-wide. Screens are separate. The computer is not.",
      },
    ],
  },
  {
    slug: "grok-bot-routines",
    title: "Grok Bot routines vs Cursor Cloud Agent schedules",
    description: "A Grok Bot routine tells one Bot when to run a skill on a schedule or a Slack or GitHub event. It is not a Cloud Agent schedule and not grok.com Automations.",
    aeoQuestion: "A Grok Bot routine tells one Bot when to run a skill on a schedule or a Slack or GitHub event. It is not a Cloud Agent schedule and not grok.com Automations.",
    category: "skills",
    body: `# Grok Bot routines vs Cursor Cloud Agent schedules

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

A Grok Bot routine tells one named Bot when to run a skill. Official triggers are a schedule, or a Slack or GitHub event. Cap is 50 routines per Bot. Do not fire on every new message. This is not a [Cursor Cloud Agent](https://cursor.com/docs/cloud-agent) schedule. Cloud Agents are isolated coding VMs with their own automations, including Linear and PagerDuty listeners that Grok Bot docs do not give you. This is also not [grok.com Automations](https://x.ai/news/grok-automations), the 16 July 2026 Grok chat feature. Same noun. Three products. Save the skill first. Then schedule the when.

## Skill first, routine second

[xAI splits the two objects cleanly](https://docs.x.ai/grok-bot/skills-routines-and-automations). A skill is how. A routine is when. Start with a one-time task. Make the artifact reliable. Save the method. Only then automate.

A useful skill states when to use it, the inputs, the sequence, how you will know the result is good, what to return, and what requires approval. Installed private skills can be enabled per Bot under **Settings → Plugins → Yours**. If \`/\` does not show it, that toggle is why.

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

\`@\` can attach a routine the same way it attaches a Bot or a connector. That is a mention, not a new trigger type.

## Narrow the event (not every Slack message)

Official copy is already the policy: avoid broad listeners such as "every new message." They create noise, consume usage, and raise the chance the Bot acts on irrelevant input.

Write the match the way you would write a search.

When a message in \`#customer-escalations\` contains a ticket link *and* the phrase "needs repro," open the ticket, reproduce in staging, and drop a repro pack in this conversation. Never post back to Slack without approval.

That is an event with a noun, a channel, and a stop. "Watch Slack" is not.

The [event-to-digest](/skills/event-to-digest) skill is the pasteable version. One Slack or GitHub event. One digest or one repro pack. If the source will not open, say so. Do not invent the event from memory. Do not reply in Slack. Do not comment on GitHub.

MindStudio and other recaps name Teams triggers for this product. The Grok Bot pages we fetched on 21 August 2026 do not. Linear, PagerDuty, Sentry, and generic webhooks show up on [Cursor Automations](https://cursor.com/docs/cloud-agent/automations). That is the Cloud Agent product. Do not copy that table onto a Bot.

## Not a Cloud Agent, not grok.com Automations

Three products share the word.

**Grok Bot routines** live on a named Bot. They run a skill on the shared box. Triggers we will write down: schedule, Slack, GitHub. Output is a reviewable artifact in that Bot's conversation or in \`/workspace\`. Sign-in is a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy.

**Cursor Cloud Agent automations** ([docs](https://cursor.com/docs/cloud-agent), [automations](https://cursor.com/docs/cloud-agent/automations)) start isolated coding VMs. They clone a repo, open a PR, comment, or sit in Slack as \`@cursor\`. Triggers include cron, GitHub, GitLab, Bitbucket, Slack, webhooks, Linear, Sentry, and PagerDuty. That list is real for Cloud Agents. It is not a Grok Bot menu. We will not teach you to build one here. Different product, different computer, different blast radius.

**grok.com Automations** shipped 16 July 2026. Describe a job once. Grok runs it on a schedule or when an email arrives, then reports back. Available on grok.com and in the Grok app on iOS *and* Android. Scheduled automations are for everyone. Email triggers need SuperGrok. That is Grok, the chat assistant, not this product. No named Bot roster. No shared box. No Cursor Ultra gate. If you searched \`grok bot automations\` and opened that news post, you are in the wrong building.

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
`,
    faq: [
      {
        question: "What is a Grok Bot routine?",
        answer: "A when-clause on one Bot. It runs a saved skill on a schedule or on a Slack or GitHub event. It is not a Cloud Agent, and it is not grok.com Automations.",
      },
      {
        question: "What can trigger a Grok Bot routine?",
        answer: "A schedule, or a Slack or GitHub event. Do not add Linear, Teams, or PagerDuty as Grok Bot listeners unless Help or xAI docs say so on a later fetch.",
      },
      {
        question: "Are Grok Bot automations the same as grok.com Automations?",
        answer: "No. grok.com Automations launched 16 July 2026 for Grok chat. Different app, different computer, different plan story.",
      },
      {
        question: "Are Grok Bot routines the same as Cursor Cloud Agent schedules?",
        answer: "No. Cloud Agent automations run isolated coding VMs and can open PRs. Grok Bot routines run skills on the shared box.",
      },
      {
        question: "How many routines can a Grok Bot have?",
        answer: "Up to 50 per Bot. The app keeps 20 recent run records per routine. There is no \"unlimited automations\" line in the docs we fetched.",
      },
      {
        question: "Should a routine fire on every new Slack message?",
        answer: "No. Official docs tell you not to. Narrow the match. Keep the reply behind approval.",
      },
      {
        question: "Do routines run on my laptop?",
        answer: "No. They run on the shared cloud computer. Closing the laptop does not stop them.",
      },
    ],
  },
  {
    slug: "grok-bot-setup",
    title: "How to set up Grok Bot",
    description: "Download the desktop or iOS app, sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy, create one named Bot, and run one five-minute task. Pro and Pro+ will not start.",
    aeoQuestion: "Download the desktop or iOS app, sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy, create one named Bot, and run one five-minute task. Pro and Pro+ will not start.",
    category: "setup",
    body: `# How to set up Grok Bot

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Download the Grok Bot desktop app for macOS or Windows, or the iPhone app on iOS 18+. Sign in with a Cursor account on Ultra, a Teams Premium seat, or SuperGrok Heavy. Create one named Bot. Run one five-minute task that stops at a reviewable artifact. [Cursor Pro and Pro+ will not start this product](https://cursor.com/help/grok-bot/plans). There is no Linux desktop app, no Android app, and no iPad app. Legacy Privacy Mode blocks start. This is Grok Bot, not Grok chat.

## Plan gate

The first sitting is not a download. It is a plan check.

[Cursor Help, Plans and billing](https://cursor.com/help/grok-bot/plans) lists three doors: Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. The [11 Aug 2026 launch post](https://x.ai/news/introducing-grok-bot) names the same three. Pro and Pro+ do not include Grok Bot. There is no second Grok Bot SKU.

If you are on a team, Help says a Standard seat alone does not provide access. xAI's teams page is worded differently about Standard, trial, and on-demand. Do not flatten those two sentences here. Check your admin. The longer writeup is [Grok Bot plans](/blog/grok-bot-plans). The Ultra yes/no is [Does Cursor Ultra include Grok Bot?](/blog/does-cursor-ultra-include-grok-bot).

Grok Bot [requires cloud data storage](https://docs.x.ai/grok-bot/get-started). Accounts on Legacy Privacy Mode must move to a supported Cursor data setting before the app will start. That change lives in [Cursor privacy settings](https://cursor.com/dashboard/settings?openPrivacy=true), not an xAI panel.

The click path after the gate is [/setup/install-plan](/setup/install-plan). Stop there if the plan is wrong. The rest of this post assumes it is not.

## Install (desktop macOS/Windows, iOS 18+)

Official download is [cursor.com/bot/onboarding](https://cursor.com/bot/onboarding). Official get-started is the install page: [docs.x.ai/grok-bot/get-started](https://docs.x.ai/grok-bot/get-started). Help's sitting is [Getting started with Grok Bot](https://cursor.com/help/grok-bot/getting-started).

macOS: Apple silicon or Intel. Open the disk image. Drag Grok Bot to Applications. If macOS asks, choose Open. Apple menu, About This Mac. A Chip field means Apple silicon. A Processor field means Intel.

Windows: x64 or Arm64. Run the installer. Open Grok Bot from the Start menu. Settings, System, About, System type if you are not sure which binary.

iPhone: iOS 18 or later. [Grok Bot on the App Store](https://apps.apple.com/us/app/grok-bot/id6794501026). Same account. Same box. What the phone can and cannot do is [Grok Bot on iOS](/blog/grok-bot-ios).

| Surface | Ships? |
| --- | --- |
| macOS desktop (Apple silicon and Intel) | Yes |
| Windows desktop (x64 and Arm64) | Yes |
| iPhone, iOS 18+ | Yes |
| iPad | No |
| Android | No |
| Linux desktop app | No. The box is a Linux VM. That is not a Linux app. |

The box is a managed Linux computer in the cloud. That fact does not give you a Linux desktop client. xAI's teams FAQ is blunt: [there is no Linux desktop app](https://docs.x.ai/grok-bot/teams-and-enterprises).

Do not wait for an Android recap. Official mobile copy is iPhone only.

## Sign in with Cursor

[There is no separate Grok Bot login](https://cursor.com/help/grok-bot/sign-in). Open the app. Choose Get started, or Sign In with Cursor from Settings. Finish in the browser. Come back.

Use the same Cursor account that owns the plan. Not a grok.com account. Not an xAI-only login. If the org uses SSO, complete the normal Cursor SSO flow.

Help getting-started: [sign in with the same Cursor account that should own your plan and usage](https://cursor.com/help/grok-bot/getting-started).

On first use the app introduces Bots, the shared computer, and routines, then asks which tools you use. Those answers shape teammate suggestions. They do not connect Gmail or Slack by themselves. Computer setup runs in the background. The last step opens Meet a future teammate.

If the app will not start and you still have Legacy Privacy Mode on, that is the block. Fix the Cursor setting. Do not reinstall first.

## Create the first named Bot

[Help](https://cursor.com/help/grok-bot/getting-started) says name, shape, color, and title. [xAI get-started](https://docs.x.ai/grok-bot/get-started) says a short name, one primary job, and a description of how it should work.

Pick a suggested teammate from Meet a future teammate, or Create your own.

Give it a human first name. Title is the job, two to five words. Description is four parts: job, sources, output, never-list. Confirmed plugins only if you will actually connect them: Gmail, Notion, Slack. Zoom is broken (error 4700).

Focused Bots build useful context. One catch-all Bot does not. Official copy agrees. You can add more later with New, Create new agent, when the work actually splits.

The sitting for this is [/setup/first-bot](/setup/first-bot). A first roster pattern, if you already know you want a coordinator: [/jobs/chief-of-staff](/jobs/chief-of-staff).

Do not create a dozen desks on day one. One named Bot. One job.

## First task

[xAI's first-task shape](https://docs.x.ai/grok-bot/get-started) is outcome, sources, constraints, deliverable, review point.

For a first result that needs no connector, attach a document:

Summarize this document in five bullets. List every date, decision, and open question in a separate section. Cite the page or section for each item. Do not change the source file.

That is the official attach-a-file sitting. Use it. Then stop. Read the reply. Do not send mail. Do not spend. Do not publish.

A later task can open a dashboard. Take over the box for a password, a passkey, a two-factor code, or a CAPTCHA. The session persists on the shared computer. Other Bots on the roster can use that cookie. Tour: [/setup/the-box](/setup/the-box).

Steer or stop with another message. If the Bot needs a plugin, follow the Connect card. Do not invent Zoom as working.

Help is clear on the risk: [agents can act on real accounts, files, and the web](https://cursor.com/help/grok-bot/getting-started). You sign in on the box yourself. The Bot does not see the password. Never paste API keys into chat.

## What to do next

Plugins first, then a skill.

Connect only what the job needs. Help-confirmed: Gmail, Notion, Slack. Settings, Plugins. Shared across the roster. Sitting: [/setup/plugins](/setup/plugins).

Then do the job once more the way you want it repeated. Save the method as a skill. A skill is how. A routine is when. Do not schedule until the artifact is reliable.

The first hour ends with one named Bot and one reviewable reply. That is setup. Recaps that skip the plan gate, skip Privacy Mode, or invent a Linux installer are not a first hour.

## FAQ

**How do I set up Grok Bot?**

Confirm Ultra, Teams Premium, or SuperGrok Heavy. Download desktop or iOS 18. Sign in with a Cursor account. Create one named Bot. Attach a file. Stop at the reply.

**Where do I download Grok Bot?**

[cursor.com/bot/onboarding](https://cursor.com/bot/onboarding) for desktop. The App Store for iPhone. There is no Linux or Android installer.

**Does Cursor Pro include Grok Bot?**

No. Pro and Pro+ do not.

**Why will Grok Bot not start?**

Wrong plan, or Legacy Privacy Mode. Both are official blocks.

**Do I sign in with a Grok account?**

No. Sign in with a Cursor account. SuperGrok Heavy is a later link flow, not the login.

**Is this Grok chat?**

No. Grok is the chat assistant on grok.com and X. Grok Bot is named teammates on one shared box.

## Sources

- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Help getting-started](https://cursor.com/help/grok-bot/getting-started)
- [Sign in](https://cursor.com/help/grok-bot/sign-in)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Onboarding / download](https://cursor.com/bot/onboarding)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Grok Bot for iOS](https://docs.x.ai/grok-bot/mobile)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "How do I set up Grok Bot?",
        answer: "Confirm Ultra, Teams Premium, or SuperGrok Heavy. Download desktop or iOS 18. Sign in with a Cursor account. Create one named Bot. Attach a file. Stop at the reply.",
      },
      {
        question: "Where do I download Grok Bot?",
        answer: "[cursor.com/bot/onboarding](https://cursor.com/bot/onboarding) for desktop. The App Store for iPhone. There is no Linux or Android installer.",
      },
      {
        question: "Does Cursor Pro include Grok Bot?",
        answer: "No. Pro and Pro+ do not.",
      },
      {
        question: "Why will Grok Bot not start?",
        answer: "Wrong plan, or Legacy Privacy Mode. Both are official blocks.",
      },
      {
        question: "Do I sign in with a Grok account?",
        answer: "No. Sign in with a Cursor account. SuperGrok Heavy is a later link flow, not the login.",
      },
      {
        question: "Is this Grok chat?",
        answer: "No. Grok is the chat assistant on grok.com and X. Grok Bot is named teammates on one shared box.",
      },
    ],
  },
  {
    slug: "grok-bot-shared-computer",
    title: "Grok Bot's shared computer (and why Bots are not a security boundary)",
    description: "All Grok Bots share cookies and credentials on one box. A second Bot is not isolation. Your laptop is a different computer and defaults to Ask every time.",
    aeoQuestion: "All Grok Bots share cookies and credentials on one box. A second Bot is not isolation. Your laptop is a different computer and defaults to Ask every time.",
    category: "the-box",
    body: `# Grok Bot's shared computer (and why Bots are not a security boundary)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

All of your Grok Bots share one cloud Linux computer. Browser cookies, files, and command-line credentials are shared. A second Bot is not isolation. It is a second job description on the same machine. Your Mac or Windows PC is a different computer. Local execution defaults to Ask every time. Cursor Help calls the shared machine [the box](https://cursor.com/help/grok-bot/computer-recovery). xAI calls it the [Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps). Press still writes "a computer per Bot." That is wrong. Sign-in is a Cursor account. This is not a Cursor Cloud Agent VM.

## Shared cookies are a feature and a risk

You sign in once. The session stays. The next Bot on the roster can open the same site without the same tap dance. That is the feature. Official computer docs: "Because the browser is shared, signing in for one Bot makes the session available to your other Bots." Handoffs work because [files in \`/workspace\`](https://docs.x.ai/grok-bot/files-and-results) and the cookie jar are already there.

It is also the blast radius. A login you placed for the expense Bot is a login the outbound Bot can use. A CLI token in a dotfile is a CLI token for the whole roster. The [approvals page](https://docs.x.ai/grok-bot/approvals-security-and-privacy) says it without decoration: "Do not use separate Bots as a security boundary."

| Shared on the box | Not a boundary |
| --- | --- |
| Browser cookies and signed-in sessions | A second Bot |
| Files under \`/workspace\` | A group chat |
| Command-line credentials | A hidden Bot |
| Installed plugins (account-wide) | A duplicated Bot |
| Local-computer permission (per member) | A new job title |

Connectors are account-wide too. Settings → Plugins is not per-Bot isolation. Type \`@\` to attach a connector. Type \`/\` to reference a skill. The login behind that connector is still one login.

Put a credential on this computer only if every Bot on the account may use it. If that sentence makes you uncomfortable, do not put the credential there. Use a [secure handoff](/skills/secret-handoff). Do not paste the key into chat.

Shared cookies are how a [chief of staff](/jobs/chief-of-staff) roster works at all. They are also why you write a never-list before you add the fifth Bot.

## Screens vs boundaries

Each Bot gets its own screen on the shared computer. Several Bots can use the browser at once. One Bot can run one computer-use task on its screen at a time. Official wording: "The screens are separate work surfaces, not separate security boundaries."

A screen keeps two click-paths from fighting over the same cursor. It does not keep two Bots from reading the same cookie. It does not keep two Bots from opening the same file. The computer is assigned to your user account, not to an individual Bot.

Conversation and memory are closer to per-Bot. A Bot keeps its own thread, its own role, its own learned preferences. Deleting a Bot removes that profile, that conversation, and that Bot's routines. It does not remove shared-computer files or browser sessions. Hide the Bot if you may need the work later. Hiding does not pause routines.

A group chat is also not a wall. Bots pass context in the group on purpose. The group is a visible handoff, not a sandbox.

If you need a reviewable file to move from one Bot to another, write it under \`/workspace\` and name the path. That is the intended share. Pasting the file into chat, or inventing a second machine, is the long way around a fact the product already admits.

## Local computer is opt-in + Ask every time

The box is in the cloud. The laptop in front of you is not the box.

A Bot runs commands on your local computer only when that capability is enabled and you approve it under your local-computer policy. Official path: **Settings → General → Agent → Execution on Local Computer**. Choices: always require approval, always allowed, never allowed. [The default is Ask every time](https://docs.x.ai/grok-bot/approvals-security-and-privacy).

Use Never allowed unless a Bot has a specific reason to touch local files. Cloud work does not need this setting. Closing the laptop does not stop box work. Local execution is the scary extra, not the normal path.

These settings do not prevent the Bot from using its cloud computer. Turning local access off is not the same as locking the box. The box still has your cookies.

Organization admins may later set a team ceiling (Never, Ask every time, Always) so members can only go stricter. Treat that as team policy when it ships. Do not assume it is already on your tenant.

Do not paste a password or one-time code into ordinary chat on either computer. Take over the Agent Computer for 2FA, CAPTCHA, passkeys, and payment checks. For a supported connection that presents a secure secret request, enter the value there. It is masked and is not added to the conversation. It is not a general-purpose password manager.

## Duplicate a Bot for scope, not for security

Official [bots](https://docs.x.ai/grok-bot/bots) docs already name the move: duplicate when you want the same role as a starting point for a different scope. One Account Health Bot per region. The copy gets the profile, settings, enabled skills, routines, and avatar. It does not copy conversation history, learned memory, or chat attachments. Rename it. Write the new scope before you assign work.

That is a scope split. It is not a security split. The duplicate still sits on the same computer. It still sees the same cookies. It still reads \`/workspace\`. It still uses the same plugins.

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
`,
    faq: [
      {
        question: "Do Grok Bots have separate computers?",
        answer: "No. Every Bot on your account uses one persistent cloud computer. Each Bot has its own screen, not its own machine.",
      },
      {
        question: "If I create a second Bot, is that Bot isolated?",
        answer: "No. Files, cookies, CLI credentials, and plugins stay shared. Duplicate for a different scope, not for a wall.",
      },
      {
        question: "Does a group chat isolate data?",
        answer: "No. A group is a visible handoff on the same box.",
      },
      {
        question: "Can Grok Bot use my laptop?",
        answer: "Only if local-computer execution is enabled and you approve it. Default is Ask every time. Cloud work does not need it.",
      },
      {
        question: "Is the box the same as a Cursor Cloud Agent VM?",
        answer: "No. Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box.",
      },
      {
        question: "Where do I put a secret?",
        answer: "Settings secrets or a secure request. Not chat. The box is still shared after that.",
      },
    ],
  },
  {
    slug: "grok-bot-skills-vs-cursor-skills",
    title: "Grok Bot skills vs Cursor Agent Skills",
    description: "Cursor Agent Skills are SKILL.md files in the IDE or repo. Grok Bot skills live in the Bot product. A search for grok bot SKILL.md also hits Grok Build and Grok chat Skills.",
    aeoQuestion: "Cursor Agent Skills are SKILL.md files in the IDE or repo. Grok Bot skills live in the Bot product. A search for grok bot SKILL.md also hits Grok Build and Grok chat Skills.",
    category: "skills",
    body: `# Grok Bot skills vs Cursor Agent Skills

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Cursor Agent Skills are \`SKILL.md\` files in the IDE or the repo. Grok Bot skills live in the Bot product. You save after a real task, type \`/\` in the Grok Bot composer, and enable the skill under Settings → Plugins → Yours. They are not interchangeable. A search for \`grok bot SKILL.md\` will also surface **Grok Build** (\`.grok/skills/\`, \`/marketplace\`) and **Grok chat Skills**. Four products. One noun. This is not Grok chat Skills, not Grok Build, and not a Cursor IDE skill that the Bot can see. The three-way product collision is [/grok-vs-grok-bot](/grok-vs-grok-bot).

## Direct answer

First, the three products people mix with "Grok." Then the skills split.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI's chat assistant | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None | One shared managed box | A fresh isolated VM per run |
| Skills noun | Grok chat Skills (May 2026) | Grok Bot skills (Plugins → Yours) | Cursor Agent Skills (\`SKILL.md\`) |

Grok is the chat assistant. Grok 4.x is a model family. A Cloud Agent can pick that family. That does not make the Cloud Agent a Grok Bot.

| | Grok Bot skills | Cursor Agent Skills |
| --- | --- | --- |
| Product | Grok Bot desktop + iOS | Cursor IDE and Cloud Agents |
| Format | Saved in the Bot product | A folder with \`SKILL.md\` |
| Disk path | None you copy. Settings → Plugins → Yours | \`.cursor/skills/\`, \`.agents/skills/\`, plus user-level \`~/.cursor/skills/\` |
| Invoke | \`/\` in the Grok Bot composer | \`/\` in Agent chat |
| Schedule | A Grok Bot routine on one Bot | Cursor Automations on a Cloud Agent, or \`/automate\` |
| Portable? | Across your Bots, once enabled | Across agents that implement Agent Skills |

Neither format installs the other. Do not paste a \`.cursor/skills\` file into a Bot chat. Do not save a Bot skill and expect Agent chat to load it.

[Cursor's skills docs](https://cursor.com/docs/skills) are the IDE / Cloud Agent format. [Grok Bot skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) are the Bot format.

## Where each lives

A Cursor Agent Skill is a folder. \`SKILL.md\` with YAML frontmatter (\`name\`, \`description\`). Optional \`scripts/\`, \`references/\`, \`assets/\`. Cursor discovers it from project and user directories, and for compatibility from \`.claude/skills/\` and \`.codex/skills/\`. Type \`/\` in Agent chat to invoke it. The agent can also pick it from context. You can pin it as a Custom Mode.

That file is version-controlled. It ships with the repo. It is the right object when the work is a repo.

A Grok Bot skill is not a folder you commit. You do the job once on the box. You ask the Bot to save the method. You type \`/\` in the Grok Bot desktop composer. If it is missing, you enable it for that Bot under Settings → Plugins → Yours. Skills are available across your Bots. The Bot still needs the login. Enablement is per Bot. Isolation is not.

The name-and-never-list on the Bot itself is [/skills/bot-persona-kit](/skills/bot-persona-kit). The order is still skill, then routine. That sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

Teach a task writes a **draft** skill from a box-browser demo. It does not write a \`SKILL.md\` into your repo. The catalog sitting is [/skills/teach-a-task](/skills/teach-a-task).

## The other two collisions: Grok chat Skills, Grok Build marketplace

Two more xAI nouns. Same week of search results. Wrong product.

**Grok chat Skills** shipped [18 May 2026](https://x.ai/news/grok-skills). Persistent expertise for Grok, the chat assistant. Built-in Word, slides, spreadsheets, PDFs, Skill Creator. Live on grok.com, Grok iOS, and Grok Android. "Skills are live now on Grok 4.3" is that post talking about the chat assistant and the 4.3 model family. It is not a Bot roster. It is not the box.

**Grok Build Plugin Marketplace** shipped [11 Jun 2026](https://x.ai/news/grok-plugin-marketplace). A terminal catalog inside Grok Build. Type \`/marketplace\`. \`grok plugin install <name> --trust\`. A plugin can bundle skills, slash commands, agents, hooks, MCP servers, and LSPs. Those bundled skills are Grok Build skills, often under \`.grok/skills/\`. They are not Grok Bot skills. The marketplace is an open catalog via pull request to \`xai-org/plugin-marketplace\`. That is not Settings → Plugins → Yours.

Cursor Teams Premium has a team plugins page. That is Cursor team policy. It is not a public Grok Bot skill directory. OpenClaw has ClawHub. Also not this product.

Four products. One noun. Check the URL before you write a file.

## Do not paste a \`.cursor/skills\` or \`.grok/skills\` file and expect the Bot to see it

This is the operator error.

You cloned a repo with a beautiful \`SKILL.md\`. You opened Grok Bot. You attached the file, or you dropped the folder on \`/workspace\`, or you asked the Bot to "install this skill." The Bot may read the markdown as instructions for one turn. It will not register it under Settings → Plugins → Yours. It will not show up in \`/\` tomorrow. It is not a Bot skill until you save the method in the Bot product.

The other direction fails too. A skill you saved on Piper does not appear in Cursor Agent chat. Cloud Agents do not read Plugins → Yours. They read the repo.

We did not test a compatibility matrix. We will not invent one. Official docs describe two loaders. They do not describe a bridge.

If you want the Bot to follow the same rules as the \`SKILL.md\`, do the job once on the box with those rules in the prompt, then save the method. Add the approval verbs the file forgot. Test. Then, if you still want a when, add a routine.

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## When to write which

Write a Cursor Agent Skill when the work is a repo. Conventions for this codebase. A deploy script. A review checklist. The file should travel with the pull request. Cloud Agents and the IDE both see it.

Write a Grok Bot skill when the work is a tool a person would click. Inbox. CRM in the box browser. A Notion page. A file two Bots will hand off in \`/workspace\`. The method should travel with the Bot, not with \`main\`.

Write a Grok chat Skill only if you are actually in grok.com and you want the chat assistant to remember a format. That is a different app.

Write a Grok Build plugin only if you are in the Grok Build terminal and you want \`/marketplace\`. That is a different app.

Same Cursor login can own a Cloud Agent and a Grok Bot. Same human can own a grok.com thread. Do not merge the folders.

If the name is still colliding, the short table is [/grok-vs-grok-bot](/grok-vs-grok-bot). If you only needed the Bot explainer, that page is [Grok Bot skills, explained](/blog/grok-bot-skills).

## FAQ

**Are Grok Bot skills the same as Cursor Agent Skills?**
No. Cursor Agent Skills are \`SKILL.md\` files in the repo or user skills directories. Grok Bot skills live under Settings → Plugins → Yours.

**Will a \`.cursor/skills\` file load in Grok Bot?**
Do not count on it. The Bot product does not use that loader.

**Will a Grok Bot skill load in Cursor Agent chat?**
No. Different product. Different \`/\`.

**Is \`grok bot SKILL.md\` Grok Build?**
Often. Grok Build uses \`.grok/skills/\` and \`/marketplace\`. Grok chat Skills is a fourth hit. Check the URL.

**Are Grok chat Skills Grok Bot skills?**
No. Grok chat Skills shipped 18 May 2026 on grok.com, iOS, and Android.

**When should I write which?**
Repo and PR: Cursor Agent Skill. Inbox, browser, \`/workspace\`, named Bot: Grok Bot skill.

## Sources

- [Cursor Agent Skills](https://cursor.com/docs/skills)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Skills in web, iOS, and Android (Grok chat Skills)](https://x.ai/news/grok-skills)
- [Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Are Grok Bot skills the same as Cursor Agent Skills?",
        answer: "No. Cursor Agent Skills are `SKILL.md` files in the repo or user skills directories. Grok Bot skills live under Settings → Plugins → Yours.",
      },
      {
        question: "Will a `.cursor/skills` file load in Grok Bot?",
        answer: "Do not count on it. The Bot product does not use that loader.",
      },
      {
        question: "Will a Grok Bot skill load in Cursor Agent chat?",
        answer: "No. Different product. Different `/`.",
      },
      {
        question: "Is `grok bot SKILL.md` Grok Build?",
        answer: "Often. Grok Build uses `.grok/skills/` and `/marketplace`. Grok chat Skills is a fourth hit. Check the URL.",
      },
      {
        question: "Are Grok chat Skills Grok Bot skills?",
        answer: "No. Grok chat Skills shipped 18 May 2026 on grok.com, iOS, and Android.",
      },
      {
        question: "When should I write which?",
        answer: "Repo and PR: Cursor Agent Skill. Inbox, browser, `/workspace`, named Bot: Grok Bot skill.",
      },
    ],
  },
  {
    slug: "grok-bot-skills",
    title: "Grok Bot skills, explained",
    description: "A Grok Bot skill is a reusable how. You run the job once, save the method, then optionally put it on a routine. There is no public ClawHub-style registry.",
    aeoQuestion: "A Grok Bot skill is a reusable how. You run the job once, save the method, then optionally put it on a routine. There is no public ClawHub-style registry.",
    category: "skills",
    body: `# Grok Bot skills, explained

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

A Grok Bot skill is a reusable instruction set. It is the how. You run the job once, save the method, then optionally put it on a routine (the when). Type \`/\` in the desktop composer. Enable the skill per Bot under Settings → Plugins → Yours. There is no public ClawHub-style registry. This is not [Grok chat Skills](https://x.ai/news/grok-skills) (May 2026, grok.com / iOS / Android). This is not the [Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace) (\`/marketplace\`, \`.grok/skills/\`). This is not a Cursor IDE \`SKILL.md\`. Sign-in is a Cursor account. The official manual is [skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations).

## Skill = how, routine = when

[xAI splits the two objects](https://docs.x.ai/grok-bot/skills-routines-and-automations). A skill is a reusable set of instructions for how to do a task. A routine tells one Bot when to run a workflow, on a schedule or after an event.

Start with a one-time task. Make it reliable. Save the method. Only then automate.

A useful skill, per the official list, states:

1. When to use it
2. Required inputs and access
3. The sequence of work
4. How to validate the result
5. What to return
6. What requires approval

Skills are available across your Bots. A Bot may still need the connector or the login. Installed private skills can be enabled per Bot. If \`/\` does not show it, open Settings → Plugins → Yours and enable it for the current Bot.

A routine is optional. Many jobs should stay a skill you run by hand. Cap: 50 routines per Bot. Official triggers we will name: a schedule, Slack, or GitHub. Do not fire on every new message. The sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

Do not merge grok.com Automations into this. That is Grok chat, 16 July 2026. Do not merge Cursor Cloud Agent schedules. Isolated coding VMs. Different product.

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## Save after one real task

Do the work once in chat. Then ask:

> Save the process we just used as a skill called "Weekly account health." Include the source systems, risk definitions, output format, and the rule that customer contact always requires approval.

That prompt is from the skills page. Steal the shape. Name the sources. Name the output. Name the approval.

[Dennis Yu's writeup](https://dennisyu.com/how-i-use-grok-bot/) is a practitioner example of a saved method, including a \`.skill.md\` file he publishes on his own site. Treat it as one operator's notes, not as product spec. Official Grok Bot skills do not live as \`SKILL.md\` in \`.cursor/skills/\` or \`.grok/skills/\`. Do not copy his filename into a repo and expect the Bot to load it.

Teach a task is the other door. It records a box-browser workflow for up to ten minutes, no microphone, and writes a **draft** skill. You still add the rules the demo missed. Launch copy that says it "saves as a routine" is the wrong noun. Follow the skills page. The catalog sitting is [/skills/teach-a-task](/skills/teach-a-task).

The artifact you leave holding is the saved skill. Reviewable. Not live. Not scheduled.

## \`/\` to reference, enable per Bot under Settings → Plugins → Yours

Two menus. Do not invent a third.

Type \`/\` in the desktop composer to reference a saved skill. Type \`@\` for Bots, groups, routines, and connectors.

Use Settings → Plugins to discover and install supported connectors and packaged skills. Then, for a private skill that does not appear in \`/\`, open Settings → Plugins → Yours and enable it for the current Bot.

That toggle is why a skill you saved last Tuesday is invisible on the new specialist. Skills are not isolated per Bot as files. They are available across the roster. Enablement is per Bot. The login is still shared. A second Bot is not a second skill store.

The name-and-never-list that belongs on the Bot itself is [/skills/bot-persona-kit](/skills/bot-persona-kit). A skill without a named owner becomes a junk drawer.

## What a good skill names

Four fields people skip. Name them or the Bot will guess.

**Sources.** Which plugin, which box-browser URL, which file in \`/workspace\`. If the export is missing, report the miss. Do not invent the row.

**Output.** A table in this chat. A CSV in \`/workspace/account-health/\`. A draft mail that has not been sent. Official [use-cases](https://docs.x.ai/grok-bot/use-cases) are jobs with an artifact. Mirror that.

**Approval.** Send, spend, publish, delete, and prod stay behind a human. Write the verbs. Auto-review is a check, not a guarantee.

**Stale-data.** If the file in \`/workspace\` is older than the live view, mark the row stale. Official routine language: report the failure instead of using old data. Put the same sentence in the skill.

Also name the stop. Staging down. Wrong account. Empty search. A taught click path that keeps going on empty data is how you get a confident wrong list.

The [account-health](/jobs/account-health) job is this shape: ranked watch list, stale rows marked, no customer email. The skill paste is [/skills/account-health-watch](/skills/account-health-watch).

## There is no public ClawHub for Grok Bot

OpenClaw has [ClawHub](https://docs.openclaw.ai/clawhub). A public registry. \`openclaw skills install @owner/slug\`. Grok Bot does not.

Three nearby nouns will show up in the same search. None of them install a Bot skill.

| Noun | Product | Where it lives | Installs a Grok Bot skill? |
| --- | --- | --- | --- |
| Grok Bot skill | Grok Bot | Settings → Plugins → Yours, \`/\` in the Bot composer | Yes. This product |
| Cursor Agent Skill | Cursor IDE / Cloud Agents | \`SKILL.md\` under \`.cursor/skills/\` or \`.agents/skills/\` | No |
| Grok chat Skills | Grok chat, May 2026 | grok.com, Grok iOS, Grok Android | No |
| Grok Build marketplace | Grok Build, Jun 2026 | \`/marketplace\`, plugins that can bundle \`.grok/skills/\` | No |
| Cursor Teams marketplace | Cursor Teams Premium | Team plugins page | No. Team policy, not a Bot registry |
| ClawHub | OpenClaw | clawhub.ai | No |

Boxcrew is an index of pasteable how-tos. It is not a host. It is not a public Grok Bot skill store. We will not scrape Settings → Plugins. We will not invent a "220 plugins" catalog. Help-confirmed connectors stay Gmail, Notion, Slack. Zoom is broken (error 4700).

Do not paste a \`.cursor/skills\` or \`.grok/skills\` file into a Bot chat and expect it to load. The long split is [Grok Bot skills vs Cursor Agent Skills](/blog/grok-bot-skills-vs-cursor-skills).

## Copy-paste next

Three catalog skills, then the job they serve.

1. [/skills/account-health-watch](/skills/account-health-watch). ranked table, stale rows, no customer email. Pair with [/jobs/account-health](/jobs/account-health).
2. [/skills/bot-persona-kit](/skills/bot-persona-kit). short name, one job, never-list. Put this on the Bot before you save the how.
3. [/skills/teach-a-task](/skills/teach-a-task). record the box-browser path, keep the draft a draft, add the missed rules.

Then [/setup/skill-then-routine](/setup/skill-then-routine) if the when is next. Test run performs real work. Use a safe example. Keep writes behind approval.

## FAQ

**What is a Grok Bot skill?**
A reusable how. Sources, sequence, output, approval. Save it after one real task. Optionally put it on a routine.

**Is a Grok Bot skill a \`SKILL.md\` file?**
Not in \`.cursor/skills/\` or \`.grok/skills/\`. Those are other products. Grok Bot skills live in the Bot product under Settings → Plugins → Yours.

**Are Grok Bot skills the same as Grok chat Skills?**
No. Grok chat Skills shipped 18 May 2026 on grok.com, iOS, and Android. Different app. No shared box.

**Are Grok Bot skills the same as the Grok Build marketplace?**
No. Grok Build \`/marketplace\` is a terminal plugin catalog. It does not install Bot skills.

**Is there a public Grok Bot skill marketplace?**
No. No ClawHub for this product. Boxcrew is an index, not a host.

**How do I attach a skill in chat?**
Type \`/\` in the desktop composer. If it is missing, enable it for that Bot under Settings → Plugins → Yours.

**When do I add a routine?**
After the skill produces a reviewable artifact on a Test run. Not before.

## Sources

- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Use cases](https://docs.x.ai/grok-bot/use-cases)
- [How I use Grok Bot (Dennis Yu, practitioner)](https://dennisyu.com/how-i-use-grok-bot/)
- [Skills in web, iOS, and Android (Grok chat Skills)](https://x.ai/news/grok-skills)
- [Grok Build Plugin Marketplace](https://x.ai/news/grok-plugin-marketplace)
- [Cursor Agent Skills](https://cursor.com/docs/skills)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "What is a Grok Bot skill?",
        answer: "A reusable how. Sources, sequence, output, approval. Save it after one real task. Optionally put it on a routine.",
      },
      {
        question: "Is a Grok Bot skill a `SKILL.md` file?",
        answer: "Not in `.cursor/skills/` or `.grok/skills/`. Those are other products. Grok Bot skills live in the Bot product under Settings → Plugins → Yours.",
      },
      {
        question: "Are Grok Bot skills the same as Grok chat Skills?",
        answer: "No. Grok chat Skills shipped 18 May 2026 on grok.com, iOS, and Android. Different app. No shared box.",
      },
      {
        question: "Are Grok Bot skills the same as the Grok Build marketplace?",
        answer: "No. Grok Build `/marketplace` is a terminal plugin catalog. It does not install Bot skills.",
      },
      {
        question: "Is there a public Grok Bot skill marketplace?",
        answer: "No. No ClawHub for this product. Boxcrew is an index, not a host.",
      },
      {
        question: "How do I attach a skill in chat?",
        answer: "Type `/` in the desktop composer. If it is missing, enable it for that Bot under Settings → Plugins → Yours.",
      },
      {
        question: "When do I add a routine?",
        answer: "After the skill produces a reviewable artifact on a Test run. Not before.",
      },
    ],
  },
  {
    slug: "grok-bot-teach-a-task",
    title: "Grok Bot Teach a task",
    description: "Teach a task records a box-browser workflow for up to ten minutes with no microphone and writes a draft skill, not a routine.",
    aeoQuestion: "Teach a task records a box-browser workflow for up to ten minutes with no microphone and writes a draft skill, not a routine.",
    category: "skills",
    body: `# Grok Bot Teach a task

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

Launch copy is the trap. [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot) says the follow-along "saves your workflow as a routine." The overview repeats the same slip: it "persists that path as a routine." Those pages are marketing the verb "remember." The page that defines the objects says skill, then routine. A [skill](https://docs.x.ai/grok-bot/skills-routines-and-automations) is a reusable how. A routine tells one Bot when to run a workflow. grok.com Automations (16 Jul 2026) is a third product. Grok Build \`/marketplace\` is a fourth. Do not merge the nouns.

Open the draft and add the rules the recording cannot see:

- When to stop. Missing source, wrong account, staging down.
- Stale-data. If the export in \`/workspace\` is older than the one you just opened, mark the row stale. Do not rank stale above fresh.
- Approval. Send, spend, publish, delete, and prod stay behind a human. Put the same verbs in [Auto-review](/skills/auto-review-rules).
- Failure handling. Report the miss. Do not invent the number.
- Never-list. Do not send. Do not spend. Do not publish. Do not file.

A useful skill, per the official list, states when to use it, required inputs, the sequence, how to validate, what to return, and what requires approval. The recording gives you item three on a good day. You write the other five.

The artifact you leave holding is the edited skill. Reviewable. Not live. Not scheduled.

## Re-test when the site changes

A taught path is a screenshot of a website on a Tuesday. Buttons move. The CRM view gets a new filter. The ads UI renames a column. Official routine design says to re-test after a website, connector, or source format changes. Teach a task is the same rule, earlier.

Run the skill on a safe example first. Safe means a row you can afford to be wrong about. Safe does not mean fictional. A [Test run](https://docs.x.ai/grok-bot/skills-routines-and-automations) performs real work. It can navigate, change files, and call connected tools. Keep write actions behind approval. Compare the output to the recording. If the Bot skipped a gate you added, the draft is still a draft.

When the site changes, do not "just Reset the box." That is a different post. Re-record the path, or edit the skill by hand and test again. Keep durable files in \`/workspace\` so the next sitting can see the last good artifact. See [the box](/setup/the-box) if you have not opened that computer on purpose yet.

If the source is gone, the skill should say so and stop. A taught click path that keeps going on empty data is how you get a confident wrong list.

## Then save + optional routine

Order, and do not skip it:

1. One real task. Teach it, or write it.
2. Edit the draft. Add the missed rules.
3. Enable the skill for this Bot under Settings → Plugins → Yours if it does not show in \`/\`.
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
`,
    faq: [
      {
        question: "Does Grok Bot Teach a task save a routine?",
        answer: "No. The official skills page says the learned skill is a draft. A routine is a later step that tells one Bot when to run that skill. Launch copy that says \"saves as a routine\" is the wrong noun.",
      },
      {
        question: "Does Teach a task record my microphone?",
        answer: "No. It records visible computer interaction on the box. No mic.",
      },
      {
        question: "Does it record my laptop?",
        answer: "No. It records the shared Grok Bot computer. Your Mac or Windows PC is a separate machine with its own approval policy.",
      },
      {
        question: "How long can I record?",
        answer: "Up to ten minutes. Official cap on the skills page and the FAQ. Split a longer job.",
      },
      {
        question: "The Teach a task control is missing. Did I do it wrong?",
        answer: "Maybe not. Rollout can be gradual. Ask the Bot to save a skill from the written steps and the completed task. Same object.",
      },
      {
        question: "Is this grok.com Skills or Grok Build?",
        answer: "No. Those are other xAI products that share the word \"skill.\" This post is Grok Bot, signed in with a Cursor account, desktop and iOS.",
      },
      {
        question: "When do I add a routine?",
        answer: "After the edited skill produces a reviewable artifact on a Test run. Not before.",
      },
    ],
  },
  {
    slug: "grok-bot-update-vs-reset",
    title: "Update vs Reset the Grok Bot computer",
    description: "Update and Recover keep durable state on the Grok Bot computer. Reset drops unsynced work. Do not Reset first.",
    aeoQuestion: "Update and Recover keep durable state on the Grok Bot computer. Reset drops unsynced work. Do not Reset first.",
    category: "the-box",
    body: `# Update vs Reset the Grok Bot computer

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Update and Recover keep durable state. Reset drops unsynced work. Do not Reset first. If the Grok Bot computer is stuck, start with the least destructive step on [troubleshooting](https://docs.x.ai/grok-bot/troubleshooting): retry, restart the app, Recover when offered, then Update Agent Computer. Reset is last, and only if you accept losing recent unsynced work. Cursor Help calls this machine [the box](https://cursor.com/help/grok-bot/computer-recovery). xAI calls it the [Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps). One shared Linux computer for every Bot on your account. An app update is not a computer update.

## Direct answer

Three official computer actions live under Settings → Beta, plus Recover from an unreachable state:

| Action | What it does | Durable state | When |
| --- | --- | --- | --- |
| Retry / reopen the conversation | Least destructive first click | Untouched | Computer is slow or the preview died |
| Restart the Grok Bot app | Restarts the client, not the box | Untouched | The app is wedged |
| Recover Agent Computer | Replaces an unreachable computer | Kept, when the action is offered | The computer cannot be reached |
| Update Agent Computer | Rebuilds on the latest image | Kept | Planned maintenance, or Recover is not offered |
| Reset Agent Computer | Returns to the last durable snapshot | Recent unsynced work can go | Recover and Update already failed |
| Check for Updates (the app) | Updates the desktop client | Does not reset the computer | Version is stale. Do this early. |

Official line: Recover and Update "preserve durable files and logins." Reset "restores the last saved snapshot and can lose recent or unsynced work." Help is sharper still: "Reset rebuilds the box from scratch. Use it only as a last resort, since anything not yet synced to the server will not come back."

Conversation history is stored outside the box. Running \`rm -rf\` inside the sandbox does not delete the thread. Synced box data has a durable server copy. Local files on your Mac or Windows machine are not in that copy. Keep your own backups for anything that never left the laptop.

## When Update/Recover

Use Recover when the computer is unreachable and the error state offers **Recover computer** or **Recover Agent Computer**. That is the dedicated control. It replaces the unreachable machine and keeps durable state when the action is shown.

Use Update when setup is stuck on "Starting your computer" or "Updating your computer," or when Recover is not offered. [Update Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps) rebuilds with the latest image and is written to preserve durable state. Wait. Image updates take minutes. If progress is still changing, leave it. If it fails or freezes, retry from the error, restart the app, then Update.

Do the cheap steps first, even if you already know you want Update:

1. Update the desktop app. Many recovery failures are a stale client. Settings → Beta → Check for Updates, then Restart to Update.
2. Fully quit Grok Bot. Closing the window is not quitting.
3. Reopen the agent and use the computer controls to reopen the box.
4. Give rehydration time. Help says it can take a while. Repeated Reset or force-quit can interrupt a recover and drop an unsynced thread.

Wait for active work to finish before you recover, when you can. Cloud work can continue with the laptop closed. That is not permission to yank the image mid-write.

Copy the sitting onto a named Bot with [Update versus Reset](/skills/update-vs-reset) if you want the rule in the roster: try Update, then Recover, list unsynced work in \`/workspace\`, do not Reset first.

## When Reset is actually right

Reset is right when Recover failed, Update failed, and you have already listed what is not synced. It is a last resort, not a vibe.

It is not right because the Bot looks stuck. A stuck Bot is often waiting on a page, an approval, a login, a CAPTCHA, or a secret request. Open the computer. Look. Send "Stop now" if the work should end. That is [troubleshooting](https://docs.x.ai/grok-bot/troubleshooting), not Reset.

It is not right because a website asked for login again. Take over, sign in, finish 2FA, hand control back. Sessions expire. That is normal.

It is not right because you ran \`rm -rf\` inside the box and panicked. Reopen the box first. Help says the durable copy usually comes back. If the box is still empty after reopen, stop making changes and contact support with your account email and what you were doing. Do not Reset as a way to "try again."

It is not right as a hygiene habit. Signing out of a site, removing a file from \`/workspace\`, or deleting a connector is how you revoke access. Reset is how you gamble unsynced work.

Mobile apps cannot reset a computer. If you are on iOS, you are not looking at the control anyway.

## What you will lose

Reset keeps what already made it into the durable snapshot. It can drop what did not.

Treat as replaceable unless you copied it into \`/workspace\` or attached it to the conversation:

- Temporary directories
- Manually installed packages
- Uncommitted application state
- A file you just wrote and never synced
- An unsynced thread you force-quit mid-recover

Treat as usually kept across Update and Recover:

- Durable project files in \`/workspace\`
- Browser state and supported sign-ins (they are designed to survive normal updates and recovery)
- Conversation history (stored outside the box)
- Synced sandbox files on the server copy

Treat as never covered by box recovery:

- Files that live only on your Mac or Windows machine
- Anything you never put on the shared computer

Help's recover table is three rows. Agent conversation history: yes. Sandbox files synced to the durable store: yes, rehydrated on reopen or reset. Local files on your Mac or Windows machine: no.

If the box is empty after reopen and you keep typing into it, you can overwrite the thing support would have rehydrated. Stop. Name the control you are on. Ask a human if you cannot tell Update from Reset.

Put important results in \`/workspace\` before you are in this sitting. [Workspace handoff](/skills/workspace-handoff) is the habit: a folder named for the job, a path in the review list, no second machine.

## Login hygiene after a recover

A recover that keeps logins is not a promise that every site still likes the session. Team docs note that sign-in sessions inside the computer can drop when the computer is recreated or its network address changes. Plan for a takeover, not a Reset.

After Update or Recover:

1. Open the box. Confirm \`/workspace\` is the folder you expect.
2. Open the site you actually need. If it asks, take over. Finish the password, passkey, 2FA, or CAPTCHA yourself. Do not paste the code into chat.
3. Write down which login is on the box. Put the note in \`/workspace\`. [Box login hygiene](/skills/box-login-hygiene) is the paste for that.
4. Remember the session is shared. Signing in for one Bot makes the cookie available to the rest of the roster. A second Bot is not a new login.
5. If a login should no longer be there, sign out of the site. Do not Reset the computer to clear a cookie.

Plugins are account-wide. Re-auth a connector from Settings → Plugins if the source service revoked it. Do not treat Recover as a plugin reset.

If you are about to Reset and you have an unsynced file, copy it into \`/workspace\` or attach it to the conversation first. Then Reset, if you still must. Then expect to sign in again.

Open [the box](/setup/the-box) once on a calm day so the first time you see Recover is not the first time you see the computer.

## FAQ

**Should I Reset a stuck Grok Bot computer?**
No. Retry, restart the app, Recover if offered, then Update. Reset last.

**Does Update delete my files?**
Update is written to preserve durable state. Put important work in \`/workspace\` anyway. Temporary directories and unsynced files are replaceable.

**Does Recover keep logins?**
Official computer docs say Recover and Update preserve durable files and logins when that action is offered. Sites can still expire a session. Take over for 2FA.

**What does Reset drop?**
Recent unsynced work. Help: anything not yet synced to the server will not come back.

**I ran rm -rf inside the box. Is the chat gone?**
Conversation history is stored separately. Reopen the box. If it stays empty, stop and contact support.

**Is updating the Grok Bot app the same as Update Agent Computer?**
No. The app and the computer have separate updates. Updating the desktop app does not reset the cloud computer.

## Sources

- [Recover Grok Bot computer data](https://cursor.com/help/grok-bot/computer-recovery)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Troubleshooting](https://docs.x.ai/grok-bot/troubleshooting)
- [Files and results](https://docs.x.ai/grok-bot/files-and-results)
- [Grok Bot for teams and enterprises](https://docs.x.ai/grok-bot/teams-and-enterprises)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Should I Reset a stuck Grok Bot computer?",
        answer: "No. Retry, restart the app, Recover if offered, then Update. Reset last.",
      },
      {
        question: "Does Update delete my files?",
        answer: "Update is written to preserve durable state. Put important work in `/workspace` anyway. Temporary directories and unsynced files are replaceable.",
      },
      {
        question: "Does Recover keep logins?",
        answer: "Official computer docs say Recover and Update preserve durable files and logins when that action is offered. Sites can still expire a session. Take over for 2FA.",
      },
      {
        question: "What does Reset drop?",
        answer: "Recent unsynced work. Help: anything not yet synced to the server will not come back.",
      },
      {
        question: "I ran rm -rf inside the box. Is the chat gone?",
        answer: "Conversation history is stored separately. Reopen the box. If it stays empty, stop and contact support.",
      },
      {
        question: "Is updating the Grok Bot app the same as Update Agent Computer?",
        answer: "No. The app and the computer have separate updates. Updating the desktop app does not reset the cloud computer.",
      },
    ],
  },
  {
    slug: "grok-bot-vs-cursor-cloud-agents",
    title: "Grok Bot vs Cursor Cloud Agents",
    description: "Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box that can drive apps. Same Cursor account, different product.",
    aeoQuestion: "Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box that can drive apps. Same Cursor account, different product.",
    category: "compare",
    body: `# Grok Bot vs Cursor Cloud Agents

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok chat is not Grok Bot. Cursor Cloud Agents are not Grok Bot either. Cloud Agents are isolated coding VMs on a repo. They clone, branch, test, and open a pull request. Grok Bot is named teammates on one shared box that can drive apps, inboxes, and \`/workspace\`. Same Cursor account. Different product. Grok Bot access is Ultra, Teams Premium, or SuperGrok Heavy. Cloud Agents do not share that box. The short three-way table is [/grok-vs-grok-bot](/grok-vs-grok-bot). This page is the longer split.

## Direct answer

First, the collision that sent you here.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI chat assistant on grok.com and X | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None. A conversation | One shared managed box | A fresh isolated VM per run |
| Sign-in | A Grok / xAI account | A Cursor account | A Cursor account plus source control |

Grok is the chat assistant. Grok 4.x is a model name. A Cloud Agent can pick that name. That does not make the run a Grok Bot. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

Then the product split.

| | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- |
| Job | Named teammates. Inbox, browser, \`/workspace\` | Isolated coding VM. Repo to pull request |
| Computer | One shared box per account (Agent Computer / the box) | A fresh isolated VM per run |
| Isolation | Screens, not security boundaries. Files and cookies are shared | VM isolation. Secrets and network controls on the Cloud Agent side |
| Sign-in | Cursor account on Ultra, Teams Premium, or SuperGrok Heavy | Cursor account on a paid plan, with source control connected |
| Surface | Grok Bot desktop + iOS 18+ | Cursor Desktop, cursor.com/agents, iOS, Slack, GitHub, Linear, API |
| Skills | Saved in the Bot product. \`/\` and Settings → Plugins → Yours | Repo \`SKILL.md\` under \`.cursor/skills/\` or \`.agents/skills/\` |
| Schedule | A routine on one Bot: schedule, Slack, or GitHub | Cloud Agent automations: schedule plus GitHub, Slack, Linear, webhooks |
| Artifact | A reviewable draft in chat or \`/workspace\`. Human sends, spends, files | A merge-ready PR, plus screenshots, videos, logs |

Neither row is "better." They solve different rooms. Coding isolation wins for PR work. The shared box wins when the job lives in a site with no clean API.

## Isolation vs a shared box

[Cloud Agents docs](https://cursor.com/docs/cloud-agent) are blunt about the VM. The agent gets a development environment like a laptop: cloned repos, dependencies, secrets, startup commands, network access. Cursor manages provisioning and isolation. You can restrict outbound domains and add secrets in the Cloud Agents dashboard.

[Grok Bot computer docs](https://docs.x.ai/grok-bot/computer-and-apps) are blunt the other way. Every Bot on your account uses the same computer. Cookies, files, CLI creds, plugins. The computer is assigned to your user, not to an individual Bot. Each Bot gets a screen so they can work in parallel. The screens are not separate security boundaries.

That is the whole argument. Do not put a credential on the box if another Bot on the account should not use it. Do not spawn a second Bot and call it isolation. The tour is [/setup/the-box](/setup/the-box).

Cloud Agents do not share the Grok Bot box. A Cloud Agent VM is not a named teammate. Do not write that they are the same computer with two skins.

## Repo / PR loop vs inbox / browser / \`/workspace\`

A Cloud Agent starts from source control. An admin connects GitHub, GitLab, Bitbucket, or Azure DevOps. The agent clones, works on a separate branch, and pushes for handoff. [cursor.com/cloud](https://cursor.com/cloud) sells merge-ready PRs, self-testing in the sandbox, and remote desktop control so you can click the running app without checking out the branch.

That loop is the product. It is why isolation exists.

Grok Bot starts from a conversation with a named Bot. The computer already has a browser and \`/workspace\`. You take over for 2FA. You connect Gmail, Notion, or Slack if those are the sources. You ask for a draft list, a repro pack, a digest. The Bot stops at the artifact. You send, spend, or file.

Official Grok Bot jobs include bug reproduction. That is a pack: steps, screenshots, what you saw. It is not a production pull request. Use [/jobs/bug-reproduction](/jobs/bug-reproduction) and [/skills/bug-repro-pack](/skills/bug-repro-pack) when the bug lives in a UI the box can open. Hand the pack to a human, or to a Cloud Agent, if the next step is a PR.

We will not claim Grok Bot writes production PRs the way Cloud Agents do. The surfaces are different. The review bar is different.

## Schedules: Cloud Agent triggers vs Grok Bot routines

Do not merge these.

[Cursor Automations](https://cursor.com/cloud) run Cloud Agents on a schedule or on events from GitHub, Slack, Linear, webhooks, and more. They watch a repo. They are a coding product with a clock.

A Grok Bot routine tells one Bot when to run a skill. Official triggers we will name: a schedule, Slack, or GitHub. Narrow the event. Do not listen to every new message. Cap: 50 routines per Bot. Skill first, routine second. The sitting is [/setup/skill-then-routine](/setup/skill-then-routine).

A Slack message that says "needs repro" can start a Grok Bot routine that leaves a pack in the conversation. A Slack message that says "fix this on main" is a Cloud Agent trigger. Same chat app. Different computer. Different artifact.

grok.com Automations are a third product. They are not Grok Bot routines and they are not Cloud Agent schedules. If you searched "grok bot automations," check the URL before you configure anything.

## When to use which

Use a Cloud Agent when the work is a repo. You want a branch, tests, and a PR you can merge. Isolation is the feature. Parallel runs are the feature. [Docs](https://cursor.com/docs/cloud-agent) even say you can run as many as you want in parallel without your laptop on the network.

Use Grok Bot when the work is a tool a person would click. Inbox. CRM in the browser. A Notion page. A file that two Bots will hand off in \`/workspace\`. A roster with a chief of staff. A routine that drafts overnight and waits for you.

Fair split, not a winner: coding isolation wins for PR work. The shared box wins for multi-app jobs that are not a commit. Plenty of nights you want both. Same Cursor login. Two apps. Do not point a Bot at \`main\` and call it a Cloud Agent. Do not point a Cloud Agent at your shared Gmail cookies. It does not have them.

This page will not pick a champion. It will not invent VM sizes. It will not quote Cloud Agent prices. Cloud Agents are charged at API pricing for the selected model. That is their billing page, not ours.

## Skills collision

"Skills" is four products sharing a noun.

Cursor Agent Skills are \`SKILL.md\` files in the repo or in \`~/.cursor/skills/\`. [Cursor's skills docs](https://cursor.com/docs/skills) are the IDE / Cloud Agent format. You type \`/\` in Agent chat.

Grok Bot skills live in the Bot product. You save after a real task. You type \`/\` in the Grok Bot desktop composer. You enable the skill per Bot under Settings → Plugins → Yours. They are not a folder you copy from \`.cursor/skills/\`.

Grok chat Skills and the Grok Build marketplace are two more xAI nouns. They are not this product.

Do not paste a \`.cursor/skills\` or \`.grok/skills\` file into a Bot chat and expect it to load. The long split is [Grok Bot skills vs Cursor Agent Skills](/blog/grok-bot-skills-vs-cursor-skills).

## FAQ

**Is Grok Bot a Cursor Cloud Agent?**
No. Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box.

**Is Grok Bot the same as Grok chat?**
No. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Do Cloud Agents share the Grok Bot box?**
No. Different computers. Different isolation story.

**Can Grok Bot open a production pull request the way Cloud Agents do?**
Do not count on that loop. Cloud Agents are built for clone, branch, PR. Grok Bot is built for the box. A bug-repro Bot leaves a pack. A human or a Cloud Agent can take the next commit.

**Are routines the same as Cursor Automations?**
No. A routine belongs to one Grok Bot. Cursor Automations schedule Cloud Agents. grok.com Automations are a third thing.

**Which should I use?**
PR work: Cloud Agent. Inbox, browser, \`/workspace\`, named roster: Grok Bot. Same account. Do not merge the products.

## Sources

- [Cloud Agents docs](https://cursor.com/docs/cloud-agent)
- [cursor.com/cloud](https://cursor.com/cloud)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Cursor Agent Skills](https://cursor.com/docs/skills)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Is Grok Bot a Cursor Cloud Agent?",
        answer: "No. Cloud Agents are isolated coding VMs on a repo. Grok Bot is named teammates on one shared box.",
      },
      {
        question: "Is Grok Bot the same as Grok chat?",
        answer: "No. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
      {
        question: "Do Cloud Agents share the Grok Bot box?",
        answer: "No. Different computers. Different isolation story.",
      },
      {
        question: "Can Grok Bot open a production pull request the way Cloud Agents do?",
        answer: "Do not count on that loop. Cloud Agents are built for clone, branch, PR. Grok Bot is built for the box. A bug-repro Bot leaves a pack. A human or a Cloud Agent can take the next commit.",
      },
      {
        question: "Are routines the same as Cursor Automations?",
        answer: "No. A routine belongs to one Grok Bot. Cursor Automations schedule Cloud Agents. grok.com Automations are a third thing.",
      },
      {
        question: "Which should I use?",
        answer: "PR work: Cloud Agent. Inbox, browser, `/workspace`, named roster: Grok Bot. Same account. Do not merge the products.",
      },
    ],
  },
  {
    slug: "grok-bot-vs-grok",
    title: "Grok Bot vs Grok",
    description: "No. Grok is xAI's chat assistant. Grok Bot is a separate Cursor-signed-in product with named Bots and a shared box.",
    aeoQuestion: "No. Grok is xAI's chat assistant. Grok Bot is a separate Cursor-signed-in product with named Bots and a shared box.",
    category: "compare",
    body: `# Grok Bot vs Grok

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok chat is not Grok Bot. Grok is xAI's chat assistant on grok.com and X. Grok Bot is a separate product you sign into with a Cursor account. Named Bots. Skills. Routines. One shared box. Access is Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not include it. The collision table is already at [/grok-vs-grok-bot](/grok-vs-grok-bot). This page is the longer answer. Third-party FAQs already say no. [Helio's Grok Bot page](https://www.helio.im/blog/what-is-grok-bot/) is one public example. Treat that as proof the confusion is live, not as product spec.

## Direct answer

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| Surface | grok.com and X | Desktop app (macOS, Windows) and iOS 18+ | cursor.com/cloud, the IDE |
| Sign-in | A Grok / xAI account | A Cursor account | A Cursor account |
| Computer | None. A conversation | One shared cloud Linux computer (the box / Agent Computer) | Isolated coding VM on a repo |
| Plans | SuperGrok family on grok.com. We do not map those SKUs here | Cursor Ultra, Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ are out | Cursor Cloud Agents product |
| Roster | No named Bots | Named Bots, group chats, 50 Bots + groups combined | No Bot roster |
| Skills / routines | Not this product | Skill = how. Routine = when. 50 routines per Bot | IDE Agent Skills and Cloud Agent schedules |

If you asked "is Grok Bot the same as Grok," the cell you want is the first one. No.

Do not read SuperGrok (the non-Heavy grok.com plan) as Grok Bot access. [Help](https://cursor.com/help/grok-bot/plans) names SuperGrok Heavy, not SuperGrok.

## What Grok chat is

Grok is the assistant people already mean when they say Grok. A thread. A model behind it. You type, it answers.

We did not fetch grok.com for a feature list, so this page will not invent one. Image toys, search modes, and voice are not our job to catalog. What matters for the collision: Grok chat has no named roster, no shared box, no Grok Bot skills, and no Grok Bot routines.

If your work is one question and a reply, you are in chat. Stay there.

## What Grok Bot is

Grok Bot is the Cursor desktop and iOS app launched in [early beta on 11 Aug 2026](https://x.ai/news/introducing-grok-bot). [Overview](https://docs.x.ai/grok-bot/overview) calls a Bot a persistent, named teammate. You give it a job. It works in the real tools on the shared computer. It comes back when something needs approval.

You create a Bot with a short name, one primary job, and a description of how it should work. [Get started](https://docs.x.ai/grok-bot/get-started) wants focused Bots, not one catch-all. You can put a small team in a group and let a chief-of-staff Bot delegate.

The computer is the difference you can feel. Browser, files, terminal, \`/workspace\`. Plugins today: Gmail, Notion, Slack. Zoom is broken (error 4700). A skill saves the method. A routine fires it later. Closing the laptop does not stop cloud work.

Sign-in is the same Cursor account that owns the plan. [There is no separate Grok Bot login](https://cursor.com/help/grok-bot/sign-in).

The install sitting is [/setup/install-plan](/setup/install-plan). The box sitting is [/setup/the-box](/setup/the-box). Words are in [/glossary](/glossary).

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## Why the names collide

Three labels share four letters.

Grok is the chat brand. Grok 4.x is the model family. Grok Bot is the Bot product. Cursor Cloud Agents can pick a Grok model in the UI. That is a model picker, not a Bot roster.

The [launch post](https://x.ai/news/introducing-grok-bot) sits on x.ai/news under SpaceXAI branding. Cursor Help owns sign-in, plans, and "the box." docs.x.ai owns overview, computer, and skills. Same product, two houses, one Cursor account.

People then write merger stories. We will not. This page does not claim that xAI bought Cursor. It does not read an 8-K. It does not flatten the two companies into one SKU.

Helio already ships a public "is Grok Bot the same as Grok?" FAQ that answers no. Atomicbot and eesel hit the same query. The catalog collision page existed for the same reason. Use [/grok-vs-grok-bot](/grok-vs-grok-bot) when you need the three-column table with Cloud Agents in the third seat.

## When you want chat vs when you want a Bot

Want chat when the work is a question. A draft in the thread is the artifact. You do not need a browser session that survives overnight. You do not need a second named teammate.

Want a Bot when the work needs a computer. A CRM view in the box browser. A file in \`/workspace\`. A Gmail or Slack plugin. A routine that runs after you close the lid. A second Bot that picks up the same cookies.

A useful test: if you would hand the job to a person with a laptop, and you want that laptop to stay on after you leave, that is Grok Bot. If you would ask a person a question in Slack and take the reply, that is Grok chat.

Do not buy Ultra to get a nicer grok.com window. The app will not give you that. Do not open grok.com and look for a roster. It is not there.

## Next: Cloud Agents

The other collision is Cursor Cloud Agents. Isolated coding VMs. Repo, branch, pull request. Same Cursor account, still not Grok Bot, still not Grok chat.

Read [Grok Bot vs Cursor Cloud Agents](/blog/grok-bot-vs-cursor-cloud-agents) if the question is coding isolation versus a shared box. Come back here if the question is chat versus teammates.

## FAQ

**Is Grok Bot the same as Grok?**
No. Grok is the chat assistant. Grok Bot is named teammates on a shared box. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Is Grok Bot the same as Grok 4.x?**
No. Grok 4.x is a model family. A Cloud Agent can use that model. That does not make it a Grok Bot.

**Do I sign into Grok Bot with a Grok account?**
No. Sign-in is a Cursor account. [Help](https://cursor.com/help/grok-bot/sign-in) is explicit: there is no separate Grok Bot login.

**Does SuperGrok include Grok Bot?**
Help names SuperGrok Heavy as a door. It does not name SuperGrok or SuperGrok Plus. Do not assume the non-Heavy plan.

**Does Cursor Pro include Grok Bot?**
No. Pro and Pro+ do not. Ultra, a Teams Premium seat, or SuperGrok Heavy.

**Where is the short version?**
[/grok-vs-grok-bot](/grok-vs-grok-bot).

## Sources

- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Sign in to Grok Bot](https://cursor.com/help/grok-bot/sign-in)
- [What is Grok Bot? (Helio, secondary)](https://www.helio.im/blog/what-is-grok-bot/)
- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Is Grok Bot the same as Grok?",
        answer: "No. Grok is the chat assistant. Grok Bot is named teammates on a shared box. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
      {
        question: "Is Grok Bot the same as Grok 4.x?",
        answer: "No. Grok 4.x is a model family. A Cloud Agent can use that model. That does not make it a Grok Bot.",
      },
      {
        question: "Do I sign into Grok Bot with a Grok account?",
        answer: "No. Sign-in is a Cursor account. [Help](https://cursor.com/help/grok-bot/sign-in) is explicit: there is no separate Grok Bot login.",
      },
      {
        question: "Does SuperGrok include Grok Bot?",
        answer: "Help names SuperGrok Heavy as a door. It does not name SuperGrok or SuperGrok Plus. Do not assume the non-Heavy plan.",
      },
      {
        question: "Does Cursor Pro include Grok Bot?",
        answer: "No. Pro and Pro+ do not. Ultra, a Teams Premium seat, or SuperGrok Heavy.",
      },
      {
        question: "Where is the short version?",
        answer: "[/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
    ],
  },
  {
    slug: "grok-bot-vs-hermes",
    title: "Grok Bot vs Hermes Agent",
    description: "Hermes Agent is an open-source agent you run yourself, with a learning loop and an OpenClaw migrator. Grok Bot is a hosted, plan-gated product with a shared managed box.",
    aeoQuestion: "Hermes Agent is an open-source agent you run yourself, with a learning loop and an OpenClaw migrator. Grok Bot is a hosted, plan-gated product with a shared managed box.",
    category: "compare",
    body: `# Grok Bot vs Hermes Agent

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Hermes Agent is Nous Research's open-source agent. You run it. Learning loop. Skills. Messaging gateways. An OpenClaw migrator. Grok Bot is a hosted Cursor/xAI product. Named Bots. One managed box. Plan-gated install. They are not the same job. This is not Grok chat, not a Cursor Cloud Agent, and not the Hermes model family. The three-way collision table is [/grok-vs-grok-bot](/grok-vs-grok-bot). Canonical Hermes docs live at [hermes-agent.nousresearch.com](https://hermes-agent.nousresearch.com/), not on stale recap domains.

## Direct answer

First, the collision. Then Hermes.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI's chat assistant on grok.com and X | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None. A conversation | One shared managed box | A fresh isolated VM per run |
| Sign-in | A Grok / xAI account | A Cursor account | A Cursor account plus source control |

Grok is the chat assistant. Grok 4.x is a model family. A Cloud Agent can pick that family. That does not make it a Grok Bot. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

| | Grok Bot | Hermes Agent |
| --- | --- | --- |
| Shape | Hosted product. Desktop + iOS 18+ | Open-source agent you install (MIT) |
| Who | Cursor / xAI | [Nous Research](https://nousresearch.com) |
| Computer | One managed cloud Linux box per account | Your host, a VPS, Docker, SSH, or serverless |
| Named Bots | Roster on one shared box. Screens, not walls | [Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode): isolated profiles under \`~/.hermes/profiles/\` |
| Learning | Preferences in the Bot product. No Hermes-style loop | Official docs: a built-in learning loop that writes skills from experience |
| OpenClaw path | None | \`hermes claw migrate\` |
| Channels | Grok Bot desktop and iPhone | Telegram, Discord, Slack, WhatsApp, Signal, and more |
| Access | Ultra, Teams Premium, or SuperGrok Heavy | You bring a provider or a local endpoint |

Different jobs. Hermes if you want to run it. Grok Bot if you already pay Ultra, a Premium seat, or Heavy.

The [hermes-agent repo](https://github.com/NousResearch/hermes-agent) had 233,470 stars on 21 Aug 2026 AEST. Date it if you reuse the number. Recaps still quote 64k or 140k. Those are stale. Do not cite [hermes-agent.org](https://hermes-agent.org/) for platform counts.

## Hermes the model family vs Hermes Agent

Two products share a name. Do not merge them.

Hermes, Nomos, and Psyche are Nous model families. People search "Hermes" and land on a weight card.

[Hermes Agent](https://hermes-agent.nousresearch.com/docs/) is the agent harness. CLI, desktop, gateway, skills, memory, Bot Mode. Built by the same lab. It talks to Nous Portal, OpenRouter, or any endpoint. It is not "the Hermes model with a chat skin." It is not a Cursor product.

Grok Bot has no model picker. [Teams docs](https://docs.x.ai/grok-bot/teams-and-enterprises) say model choice is fully managed. That is a different contract. A Bot does not run Hermes. Hermes Agent is not Grok.

If you only wanted the model card, stop. This page is the agent.

## Self-host vs one managed box

[Hermes docs](https://hermes-agent.nousresearch.com/docs/) are blunt about place. Local. Docker. SSH. Daytona. Modal. You pick the host. Talk to it from Telegram while it works on a VM you never SSH into. It is not tied to your laptop.

Grok Bot is the opposite bet. [Computer docs](https://docs.x.ai/grok-bot/computer-and-apps): one persistent cloud Linux computer, assigned to your user, shared by every Bot on the account. Cursor Help calls it the box. xAI calls it the Agent Computer. You do not provision it. You do not pick the image. Update / Recover / Reset are Help verbs. The tour is [/setup/the-box](/setup/the-box).

That is the whole argument. Hermes: you run the runtime. Grok Bot: Cursor runs the box. Do not flatten them into "both have a computer."

We will not quote a VPS price. We will not invent VM sizes. We will not call Hermes serverless "free when idle" a Grok Bot feature.

## Named Bots: shared box vs isolated profiles

Grok Bot's roster is names on one machine. Piper does account health. Jordan does outbound. They share cookies, \`/workspace\`, and CLI creds. Each Bot gets a screen so they can click in parallel. Official wording: screens are work surfaces, not security boundaries. Duplicate a Bot for scope, not for isolation. Cap: 50 Bots and group chats combined. The name kit is [/skills/bot-persona-kit](/skills/bot-persona-kit).

Hermes Bot Mode is a UI over profiles. Official line: a Bot is a Hermes profile. Isolated config, memory, skills, credentials, and chat history under \`~/.hermes/profiles/<name>/\`. \`hermes -p <name> chat\` is the same agent. Routines show up in \`hermes cron list\`. Groups are 2 to 6 Bots in a room. \`@\` mentions hand work off.

Hermes Bot Mode Bots do not share one security boundary the way Grok Bots share one box. Official Bot Mode: isolated profiles. A Grok Bot second name is a second job description on the same cookie jar.

## Learning loop and \`hermes claw migrate\`

Hermes ships a learning loop. [Docs](https://hermes-agent.nousresearch.com/docs/): it creates skills from experience, improves them during use, and builds a user model across sessions. That is their claim. We will not call it the only self-improving agent. We will not write that Grok Bot has the same loop.

Grok Bot remembers how you like a job done. You save a skill after a real task. You optionally put it on a routine. That is a how and a when. It is not Hermes' learning loop.

If you are coming from OpenClaw, the [repo README](https://github.com/NousResearch/hermes-agent) names the command: \`hermes claw migrate\`. Dry-run first with \`--dry-run\`. \`--preset user-data\` migrates without secrets. \`hermes setup\` offers the same import when it sees \`~/.openclaw\`. The longer OpenClaw split is [Grok Bot vs OpenClaw](/blog/grok-bot-vs-openclaw). Grok Bot has no migrator from either project.

Cite the README for those commands. Do not invent a third flag.

## Messaging gateways vs Desktop + iOS

Hermes lives where you already chat. Official gateway list includes Telegram, Discord, Slack, WhatsApp, Signal, Matrix, Mattermost, email, SMS, Teams, Google Chat, and more. One gateway. Many surfaces. Desktop exists for macOS, Windows, and Linux. Android via Termux is in the install matrix.

Grok Bot is a Cursor desktop app (macOS, Windows) and an iPhone app on iOS 18+. Same Cursor account. Same usage bucket. No Linux desktop client. No Android client. No iPad client. Confirmed plugins: Gmail, Notion, Slack. Zoom is broken (error 4700). You message a named Bot in that app, not in WhatsApp.

If the job is "Telegram the agent on a host I run," Hermes is the shape. If the job is "named teammates on a box I did not stand up," Grok Bot is the shape.

## Fair pick

Pick Hermes Agent when you want to run the agent. You want isolated profiles. You want a gateway. You want \`hermes claw migrate\`. You will read [the docs](https://hermes-agent.nousresearch.com/docs/) and the [Bot Mode page](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode). You will not ask Boxcrew to operate it.

Pick Grok Bot when you already pay Cursor Ultra, hold a Teams Premium seat, or can claim SuperGrok Heavy. You want a managed box and a plan-gated install. You will accept Desktop + iOS and a shared cookie jar. The sitting is [/setup/install-plan](/setup/install-plan).

Plenty of desks will run both. Same human. Two computers. Do not paste a Hermes profile into a Bot chat. Do not point a Bot at \`~/.hermes\` and call it Bot Mode.

We will not publish a benchmark. We will not invent a launch month. We will not claim affiliation with Nous.

A Grok Bot job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## FAQ

**Is Grok Bot the same as Hermes Agent?**
No. Hermes Agent is an open-source agent you run. Grok Bot is a hosted Cursor/xAI product with one managed box.

**Is this the Hermes model?**
No. Hermes Agent is the harness. Hermes, Nomos, and Psyche are Nous model families. Different objects.

**Is Grok Bot the same as Grok chat?**
No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Do Hermes Bots share one box like Grok Bots?**
No. Official Bot Mode: isolated profiles under \`~/.hermes/profiles/\`. Grok Bots share cookies on one computer.

**Can I migrate OpenClaw into Grok Bot?**
No. Hermes has \`hermes claw migrate\`. Grok Bot does not.

**Who should pick which?**
Run it yourself: Hermes. Already on Ultra / Premium / Heavy: Grok Bot.

## Sources

- [Hermes Agent](https://hermes-agent.nousresearch.com/)
- [Hermes Agent docs](https://hermes-agent.nousresearch.com/docs/)
- [Bot Mode](https://hermes-agent.nousresearch.com/docs/user-guide/bot-mode)
- [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
- [Nous Research](https://nousresearch.com)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Is Grok Bot the same as Hermes Agent?",
        answer: "No. Hermes Agent is an open-source agent you run. Grok Bot is a hosted Cursor/xAI product with one managed box.",
      },
      {
        question: "Is this the Hermes model?",
        answer: "No. Hermes Agent is the harness. Hermes, Nomos, and Psyche are Nous model families. Different objects.",
      },
      {
        question: "Is Grok Bot the same as Grok chat?",
        answer: "No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
      {
        question: "Do Hermes Bots share one box like Grok Bots?",
        answer: "No. Official Bot Mode: isolated profiles under `~/.hermes/profiles/`. Grok Bots share cookies on one computer.",
      },
      {
        question: "Can I migrate OpenClaw into Grok Bot?",
        answer: "No. Hermes has `hermes claw migrate`. Grok Bot does not.",
      },
      {
        question: "Who should pick which?",
        answer: "Run it yourself: Hermes. Already on Ultra / Premium / Heavy: Grok Bot.",
      },
    ],
  },
  {
    slug: "grok-bot-vs-openclaw",
    title: "Grok Bot vs OpenClaw",
    description: "OpenClaw is a self-hosted agent gateway you run. Grok Bot is a hosted Cursor/xAI product with one managed box.",
    aeoQuestion: "OpenClaw is a self-hosted agent gateway you run. Grok Bot is a hosted Cursor/xAI product with one managed box.",
    category: "compare",
    body: `# Grok Bot vs OpenClaw

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

OpenClaw is a self-hosted agent gateway you run on your machine or a server. Grok Bot is a hosted Cursor/xAI product. Named Bots. One managed box. Plan-gated install. They are not the same job. If you searched Clawdbot or Moltbot, those are old names for OpenClaw. The three-way collision is [Grok chat vs Grok Bot vs Cursor Cloud Agents](/grok-vs-grok-bot). This page is hosted box vs self-hosted gateway.

## Direct answer

First, the collision that sent you here. Then the actual comparison.

| | Grok chat | Grok Bot | Cursor Cloud Agents |
| --- | --- | --- | --- |
| What it is | xAI's chat assistant on grok.com and X | Named teammates on desktop and iOS | Isolated coding VMs on a repo |
| Computer | None. A conversation | One shared managed box | A fresh isolated VM per run |
| Sign-in | A Grok / xAI account | A Cursor account | A Cursor account plus source control |

Grok is the chat assistant. Grok 4.x is a model family. A Cloud Agent can pick that family. That does not make it a Grok Bot. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

| | Grok Bot | OpenClaw |
| --- | --- | --- |
| Shape | Hosted product. Desktop + iOS 18+ | Self-hosted gateway you install |
| Computer | One managed cloud Linux box per account | Your machine, a VPS, or a node you pair |
| Sign-in | Cursor account on Ultra, Teams Premium, or SuperGrok Heavy | You bring a provider key or a local model |
| Channels | Grok Bot desktop and iPhone | WhatsApp, Telegram, Discord, Slack, Signal, iMessage, and more |
| Skills | Save in the Bot product. Settings → Plugins → Yours | \`SKILL.md\` files plus [ClawHub](https://docs.openclaw.ai/clawhub) |
| Public registry | None | ClawHub |
| Stewardship | Cursor Help + docs.x.ai | OpenClaw Foundation, MIT |

OpenClaw wins self-host, channels, and a public skill registry. Grok Bot wins a managed computer and a plan-gated install. Neither row is a winner for every desk. [Mindstudio already shipped a launch recap](https://www.mindstudio.ai/blog/grok-bot-vs-openclaw-chatgpt). Treat that as proof the query is live, not as spec.

The [OpenClaw GitHub repo](https://github.com/openclaw/openclaw) had 386,904 stars on 21 Aug 2026 AEST. Date it if you reuse the number. Do not paste an undated recap.

## Name trail: Clawd / Clawdbot to Moltbot to OpenClaw

If you still have a \`clawdbot\` or \`moltbot\` binary, you are looking at OpenClaw under an old name.

[CNBC, 2 Feb 2026](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html): Peter Steinberger launched the project in November as Clawdbot. It became Moltbot, then OpenClaw. CNBC's own headline uses all three. That is the alias block. Those queries belong on this page.

The official product today is [OpenClaw](https://openclaw.ai/). Docs live at [docs.openclaw.ai](https://docs.openclaw.ai/). Official copy: a self-hosted gateway that connects chat apps to an agent you run. One Gateway process. Your hardware, or a server you control. MIT licensed. Developed in the open by the OpenClaw Foundation.

OpenClaw is still the same project. Grok Bot did not replace it. Different install. Different computer. Different blast radius.

## Skills and ClawHub vs Settings → Plugins

OpenClaw skills are \`SKILL.md\` files. [Docs](https://docs.openclaw.ai/tools/skills) load them from workspace, project, personal, managed, and bundled roots. [ClawHub](https://docs.openclaw.ai/clawhub) is the public registry. \`openclaw skills install @owner/slug\`. Public pages show scan state before you install. Treat a third-party skill as untrusted code. Read it. Prefer a sandbox.

Grok Bot has no ClawHub. There is no public Bot skill directory. You run a job once, save the method, type \`/\` in the desktop composer, and enable the skill per Bot under Settings → Plugins → Yours. Skills can be used across your Bots. The Bot still needs the login. Boxcrew is an index of pasteable how-tos. It does not host OpenClaw skills and it does not install Bot skills.

Cursor Teams has a marketplace for Cursor. That is not a Grok Bot registry. Grok Build \`/marketplace\` is a fourth product. grok.com Skills is a fifth. Do not merge the nouns. The Bot sitting is [/skills/bot-persona-kit](/skills/bot-persona-kit) for the name and never-list, then a real task.

A Grok Bot job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## Channels vs Desktop + iOS

OpenClaw's pitch is the Gateway. [Official docs](https://docs.openclaw.ai/) list Discord, Google Chat, iMessage, Matrix, Microsoft Teams, Signal, Slack, Telegram, WhatsApp, Zalo, and more. You message from the app you already live in. iOS and Android nodes pair for camera, screen, and voice. You run the Gateway.

Grok Bot's pitch is a Cursor desktop app (macOS, Windows) and an iPhone app on iOS 18+. Same account. Same box. Same roster. No Linux desktop client. No Android client. No iPad client. You do not get WhatsApp or iMessage as first-party Bot channels. You get a conversation with a named Bot, a computer view, and plugins. Confirmed today: Gmail, Notion, Slack. Zoom is broken (error 4700).

If the job is "text it from WhatsApp on the train," OpenClaw is the shape. If the job is "named teammates on a managed box I did not provision," Grok Bot is the shape.

## Security: public skill scans vs shared-box cookies

Fair both ways. Do not pretend one side is clean.

OpenClaw gives you the machine. That is the feature and the risk. CNBC quoted Steinberger calling it a hobby project that needs careful configuration. Palo Alto and Cisco warnings live in that same piece. We will not invent malware counts. ClawHub now shows scan state. You still read the skill. You still sandbox untrusted input. You still decide who can message the Gateway.

Grok Bot gives you a managed box. Cursor Help calls it the box. xAI calls it the Agent Computer. Every Bot on your account shares cookies, files, and CLI creds. Each Bot has a screen, not a security boundary. Do not put a credential on the box if another Bot should not use it. Do not spawn a second Bot and call it isolation. The tour is [/setup/the-box](/setup/the-box).

Public skill scans do not exist for Grok Bot, because there is no public Bot registry. Shared-box cookies do not exist for OpenClaw in the same way, because you chose the host. Pick the failure mode you can live with.

## Stewardship

[The OpenClaw Foundation post](https://openclaw.ai/blog/introducing-openclaw-foundation) is the line to quote. OpenClaw is a 501(c)(3). The project stays MIT. The Foundation exists to keep it open and independent. Peter still stewards the technical calls. He joined OpenAI. OpenAI is named as a donor and an inference supporter. OpenAI stood up Claw Labs. That is support. That is not ownership.

The foundation post is explicit about independence. OpenAI is a donor and an inference supporter, not the owner. If a recap flattened donor into owner, ignore the recap.

Grok Bot is a Cursor-signed-in product with docs on docs.x.ai and Help on cursor.com. The [launch post](https://x.ai/news/introducing-grok-bot) sits on x.ai/news under SpaceXAI branding. Boxcrew is not affiliated with Cursor, xAI, SpaceXAI, or the OpenClaw Foundation.

## Who should pick which

Pick OpenClaw when you want to run the gateway. You care about WhatsApp or Telegram as the surface. You want ClawHub. You want MIT and a machine you provision. You will read skills before you install them. You will not ask Boxcrew to host them.

Pick Grok Bot when you already pay Cursor Ultra, hold a Teams Premium seat, or can claim SuperGrok Heavy. You want a managed box you did not stand up. You want a named roster and a chief-of-staff group. You will accept Desktop + iOS and a shared cookie jar. The install sitting is [/setup/install-plan](/setup/install-plan). The official roster pattern is [/jobs/chief-of-staff](/jobs/chief-of-staff).

Plenty of desks will run both. Same human. Two computers. Do not paste an OpenClaw \`SKILL.md\` into a Bot chat and expect it to load. Do not point a Bot at your Gateway and call it OpenClaw.

We will not publish a benchmark. We will not call either product dead.

## FAQ

**Is Grok Bot the same as OpenClaw?**
No. OpenClaw is a self-hosted gateway. Grok Bot is a hosted Cursor/xAI product with one managed box.

**Is Grok Bot the same as Clawdbot or Moltbot?**
Those are old names for OpenClaw. See the name trail above. Grok Bot is a different product.

**Is Grok Bot the same as Grok chat?**
No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Does OpenAI own OpenClaw?**
No. The Foundation post says the project stays MIT and independent. OpenAI is a donor and inference supporter.

**Does Grok Bot have a public skill marketplace like ClawHub?**
No. Settings → Plugins → Yours. Boxcrew is an index, not a host.

**Who should use which?**
Run it yourself, want channels and ClawHub: OpenClaw. Already on Ultra / Premium / Heavy, want a managed box: Grok Bot.

## Sources

- [OpenClaw](https://openclaw.ai/)
- [OpenClaw docs](https://docs.openclaw.ai/)
- [OpenClaw skills](https://docs.openclaw.ai/tools/skills)
- [ClawHub](https://docs.openclaw.ai/clawhub)
- [openclaw/openclaw on GitHub](https://github.com/openclaw/openclaw)
- [Introducing the OpenClaw Foundation](https://openclaw.ai/blog/introducing-openclaw-foundation)
- [CNBC: Clawdbot to Moltbot to OpenClaw](https://www.cnbc.com/2026/02/02/openclaw-open-source-ai-agent-rise-controversy-clawdbot-moltbot-moltbook.html)
- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Grok Bot vs OpenClaw (Mindstudio, secondary)](https://www.mindstudio.ai/blog/grok-bot-vs-openclaw-chatgpt)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "Is Grok Bot the same as OpenClaw?",
        answer: "No. OpenClaw is a self-hosted gateway. Grok Bot is a hosted Cursor/xAI product with one managed box.",
      },
      {
        question: "Is Grok Bot the same as Clawdbot or Moltbot?",
        answer: "Those are old names for OpenClaw. See the name trail above. Grok Bot is a different product.",
      },
      {
        question: "Is Grok Bot the same as Grok chat?",
        answer: "No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
      {
        question: "Does OpenAI own OpenClaw?",
        answer: "No. The Foundation post says the project stays MIT and independent. OpenAI is a donor and inference supporter.",
      },
      {
        question: "Does Grok Bot have a public skill marketplace like ClawHub?",
        answer: "No. Settings → Plugins → Yours. Boxcrew is an index, not a host.",
      },
      {
        question: "Who should use which?",
        answer: "Run it yourself, want channels and ClawHub: OpenClaw. Already on Ultra / Premium / Heavy, want a managed box: Grok Bot.",
      },
    ],
  },
  {
    slug: "what-is-grok-bot",
    title: "What is Grok Bot? (not Grok chat)",
    description: "Grok Bot is named, persistent teammates that share one cloud Linux computer. It is not the Grok chat assistant.",
    aeoQuestion: "Grok Bot is named, persistent teammates that share one cloud Linux computer. It is not the Grok chat assistant.",
    category: "compare",
    body: `# What is Grok Bot?

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

Grok Bot is a Cursor desktop and iOS 18 app for named teammates. You [sign in with a Cursor account](https://cursor.com/help/grok-bot/sign-in). Each Bot has a name, a job, skills, and routines. All of them share one cloud Linux computer. xAI calls that computer the Agent Computer. Cursor Help calls it the box. They share files, cookies, and CLI creds. Each Bot has its own screen, not its own machine. It is not Grok chat. The short collision table is [/grok-vs-grok-bot](/grok-vs-grok-bot). Access is Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not include it.

## The 80-word definition

Grok Bot is a Cursor desktop and iOS 18 app for named teammates. Each named Bot has a job, skills, and routines. They share one cloud Linux computer called the box: browser, files, terminal. Plugins and MCP are structured tools. A routine fires on a schedule or an event. A skill is the how. You review send, spend, and delete. Not Grok chat. Not Cursor Cloud Agents. Sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy.

That is the product. A thread on grok.com is a different one. So is a Cloud Agent that clones a repo and opens a pull request.

[Official overview](https://docs.x.ai/grok-bot/overview) names a Bot as one persistent teammate. You message it. You give it a task, the sources, and a stop. It works on the shared computer and comes back when something needs approval. [Cursor Help](https://cursor.com/help/grok-bot/getting-started) says the same thing in fewer words: agents you keep around, with plugins, a cloud computer, and routines.

## Not Grok. Not Grok 4.x. Not Cursor Cloud Agents

The name is the mess. People search "what is grok bot" and land on a chat window, a model card, or a coding VM.

| Name | What it actually is | Shared box? |
| --- | --- | --- |
| Grok chat | xAI's chat assistant on grok.com and X | No |
| Grok 4.x | A model family | No |
| Cursor Cloud Agents | Isolated coding VMs on a repo | No. Each run is its own VM |
| Grok Bot | Named teammates on desktop and iOS | Yes. One box per account |

Grok chat is a conversation. No named roster. No skills. No routines. No box. If that is the collision you have, stop here and read [/grok-vs-grok-bot](/grok-vs-grok-bot).

Grok 4.x is a model. Cloud Agents can pick it. That does not make the Cloud Agent a Grok Bot.

Cursor Cloud Agents clone a repo, work on a branch, and open a pull request. Same Cursor login. Different product. The longer split is [Grok Bot vs Cursor Cloud Agents](/blog/grok-bot-vs-cursor-cloud-agents).

Press still writes "a computer per Bot." [The launch post](https://x.ai/news/introducing-grok-bot) talks about Bots having a computer of their own. [The forum announcement](https://forum.cursor.com/t/introducing-grok-bot/168053) is clearer: your Bots share one computer, and each gets its own screen. Screens are work surfaces. They are not security walls.

## The shared computer (box / Agent Computer)

Open Agent Computer from a conversation. That is the box. Browser, filesystem, terminal, \`/workspace\`.

What is shared across the roster:

- Browser cookies and signed-in sessions
- Files, including \`/workspace\`
- Command-line credentials
- Plugins. Confirmed today: Gmail, Notion, Slack. Zoom is broken (error 4700)

What is not your laptop: the box is a separate computer. [Official computer docs](https://docs.x.ai/grok-bot/computer-and-apps) say a Bot only runs commands on the Mac or Windows machine in front of you when that capability is enabled and you approve it.

You can leave the preview. Closing the app or the laptop does not stop cloud work. That is architecture, not a reliability SLA. Do not read launch "always-on" copy as an uptime promise.

When a site needs a password, 2FA, or a CAPTCHA, you take over, complete the blocked step, and hand control back. Do not paste secrets into chat.

The sitting is [/setup/the-box](/setup/the-box). If you only remember one fact: a second Bot is not isolation.

## Skills, routines, plugins: the three verbs

Three objects. Do not merge them.

A **skill** is how. A reusable instruction set: sources, sequence, output, approval. You run the job once, then save the method. Type \`/\` in the desktop composer to reference it. Enable it per Bot under Settings → Plugins → Yours. Skills can be used across your Bots. The Bot still needs the login.

A **routine** is when. It tells one Bot to run a skill on a schedule, or on a Slack or GitHub event. Cap: 50 routines per Bot. Combined cap: 50 Bots and group chats. Do not listen to every new message. Background routines can run with the laptop closed.

A **plugin** is a signed-in connector. Settings → Plugins. Account-wide. Confirmed: Gmail, Notion, Slack. Prefer a plugin when one exists. Use the box browser when it does not.

A job stops at a reviewable artifact. Never auto-send, spend, publish, or file. A chief-of-staff Bot that delegates is the official roster pattern. That page is [/jobs/chief-of-staff](/jobs/chief-of-staff).

[Get started](https://docs.x.ai/grok-bot/get-started) wants a first task with an outcome, sources, constraints, a deliverable, and a review point. Attach a file if you want a five-minute result with no login. Then give it one real tool.

## Who can use it

[Plans and billing](https://cursor.com/help/grok-bot/plans) lists three doors. No dollar amounts on that page, so none here.

- Cursor Ultra: included on the same account
- Cursor Teams: a Premium seat. A Standard seat alone does not provide access
- SuperGrok Heavy: the other door

Pro and Pro+ do not include Grok Bot. There is no second Grok Bot subscription. Sign-in is a Cursor account, not grok.com, not an xAI account.

Platforms: macOS, Windows, iOS 18+. No Linux desktop. No Android. No iPad. Legacy Privacy Mode blocks start. [Get started](https://docs.x.ai/grok-bot/get-started) says accounts on Legacy Privacy Mode must move to a supported Cursor data setting before Grok Bot can start.

macOS and iOS share one usage bucket on the signed-in Cursor account. Usage resets weekly. Help does not publish the number, so we do not either.

The click path is [/setup/install-plan](/setup/install-plan).

## What to read next on Boxcrew

1. [/grok-vs-grok-bot](/grok-vs-grok-bot) if the name is still colliding
2. [/setup/install-plan](/setup/install-plan) if the plan gate is next
3. [/setup/the-box](/setup/the-box) if you need the shared computer
4. [/glossary](/glossary) for Bot, skill, routine, box, plugin
5. [/jobs/chief-of-staff](/jobs/chief-of-staff) if you want a small roster, not one mega-Bot

Body explains. Those pages are the paste.

## FAQ

**What is Grok Bot?**
Named, persistent teammates on a Cursor desktop and iOS 18 app. They share one cloud Linux computer. Not Grok chat.

**Is Grok Bot an AI agent?**
Official docs call a Bot a persistent, named agent or one AI teammate. It has a computer, skills, and routines. It is not a one-off chat tab.

**Is Grok Bot the same as Grok?**
No. Grok is the chat assistant. Grok Bot is the Bot product. See [/grok-vs-grok-bot](/grok-vs-grok-bot).

**Who makes Grok Bot?**
You sign in with a Cursor account. Docs live on docs.x.ai. The [launch post](https://x.ai/news/introducing-grok-bot) is on x.ai/news under SpaceXAI branding. Boxcrew is not affiliated with any of them.

**Does each Bot get its own computer?**
No. All Bots on your account share one computer. Each Bot has a screen.

**What plans include it?**
Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not.

**Can I use it on Linux, Android, or iPad?**
No. Desktop is macOS and Windows. Phone is iOS 18+.

## Sources

- [Grok Bot overview](https://docs.x.ai/grok-bot/overview)
- [Get started](https://docs.x.ai/grok-bot/get-started)
- [Introducing Grok Bot](https://x.ai/news/introducing-grok-bot)
- [Getting started with Grok Bot](https://cursor.com/help/grok-bot/getting-started)
- [Introducing Grok Bot (Cursor forum)](https://forum.cursor.com/t/introducing-grok-bot/168053)
- [Use the computer and apps](https://docs.x.ai/grok-bot/computer-and-apps)
- [Plans and billing](https://cursor.com/help/grok-bot/plans)
- [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations)

---

Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
`,
    faq: [
      {
        question: "What is Grok Bot?",
        answer: "Named, persistent teammates on a Cursor desktop and iOS 18 app. They share one cloud Linux computer. Not Grok chat.",
      },
      {
        question: "Is Grok Bot an AI agent?",
        answer: "Official docs call a Bot a persistent, named agent or one AI teammate. It has a computer, skills, and routines. It is not a one-off chat tab.",
      },
      {
        question: "Is Grok Bot the same as Grok?",
        answer: "No. Grok is the chat assistant. Grok Bot is the Bot product. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
      {
        question: "Who makes Grok Bot?",
        answer: "You sign in with a Cursor account. Docs live on docs.x.ai. The [launch post](https://x.ai/news/introducing-grok-bot) is on x.ai/news under SpaceXAI branding. Boxcrew is not affiliated with any of them.",
      },
      {
        question: "Does each Bot get its own computer?",
        answer: "No. All Bots on your account share one computer. Each Bot has a screen.",
      },
      {
        question: "What plans include it?",
        answer: "Cursor Ultra, a Teams Premium seat, or SuperGrok Heavy. Pro and Pro+ do not.",
      },
      {
        question: "Can I use it on Linux, Android, or iPad?",
        answer: "No. Desktop is macOS and Windows. Phone is iOS 18+.",
      },
    ],
  },
  {
    slug: "what-is-the-grok-bot-box",
    title: "What is the Grok Bot computer? (the box / Agent Computer)",
    description: "All your Grok Bots share one persistent cloud Linux computer. xAI says Agent Computer. Cursor Help says the box. It is not Box.com, and it is not one VM per Bot.",
    aeoQuestion: "All your Grok Bots share one persistent cloud Linux computer. xAI says Agent Computer. Cursor Help says the box. It is not Box.com, and it is not one VM per Bot.",
    category: "the-box",
    body: `# What is the Grok Bot computer? (the box / Agent Computer)

Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.

All of your Grok Bots share one persistent cloud Linux computer. xAI calls it the [Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps). Cursor Help calls it [the box](https://cursor.com/help/grok-bot/computer-recovery). Both names are official. It is not Box.com. A search for \`grok bot box\` currently surfaces Box.com MCP, not this Help page. It is not one VM per Bot. Each Bot has its own screen, not its own machine. Sign-in is a Cursor account. This is not Grok chat and not a Cursor Cloud Agent.

## Direct answer: one shared computer, two official names

[Computer docs](https://docs.x.ai/grok-bot/computer-and-apps): every Bot on your account uses the same computer. The computer is assigned to your user, not to an individual Bot. Open **Agent Computer** from a conversation to see the shared desktop.

[Computer recovery](https://cursor.com/help/grok-bot/computer-recovery) is the page that actually says "the box." \`rm -rf\` inside the box does not delete conversation history. Synced box data has a durable copy. Reset rebuilds the box from scratch. Use it last.

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

The query \`grok bot box\` is a SERP mess. Today it hits Box.com MCP (the file-storage company, the connector), not Cursor Help's "the box."

This page is the Grok Bot computer. It is not:

- Box.com
- A Box MCP server
- A Box.com skill
- A per-Bot VM you provision
- Your Mac or Windows PC

If you landed here from a Box MCP result, you are in the right place only if you meant the Grok Bot cloud computer. If you meant Box.com, this is the wrong site.

We will not claim that Cursor Help currently ranks for \`grok bot box\`. It does not, on the research pass that commissioned this slug. That is why the title leads with "computer" and puts "box / Agent Computer" in parentheses.

Slug stays \`what-is-the-grok-bot-box\` so the URL matches the query people type.

## What is shared (cookies, files, CLI creds)

Official list, not ours:

- Browser cookies and signed-in sessions
- Files, including \`/workspace\`
- Command-line credentials
- Installed connectors (Settings → Plugins). Account-wide. Confirmed today: Gmail, Notion, Slack. Zoom is broken (error 4700)

One Bot can continue from work another Bot saved. That is the feature. It is also the blast radius. Do not place a credential or file on this computer if another Bot on the account should not use it.

Conversation history lives outside the box filesystem. [Recovery Help](https://cursor.com/help/grok-bot/computer-recovery): running \`rm -rf\` inside the box does not delete agent conversations. Synced box data rehydrates from a durable copy. Local files on your Mac or Windows machine are not covered.

Login hygiene after you share a session is [/skills/box-login-hygiene](/skills/box-login-hygiene). A second Bot is not isolation.

## Own screen ≠ own machine

Each Bot gets its own screen on the shared computer. Several Bots can use the browser and desktop tools in parallel. One Bot can run only one computer-use task on its screen at a time. Official wording: "The screens are separate work surfaces, not separate security boundaries."

A screen keeps two click-paths from fighting over the same cursor. It does not keep two Bots from reading the same cookie. It does not keep two Bots from opening the same file.

Cursor Cloud Agents are the other computer people mix in. Isolated coding VMs. A fresh VM per run. They do not share this box. The split is [Grok Bot vs Cursor Cloud Agents](/blog/grok-bot-vs-cursor-cloud-agents).

We will not publish CPU or RAM specs. Help does not. We will not write "your own computer" as if the box were the laptop in front of you. The laptop is a different machine. Local execution is opt-in and defaults to Ask every time.

## \`/workspace\` + take over for 2FA

The shared workspace is \`/workspace\`. [Files and results](https://docs.x.ai/grok-bot/files-and-results): Bots can read files other Bots save there. Use project folders and descriptive names. Keep durable project files in \`/workspace\`. Treat temporary directories, manually installed packages, and uncommitted app state as replaceable.

The conversation should still hold the final result, or a clear link to it. A file that only lives in a temp dir is a file you will lose on Update. The handoff paste is [/skills/workspace-handoff](/skills/workspace-handoff).

When a site needs a password, passkey, 2FA, CAPTCHA, payment check, or a human, take over. Open Agent Computer. Complete only the blocked step. Tell the Bot to continue. Do not paste passwords or one-time codes into chat. For a supported connection that presents a secure secret request, enter the value there. It is masked and is not added to the conversation.

You can leave the preview. Closing the app or the laptop does not stop cloud work. That is architecture, not an SLA.

Stuck computer: Update or Recover first. Reset last. Reset returns to the most recent durable snapshot and can discard recent unsaved work. The sitting is [/skills/update-vs-reset](/skills/update-vs-reset).

A job still stops at a reviewable artifact. Never auto-send, spend, publish, or file.

## FAQ

**What is the Grok Bot computer?**
One persistent cloud Linux computer shared by every Bot on your account. xAI: Agent Computer. Cursor Help: the box.

**What is the Grok Bot box?**
The same machine. Help's name. It is not Box.com. The query \`grok bot box\` currently hits Box.com MCP.

**Does each Bot get its own VM?**
No. One computer per member. Each Bot has a screen.

**Is the box my laptop?**
No. The box is a separate cloud computer. Local execution is a different permission.

**What is shared?**
Cookies, files, CLI creds, and account-wide plugins. Conversations live outside the box filesystem.

**Where do I put files two Bots should both see?**
\`/workspace\`, in a named project folder. Say the path in chat.

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
`,
    faq: [
      {
        question: "What is the Grok Bot computer?",
        answer: "One persistent cloud Linux computer shared by every Bot on your account. xAI: Agent Computer. Cursor Help: the box.",
      },
      {
        question: "What is the Grok Bot box?",
        answer: "The same machine. Help's name. It is not Box.com. The query `grok bot box` currently hits Box.com MCP.",
      },
      {
        question: "Does each Bot get its own VM?",
        answer: "No. One computer per member. Each Bot has a screen.",
      },
      {
        question: "Is the box my laptop?",
        answer: "No. The box is a separate cloud computer. Local execution is a different permission.",
      },
      {
        question: "What is shared?",
        answer: "Cookies, files, CLI creds, and account-wide plugins. Conversations live outside the box filesystem.",
      },
      {
        question: "Where do I put files two Bots should both see?",
        answer: "`/workspace`, in a named project folder. Say the path in chat.",
      },
      {
        question: "Is this Grok chat?",
        answer: "No. Grok is the chat assistant. See [/grok-vs-grok-bot](/grok-vs-grok-bot).",
      },
    ],
  },
] as const;

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(
  category: BlogPost["category"]
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}
