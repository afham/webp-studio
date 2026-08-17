// lib/converters.ts

export interface ConverterConfig {
  slug: string;
  name: string;
  fromFormat: string;
  toFormat: string;
  badge: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroText: string;
  highlightText: string;
  keyBenefits: Array<{ title: string; desc: string; icon: string }>;
  technicalComparison: {
    title: string;
    description: string;
    originalLabel: string;
    webpLabel: string;
    metrics: Array<{
      feature: string;
      original: string;
      webp: string;
      verdict: string;
    }>;
  };
  deepDive: {
    heading: string;
    paragraphs: string[];
  };
  howToSteps: Array<{ title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const CONVERTERS: Record<string, ConverterConfig> = {
  "png-to-webp": {
    slug: "png-to-webp",
    name: "PNG to WebP",
    fromFormat: "PNG",
    toFormat: "WebP",
    badge: "Alpha Transparency Preserved",
    h1: "Convert PNG to WebP Online with Alpha Transparency",
    metaTitle: "PNG to WebP Converter – 100% Free, Private & Transparent",
    metaDescription:
      "Batch convert PNG images to WebP format directly in your browser. Preserves 8-bit alpha transparency with up to 85% file size reduction. Zero server uploads.",
    heroText:
      "Convert PNG graphics, transparent logos, application UI assets, and screenshots to modern WebP format. Retain pixel-crisp alpha transparency, eliminate color fringe halos, and slash payload weight by up to 85% with client-side browser encoding.",
    highlightText: "Preserve alpha transparency (60%–85% smaller)",
    keyBenefits: [
      {
        title: "Full 8-Bit Alpha Preservation",
        desc: "Retain smooth, semi-transparent gradients, glowing borders, and drop shadows without 1-bit jagged edges.",
        icon: "✨",
      },
      {
        title: "Up to 85% Payload Savings",
        desc: "Replace heavy 24-bit PNG files with ultra-compressed lossy or lossless WebP files ready for production.",
        icon: "📉",
      },
      {
        title: "Sub-2.5s LCP Scores",
        desc: "Speed up the rendering of hero logos, featured product cutouts, and iconography for higher Google rankings.",
        icon: "⚡",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: PNG vs. WebP",
      description:
        "How WebP dramatically outperforms legacy Portable Network Graphics in web delivery.",
      originalLabel: "PNG-24",
      webpLabel: "WebP (VP8 / VP8L)",
      metrics: [
        {
          feature: "Compression Codec",
          original: "DEFLATE / LZ77 (Lossless)",
          webp: "Predictive Block Transform",
          verdict: "WebP is 3x more compact",
        },
        {
          feature: "Alpha Transparency",
          original: "8-bit / 24-bit Truecolor",
          webp: "8-bit Alpha Channel",
          verdict: "Identical visual clarity",
        },
        {
          feature: "Photographic Payloads",
          original: "Extremely Heavy (2MB–8MB)",
          webp: "Ultra Compressed (150KB–400KB)",
          verdict: "WebP saves up to 85%",
        },
        {
          feature: "Decoding Performance",
          original: "Fast CPU Decode",
          webp: "Hardware Accelerated",
          verdict: "Equal rendering speed",
        },
      ],
    },
    deepDive: {
      heading:
        "Why Converting PNG to WebP is Essential for Modern Web Optimization",
      paragraphs: [
        "Portable Network Graphics (PNG) was introduced in 1996 to replace GIF with full truecolor support and lossless compression. However, PNG's DEFLATE algorithm was never designed for contemporary responsive web applications that serve dozens of high-density assets across mobile devices.",
        "WebP solves PNG bloat through predictive coding. For lossless mode (VP8L), it transforms image entropy using spatial predictions and color indexing, reducing PNG file sizes by an average of 26% to 45%. For photographic or non-critical UI cutouts, lossy WebP with alpha preservation reduces file sizes by up to 85% compared to raw PNG-24 with zero human-perceptible artifacting.",
      ],
    },
    howToSteps: [
      {
        title: "Upload PNG Files",
        desc: "Drag and drop PNG images into the workbench dropzone or browse files locally.",
      },
      {
        title: "Choose Preset or Quality",
        desc: "Select Lossless for UI icons/logos or Balanced (80%) for photographic cutouts.",
      },
      {
        title: "Verify Transparency on Slider",
        desc: "Use the split-screen slider and zoom tool to confirm flawless transparent edges.",
      },
      {
        title: "Export Single or Batch ZIP",
        desc: "Download individual WebP files or package all assets into an organized ZIP archive.",
      },
    ],
    faqs: [
      {
        question:
          "Does converting PNG to WebP preserve transparent backgrounds?",
        answer:
          "Yes. WebP natively supports 8-bit alpha channels in both lossy and lossless modes. All transparent pixels, soft gradients, and drop shadows remain crisp without color fringe.",
      },
      {
        question: "Should I use Lossy or Lossless WebP for PNGs?",
        answer:
          "Use Lossless WebP for UI graphics, app icons, vector exports, and crisp typography. For product photos or intricate illustrations with transparency, Balanced Lossy (80%) provides superior compression with imperceptible quality change.",
      },
      {
        question:
          "Are my PNG files uploaded to remote servers during conversion?",
        answer:
          "No. WebP Studio is 100% client-side. Every canvas manipulation and encoding routine runs inside your browser sandbox on your local CPU.",
      },
    ],
  },

  "jpg-to-webp": {
    slug: "jpg-to-webp",
    name: "JPG to WebP",
    fromFormat: "JPG / JPEG",
    toFormat: "WebP",
    badge: "Lossy Photo Compression",
    h1: "Convert JPG to WebP Online with High Fidelity",
    metaTitle: "JPG to WebP Converter – Fast, Batch & High Quality",
    metaDescription:
      "Compress and transcode JPG and JPEG photos to WebP. Save 25% to 35% more bandwidth than standard JPEG at equivalent structural similarity (SSIM).",
    heroText:
      "Optimize photographic JPEGs for blazing-fast web delivery. Achieve 25% to 35% smaller file sizes than standard JPEG at identical structural similarity (SSIM) visual quality, speeding up Largest Contentful Paint (LCP) and cutting bandwidth costs.",
    highlightText: "Lossy photo compression (25%–35% smaller)",
    keyBenefits: [
      {
        title: "25%–35% Smaller than JPG",
        desc: "Significantly outperform DCT JPEG compression without introducing visible blockiness or ringing artifacts.",
        icon: "📉",
      },
      {
        title: "Optimized Core Web Vitals",
        desc: "Deliver hero photography in under 150KB to pass Google PageSpeed Insights and mobile responsiveness benchmarks.",
        icon: "🚀",
      },
      {
        title: "Zero Quality Degradation",
        desc: "Maintain rich color dynamics, smooth skin tones, and high-frequency edge definition across high-DPI displays.",
        icon: "🎯",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: JPEG vs. WebP",
      description:
        "Why WebP's VP8 macroblock prediction algorithm consistently beats traditional JPEG DCT.",
      originalLabel: "JPEG / JPG",
      webpLabel: "WebP (Lossy VP8)",
      metrics: [
        {
          feature: "Compression Technique",
          original: "8x8 Discrete Cosine Transform",
          webp: "16x16 Predictive Macroblocks",
          verdict: "WebP avoids blocking artifacts",
        },
        {
          feature: "Color Quantization",
          original: "YCbCr Subsampling",
          webp: "Adaptive Chroma Quantization",
          verdict: "Sharper color boundaries",
        },
        {
          feature: "Average Payload",
          original: "1.2 MB – 3.5 MB",
          webp: "350 KB – 900 KB",
          verdict: "30%+ reduction",
        },
        {
          feature: "Browser Support",
          original: "100% (Universal)",
          webp: "97.8% (Chrome, Safari, Firefox, Edge)",
          verdict: "Production standard",
        },
      ],
    },
    deepDive: {
      heading: "Understanding the Compression Advantage: JPEG vs. WebP",
      paragraphs: [
        "JPEG has powered the web for decades, relying on 8x8 discrete cosine transforms (DCT) to discard high-frequency visual data. At aggressive compression rates, JPEG produces jarring block artifacts and color ringing around sharp edges.",
        "Lossy WebP builds on the VP8 video keyframe codec, breaking images into 16x16 macroblocks and predicting adjacent pixels from surrounding blocks. This intra-prediction technology produces smoother gradients, fewer ringing artifacts, and a 25% to 35% smaller payload at equivalent visual quality.",
      ],
    },
    howToSteps: [
      {
        title: "Select JPG/JPEG Files",
        desc: "Drag single photos or batch folders into the converter dropzone.",
      },
      {
        title: "Fine-Tune Quality (80% Recommended)",
        desc: "Use the Balanced preset (80%) for the ideal quality-to-filesize ratio.",
      },
      {
        title: "Verify with Split Slider",
        desc: "Compare original JPEG vs. WebP output in real time using 2x/3x zoom.",
      },
      {
        title: "Download Converted WebP",
        desc: "Save individual files directly or export all optimized assets in a ZIP.",
      },
    ],
    faqs: [
      {
        question:
          "Why should I convert JPG to WebP instead of compressing the JPG?",
        answer:
          "Re-compressing a JPEG causes compounding generational artifacts and blurry noise. WebP uses a more advanced macroblock prediction algorithm that preserves visual clarity at substantially lower bitrates.",
      },
      {
        question:
          "Why does Lossless WebP produce larger files than original JPEGs?",
        answer:
          "JPEGs already contain irreversible lossy compression noise. Lossless WebP treats that noise as intentional high-frequency pixel data and encodes it mathematically, resulting in a larger file. Always use lossy presets (Balanced or Ultra) for JPGs.",
      },
    ],
  },

  "avif-to-webp": {
    slug: "avif-to-webp",
    name: "AVIF to WebP",
    fromFormat: "AVIF",
    toFormat: "WebP",
    badge: "Universal Web Compatibility",
    h1: "Convert AVIF to WebP for Universal Web & App Support",
    metaTitle: "AVIF to WebP Converter – Free Batch In-Browser Transcoder",
    metaDescription:
      "Convert AVIF files to universally supported WebP format. Ensure 100% browser, mobile app, and CMS compatibility across legacy platforms.",
    heroText:
      "Transcode AVIF assets into universally supported WebP files. Overcome slow AVIF encoding bottlenecks, legacy browser rendering freezes, and CMS compatibility roadblocks across older iOS, Android, and desktop devices.",
    highlightText: "Universal web & CMS compatibility fallback",
    keyBenefits: [
      {
        title: "100% Universal Compatibility",
        desc: "Ensure every user on legacy mobile browsers, Safari versions, and third-party apps can view your imagery.",
        icon: "🌐",
      },
      {
        title: "Instant CMS Import",
        desc: "Bypass upload restrictions on legacy WordPress, Shopify, and Webflow instances that reject raw AVIF.",
        icon: "📦",
      },
      {
        title: "Faster Client-Side Decode",
        desc: "WebP requires up to 4x less CPU decoding power than complex AV1-based AVIF frames on mobile hardware.",
        icon: "⚡",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: AVIF vs. WebP",
      description:
        "Comparing AV1-based AVIF against universal WebP for cross-platform production deployments.",
      originalLabel: "AVIF (AV1)",
      webpLabel: "WebP (VP8)",
      metrics: [
        {
          feature: "Decoding Speed",
          original: "CPU-Intensive (Heavy on Mobile)",
          webp: "Instant Hardware Decode",
          verdict: "WebP avoids mobile lag",
        },
        {
          feature: "Legacy Browser Support",
          original: "Fails on iOS 15 & Older Platforms",
          webp: "97.8% Global Browser Support",
          verdict: "WebP is universally compatible",
        },
        {
          feature: "CMS & App Ecosystem",
          original: "Limited native support in tools",
          webp: "Native in WordPress, Shopify, Figma",
          verdict: "WebP integrates seamlessly",
        },
        {
          feature: "Visual Fidelity",
          original: "Exceptional at ultra-low bitrates",
          webp: "Excellent at balanced bitrates",
          verdict: "Both provide modern web compression",
        },
      ],
    },
    deepDive: {
      heading: "When and Why You Should Transcode AVIF to WebP",
      paragraphs: [
        "AVIF (AV1 Image File Format) offers high compression efficiency for static imagery, but its complex AV1 video frame architecture introduces significant decoding latency and battery consumption on older mobile hardware.",
        "Furthermore, many design suites, desktop image viewers, social media scrapers, and older CMS plugins fail to parse AVIF containers. Converting AVIF to WebP provides nearly identical web optimization while guaranteeing flawless rendering across 98%+ of global browsers and native operating systems.",
      ],
    },
    howToSteps: [
      {
        title: "Import AVIF Files",
        desc: "Drag and drop AVIF images into the workbench area.",
      },
      {
        title: "Configure Quality",
        desc: "Choose 80% to 85% to maintain visual parity with the original AVIF source.",
      },
      {
        title: "Inspect Split Preview",
        desc: "Verify color balance and sharpness before saving.",
      },
      {
        title: "Export WebP",
        desc: "Download converted files individually or as a single ZIP bundle.",
      },
    ],
    faqs: [
      {
        question: "Why should I convert AVIF to WebP?",
        answer:
          "While AVIF produces small files, it suffers from slower decoding times on mobile devices and lacks support in many desktop editors, email clients, and older operating systems. WebP offers universal compatibility.",
      },
      {
        question: "Will I lose image quality converting from AVIF to WebP?",
        answer:
          "By keeping the WebP quality slider at 85% or higher, the converted image will be virtually indistinguishable from the AVIF source while gaining broad compatibility.",
      },
    ],
  },

  "heic-to-webp": {
    slug: "heic-to-webp",
    name: "HEIC to WebP",
    fromFormat: "HEIC / HEIF",
    toFormat: "WebP",
    badge: "Apple iPhone Photo Transcoder",
    h1: "Convert Apple HEIC Photos to WebP for Fast Web Publishing",
    metaTitle: "HEIC to WebP Converter – Free Apple Photo Transcoder",
    metaDescription:
      "Batch convert Apple iPhone HEIC and HEIF photos to WebP format locally in your browser. Ready for instant web publishing and zero privacy leaks.",
    heroText:
      "Convert Apple iPhone high-efficiency camera captures (HEIC/HEIF) into lightweight WebP images ready for instant web publishing, online stores, blogs, and social platforms—without uploading private personal photos to any third-party cloud server.",
    highlightText: "Apple iPhone photo exports (Private & Fast)",
    keyBenefits: [
      {
        title: "100% Private In-Browser Conversion",
        desc: "Convert personal family photos, client portraits, and camera rolls without uploading a single byte to cloud servers.",
        icon: "🔒",
      },
      {
        title: "Direct Web & CMS Publishing",
        desc: "Turn incompatible iOS .heic files into native web assets supported by Shopify, WordPress, and all browsers.",
        icon: "🚀",
      },
      {
        title: "Parallel Batch Transcoding",
        desc: "Drop dozens of high-resolution iPhone photos and export them instantly in an organized ZIP file.",
        icon: "⚡",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: HEIC vs. WebP",
      description:
        "Why Apple's container format requires transcoding for the open web.",
      originalLabel: "HEIC (HEVC H.265)",
      webpLabel: "WebP (VP8)",
      metrics: [
        {
          feature: "Web Browser Support",
          original: "0% (Not supported by web standards)",
          webp: "97.8% (Universal Web Standard)",
          verdict: "HEIC cannot render on the web",
        },
        {
          feature: "Licensing & Royalties",
          original: "Proprietary MPEG LA / HEVC patents",
          webp: "Open Source & Royalty-Free",
          verdict: "WebP is open web native",
        },
        {
          feature: "File Size on Web",
          original: "Compact on iOS only",
          webp: "Lightweight across all platforms",
          verdict: "WebP enables fast web loading",
        },
        {
          feature: "CMS Compatibility",
          original: "Rejected by most upload dropzones",
          webp: "Native in all major CMS engines",
          verdict: "WebP uploads without errors",
        },
      ],
    },
    deepDive: {
      heading: "Bridging the Gap: Apple HEIC to Open-Standard WebP",
      paragraphs: [
        "Since iOS 11, Apple devices capture photos in HEIC (High Efficiency Image Container) format, utilizing HEVC (H.265) compression. While efficient on Apple silicon, HEIC is not supported as a native image format by modern web browsers due to complex patent licensing restrictions.",
        "WebP Studio decodes HEIC containers directly within your browser thread and re-encodes them into royalty-free WebP images, allowing photographers, store owners, and creators to take mobile captures straight to web production in seconds.",
      ],
    },
    howToSteps: [
      {
        title: "Drop Apple HEIC Photos",
        desc: "Select or drag .heic/.heif photos from your iPhone or Mac.",
      },
      {
        title: "Choose Target Bitrate",
        desc: "Select Balanced (80%) for web galleries or Lossless for fine art prints.",
      },
      {
        title: "Inspect High-DPI Output",
        desc: "Verify sharpness and color fidelity using 2x/3x split-screen zoom.",
      },
      {
        title: "Export ZIP Archive",
        desc: "Download your converted WebP assets instantly.",
      },
    ],
    faqs: [
      {
        question: "Can web browsers display HEIC files directly?",
        answer:
          "No. No major web browser natively renders HEIC images due to proprietary licensing. You must convert HEIC files to WebP or JPEG for web publishing.",
      },
      {
        question: "Are my private personal photos kept secure?",
        answer:
          "Yes. WebP Studio works entirely within your browser memory. Your images are never uploaded to any remote server or third-party database.",
      },
    ],
  },

  "tiff-to-webp": {
    slug: "tiff-to-webp",
    name: "TIFF to WebP",
    fromFormat: "TIFF / TIF",
    toFormat: "WebP",
    badge: "Heavy Print & Scan Reduction",
    h1: "Convert TIFF to WebP – Compress Heavy Scans & Print Media",
    metaTitle: "TIFF to WebP Converter – Compress Heavy Scans Online",
    metaDescription:
      "Convert heavy TIFF and TIF print files, archival scans, and raw photos into compact WebP images. Shrink 50MB files down to 500KB with zero upload wait.",
    heroText:
      "Compress heavyweight desktop scans, commercial print assets, and raw uncompressed TIFF graphics into compact, web-optimized WebP files. Reduce 50MB+ print files down to under 500KB with total local privacy.",
    highlightText: "Heavy print & scan reduction (90%+ size reduction)",
    keyBenefits: [
      {
        title: "90%+ File Size Reduction",
        desc: "Transform massive 30MB–80MB uncompressed TIFF scans into lightweight web-ready WebP files under 1MB.",
        icon: "📉",
      },
      {
        title: "Retain High Dynamic Range",
        desc: "Preserve fine shadow details, line art nuances, and scan fidelity for digital archives and portfolios.",
        icon: "🎨",
      },
      {
        title: "No Server Upload Timeouts",
        desc: "Convert massive multi-megabyte files locally without hitting cloud upload size limits or timeouts.",
        icon: "⚡",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: TIFF vs. WebP",
      description:
        "How WebP transforms uncompressed desktop print graphics for high-speed online consumption.",
      originalLabel: "TIFF (Tagged Image File)",
      webpLabel: "WebP",
      metrics: [
        {
          feature: "Typical File Size",
          original: "20 MB – 100 MB+ (Massive)",
          webp: "200 KB – 1.5 MB",
          verdict: "Up to 95% bandwidth savings",
        },
        {
          feature: "Web Browser Support",
          original: "0% (Cannot render in HTML)",
          webp: "97.8% (Universal)",
          verdict: "WebP is built for web delivery",
        },
        {
          feature: "Compression Type",
          original: "Uncompressed or Basic LZW",
          webp: "Advanced VP8 / VP8L",
          verdict: "WebP is modern and efficient",
        },
      ],
    },
    deepDive: {
      heading: "Optimizing Archival Scans and Print Files for the Web",
      paragraphs: [
        "TIFF (Tagged Image File Format) is the gold standard for print production, medical scanning, and archival preservation. However, its uncompressed or LZW-encoded architecture produces files that are far too large for web hosting.",
        "WebP Studio bridges desktop publishing and modern web development by reading TIFF layers and encoding them into compact WebP images with custom dimension downscaling, cutting page weight while preserving visual sharpness.",
      ],
    },
    howToSteps: [
      {
        title: "Select TIFF Files",
        desc: "Drag uncompressed TIFF or TIF assets into the upload zone.",
      },
      {
        title: "Set Dimensions & Quality",
        desc: "Optionally downscale resolution to 1080p/4K and select your quality preset.",
      },
      {
        title: "Review Detail on Slider",
        desc: "Check line art clarity and high-frequency textures with 2x zoom.",
      },
      {
        title: "Export WebP Assets",
        desc: "Download converted files directly or as a ZIP archive.",
      },
    ],
    faqs: [
      {
        question: "Can I display TIFF images on my website?",
        answer:
          "No. Web browsers do not support TIFF files due to their massive size and lack of native decoding engines. They must be converted to WebP for web delivery.",
      },
      {
        question: "Will converting TIFF to WebP destroy fine details?",
        answer:
          "Using Lossless WebP or Balanced Lossy at 85%+ quality preserves high-frequency textures, text sharpness, and fine scan lines while cutting file size by 90%+.",
      },
    ],
  },

  "bmp-to-webp": {
    slug: "bmp-to-webp",
    name: "BMP to WebP",
    fromFormat: "BMP",
    toFormat: "WebP",
    badge: "Raw Bitmap Transcoder",
    h1: "Convert BMP to WebP Online – Shrink Raw Bitmaps by 95%",
    metaTitle: "BMP to WebP Converter – Free Batch Bitmap Compressor",
    metaDescription:
      "Transcode uncompressed Windows BMP bitmap images into lightweight WebP format. Reduce file sizes by up to 95% with zero server uploads.",
    heroText:
      "Transcode uncompressed Windows bitmap (BMP) files into ultra-compact, modern WebP images. Eliminate bloated raw pixel arrays and shrink file sizes by up to 95% directly in your browser.",
    highlightText: "Raw bitmap transcode (95% size reduction)",
    keyBenefits: [
      {
        title: "95% Immediate Size Drop",
        desc: "Convert uncompressed BMP pixel matrices into compact predictive bitstreams ready for instant loading.",
        icon: "📉",
      },
      {
        title: "Modern Web Readiness",
        desc: "Replace legacy Windows bitmap graphics with modern WebP files that load instantly on all browsers.",
        icon: "🌐",
      },
      {
        title: "Batch Transcoding",
        desc: "Convert entire directories of legacy BMP assets in a single parallel operation.",
        icon: "⚡",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: BMP vs. WebP",
      description:
        "Why raw pixel arrays must be converted to modern compressed formats.",
      originalLabel: "BMP (Bitmap)",
      webpLabel: "WebP",
      metrics: [
        {
          feature: "Compression",
          original: "None (Raw uncompressed pixels)",
          webp: "Predictive Lossy / Lossless",
          verdict: "WebP saves up to 95% space",
        },
        {
          feature: "Web Usability",
          original: "Extremely Slow & Bandwidth Heavy",
          webp: "Optimized for Instant Page Loads",
          verdict: "WebP improves Core Web Vitals",
        },
        {
          feature: "Payload Size (1080p)",
          original: "~6.2 MB per image",
          webp: "~180 KB per image",
          verdict: "Massive speed improvement",
        },
      ],
    },
    deepDive: {
      heading: "Eliminating Legacy BMP Overhead with WebP",
      paragraphs: [
        "Bitmap (BMP) files store every single pixel as uncompressed color byte arrays. While simple for early Windows operating systems to display, serving BMP files on modern websites wastes server bandwidth and leads to poor Google PageSpeed scores.",
        "Converting BMP to WebP applies modern entropy coding and spatial predictive transforms, reducing asset payloads from megabytes down to kilobytes while preserving full color depth.",
      ],
    },
    howToSteps: [
      {
        title: "Upload BMP Images",
        desc: "Select legacy BMP assets from your local machine.",
      },
      {
        title: "Select Preset",
        desc: "Choose Balanced (80%) for photos or Lossless for UI diagrams.",
      },
      {
        title: "Inspect Real-Time Comparison",
        desc: "Slide across the preview stage to verify visual parity.",
      },
      {
        title: "Download WebP",
        desc: "Export your compressed WebP files immediately.",
      },
    ],
    faqs: [
      {
        question: "Why are BMP files so large compared to WebP?",
        answer:
          "BMP files do not use compression—every pixel is stored as raw data. WebP uses predictive encoding algorithms to dramatically compress images without noticeable visual loss.",
      },
    ],
  },

  "gif-to-webp": {
    slug: "gif-to-webp",
    name: "GIF to WebP",
    fromFormat: "GIF",
    toFormat: "WebP",
    badge: "24-Bit True Color Upgrade",
    h1: "Convert GIF to WebP – Upgrade to 24-Bit True Color",
    metaTitle: "GIF to WebP Converter – 24-Bit True Color & Smaller Size",
    metaDescription:
      "Transcode static GIF images into modern WebP format. Eliminate 256-color dithering artifacts and reduce file sizes with zero server uploads.",
    heroText:
      "Transcode static GIF graphics and palettes into modern 24-bit true color WebP files. Eliminate restrictive 256-color dithering artifacts, banding, and excessive file sizes with client-side canvas compression.",
    highlightText: "24-bit true color upgrade (No 256-color limits)",
    keyBenefits: [
      {
        title: "24-Bit True Color Depth",
        desc: "Break free from the 256-color limit of GIF for smoother gradients and richer tones.",
        icon: "🎨",
      },
      {
        title: "Smooth Alpha Gradients",
        desc: "Upgrade from 1-bit jagged binary transparency to smooth 8-bit alpha blending.",
        icon: "✨",
      },
      {
        title: "60%+ Payload Reduction",
        desc: "Achieve superior compression compared to outdated LZW algorithms.",
        icon: "📉",
      },
    ],
    technicalComparison: {
      title: "Technical Comparison: GIF vs. WebP",
      description:
        "Why static WebP completely outperforms legacy Graphics Interchange Format.",
      originalLabel: "GIF (1987 Standard)",
      webpLabel: "WebP",
      metrics: [
        {
          feature: "Color Palette Limit",
          original: "8-bit (Max 256 indexed colors)",
          webp: "24-bit Truecolor (16.7M colors)",
          verdict: "No color banding or dithering",
        },
        {
          feature: "Transparency Model",
          original: "1-bit (On/Off only, jagged)",
          webp: "8-bit Smooth Alpha Channel",
          verdict: "Clean edges with no halos",
        },
        {
          feature: "Compression Codec",
          original: "LZW (Outdated table compression)",
          webp: "VP8 / VP8L Predictive",
          verdict: "60%+ smaller file sizes",
        },
      ],
    },
    deepDive: {
      heading: "Upgrading from 1980s GIF Palettes to Modern WebP",
      paragraphs: [
        "Created in 1987, GIF relies on an indexed palette of at most 256 colors. When converting continuous-tone photographs or smooth gradients into GIF, the format introduces noisy dithering patterns and color banding.",
        "Converting static GIFs into WebP restores full 24-bit color fidelity (16.7 million colors) and smooth 8-bit alpha transparency, all while significantly reducing file sizes compared to legacy LZW compression.",
      ],
    },
    howToSteps: [
      {
        title: "Select GIF Assets",
        desc: "Drag and drop static GIF graphics onto the converter stage.",
      },
      {
        title: "Choose Compression Mode",
        desc: "Select Lossless for UI icons or Balanced for colorful graphics.",
      },
      {
        title: "Inspect Color Quality",
        desc: "Compare the original dithered GIF with the smooth 24-bit WebP output.",
      },
      {
        title: "Export WebP",
        desc: "Download converted assets with one click.",
      },
    ],
    faqs: [
      {
        question: "Does WebP support transparent backgrounds better than GIF?",
        answer:
          "Yes. GIF only supports 1-bit binary transparency (pixels are either 100% visible or 100% invisible), which causes jagged edges. WebP supports 8-bit alpha transparency for smooth, blended edges.",
      },
    ],
  },

  "compress-webp": {
    slug: "compress-webp",
    name: "Compress WebP",
    fromFormat: "WebP",
    toFormat: "WebP",
    badge: "Reduce Existing WebP MB",
    h1: "Compress & Optimize WebP Images Online",
    metaTitle: "Compress WebP Online – Reduce WebP Size with Split Preview",
    metaDescription:
      "Shrink existing WebP images without noticeable quality loss. Fine-tune bitrate quality, resize dimensions, and export in bulk with zero server uploads.",
    heroText:
      "Re-quantize, downscale, and compress existing WebP files to pass Google PageSpeed benchmarks. Squeeze extra bandwidth savings out of oversized WebP images with interactive split-slider inspection and instant ZIP downloads.",
    highlightText: "Reduce existing WebP MB (Interactive split slider)",
    keyBenefits: [
      {
        title: "Targeted Bitrate Quantization",
        desc: "Dial in the exact quality slider percentage to meet strict target kilobyte thresholds.",
        icon: "🎛️",
      },
      {
        title: "Split-Screen Visual Inspection",
        desc: "Examine fine details with 1x, 2x, and 3x zoom before downloading to ensure zero visible artifacts.",
        icon: "🔍",
      },
      {
        title: "Dynamic Dimension Scaling",
        desc: "Downscale 4K images to standard 1080p or social OG 1200x630 dimensions in one step.",
        icon: "📐",
      },
    ],
    technicalComparison: {
      title: "Optimization Modes: Balanced vs. Ultra Small",
      description:
        "Finding the sweet spot between file size reduction and visual fidelity.",
      originalLabel: "Original WebP",
      webpLabel: "Re-Quantized WebP",
      metrics: [
        {
          feature: "Balanced Preset (80%)",
          original: "Unoptimized WebP (1.2 MB)",
          webp: "Optimized WebP (350 KB)",
          verdict: "70% reduction with zero visible loss",
        },
        {
          feature: "Ultra Preset (50%)",
          original: "Unoptimized WebP (1.2 MB)",
          webp: "Ultra Small WebP (120 KB)",
          verdict: "90% reduction for thumbnails & mobile",
        },
        {
          feature: "Dimension Scaling",
          original: "Original 4000x3000 Canvas",
          webp: "Responsive 1920x1080 Canvas",
          verdict: "Cuts redundant pixel payloads",
        },
      ],
    },
    deepDive: {
      heading: "How to Re-Compress WebP Files for Peak Performance",
      paragraphs: [
        "Not all WebP files are optimized. Many automated CMS plugins and export tools save WebP at 100% quality or lossless mode by default, creating unnecessarily large 2MB–5MB files.",
        "By applying custom quantization between 75% and 82%, you can safely remove invisible high-frequency data, cutting file size by 50% to 75% without any perceptible drop in visual quality on retina screens.",
      ],
    },
    howToSteps: [
      {
        title: "Upload Existing WebP",
        desc: "Drag and drop your oversized WebP files into the workspace.",
      },
      {
        title: "Adjust Quality Slider",
        desc: "Slide quality between 50% and 85% to reach your target file size.",
      },
      {
        title: "Inspect Split Preview",
        desc: "Toggle 2x/3x zoom to confirm that details remain sharp.",
      },
      {
        title: "Download Optimized Files",
        desc: "Export individual compressed files or a complete ZIP archive.",
      },
    ],
    faqs: [
      {
        question: "Can you re-compress a WebP file without ruining quality?",
        answer:
          "Yes. Using a moderate lossy setting (75%–82%) re-quantizes the image data, reducing file weight by 40%–60% while remaining visually identical at normal viewing distances.",
      },
    ],
  },

  "batch-webp-converter": {
    slug: "batch-webp-converter",
    name: "Batch WebP Converter",
    fromFormat: "Multi-Format",
    toFormat: "WebP",
    badge: "Parallel Multi-File Processing",
    h1: "Bulk & Batch WebP Converter (Multi-File ZIP Export)",
    metaTitle: "Batch WebP Converter – Convert Hundreds of Images Locally",
    metaDescription:
      "Batch convert PNG, JPG, AVIF, HEIC, and TIFF images to WebP simultaneously. 100% private in-browser parallel processing with instant ZIP packaging.",
    heroText:
      "Batch convert dozens or hundreds of PNG, JPG, AVIF, HEIC, TIFF, and BMP images to WebP simultaneously. Enjoy multi-threaded client-side conversion, customizable naming rules, and instant ZIP archive packaging with zero server uploads.",
    highlightText: "Bulk & batch conversion (Parallel ZIP packaging)",
    keyBenefits: [
      {
        title: "Multi-Threaded In-Browser Engine",
        desc: "Convert entire folders of mixed formats in parallel using your computer's local CPU power.",
        icon: "⚡",
      },
      {
        title: "Instant Bulk ZIP Download",
        desc: "Package all converted assets into a single clean ZIP archive with custom filename prefixes.",
        icon: "📦",
      },
      {
        title: "No Daily Limits or Paywalls",
        desc: "Convert as many files as you need with no file count limits, size restrictions, or accounts required.",
        icon: "♾️",
      },
    ],
    technicalComparison: {
      title: "Batch Processing: Client-Side vs. Cloud Converters",
      description:
        "Why local in-browser batch processing is faster, safer, and unrestricted.",
      originalLabel: "Cloud Converters",
      webpLabel: "WebP Studio Local Engine",
      metrics: [
        {
          feature: "Upload Speed Bottleneck",
          original: "Slow uploads on large folders",
          webp: "Zero Upload (Instant in-memory access)",
          verdict: "No bandwidth delays",
        },
        {
          feature: "Usage & Batch Limits",
          original: "5–10 files max on free tiers",
          webp: "Unlimited batch conversion",
          verdict: "No paywalls or file caps",
        },
        {
          feature: "Data Privacy",
          original: "Photos stored on external servers",
          webp: "100% Client-Side Privacy",
          verdict: "Zero privacy risk",
        },
      ],
    },
    deepDive: {
      heading: "Enterprise-Grade Batch Conversion Directly in Your Browser",
      paragraphs: [
        "Traditional cloud-based batch converters require uploading every image to a remote server before processing can begin. When optimizing large folders of assets, this results in slow upload times, server timeouts, and data privacy concerns.",
        "WebP Studio runs the entire conversion pipeline in your browser via HTML5 Canvas and WebAssembly. Your CPU handles the processing in parallel, giving you instant turnaround and total control over your private data.",
      ],
    },
    howToSteps: [
      {
        title: "Drop Full Image Folders",
        desc: "Select or drag multiple mixed-format files (PNG, JPG, HEIC, etc.) at once.",
      },
      {
        title: "Set Global Compression Rule",
        desc: "Apply a unified quality preset across all queued assets.",
      },
      {
        title: "Monitor Batch Queue",
        desc: "Track parallel conversion progress across all files in real time.",
      },
      {
        title: "Export Bulk ZIP",
        desc: "Download all converted WebP images bundled inside an organized ZIP archive.",
      },
    ],
    faqs: [
      {
        question: "Is there a limit on how many images I can convert at once?",
        answer:
          "There are no arbitrary software limits. You can batch convert dozens or hundreds of files at once, bounded only by your device's available RAM.",
      },
      {
        question: "Can I batch convert different file formats together?",
        answer:
          "Yes. You can drop a mixed batch of PNG, JPG, AVIF, HEIC, and TIFF files into the workbench simultaneously.",
      },
    ],
  },
};

export const ALL_CONVERTER_SLUGS = Object.keys(CONVERTERS);
