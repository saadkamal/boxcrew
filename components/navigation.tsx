"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/setup/install-plan", label: "Setup", matchPrefix: "/setup" },
  { href: "/skills/account-health-watch", label: "Skills", matchPrefix: "/skills" },
  { href: "/jobs/sales-outbound", label: "Jobs", matchPrefix: "/jobs" },
  { href: "/industries/b2b-saas", label: "Industries", matchPrefix: "/industries" },
  { href: "/blog", label: "Blog", matchPrefix: "/blog" },
] as const;

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-6">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.matchPrefix);
        return (
          <Link
            key={item.href}
            href={item.href}
            className="text-[13px] transition-colors"
            style={{ color: isActive ? "#A8A49A" : "#6E6A62" }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
