import React from "react";
import type { Metadata } from "next";
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
  ChevronDown,
  Menu,
  X,
  List,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* SEO: metadata, FAQs and structured data                             */
/* ------------------------------------------------------------------ */

/* Set NEXT_PUBLIC_SITE_URL in .env if your domain differs (no trailing slash) */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scholargrid.org"
).replace(/\/$/, "");

const SLUG = "/blog/formatting-guide";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "Manuscript Formatting Guide for Q1/Q2 Journals: 9 Mistakes to Avoid";
const DESCRIPTION =
  "Follow this manuscript formatting guide for Q1 and Q2 journals: avoid 9 common mistakes, use a two-week checklist and reduce the risk of desk rejection.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "manuscript formatting guide",
    "Q1 Q2 journal formatting",
    "journal submission checklist",
    "desk rejection formatting",
    "journal template",
    "figure resolution for journals",
    "CRediT author contributions",
    "pre-submission checklist",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-12T00:00:00Z",
    modifiedTime: "2026-11-12T00:00:00Z",
    authors: ["ScholarGrid Technical Team"],
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "What are Q1 and Q2 journals?",
    a: "Q1 and Q2 are quartile rankings. A journal's quartile is the rank band it holds within its subject category, based on indicators such as SCImago's SJR or Clarivate's Journal Citation Reports. Q1 is the top quarter of journals and Q2 is the next quarter. Quartiles are assigned per subject category, so the same journal can rank differently in different categories.",
  },
  {
    q: "Can a manuscript be rejected only because of formatting?",
    a: "A formatting problem alone rarely decides the scientific verdict, but it can trigger a technical return or a desk rejection before review. Missing declarations, an outdated template, exceeded word limits and low-quality figures are common reasons for a file to be sent back or screened out early.",
  },
  {
    q: "Should I use the journal template from the start?",
    a: "Yes. Write inside the current template from day one. Converting a finished draft later often breaks equations, figures and references. Always download the template from the journal's current Guide for Authors, not from an older published paper.",
  },
  {
    q: "What resolution do journals require for figures?",
    a: "It varies by publisher, so check your target journal. Elsevier commonly asks for 1000 dpi for line art, 300 dpi for halftone and 500 dpi for combination images. IEEE commonly asks for 600 dpi for line art and 300 dpi for colour and grayscale images. Export plots and diagrams as vector PDF or EPS where possible, and never upscale a low-resolution image.",
  },
  {
    q: "Which declarations and statements are usually required?",
    a: "Most Q1 and Q2 journals ask for author contributions (often in the CRediT format), competing interests, funding sources, acknowledgments and a data availability statement. Ethics approval and generative AI disclosure are required by many journals as well. Check the Guide for Authors for the exact list.",
  },
  {
    q: "How do I check my manuscript for similarity before submission?",
    a: "Many publishers screen submissions with Crossref Similarity Check, so overlap with your thesis, preprint or conference paper can be detected. Use your institution's similarity-checking access if available, rewrite overlapping passages, cite the earlier work, and explain any legitimate overlap in the cover letter.",
  },
  {
    q: "How early should I start the pre-submission formatting checks?",
    a: "A two-week schedule works well. Spreading template checks, declarations, figures, references and a dry run in the submission system over two weeks keeps errors from piling up the night before submission.",
  },
  {
    q: "What should a cover letter include?",
    a: "A short cover letter should state the main contribution, explain why the work fits the journal, confirm that the manuscript is not under review elsewhere, and mention any legitimate overlap with earlier work such as a conference version.",
  },
  {
    q: "What should I do if my manuscript is returned for technical reasons?",
    a: "A technical return is not a rejection. Read the list of requested fixes carefully, correct every point and resubmit promptly. Then add the lesson to your own checklist so the same mistake does not cost you time again.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: "Manuscript Formatting Guide for Q1 and Q2 Journals",
      alternativeHeadline:
        "Common Pitfalls and How to Avoid Desk Rejection",
      description: DESCRIPTION,
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      inLanguage: "en",
      mainEntityOfPage: PAGE_URL,
      author: { "@type": "Organization", name: "ScholarGrid Technical Team" },
      publisher: {
        "@type": "Organization",
        name: "ScholarGrid",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: "Knowledge Library",
          item: `${SITE_URL}/blog`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Manuscript Formatting Guide",
          item: PAGE_URL,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "introduction", title: "Introduction" },
  { id: "why-formatting", title: "Why Formatting Matters for Q1 and Q2" },
  { id: "pitfalls", title: "The Nine Most Common Pitfalls" },
  { id: "timeline", title: "Your Two-Week Pre-Submission Timeline" },
  { id: "final-checklist", title: "Final Formatting Checklist" },
  { id: "formatting-return", title: "If Formatting Triggers a Return" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/q1-research-paper-structure",
    title: "How to Structure a Q1 Research Paper",
    text: "A 10-part blueprint from abstract to submission readiness.",
  },
  {
    href: "/blog/paper-rejection-reasons",
    title: "Why Journals Reject Papers",
    text: "The most common rejection reasons and how to avoid them.",
  },
  {
    href: "/blog/contour-visualizations",
    title: "Scientific Visualization Guide",
    text: "Design clear, publication-ready figures for your manuscript.",
  },
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Plan, search and report a rigorous literature review.",
  },
];

