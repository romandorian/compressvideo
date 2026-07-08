import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, openGraphFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.zh.home.metaTitle,
  },
  description: ui.zh.home.metaDescription,
  alternates: alternatesFor("zh", "/"),
  openGraph: openGraphFor("zh", ui.zh.home.metaTitle, ui.zh.home.metaDescription, "/"),
  twitter: {
    card: "summary",
    title: ui.zh.home.metaTitle,
    description: ui.zh.home.metaDescription,
  },
};

export default function ChineseHome() {
  return <HomeView locale="zh" />;
}
