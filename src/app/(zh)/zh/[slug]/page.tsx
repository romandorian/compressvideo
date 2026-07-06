import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageView } from "@/components/tool-page-view";
import { localizedContent } from "@/lib/content";
import { alternatesFor } from "@/lib/i18n";
import { pageBySlug, toolPages } from "@/lib/tool-pages";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return toolPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = pageBySlug.get(slug);

  if (!page) return {};

  const content = localizedContent(page, "zh");

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: alternatesFor("zh", `/${page.slug}`),
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      type: "website",
    },
  };
}

export default async function ChineseToolPage({ params }: PageProps) {
  const { slug } = await params;
  const page = pageBySlug.get(slug);

  if (!page) notFound();

  return <ToolPageView page={page} locale="zh" />;
}
