import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.ko.home.metaTitle,
  },
  description: ui.ko.home.metaDescription,
  alternates: alternatesFor("ko", "/"),
};

export default function KoreanHome() {
  return <HomeView locale="ko" />;
}
