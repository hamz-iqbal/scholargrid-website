import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms that apply when you use ScholarGrid, including content use, academic support disclaimers, third-party links, and limitation of liability.",
  alternates: { canonical: "/terms" },
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans py-12 px-4 sm:px-8 lg:px-12">
      <article className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to ScholarGrid Home
        </Link>

        <div className="flex items-center gap-3 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full w-fit mb-4">
          <FileText size={16} /> User Agreement
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
          Terms and Conditions
        </h1>
        <p className="text-sm font-medium text-slate-500 pb-8 border-b border-slate-200 mb-10">
          Last updated: November 2026
        </p>

        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">1. Acceptance of Terms</h2>
            <p>
              These terms govern your use of the ScholarGrid website at
              scholargrid.org. By accessing or using the site, you agree to
              comply with them in full. If you do not agree, please do not use
              the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">2. Intellectual Property Rights</h2>
            <p>
              Articles, layouts, guides, graphics, and other materials on
              ScholarGrid are owned by ScholarGrid and/or its contributors.
              You may read and link to our content. You may not copy,
              republish, or sell it without written permission. Short
              quotations with clear attribution and a link back are welcome.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">3. Educational Content and Academic Support</h2>
            <p>
              ScholarGrid publishes educational guides and offers research
              support, including LaTeX/Word formatting and numerical
              simulation guidance. We align guidance with international
              journal requirements (IEEE, Elsevier, and others), but journal
              requirements change, so always confirm the current author
              guidelines on the journal&apos;s own website. Final acceptance of
              any manuscript rests solely with the journal&apos;s editors and
              peer reviewers, and we do not guarantee publication outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">4. Acceptable Use</h2>
            <p>
              Do not misuse the site, disrupt its operation, scrape it in a
              way that harms performance, or use our guides to misrepresent
              authorship or violate academic integrity policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">5. AI Chatbot</h2>
            <p>
              The on-site chatbot can produce incorrect or incomplete answers.
              Verify important information independently and do not treat its
              output as professional advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">6. Third-Party Links and Advertising</h2>
            <p>
              The site links to external websites and displays third-party
              advertising. We do not control or endorse those sites or
              advertisers and are not responsible for their content or
              practices. See our{" "}
              <Link href="/privacy-policy" className="text-blue-600 font-semibold underline">
                Privacy Policy
              </Link>{" "}
              for how advertising cookies are used.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">7. Disclaimer and Limitation of Liability</h2>
            <p>
              The site and its content are provided &quot;as is&quot; without
              warranties of any kind. To the fullest extent permitted by law,
              ScholarGrid and its team are not liable for any indirect or
              consequential damages arising from the use of our guides,
              simulation frameworks, or support services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">8. Changes and Contact</h2>
            <p>
              We may update these terms at any time; continued use of the site
              means you accept the revised terms. Questions? Visit our{" "}
              <Link href="/contact" className="text-blue-600 font-semibold underline">
                Contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}