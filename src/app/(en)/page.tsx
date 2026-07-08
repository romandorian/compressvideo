import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, openGraphFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.en.home.metaTitle,
  },
  description: ui.en.home.metaDescription,
  alternates: alternatesFor("en", "/"),
  openGraph: openGraphFor("en", ui.en.home.metaTitle, ui.en.home.metaDescription, "/"),
  twitter: {
    card: "summary",
    title: ui.en.home.metaTitle,
    description: ui.en.home.metaDescription,
  },
};

export default function Home() {
  return <HomeView locale="en" />;
}
