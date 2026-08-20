import Link from "next/link";
import { Layout } from "@/components";

export default function NotFound() {
  return (
    <Layout>
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-muted mb-6">Page not found.</p>
        <Link
          href="/"
          className="inline-block px-4 py-2 bg-accent text-background rounded hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}
