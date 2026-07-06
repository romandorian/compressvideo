import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { siteUrl, ui } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: ui.ko.home.metaTitle,
    template: "%s | CompressVideo",
  },
  description: ui.ko.home.metaDescription,
  applicationName: "CompressVideo",
  robots: {
    index: true,
    follow: true,
  },
};

export default function KoreanLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <SiteHeader locale="ko" />
        {children}
        <SiteFooter locale="ko" />
      </body>
    </html>
  );
}
