import Link from "next/link";

const navItems = [
  { href: "/setup/install-plan", label: "Setup" },
  { href: "/skills/account-health-watch", label: "Skills" },
  { href: "/jobs/sales-outbound", label: "Jobs" },
  { href: "/industries/b2b-saas", label: "Industries" },
  { href: "/glossary", label: "Glossary" },
] as const;

export function Navigation() {
  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
