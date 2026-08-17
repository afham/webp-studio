import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebpstudio.com"),
  title: "Contact WebP Studio – Support, Feedback & Technical Inquiries",
  description:
    "Get in touch with the WebP Studio team for technical support, feature requests, bug reports, API questions, and privacy inquiries regarding our browser-native image converter.",
  keywords: [
    "contact webp studio",
    "webp studio support",
    "webp converter feedback",
    "report webp bug",
    "image compressor technical support",
    "webp studio help desk",
    "client side webp converter api",
    "browser native image processing support",
    "feature request webp converter",
    "image conversion troubleshooting",
    "canvas toblob support",
    "webp studio privacy contact",
    "zero upload verification inquiry",
    "open source web tool support",
    "web performance consulting webp",
  ],
  authors: [
    {
      name: "WebP Studio Support Team",
      url: "https://thewebpstudio.com/contact",
    },
  ],
  creator: "WebP Studio",
  publisher: "WebP Studio",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact WebP Studio – Support & Technical Inquiries",
    description:
      "Have questions, feedback, or feature suggestions for WebP Studio? Reach out directly to our team.",
    url: "https://thewebpstudio.com/contact",
    siteName: "WebP Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact WebP Studio Support & Inquiries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact WebP Studio – Help & Inquiries",
    description:
      "Reach out to the WebP Studio team for questions, suggestions, or bug reports.",
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

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": "https://thewebpstudio.com/contact/#contactpage",
        name: "Contact WebP Studio",
        url: "https://thewebpstudio.com/contact",
        description:
          "Official contact channels, technical support, bug report intake, and feedback for WebP Studio.",
        mainEntity: {
          "@type": "Organization",
          name: "WebP Studio",
          url: "https://thewebpstudio.com",
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "afhammk8@gmail.com",
              contactType: "customer support",
              availableLanguage: ["English"],
            },
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://thewebpstudio.com/contact/#breadcrumbs",
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
            name: "Contact",
            item: "https://thewebpstudio.com/contact",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://thewebpstudio.com/contact/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "How fast does the WebP Studio team respond?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "All technical inquiries, bug reports, and feedback emails sent to afhammk8@gmail.com are typically reviewed within 24 to 48 hours.",
            },
          },
          {
            "@type": "Question",
            name: "Can I suggest new image formats or feature enhancements?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We actively welcome feedback and feature requests for new codecs (such as SVG vector scaling or animated WebP encoding) via email.",
            },
          },
          {
            "@type": "Question",
            name: "How do I report a conversion bug or memory crash on a specific file?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Send an email to afhammk8@gmail.com with your browser version, operating system, and the error description. Since files are never uploaded to our servers, detailing the input image dimensions and file format helps us recreate the issue locally.",
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

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-xs space-y-12">
          {/* Header Section */}
          <header className="space-y-3 border-b border-slate-100 pb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              Direct Support &amp; Communication
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Contact WebP Studio
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Have questions regarding our client-side image processing engine,
              bug reports, feature suggestions, or general inquiries? We are
              here to help.
            </p>
          </header>

          {/* Direct Contact Card & Quick Template Triggers */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              1. Direct Email Support
            </h2>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-5">
              <div className="space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-base">
                  ✉️
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  Reach Out Directly
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Send your technical inquiries, bug reports, feature
                  suggestions, or privacy questions to our direct inbox:
                </p>
                <div className="pt-1">
                  <a
                    href="mailto:afhammk8@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:border-indigo-300 rounded-xl text-indigo-600 font-mono font-bold text-sm hover:bg-indigo-50/50 transition shadow-2xs"
                  >
                    <span>afhammk8@gmail.com</span>
                    <span className="text-xs text-slate-400 font-sans">↗</span>
                  </a>
                </div>
              </div>

              {/* Pre-formatted Subject Templates */}
              <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Quick Subject Templates (Click to compose):
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <a
                    href="mailto:afhammk8@gmail.com?subject=WebP%20Studio%20-%20Bug%20Report"
                    className="px-3 py-1.5 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-medium rounded-lg transition"
                  >
                    🐛 Report a Bug
                  </a>
                  <a
                    href="mailto:afhammk8@gmail.com?subject=WebP%20Studio%20-%20Feature%20Request"
                    className="px-3 py-1.5 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-medium rounded-lg transition"
                  >
                    💡 Suggest a Feature
                  </a>
                  <a
                    href="mailto:afhammk8@gmail.com?subject=WebP%20Studio%20-%20Privacy%20Inquiry"
                    className="px-3 py-1.5 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-medium rounded-lg transition"
                  >
                    🔒 Privacy Inquiry
                  </a>
                  <a
                    href="mailto:afhammk8@gmail.com?subject=WebP%20Studio%20-%20General%20Inquiry"
                    className="px-3 py-1.5 bg-white border border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-600 font-medium rounded-lg transition"
                  >
                    💬 General Inquiry
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Guidelines on What to Include */}
          <section className="p-6 rounded-xl bg-indigo-50/60 border border-indigo-100 space-y-2 text-xs text-slate-700">
            <h3 className="font-bold text-sm text-indigo-950">
              💡 What to include in your message for faster resolution:
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-slate-600">
              <li>
                Your operating system (macOS, Windows, Linux, iOS, Android) and
                browser version.
              </li>
              <li>
                Input file format (PNG, JPG, HEIC, TIFF, etc.) and approximate
                dimensions.
              </li>
              <li>
                Whether any ad blockers or privacy extensions are enabled in
                your browser.
              </li>
            </ul>
          </section>

          {/* Common Troubleshooting & Help Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              2. Self-Service Troubleshooting &amp; Resolution Guide
            </h2>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Browser Out of Memory on Huge Batches (500+ Files)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  If processing hundreds of high-resolution 4K or 8K raw images
                  simultaneously, your browser may hit tab RAM boundaries. Try
                  batching images in sets of 50 to 100 files, or lower the
                  maximum output width in the Resize tab to keep memory usage
                  low.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Corrupted or Unreadable Raw Files
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  WebP Studio uses your browser&apos;s native image decoding
                  engine. If a specific TIFF or BMP file fails to load, ensure
                  the file is not password-protected, encrypted, or corrupted
                  before importing.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  ZIP Download Does Not Trigger
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Check your browser settings to verify that pop-ups or
                  automatic file downloads are permitted for{" "}
                  <code className="text-indigo-600 font-mono">
                    thewebpstudio.com
                  </code>
                  .
                </p>
              </div>
            </div>
          </section>

          {/* FAQ Accordion Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              3. Support FAQ
            </h2>
            <div className="space-y-3">
              <details
                className="p-4 border border-slate-200 rounded-xl bg-slate-50 group"
                open
              >
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  How fast does the WebP Studio team respond?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  All technical inquiries, bug reports, and feedback sent to{" "}
                  <code className="font-mono text-indigo-600">
                    afhammk8@gmail.com
                  </code>{" "}
                  are typically reviewed within 24 to 48 hours.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Can I suggest new image formats or feature enhancements?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Yes! We actively welcome feedback and feature requests for new
                  codecs (such as SVG vector scaling or animated WebP encoding)
                  via email.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  How do I report a conversion bug or memory crash on a specific
                  file?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Send an email to{" "}
                  <code className="font-mono text-indigo-600">
                    afhammk8@gmail.com
                  </code>{" "}
                  with your browser version, operating system, and the error
                  description. Since files are never uploaded to our servers,
                  detailing the input image dimensions and file format helps us
                  recreate the issue locally.
                </p>
              </details>
            </div>
          </section>

          {/* Semantic Keyword Cloud */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Support Topics &amp; Common Queries
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                WebP Studio Bug Reports
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Batch Image Compression Help
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Client-Side Canvas Support
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Memory Optimization Feedback
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Feature Suggestions &amp; Codecs
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Technical Inquiries
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
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <span>•</span>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </div>
      </main>
    </div>
  );
}
