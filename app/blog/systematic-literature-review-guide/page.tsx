"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Mail,
  MessageSquare,
  X,
  BookOpen,
  ChevronRight,
  Menu,
  Lightbulb,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Contact configuration                                               */
/* ------------------------------------------------------------------ */

const whatsappNumber = "923147982032";
const emailAddress = "scholargrid030@gmail.com";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello ScholarGrid team! I need expert support for conducting a systematic literature review and synthesizing prior work."
)}`;

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
  "Systematic Literature Review Inquiry"
)}&body=${encodeURIComponent(
  "Hello ScholarGrid team,\n\nI need assistance with conducting a systematic literature review and synthesizing prior work for my research.\n\nThank you."
)}`;

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "define-question", title: "Define the Question and Write a Protocol" },
  { id: "search", title: "Search Systematically" },
  { id: "screening", title: "Screen Studies Transparently" },
  { id: "extraction", title: "Extract Data and Judge Quality" },
  { id: "synthesis", title: "Synthesize Like a Senior Researcher" },
  { id: "write-up", title: "Write It Up and Report It" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "final-checklist", title: "Final Checklist" },
  { id: "references", title: "References" },
];

/* ------------------------------------------------------------------ */
/* Reusable components                                                 */
/* ------------------------------------------------------------------ */

function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-50 p-3 sm:p-6">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="mx-auto h-auto max-h-[560px] w-full rounded-lg object-contain"
        />
      </div>
      <figcaption className="border-t border-slate-100 px-5 py-4 text-center text-sm leading-relaxed text-slate-500 sm:px-8">
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
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
          Step {number}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {children}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-blue-800" />
    </div>
  );
}

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Para({
  children,
  className = "mt-5",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`${className} text-base leading-[1.9] text-slate-700`}>
      {children}
    </p>
  );
}

