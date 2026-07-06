import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { siteUrl } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Compress Video Online - Free, Private, No Watermark",
    template: "%s | CompressVideo",
  },
  description:
    "Compress MP4, MOV, and WebM videos in your browser. No upload, no sign-up, and no watermark.",
  applicationName: "CompressVideo",
  robots: {
    index: true,
    follow: true,
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteHeader locale="en" />
        {children}
        <SiteFooter locale="en" />
      </body>
    </html>
  );
}
