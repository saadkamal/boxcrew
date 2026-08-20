import { Layout, Sidebar } from "@/components";
import { jobs } from "@/content";

const sidebarItems = jobs.map((j) => ({
  slug: j.slug,
  title: j.title,
}));

export default function JobsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className="flex gap-8">
        <Sidebar basePath="/jobs" items={sidebarItems} title="Jobs" />
        <div className="flex-1 min-w-0">{children}</div>
      </div>
    </Layout>
  );
}
