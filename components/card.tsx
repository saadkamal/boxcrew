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
      className="group flex items-center justify-between py-3 border-b border-border last:border-b-0"
    >
      <div className="flex items-center gap-4 min-w-0">
        {badge && (
          <span className="text-[10px] font-medium tracking-[0.1em] text-foreground-subtle w-14 flex-shrink-0 uppercase">
            {badge}
          </span>
        )}
        <span className="text-[14px] text-foreground-muted group-hover:text-foreground truncate transition-colors">
          {title}
        </span>
      </div>
    </Link>
  );
}
