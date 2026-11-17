import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ScholarGrid collects and uses information, including cookies, Google AdSense advertising, analytics, and the on-site AI chatbot.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans py-12 px-4 sm:px-8 lg:px-12">
      <article className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to ScholarGrid Home
        </Link>

        <div className="flex items-center gap-3 text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full w-fit mb-4">
          <ShieldCheck size={16} /> Legal &amp; Compliance
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm font-medium text-slate-500 pb-8 border-b border-slate-200 mb-10">
          Last updated: November 2026
        </p>

        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">1. Introduction</h2>
            <p>
              At ScholarGrid, accessible from scholargrid.org, the privacy of
              our visitors is one of our top priorities. This Privacy Policy
              explains what information we collect and how we use it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">2. Google AdSense &amp; Cookies</h2>
            <p>
              Google and other third-party vendors use cookies, including the
              DART cookie, to serve ads based on a visitor&apos;s prior visits
              to scholargrid.org and other sites on the internet. You can opt
              out of personalized advertising at{" "}
              <a
                href="https://www.google.com/settings/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline"
              >
                Google Ads Settings
              </a>
              , and read how Google uses data at{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold underline"
              >
                policies.google.com/technologies/ads
              </a>
              . You can also manage cookies in your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">3. Log Files &amp; Analytics</h2>
            <p>
              Like most websites, we use log files and analytics. These record
              IP addresses, browser type, Internet Service Provider, date and
              time stamps, referring pages, and pages visited. We use Vercel
              Analytics to understand traffic and improve the site. This data
              is used in aggregate to analyze trends and administer the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">4. AI Chatbot</h2>
            <p>
              Messages you type into the on-site chatbot are processed by
              third-party AI and infrastructure providers to generate replies,
              and may be stored to keep chat history. Please do not enter
              passwords, financial details, or other sensitive personal
              information into the chatbot.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">5. Information You Send Us</h2>
            <p>
              If you contact us by email or WhatsApp, we receive the details
              you share, such as your name, contact information, and any files
              or messages. We use them only to respond to you.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">6. Third-Party Links</h2>
            <p>
              Our pages link to external sites such as journals, publishers,
              Google Scholar, and ResearchGate. We are not responsible for
              their privacy practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">7. Your Choices</h2>
            <p>
              You may ask us to access, correct, or delete personal
              information you have sent us. The site is intended for students,
              researchers, and academics, and we do not knowingly collect
              personal information from children under 13.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">8. Contact Information</h2>
            <p>
              For questions about this policy, use our{" "}
              <Link href="/contact" className="text-blue-600 font-semibold underline">
                Contact page
              </Link>{" "}
              or email{" "}
              <span className="font-bold text-slate-900">scholargrid030@gmail.com</span>.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}