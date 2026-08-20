/**
 * Site constants.
 */

export const SITE_NAME = "Boxcrew";
export const SITE_URL = "https://boxcrew.com";

export const OFFICIAL_DOCS = {
  grokBot: "https://docs.x.ai/grok-bot/overview",
  plans: "https://cursor.com/help/grok-bot/plans",
  onboarding: "https://cursor.com/bot/onboarding",
} as const;

export function titleTemplate(title: string): string {
  return `${title} · ${SITE_NAME}`;
}

export const JULES_DEFINITION = `Grok Bot is a Cursor desktop and iOS 18 app for named teammates. Each named Bot has a job, skills, and routines. They share one cloud Linux computer called the box: browser, files, terminal. Plugins and MCP are structured tools. A routine fires on a schedule or an event. A skill is the how. You review send, spend, and delete. Not Grok chat. Not Cursor Cloud Agents. Sign in with a Cursor account on Ultra, Teams Premium, or SuperGrok Heavy.`;

export const PLAN_GATES = ["Ultra", "Teams Premium", "SuperGrok Heavy"] as const;

export const DISAMBIGUATION_TEXT = "Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.";
