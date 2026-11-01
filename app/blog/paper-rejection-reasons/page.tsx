import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, CheckCircle2, ShieldAlert, Mail } from 'lucide-react';

export default function PaperRejectionBlog() {
  const emailAddress = "scholargrid030@gmail.com";
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Paper%20Rejection%20%26%20Publishing%20Strategy%20Inquiry&body=Hello%20ScholarGrid%20team,%20I%20need%20assistance%20with%20avoiding%20rejections%20and%20reviewing%20my%20research%20manuscript.`;

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
          <span className="px-3 py-1 rounded-full bg-red-50 text-red-800 border border-red-200 uppercase tracking-wider flex items-center gap-1.5">
            <ShieldAlert size={14} /> Publishing Strategy
          </span>
          <span className="flex items-center gap-1"><Calendar size={14} /> October 2026</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6 leading-[1.15]">
          Common Reasons Engineering Manuscripts Get Rejected by Journals (And How to Avoid Them)
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
          
          <div className="bg-slate-50 border-l-4 border-red-600 p-6 rounded-r-2xl text-slate-800 shadow-sm space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              Almost every researcher gets rejected, including people with long publication lists. The useful question is why. Most rejections come from a handful of fixable problems, and many happen before a reviewer reads your abstract.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              There are two kinds. A desk rejection means the technical check or the editor stops the paper early. A post-review rejection means reviewers read it and found problems with the work. Fig. 1 shows where each reason in this guide strikes. Always read the journal's own Guide for Authors first.
            </p>
          </div>

          {/* Fig. 1 -> fig7.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig7.png" 
              alt="Fig. 1. Where a manuscript can be stopped" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 1. Where a manuscript can be stopped, and the reasons that usually do it.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 1: Poor Fit With the Journal's Scope</h2>
          <p>
            This is the most common desk rejection and the most avoidable. A strong paper sent to the wrong journal still gets rejected.
          </p>
          <p>
            Editors screen many submissions every week. If your title, abstract, and cover letter do not match the journal's topics, the paper rarely gets past the first look. Some journals also avoid certain article types, such as simulation-only studies or small extensions of earlier work.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Read the aims and scope page, not just the journal's name.</li>
            <li>Skim the last three or four issues. Do the topics, depth, and article types match yours?</li>
            <li>Find five recent papers close to yours. If none are from this journal, ask yourself why.</li>
            <li>In the cover letter, say in two sentences why this journal is the right audience.</li>
          </ul>

          {/* Fig. 2 -> fig8.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig8.png" 
              alt="Fig. 2. A good fit intersection" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 2. A good fit sits where your paper, the journal's scope, and its recent papers overlap.
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Cite one or two recent papers from the target journal where they genuinely belong. It shows the editor you know the audience.
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 2: The Novelty Is Not Clear</h2>
          <p>
            Reviewers often write 'incremental' or 'limited novelty'. Usually the work is fine, but the paper never says what is new.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>State the gap in one sentence in the introduction, backed by specific related work.</li>
            <li>List two or three contributions. Make each one concrete and checkable (Fig. 3).</li>
            <li>Compare against the closest recent methods, not weak older ones.</li>
            <li>Describe what you learned, not just what you did. 'We designed, built, and tested' describes work. 'This cuts error by 18%' describes a contribution.</li>
            <li>Be honest. A known method applied to a new problem is a valid contribution if you say so.</li>
          </ul>

          {/* Fig. 3 -> fig9.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig9.png" 
              alt="Fig. 3. Vague vs Specific contribution" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 3. A vague contribution statement versus a specific, checkable one (illustrative).
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Ask a colleague to say what is new in your paper in one sentence. If they struggle, reviewers will too.
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 3: Weak Methods and Poor Reproducibility</h2>
          <p>
            If a reviewer cannot tell what you did, they cannot trust what you found. Reproducibility is now an expectation, not a bonus.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Report parameters, datasets, hardware, software versions, and settings.</li>
            <li>Use fair baselines: same data, same tuning effort, same metrics.</li>
            <li>Repeat experiments and report mean and spread, not one lucky run (Fig. 4).</li>
            <li>Share code or data where you can, following the FAIR principles.</li>
            <li>Explain why your test conditions are realistic, and say which conditions you left out.</li>
          </ul>
          <p className="text-sm italic text-slate-600">
            The usual gaps are missing hyperparameters, unclear train and test splits, undefined measurement conditions, and baselines copied from older papers that ran under different settings.
          </p>

          {/* Fig. 4 -> fig10.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig10.png" 
              alt="Fig. 4. Single run vs Repeated runs" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 4. A single run can hide noise. Repeated runs with error bars show whether a difference is real.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 4: Claims the Results Do Not Support</h2>
          <p>
            Overclaiming is a favorite target for reviewers. Words like 'robust', 'real-time', 'optimal', and 'outperforms' all need matching evidence (Fig. 5).
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Tie every claim in the abstract to a specific result in the paper.</li>
            <li>Report effect sizes and uncertainty, and do not lean on a single p-value.</li>
            <li>Say where the method fails and which assumptions matter.</li>
            <li>Check that figures, tables, and text agree. Mismatched numbers destroy trust fast.</li>
          </ul>
          <p className="text-sm italic text-slate-600">
            Simulation-only work is a good example. Calling a result 'validated' without experiments, or at least a high-fidelity model, invites a reviewer to say so. Write 'in simulation' wherever that is the truth.
          </p>

          {/* Fig. 5 -> fig11.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig11.png" 
              alt="Fig. 5. Strong words matching evidence" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 5. Strong words need matching evidence.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 5: Formatting and Technical-Check Failures</h2>
          <p>
            These are the most frustrating rejections because they have nothing to do with your science. Many journals run a check before the editor ever sees the paper. Our companion formatting guide covers templates, equations, figures, and references in detail.
          </p>

          {/* Table for formatting issues */}
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold border-b border-slate-700">Problem</th>
                  <th className="p-4 font-bold border-b border-slate-700">Quick Fix</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50"><td className="p-4 font-semibold">Outdated or wrong template</td><td className="p-4">Download the current one from the journal page</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-4 font-semibold">Low-resolution or screenshot figures</td><td className="p-4">Export vector files and check the dpi</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-4 font-semibold">Missing declarations (funding, interests, data, author roles)</td><td className="p-4">Fill in every item on the journal's list</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-4 font-semibold">Broken references such as [?]</td><td className="p-4">Compile from scratch and read the PDF</td></tr>
                <tr className="hover:bg-slate-50"><td className="p-4 font-semibold">Names left in a double-blind submission</td><td className="p-4">Remove names, self-citations in the first person, and identifying acknowledgments</td></tr>
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Do a dry run in the submission system. Read the PDF it generates, because it often shows problems your own PDF hides.
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 6: Ethics and Originality Problems</h2>
          <p>
            Editors take these seriously, and they can end in rejection or worse. Most cases come from carelessness, not bad intent.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>A classic trap is overlap with your own conference paper. Extending a conference paper is normal, but the journal expects clearly new material and a note explaining what changed.</li>
            <li>Run a similarity check before you submit if your institution offers one. Rewrite overlapping text, even from your own earlier papers.</li>
            <li>Never submit the same work to two journals at once, and do not split one study into several thin papers.</li>
            <li>Agree on authorship early. Everyone listed should have contributed, and nobody who contributed should be missing.</li>
            <li>Disclose AI tools, funding, and conflicts of interest as the journal requires.</li>
          </ul>

          {/* Fig. 6 -> fig12.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig12.png" 
              alt="Fig. 6. Ethics red flags" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 6. Four ethics red flags and the habit that avoids each.
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Reason 7: Unclear Writing and a Thin Literature Review</h2>
          <p>
            Reviewers are busy volunteers, and a confusing paper loses their goodwill quickly. They forgive a few language slips. They do not forgive a paper they cannot follow.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Put one idea in each paragraph, with the main point in the first sentence.</li>
            <li>Define abbreviations and keep notation consistent.</li>
            <li>Ask someone outside your project to read it. If English is not your first language, consider a professional editing service.</li>
            <li>Cover the key papers and recent work, and be fair to competing methods.</li>
            <li>Limit self-citation to what is relevant, and cite primary sources.</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-950 pt-6">What to Do After a Rejection</h2>
          <p>
            A rejection is information. Read the letter, wait a day, and read it again. Peer review is imperfect and reviewers often disagree, so you do not have to accept every comment. Take repeated comments seriously, though.
          </p>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>If reviewers found real problems, fix them before sending the paper elsewhere. The next reviewers may be the same people.</li>
            <li>Reformat completely for the next journal, including the cover letter and references.</li>
            <li>Do not resubmit within days to a lower-ranked journal with no changes. The same weaknesses will come back.</li>
            <li>Appeal only if you see a clear factual error, and do it once, politely, with evidence (Fig. 7).</li>
          </ul>

          {/* Fig. 7 -> fig13.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig13.png" 
              alt="Fig. 7. Simple decision path after rejection" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 7. A simple decision path after a rejection.
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Keep a rejection log with the journal, date, and reason. Patterns show up fast and tell you what to fix in your next paper.
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Pre-Submission Checklist</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>The journal's scope and recent papers match your topic.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Your contributions are stated in one clear list.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Methods are complete, baselines are fair, and results include uncertainty.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Every claim has evidence, and limitations are stated.</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Template, figures, references, and declarations pass the journal's checklist.</span>
            </li>
          </ul>

          {/* References Section */}
          <div className="mt-16 pt-8 border-t-2 border-slate-200 scroll-mt-12">
            <h3 className="text-3xl font-black text-slate-950 mb-6">References</h3>
            <ol className="list-decimal pl-5 space-y-4 text-base text-slate-700 leading-relaxed">
              <li>Elsevier, "Guide for Authors," available on each journal's homepage at sciencedirect.com.</li>
              <li>J. Pineau et al., "Improving reproducibility in machine learning research (a report from the NeurIPS 2019 reproducibility program)," <i>Journal of Machine Learning Research</i>, vol. 22, no. 164, pp. 1-20, 2021.</li>
              <li>M. D. Wilkinson et al., "The FAIR Guiding Principles for scientific data management and stewardship," <i>Scientific Data</i>, vol. 3, Art. no. 160018, 2016.</li>
              <li>R. L. Wasserstein and N. A. Lazar, "The ASA statement on p-values: Context, process, and purpose," <i>The American Statistician</i>, vol. 70, no. 2, pp. 129-133, 2016.</li>
              <li>A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, "Beyond authorship: Attribution, contribution, collaboration, and credit," <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151-155, 2015.</li>
              <li>Crossref, "Similarity Check," crossref.org.</li>
              <li>Committee on Publication Ethics (COPE), "Core Practices," publicationethics.org.</li>
              <li>C. J. Kelly, A. Sadeghieh, and K. Adeli, "Peer review in scientific publications: Benefits, critiques, and a survival guide," <i>EJIFCC</i>, vol. 25, no. 3, pp. 227-243, 2014.</li>
              <li>L. Bornmann, "Scientific peer review," <i>Annual Review of Information Science and Technology</i>, vol. 45, no. 1, pp. 197-245, 2011.</li>
            </ol>
          </div>

        </div>

        {/* Share / CTA Box */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
          <div>
            <h4 className="font-black text-2xl mb-1 text-amber-400">Want to Avoid Desk Rejection?</h4>
            <p className="text-sm sm:text-base text-slate-300 mb-2">Get a free pre-submission technical check & professional formatting overhaul from ScholarGrid experts.</p>
            <p className="text-xs text-slate-400">Direct Email: <a href={gmailWebUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-mono">scholargrid030@gmail.com</a></p>
          </div>
          <a
            href="https://wa.me/923147982032?text=Hello%20ScholarGrid%20team!%20I%20want%20a%20pre-submission%20technical%20review%20to%20avoid%20paper%20rejection."
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