import { SITE_NAME, SITE_URL } from "@/lib/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleJsonLdProps {
  headline: string;
  description: string;
  url: string;
}

interface BlogJsonLdProps {
  headline: string;
  description: string;
  url: string;
  faq?: readonly FAQItem[];
}

function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

export function ArticleJsonLd({ headline, description, url }: ArticleJsonLdProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  );
}

export function FAQPageJsonLd({ faq }: { faq?: readonly FAQItem[] }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (faq ?? []).map((item) => ({
      "@type": "Question",
      name: stripMarkdownLinks(item.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripMarkdownLinks(item.answer),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export function BlogJsonLd({ headline, description, url, faq }: BlogJsonLdProps) {
  return (
    <>
      <ArticleJsonLd headline={headline} description={description} url={url} />
      <FAQPageJsonLd faq={faq} />
    </>
  );
}
