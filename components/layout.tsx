import Link from "next/link";
import { Navigation } from "./navigation";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
  fullBleed?: boolean;
}

export function Layout({ children, fullBleed = false }: LayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-[0.9375rem] font-medium text-foreground tracking-tight hover:text-foreground"
          >
            Boxcrew
          </Link>
          <Navigation />
        </div>
      </header>
      <main className={fullBleed ? "" : "max-w-6xl mx-auto px-6 py-12 w-full"}>
        {children}
      </main>
      <Footer />
    </>
  );
}

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link 
            href="/" 
            className="text-[0.9375rem] font-medium text-foreground tracking-tight hover:text-foreground"
          >
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
