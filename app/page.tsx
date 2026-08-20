import type { Metadata } from "next";
import { Suspense } from "react";
import { HomeContent } from "@/components/home-content";
import { Layout } from "@/components";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Grok Bot",
  description:
    "Grok Bot setups you paste. Named desktop and iOS teammates that share one box.",
  path: "/",
});

function HomeFallback() {
  return (
    <Layout variant="home">
      <div className="h-12 border-b border-border" />
    </Layout>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<HomeFallback />}>
      <HomeContent />
    </Suspense>
  );
}
