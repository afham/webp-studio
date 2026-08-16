import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebpstudio.com"),
  title: "About WebP Studio – Architecture, Mission & Client-Side Image Engine",
  description:
    "Learn about WebP Studio's browser-native architecture, our zero-upload privacy mission, and the engineering behind our high-speed client-side WebP image converter.",
  keywords: [
    // Brand & Mission Keywords
    "about webp studio",
    "webp studio mission",
    "client side webp converter architecture",
    "browser native image compression",
    "private image optimization engine",
    "zero server upload image converter",

    // Technical Architecture & Algorithms
    "html5 canvas toblob webp",
    "in browser webp encoding",
    "vp8 lossy predictive coding",
    "vp8l lossless webp spatial decorrelation",
    "client side image quantization",
    "javascript image compression engine",
    "webassembly libwebp conversion",
    "alpha channel transparency encoding",

    // Performance, SEO & Core Web Vitals
    "improve largest contentful paint lcp",
    "reduce cumulative layout shift cls",
    "core web vitals image optimization",
    "green web carbon footprint reduction",
    "bandwidth optimization for web developers",
    "pagespeed insights image payload reduction",

    // Comparisons & Tool Categories
    "alternative to cloudconvert",
    "alternative to tinypng",
    "squoosh alternative offline",
    "free batch webp converter no upload",
    "open web utility for developers",
  ],
  authors: [
    {
      name: "WebP Studio Engineering Team",
      url: "https://thewebpstudio.com/about",
    },
  ],
  creator: "WebP Studio",
  publisher: "WebP Studio",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About WebP Studio – Privacy-First In-Browser Image Optimization",
    description:
      "Explore the engineering, privacy philosophy, and technical architecture powering WebP Studio's client-side batch image converter.",
    url: "https://thewebpstudio.com/about",
    siteName: "WebP Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About WebP Studio Architecture and Mission",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About WebP Studio – In-Browser Image Converter",
    description:
      "Deep dive into the zero-upload architecture and performance advantages of WebP Studio.",
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

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://thewebpstudio.com/about/#aboutpage",
        name: "About WebP Studio",
        url: "https://thewebpstudio.com/about",
        description:
          "Technical background, privacy architecture, and optimization mission of WebP Studio.",
        mainEntity: {
          "@type": "SoftwareApplication",
          name: "WebP Studio",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "All modern web browsers",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        },
      },
      {
        "@type": "Organization",
        "@id": "https://thewebpstudio.com/#organization",
        name: "WebP Studio",
        url: "https://thewebpstudio.com",
        logo: "https://thewebpstudio.com/icon.png",
        description:
          "Creators of zero-upload, client-side raster image optimization technologies.",
        sameAs: ["https://github.com/webpstudio"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://thewebpstudio.com/about/#breadcrumbs",
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
            name: "About",
            item: "https://thewebpstudio.com/about",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://thewebpstudio.com/about/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who created WebP Studio and why?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WebP Studio was engineered by web performance advocates who needed a fast, zero-upload tool for batch-converting raster assets without file size limits, subscription walls, or privacy risks.",
            },
          },
          {
            "@type": "Question",
            name: "How does client-side WebP compression differ from cloud-based converters?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Cloud converters require uploading multi-megabyte image files over the network to remote servers for processing. WebP Studio compiles and quantizes pixels directly in your local browser memory using the HTML5 Canvas API, removing upload latency and eliminating privacy vulnerabilities.",
            },
          },
          {
            "@type": "Question",
            name: "Is WebP Studio environmentally friendly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. By executing all image transformations on the client machine, WebP Studio eliminates the electricity, server cooling, and data center energy consumption associated with cloud-based batch transcode farms.",
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

      {/* Navigation Bar */}
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

      {/* Main Content Container */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-12 shadow-xs space-y-12">
          {/* Article Header */}
          <header className="space-y-3 border-b border-slate-100 pb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md border border-indigo-100">
              Engineering &amp; Philosophy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              About WebP Studio: The Privacy-First Image Engine
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Empowering developers, designers, and site owners with
              zero-upload, hardware-accelerated batch WebP conversion that
              operates entirely inside your local browser sandbox.
            </p>
          </header>

          {/* Section 1: Executive Mission */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              1. The Mission: Modernizing Web Media Without Compromise
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Images constitute over <strong>60% of total network bytes</strong>{" "}
              on the web today. While modern raster formats like Google&apos;s
              WebP deliver superior lossy and lossless compression—reducing file
              sizes by 60% to 85% compared to PNG and JPEG—the tools available
              for everyday optimization have remained deeply flawed.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Most existing online converters rely on an outdated server-upload
              architecture: users must upload confidential images to unknown
              third-party cloud storage, endure upload bottlenecks, navigate
              intrusive full-page ads, and hit artificial daily paywalls.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>WebP Studio was built to challenge this paradigm.</strong>{" "}
              By leveraging the client machine&apos;s multi-core CPU and GPU,
              our engine eliminates remote servers entirely, offering instant,
              unrestricted, and confidential media optimization at zero cost.
            </p>
          </section>

          {/* Section 2: Architectural Comparison Table */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              2. WebP Studio vs. Traditional Cloud Converters
            </h2>
            <p className="text-xs text-slate-500">
              Technical comparison between browser-native processing and legacy
              cloud-based image conversion platforms.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Feature / Capability</th>
                    <th className="p-3 text-indigo-600 font-bold">
                      WebP Studio
                    </th>
                    <th className="p-3">Legacy Cloud Converters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      File Processing Location
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      100% In-Browser Memory (Client)
                    </td>
                    <td className="p-3 text-rose-500">
                      Remote Cloud Server Farms
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      Privacy &amp; Data Security
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      Zero Uploads • No Server Retention
                    </td>
                    <td className="p-3 text-rose-500">
                      Files Uploaded &amp; Stored on Disks
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      Batch Processing Speed
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      Instant (Zero Network Latency)
                    </td>
                    <td className="p-3 text-slate-600">
                      Slow (Bound by Upload Speeds)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      File Size Limits &amp; Caps
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      Uncapped (Hardware Bound)
                    </td>
                    <td className="p-3 text-rose-500">
                      5MB – 25MB Max Upload Caps
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      Visual Quality Inspection
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      Real-Time Split Slider &amp; 3x Zoom
                    </td>
                    <td className="p-3 text-slate-500">
                      Blind Downloads (No Diffing)
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      Offline Functionality
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      Full Offline Operation
                    </td>
                    <td className="p-3 text-rose-500">
                      Requires Constant Internet Access
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Technical Deep-Dive */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              3. The Engineering Behind the Canvas Pipeline
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              WebP Studio executes low-level image processing directly on the
              client through three unified web technologies:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-indigo-600 text-sm block">
                  HTML5 Canvas API
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Decodes binary blobs into raw RGBA pixel arrays, applying
                  dimension downscaling, geometric matrix transforms
                  (rotations/flips), and CSS filter convolutions in
                  hardware-accelerated memory.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-indigo-600 text-sm block">
                  VP8 &amp; VP8L Quantization
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Invokes the browser&apos;s native WebP encoder via{" "}
                  <code className="text-indigo-600 font-mono">
                    HTMLCanvasElement.toBlob()
                  </code>
                  , controlling spatial decorrelation, color indexing palettes,
                  and entropy compression.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="font-bold text-indigo-600 text-sm block">
                  JSZip Binary Packaging
                </span>
                <p className="text-slate-600 leading-relaxed">
                  Assembles converted image buffers directly into a compressed
                  Deflate ZIP archive on a local thread, allowing one-click
                  downloads of hundreds of assets without server round-trips.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Web Performance & Core Web Vitals */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              4. Impact on Core Web Vitals &amp; Technical SEO
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Web performance is a fundamental organic ranking signal under
              Google&apos;s search ranking algorithms. Optimizing images using
              WebP Studio directly addresses the three core pillars of web
              vitals:
            </p>

            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Largest Contentful Paint (LCP)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  LCP marks the point when the main content of a web page has
                  loaded. By converting hero banners from 2.5MB JPEGs down to
                  220KB WebP images, network transfer times drop significantly,
                  helping achieve the sub-2.5s &quot;Good&quot; LCP score
                  required for top rankings.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Cumulative Layout Shift (CLS)
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  WebP Studio outputs explicit pixel dimensions alongside
                  converted assets, encouraging developers to declare explicit{" "}
                  <code className="text-indigo-600 font-mono">width</code> and{" "}
                  <code className="text-indigo-600 font-mono">height</code>{" "}
                  attributes that prevent sudden layout shifts while images
                  load.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-1">
                <h3 className="font-bold text-slate-900 text-sm">
                  Interaction to Next Paint (INP) &amp; CPU Efficiency
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Smaller asset payloads reduce main-thread memory pressure
                  during image decoding, keeping mobile devices responsive and
                  ensuring smooth user interactions.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Green Computing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              5. Sustainable &amp; Green Web Computing
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Data centers worldwide consume billions of kilowatt-hours of
              electricity every year, much of it spent transmitting and
              processing unoptimized media across cloud server clusters.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              By shifting image processing from centralized cloud instances
              directly to the user&apos;s device, WebP Studio eliminates
              redundant network hops, reduces data center energy consumption,
              and promotes a more sustainable, eco-friendly internet
              architecture.
            </p>
          </section>

          {/* Section 6: Frequently Asked Questions */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions About WebP Studio
            </h2>
            <div className="space-y-3">
              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Is WebP Studio completely free for commercial and personal
                  use?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Yes, 100%. WebP Studio is free for freelancers, commercial
                  enterprises, marketing agencies, software engineers, and
                  hobbyists. There are no hidden subscription tiers, watermarks,
                  or premium limitations.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  How does WebP Studio preserve my confidential design assets?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Your files are never transmitted across any network
                  connection. All decoding and encoding operations run
                  exclusively within the local browser sandbox in your
                  computer&apos;s volatile RAM memory. No copies exist on any
                  server.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Can WebP Studio run offline without an internet connection?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Yes. Because the entire processing bundle runs on client-side
                  JavaScript and HTML5 Canvas, you can disconnect from Wi-Fi or
                  cellular data once the page is loaded and continue converting
                  images offline.
                </p>
              </details>
            </div>
          </section>

          {/* Section 7: Semantic Topic Matrix */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Core Technical Entities &amp; Concepts
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Client-Side Canvas Encoding
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                VP8/VP8L WebP Specifications
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Lossless Alpha Transparency
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Core Web Vitals LCP Optimization
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Zero-Upload Privacy Architecture
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Batch Image Quantization
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                In-Browser ZIP Packaging
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Green Web Sustainable Computing
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
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </main>
    </div>
  );
}
