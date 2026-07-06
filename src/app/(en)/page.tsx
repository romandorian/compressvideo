import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { alternatesFor, ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: {
    absolute: ui.en.home.metaTitle,
  },
  description: ui.en.home.metaDescription,
  alternates: alternatesFor("en", "/"),
};

export default function Home() {
  return <HomeView locale="en" />;
}
