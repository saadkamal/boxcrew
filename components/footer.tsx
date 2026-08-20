import Link from "next/link";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #2A2A2E" }}>
      <div className="max-w-[1080px] mx-auto px-6 py-6 flex items-center justify-between">
        <p className="text-[11px]" style={{ color: "#6E6A62" }}>
          Boxcrew is not affiliated with Cursor, xAI, or SpaceXAI.
        </p>
        <Link href="/glossary" className="text-[11px]" style={{ color: "#6E6A62" }}>
          Glossary
        </Link>
      </div>
    </footer>
  );
}
