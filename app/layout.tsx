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
  title: "ScholarGrid - Academic & Research Consultancy",
  description: "Professional academic research, thesis writing, and data analysis support.",
  verification: {
    google: "R-joaBU6oK5Y2WxN_RDz7f63hpLWrLt7CMKTBX6tzV8",
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