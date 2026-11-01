import React from 'react';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans py-12 px-4 sm:px-8 lg:px-12">
      <article className="max-w-5xl mx-auto">
        
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to ScholarGrid Home
        </Link>

        <div className="flex items-center gap-3 text-xs font-bold text-amber-800 uppercase tracking-widest bg-amber-50 border border-amber-200 px-3.5 py-1.5 rounded-full w-fit mb-4">
          <FileText size={16} /> User Agreement
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-4">Terms and Conditions</h1>
        <p className="text-sm font-medium text-slate-500 pb-8 border-b border-slate-200 mb-10">Last updated: October 2026</p>

        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">1. Acceptance of Terms</h2>
            <p>
              These terms and conditions govern your use of ScholarGrid's website, located at scholargrid.io. By accessing or using this platform, you acknowledge and agree to comply with these terms in full.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">2. Intellectual Property Rights</h2>
            <p>
              All editorial content, structural layouts, formatting guides, graphics, and source materials published on ScholarGrid are owned by ScholarGrid and/or its technical contributors. Content is provided for professional academic consultation and reference.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">3. Academic Consultancy Services</h2>
            <p>
              ScholarGrid provides research consultancy, LaTeX/Word formatting, and numerical simulation support. While we strictly align manuscripts with international journal guidelines (IEEE, Elsevier, etc.), final publication acceptance rests solely with respective journal editorial boards and peer-reviewers.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-950 mb-3">4. Limitation of Liability</h2>
            <p>
              Under no circumstances shall ScholarGrid or its technical team be held liable for any indirect or consequential damages arising from the use of our guides, simulation frameworks, or consulting services.
            </p>
          </div>
        </div>

      </article>
    </div>
  );
}