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
  { label: "Guide", title: "Install Plan", href: "/setup/install-plan" },
  { label: "Job", title: "Sales Outbound", href: "/jobs/sales-outbound" },
  { label: "Skill", title: "Account Health Watch", href: "/skills/account-health-watch" },
  { label: "Industry", title: "B2B SaaS", href: "/industries/b2b-saas" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0B0B0C' }}>
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#0B0B0C', borderBottom: '1px solid #2A2A2E' }}>
        <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-medium tracking-[-0.01em]" style={{ color: '#F2F0EA' }}>
            Boxcrew
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/setup/install-plan" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">Guides</Link>
            <Link href="/skills/account-health-watch" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">Skills</Link>
            <Link href="/jobs/sales-outbound" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">Jobs</Link>
            <Link href="/industries/b2b-saas" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">Industries</Link>
            <Link href="/blog" className="text-[13px] text-foreground-subtle hover:text-foreground-muted">Blog</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-11">
        <div className="w-full max-w-[540px] mx-auto">
          <p className="text-[40px] leading-[48px] font-medium tracking-[-0.02em] text-center mb-12" style={{ color: '#F2F0EA' }}>
            Grok Bot use-case directory
          </p>

          <Search 
            items={searchItems} 
            placeholder="Search guides, skills, jobs..." 
            heroMode 
          />

          <div className="mt-16" style={{ borderTop: '1px solid #2A2A2E' }}>
            {featuredItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center justify-between py-3 group"
                style={{ borderBottom: i < featuredItems.length - 1 ? '1px solid #2A2A2E' : 'none' }}
              >
                <span className="text-[10px] font-medium tracking-[0.1em] uppercase text-foreground-subtle w-14">
                  {item.label}
                </span>
                <span className="text-[14px] text-foreground-muted group-hover:text-foreground transition-colors">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-[11px] text-foreground-subtle text-center">
            Ultra · Teams Premium · SuperGrok Heavy
          </p>
        </div>
      </main>

      <div style={{ borderTop: '1px solid #2A2A2E', backgroundColor: '#0B0B0C' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-3 text-center">
          <p className="text-[11px] text-foreground-subtle">
            Not Grok chat. Not Cursor Cloud Agents.
          </p>
        </div>
      </div>

      <footer style={{ borderTop: '1px solid #2A2A2E' }}>
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex items-center justify-between">
          <p className="text-[11px] text-foreground-subtle">
            Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/grok-vs-grok-bot" className="text-[11px] text-foreground-subtle hover:text-foreground-muted">
              Grok vs Grok Bot
            </Link>
            <Link href="/glossary" className="text-[11px] text-foreground-subtle hover:text-foreground-muted">
              Glossary
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
