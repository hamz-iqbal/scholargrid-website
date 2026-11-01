import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, CheckCircle2, Mail } from 'lucide-react';

export default function BlogPost() {
  const emailAddress = "scholargrid030@gmail.com";
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Manuscript%20Formatting%20Inquiry&body=Hello%20ScholarGrid%20team,%20I%20need%20assistance%20with%20formatting%20my%20research%20manuscript.`;

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans py-12 px-4 sm:px-8 lg:px-12">
      {/* Blog Container */}
      <article className="max-w-5xl mx-auto">
        
        {/* Back Link */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to ScholarGrid Home
        </Link>

        {/* Category & Metadata */}
        <div className="flex items-center gap-3 text-xs font-bold text-slate-600 mb-4 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase tracking-wider">
            Manuscript Formatting Guide
          </span>
          <span className="flex items-center gap-1"><Calendar size={14} /> October 2026</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6 leading-[1.15]">
          A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier & IEEE
        </h1>

        <p className="text-xl text-slate-600 italic font-medium mb-8 pb-6 border-b border-slate-200">
          A practical walkthrough for PhD scholars and engineering authors.
        </p>

        {/* Author Info with Logo and Email */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-slate-200 text-xs font-semibold text-slate-600 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center overflow-hidden shrink-0 shadow-sm">
              <Image 
                src="/logo.png" 
                alt="ScholarGrid Logo" 
                fill 
                className="object-contain p-1"
              />
            </div>
            <div>
              <span className="text-slate-900 font-bold block text-sm">ScholarGrid Technical Team</span>
              <span>Computational Research & Publishing Consultants</span>
            </div>
          </div>
          <div>
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-blue-900 font-bold px-4 py-2.5 rounded-xl transition-all border border-slate-300 text-xs sm:text-sm inline-flex items-center gap-2 shadow-sm"
            >
              <Mail size={16} className="text-blue-700" /> Email Us
            </a>
          </div>
        </div>

        {/* Blog Body Content */}
        <div className="space-y-8 text-slate-700 text-lg leading-relaxed">
          
          <div className="bg-slate-50 border-l-4 border-blue-700 p-6 rounded-r-2xl text-slate-800 shadow-sm">
            <p className="font-semibold text-slate-900 mb-2">Introduction & Ground Rule:</p>
            <p className="text-base md:text-lg leading-relaxed">
              Let me say this upfront: formatting will not get a weak paper accepted. But it can get a strong paper bounced at the technical check, and losing two weeks that way hurts. This guide follows the order you will actually meet things: template, structure, equations, figures, references, and a final check.
            </p>
            <p className="text-xs font-bold text-blue-900 mt-3 uppercase tracking-wider">
              ⚠️ One rule beats everything below: the journal's Guide for Authors <a href="#ref1" id="cit-ref1" className="text-blue-600 hover:underline">[1]</a>, or the conference call for papers, always wins. Treat this guide as a map and the journal page as the final word.
            </p>
          </div>

          {/* Figure 1 */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig1.png" 
              alt="Fig. 1. The six steps" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 1. The six steps, in the order you will meet them.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 1: Choosing Between Elsevier and IEEE Templates</h2>
          <p>
            Your target venue decides the publisher, so what you really choose is the file format and how closely you follow the template.
          </p>

          {/* Table 1: Feature Comparison */}
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold border-b border-slate-700">Feature</th>
                  <th className="p-4 font-bold border-b border-slate-700">Elsevier Journals</th>
                  <th className="p-4 font-bold border-b border-slate-700">IEEE Journals and Conferences</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Typical layout</td>
                  <td className="p-4">Single column, double-spaced, often with line numbers</td>
                  <td className="p-4">Two columns, single-spaced</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">LaTeX class</td>
                  <td className="p-4"><code className="bg-slate-100 px-2 py-1 rounded text-blue-700 text-xs font-mono">elsarticle</code></td>
                  <td className="p-4"><code className="bg-slate-100 px-2 py-1 rounded text-blue-700 text-xs font-mono">IEEEtran</code></td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Keywords heading</td>
                  <td className="p-4">Keywords</td>
                  <td className="p-4">Index Terms</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">References</td>
                  <td className="p-4">Set by the journal (numbered or author-year)</td>
                  <td className="p-4">Numbered, in order of first citation</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Final layout</td>
                  <td className="p-4">Typeset by the publisher after acceptance</td>
                  <td className="p-4">Often close to what you submit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            That last row matters. Elsevier typesets your paper after acceptance, so your manuscript only has to be easy to review. IEEE conference papers are often published almost exactly as you format them, so layout details count for much more.
          </p>

          {/* Figure 2 */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig2.png" 
              alt="Fig. 2. IEEE vs Elsevier layout" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 2. A two-column IEEE page next to a single-column, double-spaced Elsevier page.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-4">LaTeX or Word?</h3>
          <p><strong>Pick LaTeX if:</strong> Your paper is equation-heavy (control, signal processing, electromagnetics, mechanics), you want automatic numbering and cross-references, or you share the project through Overleaf or Git.</p>
          <p><strong>Pick Word if:</strong> Your paper is mostly experimental, your co-authors do not know LaTeX, or the venue gives you a Word template.</p>

          <h3 className="text-2xl font-bold text-slate-900 pt-4">Get the Right Template</h3>
          <p><strong>Elsevier:</strong> Open the journal homepage, then the Guide for Authors. It links to the current template, usually the elsarticle class <a href="#ref2" className="text-blue-600 hover:underline">[2]</a> or a Word file.</p>
          <p><strong>IEEE:</strong> Use the template selector in the IEEE Author Center <a href="#ref3" className="text-blue-600 hover:underline">[3]</a> or the one named in your conference call, with the IEEEtran class <a href="#ref4" className="text-blue-600 hover:underline">[4]</a> for LaTeX. Never reuse an old paper's template, because conferences change theirs yearly.</p>

          <div className="bg-slate-900 text-amber-400 p-6 rounded-2xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
            <code>
              \documentclass[journal]{'{IEEEtran}'}    % IEEE journal<br />
              \documentclass[conference]{'{IEEEtran}'}  % IEEE conference<br />
              \documentclass[review]{'{elsarticle}'}    % Elsevier submission
            </code>
          </div>
          <p className="text-sm italic text-slate-600">
            And please do not tweak the template. Checkers flag changed margins, font sizes, and repeated \vspace tricks. If you are over the page limit, cut text.
          </p>

          <h2 className="text-3xl font-black text-slate-950 pt-8">Step 2: Preparing Section Structures</h2>
          <p>
            Most engineering papers share one skeleton. Check your journal first, since some want a structured abstract or a different section order.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 pt-4">Title, Abstract, and Keywords</h3>
          <p><strong>Title:</strong> specific and short, roughly 10 to 15 words.</p>
          <p><strong>Abstract:</strong> one paragraph, usually 150 to 250 words. For IEEE, no equations, citations, or undefined abbreviations. Elsevier limits vary, so check.</p>
          <p><strong>Keywords:</strong> Elsevier usually wants 4 to 6. IEEE uses "Index Terms", normally alphabetical and drawn from the IEEE Taxonomy where possible.</p>

          {/* Figure 3 */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig3.png" 
              alt="Fig. 3. First page annotated" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 3. The first page of an IEEE paper, annotated.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-4">Main Sections & Back Matter</h3>
          <ul className="space-y-3 pl-2 text-lg">
            <li><strong>Introduction:</strong> context, related work and the gap, your contributions, and a one-paragraph outline.</li>
            <li><strong>Methodology:</strong> detailed enough for someone else to reproduce. Define symbols at first use, and state assumptions, parameters, datasets, hardware, and software versions.</li>
            <li><strong>Results and Discussion:</strong> follow the order of your methods. Compare against baselines fairly, report units and uncertainty, and explain results.</li>
            <li><strong>Conclusion:</strong> findings and significance in a paragraph or two, plus limitations and future work. No new results.</li>
            <li><strong>Back Matter:</strong> CReDiT author statement <a href="#ref5" className="text-blue-600 hover:underline">[5]</a>, competing-interest declarations, funding details, data availability statements, and AI disclosures where required.</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-950 pt-8">Step 3: Formatting Mathematics and Equations</h2>
          <p>
            Use inline math for short symbols and simple definitions inside a sentence. Use display math for anything long, complex, or referenced later.
          </p>

          <div className="bg-slate-900 text-amber-400 p-6 rounded-2xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
            <code>
              \documentclass[journal]{'{IEEEtran}'}
            </code>
          </div>

          {/* Figure 4 */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig4.png" 
              alt="Fig. 4. Display equation layout" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 4. A display equation with its number, punctuation, and "where" line.
            </p>
          </div>

          {/* Table 2: Mathematical Object Conventions */}
          <h3 className="text-2xl font-bold text-slate-900 pt-4">Vectors, Matrices, and Symbols</h3>
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold border-b border-slate-700">Object</th>
                  <th className="p-4 font-bold border-b border-slate-700">Style</th>
                  <th className="p-4 font-bold border-b border-slate-700">LaTeX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Scalar</td>
                  <td className="p-4">Italic</td>
                  <td className="p-4 font-mono text-blue-700">$x$</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Vector</td>
                  <td className="p-4">Bold lowercase</td>
                  <td className="p-4 font-mono text-blue-700">\mathbf&lbrace;x&lbrace;</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Matrix</td>
                  <td className="p-4">Bold uppercase</td>
                  <td className="p-4 font-mono text-blue-700">\mathbf&lbrace;A&lbrace;</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Set</td>
                  <td className="p-4">Calligraphic or blackboard bold</td>
                  <td className="p-4 font-mono text-blue-700">\mathcal&lbrace;S&lbrace;, \mathbb&lbrace;R&lbrace;</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-8">Step 4: Figures, Tables, and High-Resolution Visuals</h2>
          <p>
            Vector (PDF or EPS) for plots, circuits, and block diagrams. TIFF or PNG for photos and microscopy.
          </p>

          {/* Figure 5 */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig5.png" 
              alt="Fig. 5. Low-res vs Vector export" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 5. Same plot, same zoom: low-resolution raster versus a sharp export.
            </p>
          </div>

          {/* Figure 6 */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig6.png" 
              alt="Fig. 6. Caption placements" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 6. Caption placement: below for figures, above for tables.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-8">Step 5: Citation and Reference Management</h2>
          <p>
            Keep every reference in one <code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-xs">.bib</code> file and let the style file format it. IEEE uses numerical brackets ordered by first citation (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-xs">[1], [2], [3]</code>). Elsevier supports both numbered (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-xs">elsarticle-num</code>) and author-year (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-blue-700 font-mono text-xs">elsarticle-harv</code>) styles.
          </p>

          <h2 className="text-3xl font-black text-slate-950 pt-8">Step 6: Final Pre-Submission Checklist</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Verify title length, abstract word count, and index term formatting.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Ensure all equations are numbered, referenced properly, and symbols defined.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Confirm figure resolutions (DPI), vector formats, and correct caption placement.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Check for missing citation markers (<code className="text-red-600 font-mono text-xs">[?]</code>) and font embedding.</span>
            </li>
          </ul>

          <div className="pt-8 border-t border-slate-200">
            <p className="font-bold text-slate-900 text-xl">
              Good formatting will not rescue a weak paper, but bad formatting can slow down a strong one. Set up your template, figures, and references properly once, and you can spend your energy on the science.
            </p>
          </div>

          {/* References Section */}
          <div className="mt-16 pt-8 border-t-2 border-slate-200 scroll-mt-12">
            <h3 className="text-3xl font-black text-slate-950 mb-6">References</h3>
            <ol className="list-decimal pl-5 space-y-4 text-base text-slate-700 leading-relaxed">
              <li id="ref1">Elsevier, "Guide for Authors," available on each journal's homepage at sciencedirect.com. <a href="#cit-ref1" className="text-blue-600 font-bold ml-1 hover:underline">↑ back</a></li>
              <li id="ref2">Elsevier, "elsarticle: Class for articles submitted to Elsevier journals," CTAN package documentation.</li>
              <li id="ref3">IEEE Author Center, "Templates for IEEE journal and conference articles," ieee.org.</li>
              <li id="ref4">M. Shell, "How to use the IEEEtran LaTeX class," CTAN package documentation.</li>
              <li id="ref5">A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, "Beyond authorship: Attribution, contribution, collaboration, and credit," <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151-155, 2015.</li>
              <li id="ref6">IEEE, "IEEE Editorial Style Manual for Authors," IEEE Periodicals.</li>
              <li id="ref7">American Mathematical Society, "User's guide for the amsmath package," CTAN package documentation.</li>
              <li id="ref8">J. Wright, "siunitx: A comprehensive (SI) units package," CTAN package documentation.</li>
              <li id="ref9">Elsevier, "Artwork and media instructions," Elsevier Author Resources.</li>
              <li id="ref10">B. Wong, "Points of view: Color blindness," <i>Nature Methods</i>, vol. 8, no. 6, p. 441, 2011.</li>
              <li id="ref11">S. Fear, "Publication quality tables in LaTeX (booktabs)," CTAN package documentation.</li>
              <li id="ref12">L. Lamport, <i>LaTeX: A Document Preparation System</i>, 2nd ed. Reading, MA, USA: Addison-Wesley, 1994.</li>
            </ol>
          </div>

        </div>

        {/* Share / CTA Box */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
          <div>
            <h4 className="font-black text-2xl mb-1 text-amber-400">Need Expert Help Formatting Your Manuscript?</h4>
            <p className="text-sm sm:text-base text-slate-300 mb-2">Get professional LaTeX & Word layout overhaul directly from experienced academic researchers.</p>
            <p className="text-xs text-slate-400">Direct Email: <a href={gmailWebUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-mono">scholargrid030@gmail.com</a></p>
          </div>
          <a
            href="https://wa.me/923147982032?text=Hello%20ScholarGrid%20team!%20I%20need%20expert%20support%20for%20formatting%20my%20research%20manuscript."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shrink-0 hover:scale-105 text-center"
          >
            Consult on WhatsApp
          </a>
        </div>

      </article>
    </div>
  );
}