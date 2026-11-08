"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  BookOpen,
  ChevronRight,
  Menu,
  X,
  List,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "overview", title: "Overview" },
  { id: "step-1", title: "Define the Question and Protocol" },
  { id: "step-2", title: "Search Systematically" },
  { id: "step-3", title: "Screen Studies Transparently" },
  { id: "step-4", title: "Extract Data and Judge Quality" },
  { id: "step-5", title: "Synthesize Like a Senior Researcher" },
  { id: "step-6", title: "Write It Up and Report It" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "final-checklist", title: "Final Checklist" },
  { id: "references", title: "References" },
];

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

function ArticleFigure({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="bg-slate-50 p-3 sm:p-5">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          priority={priority}
          className="mx-auto h-auto max-h-[520px] w-full rounded-lg object-contain"
        />
      </div>
      <figcaption className="border-t border-slate-100 px-4 py-3 text-center text-xs leading-relaxed text-slate-500 sm:px-6 sm:text-sm">
        {caption}
      </figcaption>
    </figure>
  );
}

function SectionHeading({
  id,
  number,
  children,
}: {
  id: string;
  number?: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28 pt-8">
      {number && (
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
          Step {number}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[28px]">
        {children}
      </h2>
      <div className="mt-3 h-1 w-10 rounded-full bg-blue-800" />
    </div>
  );
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-7 font-serif text-xl font-bold text-slate-950">
      {children}
    </h3>
  );
}

function Cite({ n }: { n: number }) {
  return (
    <a
      href={`#ref${n}`}
      className="font-semibold text-blue-800 transition hover:text-blue-950 hover:underline"
    >
      [{n}]
    </a>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-1 h-[18px] w-[18px] shrink-0 text-blue-800" />
      <span>{children}</span>
    </li>
  );
}

function CheckList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-700">
      {children}
    </ul>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-6 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
      <p className="text-sm font-bold text-blue-950">{title}</p>
      <p className="mt-1.5 text-sm leading-[1.8] text-slate-700">{children}</p>
    </div>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg bg-slate-950">
      <p className="border-b border-slate-800 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-blue-200">
        {label}
      </p>
      <div className="overflow-x-auto p-4 sm:p-5">
        <pre className="font-mono text-[13px] leading-6 text-blue-100">
          {code}
        </pre>
      </div>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-blue-950 text-white">
              {headers.map((header) => (
                <th key={header} className="px-4 py-3.5 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row[0]}
                className={`border-b border-slate-100 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3.5 leading-relaxed ${
                      cellIndex === 0
                        ? "font-semibold text-slate-900"
                        : "text-slate-600"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Main blog page                                                      */
/* ------------------------------------------------------------------ */

export default function SystematicLiteratureReviewBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const reviewTypes = [
    ["Narrative review", "You need background or an expert view", "Selective overview"],
    ["Mapping study", "You want to chart a broad area", "Counts and categories"],
    ["Systematic review", "You need a defensible answer to a focused question", "Transparent synthesis"],
    ["Meta-analysis", "Studies report comparable numbers", "Pooled estimate"],
  ];

  const criteria = [
    ["Period", "2015 to 2025", "Earlier work"],
    ["Type", "Peer-reviewed journal and conference papers", "Editorials, theses, posters"],
    ["Topic", "Deep-learning fault diagnosis of rotating machinery", "Other machinery or methods"],
    ["Evidence", "Reports experimental results", "Concept papers without data"],
  ];

  const searchString = `TITLE-ABS-KEY(
  ("predictive maintenance" OR "condition monitoring"
   OR prognostics)
  AND ("deep learning" OR "neural network*")
  AND ("rotating machinery" OR bearing* OR gearbox*) )`;

  const dedupCode = `import pandas as pd

df = pd.read_csv('records.csv')
df['key'] = (df['doi'].str.lower()
    .fillna(df['title'].str.lower()
    .str.replace(r'\\W+', '', regex=True)))
dedup = df.drop_duplicates('key')
print(len(df), '->', len(dedup))`;

  const mistakes = [
    "Searching only one database, or only Google Scholar.",
    "Changing criteria halfway without recording it.",
    "Listing papers instead of synthesizing them.",
    "Skipping quality appraisal.",
    "Submitting with a stale search. Re-run it shortly before you submit.",
    "Ending with vague gaps.",
  ];

  const checklist = [
    "Research questions and protocol are written and dated.",
    "Search strings, databases, dates, and hit counts are recorded.",
    "Criteria are fixed, and screening is documented in a PRISMA flow diagram.",
    "Extraction and quality sheets are complete.",
    "Synthesis shows themes, a taxonomy, and clear gaps.",
    "Limitations and supplementary files are ready.",
  ];

  const references: React.ReactNode[] = [
    <>B. Kitchenham and S. Charters, &quot;Guidelines for performing systematic literature reviews in software engineering,&quot; Keele Univ. and Durham Univ., Tech. Rep. EBSE-2007-01, 2007.</>,
    <>M. J. Page et al., &quot;The PRISMA 2020 statement: An updated guideline for reporting systematic reviews,&quot; <i>BMJ</i>, vol. 372, Art. no. n71, 2021.</>,
    <>M. Petticrew and H. Roberts, <i>Systematic Reviews in the Social Sciences: A Practical Guide</i>. Malden, MA, USA: Blackwell, 2006.</>,
    <>M. Gusenbauer and N. R. Haddaway, &quot;Which academic search systems are suitable for systematic reviews or meta-analyses?&quot; <i>Research Synthesis Methods</i>, vol. 11, no. 2, pp. 181–217, 2020.</>,
    <>C. Wohlin, &quot;Guidelines for snowballing in systematic literature studies and a replication in software engineering,&quot; in <i>Proc. 18th Int. Conf. Eval. Assessment Softw. Eng. (EASE)</i>, 2014, Art. no. 38.</>,
    <>M. Ouzzani, H. Hammady, Z. Fedorowicz, and A. Elmagarmid, &quot;Rayyan: A web and mobile app for systematic reviews,&quot; <i>Systematic Reviews</i>, vol. 5, Art. no. 210, 2016.</>,
    <>J. Cohen, &quot;A coefficient of agreement for nominal scales,&quot; <i>Educational and Psychological Measurement</i>, vol. 20, no. 1, pp. 37–46, 1960.</>,
    <>J. Webster and R. T. Watson, &quot;Analyzing the past to prepare for the future: Writing a literature review,&quot; <i>MIS Quarterly</i>, vol. 26, no. 2, pp. xiii–xxiii, 2002.</>,
    <>V. Braun and V. Clarke, &quot;Using thematic analysis in psychology,&quot; <i>Qualitative Research in Psychology</i>, vol. 3, no. 2, pp. 77–101, 2006.</>,
    <>N. J. van Eck and L. Waltman, &quot;Software survey: VOSviewer, a computer program for bibliometric mapping,&quot; <i>Scientometrics</i>, vol. 84, no. 2, pp. 523–538, 2010.</>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Literature Review Methods and Publishing Insights
      </div>

      {/* Navigation */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <Image
              src="/logo.png"
              alt="ScholarGrid Logo"
              width={40}
              height={40}
              priority
              className="h-9 w-9 object-contain"
            />
            <span className="font-serif text-xl font-bold tracking-tight text-slate-950">
              ScholarGrid
            </span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <Link href="/" className="transition hover:text-blue-800">Home</Link>
            <Link href="/#services" className="transition hover:text-blue-800">Services</Link>
            <Link href="/#process" className="transition hover:text-blue-800">How it works</Link>
            <Link href="/#insights" className="transition hover:text-blue-800">Insights</Link>
            <Link href="/blog" className="font-semibold text-blue-800 transition hover:text-blue-950">
              Knowledge Library
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
              <Link href="/#insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>Knowledge Library</Link>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Article header */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl px-6 pb-10 pt-9 sm:pb-12 sm:pt-12">
            {/* Breadcrumb */}
            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm">
              <Link href="/" className="font-medium text-slate-500 transition hover:text-blue-800">
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400" />
              <Link href="/blog" className="font-medium text-slate-500 transition hover:text-blue-800">
                Knowledge Library
              </Link>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="font-medium text-blue-800">Literature Review</span>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Literature Review Guide
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} />
                November 2026
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} />
                10 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              A Practical Guide to Systematic Literature Reviews
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical walkthrough for PhD scholars and engineering authors,
              from defining the question to synthesizing the evidence.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <Image
                    src="/logo.png"
                    alt="ScholarGrid"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-950">ScholarGrid Technical Team</p>
                  <p className="mt-0.5 text-xs text-slate-500">Research and Literature Review Methods</p>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition hover:border-blue-800 hover:bg-blue-50"
              >
                <BookOpen size={15} />
                All Articles
              </Link>
            </div>
          </div>
        </section>

        {/* Article layout */}
        <div
          id="article-content"
          className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-12 lg:py-12"
        >
          <article className="min-w-0">
            {/* Overview */}
            <div
              id="overview"
              className="mb-7 scroll-mt-28 space-y-4 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6"
            >
              <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                A literature review that lists papers one after another is easy
                to write and easy to reject. A <strong>systematic literature
                review (SLR)</strong> does something harder. It follows a
                documented method, so another researcher could repeat your
                search and arrive at the same set of papers. Journals value this
                because it makes the review fair, transparent, and checkable.
                Guidelines such as Kitchenham and Charters <Cite n={1} /> and
                the PRISMA 2020 statement <Cite n={2} /> describe the process,
                and Fig. 1 shows it in six steps.
              </p>
              <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                Senior researchers add one more thing: they synthesize. They do
                not report what each paper did. They show patterns, conflicts,
                and gaps across the whole body of work. This guide covers both
                the method and the thinking.
              </p>
            </div>

            <ArticleFigure
              src="/blogs/fig21.png"
              alt="The six steps of a systematic literature review"
              caption="Fig. 1. The six steps of a systematic literature review."
              priority
            />

            {/* Step 1 */}
            <SectionHeading id="step-1" number="01">
              Define the Question and Write a Protocol
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Everything downstream depends on a sharp question. &quot;What is
              known about machine learning in maintenance?&quot; is far too
              broad. Frame the question with a structure such as PICO(C):
              population, intervention, comparison, outcome, and context{" "}
              <Cite n={3} />. First, check that an SLR is the right type of
              review.
            </p>

            <DataTable
              headers={["Review type", "Use it when", "Output"]}
              rows={reviewTypes}
            />

            <CheckList>
              <Check>
                Write two to four research questions, such as: RQ1, which
                architectures are used? RQ2, how are they validated? RQ3, what
                gaps remain?
              </Check>
              <Check>
                Write a protocol before you search: databases, search strings,
                criteria, extraction fields, quality questions, and how
                disagreements are resolved.
              </Check>
              <Check>
                Date-stamp the protocol in a repository or on OSF. It proves you
                did not change the criteria after seeing the results.
              </Check>
            </CheckList>

            <Callout title="Colleague tip">
              Show the protocol to your supervisor before you search. Changing
              the question after 800 papers are screened is painful.
            </Callout>

            {/* Step 2 */}
            <SectionHeading id="step-2" number="02">
              Search Systematically
            </SectionHeading>

            <CheckList>
              <Check>
                Use at least two or three major databases, such as Scopus, Web
                of Science, and IEEE Xplore or ScienceDirect.
              </Check>
              <Check>
                Do not rely on Google Scholar alone. Its results are hard to
                reproduce and cannot be exported cleanly <Cite n={4} />.
              </Check>
              <Check>
                Build the search string from concept blocks. Join synonyms with
                OR inside a block, and join blocks with AND (Fig. 2).
              </Check>
              <Check>
                Pilot the string. If it misses five to ten papers you already
                know are relevant, revise it.
              </Check>
              <Check>
                Record the database, date, string, filters, and number of hits
                for every search.
              </Check>
              <Check>
                Add backward and forward snowballing to catch papers the
                databases missed <Cite n={5} />.
              </Check>
            </CheckList>

            <CodeBlock label="Scopus search string" code={searchString} />

            <ArticleFigure
              src="/blogs/fig22.png"
              alt="Search string built from concept blocks"
              caption="Fig. 2. A search string built from concept blocks: OR inside a block, AND between blocks."
            />

            {/* Step 3 */}
            <SectionHeading id="step-3" number="03">
              Screen Studies Transparently
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Write your inclusion and exclusion criteria before screening, and
              apply them the same way to every paper.
            </p>

            <DataTable
              headers={["Criterion", "Include", "Exclude"]}
              rows={criteria}
            />

            <CheckList>
              <Check>
                Remove duplicates first, using the DOI or a cleaned title (code
                below).
              </Check>
              <Check>
                Screen in two rounds: titles and abstracts, then full texts.
                Record the reason for every full-text exclusion.
              </Check>
              <Check>
                Tools such as Rayyan <Cite n={6} /> and Zotero make this much
                easier.
              </Check>
              <Check>
                Have two reviewers screen at least a sample independently.
                Measure agreement with Cohen&apos;s kappa <Cite n={7} /> and
                settle disagreements by discussion.
              </Check>
            </CheckList>

            <CodeBlock label="Python" code={dedupCode} />

            <p className={P}>
              Report the counts in a PRISMA 2020 flow diagram <Cite n={2} />{" "}
              (Fig. 3).
            </p>

            <ArticleFigure
              src="/blogs/fig23.png"
              alt="PRISMA-style flow diagram"
              caption="Fig. 3. A PRISMA-style flow diagram with illustrative numbers."
            />

            {/* Step 4 */}
            <SectionHeading id="step-4" number="04">
              Extract Data and Judge Quality
            </SectionHeading>

            <CheckList>
              <Check>
                Build the extraction sheet before reading in depth. Typical
                columns: citation, year, problem, method, data, metrics,
                results, and limitations.
              </Check>
              <Check>
                Pilot the sheet on five papers, then fix it. Changing columns
                later means re-reading everything.
              </Check>
              <Check>
                Copy numbers exactly as reported, with units, conditions, and
                page numbers.
              </Check>
              <Check>
                Judge quality with four to six yes/no questions, such as: Are
                the aims clear? Is the data described? Are the baselines fair?
                Are limitations stated?
              </Check>
              <Check>
                Do not hide weak studies. Say how they affect your confidence in
                the findings.
              </Check>
            </CheckList>

            <Callout title="Colleague tip">
              When a reviewer asks where a number came from, you will find it in
              a minute if you saved the page number.
            </Callout>

            {/* Step 5 */}
            <SectionHeading id="step-5" number="05">
              Synthesize Like a Senior Researcher
            </SectionHeading>

            <p className={`${P} mt-4`}>
              This is where reviews succeed or fail. A summary says what each
              paper did. A synthesis says what the papers mean together (Fig.
              4).
            </p>

            <ArticleFigure
              src="/blogs/fig24.png"
              alt="Summary versus synthesis"
              caption="Fig. 4. Summary versus synthesis: the second paragraph interprets the pattern (illustrative)."
            />

            <CheckList>
              <Check>
                Build a concept matrix with papers as rows and themes as columns{" "}
                <Cite n={8} />. The column totals show you what the field
                actually studies (Fig. 5).
              </Check>
              <Check>
                Code the papers systematically. Thematic analysis gives a clear
                routine: read, code, group, and name the themes <Cite n={9} />.
              </Check>
              <Check>
                Turn themes into a taxonomy that organizes the methods and shows
                how they relate (Fig. 6).
              </Check>
              <Check>
                Compare results on common metrics only when conditions are
                comparable. When they are not, say so.
              </Check>
              <Check>
                Look for contradictions, and offer reasons: different data,
                settings, or definitions.
              </Check>
              <Check>
                For large sets, keyword and co-citation maps from VOSviewer can
                reveal clusters you did not expect <Cite n={10} />.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig25.png"
              alt="Concept matrix of papers and themes"
              caption="Fig. 5. A concept matrix: papers as rows, themes as columns, totals at the bottom (illustrative)."
            />

            <ArticleFigure
              src="/blogs/fig26.png"
              alt="Taxonomy built from themes"
              caption="Fig. 6. A taxonomy built from the themes found in the reviewed papers."
            />

            <SubHeading>Find the Gap</SubHeading>

            <p className={`${P} mt-3`}>
              Cross two dimensions, such as method and application, and count
              the studies in each cell (Fig. 7). Thin cells are candidate gaps.
              Check that a gap matters and is not just empty. A real gap is one
              a reviewer would agree is worth filling.
            </p>

            <ArticleFigure
              src="/blogs/fig27.png"
              alt="Gap map of methods against applications"
              caption="Fig. 7. A gap map: methods against applications, with thin rows highlighted (illustrative)."
            />

            <Callout title="Colleague tip">
              Write each gap as a sentence a future paper could answer:
              &quot;No study validates transformer models on wind-turbine
              data.&quot; Avoid &quot;more research is needed.&quot;
            </Callout>

            {/* Step 6 */}
            <SectionHeading id="step-6" number="06">
              Write It Up and Report It
            </SectionHeading>

            <CheckList>
              <Check>
                Structure: Introduction, Method (databases, strings, criteria,
                flow diagram), Results (descriptive statistics, then themes),
                Discussion, Threats to validity, and Conclusion.
              </Check>
              <Check>
                Write each theme as an argument. Open with the finding, then
                support it with the studies.
              </Check>
              <Check>
                Use tables for details and prose for insight. Never walk through
                papers one by one.
              </Check>
              <Check>
                Be honest about limits: database coverage, language, publication
                bias, and subjective coding.
              </Check>
              <Check>Tie future directions to the gaps you found.</Check>
              <Check>
                Share search strings and the extraction sheet as supplementary
                files so others can reproduce your work.
              </Check>
            </CheckList>

            {/* Common mistakes */}
            <SectionHeading id="common-mistakes">
              Common Mistakes
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Several recurring issues weaken otherwise good reviews. Check the
              following points before you write up.
            </p>

            <div className="mt-5 space-y-2.5">
              {mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-[1.8] text-slate-700">{mistake}</p>
                </div>
              ))}
            </div>

            {/* Final checklist */}
            <SectionHeading id="final-checklist">
              Final Checklist
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your review, use this checklist to evaluate its
              overall quality and transparency.
            </p>

            <div className="mt-5 space-y-2">
              {checklist.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" />
                  <span className="text-sm leading-[1.8] text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            {/* References */}
            <div
              id="references"
              className="mt-12 scroll-mt-28 border-t border-slate-200 pt-8"
            >
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                Further Reading
              </p>
              <h2 className="font-serif text-2xl font-bold text-slate-950 sm:text-3xl">
                References
              </h2>

              <ol className="mt-5 list-decimal space-y-3 pl-5 text-[13px] leading-[1.8] text-slate-600 sm:text-sm">
                {references.map((reference, index) => (
                  <li key={index} id={`ref${index + 1}`} className="scroll-mt-28 pl-1">
                    {reference}
                  </li>
                ))}
              </ol>
            </div>

            {/* Article ending */}
            <div className="mt-10 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800">
                ScholarGrid Research Library
              </p>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                A strong review is not the one with the most papers. It is the
                one a reader can trust, repeat, and build on. Follow the method,
                show your work, and let the synthesis carry your argument.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  <ArrowLeft size={16} />
                  Back to Knowledge Library
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Explore ScholarGrid
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">
              {/* Table of contents */}
              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <List size={17} className="text-blue-800" />
                  <h3 className="font-serif text-base font-bold text-slate-950">
                    In This Article
                  </h3>
                </div>

                <div className="mt-3 space-y-0.5">
                  {contents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 rounded-md px-2 py-2 text-[12px] leading-relaxed text-slate-600 transition hover:bg-blue-50 hover:text-blue-900"
                    >
                      <span className="mt-0.5 text-[10px] font-bold text-slate-400 group-hover:text-blue-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{item.title}</span>
                      <ChevronRight
                        size={12}
                        className="mt-1 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Knowledge library card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                  <BookOpen size={19} />
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-950">
                  Explore More Research Guides
                </h3>
                <p className="mt-2 text-[13px] leading-[1.8] text-slate-600">
                  Discover practical resources on academic writing, literature
                  reviews, research methodology, and scholarly publishing.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  Browse All Articles
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Homepage link */}
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900"
              >
                <ArrowLeft size={15} />
                Back to Homepage
              </Link>
            </div>
          </aside>
        </div>

        {/* Related reading section */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                  Continue Exploring
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-slate-950">
                  More from the Research Library
                </h2>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
              >
                View All Articles
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ScholarGrid Logo"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="font-serif text-xl font-bold text-white">
                ScholarGrid
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-[1.8]">
              An academic knowledge platform sharing practical research
              resources, scholarly writing guidance, and publishing insights
              for researchers across disciplines.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white">Explore ScholarGrid</h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/#services" className="transition hover:text-white">Academic Services</Link></li>
              <li><Link href="/#process" className="transition hover:text-white">How It Works</Link></li>
              <li><Link href="/#faq" className="transition hover:text-white">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Article links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Research Resources</h3>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li><Link href="/blog/formatting-guide" className="transition hover:text-white">Manuscript Formatting</Link></li>
              <li><Link href="/blog/paper-rejection-reasons" className="transition hover:text-white">Journal Rejection Guide</Link></li>
              <li><Link href="/blog/contour-visualizations" className="transition hover:text-white">Scientific Visualization</Link></li>
              <li><Link href="/blog/systematic-literature-review-guide" className="transition hover:text-white">Literature Review Guide</Link></li>
              <li><Link href="/blog/q1-research-paper-structure" className="transition hover:text-white">Q1 Research Paper Structure</Link></li>
              <li><Link href="/blog" className="transition hover:text-white">All Articles</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 px-6 py-5 text-center text-xs leading-relaxed text-slate-500">
          © 2026 ScholarGrid. All rights reserved.
        </div>
      </footer>
    </div>
  );
}