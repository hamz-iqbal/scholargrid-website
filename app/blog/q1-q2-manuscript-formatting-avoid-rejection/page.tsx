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
  "Hello ScholarGrid team! I need expert manuscript formatting and journal submission support."
)}`;

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
  "Manuscript Formatting Inquiry"
)}&body=${encodeURIComponent(
  "Hello ScholarGrid team,\n\nI need assistance with manuscript formatting and journal submission support.\n\nThank you."
)}`;

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "why-formatting", title: "Why Formatting Matters for Q1 and Q2" },
  { id: "pitfalls", title: "The Nine Most Common Pitfalls" },
  { id: "timeline", title: "Your Two-Week Pre-Submission Timeline" },
  { id: "final-checklist", title: "Final Formatting Checklist" },
  { id: "formatting-return", title: "If Formatting Triggers a Return" },
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
    <h3 className="mt-12 font-serif text-xl font-bold text-slate-950 sm:text-2xl">
      {children}
    </h3>
  );
}

function Cite({ n }: { n: number }) {
  return (
    <a
      href={`#ref${n}`}
      id={`cit-ref${n}`}
      className="font-semibold text-blue-800 transition hover:text-blue-950 hover:underline"
    >
      [{n}]
    </a>
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

function CheckList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
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

export default function ManuscriptFormattingBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const checklist = [
    "The current template and Guide for Authors are followed, and the page and word limits are met.",
    "Title, abstract, keywords, and author details are correct and complete.",
    "All declarations and statements are included.",
    "A similarity check is done, and any overlap is explained.",
    "Figures meet the dpi and size rules, and tables are editable text.",
    "Equations are numbered and punctuated, and notation is consistent.",
    "References use one style and the compiled PDF has no [?].",
    "File names are clear, the cover letter is ready, and the dry run is done.",
  ];

  const references: React.ReactNode[] = [
    <>SCImago, "SJR: SCImago Journal &amp; Country Rank," scimagojr.com.</>,
    <>Clarivate, "Journal Citation Reports," clarivate.com.</>,
    <>Elsevier, "Guide for Authors," available on each journal's homepage at sciencedirect.com.</>,
    <>IEEE Author Center, "Templates for IEEE journal and conference articles," ieee.org.</>,
    <>IEEE, "IEEE Editorial Style Manual for Authors," IEEE Periodicals.</>,
    <>A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, "Beyond authorship: Attribution, contribution, collaboration, and credit," <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151–155, 2015.</>,
    <>Committee on Publication Ethics (COPE), "Core Practices," publicationethics.org.</>,
    <>Crossref, "Similarity Check," crossref.org.</>,
    <>Elsevier, "Artwork and media instructions," Elsevier Author Resources.</>,
    <>B. Wong, "Points of view: Color blindness," <i>Nature Methods</i>, vol. 8, no. 6, p. 441, 2011.</>,
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
                Publishing &amp; Formatting Guide
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

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.18] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Mastering Q1/Q2 Manuscript Formatting: Common Pitfalls and How to Avoid Rejection
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A practical manuscript formatting guide for researchers
              targeting Q1 and Q2 journals, covering the mistakes that most
              often trigger returns and desk rejections.
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
            <div className="mb-12 space-y-5 rounded-r-xl border-l-4 border-blue-800 bg-slate-50 p-6 sm:p-8">
              <p className="text-base leading-[1.9] text-slate-700 sm:text-lg">
                You can spend two years on a study and lose two weeks to a
                formatting error. At Q1 and Q2 journals, where editors screen
                a large number of submissions, manuscript formatting is often
                the first test your paper faces. A messy file can trigger a
                desk rejection before anyone reads your results. This guide
                explains the most common formatting pitfalls and how to avoid
                them, so your paper is judged on its science.
              </p>
              <p className="text-base leading-[1.9] text-slate-700 sm:text-lg">
                Q1 and Q2 describe journal quartiles. A quartile is the rank
                band a journal holds within its subject category, based on
                indicators such as SCImago's SJR <Cite n={1} /> or
                Clarivate's Journal Citation Reports <Cite n={2} /> (Fig. 1).
                Q1 is the top quarter and Q2 the next quarter. The rules are
                the ones each journal publishes in its Guide for Authors{" "}
                <Cite n={3} />. What changes is the margin for error: strong
                journals usually receive many submissions, so careless files
                lose out more easily.
              </p>
            </div>

            <ArticleFigure
              src="/blogs/fig28.png"
              alt="Journal quartiles Q1 to Q4 within a subject category"
              caption="Fig. 1. Journal quartiles: Q1 and Q2 are the top half of journals in a subject category."
              priority
            />

            {/* Section 01 */}
            <SectionHeading id="why-formatting" number="01">
              Why Manuscript Formatting Matters for Q1 and Q2 Journals
            </SectionHeading>

            <CheckList>
              <Check>
                A technical or editorial check often comes first. Files that
                break the rules can be returned before review.
              </Check>
              <Check>
                Editors form a quick impression. A clean first page signals
                that the authors are careful.
              </Check>
              <Check>
                Reviewers are busy volunteers. A paper that is easy to read
                earns more goodwill.
              </Check>
              <Check>
                Production teams need complete files and statements. Gaps slow
                down acceptance.
              </Check>
            </CheckList>

            <p className={`${P} mt-6`}>
              Formatting will not rescue weak science, but poor formatting can
              hide strong science. Remember also that a submission is more
              than one file. It is a package (Fig. 2), and every part must be
              ready.
            </p>

            <ArticleFigure
              src="/blogs/fig29.png"
              alt="A journal submission is a package, not a single file"
              caption="Fig. 2. A journal submission is a package, not a single file."
            />

            {/* Section 02 */}
            <SectionHeading id="pitfalls" number="02">
              The Nine Most Common Manuscript Formatting Pitfalls
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Fig. 3 ranks the pitfalls by how often they appear and how much
              damage they do. It is our own qualitative judgment, not a
              measured statistic. Start with the top-right corner.
            </p>

            <ArticleFigure
              src="/blogs/fig30.png"
              alt="Formatting pitfalls by frequency and damage (qualitative, illustrative)"
              caption="Fig. 3. Formatting pitfalls by frequency and damage (qualitative, illustrative)."
            />

            {/* Pitfall 1 */}
            <SubHeading>Pitfall 1: Using the Wrong or Outdated Template</SubHeading>
            <p className={`${P} mt-4`}>
              Templates change. Journals update them, and IEEE conferences
              replace theirs every year <Cite n={4} />. An old template is a
              quick way to look careless.
            </p>
            <CheckList>
              <Check>
                Download the template from the current Guide for Authors or
                call for papers, never from an old paper.
              </Check>
              <Check>
                Write inside the template from day one. Converting later
                breaks equations, figures, and references.
              </Check>
              <Check>
                Do not change margins, fonts, or spacing to meet the page
                limit. Cut text instead.
              </Check>
              <Check>
                Read the whole guide, including word limits, article types,
                and anonymization rules.
              </Check>
            </CheckList>
            <Callout title="Colleague tip">
              Copy the journal's requirements into a one-page checklist before
              you start writing. You will use it again at the end.
            </Callout>

            {/* Pitfall 2 */}
            <SubHeading>Pitfall 2: A Weak First Page</SubHeading>
            <p className={`${P} mt-4`}>
              The title, abstract, and keywords are what editors read first
              (Fig. 4).
            </p>
            <CheckList>
              <Check>
                Keep the title specific and short, roughly 10 to 15 words,
                without unclear abbreviations.
              </Check>
              <Check>
                Keep the abstract within the word limit as a single paragraph.
                For IEEE papers, leave out citations, equations, and undefined
                abbreviations <Cite n={5} />.
              </Check>
              <Check>
                Choose four to six keywords that add information. Do not just
                repeat the title.
              </Check>
              <Check>
                Check every author name, affiliation, and the corresponding
                author's details.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig31.png"
              alt="First-page mistakes that editors notice, and the clean version"
              caption="Fig. 4. First-page mistakes that editors notice, and the clean version."
            />

            {/* Pitfall 3 */}
            <SubHeading>Pitfall 3: Missing Declarations and Statements</SubHeading>
            <p className={`${P} mt-4`}>
              Q1 and Q2 journals usually require a set of statements.
              Forgetting one is a common reason for an administrative return.
            </p>
            <CheckList>
              <Check>
                Author contributions, ideally in the CRediT format{" "}
                <Cite n={6} />.
              </Check>
              <Check>Competing interests, funding sources, and acknowledgments.</Check>
              <Check>Data availability, and ethics approval where it applies.</Check>
              <Check>Any generative AI disclosure the journal requires.</Check>
              <Check>
                Agree on authorship early. Everyone listed should have
                contributed, and nobody who contributed should be missing,
                which matches the core practices of the Committee on
                Publication Ethics <Cite n={7} />.
              </Check>
            </CheckList>

            {/* Pitfall 4 */}
            <SubHeading>Pitfall 4: Skipping the Originality Check</SubHeading>
            <p className={`${P} mt-4`}>
              Overlap with your own thesis, preprint, or conference paper is a
              classic trap. Editors run similarity checks, so you should run
              one first <Cite n={8} />. Rewrite overlapping passages, cite the
              earlier work, and explain any legitimate overlap in the cover
              letter. A journal extension of a conference paper should contain
              clearly new material.
            </p>

            {/* Pitfall 5 */}
            <SubHeading>Pitfall 5: Low-Quality Figures</SubHeading>
            <p className={`${P} mt-4`}>
              Blurry or oversized figures are the easiest formatting problem
              to spot. Export plots and diagrams as vector PDF or EPS, and use
              TIFF or PNG for photos (Fig. 5). Elsevier commonly asks for 1000
              dpi for line art, 300 dpi for halftone, and 500 dpi for
              combination images <Cite n={9} />. IEEE commonly asks for 600
              dpi for line art and 300 dpi for color and grayscale images.
              Check your journal, because requirements vary.
            </p>
            <CheckList>
              <Check>
                Size each figure at its final column width and keep text at 7
                to 9 pt.
              </Check>
              <Check>
                Make figures readable in grayscale, and avoid red-green pairs
                for color-blind readers <Cite n={10} />.
              </Check>
              <Check>
                Put captions below figures, and cite every figure in the text.
              </Check>
              <Check>
                Never submit screenshots of plots, and never upscale a
                low-resolution image.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig32.png"
              alt="A quick decision path for exporting figures"
              caption="Fig. 5. A quick decision path for exporting figures."
            />

            {/* Pitfall 6 */}
            <SubHeading>Pitfall 6: Messy Tables and Equations</SubHeading>
            <CheckList>
              <Check>Keep tables as editable text, never images, with captions above.</Check>
              <Check>Put units in column headers and use consistent decimal places.</Check>
              <Check>
                Number and cross-reference equations with labels, and punctuate
                them as part of the sentence.
              </Check>
              <Check>
                Define every symbol, and keep notation consistent across the
                paper.
              </Check>
            </CheckList>

            {/* Pitfall 7 */}
            <SubHeading>Pitfall 7: Reference Chaos</SubHeading>
            <p className={`${P} mt-4`}>
              Mixed citation styles look careless (Fig. 6). Match the
              journal's style, whether numbered or author-year, and let a
              reference manager or BibTeX do the formatting.
            </p>
            <CheckList>
              <Check>
                Check every in-text citation against the list, and every entry
                against a citation.
              </Check>
              <Check>Add DOIs, complete page ranges, and consistent journal names.</Check>
              <Check>Search the compiled PDF for [?] before you submit.</Check>
              <Check>
                Include recent work and limit self-citation to what is
                relevant.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig33.png"
              alt="Mixed reference styles versus one consistent style"
              caption="Fig. 6. Mixed reference styles versus one consistent style."
            />

            {/* Pitfall 8 */}
            <SubHeading>Pitfall 8: Inconsistent Details</SubHeading>
            <p className={`${P} mt-4`}>
              Small inconsistencies add up to a sloppy impression. Do one
              dedicated consistency pass.
            </p>
            <CheckList>
              <Check>Headings, numbering, and capitalization follow one pattern.</Check>
              <Check>
                Abbreviations are defined at first use, in the abstract and
                again in the text.
              </Check>
              <Check>
                Units follow SI conventions, with spaces between numbers and
                units.
              </Check>
              <Check>
                Spelling is consistent, either US or UK English, and figure and
                table references match their numbers.
              </Check>
            </CheckList>

            {/* Pitfall 9 */}
            <SubHeading>Pitfall 9: A Messy Submission Package</SubHeading>
            <CheckList>
              <Check>
                Name files clearly, such as Manuscript, Title_Page, Figure_1,
                and Supplementary_1.
              </Check>
              <Check>
                For double-blind review, remove names, self-identifying
                acknowledgments, and metadata.
              </Check>
              <Check>
                Write a short cover letter that states the contribution, why
                this journal fits, and that the work is not under review
                elsewhere.
              </Check>
              <Check>
                Prepare highlights, a graphical abstract, and source files if
                the journal asks for them.
              </Check>
              <Check>
                Do a dry run in the submission system and read the PDF it
                generates.
              </Check>
            </CheckList>
            <Callout title="Colleague tip">
              The system-generated PDF often reveals broken figures or missing
              fonts that your own PDF hides.
            </Callout>

            {/* Section 03 */}
            <SectionHeading id="timeline" number="03">
              Your Two-Week Pre-Submission Timeline
            </SectionHeading>

            <p className={`${P} mt-5`}>
              Spread the work out instead of doing everything the night before
              (Fig. 7). Each stage has one job, and that keeps mistakes from
              piling up.
            </p>

            <ArticleFigure
              src="/blogs/fig34.png"
              alt="A two-week schedule for a calm, error-free submission"
              caption="Fig. 7. A two-week schedule for a calm, error-free submission."
            />

            {/* Final checklist */}
            <SectionHeading id="final-checklist">
              Final Manuscript Formatting Checklist
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

            {/* If returned */}
            <SectionHeading id="formatting-return">
              What to Do If Formatting Triggers a Return
            </SectionHeading>

            <p className={`${P} mt-5`}>
              A technical return is not a rejection. The journal is asking you
              to fix specific items. Read the list carefully, correct every
              point, and resubmit promptly. Then add the lesson to your own
              checklist so the same mistake never costs you time again.
            </p>

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
                    <a
                      href={`#cit-ref${index + 1}`}
                      className="ml-2 font-bold text-blue-800 hover:underline"
                    >
                      ↑ back
                    </a>
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
                Good manuscript formatting is a habit, not a talent. Follow
                the template, check the details, and keep your files clean,
                and your Q1 or Q2 submission gets the fair read it deserves.
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
                  Get assistance with manuscript formatting, submission
                  packages, and journal-specific requirements.
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
              Need Expert Manuscript Formatting?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100">
              Avoid desk rejections with professional editing and formatting
              support from ScholarGrid consultants, from templates and
              figures to references and submission packages.
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
