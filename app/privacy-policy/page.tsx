import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans py-12 px-4 sm:px-8 lg:px-12">
      <article className="max-w-5xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to ScholarGrid Home
        </Link>

        <div className="flex items-center gap-3 text-xs font-bold text-blue-800 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3.5 py-1.5 rounded-full w-fit mb-4">
          <ShieldCheck size={16} /> Legal & Compliance
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">Privacy Policy</h1>
        <p className="text-sm font-medium text-slate-500 pb-8 border-b border-slate-200 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">1. Introduction</h2>
            <p>
              At ScholarGrid, accessible from scholargrid.io, the privacy of our visitors is one of our top priorities. This Privacy Policy document outlines the types of information collected and recorded by ScholarGrid and how we utilize it to maintain a secure academic environment.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">2. Google AdSense & Cookies</h2>
            <p>
              Google utilizes third-party vendor cookies, including DART cookies, to serve advertisements to our visitors based upon their visits to scholargrid.io and other sites across the internet. Visitors may opt out of the use of DART cookies by visiting the Google ad and content network Privacy Policy at <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold underline">https://policies.google.com/technologies/ads</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">3. Log Files & Analytics</h2>
            <p>
              ScholarGrid follows a standard protocol of utilizing log files. These files register visitors when they access websites. The data gathered includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamps, and referring pages. This information is used for analyzing trends and administering the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">4. Contact Information</h2>
            <p>
              If you have additional inquiries or require clarification regarding our Privacy Policy, please feel free to reach out via WhatsApp or email at <span className="font-bold text-slate-900">scholargrid030@gmail.com</span>.
            </p>
          </div>
        </div>

      </article>
    </div>
  );
}