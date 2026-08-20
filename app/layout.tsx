import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  ...buildMetadata({
    title: "Grok Bot",
    description:
      "Grok Bot setups you paste. Named desktop and iOS teammates that share one box.",
    path: "/",
  }),
  title: {
    default: "Grok Bot",
    template: `%s · ${SITE_NAME}`,
  },
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex min-h-screen flex-col">{children}</body>
    </html>
  );
}
