import Link from "next/link";
import { legalContent, type LegalSlug } from "@/lib/legal-content";
import { localePath, type Locale } from "@/lib/i18n";

const backLabels: Record<Locale, string> = {
  en: "Back to home",
  zh: "返回首页",
  ja: "ホームへ戻る",
  ko: "홈으로 돌아가기",
};

const updatedLabels: Record<Locale, string> = {
  en: "Last updated: ",
  zh: "最后更新：",
  ja: "最終更新: ",
  ko: "마지막 업데이트: ",
};

export function LegalPageView({ slug, locale }: { slug: LegalSlug; locale: Locale }) {
  const page = legalContent[locale][slug];

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <Link href={localePath(locale, "/")} className="text-sm font-medium text-blue-700 hover:text-blue-800">
          {backLabels[locale]}
        </Link>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950">{page.title}</h1>
        <p className="mt-3 text-slate-600">{page.description}</p>
        <p className="mt-2 text-sm text-slate-500">
          {updatedLabels[locale]}
          {page.updated}
        </p>
      </div>

      <div className="space-y-8">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-xl font-semibold text-slate-950">{section.heading}</h2>
            <div className="mt-3 space-y-3 text-sm leading-7 text-slate-600">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
