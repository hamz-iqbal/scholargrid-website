import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Mail, Headphones } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ScholarGrid by WhatsApp or email for questions about journal formatting, LaTeX templates, simulation scripts, or research support.",
  alternates: { canonical: "/contact" },
};

export default function ContactUs() {
  const whatsappNumber = "923147982032";
  const whatsappMsg = encodeURIComponent(
    "Hello ScholarGrid team! I am reaching out from your Contact Us page regarding research support and formatting guidance."
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans py-12 px-4 sm:px-8 lg:px-12">
      <article className="max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors"
        >
          <ArrowLeft size={16} /> Back to ScholarGrid Home
        </Link>

        <div className="flex items-center gap-3 text-xs font-bold text-emerald-800 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full w-fit mb-4">
          <Headphones size={16} /> Author Assistance
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          Have a question about journal template formatting, simulation
          scripts, one of our guides, or a correction to suggest? Reach us
          through either channel below.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 my-8">
          {/* WhatsApp Card */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:border-emerald-600 transition-all">
            <div>
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mb-4">
                <MessageSquare size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-950 mb-2">
                WhatsApp Direct
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Quick replies for sharing documents and short project
                questions.
              </p>
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-black px-6 py-4 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} /> Chat on WhatsApp
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between hover:border-blue-600 transition-all">
            <div>
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-4">
                <Mail size={28} />
              </div>
              <h2 className="text-xl font-bold text-slate-950 mb-2">
                Email Inquiry
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Send detailed questions, files, corrections, or formal
                inquiries.
              </p>
            </div>
            <a
              href="mailto:scholargrid030@gmail.com"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-black px-6 py-4 rounded-xl transition-all shadow-md text-sm flex items-center justify-center gap-2"
            >
              <Mail size={16} /> scholargrid030@gmail.com
            </a>
          </div>
        </div>

        <p className="mt-10 text-base text-slate-600 leading-relaxed">
          Looking for guidance right now? Browse the{" "}
          <Link href="/blog" className="font-semibold text-blue-700 underline">
            Knowledge Library
          </Link>
          . You can also read our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-blue-700 underline"
          >
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="font-semibold text-blue-700 underline">
            Terms and Conditions
          </Link>
          .
        </p>
      </article>
    </div>
  );
}