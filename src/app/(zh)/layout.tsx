import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { siteUrl } from "@/lib/i18n";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "在线压缩视频 - 免费、私密、无水印",
    template: "%s | CompressVideo",
  },
  description: "在浏览器中压缩 MP4、MOV、WebM 视频。不上传、免注册、无水印。",
  applicationName: "CompressVideo",
  robots: {
    index: true,
    follow: true,
  },
};

export default function ChineseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <SiteHeader locale="zh" />
        {children}
        <SiteFooter locale="zh" />
      </body>
    </html>
  );
}
