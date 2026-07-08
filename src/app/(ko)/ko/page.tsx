import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, openGraphFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.ko.home.metaTitle,
  },
  description: ui.ko.home.metaDescription,
  alternates: alternatesFor("ko", "/"),
  openGraph: openGraphFor("ko", ui.ko.home.metaTitle, ui.ko.home.metaDescription, "/"),
  twitter: {
    card: "summary",
    title: ui.ko.home.metaTitle,
    description: ui.ko.home.metaDescription,
  },
};

export default function KoreanHome() {
  return <HomeView locale="ko" />;
}
