/**
 * Loads Jules posts from content/blog/*.md at build time.
 */
import fs from "node:fs"
import path from "node:path"

export interface BlogPost {
  readonly slug: string
  readonly title: string
  readonly description: string
  readonly aeoQuestion: string
  readonly category: "compare" | "setup" | "skills" | "the-box"
  readonly stickyLine?: string
  readonly body?: string
  readonly catalogLinks?: readonly string[]
  readonly faq?: readonly { question: string; answer: string }[]
}

export const BLOG_CATEGORIES = {
  compare: "Compare",
  setup: "Setup & plans",
  skills: "Skills",
  "the-box": "The box",
} as const

const CATEGORY_BY_SLUG: Record<string, BlogPost["category"]> = {
  "grok-bot-vs-grok": "compare",
  "grok-bot-vs-cursor-cloud-agents": "compare",
  "grok-bot-vs-openclaw": "compare",
  "grok-bot-vs-hermes": "compare",
  "what-is-grok-bot": "compare",
  "grok-bot-setup": "setup",
  "does-cursor-ultra-include-grok-bot": "setup",
  "grok-bot-plans": "setup",
  "grok-bot-ios": "setup",
  "grok-bot-skills": "skills",
  "grok-bot-skills-vs-cursor-skills": "skills",
  "grok-bot-teach-a-task": "skills",
  "grok-bot-mcp": "skills",
  "grok-bot-plugins": "skills",
  "grok-bot-approvals": "skills",
  "grok-bot-routines": "skills",
  "grok-bot-group-chat": "skills",
  "what-is-the-grok-bot-box": "the-box",
  "grok-bot-update-vs-reset": "the-box",
  "grok-bot-shared-computer": "the-box",
}

const STICKY =
  "Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box."

function parseMarkdown(filePath: string): BlogPost {
  const raw = fs.readFileSync(filePath, "utf8")
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)/)
  if (!match) {
    throw new Error(`missing frontmatter: ${filePath}`)
  }
  const meta: Record<string, string> = {}
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":")
    if (i === -1) continue
    meta[line.slice(0, i).trim()] = line.slice(i + 1).trim()
  }
  const body = match[2].replace(/^\n/, "")
  const slug = meta.slug ?? path.basename(filePath, ".md")
  const faq: { question: string; answer: string }[] = []
  const faqBlock = body.match(/^## FAQ\n([\s\S]*?)(?=\n## |\s*$)/m)
  if (faqBlock) {
    const pairs = [
      ...faqBlock[1].matchAll(/\*\*(.+?)\*\*\n([\s\S]*?)(?=\n\*\*|\s*$)/g),
    ]
    for (const pair of pairs) {
      faq.push({
        question: pair[1].trim(),
        answer: pair[2].replace(/\s+/g, " ").trim(),
      })
    }
  }
  const catalogLinks = [
    ...new Set(
      [...body.matchAll(/\]\((\/[^)]+)\)/g)].map((m) => m[1]),
    ),
  ]
  return {
    slug,
    title: meta.title ?? slug,
    description: meta.description ?? "",
    aeoQuestion: faq[0]?.question ?? meta.title ?? slug,
    category: CATEGORY_BY_SLUG[slug] ?? "compare",
    stickyLine: STICKY,
    body,
    catalogLinks,
    faq,
  }
}

const dir = path.join(process.cwd(), "content/blog")
export const blogPosts: readonly BlogPost[] = fs
  .readdirSync(dir)
  .filter((name) => name.endsWith(".md") && name !== "_WRITING.md")
  .map((name) => parseMarkdown(path.join(dir, name)))
  .sort((a, b) => a.slug.localeCompare(b.slug))

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getBlogPostsByCategory(
  category: BlogPost["category"],
): BlogPost[] {
  return blogPosts.filter((post) => post.category === category)
}
