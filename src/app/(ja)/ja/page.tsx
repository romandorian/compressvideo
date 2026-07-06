import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.ja.home.metaTitle,
  },
  description: ui.ja.home.metaDescription,
  alternates: alternatesFor("ja", "/"),
};

export default function JapaneseHome() {
  return <HomeView locale="ja" />;
}
