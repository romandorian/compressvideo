import type { Locale } from "./i18n";
import type { ToolPage, ToolPageContent } from "./tool-pages";
import { jaToolContent } from "./tool-pages.ja";
import { koToolContent } from "./tool-pages.ko";
import { zhToolContent } from "./tool-pages.zh";

const localizedToolContent: Partial<Record<Locale, Record<string, ToolPageContent>>> = {
  zh: zhToolContent,
  ja: jaToolContent,
  ko: koToolContent,
};

export function localizedContent(page: ToolPage, locale: Locale): ToolPageContent {
  const localized = localizedToolContent[locale]?.[page.slug];
  if (localized) return localized;

  return {
    title: page.title,
    metaDescription: page.metaDescription,
    h1: page.h1,
    intro: page.intro,
    intent: page.intent,
    guidance: page.guidance,
    faqs: page.faqs,
  };
}
