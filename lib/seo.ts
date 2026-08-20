import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";
import type { SetupGuide, Skill, Job, Industry } from "@/content/types";

export interface JsonLd {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}

export function withGrokBot(title: string): string {
  return title.includes("Grok Bot") ? title : `${title} · Grok Bot`;
}

export function withGrokBotDescription(description: string): string {
  return description.includes("Grok Bot")
    ? description
    : `${description} Grok Bot.`;
}

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const title = withGrokBot(opts.title);
  const description = withGrokBotDescription(opts.description);
  const url = opts.path === "/" ? SITE_URL : `${SITE_URL}${opts.path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} · ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Boxcrew · Grok Bot",
        },
      ],
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description:
      "Grok Bot setups you paste. Named desktop and iOS teammates that share one box.",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function itemListJsonLd(
  name: string,
  items: Array<{ title: string; href: string }>
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.title,
      url: `${SITE_URL}${item.href}`,
    })),
  };
}

export function howToJsonLd(guide: SetupGuide): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `${guide.title} · Grok Bot Setup`,
    description: guide.description,
    step: guide.steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      text: step,
    })),
  };
}

export function articleJsonLd(
  title: string,
  description: string,
  slug: string
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${slug}`,
    },
  };
}

export function skillArticleJsonLd(skill: Skill): JsonLd {
  return articleJsonLd(
    `${skill.title} · Grok Bot Skill`,
    skill.description,
    `/skills/${skill.slug}`
  );
}

export function jobArticleJsonLd(job: Job): JsonLd {
  return articleJsonLd(
    `${job.title} · Grok Bot Job`,
    job.description,
    `/jobs/${job.slug}`
  );
}

export function industryItemListJsonLd(
  industry: Industry,
  jobTitles: string[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Grok Bot Jobs for ${industry.title}`,
    description: industry.description,
    itemListElement: industry.jobSlugs.map((slug, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: jobTitles[index] || slug,
      url: `${SITE_URL}/jobs/${slug}`,
    })),
  };
}

export function glossaryItemListJsonLd(
  terms: readonly { heading: string; content: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Grok Bot Glossary",
    description: "Key terms and concepts for Grok Bot users.",
    itemListElement: terms.map((term, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: term.heading,
      description: term.content,
    })),
  };
}

export function blogPostJsonLd(
  title: string,
  description: string,
  slug: string,
  hasFaq: boolean,
  faqItems?: Array<{ question: string; answer: string }>
): JsonLd[] {
  const article: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };

  if (hasFaq && faqItems && faqItems.length > 0) {
    const faq: JsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    return [article, faq];
  }

  return [article];
}

export function collisionTableJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Grok chat, Grok Bot, Cursor Cloud Agents",
    description:
      "Grok chat, Grok Bot, and Cursor Cloud Agents are three different products.",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Grok chat",
        description: "xAI chat assistant on grok.com and X. No shared box.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Grok Bot",
        description:
          "Named desktop and iOS teammates that share one cloud Linux computer.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Cursor Cloud Agents",
        description:
          "Isolated coding VMs that clone a repo and open a pull request.",
      },
    ],
  };
}
