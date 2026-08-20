import { Layout, Sidebar } from "@/components";
import { skills } from "@/content";

const sidebarItems = skills.map((s) => ({
  slug: s.slug,
  title: s.title,
}));

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex gap-8">
        <Sidebar basePath="/skills" items={sidebarItems} title="Skills" />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </Layout>
  );
}
