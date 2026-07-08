import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, openGraphFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.ja.home.metaTitle,
  },
  description: ui.ja.home.metaDescription,
  alternates: alternatesFor("ja", "/"),
  openGraph: openGraphFor("ja", ui.ja.home.metaTitle, ui.ja.home.metaDescription, "/"),
  twitter: {
    card: "summary",
    title: ui.ja.home.metaTitle,
    description: ui.ja.home.metaDescription,
  },
};

export default function JapaneseHome() {
  return <HomeView locale="ja" />;
}
