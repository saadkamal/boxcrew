"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface SidebarItem {
  slug: string;
  title: string;
}

interface SidebarProps {
  basePath: string;
  items: readonly SidebarItem[];
  title: string;
}

export function Sidebar({ basePath, items, title }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-56 flex-shrink-0">
      <h2 className="font-semibold text-sm text-muted uppercase tracking-wide mb-3">
        {title}
      </h2>
      <nav className="space-y-1">
        {items.map((item) => {
          const href = `${basePath}/${item.slug}`;
          const isActive = pathname === href;
          return (
            <Link
              key={item.slug}
              href={href}
              className={cn(
                "block px-3 py-2 text-sm rounded transition-colors hover:no-underline",
                isActive
                  ? "bg-card text-accent border border-accent"
                  : "text-muted hover:text-foreground hover:bg-card"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
