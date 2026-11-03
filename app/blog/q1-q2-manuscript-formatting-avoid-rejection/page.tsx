import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, CheckCircle2, ShieldAlert, Mail } from 'lucide-react';

export default function ManuscriptFormattingBlog() {
  const emailAddress = "scholargrid030@gmail.com";
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Manuscript%20Formatting%20Inquiry&body=Hello%20ScholarGrid%20team,%20I%20need%20assistance%20with%20manuscript%20formatting%20and%20journal%20submission%20support.`;

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
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-200 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert size={14} /> Publishing & Formatting Guide
          </span>
          <span className="flex items-center gap-1"><Calendar size={14} /> November 2026</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 10 min read</span>
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6 leading-[1.15]">
          Mastering Q1/Q2 Manuscript Formatting: Common Pitfalls and How to Avoid Rejection
        </h1>

        <p className="text-xl text-slate-600 italic font-medium mb-8 pb-6 border-b border-slate-200">
          A practical manuscript formatting guide for researchers targeting Q1 and Q2 journals.
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
          
          <div className="bg-slate-50 border-l-4 border-blue-700 p-6 rounded-r-2xl text-slate-800 shadow-sm space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              You can spend two years on a study and lose two weeks to a formatting error. At Q1 and Q2 journals, where editors screen a large number of submissions, manuscript formatting is often the first test your paper faces. A messy file can trigger a desk rejection before anyone reads your results. This guide explains the most common formatting pitfalls and how to avoid them, so your paper is judged on its science.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Q1 and Q2 describe journal quartiles. A quartile is the rank band a journal holds within its subject category, based on indicators such as SCImago&apos;s SJR [1] or Clarivate&apos;s Journal Citation Reports [2] (Fig. 1). Q1 is the top quarter and Q2 the next quarter. The rules are the ones each journal publishes in its Guide for Authors [3]. What changes is the margin for error: strong journals usually receive many submissions, so careless files lose out more easily.
            </p>
          </div>

          {/* Fig. 28 -> fig28.png (Fig. 1) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig28.png" 
              alt="Journal quartiles Q1 to Q4 within a subject category" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 1. Journal quartiles: Q1 and Q2 are the top half of journals in a subject category.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Why Manuscript Formatting Matters for Q1 and Q2 Journals</h2>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>A technical or editorial check often comes first. Files that break the rules can be returned before review.</li>
            <li>Editors form a quick impression. A clean first page signals that the authors are careful.</li>
            <li>Reviewers are busy volunteers. A paper that is easy to read earns more goodwill.</li>
            <li>Production teams need complete files and statements. Gaps slow down acceptance.</li>
          </ul>

          <p>
            Formatting will not rescue weak science, but poor formatting can hide strong science. Remember also that a submission is more than one file. It is a package (Fig. 2), and every part must be ready.
          </p>

          {/* Fig. 29 -> fig29.png (Fig. 2) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig29.png" 
              alt="A journal submission is a package, not a single file" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 2. A journal submission is a package, not a single file.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">The Nine Most Common Manuscript Formatting Pitfalls</h2>
          <p>
            Fig. 3 ranks the pitfalls by how often they appear and how much damage they do. It is my own qualitative judgment, not a measured statistic. Start with the top-right corner.
          </p>

          {/* Fig. 30 -> fig30.png (Fig. 3) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig30.png" 
              alt="Formatting pitfalls by frequency and damage (qualitative, illustrative)" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 3. Formatting pitfalls by frequency and damage (qualitative, illustrative).
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-4">Pitfall 1: Using the Wrong or Outdated Template</h3>
          <p>
            Templates change. Journals update them, and IEEE conferences replace theirs every year [4]. An old template is a quick way to look careless.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Download the template from the current Guide for Authors or call for papers, never from an old paper.</li>
            <li>Write inside the template from day one. Converting later breaks equations, figures, and references.</li>
            <li>Do not change margins, fonts, or spacing to meet the page limit. Cut text instead.</li>
            <li>Read the whole guide, including word limits, article types, and anonymization rules.</li>
          </ul>
          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Copy the journal&apos;s requirements into a one-page checklist before you start writing. You will use it again at the end.
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 2: A Weak First Page</h3>
          <p>
            The title, abstract, and keywords are what editors read first (Fig. 4).
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Keep the title specific and short, roughly 10 to 15 words, without unclear abbreviations.</li>
            <li>Keep the abstract within the word limit as a single paragraph. For IEEE papers, leave out citations, equations, and undefined abbreviations [5].</li>
            <li>Choose four to six keywords that add information. Do not just repeat the title.</li>
            <li>Check every author name, affiliation, and the corresponding author&apos;s details.</li>
          </ul>

          {/* Fig. 31 -> fig31.png (Fig. 4) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig31.png" 
              alt="First-page mistakes that editors notice, and the clean version" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 4. First-page mistakes that editors notice, and the clean version.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 3: Missing Declarations and Statements</h3>
          <p>
            Q1 and Q2 journals usually require a set of statements. Forgetting one is a common reason for an administrative return.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Author contributions, ideally in the CRediT format [6].</li>
            <li>Competing interests, funding sources, and acknowledgments.</li>
            <li>Data availability, and ethics approval where it applies.</li>
            <li>Any generative AI disclosure the journal requires.</li>
            <li>Agree on authorship early. Everyone listed should have contributed, and nobody who contributed should be missing, which matches the core practices of the Committee on Publication Ethics [7].</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 4: Skipping the Originality Check</h3>
          <p>
            Overlap with your own thesis, preprint, or conference paper is a classic trap. Editors run similarity checks, so you should run one first [8]. Rewrite overlapping passages, cite the earlier work, and explain any legitimate overlap in the cover letter. A journal extension of a conference paper should contain clearly new material.
          </p>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 5: Low-Quality Figures</h3>
          <p>
            Blurry or oversized figures are the easiest formatting problem to spot. Export plots and diagrams as vector PDF or EPS, and use TIFF or PNG for photos (Fig. 5). Elsevier commonly asks for 1000 dpi for line art, 300 dpi for halftone, and 500 dpi for combination images [9]. IEEE commonly asks for 600 dpi for line art and 300 dpi for color and grayscale images. Check your journal, because requirements vary.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Size each figure at its final column width and keep text at 7 to 9 pt.</li>
            <li>Make figures readable in grayscale, and avoid red-green pairs for color-blind readers [10].</li>
            <li>Put captions below figures, and cite every figure in the text.</li>
            <li>Never submit screenshots of plots, and never upscale a low-resolution image.</li>
          </ul>

          {/* Fig. 32 -> fig32.png (Fig. 5) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig32.png" 
              alt="A quick decision path for exporting figures" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 5. A quick decision path for exporting figures.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 6: Messy Tables and Equations</h3>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Keep tables as editable text, never images, with captions above.</li>
            <li>Put units in column headers and use consistent decimal places.</li>
            <li>Number and cross-reference equations with labels, and punctuate them as part of the sentence.</li>
            <li>Define every symbol, and keep notation consistent across the paper.</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 7: Reference Chaos</h3>
          <p>
            Mixed citation styles look careless (Fig. 6). Match the journal&apos;s style, whether numbered or author-year, and let a reference manager or BibTeX do the formatting.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Check every in-text citation against the list, and every entry against a citation.</li>
            <li>Add DOIs, complete page ranges, and consistent journal names.</li>
            <li>Search the compiled PDF for [?] before you submit.</li>
            <li>Include recent work and limit self-citation to what is relevant.</li>
          </ul>

          {/* Fig. 33 -> fig33.png (Fig. 6) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig33.png" 
              alt="Mixed reference styles versus one consistent style" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 6. Mixed reference styles versus one consistent style.
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 8: Inconsistent Details</h3>
          <p>Small inconsistencies add up to a sloppy impression. Do one dedicated consistency pass.</p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Headings, numbering, and capitalization follow one pattern.</li>
            <li>Abbreviations are defined at first use, in the abstract and again in the text.</li>
            <li>Units follow SI conventions, with spaces between numbers and units.</li>
            <li>Spelling is consistent, either US or UK English, and figure and table references match their numbers.</li>
          </ul>

          <h3 className="text-2xl font-bold text-slate-900 pt-6">Pitfall 9: A Messy Submission Package</h3>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Name files clearly, such as Manuscript, Title_Page, Figure_1, and Supplementary_1.</li>
            <li>For double-blind review, remove names, self-identifying acknowledgments, and metadata.</li>
            <li>Write a short cover letter that states the contribution, why this journal fits, and that the work is not under review elsewhere.</li>
            <li>Prepare highlights, a graphical abstract, and source files if the journal asks for them.</li>
            <li>Do a dry run in the submission system and read the PDF it generates.</li>
          </ul>
          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> The system-generated PDF often reveals broken figures or missing fonts that your own PDF hides.
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Your Two-Week Pre-Submission Timeline</h2>
          <p>
            Spread the work out instead of doing everything the night before (Fig. 7). Each stage has one job, and that keeps mistakes from piling up.
          </p>

          {/* Fig. 34 -> fig34.png (Fig. 7) */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig34.png" 
              alt="A two-week schedule for a calm, error-free submission" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 7. A two-week schedule for a calm, error-free submission.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Final Manuscript Formatting Checklist</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>The current template and Guide for Authors are followed, and the page and word limits are met.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Title, abstract, keywords, and author details are correct and complete.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>All declarations and statements are included.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>A similarity check is done, and any overlap is explained.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Figures meet the dpi and size rules, and tables are editable text.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Equations are numbered and punctuated, and notation is consistent.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>References use one style and the compiled PDF has no [?].</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>File names are clear, the cover letter is ready, and the dry run is done.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-black text-slate-950 pt-6">What to Do If Formatting Triggers a Return</h2>
          <p>
            A technical return is not a rejection. The journal is asking you to fix specific items. Read the list carefully, correct every point, and resubmit promptly. Then add the lesson to your own checklist so the same mistake never costs you time again.
          </p>
          <p className="font-bold text-slate-900 text-xl pt-4">
            Good manuscript formatting is a habit, not a talent. Follow the template, check the details, and keep your files clean, and your Q1 or Q2 submission gets the fair read it deserves.
          </p>

          {/* References Section */}
          <div className="mt-16 pt-8 border-t-2 border-slate-200 scroll-mt-12">
            <h3 className="text-3xl font-black text-slate-950 mb-6">References</h3>
            <ol className="list-decimal pl-5 space-y-4 text-base text-slate-700 leading-relaxed">
              <li>SCImago, &quot;SJR: SCImago Journal &amp; Country Rank,&quot; scimagojr.com.</li>
              <li>Clarivate, &quot;Journal Citation Reports,&quot; clarivate.com.</li>
              <li>Elsevier, &quot;Guide for Authors,&quot; available on each journal&apos;s homepage at sciencedirect.com.</li>
              <li>IEEE Author Center, &quot;Templates for IEEE journal and conference articles,&quot; ieee.org.</li>
              <li>IEEE, &quot;IEEE Editorial Style Manual for Authors,&quot; IEEE Periodicals.</li>
              <li>A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, &quot;Beyond authorship: Attribution, contribution, collaboration, and credit,&quot; <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151-155, 2015.</li>
              <li>Committee on Publication Ethics (COPE), &quot;Core Practices,&quot; publicationethics.org.</li>
              <li>Crossref, &quot;Similarity Check,&quot; crossref.org.</li>
              <li>Elsevier, &quot;Artwork and media instructions,&quot; Elsevier Author Resources.</li>
              <li>B. Wong, &quot;Points of view: Color blindness,&quot; <i>Nature Methods</i>, vol. 8, no. 6, p. 441, 2011.</li>
            </ol>
          </div>

        </div>

        {/* Share / CTA Box */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
          <div>
            <h4 className="font-black text-2xl mb-1 text-amber-400">Need Expert Manuscript Formatting?</h4>
            <p className="text-sm sm:text-base text-slate-300 mb-2">Avoid desk rejections with professional editing and formatting support from ScholarGrid consultants.</p>
            <p className="text-xs text-slate-400">Direct Email: <a href={gmailWebUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-mono">scholargrid030@gmail.com</a></p>
          </div>
          <a
            href="https://wa.me/923147982032?text=Hello%20ScholarGrid%20team!%20I%20need%20expert%20manuscript%20formatting%20and%20journal%20submission%20support."
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