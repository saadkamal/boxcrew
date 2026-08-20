import Link from "next/link";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-medium text-foreground tracking-[-0.01em]">
            Boxcrew
          </Link>
          <Navigation />
        </div>
      </header>
      <main className="max-w-[1200px] mx-auto px-6 py-12 w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}

export function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/95 backdrop-blur-sm">
        <div className="max-w-[1200px] mx-auto px-6 h-11 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-medium text-foreground tracking-[-0.01em]">
            Boxcrew
          </Link>
          <Navigation />
        </div>
      </header>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}
