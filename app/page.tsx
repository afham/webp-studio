import type { Metadata } from "next";
import Link from "next/link";
import WebpStudioWorkbench from "./components/WebpStudioWorkbench";

export const metadata: Metadata = {
  metadataBase: new URL("https://thewebpstudio.com"),
  title: "WebP Studio – Free Online Batch WebP Converter & Image Compressor",
  description:
    "Convert PNG, JPG, JPEG, AVIF, HEIC, TIFF, BMP, and GIF to WebP online for free. Unlimited batch conversion, zero server uploads, 100% private in-browser canvas compression, interactive split-slider preview, and instant ZIP export.",
  keywords: [
    // Primary High-Volume Terms
    "webp converter",
    "convert to webp",
    "png to webp",
    "jpg to webp",
    "jpeg to webp",
    "webp compressor",
    "image to webp",
    "batch webp converter",
    "bulk webp converter",
    "free webp converter",
    "online webp converter",
    "webp image converter",
    "best webp converter",
    "fastest webp converter",

    // Format Specific Conversions
    "convert png to webp transparent",
    "png transparent to webp",
    "convert jpg to webp online free",
    "jpeg to webp converter free",
    "avif to webp converter",
    "heic to webp converter",
    "tiff to webp converter",
    "bmp to webp converter",
    "gif to webp converter",
    "svg to webp converter",
    "raw to webp",
    "convert multiple images to webp",
    "bulk image converter to webp",

    // Feature & Technical Modifiers
    "client side webp converter",
    "offline webp converter",
    "private image converter zero upload",
    "browser based image compression",
    "lossless webp conversion",
    "lossy webp compression tool",
    "webp split slider preview",
    "webp quality optimizer",
    "bulk image compressor zip download",
    "unlimited webp converter without limits",
    "webp file size reducer",
    "photo to webp",
    "picture to webp",
    "compress webp online",
    "shrink image file size",
    "image quantization tool",
    "alpha channel preservation",

    // Performance, Speed & SEO Terms
    "core web vitals image optimization",
    "improve largest contentful paint lcp",
    "pagespeed insights image compressor",
    "reduce image payload size",
    "modern web image formats",
    "website image optimizer",
    "ecommerce image compressor",
    "shopify webp converter",
    "wordpress webp image optimizer",
    "seo image optimization tool",
  ],
  authors: [{ name: "WebP Studio Engine" }],
  creator: "WebP Studio",
  publisher: "WebP Studio",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "WebP Studio – 100% Private In-Browser Batch WebP Converter",
    description:
      "Batch convert PNG, JPG, and AVIF to WebP directly in your browser with zero server uploads, split-slider preview, and instant ZIP download.",
    url: "https://thewebpstudio.com",
    siteName: "WebP Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "WebP Studio Interactive Image Workbench",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP Studio – Free Online Batch WebP Converter",
    description:
      "Fast, unlimited, and private WebP image converter running entirely in your browser thread.",
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

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://thewebpstudio.com/#organization",
        name: "WebP Studio",
        url: "https://thewebpstudio.com",
        logo: "https://thewebpstudio.com/logo.svg",
        description:
          "Zero-upload client-side web image optimization, compression, and conversion tools.",
      },
      {
        "@type": "WebApplication",
        "@id": "https://thewebpstudio.com/#webapp",
        name: "WebP Studio",
        url: "https://thewebpstudio.com",
        applicationCategory: "MultimediaApplication",
        operatingSystem:
          "All modern web browsers (Chrome, Safari, Firefox, Edge, Opera, Chromium)",
        browserRequirements: "Requires JavaScript and HTML5 Canvas API support",
        softwareVersion: "2.4.0",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        featureList: [
          "Zero-upload client-side HTML5 Canvas encoding",
          "Parallel multi-file batch conversion",
          "Real-time split comparison slider with 1x/2x/3x zoom inspection",
          "Custom bitrate quantization and Lossless WebP encoding",
          "Alpha transparency preservation and solid color matte fill",
          "Geometric rotation (90°, 180°, 270°) and horizontal/vertical flips",
          "CSS image filters including brightness, contrast, and grayscale",
          "Dynamic filename patterning and bulk ZIP archive packaging",
          "Unlimited file size and zero daily conversion caps",
        ],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://thewebpstudio.com/#breadcrumbs",
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
            name: "WebP Converter Workbench",
            item: "https://thewebpstudio.com/#workbench",
          },
        ],
      },
      {
        "@type": "HowTo",
        "@id": "https://thewebpstudio.com/#howto",
        name: "How to Convert and Compress Images to WebP Format",
        description:
          "Step-by-step guide to converting PNG, JPG, and AVIF images to modern WebP format using WebP Studio.",
        step: [
          {
            "@type": "HowToStep",
            position: 1,
            name: "Upload Images to Converter",
            text: "Drag and drop PNG, JPG, JPEG, AVIF, HEIC, TIFF, or BMP files into the upload dropzone, or click the file picker to select files from your computer.",
          },
          {
            "@type": "HowToStep",
            position: 2,
            name: "Choose Compression Preset & Bitrate",
            text: "Select Balanced (80%), Ultra Small (50%), or Lossless preset. Adjust the precision quality slider to achieve your target file size.",
          },
          {
            "@type": "HowToStep",
            position: 3,
            name: "Adjust Dimensions & Orientation",
            text: "Optionally scale maximum width and height, apply standard dimension presets (1080p FHD, Social OG 1200x630, Square), or adjust image orientation and color filters.",
          },
          {
            "@type": "HowToStep",
            position: 4,
            name: "Inspect with Split-Screen Slider",
            text: "Drag the split slider across the preview stage and toggle 2x/3x zoom inspection to verify visual clarity and artifact reduction before exporting.",
          },
          {
            "@type": "HowToStep",
            position: 5,
            name: "Export Single Asset or Batch ZIP",
            text: "Download individual WebP files directly or click the Zip button to generate and export all converted assets in an organized ZIP file.",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://thewebpstudio.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is WebP and how does it compare to JPEG and PNG?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "WebP is a modern raster image format created by Google that provides superior lossy and lossless compression for web images. WebP lossless images are on average 26% smaller than PNGs, and WebP lossy images are 25% to 34% smaller than comparable JPEGs at equivalent SSIM visual quality, while fully supporting 8-bit alpha transparency.",
            },
          },
          {
            "@type": "Question",
            name: "Are my images uploaded or stored on any server?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. WebP Studio is an entirely client-side web application. Every decoding, canvas rendering, filter matrix, and WebP encoding operation runs locally in your browser memory via the HTML5 Canvas API and WebAssembly. Your files never leave your computer or touch remote cloud servers.",
            },
          },
          {
            "@type": "Question",
            name: "How does converting to WebP improve Core Web Vitals and Google rankings?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Images make up over 60% of total page weight on modern websites. Converting legacy assets to WebP drastically reduces image payload, resulting in faster Largest Contentful Paint (LCP), lower Cumulative Layout Shift (CLS), and reduced Time to First Byte (TTFB). Google search algorithms prioritize fast-loading sites, giving WebP-optimized pages a significant SEO advantage.",
            },
          },
          {
            "@type": "Question",
            name: "Can I convert transparent PNGs without losing background transparency?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. WebP natively supports full 8-bit alpha channel transparency. WebP Studio preserves full transparency by default, or allows you to matte the image against custom solid background hex colors if desired.",
            },
          },
          {
            "@type": "Question",
            name: "Why does Lossless WebP sometimes yield a larger file on JPEGs?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "JPEGs already contain irreversible compression artifacts and noise. When encoding with Lossless WebP, the encoder is forced to mathematically preserve every noise artifact as deliberate image data, increasing file size. For photographic imagery, always use the Balanced (80%) or Ultra (50%) lossy presets.",
            },
          },
          {
            "@type": "Question",
            name: "Is there any batch conversion limit or file size limit?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. WebP Studio is free and unrestricted. You can convert dozens of files simultaneously without account registration, rate limits, daily caps, or hidden paywalls.",
            },
          },
          {
            "@type": "Question",
            name: "Can WebP files be used on WordPress, Shopify, and Webflow?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. WordPress 5.8+, Shopify, Webflow, Squarespace, and Wix natively support WebP uploads without requiring external plugins or third-party conversion add-ons.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Main Interactive App Workstation (Above the fold) */}
      <main id="workbench" className="w-full">
        <WebpStudioWorkbench />
      </main>

      {/* Exhaustive Crawlable SEO & Keyword Architecture (Below the fold) */}
      <footer className="w-full bg-white border-t border-slate-200 text-slate-700 pb-16 pt-8 px-4 sm:px-8 font-sans">
        <div className="max-w-5xl mx-auto space-y-16 ">
          {/* Top Product Hunt Hero Badge */}
          <div className="flex justify-center mb-6">
            <a
              href="https://www.producthunt.com/products/webp-studio?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-webp-studio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1225131&theme=light&t=1787029036706"
                alt="WebP Studio - 100% private, client-side batch WebP converter & compressor | Product Hunt"
                width={250}
                height={54}
                className="w-[210px] sm:w-[250px] h-auto drop-shadow-xs"
              />
            </a>
          </div>
          {/* Main Title & Hero SEO Text */}
          <section className="space-y-4">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
              Free Batch WebP Converter &amp; In-Browser Image Compressor
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              <strong>WebP Studio</strong> is a free, high-speed, client-side
              batch image conversion and compression platform designed to
              convert{" "}
              <strong>PNG, JPG, JPEG, AVIF, HEIC, TIFF, BMP, and GIF</strong>{" "}
              files into high-performance <strong>WebP</strong> images.
              Operating entirely in your local browser thread, WebP Studio
              delivers unlimited batch processing with{" "}
              <strong>zero server uploads</strong>, total data privacy,
              real-time split-screen visual comparison, lossless alpha channel
              preservation, custom dimension resizing, and instant bulk ZIP
              archive downloads.
            </p>
          </section>

          {/* Internal Cross-Linking: Programmatic Format Converters & Tools */}
          <section className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/80 pb-3">
              <div>
                <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                  Direct Format Converters &amp; Compression Tools
                </h2>
                <p className="text-xs text-slate-500">
                  Targeted conversion pipelines optimized for specific raster
                  workflows and modern web formats.
                </p>
              </div>
              <span className="text-[11px] font-mono text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-100 self-start sm:self-auto">
                100% In-Browser
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 text-xs">
              <Link
                href="/png-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>PNG to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Preserve alpha transparency
                </span>
              </Link>

              <Link
                href="/jpg-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>JPG to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Lossy photo compression
                </span>
              </Link>

              <Link
                href="/avif-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>AVIF to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Universal web fallback
                </span>
              </Link>

              {/* <Link
                href="/heic-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>HEIC to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Apple iPhone photo exports
                </span>
              </Link> */}

              <Link
                href="/tiff-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>TIFF to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Heavy print &amp; scan reduction
                </span>
              </Link>

              <Link
                href="/bmp-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>BMP to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Raw bitmap transcode
                </span>
              </Link>

              <Link
                href="/gif-to-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>GIF to WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  24-bit true color upgrade
                </span>
              </Link>

              <Link
                href="/compress-webp"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>Compress WebP</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Reduce existing WebP MB
                </span>
              </Link>

              <Link
                href="/batch-webp-converter"
                className="group p-3 rounded-xl bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 transition flex flex-col justify-between sm:col-span-2 lg:col-span-4"
              >
                <div className="flex items-center justify-between font-bold text-slate-900 group-hover:text-indigo-700">
                  <span>Bulk &amp; Batch WebP Converter (Multi-File ZIP)</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 font-mono text-xs">
                    →
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 mt-1">
                  Parallel client-side processing with instant bulk ZIP archive
                  download
                </span>
              </Link>
            </div>
          </section>

          {/* Format-Specific Conversion Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Supported Image Conversion Pathways
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-indigo-600">
                  PNG to WebP Converter
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Convert transparent PNG graphics, logos, app icons, and
                  illustrations into WebP while preserving full 8-bit alpha
                  transparency with{" "}
                  <strong>60% to 85% file size reduction</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-indigo-600">
                  JPG / JPEG to WebP Compressor
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Optimize photographic JPEGs for high-speed web delivery.
                  Achieve <strong>25% to 35% smaller file sizes</strong> than
                  standard JPEG at equivalent structural similarity (SSIM)
                  visual quality.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-indigo-600">
                  AVIF to WebP Transcoder
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Convert complex AVIF assets into universally supported WebP
                  format for seamless cross-browser compatibility across legacy
                  operating systems, mobile apps, and older browsers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-indigo-600">
                  HEIC / HEIF to WebP Converter
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Convert Apple iPhone high-efficiency camera captures (HEIC)
                  into lightweight WebP images ready for immediate publishing on
                  web stores, blogs, and social platforms.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-indigo-600">
                  TIFF &amp; BMP to WebP Compressor
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Compress heavyweight uncompressed desktop scans, print media,
                  and raw bitmap graphics into compact, web-optimized raster
                  formats with zero payload bloat.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h3 className="font-bold text-sm text-indigo-600">
                  GIF to WebP Converter
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Transcode static GIF images and palettes into modern 24-bit
                  true color WebP files, eliminating 256-color dithering
                  artifacts and huge file sizes.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Format Benchmark Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              WebP vs. Traditional Raster Image Formats Benchmark
            </h2>
            <p className="text-xs text-slate-500">
              Detailed breakdown of compression algorithms, alpha transparency,
              animation support, and web performance metrics.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Image Format</th>
                    <th className="p-3">Compression Type</th>
                    <th className="p-3">Alpha Transparency</th>
                    <th className="p-3">Animation</th>
                    <th className="p-3">Average Size Savings</th>
                    <th className="p-3">Browser Support</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-bold text-indigo-600">WebP</td>
                    <td className="p-3">Lossy (VP8) &amp; Lossless (VP8L)</td>
                    <td className="p-3 font-semibold text-emerald-600">
                      Supported (8-bit)
                    </td>
                    <td className="p-3 font-semibold text-emerald-600">
                      Supported
                    </td>
                    <td className="p-3 font-bold text-emerald-600">
                      60% – 85% vs PNG / 30% vs JPG
                    </td>
                    <td className="p-3 text-slate-700">97.8% (Universal)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">
                      JPEG / JPG
                    </td>
                    <td className="p-3">Lossy (DCT)</td>
                    <td className="p-3 text-rose-500 font-medium">
                      Not Supported
                    </td>
                    <td className="p-3 text-rose-500 font-medium">
                      Not Supported
                    </td>
                    <td className="p-3 text-slate-500">Baseline</td>
                    <td className="p-3 text-slate-700">100%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">PNG</td>
                    <td className="p-3">Lossless (DEFLATE / LZ77)</td>
                    <td className="p-3 font-semibold text-emerald-600">
                      Supported (24-bit)
                    </td>
                    <td className="p-3 text-rose-500 font-medium">
                      APNG (Limited)
                    </td>
                    <td className="p-3 text-rose-500 font-medium">
                      +150% to +400% Payload
                    </td>
                    <td className="p-3 text-slate-700">100%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">AVIF</td>
                    <td className="p-3">
                      Lossy &amp; Lossless (AV1 Video Frame)
                    </td>
                    <td className="p-3 font-semibold text-emerald-600">
                      Supported
                    </td>
                    <td className="p-3 font-semibold text-emerald-600">
                      Supported
                    </td>
                    <td className="p-3">70% – 90% vs PNG</td>
                    <td className="p-3 text-slate-700">92.4% (Slow Encode)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80 transition">
                    <td className="p-3 font-semibold text-slate-900">GIF</td>
                    <td className="p-3">Lossless (LZW 256 Colors)</td>
                    <td className="p-3 text-amber-600">1-bit Binary Only</td>
                    <td className="p-3 font-semibold text-emerald-600">
                      Supported
                    </td>
                    <td className="p-3 text-rose-500 font-medium">
                      Extreme Bloat
                    </td>
                    <td className="p-3 text-slate-700">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Optimization Features & Presets Index */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Compression Modes, Preset Bitrates, and Tuning Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  ⚡
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  Balanced Preset (80% Quality)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The industry-standard optimization preset for website heroes,
                  product catalog images, and blog illustrations. Delivers{" "}
                  <strong>70% file size reduction</strong> with zero visible
                  degradation on retina screens.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  🗜️
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  Ultra Small Preset (50% Quality)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Aggressive quantization engineered for thumbnail galleries,
                  background textures, mobile-first web pages, and
                  bandwidth-constrained network environments.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                  🎯
                </div>
                <h3 className="font-bold text-base text-slate-900">
                  Lossless 1:1 Preservation
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mathematically reconstructs pixel values without discarding
                  color data. The optimal mode for high-contrast UI screenshots,
                  vector art exports, logos, and medical/scientific diagrams.
                </p>
              </div>
            </div>
          </section>

          {/* Core Web Vitals & Search Engine Rankings */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              How WebP Image Optimization Directly Impacts SEO &amp; Core Web
              Vitals
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-sm text-slate-900">
                  Largest Contentful Paint (LCP) Optimization
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  The Largest Contentful Paint metric measures when the largest
                  visible element (typically a hero banner or featured product
                  picture) finishes rendering. Shrinking 3MB PNG files into
                  200KB WebP images reduces load time by up to 90%, helping
                  sites easily achieve the Google-recommended{" "}
                  <strong>sub-2.5s LCP score</strong>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-sm text-slate-900">
                  Bandwidth &amp; Crawl Budget Efficiency
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Googlebot allocates a finite crawl budget to every domain
                  based on server latency. Lightweight WebP assets reduce server
                  response times and Time to First Byte (TTFB), allowing search
                  crawlers to index more pages per session and boosting overall
                  website visibility.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-sm text-slate-900">
                  Lower Mobile Bounce Rates
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Mobile users on cellular networks experience high drop-off
                  rates on image-heavy pages. Serving compressed WebP images
                  accelerates initial rendering, driving higher engagement,
                  longer session durations, and improved conversion rates on
                  e-commerce storefronts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-sm text-slate-900">
                  100% Client-Side Privacy Guarantee
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Unlike traditional cloud converters that upload your photos to
                  remote storage buckets, WebP Studio executes all encoding
                  in-memory inside your local browser tab. No files are
                  transmitted over the wire, stored on cloud servers, or indexed
                  by third parties.
                </p>
              </div>
            </div>
          </section>

          {/* Step-by-Step Educational How-To Section */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Step-by-Step: How to Convert Images to WebP Online
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50 space-y-2">
                <span className="font-mono font-bold text-indigo-600">
                  STEP 01
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  Upload Image Files
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Drag and drop PNG, JPG, AVIF, TIFF, or BMP files directly onto
                  the stage or queue.
                </p>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50 space-y-2">
                <span className="font-mono font-bold text-indigo-600">
                  STEP 02
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  Select Quality Preset
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Choose Balanced (80%), Ultra Small (50%), or Lossless mode for
                  pixel-perfect graphics.
                </p>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50 space-y-2">
                <span className="font-mono font-bold text-indigo-600">
                  STEP 03
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  Inspect Split Slider
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Compare original quality against converted WebP output with
                  1x, 2x, and 3x zoom tools.
                </p>
              </div>
              <div className="border border-slate-200 p-4 rounded-xl bg-slate-50 space-y-2">
                <span className="font-mono font-bold text-indigo-600">
                  STEP 04
                </span>
                <h3 className="font-bold text-slate-900 text-sm">
                  Download ZIP Batch
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Export single assets or download all converted images in an
                  organized ZIP file.
                </p>
              </div>
            </div>
          </section>

          {/* Browser & OS Compatibility Matrix */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              WebP Browser &amp; CMS Compatibility Overview
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">
                  Google Chrome
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Supported (v32+)
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">
                  Apple Safari
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Supported (iOS 14+ / macOS)
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">
                  Mozilla Firefox
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Supported (v65+)
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">
                  Microsoft Edge
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Supported (v18+)
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">
                  WordPress
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Native Support (v5.8+)
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">Shopify</span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Native Support
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">Webflow</span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Native Support
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                <span className="font-bold text-slate-900 block">
                  Squarespace
                </span>
                <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                  Native Support
                </span>
              </div>
            </div>
          </section>

          {/* Deep Comprehensive FAQ Accordion */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <div className="space-y-3">
              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  What is the difference between Lossy and Lossless WebP
                  compression?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  <strong>Lossy WebP</strong> uses predictive coding based on
                  the VP8 video keyframe codec to approximate visual data,
                  discarding imperceptible color differences. This delivers 60%
                  to 85% payload savings on photographs.{" "}
                  <strong>Lossless WebP (VP8L)</strong> reconstructs pixel
                  values mathematically using spatial transforms and color
                  entropy coding, making it ideal for UI icons, graphics, and
                  transparent overlays where zero blurriness is permitted.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Can I convert PNG images with transparent backgrounds to WebP?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Yes, absolutely. WebP includes full support for 8-bit alpha
                  channel transparency in both lossy and lossless modes.
                  Transparent PNGs converted to WebP maintain clean, crisp edges
                  without halos or jagged borders, usually at a 70% smaller file
                  size than standard 24-bit PNGs.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Are there any file size limits or usage restrictions?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  WebP Studio imposes no artificial limitations. You can convert
                  batches of dozens or hundreds of images at once. The only
                  physical boundary is your computer&apos;s available RAM
                  memory.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Why does Lossless WebP sometimes increase file size when
                  converting a JPEG?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  JPEGs already contain lossy compression noise (ringing
                  artifacts and DCT block boundaries). When you run Lossless
                  WebP over a JPEG, the encoder must store every single JPEG
                  compression defect as intentional, high-frequency image data,
                  increasing file size. To compress JPEGs properly, always use
                  the <strong>Balanced</strong> (80%) or <strong>Ultra</strong>{" "}
                  (50%) lossy presets.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  How does WebP improve Largest Contentful Paint (LCP) in Core
                  Web Vitals?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  The Largest Contentful Paint metric measures when the largest
                  visual element (often a hero image or banner) finishes
                  rendering in the viewport. Converting 2MB PNG or JPEG heroes
                  into 180KB WebP files cuts download time by 80% to 90%,
                  helping websites easily achieve the sub-2.5 second
                  &quot;Good&quot; LCP threshold required for top Google search
                  rankings.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Which web browsers support WebP format?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  WebP is supported natively across Google Chrome, Apple Safari
                  (iOS 14+ and macOS Big Sur+), Mozilla Firefox, Microsoft Edge,
                  Opera, and Android Chromium browsers, representing over 97.8%
                  of global internet traffic.
                </p>
              </details>

              <details className="p-4 border border-slate-200 rounded-xl bg-slate-50 group">
                <summary className="font-semibold text-xs cursor-pointer list-none flex justify-between items-center text-slate-900">
                  Can I use WebP Studio completely offline without an internet
                  connection?
                  <span className="text-slate-400 group-open:rotate-180 transition">
                    ▾
                  </span>
                </summary>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Yes. Once the page is loaded into your browser cache, all
                  image processing occurs entirely within your local device
                  memory using JavaScript and HTML5 Canvas APIs. No active
                  internet connection is required to convert, resize, or package
                  files into ZIP archives.
                </p>
              </details>
            </div>
          </section>

          {/* Semantic Keyword Taxonomy & Topic Cloud */}
          <section className="space-y-3 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Popular Search Topics &amp; Related Tools
            </h3>
            <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Batch PNG to WebP Converter
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                JPEG to WebP Compressor Online
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Convert Transparent PNG to WebP
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Lossless WebP Optimization
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Client-Side Image Converter Zero Upload
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Core Web Vitals Image Reducer
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                AVIF to WebP Bulk Transcoder
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                HEIC to WebP Converter Free
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                TIFF to WebP Online
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                BMP to WebP Compressor
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                GIF to WebP Converter
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Shopify Image Optimizer WebP
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                WordPress WebP Converter
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Free Uncapped WebP Converter
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Unlimited Batch WebP Compression
              </span>
              <span className="bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200/80">
                Image Quantization &amp; Shrink Tool
              </span>
            </div>
          </section>

          {/* Footer Copyright & Navigation Links */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>
              © 2026 WebP Studio. Free Online Batch WebP Converter &amp; Image
              Optimizer.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-500">
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
              <span>•</span>
              <Link
                href="/contact"
                className="hover:text-indigo-600 hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
