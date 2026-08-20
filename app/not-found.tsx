import Link from "next/link";
import { Layout } from "@/components";

export default function NotFound() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
        <span className="text-label mb-4">404</span>
        <h1 className="text-headline mb-4">Page not found</h1>
        <p className="text-body text-foreground-muted mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 text-small text-foreground border border-border rounded-lg hover:border-foreground-subtle transition-colors"
        >
          Return home
        </Link>
      </div>
    </Layout>
  );
}
