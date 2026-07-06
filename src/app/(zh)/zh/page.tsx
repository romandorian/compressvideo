import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.zh.home.metaTitle,
  },
  description: ui.zh.home.metaDescription,
  alternates: alternatesFor("zh", "/"),
};

export default function ChineseHome() {
  return <HomeView locale="zh" />;
}
