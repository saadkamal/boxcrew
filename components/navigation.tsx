"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/setup/install-plan", label: "Guides" },
  { href: "/skills/account-health-watch", label: "Skills" },
  { href: "/jobs/sales-outbound", label: "Jobs" },
  { href: "/industries/b2b-saas", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/glossary", label: "Glossary" },
] as const;

export function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith("/setup")) return pathname.startsWith("/setup");
    if (href.startsWith("/skills")) return pathname.startsWith("/skills");
    if (href.startsWith("/jobs")) return pathname.startsWith("/jobs");
    if (href.startsWith("/industries")) return pathname.startsWith("/industries");
    return pathname === href;
  };

  return (
    <nav className="flex items-center gap-1">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-1.5 text-[0.8125rem] rounded-md transition-colors ${
            isActive(item.href)
              ? "text-foreground"
              : "text-foreground-subtle hover:text-foreground-muted"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