/* ------------------------------------------------------------------ */
/* Reusable pieces                                                     */
/* ------------------------------------------------------------------ */

const linkClass =
  "font-medium text-blue-800 underline decoration-blue-300 underline-offset-2 transition hover:text-blue-950";

/** Internal link to another ScholarGrid page */
function Int({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

/** External authoritative link */
function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      {children}
    </a>
  );
}

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
      <CheckCircle2
        className="mt-1 h-[18px] w-[18px] shrink-0 text-blue-800"
        aria-hidden="true"
      />
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

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
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
    <>
      SCImago, “SJR: SCImago Journal &amp; Country Rank,”{" "}
      <Ext href="https://www.scimagojr.com/">scimagojr.com</Ext>.
    </>,
    <>
      Clarivate, “Journal Citation Reports,”{" "}
      <Ext href="https://jcr.clarivate.com/">jcr.clarivate.com</Ext>.
    </>,
    <>
      Elsevier, “Guide for Authors,” available on each journal’s homepage at
      sciencedirect.com.
    </>,
    <>
      IEEE Author Center, “Templates for IEEE journal and conference
      articles,”{" "}
      <Ext href="https://journals.ieeeauthorcenter.ieee.org/">
        journals.ieeeauthorcenter.ieee.org
      </Ext>
      .
    </>,
    <>IEEE, “IEEE Editorial Style Manual for Authors,” IEEE Periodicals.</>,
    <>
      A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, “Beyond
      authorship: Attribution, contribution, collaboration, and credit,”{" "}
      <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151–155, 2015.{" "}
      <Ext href="https://doi.org/10.1087/20150211">doi:10.1087/20150211</Ext>
    </>,
    <>
      Committee on Publication Ethics (COPE), “Core Practices,”{" "}
      <Ext href="https://publicationethics.org/core-practices">
        publicationethics.org
      </Ext>
      .
    </>,
    <>
      Crossref, “Similarity Check,”{" "}
      <Ext href="https://www.crossref.org/services/similarity-check/">
        crossref.org
      </Ext>
      .
    </>,
    <>Elsevier, “Artwork and media instructions,” Elsevier Author Resources.</>,
    <>
      B. Wong, “Points of view: Color blindness,” <i>Nature Methods</i>, vol.
      8, no. 6, p. 441, 2011.{" "}
      <Ext href="https://doi.org/10.1038/nmeth.1618">doi:10.1038/nmeth.1618</Ext>
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Manuscript Formatting and Publishing Insights
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
              alt="ScholarGrid logo"
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

          <details className="group md:hidden">
            <summary
              aria-label="Toggle navigation"
              className="flex cursor-pointer list-none items-center rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden"
            >
              <Menu size={20} className="group-open:hidden" />
              <X size={20} className="hidden group-open:block" />
            </summary>
            <div className="absolute left-0 right-0 top-full border-t border-slate-200 bg-white px-6 py-4 shadow-sm">
              <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
                <Link href="/">Home</Link>
                <Link href="/#services">Services</Link>
                <Link href="/#process">How it works</Link>
                <Link href="/#insights">Insights</Link>
                <Link href="/blog">Knowledge Library</Link>
              </div>
            </div>
          </details>
        </div>
      </nav>

      <main>
        {/* Article header */}
        <header className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl px-6 pb-10 pt-9 sm:pb-12 sm:pt-12">
            {/* Breadcrumb */}
            <nav
              aria-label="Breadcrumb"
              className="mb-7 flex flex-wrap items-center gap-2 text-sm"
            >
              <Link href="/" className="font-medium text-slate-500 transition hover:text-blue-800">
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
              <Link href="/blog" className="font-medium text-slate-500 transition hover:text-blue-800">
                Knowledge Library
              </Link>
              <ChevronRight size={14} className="text-slate-400" aria-hidden="true" />
              <span aria-current="page" className="font-medium text-blue-800">
                Manuscript Formatting Guide
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Publishing &amp; Formatting Guide
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-12">November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                10 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              Manuscript Formatting Guide for Q1 and Q2 Journals: Common
              Pitfalls and How to Avoid Desk Rejection
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical manuscript formatting guide for researchers
              targeting Q1 and Q2 journals. Learn the nine formatting mistakes
              that most often trigger technical returns and desk rejections,
              and use a two-week checklist to fix them before you submit.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <Image
                    src="/logo.png"
                    alt="ScholarGrid Technical Team"
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
                <BookOpen size={15} aria-hidden="true" />
                All Articles
              </Link>
            </div>
          </div>
        </header>

        {/* Article layout */}
        <div
          id="article-content"
          className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-12 lg:py-12"
        >
          <article className="min-w-0">
            {/* Introduction */}
            <section
              id="introduction"
              aria-labelledby="introduction-heading"
              className="mb-7 scroll-mt-28"
            >
              <h2 id="introduction-heading" className="sr-only">
                Introduction: Why Manuscript Formatting Decides the First Impression
              </h2>
              <div className="space-y-4 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  You can spend two years on a study and lose two weeks to a
                  formatting error. At Q1 and Q2 journals, where editors
                  screen a large number of submissions, manuscript formatting
                  is often the first test your paper faces. A messy file can
                  trigger a desk rejection before anyone reads your results.
                  This guide explains the most common formatting pitfalls and
                  how to avoid them, so your paper is judged on its science.
                </p>
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  <strong>Q1 and Q2 describe journal quartiles.</strong> A
                  quartile is the rank band a journal holds within its subject
                  category, based on indicators such as SCImago’s SJR{" "}
                  <Cite n={1} /> or Clarivate’s Journal Citation Reports{" "}
                  <Cite n={2} /> (Fig. 1). Q1 is the top quarter and Q2 the
                  next quarter. The rules are the ones each journal publishes
                  in its Guide for Authors <Cite n={3} />. What changes is the
                  margin for error: strong journals usually receive many
                  submissions, so careless files lose out more easily.
                </p>
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Formatting is only one layer of a strong submission. For the
                  scientific structure behind it, read our guide on{" "}
                  <Int href="/blog/q1-research-paper-structure">
                    how to structure a Q1 research paper
                  </Int>
                  , and see{" "}
                  <Int href="/blog/paper-rejection-reasons">
                    why journals reject papers
                  </Int>{" "}
                  for the scientific reasons behind rejections.
                </p>
              </div>
            </section>

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

            <p className={`${P} mt-5`}>
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
              The Nine Most Common Manuscript Formatting Mistakes (and How to Fix Them)
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Fig. 3 ranks the pitfalls by how often they appear and how much
              damage they do. It is a qualitative, illustrative judgment, not a
              measured statistic. Start with the top-right corner.
            </p>

            <ArticleFigure
              src="/blogs/fig30.png"
              alt="Formatting pitfalls by frequency and damage (qualitative, illustrative)"
              caption="Fig. 3. Formatting pitfalls by frequency and damage (qualitative, illustrative)."
            />

            {/* Pitfall 1 */}
            <SubHeading>Pitfall 1: Using the Wrong or Outdated Journal Template</SubHeading>
            <p className={`${P} mt-3`}>
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
              Copy the journal’s requirements into a one-page checklist
              before you start writing. You will use it again at the end.
            </Callout>

            {/* Pitfall 2 */}
            <SubHeading>Pitfall 2: A Weak First Page (Title, Abstract and Keywords)</SubHeading>
            <p className={`${P} mt-3`}>
              The title, abstract, and keywords are what editors read first
              (Fig. 4). For a full method to write each of them, see our{" "}
              <Int href="/blog/q1-research-paper-structure#abstract">
                guide to writing a Q1 abstract and keywords
              </Int>
              .
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
                author’s details.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig31.png"
              alt="First-page mistakes that editors notice, and the clean version"
              caption="Fig. 4. First-page mistakes that editors notice, and the clean version."
            />

            {/* Pitfall 3 */}
            <SubHeading>Pitfall 3: Missing Declarations and Author Contribution Statements</SubHeading>
            <p className={`${P} mt-3`}>
              Q1 and Q2 journals usually require a set of statements.
              Forgetting one is a common reason for an administrative return.
            </p>
            <CheckList>
              <Check>
                Author contributions, ideally in the{" "}
                <Ext href="https://credit.niso.org/">CRediT</Ext> format{" "}
                <Cite n={6} />.
              </Check>
              <Check>Competing interests, funding sources, and acknowledgments.</Check>
              <Check>Data availability, and ethics approval where it applies.</Check>
              <Check>Any generative AI disclosure the journal requires.</Check>
              <Check>
                Agree on authorship early. Everyone listed should have
                contributed, and nobody who contributed should be missing,
                which matches the core practices of the Committee on
                Publication Ethics <Cite n={7} />. The{" "}
                <Ext href="https://www.icmje.org/recommendations/">
                  ICMJE recommendations
                </Ext>{" "}
                give widely used authorship criteria.
              </Check>
            </CheckList>

            {/* Pitfall 4 */}
            <SubHeading>Pitfall 4: Skipping the Originality and Similarity Check</SubHeading>
            <p className={`${P} mt-3`}>
              Overlap with your own thesis, preprint, or conference paper is a
              classic trap. Editors run similarity checks, so you should run
              one first <Cite n={8} />. Rewrite overlapping passages, cite the
              earlier work, and explain any legitimate overlap in the cover
              letter. A journal extension of a conference paper should contain
              clearly new material.
            </p>

            {/* Pitfall 5 */}
            <SubHeading>Pitfall 5: Low-Quality Figures and Wrong Resolution</SubHeading>
            <p className={`${P} mt-3`}>
              Blurry or oversized figures are the easiest formatting problem
              to spot. Export plots and diagrams as vector PDF or EPS, and use
              TIFF or PNG for photos (Fig. 5). Elsevier commonly asks for 1000
              dpi for line art, 300 dpi for halftone, and 500 dpi for
              combination images <Cite n={9} />. IEEE commonly asks for 600
              dpi for line art and 300 dpi for color and grayscale images.
              Check your journal, because requirements vary. For plotting
              techniques, see our{" "}
              <Int href="/blog/contour-visualizations">
                scientific visualization guide
              </Int>
              .
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
            <SubHeading>Pitfall 7: Reference Chaos and Inconsistent Citation Style</SubHeading>
            <p className={`${P} mt-3`}>
              Mixed citation styles look careless (Fig. 6). Match the
              journal’s style, whether numbered or author-year, and let a
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
                relevant. Our{" "}
                <Int href="/blog/systematic-literature-review-guide">
                  systematic literature review guide
                </Int>{" "}
                shows how to find and verify sources.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig33.png"
              alt="Mixed reference styles versus one consistent style"
              caption="Fig. 6. Mixed reference styles versus one consistent style."
            />

            {/* Pitfall 8 */}
            <SubHeading>Pitfall 8: Inconsistent Details Across the Manuscript</SubHeading>
            <p className={`${P} mt-3`}>
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
            <SubHeading>Pitfall 9: A Messy Submission Package and Cover Letter</SubHeading>
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

            <p className={`${P} mt-4`}>
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
              Final Manuscript Formatting Checklist Before You Submit
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your manuscript, use this checklist to
              evaluate its overall quality and technical consistency.
            </p>

            <ul className="mt-5 space-y-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-[1.8] text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            {/* If returned */}
            <SectionHeading id="formatting-return">
              What to Do If Formatting Triggers a Technical Return
            </SectionHeading>

            <p className={`${P} mt-4`}>
              A technical return is not a rejection. The journal is asking you
              to fix specific items. Read the list carefully, correct every
              point, and resubmit promptly. Then add the lesson to your own
              checklist so the same mistake never costs you time again.
            </p>

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Manuscript Formatting
            </SectionHeading>

            <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
              {faqs.map((faq, index) => (
                <details
                  key={faq.q}
                  className="group bg-white open:bg-slate-50"
                  {...(index === 0 ? { open: true } : {})}
                >
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left [&::-webkit-details-marker]:hidden">
                    <h3 className="font-serif text-base font-bold leading-snug text-slate-950">
                      {faq.q}
                    </h3>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-blue-800 transition group-open:rotate-180"
                    />
                  </summary>
                  <p className="px-5 pb-5 text-[15px] leading-[1.8] text-slate-700">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <p className={`${P} mt-4`}>
              Want to understand the scientific side of rejection too? Read{" "}
              <Int href="/blog/paper-rejection-reasons">
                why journals reject research papers
              </Int>{" "}
              or browse the full{" "}
              <Int href="/blog">ScholarGrid Knowledge Library</Int>.
            </p>

            {/* Conclusion + CTA */}
            <section
              id="conclusion"
              aria-labelledby="conclusion-heading"
              className="mt-10 scroll-mt-28 border-t border-slate-200 pt-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800">
                ScholarGrid Research Library
              </p>
              <h2
                id="conclusion-heading"
                className="mt-2 font-serif text-2xl font-bold text-slate-950 sm:text-[28px]"
              >
                Conclusion: Format Once, Submit with Confidence
              </h2>
              <p className={`${P} mt-3`}>
                Good manuscript formatting is a habit, not a talent. Follow
                the template, check the details, and keep your files clean,
                and your Q1 or Q2 submission gets the fair read it deserves.
                Combine this checklist with a strong scientific structure and
                you give editors and reviewers every reason to focus on your
                results.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need help preparing your manuscript for submission?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid helps researchers format, structure, and prepare
                  manuscripts for journal submission. Explore our academic
                  services or keep learning in the Knowledge Library.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Explore ScholarGrid Services
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Knowledge Library
                  </Link>
                </div>
              </div>
            </section>

            {/* References */}
            <section
              id="references"
              aria-labelledby="references-heading"
              className="mt-12 scroll-mt-28 border-t border-slate-200 pt-8"
            >
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                Further Reading
              </p>
              <h2
                id="references-heading"
                className="font-serif text-2xl font-bold text-slate-950 sm:text-3xl"
              >
                References
              </h2>

              <ol className="mt-5 list-decimal space-y-3 pl-5 text-[13px] leading-[1.8] text-slate-600 sm:text-sm">
                {references.map((reference, index) => (
                  <li key={index} id={`ref${index + 1}`} className="scroll-mt-28 pl-1">
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
            </section>
          </article>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block" aria-label="Article sidebar">
            <div className="sticky top-24 space-y-5">
              {/* Table of contents */}
              <nav
                aria-label="Table of contents"
                className="rounded-xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <List size={17} className="text-blue-800" aria-hidden="true" />
                  <p className="font-serif text-base font-bold text-slate-950">
                    In This Article
                  </p>
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
                        aria-hidden="true"
                        className="mt-1 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </nav>

              {/* Knowledge library card */}
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                  <BookOpen size={19} aria-hidden="true" />
                </div>
                <p className="font-serif text-lg font-bold text-slate-950">
                  Explore More Research Guides
                </p>
                <p className="mt-2 text-[13px] leading-[1.8] text-slate-600">
                  Discover practical resources on academic writing, literature
                  reviews, research methodology, and scholarly publishing.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  Browse All Articles
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              {/* Homepage link */}
              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900"
              >
                <ArrowLeft size={15} aria-hidden="true" />
                Back to Homepage
              </Link>
            </div>
          </aside>
        </div>

        {/* Related reading section */}
        <section
          aria-labelledby="related-heading"
          className="border-t border-slate-200 bg-slate-50"
        >
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                  Continue Exploring
                </p>
                <h2
                  id="related-heading"
                  className="mt-2 font-serif text-2xl font-bold text-slate-950"
                >
                  Related Research Guides from ScholarGrid
                </h2>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
              >
                View All Articles
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:border-blue-800 hover:shadow-sm"
                >
                  <h3 className="font-serif text-base font-bold leading-snug text-slate-950 group-hover:text-blue-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.7] text-slate-600">
                    {item.text}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800">
                    Read guide
                    <ArrowRight size={13} aria-hidden="true" />
                  </span>
                </Link>
              ))}
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
                alt="ScholarGrid logo"
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
          <nav aria-label="Explore ScholarGrid">
            <p className="text-sm font-semibold text-white">Explore ScholarGrid</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/#services" className="transition hover:text-white">Academic Services</Link></li>
              <li><Link href="/#process" className="transition hover:text-white">How It Works</Link></li>
              <li><Link href="/#faq" className="transition hover:text-white">Frequently Asked Questions</Link></li>
            </ul>
          </nav>

          {/* Article links */}
          <nav aria-label="Research resources">
            <p className="text-sm font-semibold text-white">Research Resources</p>
            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li><Link href="/blog/formatting-guide" className="transition hover:text-white">Manuscript Formatting</Link></li>
              <li><Link href="/blog/paper-rejection-reasons" className="transition hover:text-white">Journal Rejection Guide</Link></li>
              <li><Link href="/blog/contour-visualizations" className="transition hover:text-white">Scientific Visualization</Link></li>
              <li><Link href="/blog/systematic-literature-review-guide" className="transition hover:text-white">Literature Review Guide</Link></li>
              <li><Link href="/blog/q1-research-paper-structure" className="transition hover:text-white">Q1 Research Paper Structure</Link></li>
              <li><Link href="/blog" className="transition hover:text-white">All Articles</Link></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-slate-800 px-6 py-5 text-center text-xs leading-relaxed text-slate-500">
          © 2026 ScholarGrid. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page (server component: exports metadata and renders JSON-LD)       */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleBody />
    </>
  );
}
