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
  "Hello ScholarGrid team! I need expert support for formatting my research manuscript."
)}`;

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
  "Manuscript Formatting Inquiry"
)}&body=${encodeURIComponent(
  "Hello ScholarGrid team,\n\nI need assistance with formatting my research manuscript.\n\nThank you."
)}`;

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "step-1", title: "Choosing the Right Template" },
  { id: "step-2", title: "Preparing Section Structures" },
  { id: "step-3", title: "Mathematics and Equations" },
  { id: "step-4", title: "Figures and Tables" },
  { id: "step-5", title: "Citation Management" },
  { id: "common-mistakes", title: "Common Formatting Mistakes" },
  { id: "step-6", title: "Pre-Submission Checklist" },
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
    <figure className="my-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-50 p-3 sm:p-6">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          priority={priority}
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-10 font-serif text-xl font-bold text-slate-950 sm:text-2xl">
      {children}
    </h3>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl bg-slate-950 p-5 shadow-sm">
      <pre className="font-mono text-sm leading-7 text-blue-100">{code}</pre>
    </div>
  );
}

function Cite({ n }: { n: number }) {
  return (
    <a
      href={`#ref${n}`}
      id={n === 1 ? "cit-ref1" : undefined}
      className="font-semibold text-blue-800 transition hover:text-blue-950 hover:underline"
    >
      [{n}]
    </a>
  );
}

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-sm text-blue-900">
      {children}
    </code>
  );
}

function Check({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
      <span>{children}</span>
    </li>
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
    <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
      <p className="text-sm font-bold text-blue-950">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{children}</p>
    </div>
  );
}

const P = "text-base leading-[1.9] text-slate-700";

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
          Discuss your manuscript formatting requirements with our technical
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

