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

const SLUG = "/blog/how-to-identify-research-gap";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "How to Identify a Real Research Gap: A Step-by-Step Literature Review Guide";
const DESCRIPTION =
  "Learn how to find a verifiable research gap using a systematic search, a literature matrix, gap scoring and a three-part gap statement, with a worked example.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "how to identify a research gap",
    "research gap",
    "research gap examples",
    "types of research gaps",
    "literature matrix",
    "literature review",
    "gap spotting vs problematization",
    "research gap statement",
    "thesis topic selection",
    "systematic literature search",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-26T00:00:00Z",
    modifiedTime: "2026-11-26T00:00:00Z",
    authors: ["ScholarGrid Research Team"],
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
    q: "What is a research gap?",
    a: "A research gap is the specific, documented place where existing knowledge stops, contradicts itself or fails to apply. A real gap is verified by a systematic search, matters to theory, practice or policy, and is answerable with the data, methods, time and skills you have.",
  },
  {
    q: "How many papers do I need to read to find a research gap?",
    a: "There is no universal number. The right quantity depends on the breadth of your topic and the depth of the field. What matters is that your search is systematic and documented, so you can defend that you covered the relevant literature, not that you reached a particular count.",
  },
  {
    q: "What are the main types of research gaps?",
    a: "Six types appear repeatedly across disciplines: evidence gaps, population gaps, methodological gaps, theoretical gaps, contextual gaps and temporal gaps. They overlap, and a strong study often addresses more than one. Naming the type you are chasing keeps your search focused.",
  },
  {
    q: "What is the difference between gap-spotting and problematization?",
    a: "Gap-spotting asks what is missing in the literature and builds a question around the absence. Problematization asks what the literature takes for granted and whether that assumption could be wrong. A practical approach is to verify candidate gaps systematically and then use problematization to judge whether the best gap is worth filling.",
  },
  {
    q: "Can a replication study count as a research gap?",
    a: "Yes, when the original finding is influential but weakly supported, never independently verified or likely to differ in a new context. Justify the replication by explaining why the finding matters and why confirmation is uncertain.",
  },
  {
    q: "What if I cannot find any gap?",
    a: "A topic without an obvious gap often has a gap hiding in method, population, context or theory. Re-read your literature matrix for weak cells, look for conflicting results, or try problematization by questioning the assumptions the whole field shares.",
  },
  {
    q: "Is “understudied” enough to justify a thesis?",
    a: "Rarely on its own. “Understudied” describes absence, and readers will ask why the absence matters. Pair it with evidence of importance and a plausible reason to expect new findings.",
  },
  {
    q: "How do I write a research gap statement?",
    a: "Use three parts: what is known (citing key studies), what is missing or unresolved (and how you verified it), and why it matters and what you will do (your research question). Avoid relying only on the claim that no one has studied the topic.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: "How to Identify a Real Research Gap in Your Literature Review",
      description: DESCRIPTION,
      datePublished: "2026-11-26",
      dateModified: "2026-11-26",
      inLanguage: "en",
      mainEntityOfPage: PAGE_URL,
      author: { "@type": "Organization", name: "ScholarGrid Research Team" },
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
          name: "How to Identify a Research Gap",
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
  { id: "what-is-a-gap", title: "What Is a Real Research Gap?" },
  { id: "gap-spotting", title: "Why Guesswork Fails" },
  { id: "workflow", title: "The Systematic Workflow" },
  { id: "literature-matrix", title: "How to Read a Literature Matrix" },
  { id: "frameworks", title: "Frameworks: PICO and Evidence Reasons" },
  { id: "bibliometrics", title: "Bibliometric Mapping Tools" },
  { id: "scoring", title: "Scoring and Validating Gaps" },
  { id: "gap-statement", title: "Writing a Gap Statement" },
  { id: "red-flags", title: "Red Flags: A False Gap" },
  { id: "final-checklist", title: "Quick Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Plan, search and report a rigorous literature review.",
  },
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
    href: "/blog/formatting-guide",
    title: "Manuscript Formatting Guide",
    text: "Templates, figures and declarations for Q1/Q2 journals.",
  },
];

/* ------------------------------------------------------------------ */
/* Reusable components                                                 */
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

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-7 font-serif text-xl font-bold text-slate-950">
      {children}
    </h3>
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

