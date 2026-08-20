import Link from "next/link";
import { Search } from "@/components";
import { setupGuides, skills, jobs, industries } from "@/content";

const searchItems = [
  ...setupGuides.map((g) => ({
    title: g.title,
    description: g.description,
    href: `/setup/${g.slug}`,
    kind: g.kind,
  })),
  ...skills.map((s) => ({
    title: s.title,
    description: s.description,
    href: `/skills/${s.slug}`,
    kind: s.kind,
  })),
  ...jobs.map((j) => ({
    title: j.title,
    description: j.description,
    href: `/jobs/${j.slug}`,
    kind: j.kind,
  })),
  ...industries.map((i) => ({
    title: i.title,
    description: i.description,
    href: `/industries/${i.slug}`,
    kind: i.kind,
  })),
] as const;

const featuredItems = [
  { label: "Start here", title: "Install Plan", href: "/setup/install-plan" },
  { label: "Popular", title: "Sales Outbound", href: "/jobs/sales-outbound" },
  { label: "Skill", title: "Account Health Watch", href: "/skills/account-health-watch" },
  { label: "Industry", title: "B2B SaaS", href: "/industries/b2b-saas" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-medium text-foreground tracking-[-0.01em]">
            Boxcrew
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/setup/install-plan" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">
              Guides
            </Link>
            <Link href="/skills/account-health-watch" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">
              Skills
            </Link>
            <Link href="/jobs/sales-outbound" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">
              Jobs
            </Link>
            <Link href="/industries/b2b-saas" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">
              Industries
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-11">
        <div className="w-full max-w-[600px] mx-auto">
          <h1 className="text-[clamp(48px,10vw,72px)] font-medium text-foreground tracking-[-0.04em] leading-[1] text-center">
            Boxcrew
          </h1>
          <p className="mt-4 text-[clamp(18px,3vw,20px)] leading-[1.4] text-foreground-muted text-center tracking-[-0.01em]">
            Grok Bot use-case directory
          </p>

          <div className="mt-12">
            <Search 
              items={searchItems} 
              placeholder="Search guides, skills, jobs..." 
              heroMode 
            />
          </div>

          <div className="mt-16 border-t border-border">
            {featuredItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between py-4 group ${
                  i < featuredItems.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-foreground-subtle">
                  {item.label}
                </span>
                <span className="text-[15px] text-foreground-muted group-hover:text-foreground transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-[12px] text-foreground-subtle tracking-[0.02em]">
              Ultra · Teams Premium · SuperGrok Heavy
            </p>
          </div>
        </div>
      </main>

      <div className="border-t border-border/50 bg-background">
        <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center justify-center">
          <p className="text-[12px] text-foreground-subtle">
            Not Grok chat. Not Cursor Cloud Agents.
          </p>
        </div>
      </div>

      <footer className="border-t border-border/50">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-[12px] text-foreground-subtle">
            Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/grok-vs-grok-bot" className="text-[12px] text-foreground-subtle hover:text-foreground-muted">
              Grok vs Grok Bot
            </Link>
            <Link href="/glossary" className="text-[12px] text-foreground-subtle hover:text-foreground-muted">
              Glossary
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
