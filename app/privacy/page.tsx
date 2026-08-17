import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebpstudio.com"),
  title: "Privacy Policy – WebP Studio Zero-Upload Data Protection & Security",
  description:
    "Review WebP Studio's comprehensive Privacy Policy. Learn about our 100% client-side zero-upload image architecture, GDPR/CCPA compliance, cookies policy, and data protection standards.",
  keywords: [
    // Core Privacy & Security Keywords
    "webp studio privacy policy",
    "zero upload image converter privacy",
    "client side image compression security",
    "private webp converter zero logging",
    "in browser image privacy guarantee",
    "secure batch image converter",

    // Compliance & Legal Standards
    "gdpr compliant image converter",
    "ccpa compliant webp tool",
    "caloppa compliance image software",
    "no server storage privacy policy",
    "no tracking image optimizer",

    // Technical Architecture & Data Safety
    "html5 canvas sandbox privacy",
    "browser memory ram image processing",
    "no cloud upload data protection",
    "local image quantization privacy",
    "data protection officer webp studio",
  ],
  authors: [
    {
      name: "WebP Studio Security & Privacy Team",
      url: "https://thewebpstudio.com/privacy",
    },
  ],
  creator: "WebP Studio",
  publisher: "WebP Studio",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy – WebP Studio Zero-Upload Data Protection",
    description:
      "Understand how WebP Studio protects your photos and creative assets with 100% local, client-side browser processing.",
    url: "https://thewebpstudio.com/privacy",
    siteName: "WebP Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebP Studio Privacy Policy and Data Security Guarantees",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – WebP Studio",
    description:
      "Discover our zero-upload privacy architecture. Your images never leave your computer.",
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

