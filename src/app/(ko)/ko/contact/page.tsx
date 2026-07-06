import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal-page-view";
import { legalContent } from "@/lib/legal-content";
import { alternatesFor } from "@/lib/i18n";

const page = legalContent.ko.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: alternatesFor("ko", "/contact"),
};

export default function KoreanContactPage() {
  return <LegalPageView slug="contact" locale="ko" />;
}