function TipBox({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
      <p className="flex items-center gap-2 text-sm font-bold text-blue-950">
        <Lightbulb size={16} className="text-blue-800" />
        {title}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{children}</p>
    </div>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
      <div className="border-b border-slate-800 bg-slate-900 px-5 py-2.5 text-xs font-semibold text-slate-400">
        {label}
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-amber-300 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function DataTable({
  headers,
  rows,
  minWidth = "min-w-[560px]",
}: {
  headers: string[];
  rows: string[][];
  minWidth?: string;
}) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table
          className={`w-full ${minWidth} border-collapse text-left text-sm`}
        >
          <thead>
            <tr className="bg-blue-950 text-white">
              {headers.map((header) => (
                <th key={header} className="px-5 py-4 font-semibold">
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
                    className={`px-5 py-4 leading-relaxed ${
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

/* ------------------------------------------------------------------ */
/* Consultancy modal                                                   */
/* ------------------------------------------------------------------ */

function ConsultModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close consultancy dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <X size={19} />
        </button>

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
          <BookOpen size={24} />
        </div>

        <h2
          id="consult-title"
          className="font-serif text-2xl font-bold text-slate-950"
        >
          Get consultancy
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Discuss your research requirements with our technical consultancy
          team. Choose your preferred communication channel below.
        </p>

        <div className="mt-7 space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-emerald-600 hover:bg-emerald-50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <MessageSquare size={20} />
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-slate-900">
                Continue on WhatsApp
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                Quick communication and file sharing
              </span>
            </span>

            <ArrowRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
            />
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-700 hover:bg-blue-50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-white">
              <Mail size={20} />
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-slate-900">
                Send an email
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                Best for detailed research requirements
              </span>
            </span>

            <ArrowRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800"
            />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
          <ShieldCheck size={15} className="shrink-0 text-emerald-600" />
          Your research drafts and unpublished data remain confidential.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main blog page                                                      */
/* ------------------------------------------------------------------ */

export default function SystematicLiteratureReviewBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const referenceList = [
    <>
      B. Kitchenham and S. Charters, &quot;Guidelines for performing
      systematic literature reviews in software engineering,&quot; Keele
      Univ. and Durham Univ., Tech. Rep. EBSE-2007-01, 2007.
    </>,
    <>
      M. J. Page et al., &quot;The PRISMA 2020 statement: An updated
      guideline for reporting systematic reviews,&quot; <i>BMJ</i>, vol.
      372, Art. no. n71, 2021.
    </>,
    <>
      M. Petticrew and H. Roberts,{" "}
      <i>Systematic Reviews in the Social Sciences: A Practical Guide</i>.
      Malden, MA, USA: Blackwell, 2006.
    </>,
    <>
      M. Gusenbauer and N. R. Haddaway, &quot;Which academic search systems
      are suitable for systematic reviews or meta-analyses?&quot;{" "}
      <i>Research Synthesis Methods</i>, vol. 11, no. 2, pp. 181–217, 2020.
    </>,
    <>
      C. Wohlin, &quot;Guidelines for snowballing in systematic literature
      studies and a replication in software engineering,&quot; in{" "}
      <i>Proc. 18th Int. Conf. Eval. Assessment Softw. Eng. (EASE)</i>,
      2014, Art. no. 38.
    </>,
    <>
      M. Ouzzani, H. Hammady, Z. Fedorowicz, and A. Elmagarmid,
      &quot;Rayyan: A web and mobile app for systematic reviews,&quot;{" "}
      <i>Systematic Reviews</i>, vol. 5, Art. no. 210, 2016.
    </>,
    <>
      J. Cohen, &quot;A coefficient of agreement for nominal scales,&quot;{" "}
      <i>Educational and Psychological Measurement</i>, vol. 20, no. 1,
      pp. 37–46, 1960.
    </>,
    <>
      J. Webster and R. T. Watson, &quot;Analyzing the past to prepare for
      the future: Writing a literature review,&quot; <i>MIS Quarterly</i>,
      vol. 26, no. 2, pp. xiii–xxiii, 2002.
    </>,
    <>
      V. Braun and V. Clarke, &quot;Using thematic analysis in
      psychology,&quot; <i>Qualitative Research in Psychology</i>, vol. 3,
      no. 2, pp. 77–101, 2006.
    </>,
    <>
      N. J. van Eck and L. Waltman, &quot;Software survey: VOSviewer, a
      computer program for bibliometric mapping,&quot; <i>Scientometrics</i>,
      vol. 84, no. 2, pp. 523–538, 2010.
    </>,
  ];

  const checklist = [
    "Research questions and protocol are written and dated.",
    "Search strings, databases, dates, and hit counts are recorded.",
    "Criteria are fixed, and screening is documented in a PRISMA flow diagram.",
    "Extraction and quality sheets are complete.",
    "Synthesis shows themes, a taxonomy, and clear gaps.",
    "Limitations and supplementary files are ready.",
  ];

  const mistakes = [
    "Searching only one database, or only Google Scholar.",
    "Changing criteria halfway without recording it.",
    "Listing papers instead of synthesizing them.",
    "Skipping quality appraisal.",
    "Submitting with a stale search. Re-run it shortly before you submit.",
    "Ending with vague gaps.",
  ];

  const searchString = `Scopus search string
TITLE-ABS-KEY(
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

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-200">
      <ConsultModal open={modalOpen} onClose={closeModal} />

      {/* Announcement bar */}

      <div className="bg-blue-950 px-4 py-2 text-center text-xs text-blue-100 sm:text-sm">
        Advanced computational research, scientific visualization and
        publication support for researchers worldwide.
      </div>

      {/* Navigation */}

      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
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

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/#services" className="transition hover:text-blue-800">
              Services
            </Link>
            <Link href="/#process" className="transition hover:text-blue-800">
              How it works
            </Link>
            <Link href="/#insights" className="transition hover:text-blue-800">
              Insights
            </Link>
            <Link href="/#profiles" className="transition hover:text-blue-800">
              Publications
            </Link>
            <Link href="/#faq" className="transition hover:text-blue-800">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openModal}
              className="hidden items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950 sm:inline-flex"
            >
              Get Consultancy <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </Link>
              <Link href="/#insights" onClick={() => setMobileMenuOpen(false)}>
                Insights
              </Link>
              <Link href="/#profiles" onClick={() => setMobileMenuOpen(false)}>
                Publications
              </Link>
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="mt-2 rounded-lg bg-blue-800 px-5 py-3 text-left font-semibold text-white"
              >
                Get Consultancy <ArrowRight size={16} className="ml-2 inline" />
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Article header */}

        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl px-6 pb-14 pt-12 sm:pb-16 sm:pt-16">
            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
            >
              <ArrowLeft size={16} />
              Back to ScholarGrid
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-900">
                Research Methodology
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} />
                October 2026
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} />
                12 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.18] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              How to Conduct a Systematic Literature Review (SLR) and
              Synthesize Prior Work Like a Senior Researcher
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A practical walkthrough for PhD scholars and engineering
              authors, from the first research question to a defensible,
              publishable synthesis.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <Image
                    src="/logo.png"
                    alt="ScholarGrid"
                    width={42}
                    height={42}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    ScholarGrid Technical Team
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Computational Research & Publishing Consultants
                  </p>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 transition hover:border-blue-800 hover:bg-blue-50"
              >
                <MessageSquare size={16} />
                Discuss your project
              </button>
            </div>
          </div>
        </section>

        {/* Article layout */}

        <div
          id="article-content"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-16 lg:py-20"
        >
          {/* Article body */}

          <article className="min-w-0">
            {/* Introduction */}

            <div className="mb-12 rounded-r-xl border-l-4 border-blue-800 bg-slate-50 p-6 sm:p-8">
              <p className="text-base leading-[1.9] text-slate-700 sm:text-lg">
                A literature review that lists papers one after another is
                easy to write and easy to reject. A systematic literature
                review (SLR) does something harder. It follows a documented
                method, so another researcher could repeat your search and
                arrive at the same set of papers. Journals value this because
                it makes the review fair, transparent, and checkable.
                Guidelines such as Kitchenham and Charters [1] and the PRISMA
                2020 statement [2] describe the process, and Fig. 1 shows it
                in six steps.
              </p>
            </div>

            <ArticleFigure
              src="/blogs/fig21.png"
              alt="The six steps of a systematic literature review"
              caption="Fig. 1. The six steps of a systematic literature review."
            />

            <Para className="mb-8">
              Senior researchers add one more thing: they synthesize. They do
              not report what each paper did. They show patterns, conflicts,
              and gaps across the whole body of work. This guide covers both
              the method and the thinking.
            </Para>

            {/* Step 1 */}

            <SectionHeading id="define-question" number="1">
              Define the Question and Write a Protocol
            </SectionHeading>

            <Para>
              Everything downstream depends on a sharp question. &quot;What is
              known about machine learning in maintenance?&quot; is far too
              broad. Frame the question with a structure such as PICO(C):
              population, intervention, comparison, outcome, and context [3].
              First, check that an SLR is the right type of review.
            </Para>

            <DataTable
              headers={["Review type", "Use it when", "Output"]}
              rows={[
                [
                  "Narrative review",
                  "You need background or an expert view",
                  "Selective overview",
                ],
                [
                  "Mapping study",
                  "You want to chart a broad area",
                  "Counts and categories",
                ],
                [
                  "Systematic review",
                  "You need a defensible answer to a focused question",
                  "Transparent synthesis",
                ],
                [
                  "Meta-analysis",
                  "Studies report comparable numbers",
                  "Pooled estimate",
                ],
              ]}
            />

            <Para className="mt-0">
              Write two to four research questions, such as: RQ1, which
              architectures are used? RQ2, how are they validated? RQ3, what
              gaps remain?
            </Para>

            <Para>
              Write a protocol before you search: databases, search strings,
              criteria, extraction fields, quality questions, and how
              disagreements are resolved. Date-stamp the protocol in a
              repository or on OSF. It proves you did not change the criteria
              after seeing the results.
            </Para>

            <TipBox title="Colleague tip">
              Show the protocol to your supervisor before you search. Changing
              the question after 800 papers are screened is painful.
            </TipBox>

            {/* Step 2 */}

            <SectionHeading id="search" number="2">
              Search Systematically
            </SectionHeading>

            <BulletList
              items={[
                "Use at least two or three major databases, such as Scopus, Web of Science, and IEEE Xplore or ScienceDirect.",
                "Do not rely on Google Scholar alone. Its results are hard to reproduce and cannot be exported cleanly.",
                "Build the search string from concept blocks. Join synonyms with OR inside a block, and join blocks with AND (Fig. 2).",
                "Pilot the string. If it misses five to ten papers you already know are relevant, revise it.",
                "Record the database, date, string, filters, and number of hits for every search.",
                "Add backward and forward snowballing to catch papers the databases missed.",
              ]}
            />

            <CodeBlock label="Example search string" code={searchString} />

            <ArticleFigure
              src="/blogs/fig22.png"
              alt="A search string built from concept blocks"
              caption="Fig. 2. A search string built from concept blocks: OR inside a block, AND between blocks."
            />

            {/* Step 3 */}

            <SectionHeading id="screening" number="3">
              Screen Studies Transparently
            </SectionHeading>

            <Para>
              Write your inclusion and exclusion criteria before screening,
              and apply them the same way to every paper.
            </Para>

            <DataTable
              headers={["Criterion", "Include", "Exclude"]}
              rows={[
                ["Period", "2015 to 2025", "Earlier work"],
                [
                  "Type",
                  "Peer-reviewed journal and conference papers",
                  "Editorials, theses, posters",
                ],
                [
                  "Topic",
                  "Deep-learning fault diagnosis of rotating machinery",
                  "Other machinery or methods",
                ],
                [
                  "Evidence",
                  "Reports experimental results",
                  "Concept papers without data",
                ],
              ]}
            />

            <BulletList
              items={[
                "Remove duplicates first, using the DOI or a cleaned title (code below).",
                "Screen in two rounds: titles and abstracts, then full texts. Record the reason for every full-text exclusion.",
                "Tools such as Rayyan [6] and Zotero make this much easier.",
                <>
                  Have two reviewers screen at least a sample independently.
                  Measure agreement with Cohen&apos;s kappa [7] and settle
                  disagreements by discussion.
                </>,
              ]}
            />

            <CodeBlock label="Python: remove duplicates" code={dedupCode} />

            <Para className="mt-0">
              Report the counts in a PRISMA 2020 flow diagram [2] (Fig. 3).
            </Para>

            <ArticleFigure
              src="/blogs/fig23.png"
              alt="A PRISMA-style flow diagram with illustrative numbers"
              caption="Fig. 3. A PRISMA-style flow diagram with illustrative numbers."
            />

            {/* Step 4 */}

            <SectionHeading id="extraction" number="4">
              Extract Data and Judge Quality
            </SectionHeading>

            <BulletList
              items={[
                "Build the extraction sheet before reading in depth. Typical columns: citation, year, problem, method, data, metrics, results, and limitations.",
                "Pilot the sheet on five papers, then fix it. Changing columns later means re-reading everything.",
                "Copy numbers exactly as reported, with units, conditions, and page numbers.",
                "Judge quality with four to six yes/no questions, such as: Are the aims clear? Is the data described? Are the baselines fair? Are limitations stated?",
                "Do not hide weak studies. Say how they affect your confidence in the findings.",
              ]}
            />

            <TipBox title="Colleague tip">
              When a reviewer asks where a number came from, you will find it
              in a minute if you saved the page number.
            </TipBox>

            {/* Step 5 */}

            <SectionHeading id="synthesis" number="5">
              Synthesize Like a Senior Researcher
            </SectionHeading>

            <Para>
              This is where reviews succeed or fail. A summary says what each
              paper did. A synthesis says what the papers mean together
              (Fig. 4).
            </Para>

            <ArticleFigure
              src="/blogs/fig24.png"
              alt="Summary versus synthesis"
              caption="Fig. 4. Summary versus synthesis: the second paragraph interprets the pattern (illustrative)."
            />

            <BulletList
              items={[
                "Build a concept matrix with papers as rows and themes as columns [8]. The column totals show you what the field actually studies (Fig. 5).",
                "Code the papers systematically. Thematic analysis gives a clear routine: read, code, group, and name the themes [9].",
                "Turn themes into a taxonomy that organizes the methods and shows how they relate (Fig. 6).",
                "Compare results on common metrics only when conditions are comparable. When they are not, say so.",
                "Look for contradictions, and offer reasons: different data, settings, or definitions.",
                "For large sets, keyword and co-citation maps from VOSviewer can reveal clusters you did not expect [10].",
              ]}
            />

            <ArticleFigure
              src="/blogs/fig25.png"
              alt="A concept matrix"
              caption="Fig. 5. A concept matrix: papers as rows, themes as columns, totals at the bottom (illustrative)."
            />

            <ArticleFigure
              src="/blogs/fig26.png"
              alt="A taxonomy built from themes"
              caption="Fig. 6. A taxonomy built from the themes found in the reviewed papers."
            />

            <h3 className="mt-10 font-serif text-xl font-bold text-slate-950 sm:text-2xl">
              Find the Gap
            </h3>

            <Para className="mt-4">
              Cross two dimensions, such as method and application, and count
              the studies in each cell (Fig. 7). Thin cells are candidate
              gaps. Check that a gap matters and is not just empty. A real gap
              is one a reviewer would agree is worth filling.
            </Para>

            <ArticleFigure
              src="/blogs/fig27.png"
              alt="A gap map"
              caption="Fig. 7. A gap map: methods against applications, with thin rows highlighted (illustrative)."
            />

            <TipBox title="Colleague tip">
              Write each gap as a sentence a future paper could answer: &quot;No
              study validates transformer models on wind-turbine data.&quot;
              Avoid &quot;more research is needed&quot;.
            </TipBox>

            {/* Step 6 */}

            <SectionHeading id="write-up" number="6">
              Write It Up and Report It
            </SectionHeading>

            <BulletList
              items={[
                "Structure: Introduction, Method (databases, strings, criteria, flow diagram), Results (descriptive statistics, then themes), Discussion, Threats to validity, and Conclusion.",
                "Write each theme as an argument. Open with the finding, then support it with the studies.",
                "Use tables for details and prose for insight. Never walk through papers one by one.",
                "Be honest about limits: database coverage, language, publication bias, and subjective coding.",
                "Tie future directions to the gaps you found.",
                "Share search strings and the extraction sheet as supplementary files so others can reproduce your work.",
              ]}
            />

            {/* Common mistakes */}

            <SectionHeading id="common-mistakes">Common Mistakes</SectionHeading>

            <Para>
              Several recurring issues weaken otherwise solid reviews. Check
              your work against this list before you submit.
            </Para>

            <div className="mt-6 space-y-3">
              {mistakes.map((mistake, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {mistake}
                  </p>
                </div>
              ))}
            </div>

            {/* Final checklist */}

            <SectionHeading id="final-checklist">Final Checklist</SectionHeading>

            <Para>
              Before submitting your manuscript, confirm that each of the
              following is complete.
            </Para>

            <div className="mt-7 space-y-3">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-sm leading-relaxed text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* References */}

            <div
              id="references"
              className="mt-16 scroll-mt-28 border-t border-slate-200 pt-10"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
                Further Reading
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-950">
                References
              </h2>

              <ol className="mt-7 list-decimal space-y-5 pl-6 text-sm leading-[1.9] text-slate-600">
                {referenceList.map((reference, index) => (
                  <li key={index} className="pl-2">
                    {reference}
                  </li>
                ))}
              </ol>
            </div>

            {/* Article ending */}

            <div className="mt-16 border-t border-slate-200 pt-8">
              <p className="text-sm font-semibold text-blue-800">
                ScholarGrid Technical Insights
              </p>

              <p className="mt-3 text-base leading-[1.9] text-slate-600">
                A strong review is not the one with the most papers. It is the
                one a reader can trust, repeat, and build on. Follow the
                method, show your work, and let the synthesis carry your
                argument.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/#insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  <ArrowLeft size={16} />
                  Explore more research guides
                </Link>

                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
                >
                  Get Consultancy <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </article>

          {/* Desktop sidebar */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-7">
              {/* Table of contents */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-800" />
                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    In this article
                  </h3>
                </div>

                <div className="mt-5 space-y-1">
                  {contents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 rounded-lg px-2 py-2.5 text-sm leading-relaxed text-slate-600 transition hover:bg-blue-50 hover:text-blue-900"
                    >
                      <span className="mt-0.5 text-xs font-bold text-slate-400 group-hover:text-blue-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.title}</span>
                      <ChevronRight
                        size={14}
                        className="ml-auto mt-1 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Consultancy card */}

              <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-300">
                  <MessageSquare size={22} />
                </div>

                <h3 className="font-serif text-xl font-bold">
                  Need professional research support?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Get expert help with research methodology, literature
                  synthesis, and publication-ready manuscripts.
                </p>

                <button
                  onClick={openModal}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50"
                >
                  Get Consultancy <ArrowRight size={16} />
                </button>

                <div className="mt-4 flex items-center gap-2 text-xs text-blue-200">
                  <ShieldCheck size={14} />
                  Confidential research support
                </div>
              </div>

              {/* Back to home */}

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900"
              >
                <ArrowLeft size={15} />
                Explore ScholarGrid
              </Link>
            </div>
          </aside>
        </div>

        {/* Final consultancy CTA */}

        <section className="bg-blue-950">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <BookOpen size={28} />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              ScholarGrid Research Support
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Need Help with Your Systematic Literature Review?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100">
              Get expert support with protocol design, database searching,
              PRISMA reporting, data extraction, and literature synthesis from
              ScholarGrid consultants.
            </p>

            <div className="mt-9">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold text-blue-950 shadow-lg transition hover:bg-blue-50"
              >
                Get Consultancy <ArrowRight size={18} />
              </button>
            </div>

            <p className="mt-5 text-xs text-blue-200">
              Share your research requirements through your preferred
              communication channel.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}

      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
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

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Academic research and computational consultancy for
              postgraduate scholars, engineering researchers, and
              computational scientists targeting international journals.
            </p>

            <button
              onClick={openModal}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Get Consultancy <ArrowRight size={16} />
            </button>
          </div>

          {/* Explore */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Explore ScholarGrid
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Academic Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="transition hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#insights" className="transition hover:text-white">
                  Research Insights
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition hover:text-white">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Article links */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Research Resources
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/blog/formatting-guide"
                  className="transition hover:text-white"
                >
                  Manuscript Formatting
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/paper-rejection-reasons"
                  className="transition hover:text-white"
                >
                  Journal Rejection Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/contour-visualizations"
                  className="transition hover:text-white"
                >
                  Scientific Visualization
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/systematic-literature-review-guide"
                  className="transition hover:text-white"
                >
                  Literature Review Guide
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 px-6 py-6 text-center text-xs leading-relaxed text-slate-500">
          © 2026 ScholarGrid. All rights reserved. Professional Academic and
          Research Support.
        </div>
      </footer>
    </div>
  );
}