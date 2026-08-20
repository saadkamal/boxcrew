"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <aside className="w-48 flex-shrink-0 hidden lg:block">
      <div className="sticky top-16">
        <h2 className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase mb-4">
          {title}
        </h2>
        <nav className="space-y-0.5">
          {items.map((item) => {
            const href = `${basePath}/${item.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.slug}
                href={href}
                className={`block py-1.5 text-[13px] transition-colors ${
                  isActive
                    ? "text-accent"
                    : "text-foreground-subtle hover:text-foreground-muted"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
