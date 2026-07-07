import type { MetadataRoute } from "next";
import { locales, localePath, siteUrl } from "@/lib/i18n";
import { toolPages } from "@/lib/tool-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/privacy",
    "/terms",
    "/contact",
    ...toolPages.map((page) => `/${page.slug}`),
  ];

  return paths.flatMap((path) => {
    const alternates = {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${siteUrl}${localePath(locale, path) === "/" ? "" : localePath(locale, path)}`]),
      ),
    };

    return locales.map((locale) => {
      const localizedPath = localePath(locale, path);

      return {
        url: `${siteUrl}${localizedPath === "/" ? "" : localizedPath}`,
        changeFrequency: "weekly" as const,
        priority: path === "/" ? (locale === "en" ? 1 : 0.9) : 0.7,
        alternates,
      };
    });
  });
}
