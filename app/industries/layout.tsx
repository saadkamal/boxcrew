import { Layout, Sidebar } from "@/components";
import { industries } from "@/content";

const sidebarItems = industries.map((i) => ({
  slug: i.slug,
  title: i.title,
}));

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex gap-12">
        <Sidebar basePath="/industries" items={sidebarItems} title="Industries" />
        <div className="flex-1 min-w-0 max-w-3xl">{children}</div>
      </div>
    </Layout>
  );
}
