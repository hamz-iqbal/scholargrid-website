import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import ChatBotGate from "@/components/Chatbot";
import SiteFooter from "@/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Serif font used for headings on the landing page (font-serif)
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ADSENSE_CLIENT = "ca-pub-4708685236568228";

const GOOGLE_SCHOLAR_URL =
  "https://scholar.google.com/citations?hl=en&user=-VGaDnoAAAAJ";

const RESEARCHGATE_URL =
  "https://www.researchgate.net/profile/Hamza-Iqbal-19?ev=hdr_xprf";

export const metadata: Metadata = {
  metadataBase: new URL("https://scholargrid.org"),
  title: {
    default:
      "ScholarGrid | Academic Writing, LaTeX & Research Guides for PhD Scholars",
    template: "%s | ScholarGrid",
  },
  description:
    "Free guides for PhD scholars and researchers: Q1/Q2 paper structure, Elsevier and IEEE formatting, LaTeX, MATLAB and Python figures, and systematic literature reviews.",
  keywords: [
    "Academic Writing Guides",
    "Q1 Research Paper Structure",
    "Manuscript Formatting",
    "Elsevier IEEE Formatting",
    "LaTeX Guide",
    "MATLAB Python Visualization",
    "Systematic Literature Review",
    "Journal Selection",
    "PhD Research Support",
    "ScholarGrid",
  ],
  authors: [{ name: "ScholarGrid", url: "https://scholargrid.org" }],
  creator: "ScholarGrid",
  publisher: "ScholarGrid",
  alternates: {
    // "./" resolves to each page's own URL, so blog posts do not all
    // inherit the homepage as their canonical.
    canonical: "./",
  },
  verification: {
    google: "R-joaBU6oK5Y2WxN_RDz7f63hpLWrLt7CMKTBX6tzV8",
  },
  // AdSense site verification via meta tag (rendered server-side in <head>)
  other: {
    "google-adsense-account": ADSENSE_CLIENT,
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://scholargrid.org",
    siteName: "ScholarGrid",
    title: "ScholarGrid | Academic Writing, LaTeX & Research Guides",
    description:
      "Practical guides on Q1/Q2 paper structure, journal formatting, LaTeX, computational figures, and literature reviews for PhD scholars.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ScholarGrid academic research guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarGrid | Academic Writing, LaTeX & Research Guides",
    description:
      "Practical guides for PhD scholars on manuscript structure, formatting, LaTeX, and literature reviews.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ScholarGrid",
  url: "https://scholargrid.org",
  logo: "https://scholargrid.org/logo.png",
  sameAs: [
    "https://www.youtube.com/@scholargrid",
    GOOGLE_SCHOLAR_URL,
    RESEARCHGATE_URL,
  ],
  description:
    "Academic knowledge platform with guides on research paper structure, journal formatting, LaTeX, computational visualization, and literature reviews for PhD scholars and researchers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      // AdSense and browser extensions can modify <head>/<html> before React
      // hydrates; this stops that from throwing a hydration warning.
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      {/* No manual <script> tags here. Next.js manages <head> from `metadata`. */}
      <body className="min-h-full flex flex-col relative">
        {children}

        {/* Site-wide footer with Contact, Privacy Policy and Terms links */}
        <SiteFooter />

        {/* Chatbot: shown on all pages except /blog and blog articles */}
        <ChatBotGate />

        <Analytics /> {/* Vercel Live Traffic & Visitor Tracking Component */}

        {/* Google AdSense: standard script loading without Next.js data-nscript */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        {/* Site-wide Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}