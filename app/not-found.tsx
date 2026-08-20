import Link from "next/link";
import { Layout } from "@/components";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <span className="text-[10px] font-medium tracking-[0.12em] text-foreground-subtle uppercase mb-4">
          404
        </span>
        <h1 className="mb-4">Page not found</h1>
        <p className="text-[15px] leading-[24px] text-foreground-muted mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="text-[14px] text-foreground-muted hover:text-foreground transition-colors"
        >
          Return home
        </Link>
      </div>
    </Layout>
  );
}
