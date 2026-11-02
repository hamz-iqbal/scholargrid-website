import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatBot from "@/components/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scholargrid.org"),
  title: {
    default: "ScholarGrid - Academic & Research Consultancy",
    template: "%s | ScholarGrid",
  },
  description: "Professional academic research, thesis writing, and data analysis support.",
  keywords: [
    "Academic Consultancy",
    "Manuscript Formatting",
    "MATLAB Simulation Support",
    "Python Numerical Modeling",
    "Elsevier IEEE Formatting",
    "Thesis Research Assistance",
    "ScholarGrid",
  ],
  authors: [{ name: "ScholarGrid Team", url: "https://scholargrid.org" }],
  creator: "ScholarGrid",
  publisher: "ScholarGrid",
  verification: {
    google: "R-joaBU6oK5Y2WxN_RDz7f63hpLWrLt7CMKTBX6tzV8",
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
    title: "ScholarGrid - Academic & Research Consultancy",
    description: "Professional academic research, thesis writing, and data analysis support.",
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
    title: "ScholarGrid - Academic & Research Consultancy",
    description: "Professional academic research, thesis writing, and data analysis support.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Google AdSense Standard HTML Script (Fixes data-nscript error) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4708685236568228"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="min-h-full flex flex-col relative">
        {children}
        <ChatBot />
      </body>
    </html>
  );
}