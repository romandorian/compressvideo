import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { localizedContent } from "@/lib/content";
import { localePath, ui, type Locale } from "@/lib/i18n";
import { pagesByCategory, type ToolPage } from "@/lib/tool-pages";

function LogoMark() {
  return (
    <svg viewBox="0 0 64 64" className="h-8 w-8" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#2563eb" />
      <path d="M27 21 L45 32 L27 43 Z" fill="#fff" />
      <path d="M13 24 L20 32 L13 40" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 24 L48 32 L55 40" fill="none" stroke="#fff" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FooterLinkGroup({
  title,
  pages,
  locale,
}: {
  title: string;
  pages: ToolPage[];
  locale: Locale;
}) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-slate-950">{title}</h2>
      <ul className="mt-3 grid gap-2">
        {pages.map((page) => (
          <li key={page.slug}>
            <Link
              href={localePath(locale, `/${page.slug}`)}
              className="text-sm text-slate-500 transition hover:text-blue-700"
            >
              {localizedContent(page, locale).h1}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const strings = ui[locale];

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href={localePath(locale, "/")} className="flex items-center gap-2" aria-label="CompressVideo home">
          <LogoMark />
          <span className="text-base font-bold tracking-tight text-slate-950">CompressVideo</span>
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 sm:flex">
            {strings.header.nav.map((item) => (
              <Link key={item.href} href={localePath(locale, item.href)} className="hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </nav>
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const strings = ui[locale];
  const platformPages = pagesByCategory("platform");
  const sizePages = pagesByCategory("size");
  const morePages = [...pagesByCategory("format"), ...pagesByCategory("usecase")];

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2">
            <LogoMark />
            <span className="text-base font-bold tracking-tight text-slate-950">CompressVideo</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">{strings.footer.blurb}</p>
        </div>
        <FooterLinkGroup title={strings.footer.groupTitles.platform} pages={platformPages} locale={locale} />
        <FooterLinkGroup title={strings.footer.groupTitles.size} pages={sizePages} locale={locale} />
        <FooterLinkGroup title={strings.footer.groupTitles.more} pages={morePages} locale={locale} />
      </div>
      <div className="border-t border-slate-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>© CompressVideo</p>
          <div className="flex flex-col gap-2 sm:items-end">
            <p>{strings.footer.tagline}</p>
            <nav className="flex flex-wrap gap-4" aria-label={locale === "zh" ? "法律链接" : "Legal links"}>
              {strings.footer.legalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={localePath(locale, item.href)}
                  className="transition hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
