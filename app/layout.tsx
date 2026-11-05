import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatBot from "@/components/Chatbot";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://scholargrid.org"),
  title: {
    default: "ScholarGrid | Global Academic & Research Publication Support",
    template: "%s | ScholarGrid",
  },
  description:
    "International academic consultancy providing Q1/Q2 journal formatting, numerical modeling (MATLAB/Python), and systematic literature review support for PhD scholars worldwide.",
  keywords: [
    "Academic Consultancy",
    "Manuscript Formatting",
    "MATLAB Simulation Support",
    "Python Numerical Modeling",
    "Elsevier IEEE Formatting",
    "Thesis Research Assistance",
    "ScholarGrid",
    "Q1 Q2 Journal Publication",
    "Systematic Literature Review",
    "Computational Fluid Dynamics",
  ],
  authors: [{ name: "ScholarGrid Team", url: "https://scholargrid.org" }],
  creator: "ScholarGrid",
  publisher: "ScholarGrid",
  alternates: {
    canonical: "https://scholargrid.org",
    languages: {
      "en-US": "https://scholargrid.org",
      "en-GB": "https://scholargrid.org",
      "en-AE": "https://scholargrid.org",
      "x-default": "https://scholargrid.org",
    },
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
    title: "ScholarGrid - Global Academic & Research Consultancy",
    description:
      "Expert research guidance, Q1/Q2 journal formatting, and advanced computational modeling for PhD scholars worldwide.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ScholarGrid Academic Consultancy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScholarGrid - International PhD & Research Consultancy",
    description:
      "Professional guidance for Q1/Q2 manuscript preparation, thesis writing, and numerical modeling.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "ScholarGrid",
  url: "https://scholargrid.org",
  logo: "https://scholargrid.org/logo.png",
  sameAs: ["https://www.youtube.com/@scholargrid"],
  areaServed: "Worldwide",
  description:
    "Global academic writing, Q1/Q2 manuscript formatting, SPSS/Python modeling, and thesis consultancy services for postgraduates and researchers.",
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
        <ChatBot />
        <Analytics /> {/* Vercel Live Traffic & Visitor Tracking Component */}

        {/* Google AdSense: loaded via next/script so Next controls injection */}
        <Script
          id="adsense-script"
          async
          strategy="afterInteractive"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
          crossOrigin="anonymous"
        />

        {/* International Schema Markup (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
