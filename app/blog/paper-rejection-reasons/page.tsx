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
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Contact configuration                                               */
/* ------------------------------------------------------------------ */

const whatsappNumber = "923147982032";
const emailAddress = "scholargrid030@gmail.com";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello ScholarGrid team! I want a pre-submission technical review to avoid paper rejection."
)}`;

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
  "Paper Rejection & Publishing Strategy Inquiry"
)}&body=${encodeURIComponent(
  "Hello ScholarGrid team,\n\nI need assistance with avoiding rejections and reviewing my research manuscript.\n\nThank you."
)}`;

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
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
          Section {number}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {children}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-blue-800" />
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
          {item}
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
      <p className="text-sm font-bold text-blue-950">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{children}</p>
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
    <div className="my-8 overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px] border-collapse text-left text-sm">
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

function NumberedCards({ items }: { items: string[] }) {
  return (
    <div className="mt-6 space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
        >
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
            {index + 1}
          </span>
          <p className="text-sm leading-relaxed text-slate-700">{item}</p>
        </div>
      ))}
    </div>
  );
}

function CheckCards({ items }: { items: string[] }) {
  return (
    <div className="mt-7 space-y-3">
      {items.map((item, index) => (
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

export default function PaperRejectionBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

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

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.18] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Common Reasons Engineering Manuscripts Get Rejected by Journals
              (And How to Avoid Them)
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A practical walkthrough for PhD scholars and engineering
              authors: the seven most common reasons for rejection and how to
              fix each one before you submit.
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
                    Computational Research &amp; Publishing Consultants
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
                Almost every researcher gets rejected, including people with
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

            <Para className="mb-8">
              There are two kinds of rejection. A desk rejection means the
              technical check or the editor stops the paper early. A
              post-review rejection means reviewers read it and found
              problems with the work. This guide covers seven common causes,
              what to do after a rejection, and a short checklist to run
              before you submit. Always read the journal&apos;s own Guide for
              Authors first.
            </Para>

            {/* Reason 1 */}

            <SectionHeading id="reason-1" number="01">
              Poor Fit With the Journal&apos;s Scope
            </SectionHeading>

            <Para>
              This is the most common desk rejection and the most avoidable.
              A strong paper sent to the wrong journal still gets rejected.
              Editors screen many submissions every week. If your title,
              abstract, and cover letter do not match the journal&apos;s
              topics, the paper rarely gets past the first look. Some
              journals also avoid certain article types, such as
              simulation-only studies or small extensions of earlier work.
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
              Cite one or two recent papers from the target journal where
              they genuinely belong. It shows the editor you know the
              audience.
            </TipBox>

            {/* Reason 2 */}

            <SectionHeading id="reason-2" number="02">
              The Novelty Is Not Clear
            </SectionHeading>

            <Para>
              Reviewers often write &quot;incremental&quot; or &quot;limited
              novelty&quot;. Usually the work is fine, but the paper never
              says what is new.
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
              Ask a colleague to say what is new in your paper in one
              sentence. If they struggle, reviewers will too.
            </TipBox>

            {/* Reason 3 */}

            <SectionHeading id="reason-3" number="03">
              Weak Methods and Poor Reproducibility
            </SectionHeading>

            <Para>
              If a reviewer cannot tell what you did, they cannot trust what
              you found. Reproducibility is now an expectation, not a bonus.
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
              and &quot;outperforms&quot; all need matching evidence
              (Fig. 5).
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
              nothing to do with your science. Many journals run a check
              before the editor ever sees the paper. Our companion formatting
              guide covers templates, equations, figures, and references in
              detail.
            </Para>

            <DataTable
              headers={["Problem", "Quick fix"]}
              rows={formattingRows}
            />

            <TipBox title="Practical tip">
              Do a dry run in the submission system. Read the PDF it
              generates, because it often shows problems your own PDF hides.
            </TipBox>

            {/* Reason 6 */}

            <SectionHeading id="reason-6" number="06">
              Ethics and Originality Problems
            </SectionHeading>

            <Para>
              Editors take these seriously, and they can end in rejection or
              worse. Most cases come from carelessness, not bad intent.
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
              Reviewers are busy volunteers, and a confusing paper loses
              their goodwill quickly. They forgive a few language slips. They
              do not forgive a paper they cannot follow.
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
              A rejection is information. Read the letter, wait a day, and
              read it again. Peer review is imperfect and reviewers often
              disagree, so you do not have to accept every comment. Take
              repeated comments seriously, though.
            </Para>

            <NumberedCards items={afterRejectionSteps} />

            <ArticleFigure
              src="/blogs/fig13.png"
              alt="Decision path after a manuscript rejection"
              caption="Fig. 7. A simple decision path after a rejection."
            />

            <TipBox title="Practical tip">
              Keep a rejection log with the journal, date, and reason.
              Patterns show up fast and tell you what to fix in your next
              paper.
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
                Most rejections are preventable. Match the journal, state your
                novelty, document your methods, support your claims, and pass
                the technical check. Do these five things and your paper
                reaches reviewers on its merits.
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

              <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-300">
                  <MessageSquare size={22} />
                </div>

                <h3 className="font-serif text-xl font-bold">
                  Need professional research support?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Get a pre-submission technical review, manuscript
                  formatting, and publication-quality figures from our team.
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
              Want to Avoid Desk Rejection?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100">
              Get a pre-submission technical check and professional
              formatting support for your research manuscript from the
              ScholarGrid technical team.
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
