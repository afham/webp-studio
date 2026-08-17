// app/[slug]/page.tsx

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import WebpStudioWorkbench from "../components/WebpStudioWorkbench";
import { CONVERTERS, ALL_CONVERTER_SLUGS } from "../lib/converter";

type Props = {
  params: Promise<{ slug: string }>;
};

// 1. Static pre-rendering for all slugs at build time (SSG)
export async function generateStaticParams() {
  return ALL_CONVERTER_SLUGS.map((slug) => ({ slug }));
}

// 2. Dynamic, SEO-rich metadata generation per route
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const config = CONVERTERS[slug];

  if (!config) return {};

  const pageUrl = `https://thewebpstudio.com/${config.slug}`;

  return {
    title: `${config.metaTitle} | WebP Studio`,
    description: config.metaDescription,
    alternates: {
      canonical: `/${config.slug}`,
    },
    openGraph: {
      title: `${config.metaTitle} | WebP Studio`,
      description: config.metaDescription,
      url: pageUrl,
      siteName: "WebP Studio",
      type: "website",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: `${config.name} Interactive Image Workbench`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: config.metaTitle,
      description: config.metaDescription,
      images: ["/og-image.png"],
    },
  };
}

// 3. Complete Page Rendering
export default async function ConverterPage({ params }: Props) {
  const { slug } = await params;
  const config = CONVERTERS[slug];

  if (!config) {
    notFound();
  }

  // Exhaustive JSON-LD Schema (WebApplication, BreadcrumbList, HowTo, FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `https://thewebpstudio.com/${config.slug}#webapp`,
        name: `WebP Studio – ${config.name}`,
        url: `https://thewebpstudio.com/${config.slug}`,
        applicationCategory: "MultimediaApplication",
        operatingSystem:
          "All modern web browsers (Chrome, Safari, Firefox, Edge)",
        browserRequirements: "Requires JavaScript and HTML5 Canvas API support",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://thewebpstudio.com/${config.slug}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://thewebpstudio.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: config.name,
            item: `https://thewebpstudio.com/${config.slug}`,
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `https://thewebpstudio.com/${config.slug}#howto`,
        name: `How to Use the ${config.name} Tool`,
        description: config.heroText,
        step: config.howToSteps.map((step, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: step.title,
          text: step.desc,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `https://thewebpstudio.com/${config.slug}#faq`,
        mainEntity: config.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Interactive App Workstation */}
      <main id="workbench" className="w-full">
        <WebpStudioWorkbench />
      </main>

      {/* Comprehensive SEO Content Section */}
      <footer className="w-full bg-white border-t border-slate-200 text-slate-700 py-16 px-4 sm:px-8 font-sans">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Header & Hero Intro */}
          <section className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100 uppercase tracking-wider">
                {config.fromFormat} ➔ {config.toFormat}
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                {config.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                100% In-Browser Engine
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              {config.h1}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {config.heroText}
            </p>
          </section>

          {/* Key Benefit Feature Cards */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              Why Use WebP Studio for {config.name}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              {config.keyBenefits.map((benefit, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
                >
                  <div className="text-2xl">{benefit.icon}</div>
                  <h3 className="font-bold text-sm text-slate-900">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {config.technicalComparison.title}
            </h2>
            <p className="text-xs text-slate-500">
              {config.technicalComparison.description}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Optimization Metric</th>
                    <th className="p-3">
                      {config.technicalComparison.originalLabel}
                    </th>
                    <th className="p-3">
                      {config.technicalComparison.webpLabel}
                    </th>
                    <th className="p-3">Performance Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {config.technicalComparison.metrics.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/80 transition">
                      <td className="p-3 font-semibold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="p-3 text-slate-600">{row.original}</td>
                      <td className="p-3 font-semibold text-indigo-600">
                        {row.webp}
                      </td>
                      <td className="p-3 font-bold text-emerald-600">
                        {row.verdict}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Deep-Dive Technical Educational Text */}
          <section className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              {config.deepDive.heading}
            </h2>
            {config.deepDive.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm text-slate-600 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </section>

          {/* Step-by-Step Guide */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              How to Convert with {config.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {config.howToSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 p-4 rounded-xl bg-slate-50 space-y-2"
                >
                  <span className="font-mono font-bold text-indigo-600">
                    STEP {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Internal Cross-Linking Grid */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/80 pb-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Direct Format Converters &amp; Compression Tools
                </h2>
                <p className="text-xs text-slate-500">
                  Targeted conversion pipelines optimized for modern web raster
                  workflows.
                </p>
              </div>
              <span className="text-[11px] font-mono text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100 self-start sm:self-auto">
                100% In-Browser
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
              {Object.values(CONVERTERS).map((item) => {
                const isCurrent = item.slug === config.slug;
                return (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className={`group p-3 rounded-xl border transition flex flex-col justify-between ${
                      isCurrent
                        ? "bg-indigo-50/40 border-indigo-300 pointer-events-none"
                        : "bg-slate-50 hover:bg-indigo-50/70 border-slate-200 hover:border-indigo-300"
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                      <span>{item.name}</span>
                      <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                        {isCurrent ? "●" : "→"}
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-500 mt-1">
                      {item.highlightText}
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* FAQs Accordion */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              {config.name} – Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {config.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="p-4 border border-slate-200 rounded-xl bg-slate-50 group"
                  open={idx === 0}
                >
                  <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                    {faq.question}
                    <span className="text-slate-400 group-open:rotate-180 transition">
                      ▾
                    </span>
                  </summary>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          {/* Footer Copyright and Legal Navigation */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              © 2026 WebP Studio. Free Batch Image Converter &amp; Optimizer.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
              <Link href="/" className="hover:text-indigo-600 hover:underline">
                Home
              </Link>
              <span>•</span>
              <Link
                href="/privacy"
                className="hover:text-indigo-600 hover:underline"
              >
                Privacy Policy
              </Link>
              <span>•</span>
              <Link
                href="/terms"
                className="hover:text-indigo-600 hover:underline"
              >
                Terms of Service
              </Link>
              <span>•</span>
              <Link
                href="/about"
                className="hover:text-indigo-600 hover:underline"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