export default function PrivacyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://thewebpstudio.com/privacy/#webpage",
        name: "Privacy Policy – WebP Studio",
        url: "https://thewebpstudio.com/privacy",
        description:
          "Comprehensive privacy policy, GDPR/CCPA declarations, and zero-upload security details for WebP Studio.",
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
        "@id": "https://thewebpstudio.com/privacy/#breadcrumbs",
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
            name: "Privacy Policy",
            item: "https://thewebpstudio.com/privacy",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://thewebpstudio.com/privacy/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Are my images or photos ever uploaded to a remote server?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. WebP Studio operates strictly inside your web browser using the HTML5 Canvas API and client-side JavaScript. All image decoding, transformations, and WebP compression occur in local device memory (RAM). Your files are never sent over the internet or saved to remote databases.",
            },
          },
          {
            "@type": "Question",
            name: "Does WebP Studio collect EXIF data, GPS coordinates, or personal metadata?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Because your files are not transferred across a network, WebP Studio never accesses, stores, harvests, or profiles image metadata, GPS locations, camera serial numbers, or facial data.",
            },
          },
          {
            "@type": "Question",
            name: "Is WebP Studio compliant with GDPR and CCPA/CPRA regulations?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. WebP Studio complies with GDPR, CCPA/CPRA, and global privacy frameworks by design. We do not collect, store, buy, or sell personal identifiers or user-uploaded media.",
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

      {/* Main Privacy Document Container */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-xs space-y-12">
          {/* Header Section */}
          <header className="space-y-3 border-b border-slate-100 pb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              Data Protection &amp; Security Standards
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xs text-slate-500 font-mono">
              Effective Date: August 2026 • Governing WebP Studio Version 3.0+
            </p>
          </header>

          {/* Privacy Guarantee Hero Card */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl shrink-0 font-bold">
              🔒
            </div>
            <div className="text-xs sm:text-sm text-emerald-950 leading-relaxed space-y-1.5">
              <h2 className="font-bold text-emerald-900 text-base">
                Zero-Upload Privacy Architecture
              </h2>
              <p>
                WebP Studio is engineered as an offline-capable, client-side web
                utility. Your image files{" "}
                <strong>never leave your device</strong>, are never transmitted
                over the internet, and are never saved, processed, or logged on
                external cloud servers or remote databases.
              </p>
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              1. Executive Privacy Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At <strong>WebP Studio</strong> (accessible via{" "}
              <code className="text-indigo-600 font-mono bg-slate-100 px-1 py-0.5 rounded">
                https://thewebpstudio.com
              </code>
              ), we prioritize user privacy above all else. Unlike conventional
              cloud-based converters that require uploading confidential images
              to remote server farms, WebP Studio processes every pixel locally
              inside your browser memory sandbox.
            </p>
          </section>

          {/* Section 2: Technical Mechanics of In-Browser Processing */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              2. Technical Architecture: How Your Images Are Processed
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              When you drag, drop, or select image files (PNG, JPG, JPEG, AVIF,
              HEIC, TIFF, BMP, or GIF) in WebP Studio:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-2">
              <li>
                <strong>Local File Pointer Initialization:</strong> The browser
                accesses your files via the native{" "}
                <code className="text-indigo-600 font-mono">File</code> and{" "}
                <code className="text-indigo-600 font-mono">Blob</code> APIs.
              </li>
              <li>
                <strong>Canvas Memory Decoding:</strong> Images are drawn
                directly to an in-memory{" "}
                <code className="text-indigo-600 font-mono">
                  HTMLCanvasElement
                </code>{" "}
                using hardware-accelerated device graphics.
              </li>
              <li>
                <strong>Client-Side VP8/VP8L Encoding:</strong> The conversion
                to WebP format is executed locally via{" "}
                <code className="text-indigo-600 font-mono">
                  HTMLCanvasElement.toBlob()
                </code>
                .
              </li>
              <li>
                <strong>In-Memory Archiving:</strong> Batch ZIP downloads are
                compiled locally using client-side Web Workers and JSZip
                algorithms.
              </li>
            </ul>
          </section>

          {/* Section 3: Information We Never Collect */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              3. Information We Do Not Collect or Store
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Because all computational processing occurs in your local browser
              sandbox, WebP Studio does not collect:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  ❌ No Uploaded File Content
                </strong>
                <span className="text-slate-600">
                  Your photos, logos, creative designs, and client deliverables
                  are never sent across any network.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  ❌ No Metadata or EXIF Harvesting
                </strong>
                <span className="text-slate-600">
                  We do not extract GPS coordinates, camera models, dates, or
                  personal author tags.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  ❌ No User Accounts or Passwords
                </strong>
                <span className="text-slate-600">
                  WebP Studio requires no registration, logins, credit cards, or
                  identity credentials.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  ❌ No Biometric or Facial Recognition
                </strong>
                <span className="text-slate-600">
                  No automated image scanning, AI model training, or facial
                  indexing is performed.
                </span>
              </div>
            </div>
          </section>

          {/* Section 4: Automated Hosting Logs */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              4. Automated Server Logs &amp; Infrastructure Diagnostics
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Like virtually all web properties, our static Content Delivery
              Network (CDN) and hosting infrastructure (e.g., Cloudflare,
              Vercel) automatically record standard technical access logs for
              network security, DDoS mitigation, and uptime diagnostics. These
              logs may contain:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1 pl-2">
              <li>
                Internet Protocol (IP) address (anonymized/truncated where
                required)
              </li>
              <li>Browser type, engine version, and user-agent string</li>
              <li>Operating system and device category</li>
              <li>Referring URL and requested static page timestamps</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              These diagnostic metrics are used exclusively to maintain web
              server availability and cannot be linked to any image processed
              inside your browser.
            </p>
          </section>

          {/* Section 5: Cookies and Local Storage */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              5. Cookies &amp; Local Storage Policy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              WebP Studio uses minimal client-side storage technologies:
            </p>
            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1.5 pl-2">
              <li>
                <strong>
                  Local Storage (
                  <code className="text-indigo-600 font-mono">
                    localStorage
                  </code>
                  ):
                </strong>{" "}
                Used strictly to remember your preferred UI settings (e.g.,
                default compression quality, layout presets, or dark/light
                theme). This data remains on your physical device.
              </li>
              <li>
                <strong>
                  Session Storage (
                  <code className="text-indigo-600 font-mono">
                    sessionStorage
                  </code>
                  ):
                </strong>{" "}
                Temporary memory used to preserve current conversion batches
                across accidental page refreshes. Purged automatically when the
                browser tab closes.
              </li>
            </ul>
          </section>

          {/* Section 6: Third-Party Advertising & Analytics */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              6. Third-Party Advertising &amp; Analytics
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To keep WebP Studio completely free and unrestricted, we may
              partner with privacy-conscious third-party advertising platforms
              (such as Google AdSense) and web analytics providers. These
              partners may use cookies, device fingerprints, or web beacons to
              serve contextually relevant advertisements based on prior web
              browsing activity.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You can opt out of personalized advertising by managing your
              cookie preferences in your browser or by visiting the{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                Google Ads Settings
              </a>{" "}
              and{" "}
              <a
                href="https://www.aboutads.info/choices/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline"
              >
                AboutAds.info
              </a>{" "}
              opt-out portals.
            </p>
          </section>

          {/* Section 7: Global Data Protection Compliance */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              7. Global Privacy Regulations Compliance
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs uppercase font-bold text-indigo-600">
                  European Union GDPR Compliance
                </strong>
                <p className="leading-relaxed">
                  Under the EU General Data Protection Regulation (GDPR), we act
                  neither as a Data Controller nor a Data Processor for your
                  media files, as no user content is transferred to our custody.
                  For any server log metrics, our lawful basis is legitimate
                  interest in maintaining site uptime and security.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs uppercase font-bold text-indigo-600">
                  California Consumer Privacy Act (CCPA / CPRA)
                </strong>
                <p className="leading-relaxed">
                  We do not sell, rent, trade, or share personal user data or
                  uploaded creative files with data brokers. California
                  residents enjoy full privacy rights by default through our
                  zero-collection architecture.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block text-xs uppercase font-bold text-indigo-600">
                  Global Privacy Shield (UK GDPR, LGPD, DPDP)
                </strong>
                <p className="leading-relaxed">
                  By adhering to strict data minimization principles (collecting
                  only the minimum data required to deliver static HTML/JS
                  assets), WebP Studio complies natively with UK GDPR, Brazilian
                  LGPD, and Indian Digital Personal Data Protection (DPDP)
                  frameworks.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: Children's Privacy */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              8. Children&apos;s Online Privacy Protection Act (COPPA)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              WebP Studio does not knowingly solicit or collect personal
              information from children under the age of 13. Since the platform
              requires no personal identification or account registration, it is
              safe for educational, classroom, and student use.
            </p>
          </section>

          {/* Section 9: Security Best Practices */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              9. Information Security &amp; Transport Encryption
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              WebP Studio enforces strict <strong>HTTPS (TLS 1.3)</strong>{" "}
              transport encryption across all domain endpoints, utilizing modern
              Content Security Policies (CSP), HSTS headers, and browser
              sandboxing protocols to guarantee that our static application code
              is delivered without tampering or injection risks.
            </p>
          </section>

          {/* Section 10: FAQ Accordion */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              10. Frequently Asked Privacy Questions
            </h2>
            <div className="space-y-3">
              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Can WebP Studio staff or engineers see my converted photos?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  No. Because images never leave your local device, no human,
                  engineer, or server administrator has access to your visual
                  media.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Does WebP Studio train artificial intelligence or machine
                  learning models on my uploads?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Never. We do not store or collect image datasets, making it
                  technically impossible to train machine learning or generative
                  AI models on your files.
                </p>
              </details>
            </div>
          </section>

          {/* Section 11: Contact DPO */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-slate-900 tracking-tight">
              11. Data Protection Officer (DPO) &amp; Inquiries
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              If you have any questions, compliance audits, or technical
              security concerns regarding this Privacy Policy, please reach out
              to our privacy office at:
            </p>
            <p className="text-xs font-mono text-indigo-600 bg-slate-50 border border-slate-200 p-2.5 rounded-lg inline-block">
              afhammk8@gmail.com
            </p>
          </section>

          {/* Semantic Keyword Taxonomy */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Privacy Standards &amp; Security Taxonomies
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Zero-Upload Privacy Model
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Client-Side Memory Sandbox
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                GDPR / CCPA Compliant
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                No EXIF Metadata Harvesting
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                TLS 1.3 Transport Security
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                No AI Training On Uploads
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
          <Link href="/terms" className="hover:underline">
            Terms of Service
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
