import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal-page-view";
import { legalContent } from "@/lib/legal-content";
import { alternatesFor } from "@/lib/i18n";

const page = legalContent.ja.privacy;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: alternatesFor("ja", "/privacy"),
};

export default function JapanesePrivacyPage() {
  return <LegalPageView slug="privacy" locale="ja" />;
}
