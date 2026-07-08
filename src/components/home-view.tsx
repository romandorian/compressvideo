import Link from "next/link";
import { VideoCompressor } from "@/components/video-compressor";
import { localizedContent } from "@/lib/content";
import { localePath, siteUrl, ui, type Locale } from "@/lib/i18n";
import { pagesByCategory, type ToolPage } from "@/lib/tool-pages";

function ToolLinkGroup({
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
      <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-500">{title}</h3>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pages.map((page) => {
          const content = localizedContent(page, locale);
          return (
            <Link
              key={page.slug}
              href={localePath(locale, `/${page.slug}`)}
              className="rounded-lg border border-slate-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-sm"
            >
              <h4 className="font-semibold text-slate-950">{content.h1}</h4>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">{content.intro}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function HomeView({ locale }: { locale: Locale }) {
  const strings = ui[locale];
  const home = strings.home;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: home.faqs.map((faq) => ({
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

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CompressVideo",
    url: homeUrl,
    description: home.metaDescription,
    applicationCategory: "MultimediaApplication",
    operatingSystem: "Any browser",
    browserRequirements: "Requires JavaScript and WebAssembly",
    inLanguage: locale,
    isAccessibleForFree: true,
    featureList: home.badges,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_480px] lg:items-center lg:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">{home.eyebrow}</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">{home.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{home.sub}</p>
            <div className="mt-6 grid gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3">
              {home.badges.map((badge) => (
                <div key={badge} className="rounded-md border border-slate-200 bg-white px-3 py-2">
                  {badge}
                </div>
              ))}
            </div>
          </div>
          <VideoCompressor
            intent={locale === "zh" ? "在线缩小视频体积" : "Reduce video file size online"}
            defaultPreset="balanced"
            locale={locale}
          />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">{home.modesTitle}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {home.modes.map((mode) => (
              <div key={mode.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-950">{mode.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{mode.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">{home.toolsTitle}</h2>
          <p className="mt-3 text-slate-600">{home.toolsSub}</p>
        </div>
        <div className="mt-8 grid gap-10">
          <ToolLinkGroup title={home.groupTitles.platform} pages={pagesByCategory("platform")} locale={locale} />
          <ToolLinkGroup title={home.groupTitles.size} pages={pagesByCategory("size")} locale={locale} />
          <ToolLinkGroup
            title={home.groupTitles.more}
            pages={[...pagesByCategory("format"), ...pagesByCategory("usecase")]}
            locale={locale}
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-950">{home.howTitle}</h2>
            <p className="mt-3 text-slate-600">{home.howSub}</p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-3">
              {home.steps.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-blue-700">{index + 1}</p>
                  <h3 className="mt-1 font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-950">{home.whyTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {home.whyCards.map((card) => (
            <div key={card.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="font-semibold text-slate-950">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold tracking-tight text-slate-950">{home.faqTitle}</h2>
          <div className="mt-6 divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
            {home.faqs.map((faq) => (
              <div key={faq.question} className="p-4">
                <h3 className="font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