export default function FormattingGuideBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const comparison = [
    ["Typical layout", "Single column, double-spaced, often with line numbers", "Two columns, single-spaced"],
    ["LaTeX class", "elsarticle", "IEEEtran"],
    ["Keywords heading", "Keywords", "Index Terms"],
    ["References", "Set by the journal (numbered or author-year)", "Numbered, in order of first citation"],
    ["Final layout", "Typeset by the publisher after acceptance", "Often close to what you submit"],
  ];

  const symbols = [
    ["Scalar", "Italic", "x"],
    ["Vector", "Bold lowercase", "\\mathbf{x}"],
    ["Matrix", "Bold uppercase", "\\mathbf{A}"],
    ["Set", "Calligraphic or blackboard bold", "\\mathcal{S}, \\mathbb{R}"],
  ];

  const sections: [string, React.ReactNode][] = [
    ["Introduction:", "context, related work and the gap, your contributions, and a one-paragraph outline."],
    ["Methodology:", "detailed enough for someone else to reproduce. Define symbols at first use, and state assumptions, parameters, datasets, hardware, and software versions."],
    ["Results and Discussion:", "follow the order of your methods. Compare against baselines fairly, report units and uncertainty, and explain results."],
    ["Conclusion:", "findings and significance in a paragraph or two, plus limitations and future work. No new results."],
    [
      "Back Matter:",
      <>
        CReDiT author statement <Cite n={5} />, competing-interest declarations, funding details, data availability statements, and AI disclosures where required.
      </>,
    ],
  ];

  const checklist = [
    "Verify title length, abstract word count, and index term formatting.",
    "Ensure all equations are numbered, referenced properly, and symbols defined.",
    "Confirm figure resolutions (DPI), vector formats, and correct caption placement.",
    "Check for missing citation markers ([?]) and font embedding.",
  ];

  const references: React.ReactNode[] = [
    <>Elsevier, "Guide for Authors," available on each journal's homepage at sciencedirect.com.</>,
    <>Elsevier, "elsarticle: Class for articles submitted to Elsevier journals," CTAN package documentation.</>,
    <>IEEE Author Center, "Templates for IEEE journal and conference articles," ieee.org.</>,
    <>M. Shell, "How to use the IEEEtran LaTeX class," CTAN package documentation.</>,
    <>A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, "Beyond authorship: Attribution, contribution, collaboration, and credit," <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151–155, 2015.</>,
    <>IEEE, "IEEE Editorial Style Manual for Authors," IEEE Periodicals.</>,
    <>American Mathematical Society, "User's guide for the amsmath package," CTAN package documentation.</>,
    <>J. Wright, "siunitx: A comprehensive (SI) units package," CTAN package documentation.</>,
    <>Elsevier, "Artwork and media instructions," Elsevier Author Resources.</>,
    <>B. Wong, "Points of view: Color blindness," <i>Nature Methods</i>, vol. 8, no. 6, p. 441, 2011.</>,
    <>S. Fear, "Publication quality tables in LaTeX (booktabs)," CTAN package documentation.</>,
    <>L. Lamport, <i>LaTeX: A Document Preparation System</i>, 2nd ed. Reading, MA, USA: Addison-Wesley, 1994.</>,
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
            <Link href="/#services" className="transition hover:text-blue-800">Services</Link>
            <Link href="/#process" className="transition hover:text-blue-800">How it works</Link>
            <Link href="/#insights" className="transition hover:text-blue-800">Insights</Link>
            <Link href="/#profiles" className="transition hover:text-blue-800">Publications</Link>
            <Link href="/#faq" className="transition hover:text-blue-800">FAQ</Link>
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
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)}>How it works</Link>
              <Link href="/#insights" onClick={() => setMobileMenuOpen(false)}>Insights</Link>
              <Link href="/#profiles" onClick={() => setMobileMenuOpen(false)}>Publications</Link>
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
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
                Manuscript Formatting Guide
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
              A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier &amp; IEEE
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A practical walkthrough for PhD scholars and engineering authors,
              from choosing a template to the final pre-submission check.
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
          <article className="min-w-0">
            {/* Introduction */}
            <div className="mb-12 rounded-r-xl border-l-4 border-blue-800 bg-slate-50 p-6 sm:p-8">
              <p className="text-base leading-[1.9] text-slate-700 sm:text-lg">
                Let me say this upfront: formatting will not get a weak paper
                accepted. But it can get a strong paper bounced at the
                technical check, and losing two weeks that way hurts. This
                guide follows the order you will actually meet things:
                template, structure, equations, figures, references, and a
                final check (Fig. 1).
              </p>
            </div>

            <Callout title="One rule beats everything below">
              The journal's Guide for Authors <Cite n={1} />, or the conference
              call for papers, always wins. Treat this guide as a map and the
              journal page as the final word.
            </Callout>

            <ArticleFigure
              src="/blogs/fig1.png"
              alt="The six steps of manuscript formatting"
              caption="Fig. 1. The six steps, in the order you will meet them."
              priority
            />

            {/* Step 1 */}
            <SectionHeading id="step-1" number="01">
              Choose Between Elsevier and IEEE Templates
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Your target venue decides the publisher, so what you really
              choose is the file format and how closely you follow the
              template.
            </p>

            <div className="my-8 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[650px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-5 py-4 font-semibold">Feature</th>
                      <th className="px-5 py-4 font-semibold">Elsevier Journals</th>
                      <th className="px-5 py-4 font-semibold">IEEE Journals and Conferences</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr
                        key={row[0]}
                        className={`border-b border-slate-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <td className="px-5 py-4 font-semibold text-slate-900">{row[0]}</td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600">{row[1]}</td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className={P}>
              That last row matters. Elsevier typesets your paper after
              acceptance, so your manuscript only has to be easy to review.
              IEEE conference papers are often published almost exactly as you
              format them, so layout details count for much more (Fig. 2).
            </p>

            <ArticleFigure
              src="/blogs/fig2.png"
              alt="IEEE versus Elsevier manuscript layout"
              caption="Fig. 2. A two-column IEEE page next to a single-column, double-spaced Elsevier page."
            />

            <SubHeading>LaTeX or Word?</SubHeading>

            <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <Check>
                <strong className="text-slate-900">Pick LaTeX if:</strong> your
                paper is equation-heavy (control, signal processing,
                electromagnetics, mechanics), you want automatic numbering and
                cross-references, or you share the project through Overleaf or
                Git.
              </Check>
              <Check>
                <strong className="text-slate-900">Pick Word if:</strong> your
                paper is mostly experimental, your co-authors do not know
                LaTeX, or the venue gives you a Word template.
              </Check>
            </ul>

            <SubHeading>Get the Right Template</SubHeading>

            <p className={`${P} mt-4`}>
              For general LaTeX reference, see Lamport <Cite n={12} />.
            </p>

            <p className={`${P} mt-4`}>
              <strong className="text-slate-900">Elsevier:</strong> open the
              journal homepage, then the Guide for Authors. It links to the
              current template, usually the elsarticle class <Cite n={2} /> or
              a Word file.
            </p>

            <p className={`${P} mt-4`}>
              <strong className="text-slate-900">IEEE:</strong> use the
              template selector in the IEEE Author Center <Cite n={3} /> or the
              one named in your conference call, with the IEEEtran class{" "}
              <Cite n={4} /> for LaTeX. Never reuse an old paper's template,
              because conferences change theirs yearly.
            </p>

            <CodeBlock
              code={`\\documentclass[journal]{IEEEtran}    % IEEE journal
\\documentclass[conference]{IEEEtran}  % IEEE conference
\\documentclass[review]{elsarticle}    % Elsevier submission`}
            />

            <Callout title="Do not tweak the template">
              Checkers flag changed margins, font sizes, and repeated \vspace
              tricks. If you are over the page limit, cut text.
            </Callout>

            {/* Step 2 */}
            <SectionHeading id="step-2" number="02">
              Prepare Your Section Structure
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Most engineering papers share one skeleton. Check your journal
              first, since some want a structured abstract or a different
              section order.
            </p>

            <SubHeading>Title, Abstract, and Keywords</SubHeading>

            <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <Check>
                <strong className="text-slate-900">Title:</strong> specific and
                short, roughly 10 to 15 words.
              </Check>
              <Check>
                <strong className="text-slate-900">Abstract:</strong> one
                paragraph, usually 150 to 250 words. For IEEE, no equations,
                citations, or undefined abbreviations. Elsevier limits vary, so
                check.
              </Check>
              <Check>
                <strong className="text-slate-900">Keywords:</strong> Elsevier
                usually wants 4 to 6. IEEE uses "Index Terms", normally
                alphabetical and drawn from the IEEE Taxonomy where possible <Cite n={6} />.
              </Check>
            </ul>

            <ArticleFigure
              src="/blogs/fig3.png"
              alt="Annotated first page of an IEEE paper"
              caption="Fig. 3. The first page of an IEEE paper, annotated."
            />

            <SubHeading>Main Sections and Back Matter</SubHeading>

            <ul className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
              {sections.map(([label, text]) => (
                <Check key={label}>
                  <strong className="text-slate-900">{label}</strong> {text}
                </Check>
              ))}
            </ul>

            {/* Step 3 */}
            <SectionHeading id="step-3" number="03">
              Format Mathematics and Equations
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Use inline math for short symbols and simple definitions inside a
              sentence. Use display math for anything long, complex, or
              referenced later (Fig. 4). The amsmath package <Cite n={7} /> handles
              alignment and numbering, and siunitx <Cite n={8} /> keeps units
              consistent.
            </p>

            <CodeBlock
              code={`\\begin{equation}
  \\mathbf{y} = \\mathbf{H}\\mathbf{x} + \\mathbf{n},
  \\label{eq:model}
\\end{equation}
where $\\mathbf{H}$ is the channel matrix and $\\mathbf{n}$ is noise.
% Refer to it as Eq.~\\eqref{eq:model}`}
            />

            <ArticleFigure
              src="/blogs/fig4.png"
              alt="Display equation formatting example"
              caption={'Fig. 4. A display equation with its number, punctuation, and "where" line.'}
            />

            <SubHeading>Vectors, Matrices, and Symbols</SubHeading>

            <div className="my-8 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[550px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-5 py-4 font-semibold">Object</th>
                      <th className="px-5 py-4 font-semibold">Style</th>
                      <th className="px-5 py-4 font-semibold">LaTeX</th>
                    </tr>
                  </thead>
                  <tbody>
                    {symbols.map((row, index) => (
                      <tr
                        key={row[0]}
                        className={`border-b border-slate-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <td className="px-5 py-4 font-semibold text-slate-900">{row[0]}</td>
                        <td className="px-5 py-4 text-slate-600">{row[1]}</td>
                        <td className="px-5 py-4 font-mono text-blue-800">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Step 4 */}
            <SectionHeading id="step-4" number="04">
              Figures, Tables, and High-Resolution Visuals
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Use vector formats (PDF or EPS) for plots, circuits, and block
              diagrams. Use TIFF or PNG for photos and microscopy, and follow the
              publisher's artwork rules <Cite n={9} /> (Fig. 5). Choose colors
              that stay readable for color-blind readers <Cite n={10} />.
            </p>

            <ArticleFigure
              src="/blogs/fig5.png"
              alt="Low resolution versus vector image export"
              caption="Fig. 5. Same plot, same zoom: low-resolution raster versus a sharp export."
            />

            <p className={P}>
              Place captions below figures and above tables, and keep the
              numbering consistent throughout the manuscript (Fig. 6). The booktabs
              package <Cite n={11} /> gives clean, professional table rules.
            </p>

            <ArticleFigure
              src="/blogs/fig6.png"
              alt="Correct figure and table caption placements"
              caption="Fig. 6. Caption placement: below for figures, above for tables."
            />

            {/* Step 5 */}
            <SectionHeading id="step-5" number="05">
              Citation and Reference Management
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Keep every reference in one <InlineCode>.bib</InlineCode> file
              and let the style file format it. IEEE uses numerical brackets
              ordered by first citation (<InlineCode>[1], [2], [3]</InlineCode>
              ). Elsevier supports both numbered (
              <InlineCode>elsarticle-num</InlineCode>) and author-year (
              <InlineCode>elsarticle-harv</InlineCode>) styles.
            </p>

            {/* Common mistakes */}
            <SectionHeading id="common-mistakes">
              Common Formatting Mistakes
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Several recurring issues cause technical-check rejections.
              Review the following points before you upload.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Reusing an old paper's template instead of the current one.",
                "Changing margins, font sizes, or spacing to fit the page limit.",
                "Putting equations, citations, or undefined abbreviations in an IEEE abstract.",
                "Submitting low-resolution raster images instead of vector or high-DPI figures.",
                "Leaving unresolved citation markers ([?]) or unnumbered equations.",
              ].map((mistake, index) => (
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
            <SectionHeading id="step-6">
              Final Pre-Submission Checklist
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Before submitting your manuscript, use this checklist to
              evaluate its overall quality and technical consistency.
            </p>

            <div className="mt-7 space-y-3">
              {checklist.map((item) => (
                <div
                  key={item}
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
                {references.map((reference, index) => (
                  <li key={index} id={`ref${index + 1}`} className="scroll-mt-28 pl-2">
                    {reference}
                    {index === 0 && (
                      <a
                        href="#cit-ref1"
                        className="ml-2 font-bold text-blue-800 hover:underline"
                      >
                        ↑ back
                      </a>
                    )}
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
                Good formatting will not rescue a weak paper, but bad
                formatting can slow down a strong one. Set up your template,
                figures, and references properly once, and you can spend your
                energy on the science.
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
                  Need formatting support?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Get professional LaTeX and Word formatting for journal
                  layouts, equations, figures, tables, and references.
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
              ScholarGrid Academic Support
            </p>
            <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Need Expert Help Formatting Your Manuscript?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100">
              Get professional LaTeX and Word formatting support, including
              journal-specific layouts, equations, figures, tables, and
              references.
            </p>
            <div className="mt-9">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold text-blue-950 shadow-lg transition hover:bg-blue-50"
              >
                Get Expert Assistance <ArrowRight size={18} />
              </button>
            </div>
            <p className="mt-5 text-xs text-blue-200">
              Share your requirements through your preferred communication
              channel.
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
              <li><Link href="/#services" className="transition hover:text-white">Academic Services</Link></li>
              <li><Link href="/#process" className="transition hover:text-white">How It Works</Link></li>
              <li><Link href="/#insights" className="transition hover:text-white">Research Insights</Link></li>
              <li><Link href="/#faq" className="transition hover:text-white">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">
              Research Resources
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link href="/blog/formatting-guide" className="transition hover:text-white">Manuscript Formatting</Link></li>
              <li><Link href="/blog/paper-rejection-reasons" className="transition hover:text-white">Journal Rejection Guide</Link></li>
              <li><Link href="/blog/contour-visualizations" className="transition hover:text-white">Scientific Visualization</Link></li>
              <li><Link href="/blog/systematic-literature-review-guide" className="transition hover:text-white">Literature Review Guide</Link></li>
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
