import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal-page-view";
import { legalContent } from "@/lib/legal-content";
import { alternatesFor } from "@/lib/i18n";

const page = legalContent.zh.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: alternatesFor("zh", "/contact"),
};

export default function ChineseContactPage() {
  return <LegalPageView slug="contact" locale="zh" />;
}
