import Link from "next/link";

interface CardProps {
  href: string;
  title: string;
  description: string;
  badge?: string;
  minimal?: boolean;
}

export function Card({ href, title, description, badge, minimal = false }: CardProps) {
  if (minimal) {
    return (
      <Link
        href={href}
        className="group block py-4 border-b border-border last:border-b-0 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-small font-medium text-foreground group-hover:text-accent transition-colors truncate">
              {title}
            </h3>
            <p className="mt-0.5 text-caption text-foreground-subtle line-clamp-1">
              {description}
            </p>
          </div>
          {badge && (
            <span className="text-label flex-shrink-0">{badge}</span>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block p-5 border border-border rounded-lg hover:border-foreground-subtle transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-small font-medium text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
        {badge && (
          <span className="text-label flex-shrink-0">{badge}</span>
        )}
      </div>
      <p className="mt-2 text-caption text-foreground-subtle line-clamp-2">
        {description}
      </p>
    </Link>
  );
}

interface CardGridProps {
  children: React.ReactNode;
  cols?: 2 | 3 | 4;
}

export function CardGrid({ children, cols = 3 }: CardGridProps) {
  const colsClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  }[cols];
  
  return (
    <div className={`grid gap-4 ${colsClass}`}>
      {children}
    </div>
  );
}

interface FeaturedCardProps {
  href: string;
  title: string;
  description: string;
  label?: string;
}

export function FeaturedCard({ href, title, description, label }: FeaturedCardProps) {
  return (
    <Link
      href={href}
      className="group block p-6 border border-border rounded-xl hover:border-foreground-subtle transition-colors"
    >
      {label && (
        <span className="text-label mb-3 block">{label}</span>
      )}
      <h3 className="text-title text-foreground group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-small text-foreground-muted line-clamp-2">
        {description}
      </p>
    </Link>
  );
}
