"use client";

import { useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import { StickyDisambiguation } from "./sticky-disambiguation";
import { CommandPalette } from "./command-palette";

interface LayoutProps {
  children: React.ReactNode;
  hideDisambiguation?: boolean;
}

export function Layout({ children, hideDisambiguation }: LayoutProps) {
  const [paletteOpen, setPaletteOpen] = useState(false);

  return (
    <>
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <Header onOpenPalette={() => setPaletteOpen(true)} />
      {!hideDisambiguation && <StickyDisambiguation />}

      <main
        id="content"
        className="flex-1"
        style={{
          maxWidth: "var(--page-max)",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "var(--gutter)",
          paddingRight: "var(--gutter)",
          paddingTop: "var(--space-8)",
          paddingBottom: "var(--space-16)",
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
