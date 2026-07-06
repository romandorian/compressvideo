import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { siteUrl, ui } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: ui.ja.home.metaTitle,
    template: "%s | CompressVideo",
  },
  description: ui.ja.home.metaDescription,
  applicationName: "CompressVideo",
  robots: {
    index: true,
    follow: true,
  },
};

export default function JapaneseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <SiteHeader locale="ja" />
        {children}
        <SiteFooter locale="ja" />
      </body>
    </html>
  );
}
