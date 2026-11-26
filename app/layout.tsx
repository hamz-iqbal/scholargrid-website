
import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
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

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const ADSENSE_CLIENT = "ca-pub-4708685236568228";
const GA_MEASUREMENT_ID = "G-CT5CX80D93";

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
    canonical: "./",
  },
  verification: {
    google: "R-joaBU6oK5Y2WxN_RDz7f63hpLWrLt7CMKTBX6tzV8",
  },
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>

        {children}

        <SiteFooter />
        <ChatBotGate />

        {/* Vercel Analytics */}
        <Analytics />

        {/* Google AdSense */}
        <script
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

      </body>
    </html>
  );
}
