import { Layout, Sidebar } from "@/components";
import { setupGuides } from "@/content";

const sidebarItems = setupGuides.map((g) => ({
  slug: g.slug,
  title: g.title,
}));

export default function SetupLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex gap-8">
        <Sidebar basePath="/setup" items={sidebarItems} title="Setup Guides" />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </Layout>
  );
}
