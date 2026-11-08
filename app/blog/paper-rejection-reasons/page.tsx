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
  { id: "introduction", title: "Introduction" },
  { id: "reason-1", title: "Journal Scope and Fit" },
  { id: "reason-2", title: "Lack of Novelty" },
  { id: "reason-3", title: "Weak Methods" },
  { id: "reason-4", title: "Unsupported Claims" },
  { id: "reason-5", title: "Formatting Failures" },
  { id: "reason-6", title: "Ethics and Originality" },
  { id: "reason-7", title: "Writing and Literature Review" },
  { id: "after-rejection", title: "What to Do After Rejection" },
  { id: "checklist", title: "Pre-Submission Checklist" },
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
    <figure className="my-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="bg-slate-50 p-3 sm:p-5">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
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
          Section {number}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-[28px]">
        {children}
      </h2>
      <div className="mt-3 h-1 w-10 rounded-full bg-blue-800" />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle2 className="mt-1 h-[18px] w-[18px] shrink-0 text-blue-800" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Para({
  children,
  className = "mt-4",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`${className} text-[15px] leading-[1.85] text-slate-700`}>
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
    <div className="my-6 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
      <p className="text-sm font-bold text-blue-950">{title}</p>
      <p className="mt-1.5 text-sm leading-[1.8] text-slate-700">{children}</p>
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

function NumberedCards({ items }: { items: string[] }) {
  return (
    <div className="mt-5 space-y-2.5">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
            {index + 1}
          </span>
          <p className="text-sm leading-[1.8] text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

function CheckCards({ items }: { items: string[] }) {
  return (
    <div className="mt-5 space-y-2">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5"
        >
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0 text-emerald-600"
          />
          <span className="text-sm leading-[1.8] text-slate-700">{item}</span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main blog page                                                      */
/* ------------------------------------------------------------------ */

export default function PaperRejectionBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const formattingRows = [
    [
      "Outdated or wrong template",
      "Download the current one from the journal page",
    ],
    [
      "Low-resolution or screenshot figures",
      "Export vector files and check the dpi",
    ],
    [
      "Missing declarations (funding, interests, data, author roles)",
      "Fill in every item on the journal's list",
    ],
    [
      "Broken references such as [?]",
      "Compile from scratch and read the PDF",
    ],
    [
      "Names left in a double-blind submission",
      "Remove names, first-person self-citations, and identifying acknowledgments",
    ],
  ];

  const afterRejectionSteps = [
    "If reviewers found real problems, fix them before sending the paper elsewhere. The next reviewers may be the same people.",
    "Reformat completely for the next journal, including the cover letter and references.",
    "Do not resubmit within days to a lower-ranked journal with no changes. The same weaknesses will come back.",
    "Appeal only if you see a clear factual error, and do it once, politely, with evidence (Fig. 7).",
  ];

  const checklist = [
    "The journal's scope and recent papers match your topic.",
    "Your contributions are stated in one clear list.",
    "Methods are complete, baselines are fair, and results include uncertainty.",
    "Every claim has evidence, and limitations are stated.",
    "Template, figures, references, and declarations pass the journal's checklist.",
  ];

  const referenceList = [
    <>
      Elsevier, &quot;Guide for Authors,&quot; available on each journal&apos;s
      homepage at sciencedirect.com.
    </>,
    <>
      J. Pineau et al., &quot;Improving reproducibility in machine learning
      research (a report from the NeurIPS 2019 reproducibility program),&quot;{" "}
      <i>Journal of Machine Learning Research</i>, vol. 22, no. 164,
      pp. 1–20, 2021.
    </>,
    <>
      M. D. Wilkinson et al., &quot;The FAIR Guiding Principles for scientific
      data management and stewardship,&quot; <i>Scientific Data</i>, vol. 3,
      Art. no. 160018, 2016.
    </>,
    <>
      R. L. Wasserstein and N. A. Lazar, &quot;The ASA statement on p-values:
      Context, process, and purpose,&quot; <i>The American Statistician</i>,
      vol. 70, no. 2, pp. 129–133, 2016.
    </>,
    <>
      A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, &quot;Beyond
      authorship: Attribution, contribution, collaboration, and credit,&quot;{" "}
      <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151–155, 2015.
    </>,
    <>Crossref, &quot;Similarity Check,&quot; crossref.org.</>,
    <>
      Committee on Publication Ethics (COPE), &quot;Core Practices,&quot;
      publicationethics.org.
    </>,
    <>
      C. J. Kelly, A. Sadeghieh, and K. Adeli, &quot;Peer review in scientific
      publications: Benefits, critiques, and a survival guide,&quot;{" "}
      <i>EJIFCC</i>, vol. 25, no. 3, pp. 227–243, 2014.
    </>,
    <>
      L. Bornmann, &quot;Scientific peer review,&quot;{" "}
      <i>Annual Review of Information Science and Technology</i>, vol. 45,
      no. 1, pp. 197–245, 2011.
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Publishing Strategy and Manuscript Insights
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
              <span className="font-medium text-blue-800">Publishing Strategy</span>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Publishing Strategy
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

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              Common Reasons Engineering Manuscripts Get Rejected by Journals
              (And How to Avoid Them)
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical walkthrough for PhD scholars and engineering authors:
              the seven most common reasons for rejection and how to fix each
              one before you submit.
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
                  <p className="mt-0.5 text-xs text-slate-500">Research and Publishing Strategy</p>
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
          {/* Article body */}
          <article className="min-w-0">
            {/* Introduction */}
            <div
              id="introduction"
              className="mb-7 scroll-mt-28 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6"
            >
              <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                Almost every researcher gets rejected, including authors with
                long publication lists. The useful question is why. Most
                rejections come from a handful of fixable problems, and many
                happen before a reviewer reads your abstract. Fig. 1 shows
                where each reason in this guide strikes a manuscript.
              </p>
            </div>

            <ArticleFigure
              src="/blogs/fig7.png"
              alt="Where a manuscript can be stopped"
              caption="Fig. 1. Where a manuscript can be stopped, and the reasons that usually do it."
            />

            <Para className="mb-2">
              There are two kinds of rejection. A desk rejection means the
              technical check or the editor stops the paper early. A
              post-review rejection means reviewers read it and found problems
              with the work. This guide covers seven common causes, what to do
              after a rejection, and a short checklist to run before you
              submit. Always read the journal&apos;s own Guide for Authors
              first <a href="#ref1" className="font-semibold text-blue-800 hover:underline">[1]</a>.
            </Para>

            {/* Reason 1 */}
            <SectionHeading id="reason-1" number="01">
              Poor Fit With the Journal&apos;s Scope
            </SectionHeading>

            <Para>
              This is the most common desk rejection and the most avoidable. A
              strong paper sent to the wrong journal still gets rejected.
              Editors screen many submissions every week. If your title,
              abstract, and cover letter do not match the journal&apos;s
              topics, the paper rarely gets past the first look. Some journals
              also avoid certain article types, such as simulation-only
              studies or small extensions of earlier work.
            </Para>

            <BulletList
              items={[
                "Read the aims and scope page, not just the journal's name.",
                "Skim the last three or four issues. Do the topics, depth, and article types match yours?",
                "Find five recent papers close to yours. If none are from this journal, ask yourself why.",
                "In the cover letter, say in two sentences why this journal is the right audience.",
              ]}
            />

            <ArticleFigure
              src="/blogs/fig8.png"
              alt="A good fit intersection between paper and journal"
              caption="Fig. 2. A good fit sits where your paper, the journal's scope, and its recent papers overlap."
            />

            <TipBox title="Practical tip">
              Cite one or two recent papers from the target journal where they
              genuinely belong. It shows the editor you know the audience.
            </TipBox>

            {/* Reason 2 */}
            <SectionHeading id="reason-2" number="02">
              The Novelty Is Not Clear
            </SectionHeading>

            <Para>
              Reviewers often write &quot;incremental&quot; or &quot;limited
              novelty&quot;. Usually the work is fine, but the paper never says
              what is new.
            </Para>

            <BulletList
              items={[
                "State the gap in one sentence in the introduction, backed by specific related work.",
                "List two or three contributions. Make each one concrete and checkable (Fig. 3).",
                "Compare against the closest recent methods, not weak older ones.",
                "Describe what you learned, not just what you did. “We designed, built, and tested” describes work. “This cuts error by 18%” describes a contribution.",
                "Be honest. A known method applied to a new problem is a valid contribution if you say so.",
              ]}
            />

            <ArticleFigure
              src="/blogs/fig9.png"
              alt="Vague versus specific research contribution"
              caption="Fig. 3. A vague contribution statement versus a specific, checkable one (illustrative)."
            />

            <TipBox title="Practical tip">
              Ask a colleague to say what is new in your paper in one sentence.
              If they struggle, reviewers will too.
            </TipBox>

            {/* Reason 3 */}
            <SectionHeading id="reason-3" number="03">
              Weak Methods and Poor Reproducibility
            </SectionHeading>

            <Para>
              If a reviewer cannot tell what you did, they cannot trust what
              you found. Reproducibility is now an expectation, not a bonus{" "}
              <a href="#ref2" className="font-semibold text-blue-800 hover:underline">[2]</a>.
            </Para>

            <BulletList
              items={[
                "Report parameters, datasets, hardware, software versions, and settings.",
                "Use fair baselines: same data, same tuning effort, same metrics.",
                "Repeat experiments and report mean and spread, not one lucky run (Fig. 4).",
                "Share code or data where you can, following the FAIR principles.",
                "Explain why your test conditions are realistic, and say which conditions you left out.",
              ]}
            />

            <Para>
              The usual gaps are missing hyperparameters, unclear train and
              test splits, undefined measurement conditions, and baselines
              copied from older papers that ran under different settings.
            </Para>

            <ArticleFigure
              src="/blogs/fig10.png"
              alt="Single run versus repeated runs"
              caption="Fig. 4. A single run can hide noise. Repeated runs with error bars show whether a difference is real."
            />

            {/* Reason 4 */}
            <SectionHeading id="reason-4" number="04">
              Claims the Results Do Not Support
            </SectionHeading>

            <Para>
              Overclaiming is a favorite target for reviewers. Words like
              &quot;robust&quot;, &quot;real-time&quot;, &quot;optimal&quot;,
              and &quot;outperforms&quot; all need matching evidence (Fig. 5).
            </Para>

            <BulletList
              items={[
                "Tie every claim in the abstract to a specific result in the paper.",
                "Report effect sizes and uncertainty, and do not lean on a single p-value.",
                "Say where the method fails and which assumptions matter.",
                "Check that figures, tables, and text agree. Mismatched numbers destroy trust fast.",
              ]}
            />

            <Para>
              Simulation-only work is a good example. Calling a result
              &quot;validated&quot; without experiments, or at least a
              high-fidelity model, invites a reviewer to say so. Write
              &quot;in simulation&quot; wherever that is the truth.
            </Para>

            <ArticleFigure
              src="/blogs/fig11.png"
              alt="Strong claims matched with supporting evidence"
              caption="Fig. 5. Strong words need matching evidence."
            />

            {/* Reason 5 */}
            <SectionHeading id="reason-5" number="05">
              Formatting and Technical-Check Failures
            </SectionHeading>

            <Para>
              These are the most frustrating rejections because they have
              nothing to do with your science. Many journals run a check before
              the editor ever sees the paper. Our manuscript formatting guide
              covers templates, equations, figures, and references in detail.
            </Para>

            <DataTable
              headers={["Problem", "Quick fix"]}
              rows={formattingRows}
            />

            <TipBox title="Practical tip">
              Do a dry run in the submission system. Read the PDF it generates,
              because it often shows problems your own PDF hides.
            </TipBox>

            {/* Reason 6 */}
            <SectionHeading id="reason-6" number="06">
              Ethics and Originality Problems
            </SectionHeading>

            <Para>
              Editors take these seriously, and they can end in rejection or
              worse. Most cases come from carelessness, not bad intent{" "}
              <a href="#ref7" className="font-semibold text-blue-800 hover:underline">[7]</a>.
            </Para>

            <BulletList
              items={[
                "A classic trap is overlap with your own conference paper. Extending a conference paper is normal, but the journal expects clearly new material and a note explaining what changed.",
                "Run a similarity check before you submit if your institution offers one. Rewrite overlapping text, even from your own earlier papers.",
                "Never submit the same work to two journals at once, and do not split one study into several thin papers.",
                "Agree on authorship early. Everyone listed should have contributed, and nobody who contributed should be missing.",
                "Disclose AI tools, funding, and conflicts of interest as the journal requires.",
              ]}
            />

            <ArticleFigure
              src="/blogs/fig12.png"
              alt="Research ethics red flags"
              caption="Fig. 6. Four ethics red flags and the habit that avoids each."
            />

            {/* Reason 7 */}
            <SectionHeading id="reason-7" number="07">
              Unclear Writing and a Thin Literature Review
            </SectionHeading>

            <Para>
              Reviewers are busy volunteers, and a confusing paper loses their
              goodwill quickly. They forgive a few language slips. They do not
              forgive a paper they cannot follow.
            </Para>

            <BulletList
              items={[
                "Put one idea in each paragraph, with the main point in the first sentence.",
                "Define abbreviations and keep notation consistent.",
                "Ask someone outside your project to read it. If English is not your first language, consider a professional editing service.",
                "Cover the key papers and recent work, and be fair to competing methods.",
                "Limit self-citation to what is relevant, and cite primary sources.",
              ]}
            />

            {/* After rejection */}
            <SectionHeading id="after-rejection">
              What to Do After a Rejection
            </SectionHeading>

            <Para>
              A rejection is information. Read the letter, wait a day, and read
              it again. Peer review is imperfect and reviewers often disagree,
              so you do not have to accept every comment. Take repeated
              comments seriously, though.
            </Para>

            <NumberedCards items={afterRejectionSteps} />

            <ArticleFigure
              src="/blogs/fig13.png"
              alt="Decision path after a manuscript rejection"
              caption="Fig. 7. A simple decision path after a rejection."
            />

            <TipBox title="Practical tip">
              Keep a rejection log with the journal, date, and reason. Patterns
              show up fast and tell you what to fix in your next paper.
            </TipBox>

            {/* Checklist */}
            <SectionHeading id="checklist">
              Pre-Submission Checklist
            </SectionHeading>

            <Para>
              Before you press submit, confirm that each of the following is
              done.
            </Para>

            <CheckCards items={checklist} />

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
                {referenceList.map((reference, index) => (
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
                Most rejections are preventable. Match the journal, state your
                novelty, document your methods, support your claims, and pass
                the technical check. Do these five things and your paper
                reaches reviewers on its merits.
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