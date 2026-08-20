"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

interface MarkdownProps {
  children: string;
  stickyLine?: string;
}

const COMMON_STICKY =
  "Not Grok chat. Not Cursor Cloud Agents. Desktop + iOS teammates that share one box.";

function stripDuplicates(body: string, stickyLine?: string): string {
  const lines = body.split("\n");
  let startIndex = 0;

  while (startIndex < lines.length && lines[startIndex].trim() === "") {
    startIndex++;
  }

  if (startIndex < lines.length && lines[startIndex].trim().startsWith("# ")) {
    startIndex++;
  }

  while (startIndex < lines.length && lines[startIndex].trim() === "") {
    startIndex++;
  }

  if (startIndex < lines.length) {
    const nextLine = lines[startIndex].trim();
    const normalized = normalizeText(nextLine);

    if (
      normalized === normalizeText(COMMON_STICKY) ||
      (stickyLine && normalized === normalizeText(stickyLine))
    ) {
      startIndex++;
    }
  }

  while (startIndex < lines.length && lines[startIndex].trim() === "") {
    startIndex++;
  }

  return lines.slice(startIndex).join("\n");
}

function normalizeText(text: string): string {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

type AnchorProps = ComponentPropsWithoutRef<"a">;

function CustomLink({ href, children, ...props }: AnchorProps): ReactNode {
  if (!href) {
    return <a {...props}>{children}</a>;
  }

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    );
  }

  if (href.startsWith("http://") || href.startsWith("https://")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}

export function Markdown({ children, stickyLine }: MarkdownProps) {
  const content = stripDuplicates(children, stickyLine);

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: CustomLink,
        h1: ({ children }) => <h2 className="mt-8 mb-4 text-xl font-semibold">{children}</h2>,
        h2: ({ children }) => <h2 className="mt-8 mb-4 text-xl font-semibold">{children}</h2>,
        h3: ({ children }) => <h3 className="mt-6 mb-3 text-lg font-semibold">{children}</h3>,
        h4: ({ children }) => <h4 className="mt-4 mb-2 font-semibold">{children}</h4>,
        p: ({ children }) => <p className="mb-4 leading-7">{children}</p>,
        ul: ({ children }) => <ul className="mb-4 ml-6 list-disc space-y-1">{children}</ul>,
        ol: ({ children }) => <ol className="mb-4 ml-6 list-decimal space-y-1">{children}</ol>,
        li: ({ children }) => <li className="leading-7">{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className="mb-4 border-l-4 border-muted pl-4 italic">
            {children}
          </blockquote>
        ),
        code: ({ children, className }) => {
          const isInline = !className;
          if (isInline) {
            return (
              <code className="rounded bg-muted/30 px-1.5 py-0.5 text-sm font-mono">
                {children}
              </code>
            );
          }
          return (
            <code className="block overflow-x-auto rounded bg-muted/30 p-4 text-sm font-mono mb-4">
              {children}
            </code>
          );
        },
        pre: ({ children }) => <pre className="mb-4">{children}</pre>,
        table: ({ children }) => (
          <div className="mb-4 overflow-x-auto">
            <table className="w-full border-collapse text-sm">{children}</table>
          </div>
        ),
        thead: ({ children }) => <thead className="border-b border-muted">{children}</thead>,
        tbody: ({ children }) => <tbody>{children}</tbody>,
        tr: ({ children }) => <tr className="border-b border-muted/50">{children}</tr>,
        th: ({ children }) => (
          <th className="px-3 py-2 text-left font-semibold">{children}</th>
        ),
        td: ({ children }) => <td className="px-3 py-2">{children}</td>,
        hr: () => <hr className="my-8 border-muted" />,
        strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
