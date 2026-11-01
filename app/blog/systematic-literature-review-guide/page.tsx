import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Calendar, Clock, CheckCircle2, ShieldAlert, Mail } from 'lucide-react';

export default function SystematicLiteratureReviewBlog() {
  const emailAddress = "scholargrid030@gmail.com";
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Systematic%20Literature%20Review%20Inquiry&body=Hello%20ScholarGrid%20team,%20I%20need%20assistance%20with%20conducting%20a%20systematic%20literature%20review%20and%20synthesizing%20prior%20work%20for%20my%20research.`;

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
            <ShieldAlert size={14} /> Research Methodology Guide
          </span>
          <span className="flex items-center gap-1"><Calendar size={14} /> October 2026</span>
          <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
        </div>

        {/* Blog Title */}
        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight mb-6 leading-[1.15]">
          How to Conduct a Systematic Literature Review (SLR) and Synthesize Prior Work Like a Senior Researcher
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
          
          <div className="bg-slate-50 border-l-4 border-blue-700 p-6 rounded-r-2xl text-slate-800 shadow-sm space-y-4">
            <p className="text-base md:text-lg leading-relaxed">
              A literature review that lists papers one after another is easy to write and easy to reject. A systematic literature review (SLR) does something harder. It follows a documented method, so another researcher could repeat your search and arrive at the same set of papers. Journals value this because it makes the review fair, transparent, and checkable. Guidelines such as Kitchenham and Charters [1] and the PRISMA 2020 statement [2] describe the process, and Fig. 1 shows it in six steps[cite: 5].
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Senior researchers add one more thing: they synthesize. They do not report what each paper did. They show patterns, conflicts, and gaps across the whole body of work. This guide covers both the method and the thinking[cite: 5].
            </p>
          </div>

          {/* Fig. 1 -> fig21.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig21.png" 
              alt="Fig. 1. The six steps of a systematic literature review" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 1. The six steps of a systematic literature review[cite: 5].
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 1: Define the Question and Write a Protocol</h2>
          <p>
            Everything downstream depends on a sharp question. 'What is known about machine learning in maintenance?' is far too broad. Frame the question with a structure such as PICO(C): population, intervention, comparison, outcome, and context [3]. First, check that an SLR is the right type of review[cite: 5].
          </p>

          {/* Review Types Table */}
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold border-b border-slate-700">Review type</th>
                  <th className="p-4 font-bold border-b border-slate-700">Use it when</th>
                  <th className="p-4 font-bold border-b border-slate-700">Output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Narrative review</td>
                  <td className="p-4">You need background or an expert view</td>
                  <td className="p-4">Selective overview</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Mapping study</td>
                  <td className="p-4">You want to chart a broad area</td>
                  <td className="p-4">Counts and categories</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Systematic review</td>
                  <td className="p-4">You need a defensible answer to a focused question</td>
                  <td className="p-4">Transparent synthesis</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Meta-analysis</td>
                  <td className="p-4">Studies report comparable numbers</td>
                  <td className="p-4">Pooled estimate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Write two to four research questions, such as: RQ1, which architectures are used? RQ2, how are they validated? RQ3, what gaps remain[cite: 5]?
          </p>
          <p>
            Write a protocol before you search: databases, search strings, criteria, extraction fields, quality questions, and how disagreements are resolved[cite: 5].
          </p>
          <p>
            Date-stamp the protocol in a repository or on OSF. It proves you did not change the criteria after seeing the results[cite: 5].
          </p>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Show the protocol to your supervisor before you search. Changing the question after 800 papers are screened is painful[cite: 5].
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 2: Search Systematically</h2>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Use at least two or three major databases, such as Scopus, Web of Science, and IEEE Xplore or ScienceDirect[cite: 5].</li>
            <li>Do not rely on Google Scholar alone. Its results are hard to reproduce and cannot be exported cleanly[cite: 5, 4].</li>
            <li>Build the search string from concept blocks. Join synonyms with OR inside a block, and join blocks with AND (Fig. 2)[cite: 5].</li>
            <li>Pilot the string. If it misses five to ten papers you already know are relevant, revise it[cite: 5].</li>
            <li>Record the database, date, string, filters, and number of hits for every search[cite: 5].</li>
            <li>Add backward and forward snowballing to catch papers the databases missed[cite: 5, 5].</li>
          </ul>

          <div className="bg-slate-900 text-amber-400 p-6 rounded-2xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
            <code>
              Scopus search string<br />
              TITLE-ABS-KEY(<br />
              &nbsp;&nbsp;("predictive maintenance" OR "condition monitoring"<br />
              &nbsp;&nbsp;&nbsp;OR prognostics)<br />
              &nbsp;&nbsp;AND ("deep learning" OR "neural network*")<br />
              &nbsp;&nbsp;AND ("rotating machinery" OR bearing* OR gearbox*) )
            </code>
          </div>

          {/* Fig. 2 -> fig22.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig22.png" 
              alt="Fig. 2. A search string built from concept blocks" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 2. A search string built from concept blocks: OR inside a block, AND between blocks[cite: 5].
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 3: Screen Studies Transparently</h2>
          <p>
            Write your inclusion and exclusion criteria before screening, and apply them the same way to every paper[cite: 5].
          </p>

          {/* Inclusion/Exclusion Criteria Table */}
          <div className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-sm">
            <table className="w-full text-left border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 font-bold border-b border-slate-700">Criterion</th>
                  <th className="p-4 font-bold border-b border-slate-700">Include</th>
                  <th className="p-4 font-bold border-b border-slate-700">Exclude</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Period</td>
                  <td className="p-4">2015 to 2025</td>
                  <td className="p-4">Earlier work</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Type</td>
                  <td className="p-4">Peer-reviewed journal and conference papers</td>
                  <td className="p-4">Editorials, theses, posters</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Topic</td>
                  <td className="p-4">Deep-learning fault diagnosis of rotating machinery</td>
                  <td className="p-4">Other machinery or methods</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-semibold">Evidence</td>
                  <td className="p-4">Reports experimental results</td>
                  <td className="p-4">Concept papers without data</td>
                </tr>
              </tbody>
            </table>
          </div>

          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Remove duplicates first, using the DOI or a cleaned title (code below)[cite: 5].</li>
            <li>Screen in two rounds: titles and abstracts, then full texts. Record the reason for every full-text exclusion[cite: 5].</li>
            <li>Tools such as Rayyan [6] and Zotero make this much easier[cite: 5].</li>
            <li>Have two reviewers screen at least a sample independently. Measure agreement with Cohen's kappa [7] and settle disagreements by discussion[cite: 5].</li>
          </ul>

          <div className="bg-slate-900 text-amber-400 p-6 rounded-2xl font-mono text-xs sm:text-sm overflow-x-auto shadow-inner">
            <code>
              import pandas as pd<br />
              df = pd.read_csv('records.csv')<br />
              df['key'] = (df['doi'].str.lower()<br />
              &nbsp;&nbsp;&nbsp;&nbsp;.fillna(df['title'].str.lower()<br />
              &nbsp;&nbsp;&nbsp;&nbsp;.str.replace(r'\W+', '', regex=True)))<br />
              dedup = df.drop_duplicates('key')<br />
              print(len(df), '-&gt;', len(dedup))
            </code>
          </div>

          <p>
            Report the counts in a PRISMA 2020 flow diagram [2] (Fig. 3)[cite: 5, 2].
          </p>

          {/* Fig. 3 -> fig23.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig23.png" 
              alt="Fig. 3. A PRISMA-style flow diagram with illustrative numbers" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 3. A PRISMA-style flow diagram with illustrative numbers[cite: 5].
            </p>
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 4: Extract Data and Judge Quality</h2>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Build the extraction sheet before reading in depth. Typical columns: citation, year, problem, method, data, metrics, results, and limitations[cite: 5].</li>
            <li>Pilot the sheet on five papers, then fix it. Changing columns later means re-reading everything[cite: 5].</li>
            <li>Copy numbers exactly as reported, with units, conditions, and page numbers[cite: 5].</li>
            <li>Judge quality with four to six yes/no questions, such as: Are the aims clear? Is the data described? Are the baselines fair? Are limitations stated[cite: 5]?</li>
            <li>Do not hide weak studies. Say how they affect your confidence in the findings[cite: 5].</li>
          </ul>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> When a reviewer asks where a number came from, you will find it in a minute if you saved the page number[cite: 5].
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 5: Synthesize Like a Senior Researcher</h2>
          <p>
            This is where reviews succeed or fail. A summary says what each paper did. A synthesis says what the papers mean together (Fig. 4)[cite: 5].
          </p>

          {/* Fig. 4 -> fig24.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig24.png" 
              alt="Fig. 4. Summary versus synthesis" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 4. Summary versus synthesis: the second paragraph interprets the pattern (illustrative)[cite: 5].
            </p>
          </div>

          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Build a concept matrix with papers as rows and themes as columns [8]. The column totals show you what the field actually studies (Fig. 5)[cite: 5].</li>
            <li>Code the papers systematically. Thematic analysis gives a clear routine: read, code, group, and name the themes [9][cite: 5].</li>
            <li>Turn themes into a taxonomy that organizes the methods and shows how they relate (Fig. 6)[cite: 5].</li>
            <li>Compare results on common metrics only when conditions are comparable. When they are not, say so[cite: 5].</li>
            <li>Look for contradictions, and offer reasons: different data, settings, or definitions[cite: 5].</li>
            <li>For large sets, keyword and co-citation maps from VOSviewer can reveal clusters you did not expect [10][cite: 5].</li>
          </ul>

          {/* Fig. 5 -> fig25.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig25.png" 
              alt="Fig. 5. A concept matrix" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 5. A concept matrix: papers as rows, themes as columns, totals at the bottom (illustrative)[cite: 5].
            </p>
          </div>

          {/* Fig. 6 -> fig26.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig26.png" 
              alt="Fig. 6. A taxonomy built from themes" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 6. A taxonomy built from the themes found in the reviewed papers[cite: 5].
            </p>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 pt-4">Find the Gap</h3>
          <p>
            Cross two dimensions, such as method and application, and count the studies in each cell (Fig. 7). Thin cells are candidate gaps. Check that a gap matters and is not just empty. A real gap is one a reviewer would agree is worth filling[cite: 5].
          </p>

          {/* Fig. 7 -> fig27.png */}
          <div className="my-10 p-6 bg-slate-50 border border-slate-200 rounded-3xl text-center shadow-sm">
            <img 
              src="/blogs/fig27.png" 
              alt="Fig. 7. A gap map" 
              className="w-full h-auto rounded-2xl mx-auto object-contain max-h-[500px]"
            />
            <p className="text-xs sm:text-sm text-slate-500 mt-4 font-medium italic">
              Fig. 7. A gap map: methods against applications, with thin rows highlighted (illustrative)[cite: 5].
            </p>
          </div>

          <div className="bg-slate-50 border-l-4 border-blue-700 p-4 rounded-r-xl text-slate-800 text-sm italic">
            <strong>Colleague tip:</strong> Write each gap as a sentence a future paper could answer: 'No study validates transformer models on wind-turbine data.' Avoid 'more research is needed'[cite: 5].
          </div>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Step 6: Write It Up and Report It</h2>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Structure: Introduction, Method (databases, strings, criteria, flow diagram), Results (descriptive statistics, then themes), Discussion, Threats to validity, and Conclusion[cite: 5].</li>
            <li>Write each theme as an argument. Open with the finding, then support it with the studies[cite: 5].</li>
            <li>Use tables for details and prose for insight. Never walk through papers one by one[cite: 5].</li>
            <li>Be honest about limits: database coverage, language, publication bias, and subjective coding[cite: 5].</li>
            <li>Tie future directions to the gaps you found[cite: 5].</li>
            <li>Share search strings and the extraction sheet as supplementary files so others can reproduce your work[cite: 5].</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Common Mistakes</h2>
          <ul className="space-y-2 pl-5 list-disc text-base">
            <li>Searching only one database, or only Google Scholar[cite: 5].</li>
            <li>Changing criteria halfway without recording it[cite: 5].</li>
            <li>Listing papers instead of synthesizing them[cite: 5].</li>
            <li>Skipping quality appraisal[cite: 5].</li>
            <li>Submitting with a stale search. Re-run it shortly before you submit[cite: 5].</li>
            <li>Ending with vague gaps[cite: 5].</li>
          </ul>

          <h2 className="text-3xl font-black text-slate-950 pt-6">Final Checklist</h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Research questions and protocol are written and dated[cite: 5].</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Search strings, databases, dates, and hit counts are recorded[cite: 5].</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Criteria are fixed, and screening is documented in a PRISMA flow diagram[cite: 5].</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Extraction and quality sheets are complete[cite: 5].</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Synthesis shows themes, a taxonomy, and clear gaps[cite: 5].</span>
            </li>
            <li className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 text-base">
              <CheckCircle2 className="text-emerald-600 shrink-0" size={20} />
              <span>Limitations and supplementary files are ready[cite: 5].</span>
            </li>
          </ul>

          <p className="font-bold text-slate-900 text-xl pt-4">
            A strong review is not the one with the most papers. It is the one a reader can trust, repeat, and build on. Follow the method, show your work, and let the synthesis carry your argument[cite: 5].
          </p>

          {/* References Section */}
          <div className="mt-16 pt-8 border-t-2 border-slate-200 scroll-mt-12">
            <h3 className="text-3xl font-black text-slate-950 mb-6">References</h3>
            <ol className="list-decimal pl-5 space-y-4 text-base text-slate-700 leading-relaxed">
              <li>B. Kitchenham and S. Charters, "Guidelines for performing systematic literature reviews in software engineering," Keele Univ. and Durham Univ., Tech. Rep. EBSE-2007-01, 2007[cite: 5].</li>
              <li>M. J. Page et al., "The PRISMA 2020 statement: An updated guideline for reporting systematic reviews," <i>BMJ</i>, vol. 372, Art. no. n71, 2021[cite: 5].</li>
              <li>M. Petticrew and H. Roberts, <i>Systematic Reviews in the Social Sciences: A Practical Guide</i>. Malden, MA, USA: Blackwell, 2006[cite: 5].</li>
              <li>M. Gusenbauer and N. R. Haddaway, "Which academic search systems are suitable for systematic reviews or meta-analyses?" <i>Research Synthesis Methods</i>, vol. 11, no. 2, pp. 181-217, 2020[cite: 5].</li>
              <li>C. Wohlin, "Guidelines for snowballing in systematic literature studies and a replication in software engineering," in <i>Proc. 18th Int. Conf. Eval. Assessment Softw. Eng. (EASE)</i>, 2014, Art. no. 38[cite: 5].</li>
              <li>M. Ouzzani, H. Hammady, Z. Fedorowicz, and A. Elmagarmid, "Rayyan: A web and mobile app for systematic reviews," <i>Systematic Reviews</i>, vol. 5, Art. no. 210, 2016[cite: 5].</li>
              <li>J. Cohen, "A coefficient of agreement for nominal scales," <i>Educational and Psychological Measurement</i>, vol. 20, no. 1, pp. 37-46, 1960[cite: 5].</li>
              <li>J. Webster and R. T. Watson, "Analyzing the past to prepare for the future: Writing a literature review," <i>MIS Quarterly</i>, vol. 26, no. 2, pp. xiii-xxiii, 2002[cite: 5].</li>
              <li>V. Braun and V. Clarke, "Using thematic analysis in psychology," <i>Qualitative Research in Psychology</i>, vol. 3, no. 2, pp. 77-101, 2006[cite: 5].</li>
              <li>N. J. van Eck and L. Waltman, "Software survey: VOSviewer, a computer program for bibliometric mapping," <i>Scientometrics</i>, vol. 84, no. 2, pp. 523-538, 2010[cite: 5].</li>
            </ol>
          </div>

        </div>

        {/* Share / CTA Box */}
        <div className="mt-20 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 bg-slate-900 text-white p-10 rounded-3xl shadow-2xl">
          <div>
            <h4 className="font-black text-2xl mb-1 text-amber-400">Need Help with Systematic Literature Reviews?</h4>
            <p className="text-sm sm:text-base text-slate-300 mb-2">Get expert research methodology and data synthesis support from ScholarGrid consultants.</p>
            <p className="text-xs text-slate-400">Direct Email: <a href={gmailWebUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline font-mono">scholargrid030@gmail.com</a></p>
          </div>
          <a
            href="https://wa.me/923147982032?text=Hello%20ScholarGrid%20team!%20I%20need%20expert%20support%20for%20conducting%20a%20systematic%20literature%20review%20and%20synthesizing%20prior%20work."
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