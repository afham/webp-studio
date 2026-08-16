import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebpstudio.com"),
  title: "Contact WebP Studio – Support, Feedback & Technical Inquiries",
  description:
    "Get in touch with the WebP Studio engineering team for technical support, feature requests, bug reports, API questions, and privacy inquiries regarding our browser-native image converter.",
  keywords: [
    // Core Contact & Support Keywords
    "contact webp studio",
    "webp studio support",
    "webp converter feedback",
    "report webp bug",
    "image compressor technical support",
    "webp studio help desk",

    // Developer & Integration Queries
    "client side webp converter api",
    "browser native image processing support",
    "feature request webp converter",
    "image conversion troubleshooting",
    "canvas toblob support",

    // Privacy & Security Inquiries
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
      "Have questions, feedback, or feature suggestions for WebP Studio? Reach out to our team.",
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
      "Reach out to the WebP Studio development team for questions, suggestions, or bug reports.",
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
          "Contact channels, support hours, and feedback forms for WebP Studio.",
        mainEntity: {
          "@type": "Organization",
          name: "WebP Studio",
          url: "https://thewebpstudio.com",
          contactPoint: [
            {
              "@type": "ContactPoint",
              email: "support@thewebpstudio.com",
              contactType: "customer support",
              availableLanguage: ["English"],
            },
            {
              "@type": "ContactPoint",
              email: "privacy@thewebpstudio.com",
              contactType: "data protection officer",
              availableLanguage: ["English"],
            },
            {
              "@type": "ContactPoint",
              email: "partners@thewebpstudio.com",
              contactType: "partnerships",
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
            name: "How fast does the WebP Studio support team respond?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Our engineering and support team typically reviews all technical inquiries, bug reports, and partnership emails within 24 to 48 business hours.",
            },
          },
          {
            "@type": "Question",
            name: "Can I suggest new image formats or feature enhancements?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We actively welcome feedback and feature requests for new codecs (such as SVG vector scaling or animated WebP encoding) via our support email or GitHub issue tracker.",
            },
          },
          {
            "@type": "Question",
            name: "How do I report a conversion bug or memory crash on a specific file?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Send an email to support@thewebpstudio.com with your browser version, operating system, and the error description. Since files are never uploaded to our servers, detailing the input image dimensions and file format helps us recreate the issue locally.",
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
              bug reports, feature suggestions, or enterprise inquiries? We are
              here to help.
            </p>
          </header>

          {/* Department Directory Grid */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              1. Departmental Support Channels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  🛠️
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  Technical Support &amp; Bugs
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Experiencing conversion issues, canvas rendering errors, or
                  memory limits?
                </p>
                <a
                  href="mailto:support@thewebpstudio.com"
                  className="font-mono text-indigo-600 hover:underline font-semibold block pt-1 break-all"
                >
                  support@thewebpstudio.com
                </a>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  🔒
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  Privacy &amp; Data Security
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Questions about our zero-upload architecture or client-side
                  sandbox?
                </p>
                <a
                  href="mailto:privacy@thewebpstudio.com"
                  className="font-mono text-indigo-600 hover:underline font-semibold block pt-1 break-all"
                >
                  privacy@thewebpstudio.com
                </a>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  🤝
                </div>
                <h3 className="font-bold text-sm text-slate-900">
                  Partnerships &amp; Media
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Propose integration ideas, open-source collaborations, or
                  press features.
                </p>
                <a
                  href="mailto:partners@thewebpstudio.com"
                  className="font-mono text-indigo-600 hover:underline font-semibold block pt-1 break-all"
                >
                  partners@thewebpstudio.com
                </a>
              </div>
            </div>
          </section>

          {/* Quick Inquiry Form */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              2. Submit a Message or Feature Suggestion
            </h2>
            <p className="text-xs text-slate-600">
              Fill out the form below and our team will get back to you within
              24 to 48 hours.
            </p>

            <form
              action="mailto:support@thewebpstudio.com"
              method="GET"
              className="space-y-4 text-xs"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="font-bold text-slate-700 block"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-indigo-500 font-sans"
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="font-bold text-slate-700 block"
                  >
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-indigo-500 font-sans"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="subject"
                  className="font-bold text-slate-700 block"
                >
                  Inquiry Category
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-indigo-500 font-sans"
                >
                  <option value="Bug Report">
                    Bug Report / Processing Error
                  </option>
                  <option value="Feature Request">
                    Feature Request / New Format Idea
                  </option>
                  <option value="Performance Feedback">
                    Performance Feedback &amp; Suggestions
                  </option>
                  <option value="General Inquiry">
                    General Technical Question
                  </option>
                </select>
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="body"
                  className="font-bold text-slate-700 block"
                >
                  Detailed Message
                </label>
                <textarea
                  id="body"
                  name="body"
                  rows={4}
                  required
                  placeholder="Describe your issue or suggestion in detail..."
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-indigo-500 font-sans resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition shadow-xs cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Common Troubleshooting & Help Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              3. Self-Service Troubleshooting &amp; Resolution Guide
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
              Frequently Asked Questions Regarding Support
            </h2>
            <div className="space-y-3">
              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  What information should I include in a bug report?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Please mention your operating system (macOS, Windows, Linux,
                  iOS, Android), your browser name and version, approximate
                  input image dimensions (e.g., 4000×3000px), and whether any
                  browser extensions (like ad blockers) are active.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Can I contribute or suggest code improvements?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Yes! We love community feedback. If you have performance
                  benchmarks, WebAssembly integration ideas, or UI suggestions,
                  reach out via our support email.
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
