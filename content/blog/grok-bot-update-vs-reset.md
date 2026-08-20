---
title: Update vs Reset the Grok Bot computer
slug: grok-bot-update-vs-reset
description: Update and Recover keep durable state on the Grok Bot computer. Reset drops unsynced work. Do not Reset first.
---

# Update vs Reset the Grok Bot computer

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

Conversation history is stored outside the box. Running `rm -rf` inside the sandbox does not delete the thread. Synced box data has a durable server copy. Local files on your Mac or Windows machine are not in that copy. Keep your own backups for anything that never left the laptop.

## When Update/Recover

Use Recover when the computer is unreachable and the error state offers **Recover computer** or **Recover Agent Computer**. That is the dedicated control. It replaces the unreachable machine and keeps durable state when the action is shown.

Use Update when setup is stuck on "Starting your computer" or "Updating your computer," or when Recover is not offered. [Update Agent Computer](https://docs.x.ai/grok-bot/computer-and-apps) rebuilds with the latest image and is written to preserve durable state. Wait. Image updates take minutes. If progress is still changing, leave it. If it fails or freezes, retry from the error, restart the app, then Update.

Do the cheap steps first, even if you already know you want Update:

1. Update the desktop app. Many recovery failures are a stale client. Settings → Beta → Check for Updates, then Restart to Update.
2. Fully quit Grok Bot. Closing the window is not quitting.
3. Reopen the agent and use the computer controls to reopen the box.
4. Give rehydration time. Help says it can take a while. Repeated Reset or force-quit can interrupt a recover and drop an unsynced thread.

Wait for active work to finish before you recover, when you can. Cloud work can continue with the laptop closed. That is not permission to yank the image mid-write.

Copy the sitting onto a named Bot with [Update versus Reset](/skills/update-vs-reset) if you want the rule in the roster: try Update, then Recover, list unsynced work in `/workspace`, do not Reset first.

## When Reset is actually right

Reset is right when Recover failed, Update failed, and you have already listed what is not synced. It is a last resort, not a vibe.

It is not right because the Bot looks stuck. A stuck Bot is often waiting on a page, an approval, a login, a CAPTCHA, or a secret request. Open the computer. Look. Send "Stop now" if the work should end. That is [troubleshooting](https://docs.x.ai/grok-bot/troubleshooting), not Reset.

It is not right because a website asked for login again. Take over, sign in, finish 2FA, hand control back. Sessions expire. That is normal.

It is not right because you ran `rm -rf` inside the box and panicked. Reopen the box first. Help says the durable copy usually comes back. If the box is still empty after reopen, stop making changes and contact support with your account email and what you were doing. Do not Reset as a way to "try again."

It is not right as a hygiene habit. Signing out of a site, removing a file from `/workspace`, or deleting a connector is how you revoke access. Reset is how you gamble unsynced work.

Mobile apps cannot reset a computer. If you are on iOS, you are not looking at the control anyway.

## What you will lose

Reset keeps what already made it into the durable snapshot. It can drop what did not.

Treat as replaceable unless you copied it into `/workspace` or attached it to the conversation:

- Temporary directories
- Manually installed packages
- Uncommitted application state
- A file you just wrote and never synced
- An unsynced thread you force-quit mid-recover

Treat as usually kept across Update and Recover:

- Durable project files in `/workspace`
- Browser state and supported sign-ins (they are designed to survive normal updates and recovery)
- Conversation history (stored outside the box)
- Synced sandbox files on the server copy

Treat as never covered by box recovery:

- Files that live only on your Mac or Windows machine
- Anything you never put on the shared computer

Help's recover table is three rows. Agent conversation history: yes. Sandbox files synced to the durable store: yes, rehydrated on reopen or reset. Local files on your Mac or Windows machine: no.

If the box is empty after reopen and you keep typing into it, you can overwrite the thing support would have rehydrated. Stop. Name the control you are on. Ask a human if you cannot tell Update from Reset.

Put important results in `/workspace` before you are in this sitting. [Workspace handoff](/skills/workspace-handoff) is the habit: a folder named for the job, a path in the review list, no second machine.

## Login hygiene after a recover

A recover that keeps logins is not a promise that every site still likes the session. Team docs note that sign-in sessions inside the computer can drop when the computer is recreated or its network address changes. Plan for a takeover, not a Reset.

After Update or Recover:

1. Open the box. Confirm `/workspace` is the folder you expect.
2. Open the site you actually need. If it asks, take over. Finish the password, passkey, 2FA, or CAPTCHA yourself. Do not paste the code into chat.
3. Write down which login is on the box. Put the note in `/workspace`. [Box login hygiene](/skills/box-login-hygiene) is the paste for that.
4. Remember the session is shared. Signing in for one Bot makes the cookie available to the rest of the roster. A second Bot is not a new login.
5. If a login should no longer be there, sign out of the site. Do not Reset the computer to clear a cookie.

Plugins are account-wide. Re-auth a connector from Settings → Plugins if the source service revoked it. Do not treat Recover as a plugin reset.

If you are about to Reset and you have an unsynced file, copy it into `/workspace` or attach it to the conversation first. Then Reset, if you still must. Then expect to sign in again.

Open [the box](/setup/the-box) once on a calm day so the first time you see Recover is not the first time you see the computer.

## FAQ

**Should I Reset a stuck Grok Bot computer?**
No. Retry, restart the app, Recover if offered, then Update. Reset last.

**Does Update delete my files?**
Update is written to preserve durable state. Put important work in `/workspace` anyway. Temporary directories and unsynced files are replaceable.

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