function DataTable({
  caption,
  headers,
  rows,
  minWidthClass,
  note,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  minWidthClass: string;
  note?: string;
}) {
  return (
    <div className="my-6">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <div className="overflow-x-auto">
          <table
            className={`w-full ${minWidthClass} border-collapse text-left text-sm`}
          >
            <caption className="sr-only">{caption}</caption>
            <thead>
              <tr className="bg-blue-950 text-white">
                {headers.map((h) => (
                  <th key={h} scope="col" className="px-4 py-3.5 font-semibold">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={row[0]}
                  className={`border-b border-slate-100 align-top ${
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
      {note && (
        <p className="mt-2 text-center text-xs leading-relaxed text-slate-500 sm:text-sm">
          {note}
        </p>
      )}
    </div>
  );
}

function NumberedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="mt-5 space-y-2.5">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
        >
          <span
            aria-hidden="true"
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600"
          >
            {index + 1}
          </span>
          <span className="text-sm leading-[1.8] text-slate-700">{item}</span>
        </li>
      ))}
    </ol>
  );
}

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const gapTypes = [
    ["Evidence gap", "Too few studies exist, or the existing studies disagree with each other."],
    ["Population gap", "A group, age range or sample has been ignored, such as rural adults, informal workers or older learners."],
    ["Methodological gap", "The field relies on one design (for example, cross-sectional surveys) and a stronger design is feasible."],
    ["Theoretical gap", "A phenomenon is described but not explained, or a popular theory has never been tested against its own assumptions."],
    ["Contextual gap", "A setting, sector or country is missing, and there is a reason to expect different results there."],
    ["Temporal gap", "Older findings may no longer hold because technology, regulation or behaviour has changed."],
  ];

  const evidenceReasons = [
    ["Insufficient or imprecise information", "Few studies, small samples, wide confidence intervals", "Larger, better-powered study or pooled analysis"],
    ["Biased information", "Weak designs, unvalidated measures, selective reporting", "Rigorous design with validated tools"],
    ["Inconsistent results", "Studies point in different directions", "Study moderators; compare contexts and definitions"],
    ["Not the right information", "Studies measure proxies, wrong outcomes or wrong populations", "Study the outcome or group that actually matters"],
  ];

  const redFlags = [
    ["You only searched one database", "Repeat the search in at least two more sources and add citation chaining."],
    ["The gap is “not studied in my country” with no reason to expect differences", "Add a theoretical reason why context should matter, or choose a different gap."],
    ["Only old studies exist", "Check whether the topic is dormant because it was resolved, abandoned or superseded."],
    ["You cannot say who would use the answer", "Write the “so what?” sentence. If you cannot, the gap may be trivial."],
    ["The data you need does not exist or cannot be accessed", "Reassess feasibility or redesign the question."],
    ["Your gap is only a combination of two popular keywords", "Check whether the combination is meaningful or merely novel."],
  ];

  const checklist = [
    "I defined a focused topic, keywords, synonyms and inclusion criteria.",
    "I searched multiple databases and recorded every query.",
    "I screened studies transparently and logged exclusions.",
    "I built a literature matrix with the same columns for every study.",
    "I read the matrix by columns, rows and blanks.",
    "I identified the type of gap and why the evidence falls short.",
    "I scored candidate gaps on novelty, importance, feasibility and fit.",
    "I stress-tested the gap with fresh searches and an expert challenge.",
    "I wrote a three-part gap statement that cites evidence.",
  ];

  const referenceList: React.ReactNode[] = [
    <>
      M. Alvesson and J. Sandberg, “Generating research questions through
      problematization,” <i>Academy of Management Review</i>, vol. 36, no. 2,
      pp. 247–271, 2011.{" "}
      <Ext href="https://doi.org/10.5465/amr.2011.59330882">
        doi:10.5465/amr.2011.59330882
      </Ext>
    </>,
    <>
      H. Arksey and L. O’Malley, “Scoping studies: Towards a methodological
      framework,” <i>International Journal of Social Research Methodology</i>,
      vol. 8, no. 1, pp. 19–32, 2005.{" "}
      <Ext href="https://doi.org/10.1080/1364557032000119616">
        doi:10.1080/1364557032000119616
      </Ext>
    </>,
    <>
      N. Donthu, S. Kumar, D. Mukherjee, N. Pandey, and W. M. Lim, “How to
      conduct a bibliometric analysis: An overview and guidelines,”{" "}
      <i>Journal of Business Research</i>, vol. 133, pp. 285–296, 2021.{" "}
      <Ext href="https://doi.org/10.1016/j.jbusres.2021.04.070">
        doi:10.1016/j.jbusres.2021.04.070
      </Ext>
    </>,
    <>
      J. P. A. Ioannidis, “Why most published research findings are false,”{" "}
      <i>PLoS Medicine</i>, vol. 2, no. 8, p. e124, 2005.{" "}
      <Ext href="https://doi.org/10.1371/journal.pmed.0020124">
        doi:10.1371/journal.pmed.0020124
      </Ext>
    </>,
    <>
      Z. Munn, M. D. J. Peters, C. Stern, C. Tufanaru, A. McArthur, and E.
      Aromataris, “Systematic review or scoping review? Guidance for authors
      when choosing between a systematic or scoping review approach,”{" "}
      <i>BMC Medical Research Methodology</i>, vol. 18, Art. no. 143, 2018.{" "}
      <Ext href="https://doi.org/10.1186/s12874-018-0611-x">
        doi:10.1186/s12874-018-0611-x
      </Ext>
    </>,
    <>
      Open Science Collaboration, “Estimating the reproducibility of
      psychological science,” <i>Science</i>, vol. 349, no. 6251, Art. no.
      aac4716, 2015.{" "}
      <Ext href="https://doi.org/10.1126/science.aac4716">
        doi:10.1126/science.aac4716
      </Ext>
    </>,
    <>
      M. J. Page et al., “The PRISMA 2020 statement: An updated guideline for
      reporting systematic reviews,” <i>BMJ</i>, vol. 372, Art. no. n71,
      2021.{" "}
      <Ext href="https://doi.org/10.1136/bmj.n71">doi:10.1136/bmj.n71</Ext>
    </>,
    <>
      K. A. Robinson, I. J. Saldanha, and N. A. Mckoy, “Development of a
      framework to identify research gaps from systematic reviews,”{" "}
      <i>Journal of Clinical Epidemiology</i>, vol. 64, no. 12, pp.
      1325–1330, 2011.{" "}
      <Ext href="https://doi.org/10.1016/j.jclinepi.2011.06.009">
        doi:10.1016/j.jclinepi.2011.06.009
      </Ext>
    </>,
    <>
      J. Sandberg and M. Alvesson, “Ways of constructing research questions:
      Gap-spotting or problematization?” <i>Organization</i>, vol. 18, no. 1,
      pp. 23–44, 2011.{" "}
      <Ext href="https://doi.org/10.1177/1350508410372151">
        doi:10.1177/1350508410372151
      </Ext>
    </>,
    <>
      H. Snyder, “Literature review as a research methodology: An overview
      and guidelines,” <i>Journal of Business Research</i>, vol. 104, pp.
      333–339, 2019.{" "}
      <Ext href="https://doi.org/10.1016/j.jbusres.2019.07.039">
        doi:10.1016/j.jbusres.2019.07.039
      </Ext>
    </>,
    <>
      D. Tranfield, D. Denyer, and P. Smart, “Towards a methodology for
      developing evidence-informed management knowledge by means of
      systematic review,” <i>British Journal of Management</i>, vol. 14, no.
      3, pp. 207–222, 2003.{" "}
      <Ext href="https://doi.org/10.1111/1467-8551.00375">
        doi:10.1111/1467-8551.00375
      </Ext>
    </>,
    <>
      N. J. van Eck and L. Waltman, “Software survey: VOSviewer, a computer
      program for bibliometric mapping,” <i>Scientometrics</i>, vol. 84, no.
      2, pp. 523–538, 2010.{" "}
      <Ext href="https://doi.org/10.1007/s11192-009-0146-3">
        doi:10.1007/s11192-009-0146-3
      </Ext>
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Literature Review and Publishing Insights
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
            <Link href="/blog" className="font-semibold text-blue-800 transition hover:text-blue-950">
              Knowledge Library
            </Link>
            <Link href="/#coverage" className="transition hover:text-blue-800">Coverage</Link>
            <Link href="/#topics" className="transition hover:text-blue-800">Topics</Link>
            <Link href="/#faq" className="transition hover:text-blue-800">FAQ</Link>
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
                Literature Review
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Literature Review
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-26">November 2026</time>
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                16 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              How to Identify a Real Research Gap: A Step-by-Step Guide for
              Thesis Writers and Early-Career Researchers
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical, evidence-based guide to finding, testing and
              writing a defensible research gap: from systematic searching and
              the literature matrix to gap scoring, stress-testing and a
              three-part gap statement.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <Image
                    src="/logo.png"
                    alt="ScholarGrid Research Team"
                    width={40}
                    height={40}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    ScholarGrid Research Team
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Literature Review and Research Methodology
                  </p>
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
          {/* Article body */}
          <article className="min-w-0">
            {/* Introduction */}
            <section
              id="introduction"
              aria-labelledby="introduction-heading"
              className="mb-7 scroll-mt-28"
            >
              <h2 id="introduction-heading" className="sr-only">
                Introduction: Why Research Gap Identification Matters
              </h2>
              <div className="rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Almost every supervisor, journal reviewer and grant panel
                  asks the same question sooner or later:{" "}
                  <em>What exactly is new about your study?</em> The honest
                  answer is your <strong>research gap</strong>: the specific,
                  documented place where existing knowledge stops,
                  contradicts itself or fails to apply. A strong gap
                  justifies your research question, shapes your methodology
                  and convinces readers that your work deserves their time.
                </p>
              </div>
            </section>

            <p className={`${P} mb-4`}>
              The trouble is that many researchers find their gap the wrong
              way. They read a handful of papers, notice that “nobody has
              studied this in my country,” and declare a gap. Weeks later a
              reviewer points to three studies they missed, or asks why
              anyone should care that the country has not been studied. The
              topic collapses, and months of effort go with it. This is also
              one of the quieter reasons behind{" "}
              <Int href="/blog/paper-rejection-reasons">
                journal rejections
              </Int>
              : the paper never convinces the editor that the question is
              both new and worth asking.
            </p>

            <p className={`${P} mb-5`}>
              This guide shows how to avoid that outcome. You will learn what
              separates a real gap from an apparent one, how to search and
              screen literature so your conclusions are defensible, how to
              build a literature matrix that makes gaps visible, and how to
              score and write up your gap statement. The method is
              repeatable. It replaces guesswork with a written trail of
              evidence that you, your supervisor and your readers can check.
              If you are planning a formal review, pair it with our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
              </Int>
              , and once your gap is clear, see how it fits into the
              Introduction of a{" "}
              <Int href="/blog/q1-research-paper-structure">
                Q1 research paper
              </Int>
              .
            </p>

            {/* Section 1 */}
            <SectionHeading id="what-is-a-gap" number="01">
              What Is a Real Research Gap in a Literature Review?
            </SectionHeading>

            <SubHeading>Real gap vs. apparent gap</SubHeading>
            <p className={`${P} mt-3`}>
              A research gap is not simply something that has not been done.
              Thousands of things have not been done, and most of them are
              not worth doing. A <strong>real research gap</strong> has three
              features at once:
            </p>

            <CheckList>
              <Check>
                <strong>It is verified.</strong> You searched systematically
                and can show that the question is unanswered, or answered
                poorly, in the existing literature.
              </Check>
              <Check>
                <strong>It matters.</strong> Closing it would change theory,
                practice, policy or future research in a way that someone can
                name.
              </Check>
              <Check>
                <strong>It is answerable.</strong> You can realistically
                address it with the data, methods, time and skills available
                to you.
              </Check>
            </CheckList>

            <p className={`${P} mt-4`}>
              An <strong>apparent gap</strong>, by contrast, usually comes
              from limited searching, narrow keywords, ignorance of adjacent
              fields or a topic nobody needs answered. Robinson and
              colleagues (2011), working in evidence-based medicine, made a
              similar point when they argued that identifying a gap means
              more than saying evidence is missing <Cite n={8} />. It means
              characterising <em>where</em> the evidence falls short and{" "}
              <em>why</em> it falls short. That second question, why, is
              what turns a hunch into a research opportunity.
            </p>

            <SubHeading>Six common types of research gaps</SubHeading>
            <p className={`${P} mt-3`}>
              Gaps come in several forms, and naming the type you are chasing
              keeps your search focused. Fig. 1 summarises six types that
              appear repeatedly across disciplines. They overlap, and a
              strong study often addresses more than one.
            </p>

            <ArticleFigure
              src="/blogs/fig66.png"
              alt="Diagram of six common types of research gaps: evidence, population, methodological, theoretical, contextual and temporal"
              caption="Fig. 1. Six common types of research gaps (author’s synthesis for teaching purposes)."
            />

            <DataTable
              caption="Six common types of research gaps and what each means"
              headers={["Gap type", "What it means"]}
              rows={gapTypes}
              minWidthClass="min-w-[560px]"
            />

            {/* Section 2 */}
            <SectionHeading id="gap-spotting" number="02">
              Why Guesswork Fails: The Problem With Gap-Spotting
            </SectionHeading>

            <SubHeading>
              What studies say about how researchers build research questions
            </SubHeading>
            <p className={`${P} mt-3`}>
              Sandberg and Alvesson (2011) reviewed 52 articles in
              organization studies to see how authors construct research
              questions from existing literature <Cite n={9} />. They found
              that the most common approach, across different paradigms, was
              to spot a gap and then formulate a question around it. The
              authors called this <em>gap-spotting</em> and warned that it
              tends to reinforce, rather than challenge, theories that are
              already influential.
            </p>
            <p className={`${P} mt-3`}>
              This does not mean gaps are useless. It means a gap on its own
              is weak support for a study. “Nobody has examined X in context
              Y” is a statement about absence. Readers will immediately ask
              whether the absence is meaningful. Guesswork enters when the
              researcher cannot answer that question.
            </p>

            <SubHeading>Five mistakes that create false research gaps</SubHeading>
            <NumberedList
              items={[
                <>
                  <strong className="text-slate-900">Searching too narrowly.</strong>{" "}
                  Using one database and one keyword combination misses
                  synonyms, older terminology and work in neighbouring
                  disciplines.
                </>,
                <>
                  <strong className="text-slate-900">Stopping at abstracts.</strong>{" "}
                  An abstract may not mention the sample, the context or the
                  limitation that actually matters.
                </>,
                <>
                  <strong className="text-slate-900">
                    Confusing “not in my search” with “not in existence.”
                  </strong>{" "}
                  Without a documented search strategy, you cannot tell the
                  two apart.
                </>,
                <>
                  <strong className="text-slate-900">Treating novelty as value.</strong>{" "}
                  A study can be new and still unimportant.
                </>,
                <>
                  <strong className="text-slate-900">Ignoring why the gap exists.</strong>{" "}
                  Some topics are unstudied because they are unmeasurable,
                  unethical or already well understood in other forms.
                </>,
              ]}
            />

            <SubHeading>
              Problematization: challenging assumptions as a gap-finding
              strategy
            </SubHeading>
            <p className={`${P} mt-3`}>
              Alvesson and Sandberg (2011) proposed <em>problematization</em>{" "}
              as an alternative <Cite n={1} />. Instead of asking “what is
              missing?”, you ask “what does this literature take for granted,
              and could that assumption be wrong?” In practice this means
              identifying the assumptions that most papers in a field share,
              questioning whether they hold, and building a question around
              the challenge.
            </p>
            <p className={`${P} mt-3`}>
              You do not have to choose between the two approaches. A
              practical position is to use the systematic workflow in this
              guide to find and verify candidate gaps, then use
              problematization to ask whether the most promising gap is worth
              filling or whether the real opportunity is to challenge the
              field’s starting assumptions.
            </p>

            {/* Section 3 */}
            <SectionHeading id="workflow" number="03">
              The Systematic Workflow: A Step-by-Step Literature Review for
              Finding Gaps
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Systematic approaches reduce bias by making each decision
              explicit. Tranfield, Denyer and Smart (2003) argued for
              systematic review methods in management research for exactly
              this reason <Cite n={11} />, and Snyder (2019) describes how
              different review types, from systematic to integrative, suit
              different purposes <Cite n={10} />. Fig. 2 shows a six-step
              workflow adapted from these ideas. You do not need a full
              formal systematic review for every project, but you should
              borrow its discipline.
            </p>

            <ArticleFigure
              src="/blogs/fig67.png"
              alt="Six-step workflow for identifying a research gap from existing literature"
              caption="Fig. 2. A six-step workflow for identifying a research gap from existing literature."
            />

            <SubHeading>Step 1: Define the scope and research topic keywords</SubHeading>
            <p className={`${P} mt-3`}>
              Start with a focused topic, not a whole field. “Social media
              and mental health” is too broad to yield a gap. “Short-form
              video use and sleep quality among university students” is
              narrow enough to search exhaustively. Write down:
            </p>
            <CheckList>
              <Check>
                your core concepts (two to four) and every synonym, spelling
                variant and related term for each;
              </Check>
              <Check>
                inclusion and exclusion criteria, such as years, languages,
                study types and populations;
              </Check>
              <Check>
                the question you are using the literature to answer:{" "}
                <em>
                  what do we know, how well do we know it, and what remains
                  unresolved?
                </em>
              </Check>
            </CheckList>

            <SubHeading>Step 2: Search the literature systematically</SubHeading>
            <p className={`${P} mt-3`}>
              Search at least two or three databases relevant to your field,
              such as <Ext href="https://scholar.google.com/">Google Scholar</Ext>,{" "}
              <Ext href="https://pubmed.ncbi.nlm.nih.gov/">PubMed</Ext>,{" "}
              <Ext href="https://www.scopus.com/">Scopus</Ext> or{" "}
              <Ext href="https://www.semanticscholar.org/">Semantic Scholar</Ext>,
              and record every query exactly as typed, with date and number
              of results. Combine concept groups with Boolean operators (AND,
              OR), use truncation and phrase searching, and check the
              reference lists of the most relevant papers. Searching forward
              through the papers that cite a key study is equally important,
              because it reveals how the field has responded since. Our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
              </Int>{" "}
              covers search strings and database choice in more depth.
            </p>
            <p className={`${P} mt-3`}>
              If your goal is to map a broad topic rather than answer a
              narrow effectiveness question, a scoping approach may suit you
              better. Arksey and O’Malley (2005) set out a widely used
              framework for scoping studies <Cite n={2} />, and Munn and
              colleagues (2018) offer guidance on when to choose a scoping
              review instead of a systematic one <Cite n={5} />.
            </p>

            <SubHeading>Step 3: Screen and select studies transparently</SubHeading>
            <p className={`${P} mt-3`}>
              Screen titles and abstracts against your criteria, then read
              the full text of those that remain. Keep a log of why each
              excluded paper was removed. The{" "}
              <Ext href="https://www.prisma-statement.org/">
                PRISMA 2020 statement
              </Ext>{" "}
              (Page et al., 2021) provides a reporting checklist and flow
              diagram that many fields use to document this process{" "}
              <Cite n={7} />. Even if you are not writing a formal systematic
              review, a simple flow record (found, screened, included,
              excluded) protects you from the accusation that you chose
              papers to suit your argument. A reference manager such as{" "}
              <Ext href="https://www.zotero.org/">Zotero</Ext> makes this
              record much easier to keep.
            </p>

            <SubHeading>Step 4: Extract data into a literature matrix</SubHeading>
            <p className={`${P} mt-3`}>
              A <strong>literature matrix</strong> (also called a synthesis
              table or evidence table) is the single most useful tool for gap
              identification. Create a spreadsheet with one row per study and
              one column for each feature that matters: author and year,
              research question, theory used, method and design, sample and
              size, setting or country, measures, key findings and stated
              limitations. Filling in the same columns for every paper forces
              you to notice what is present and what is missing.
            </p>

            <SubHeading>Step 5: Analyse patterns, conflicts and empty cells</SubHeading>
            <p className={`${P} mt-3`}>
              Once the matrix is complete, read it three ways: down the
              columns, across the rows and for blanks. The next section
              explains this in detail.
            </p>

            <SubHeading>Step 6: Validate the gap and state it clearly</SubHeading>
            <p className={`${P} mt-3`}>
              Before committing, test your candidate gap against the criteria
              in the scoring section below, check it against recent preprints
              and conference papers (for example on{" "}
              <Ext href="https://arxiv.org/">arXiv</Ext>), and ask a
              supervisor or colleague to challenge it. Then write the gap as
              a precise statement.
            </p>

            {/* Section 4 */}
            <SectionHeading id="literature-matrix" number="04">
              How to Read a Literature Matrix to Find Research Gaps
            </SectionHeading>

            <SubHeading>Look down the columns: what is over-studied?</SubHeading>
            <p className={`${P} mt-3`}>
              Columns reveal concentration. If almost every study uses the
              same sample, country or method, you have found a pattern worth
              questioning. Over-concentration is not a gap by itself, but it
              often signals one: the field may be generalising from a narrow
              base.
            </p>

            <ArticleFigure
              src="/blogs/fig68.png"
              alt="Illustrative literature matrix with empty cells highlighting candidate population and design gaps"
              caption="Fig. 3. An illustrative literature matrix. Empty cells point to candidate population and design gaps."
            />

            <p className={P}>
              In the illustrative matrix in Fig. 3, every study includes
              urban adults, while no study includes rural adults and only one
              uses a longitudinal design. Those two columns are candidate
              gaps. They still need validation. You would next check whether
              rural adults are studied under different search terms, and
              whether there is a plausible reason to expect results to
              differ.
            </p>

            <SubHeading>Look across the rows: what do studies disagree about?</SubHeading>
            <p className={`${P} mt-3`}>
              Rows reveal conflict. When two well-designed studies report
              opposite results, a <strong>conflict gap</strong> exists.
              Compare their samples, measures, time frames and analytical
              choices. Often the contradiction disappears once you notice a
              moderating variable that neither study examined. That
              moderator can become your research question.
            </p>

            <SubHeading>
              Look for blanks and weak cells: what is missing or poorly done?
            </SubHeading>
            <p className={`${P} mt-3`}>
              Blank cells show what has not been examined. Weak cells show
              what has been examined badly: small samples, self-report
              measures, short follow-up or no control group. A weak cell can
              be as valuable as a blank one, because it says the question was
              asked but not convincingly answered.
            </p>

            <SubHeading>Check the limitations and future research sections</SubHeading>
            <p className={`${P} mt-3`}>
              Authors often state the limitations of their own work and
              suggest what should be done next. These sections are a useful
              source of candidate gaps, but treat them as leads rather than
              proof. Authors sometimes list generic limitations, and a
              suggestion made five years ago may already have been taken up.
              Always verify with a fresh search.
            </p>

            {/* Section 5 */}
            <SectionHeading id="frameworks" number="05">
              Using Frameworks: PICO and the Four Reasons Evidence Falls Short
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Structured frameworks make gap identification less subjective.
              In health research, Robinson and colleagues (2011) reviewed how
              evidence-synthesis organisations identify gaps and found that
              variations of the PICO structure (population, intervention,
              comparison, outcomes), sometimes extended with setting, were
              the most common <Cite n={8} />. Their own framework adds a
              second layer: it asks why the evidence is insufficient to
              support a conclusion. Table 1 adapts those reasons for general
              use.
            </p>

            <DataTable
              caption="Reasons evidence falls short, what they look like and possible research directions"
              headers={[
                "Reason evidence falls short",
                "What it looks like in the literature",
                "Possible research direction",
              ]}
              rows={evidenceReasons}
              minWidthClass="min-w-[700px]"
              note="Table 1. Reasons evidence falls short, adapted from Robinson et al. (2011) with an added column for research direction."
            />

            <p className={P}>
              Although the framework was developed for systematic reviews in
              healthcare, the logic transfers to education, social science,
              engineering and business. Whatever your field, ask of each
              candidate gap: is the evidence too thin, too biased, too
              inconsistent or simply aimed at the wrong target?
            </p>

            {/* Section 6 */}
            <SectionHeading id="bibliometrics" number="06">
              Bibliometric Analysis and Research Gap Mapping Tools
            </SectionHeading>

            <p className={`${P} mt-4`}>
              When a field contains hundreds or thousands of papers, reading
              everything is impractical. Bibliometric analysis uses
              publication data to map the structure of a field: which topics
              cluster together, which authors and journals dominate, and
              which themes are emerging or declining. Donthu and colleagues
              (2021) provide guidelines for conducting such analyses{" "}
              <Cite n={3} />, and{" "}
              <Ext href="https://www.vosviewer.com/">VOSviewer</Ext> (van Eck
              &amp; Waltman, 2010) is one widely used program for building
              keyword and co-citation maps <Cite n={12} />.
            </p>
            <p className={`${P} mt-3`}>
              A keyword map can suggest where a gap may lie. Two
              well-developed clusters with few links between them can
              indicate an opportunity to connect concepts. A small, isolated
              cluster may signal a neglected area. Bibliometric maps show{" "}
              <em>structure</em>, not <em>quality</em>, so they generate
              leads for the literature matrix rather than replace it.
            </p>

            <Callout title="A note on AI research assistants">
              AI tools can speed up searching and summarising, but they can
              misstate findings or invent references. Treat any paper or
              claim an AI tool gives you as a lead, open the original source,
              and confirm every citation and DOI yourself before relying on
              it.
            </Callout>

            {/* Section 7 */}
            <SectionHeading id="scoring" number="07">
              Scoring and Validating Your Candidate Research Gaps
            </SectionHeading>

            <SubHeading>
              Four criteria: novelty, importance, feasibility and fit
            </SubHeading>
            <p className={`${P} mt-3`}>
              By this stage you may have several candidate gaps. Do not pick
              the most exciting one by instinct. Score each against criteria
              that matter to your situation:
            </p>

            <CheckList>
              <Check>
                <strong>Novelty:</strong> is it genuinely unaddressed after a
                documented search?
              </Check>
              <Check>
                <strong>Importance:</strong> who benefits if it is answered,
                and how?
              </Check>
              <Check>
                <strong>Feasibility:</strong> can you access the data,
                participants, equipment and time?
              </Check>
              <Check>
                <strong>Fit:</strong> does it match your skills, supervisor’s
                expertise and career direction?
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig69.png"
              alt="Chart scoring four hypothetical candidate gaps on novelty, importance, feasibility and fit"
              caption="Fig. 4. Scoring candidate gaps. Scores are hypothetical and shown only to illustrate the method."
            />

            <p className={P}>
              In the hypothetical example in Fig. 4, Gap D scores highest on
              novelty but lowest on feasibility and fit, which makes it risky
              for a time-limited thesis. Gap A has a more balanced profile
              and the highest total. Scoring does not make the decision for
              you, but it makes your reasoning visible and open to challenge.
            </p>

            <SubHeading>Stress-test the gap before you commit</SubHeading>
            <NumberedList
              items={[
                <>
                  <strong className="text-slate-900">Search again with different terms,</strong>{" "}
                  including older terminology and neighbouring disciplines.
                </>,
                <>
                  <strong className="text-slate-900">
                    Check recent preprints and conference proceedings,
                  </strong>{" "}
                  because journals lag behind current work.
                </>,
                <>
                  <strong className="text-slate-900">Ask why the gap exists.</strong>{" "}
                  Is it difficult, unethical or unimportant?
                </>,
                <>
                  <strong className="text-slate-900">Test the “so what?” question.</strong>{" "}
                  Write one sentence on who would change what they do if you
                  answered it.
                </>,
                <>
                  <strong className="text-slate-900">Seek one expert challenge.</strong>{" "}
                  Present the gap to a supervisor or someone from the field
                  and note objections.
                </>,
              ]}
            />

            <p className={`${P} mt-5`}>
              Reproducibility concerns add one more consideration. Ioannidis
              (2005) argued that many published findings may be false,
              particularly where studies are small or flexible in analysis{" "}
              <Cite n={4} />, and the Open Science Collaboration (2015) found
              that replication effects in psychology were generally weaker
              than the originals <Cite n={6} />. A well-justified replication
              or re-examination of a shaky but influential finding can be as
              valuable as an entirely new question.
            </p>

            {/* Section 8 */}
            <SectionHeading id="gap-statement" number="08">
              How to Write a Research Gap Statement
            </SectionHeading>

            <SubHeading>A simple three-part template</SubHeading>
            <p className={`${P} mt-3`}>
              A good gap statement is short, specific and traceable. A
              reliable structure has three parts:
            </p>
            <NumberedList
              items={[
                <>
                  <strong className="text-slate-900">What is known:</strong>{" "}
                  summarise the established findings, citing key studies.
                </>,
                <>
                  <strong className="text-slate-900">What is missing or unresolved:</strong>{" "}
                  state the gap precisely and say how you verified it.
                </>,
                <>
                  <strong className="text-slate-900">Why it matters and what you will do:</strong>{" "}
                  explain the consequence and introduce your research
                  question.
                </>,
              ]}
            />

            <SubHeading>Worked example</SubHeading>
            <Callout title="Example gap statement">
              Previous studies consistently link short-form video use to
              poorer sleep among urban university students (Studies A, B, C).
              However, all reviewed studies used cross-sectional surveys, and
              none examined students in rural or low-connectivity settings,
              where evening device use and sleep patterns may differ. Without
              longitudinal evidence from these settings, university health
              programmes cannot tell whether the association is causal or
              applies beyond city campuses. This study therefore asks: how
              does short-form video use predict sleep quality over one
              academic year among rural university students?
            </Callout>

            <p className={P}>
              Notice what the statement does. It cites evidence, names the
              exact limitation, explains the consequence and ends with a
              specific question. Nowhere does it rely on the weak claim that
              “no one has studied this.” For where this statement belongs in
              your manuscript, see how the Introduction is built in our guide
              to{" "}
              <Int href="/blog/q1-research-paper-structure#introduction">
                structuring a Q1 research paper
              </Int>
              .
            </p>

            {/* Section 9 */}
            <SectionHeading id="red-flags">
              Red Flags: When a Gap Is Not Really a Gap
            </SectionHeading>

            <DataTable
              caption="Common warning signs that a claimed research gap may be false"
              headers={["Red flag", "What to do"]}
              rows={redFlags}
              minWidthClass="min-w-[620px]"
              note="Table 2. Common warning signs that a claimed research gap may be false."
            />

            {/* Checklist */}
            <SectionHeading id="final-checklist">
              A Quick Checklist for Identifying a Research Gap
            </SectionHeading>

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
                  <span className="text-sm leading-[1.8] text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Research Gaps
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
              Ready to turn your gap into a manuscript? Read our{" "}
              <Int href="/blog/formatting-guide">
                manuscript formatting guide
              </Int>
              , learn{" "}
              <Int href="/blog/paper-rejection-reasons">
                why journals reject papers
              </Int>
              , or browse the{" "}
              <Int href="/blog">ScholarGrid Knowledge Library</Int>. If your
              study will include computational figures, our guide to{" "}
              <Int href="/blog/contour-visualizations">
                contour and 3D visualizations in Python and MATLAB
              </Int>{" "}
              helps you present results clearly.
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
                Conclusion: From Guesswork to a Defensible Research Gap
              </h2>
              <p className={`${P} mt-3`}>
                Finding a real research gap is not a flash of inspiration. It
                is a disciplined process of searching, screening, extracting,
                comparing and testing. When you follow the workflow in this
                guide, you move from “I think nobody has done this” to “I can
                show where the evidence is thin, biased, inconsistent or
                aimed at the wrong target, and I can explain why that
                matters.”
              </p>
              <p className={`${P} mt-3`}>
                Keep your search logs, your literature matrix and your
                scoring table. They are not busywork. They are the evidence
                behind your introduction, your methods justification and your
                answers when someone asks,{" "}
                <em>how do you know this is a gap?</em> Combine the
                systematic approach with the critical questions of
                problematization, and you will choose research questions that
                are both verifiable and worth answering.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need help defining your research gap?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid supports researchers with literature review,
                  manuscript preparation, and journal submission. Explore our
                  academic services or continue learning in the Knowledge
                  Library.
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
                {referenceList.map((reference, index) => (
                  <li key={index} id={`ref${index + 1}`} className="scroll-mt-28 pl-1">
                    {reference}
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-xs italic leading-relaxed text-slate-500">
                Figures 1 to 4 and Tables 1 and 2 were prepared by the author
                for this article. The matrix data and scores in Figures 3 and
                4 are hypothetical and for illustration only.
              </p>
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
                  Discover practical resources on academic writing,
                  literature reviews, research methodology, and scholarly
                  publishing.
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
              resources, scholarly writing guidance, and publishing
              insights for researchers across disciplines.
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
              <li><Link href="/blog/how-to-identify-research-gap" className="transition hover:text-white">Identify a Research Gap</Link></li>
              <li><Link href="/blog/systematic-literature-review-guide" className="transition hover:text-white">Literature Review Guide</Link></li>
              <li><Link href="/blog/q1-research-paper-structure" className="transition hover:text-white">Q1 Research Paper Structure</Link></li>
              <li><Link href="/blog/paper-rejection-reasons" className="transition hover:text-white">Journal Rejection Guide</Link></li>
              <li><Link href="/blog/formatting-guide" className="transition hover:text-white">Manuscript Formatting</Link></li>
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