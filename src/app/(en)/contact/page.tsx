import type { Metadata } from "next";
import { LegalPageView } from "@/components/legal-page-view";
import { legalContent } from "@/lib/legal-content";
import { alternatesFor } from "@/lib/i18n";

const page = legalContent.en.contact;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  alternates: alternatesFor("en", "/contact"),
};

export default function ContactPage() {
  return <LegalPageView slug="contact" locale="en" />;
}
