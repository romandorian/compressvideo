import Link from "next/link";
import { VideoCompressor } from "@/components/video-compressor";
import { localizedContent } from "@/lib/content";
import { localePath, siteUrl, ui, type Locale } from "@/lib/i18n";
import { getRelatedPages, type ToolPage } from "@/lib/tool-pages";

export function ToolPageView({ page, locale }: { page: ToolPage; locale: Locale }) {
  const content = localizedContent(page, locale);
  const strings = ui[locale].toolPage;
  const relatedPages = getRelatedPages(page);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const homePath = localePath(locale, "/");
  const homeUrl = `${siteUrl}${homePath === "/" ? "" : homePath}`;
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "CompressVideo", item: homeUrl },
      { "@type": "ListItem", position: 2, name: content.h1, item: `${siteUrl}${localePath(locale, `/${page.slug}`)}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_480px] lg:items-center lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{content.intent}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{content.intro}</p>
          </div>
          <VideoCompressor
            intent={content.intent}
            defaultTargetMb={page.defaultTargetMb}
            defaultPreset={page.defaultPreset}
            locale={locale}
          />
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">{strings.howToTitle}</h2>
          <ol className="mt-5 grid gap-3">
            {strings.howToSteps.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-950">{strings.settingsTitle}</h2>
          <div className="mt-5 grid gap-3">
            {content.guidance.map((item) => (
              <div key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">
                {item}
              </div>
            ))}
          </div>

          <h2 className="mt-10 text-2xl font-bold tracking-tight text-slate-950">{strings.faqTitle}</h2>
          <div className="mt-5 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {content.faqs.map((faq) => (
              <div key={faq.question} className="p-4">
                <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="h-fit rounded-lg border border-slate-200 bg-white p-4">
          <h2 className="text-base font-semibold text-slate-950">{strings.relatedTitle}</h2>
          <div className="mt-3 grid gap-2">
            {relatedPages.map((related) => (
              <Link
                key={related.slug}
                href={localePath(locale, `/${related.slug}`)}
                className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
              >
                {localizedContent(related, locale).h1}
              </Link>
            ))}
            <Link
              href={localePath(locale, "/")}
              className="rounded-md border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:text-blue-700"
            >
              {strings.generalTool}
            </Link>
          </div>
        </aside>
      </section>
    </main>
  );
}
