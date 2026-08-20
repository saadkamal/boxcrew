"use client";

import { useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { StickyDisambiguation } from "./sticky-disambiguation";
import { CommandPalette } from "./command-palette";

interface LayoutProps {
  children: React.ReactNode;
  variant?: "home" | "page";
}

export function Layout({ children, variant = "page" }: LayoutProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const isHome = variant === "home";

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <Header onOpenPalette={() => setPaletteOpen(true)} />
      <StickyDisambiguation />

      <main
        id="content"
        className="flex-1"
        style={{
          maxWidth: isHome ? "var(--home-max)" : "var(--page-max)",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
          paddingTop: isHome ? "var(--home-inset)" : "var(--space-64)",
          paddingBottom: "var(--space-64)",
          width: "100%",
        }}
      >
        {children}
      </main>

      <Footer />

      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </>
  );
}
