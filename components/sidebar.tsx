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
    <aside className="w-52 flex-shrink-0 hidden lg:block">
      <div className="sticky top-16">
        <h2 className="text-label mb-4">{title}</h2>
        <nav className="space-y-0.5">
          {items.map((item) => {
            const href = `${basePath}/${item.slug}`;
            const isActive = pathname === href;
            return (
              <Link
                key={item.slug}
                href={href}
                className={`block px-3 py-2 text-small rounded-md transition-colors ${
                  isActive
                    ? "text-accent bg-surface"
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

interface TableOfContentsProps {
  items: readonly { id: string; label: string }[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  return (
    <aside className="w-44 flex-shrink-0 hidden xl:block">
      <div className="sticky top-16">
        <h2 className="text-label mb-4">On this page</h2>
        <nav className="space-y-0.5">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block py-1.5 text-caption text-foreground-subtle hover:text-foreground-muted transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
