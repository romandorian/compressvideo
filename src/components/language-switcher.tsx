"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localePath, ui, type Locale } from "@/lib/i18n";

const compactLabels: Record<Locale, string> = {
  en: "EN",
  zh: "中文",
  ja: "日本",
  ko: "한국",
};

function stripLocale(pathname: string) {
  const match = pathname.match(/^\/(zh|ja|ko)(?=\/|$)/);
  if (!match) return pathname;
  return pathname.slice(match[0].length) || "/";
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || "/";
  const basePath = stripLocale(pathname);

  return (
    <div className="flex items-center gap-1.5 rounded-md border border-slate-200 px-2 py-1 text-sm font-medium text-slate-600">
      <Globe className="h-4 w-4" aria-hidden="true" />
      <div className="flex items-center gap-1">
        {locales.map((nextLocale) => (
          <Link
            key={nextLocale}
            href={localePath(nextLocale, basePath)}
            aria-current={nextLocale === locale ? "page" : undefined}
            className={`rounded px-2 py-1 transition hover:bg-slate-100 hover:text-slate-950 ${
              nextLocale === locale ? "bg-slate-100 text-slate-950" : ""
            }`}
          >
            <span className="sm:hidden">{compactLabels[nextLocale]}</span>
            <span className="hidden sm:inline">{ui[nextLocale].langName}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
