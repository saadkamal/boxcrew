import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  description: string;
  badge?: string;
}

export function Card({ href, title, description, badge }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-4 bg-card border border-border rounded-lg hover:border-accent transition-colors hover:no-underline group"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        {badge && (
          <span className="text-xs px-2 py-0.5 bg-border rounded text-muted">
            {badge}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-muted line-clamp-2">{description}</p>
    </Link>
  );
}

interface CardGridProps {
  children: React.ReactNode;
}

export function CardGrid({ children }: CardGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}
