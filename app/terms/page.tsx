import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebpstudio.com"),
  title: "Terms of Service – WebP Studio Legal Agreement & Usage Policy",
  description:
    "Review the WebP Studio Terms of Service. Understand our acceptable use guidelines, client-side zero-upload processing terms, intellectual property protections, and liability limitations.",
  keywords: [
    // Legal & Terms Keywords
    "webp studio terms of service",
    "webp studio legal terms",
    "image converter terms and conditions",
    "client side software license",
    "acceptable use policy webp studio",
    "zero upload legal guarantee",
    "image conversion privacy terms",

    // Ownership & IP Keywords
    "image ownership rights converter",
    "commercial use webp converter",
    "free commercial image optimization tool",
    "intellectual property image compression",
    "no copyright infringement converter",

    // Software & Liability Terms
    "browser utility terms of use",
    "as-is software disclaimer",
    "limitation of liability image tool",
    "client side canvas usage agreement",
    "web performance tool terms",
  ],
  authors: [
    { name: "WebP Studio Legal Team", url: "https://thewebpstudio.com/terms" },
  ],
  creator: "WebP Studio",
  publisher: "WebP Studio",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service – WebP Studio Legal Agreement",
    description:
      "Understand the terms, intellectual property policies, and usage guidelines governing WebP Studio's in-browser image optimization tools.",
    url: "https://thewebpstudio.com/terms",
    siteName: "WebP Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebP Studio Terms of Service and Legal Agreement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service – WebP Studio",
    description:
      "Clear, transparent terms of service for using WebP Studio's client-side image converter.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function TermsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://thewebpstudio.com/terms/#webpage",
        name: "Terms of Service – WebP Studio",
        url: "https://thewebpstudio.com/terms",
        description:
          "Terms of Service, acceptable use guidelines, and legal disclaimer for WebP Studio.",
        inLanguage: "en-US",
        isPartOf: {
          "@type": "WebSite",
          "@id": "https://thewebpstudio.com/#website",
          name: "WebP Studio",
          url: "https://thewebpstudio.com",
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://thewebpstudio.com/terms/#breadcrumbs",
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
            name: "Terms of Service",
            item: "https://thewebpstudio.com/terms",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://thewebpstudio.com/terms/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I use WebP Studio for commercial projects and client work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. WebP Studio is 100% free for both personal and commercial use, including client web development, digital marketing, graphic design, and e-commerce product catalogs.",
            },
          },
          {
            "@type": "Question",
            name: "Does WebP Studio claim any ownership over my converted images?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. You retain 100% full legal ownership, copyright, and intellectual property rights over all images processed through WebP Studio. We claim zero rights or licenses over your media.",
            },
          },
          {
            "@type": "Question",
            name: "Are there any hidden fees, conversion limits, or required accounts?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. WebP Studio operates without account registrations, paywalls, daily batch quotas, or hidden subscription tiers.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-30 shadow-2xs">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-900 font-bold text-sm"
          >
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-black text-xs">
              W
            </div>
            <span>WebP Studio</span>
          </Link>
          <Link
            href="/"
            className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-lg transition"
          >
            ← Launch Converter
          </Link>
        </div>
      </header>

      {/* Main Legal Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-xs space-y-12">
          {/* Header Section */}
          <header className="space-y-3 border-b border-slate-100 pb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              Legal Agreement &amp; Usage Terms
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Last Revised: August 2026 • Governing WebP Studio Version 3.0+
            </p>
          </header>

          {/* Quick Summary Box */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <h2 className="font-bold text-sm text-slate-900">
              Summary of Key Terms:
            </h2>
            <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
              <li>
                <strong>Zero Upload Architecture:</strong> Processing is 100%
                client-side in your local browser sandbox.
              </li>
              <li>
                <strong>Complete Ownership:</strong> You retain all copyright
                and IP rights to your uploaded images.
              </li>
              <li>
                <strong>Commercial Freedom:</strong> Free for personal,
                commercial, and enterprise production workflows.
              </li>
              <li>
                <strong>No Warranties:</strong> The software is provided
                &quot;as-is&quot; without liability for local device errors.
              </li>
            </ul>
          </div>

          {/* Section 1: Agreement to Terms */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Agreement to Terms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              By accessing, browsing, or using <strong>WebP Studio</strong>{" "}
              (accessible at{" "}
              <code className="text-indigo-600 font-mono bg-slate-100 px-1 py-0.5 rounded">
                https://thewebpstudio.com
              </code>
              ), you confirm that you have read, understood, and agreed to be
              bound by these Terms of Service. If you do not agree to these
              terms, you must immediately discontinue using our services and
              tools.
            </p>
          </section>

          {/* Section 2: Architecture & Client-Side Execution */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              2. Nature of Software &amp; Client-Side Operation
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              WebP Studio operates as a browser-native web utility powered by
              JavaScript, WebAssembly, and the HTML5 Canvas API. You acknowledge
              and understand that:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-2">
              <li>
                All image decoding, color quantization, pixel resizing,
                rotation, and WebP encoding take place exclusively inside your
                local device memory (RAM).
              </li>
              <li>
                No image data, filenames, or visual buffers are transmitted
                across the internet to our servers or third-party cloud
                instances.
              </li>
              <li>
                Conversion speeds and batch capacities depend entirely on your
                local hardware specifications (CPU, GPU, and RAM).
              </li>
            </ul>
          </section>

          {/* Section 3: Intellectual Property & Ownership */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Intellectual Property &amp; Image Rights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              <strong>Your Images Remain 100% Yours.</strong> WebP Studio does
              not claim, seek, or acquire any ownership, copyright, or licensing
              rights over any image files processed through our workbench. We do
              not store, copy, monitor, or redistribute your creative work.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              The WebP Studio platform, including its brand identity, UI layout,
              source code, stylesheets, interactive components, and website
              design, is protected by international copyright, trademark, and
              intellectual property laws.
            </p>
          </section>

          {/* Section 4: Acceptable Use Policy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              4. Acceptable Use Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You agree to use WebP Studio only for lawful purposes. You agree
              NOT to use the platform to:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-2">
              <li>
                Process or generate materials that infringe upon any patent,
                trademark, trade secret, or copyright of any third party.
              </li>
              <li>
                Attempt to reverse-engineer malicious exploits, bypass browser
                sandboxes, or degrade website availability for other users.
              </li>
              <li>
                Scrape, overload, or execute distributed denial-of-service
                (DDoS) attacks against our static content delivery
                infrastructure.
              </li>
            </ul>
          </section>

          {/* Section 5: Commercial Use Rights */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              5. Commercial and Professional Use
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              WebP Studio grants you a free, non-exclusive, worldwide license to
              use the web application for personal, educational, non-profit,
              commercial, and enterprise production purposes. You may freely use
              converted WebP images in commercial websites, e-commerce stores
              (Shopify, WooCommerce, Amazon), mobile applications, advertising
              campaigns, and client deliverables without attribution or royalty
              fees.
            </p>
          </section>

          {/* Section 6: Disclaimer of Warranties */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              6. Disclaimer of Warranties (&quot;AS IS&quot;)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              WebP Studio is provided strictly on an{" "}
              <strong>&quot;AS IS&quot;</strong> and{" "}
              <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties
              of any kind, whether express, implied, or statutory. We explicitly
              disclaim all warranties of merchantability, fitness for a
              particular purpose, operational reliability, and non-infringement.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We make no guarantee that the service will be continuous,
              error-free, compatible with all corrupted or legacy image headers,
              or fully functional on outdated browser engines.
            </p>
          </section>

          {/* Section 7: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              7. Limitation of Liability
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To the fullest extent permitted by applicable law, WebP Studio,
              its developers, operators, and affiliates shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages, including but not limited to loss of profits, data loss,
              browser tab crashes, memory allocation errors, or business
              interruptions arising out of or related to your use of this
              software.
            </p>
          </section>

          {/* Section 8: Modifications and Updates */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              8. Modifications to Service and Terms
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We reserve the right to modify, refine, update, or discontinue
              features of WebP Studio or these Terms of Service at any time
              without prior notice. Any updates will be reflected on this page
              with an updated revision date. Your continued use of the platform
              after changes indicates acceptance of the updated terms.
            </p>
          </section>

          {/* Section 9: Legal FAQ Accordion */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              9. Frequently Asked Questions Regarding Terms
            </h2>
            <div className="space-y-3">
              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Do I need to attribute WebP Studio when publishing converted
                  images?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  No attribution is required. You are free to use your converted
                  WebP assets for any personal or commercial project without
                  linking back to WebP Studio.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  What happens if the browser runs out of memory during a huge
                  batch conversion?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Since conversion happens in your local device RAM, attempting
                  to convert hundreds of high-resolution (8K/RAW) files at once
                  may exhaust tab memory. In such cases, simply refresh and
                  process files in smaller batches of 50–100 images.
                </p>
              </details>
            </div>
          </section>

          {/* Section 10: Contact Information */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              10. Legal Contact Information
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              For any questions, legal notices, or clarifications regarding
              these Terms of Service, please reach out to our legal department
              at:
            </p>
            <p className="text-xs font-mono text-indigo-600 bg-slate-50 border border-slate-200 p-2.5 rounded-lg inline-block">
              legal@thewebpstudio.com
            </p>
          </section>

          {/* Semantic Keyword Taxonomy */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Legal Entities &amp; Compliance Standards
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Client-Side Software License
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Commercial Use Rights
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Zero Upload IP Protection
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Limitation of Liability
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Acceptable Use Policy
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                HTML5 Canvas Terms
              </span>
            </div>
          </section>
        </article>

        {/* Footer Navigation */}
        <div className="mt-8 text-center text-xs text-slate-500 space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <span>•</span>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <span>•</span>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </main>
    </div>
  );
}
