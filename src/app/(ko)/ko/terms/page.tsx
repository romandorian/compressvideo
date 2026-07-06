import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal-page-view";
import { legalContent } from "@/lib/legal-content";
import { alternatesFor } from "@/lib/i18n";

const page = legalContent.ko.terms;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: alternatesFor("ko", "/terms"),
};

export default function KoreanTermsPage() {
  return <LegalPageView slug="terms" locale="ko" />;
}
