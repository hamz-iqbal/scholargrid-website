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
  { id: "step-1", title: "Choosing the Right Template" },
  { id: "step-2", title: "Preparing Section Structure" },
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-7 font-serif text-xl font-bold text-slate-950">
      {children}
    </h3>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg bg-slate-950 p-4 sm:p-5">
      <pre className="font-mono text-[13px] leading-6 text-blue-100">{code}</pre>
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
    <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[13px] text-blue-900">
      {children}
    </code>
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

const P = "text-[15px] leading-[1.85] text-slate-700";
const LIST = "mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-700";

/* ------------------------------------------------------------------ */
/* Main blog page                                                      */
/* ------------------------------------------------------------------ */

export default function FormattingGuideBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    ["Introduction:", "context, related work and the research gap, your contributions, and a one-paragraph outline."],
    ["Methodology:", "detailed enough for someone else to reproduce. Define symbols at first use, and state assumptions, parameters, datasets, hardware, and software versions."],
    ["Results and Discussion:", "follow the order of your methods. Compare against baselines fairly, report units and uncertainty, and explain the results."],
    ["Conclusion:", "findings and significance in a paragraph or two, plus limitations and future work. No new results."],
    [
      "Back Matter:",
      <>
        CReDiT author statement <Cite n={5} />, competing-interest declarations, funding details, data availability statements, and AI disclosures where required.
      </>,
    ],
  ];

  const mistakes = [
    "Reusing an old paper's template instead of the current one.",
    "Changing margins, font sizes, or spacing to fit the page limit.",
    "Putting equations, citations, or undefined abbreviations in an IEEE abstract.",
    "Submitting low-resolution raster images instead of vector or high-DPI figures.",
    "Leaving unresolved citation markers ([?]) or unnumbered equations.",
  ];

  const checklist = [
    "The latest official template of the target journal or conference is used.",
    "Title length, abstract word count, and keyword or index term format are verified.",
    "All equations are numbered, referenced properly, and every symbol is defined.",
    "Figures use vector formats or adequate resolution, with captions placed correctly.",
    "No missing citation markers ([?]), and all references follow the required style.",
    "Fonts are embedded and the final PDF compiles without errors or warnings.",
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
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Manuscript Preparation and Publishing Insights
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
              <span className="font-medium text-blue-800">Manuscript Formatting</span>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
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

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier &amp; IEEE
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical walkthrough for PhD scholars and engineering authors,
              from choosing a template to the final pre-submission check.
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
                  <p className="mt-0.5 text-xs text-slate-500">Research and Manuscript Preparation</p>
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
            {/* Introduction */}
            <div
              id="introduction"
              className="mb-7 scroll-mt-28 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6"
            >
              <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                Formatting alone will not get a weak paper accepted, but it can
                get a strong paper returned at the technical check, and the
                delay of a week or two is costly. This guide follows the order
                in which you will actually meet each task: template, structure,
                equations, figures, references, and a final check (Fig. 1).
              </p>
            </div>

            <Callout title="One rule beats everything below">
              The journal's Guide for Authors <Cite n={1} />, or the conference
              call for papers, always takes priority. Treat this guide as a map
              and the journal page as the final word.
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

            <p className={`${P} mt-4`}>
              Your target venue decides the publisher, so what you really
              choose is the file format and how closely you follow the
              template.
            </p>

            <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-4 py-3.5 font-semibold">Feature</th>
                      <th className="px-4 py-3.5 font-semibold">Elsevier Journals</th>
                      <th className="px-4 py-3.5 font-semibold">IEEE Journals and Conferences</th>
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
                        <td className="px-4 py-3.5 font-semibold text-slate-900">{row[0]}</td>
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">{row[1]}</td>
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">{row[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className={P}>
              The last row matters. Elsevier typesets your paper after
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

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">Pick LaTeX if:</strong> your
                paper is equation-heavy (control, signal processing,
                electromagnetics, mechanics), you want automatic numbering and
                cross-references, or you share the project through Overleaf or
                Git.
              </Check>
              <Check>
                <strong className="text-slate-900">Pick Word if:</strong> your
                paper is mostly experimental, your co-authors do not use
                LaTeX, or the venue provides a Word template.
              </Check>
            </ul>

            <SubHeading>Get the Right Template</SubHeading>

            <p className={`${P} mt-3`}>
              For general LaTeX reference, see Lamport <Cite n={12} />.
            </p>

            <p className={`${P} mt-3`}>
              <strong className="text-slate-900">Elsevier:</strong> open the
              journal homepage, then the Guide for Authors. It links to the
              current template, usually the elsarticle class <Cite n={2} /> or
              a Word file.
            </p>

            <p className={`${P} mt-3`}>
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
              Automated checkers flag changed margins, font sizes, and repeated{" "}
              <InlineCode>\vspace</InlineCode> tricks. If you are over the page
              limit, cut text instead of changing the layout.
            </Callout>

            {/* Step 2 */}
            <SectionHeading id="step-2" number="02">
              Prepare Your Section Structure
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Most engineering papers share one skeleton. Check your journal
              first, since some require a structured abstract or a different
              section order.
            </p>

            <SubHeading>Title, Abstract, and Keywords</SubHeading>

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">Title:</strong> specific and
                concise, roughly 10 to 15 words.
              </Check>
              <Check>
                <strong className="text-slate-900">Abstract:</strong> one
                paragraph, usually 150 to 250 words. For IEEE, avoid equations,
                citations, and undefined abbreviations. Elsevier limits vary, so
                check the journal.
              </Check>
              <Check>
                <strong className="text-slate-900">Keywords:</strong> Elsevier
                usually requires 4 to 6. IEEE uses "Index Terms", normally
                alphabetical and drawn from the IEEE Taxonomy where possible{" "}
                <Cite n={6} />.
              </Check>
            </ul>

            <ArticleFigure
              src="/blogs/fig3.png"
              alt="Annotated first page of an IEEE paper"
              caption="Fig. 3. The first page of an IEEE paper, annotated."
            />

            <SubHeading>Main Sections and Back Matter</SubHeading>

            <ul className={LIST}>
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

            <p className={`${P} mt-4`}>
              Use inline math for short symbols and simple definitions inside a
              sentence. Use display math for anything long, complex, or
              referenced later (Fig. 4). The amsmath package <Cite n={7} />{" "}
              handles alignment and numbering, and siunitx <Cite n={8} /> keeps
              units consistent.
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

            <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-4 py-3.5 font-semibold">Object</th>
                      <th className="px-4 py-3.5 font-semibold">Style</th>
                      <th className="px-4 py-3.5 font-semibold">LaTeX</th>
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
                        <td className="px-4 py-3.5 font-semibold text-slate-900">{row[0]}</td>
                        <td className="px-4 py-3.5 text-slate-600">{row[1]}</td>
                        <td className="px-4 py-3.5 font-mono text-[13px] text-blue-800">{row[2]}</td>
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

            <p className={`${P} mt-4`}>
              Use vector formats (PDF or EPS) for plots, circuits, and block
              diagrams. Use TIFF or PNG for photos and microscopy, and follow
              the publisher's artwork rules <Cite n={9} /> (Fig. 5). Choose
              colors that remain readable for color-blind readers{" "}
              <Cite n={10} />.
            </p>

            <ArticleFigure
              src="/blogs/fig5.png"
              alt="Low resolution versus vector image export"
              caption="Fig. 5. Same plot, same zoom: low-resolution raster versus a sharp export."
            />

            <p className={P}>
              Place captions below figures and above tables, and keep the
              numbering consistent throughout the manuscript (Fig. 6). The
              booktabs package <Cite n={11} /> gives clean, professional table
              rules.
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

            <p className={`${P} mt-4`}>
              Keep every reference in one <InlineCode>.bib</InlineCode> file
              and let the style file format it. IEEE uses numerical brackets
              ordered by first citation (<InlineCode>[1], [2], [3]</InlineCode>).
              Elsevier supports both numbered (
              <InlineCode>elsarticle-num</InlineCode>) and author-year (
              <InlineCode>elsarticle-harv</InlineCode>) styles.
            </p>

            {/* Common mistakes */}
            <SectionHeading id="common-mistakes">
              Common Formatting Mistakes
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Several recurring issues cause technical-check rejections. Review
              the following points before you upload.
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
            <SectionHeading id="step-6">
              Final Pre-Submission Checklist
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your manuscript, use this checklist to evaluate
              its overall quality and technical consistency.
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
            <div className="mt-10 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800">
                ScholarGrid Research Library
              </p>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                Good formatting will not rescue a weak paper, but poor
                formatting can slow down a strong one. Set up your template,
                figures, and references properly once, and you can spend your
                energy on the science.
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