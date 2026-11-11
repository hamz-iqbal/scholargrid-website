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

const SLUG = "/blog/paper-rejection-reasons";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "Why Journals Reject Engineering Manuscripts: 7 Common Reasons and Fixes (2026)";
const DESCRIPTION =
  "Learn why journals reject engineering manuscripts, from scope mismatch to weak methods and formatting errors, and how to avoid each one before you submit.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "why journals reject papers",
    "reasons for manuscript rejection",
    "desk rejection",
    "how to avoid paper rejection",
    "engineering manuscript rejection",
    "journal scope mismatch",
    "reproducibility in research",
    "what to do after journal rejection",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-10-01T00:00:00Z",
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
    q: "What is the difference between a desk rejection and a rejection after peer review?",
    a: "A desk rejection happens when the technical check or the editor stops the paper before it goes to reviewers, usually because of scope, novelty, formatting or ethics concerns. A rejection after peer review happens when reviewers read the paper and report problems with the work itself, and the editor agrees.",
  },
  {
    q: "What are the most common reasons journals reject manuscripts?",
    a: "Common causes include poor fit with the journal’s scope, unclear novelty, weak or incomplete methods, claims that the results do not support, formatting and technical-check failures, ethics or originality problems, and unclear writing with a thin literature review. This guide explains each one and how to fix it.",
  },
  {
    q: "How can I avoid a desk rejection?",
    a: "Read the journal’s aims and scope and its Guide for Authors, check that recent papers match your topic and article type, state your novelty in the abstract and cover letter, and make sure the template, figures, references and declarations meet the journal’s requirements before you upload.",
  },
  {
    q: "Can I appeal a journal’s rejection decision?",
    a: "You can, but appeals rarely succeed unless you can point to a clear factual error in the review or decision. If you appeal, do it once, politely and with evidence, and follow the journal’s own appeals process, which is often described in its editorial policies and in COPE guidance.",
  },
  {
    q: "Should I resubmit to another journal immediately after a rejection?",
    a: "Not before you have read the reviewer comments and fixed the real problems. The next journal’s reviewers may be the same people, and the same weaknesses will come back. Reformat the manuscript, cover letter and references completely for the new journal.",
  },
  {
    q: "Can formatting alone cause a manuscript to be rejected?",
    a: "Formatting alone rarely decides acceptance, but many journals run a technical check before the editor sees the paper. An outdated template, low-resolution figures, missing declarations or broken references can lead to the manuscript being returned or declined at that stage.",
  },
  {
    q: "How do I avoid ethics and originality problems?",
    a: "Run a similarity check before submitting if your institution offers one, rewrite overlapping text including from your own earlier papers, never submit the same work to two journals at once, agree authorship early, and disclose funding, conflicts of interest and AI tools as the journal requires.",
  },
  {
    q: "How do I choose a journal that fits my paper?",
    a: "Combine the journal’s aims and scope, a review of its recent issues, and indexing and quartile data from sources such as SCImago and Journal Citation Reports. Our guide to finding fast-review Q1/Q2 journals shows a repeatable shortlisting process.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Common Reasons Engineering Manuscripts Get Rejected by Journals (And How to Avoid Them)",
      description: DESCRIPTION,
      datePublished: "2026-10-01",
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
          name: "Why Journals Reject Papers",
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
  { id: "reason-1", title: "Journal Scope and Fit" },
  { id: "reason-2", title: "Lack of Novelty" },
  { id: "reason-3", title: "Weak Methods" },
  { id: "reason-4", title: "Unsupported Claims" },
  { id: "reason-5", title: "Formatting Failures" },
  { id: "reason-6", title: "Ethics and Originality" },
  { id: "reason-7", title: "Writing and Literature Review" },
  { id: "after-rejection", title: "What to Do After Rejection" },
  { id: "checklist", title: "Pre-Submission Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/formatting-guide",
    title: "Manuscript Formatting Guide",
    text: "Templates, equations, figures and references for Elsevier and IEEE.",
  },
  {
    href: "/blog/q1-research-paper-structure",
    title: "How to Structure a Q1 Research Paper",
    text: "A 10-part blueprint from abstract to submission readiness.",
  },
  {
    href: "/blog/fast-review-q1-q2-journals",
    title: "Fast-Review Q1/Q2 Journals",
    text: "Find, verify and rank fast-review journals in engineering.",
  },
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Plan, search and report a rigorous literature review.",
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
      className="font-semibold text-blue-800 hover:underline"
    >
      [{n}]
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

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle2
            className="mt-1 h-[18px] w-[18px] shrink-0 text-blue-800"
            aria-hidden="true"
          />
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
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-blue-950 text-white">
              {headers.map((header) => (
                <th key={header} scope="col" className="px-4 py-3.5 font-semibold">
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

function CheckCards({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2">
      {items.map((item, index) => (
        <li
          key={index}
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
  );
}

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
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
      "Fill in every item on the journal’s list",
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
    "The journal’s scope and recent papers match your topic.",
    "Your contributions are stated in one clear list.",
    "Methods are complete, baselines are fair, and results include uncertainty.",
    "Every claim has evidence, and limitations are stated.",
    "Template, figures, references, and declarations pass the journal’s checklist.",
  ];

  const referenceList = [
    <>
      Elsevier, “Guide for Authors,” available on each journal’s homepage at
      sciencedirect.com.
    </>,
    <>
      J. Pineau et al., “Improving reproducibility in machine learning
      research (a report from the NeurIPS 2019 reproducibility program),”{" "}
      <i>Journal of Machine Learning Research</i>, vol. 22, no. 164,
      pp. 1–20, 2021.
    </>,
    <>
      M. D. Wilkinson et al., “The FAIR Guiding Principles for scientific
      data management and stewardship,” <i>Scientific Data</i>, vol. 3,
      Art. no. 160018, 2016.{" "}
      <Ext href="https://doi.org/10.1038/sdata.2016.18">
        doi:10.1038/sdata.2016.18
      </Ext>
    </>,
    <>
      R. L. Wasserstein and N. A. Lazar, “The ASA statement on p-values:
      Context, process, and purpose,” <i>The American Statistician</i>,
      vol. 70, no. 2, pp. 129–133, 2016.{" "}
      <Ext href="https://doi.org/10.1080/00031305.2016.1154108">
        doi:10.1080/00031305.2016.1154108
      </Ext>
    </>,
    <>
      A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, “Beyond
      authorship: Attribution, contribution, collaboration, and credit,”{" "}
      <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151–155, 2015.{" "}
      <Ext href="https://doi.org/10.1087/20150211">doi:10.1087/20150211</Ext>
    </>,
    <>
      Crossref, “Similarity Check,”{" "}
      <Ext href="https://www.crossref.org/services/similarity-check/">
        crossref.org/services/similarity-check
      </Ext>
      .
    </>,
    <>
      Committee on Publication Ethics (COPE), “Core Practices,”{" "}
      <Ext href="https://publicationethics.org/core-practices">
        publicationethics.org/core-practices
      </Ext>
      .
    </>,
    <>
      C. J. Kelly, A. Sadeghieh, and K. Adeli, “Peer review in scientific
      publications: Benefits, critiques, and a survival guide,”{" "}
      <i>EJIFCC</i>, vol. 25, no. 3, pp. 227–243, 2014.
    </>,
    <>
      L. Bornmann, “Scientific peer review,”{" "}
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
                Publishing Strategy
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Publishing Strategy
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-10-01">October 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
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
                Introduction: Why Do Journals Reject Papers?
              </h2>
              <div className="rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Almost every researcher gets rejected, including authors with
                  long publication lists. The useful question is why. Most
                  rejections come from a handful of fixable problems, and many
                  happen before a reviewer reads your abstract. Fig. 1 shows
                  where each reason in this guide strikes a manuscript.
                </p>
              </div>
            </section>

            <ArticleFigure
              src="/blogs/fig7.png"
              alt="Where a manuscript can be stopped"
              caption="Fig. 1. Where a manuscript can be stopped, and the reasons that usually do it."
              priority
            />

            <Para className="mb-2">
              There are two kinds of rejection. A desk rejection means the
              technical check or the editor stops the paper early. A
              post-review rejection means reviewers read it and found problems
              with the work. This guide covers seven common causes, what to do
              after a rejection, and a short checklist to run before you
              submit. Always read the journal’s own Guide for Authors first{" "}
              <Cite n={1} />. If you are still planning the paper, start with
              our{" "}
              <Int href="/blog/q1-research-paper-structure">
                Q1 research paper structure guide
              </Int>
              .
            </Para>

            {/* Reason 1 */}
            <SectionHeading id="reason-1" number="01">
              Reason 1: Poor Fit With the Journal’s Scope
            </SectionHeading>

            <Para>
              This is the most common desk rejection and the most avoidable. A
              strong paper sent to the wrong journal still gets rejected.
              Editors screen many submissions every week. If your title,
              abstract, and cover letter do not match the journal’s
              topics, the paper rarely gets past the first look. Some journals
              also avoid certain article types, such as simulation-only
              studies or small extensions of earlier work.
            </Para>

            <BulletList
              items={[
                "Read the aims and scope page, not just the journal’s name.",
                "Skim the last three or four issues. Do the topics, depth, and article types match yours?",
                "Find five recent papers close to yours. If none are from this journal, ask yourself why.",
                "In the cover letter, say in two sentences why this journal is the right audience.",
              ]}
            />

            <Para>
              To shortlist journals systematically, see our guide to{" "}
              <Int href="/blog/fast-review-q1-q2-journals">
                finding fast-review Q1/Q2 journals
              </Int>
              , and check quartiles on{" "}
              <Ext href="https://www.scimagojr.com/">SCImago Journal Rank</Ext>.
            </Para>

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
              Reason 2: Unclear Novelty and Incremental Contribution
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
              Reason 3: Weak Methods and Poor Reproducibility
            </SectionHeading>

            <Para>
              If a reviewer cannot tell what you did, they cannot trust what
              you found. Reproducibility is now an expectation, not a bonus{" "}
              <Cite n={2} />.
            </Para>

            <BulletList
              items={[
                "Report parameters, datasets, hardware, software versions, and settings.",
                "Use fair baselines: same data, same tuning effort, same metrics.",
                "Repeat experiments and report mean and spread, not one lucky run (Fig. 4).",
                <>
                  Share code or data where you can, following the{" "}
                  <Ext href="https://www.go-fair.org/fair-principles/">
                    FAIR principles
                  </Ext>{" "}
                  <Cite n={3} />.
                </>,
                "Explain why your test conditions are realistic, and say which conditions you left out.",
              ]}
            />

            <Para>
              The usual gaps are missing hyperparameters, unclear train and
              test splits, undefined measurement conditions, and baselines
              copied from older papers that ran under different settings. For
              how to lay out a methods section, see our{" "}
              <Int href="/blog/q1-research-paper-structure#results">
                Q1 research paper structure blueprint
              </Int>
              .
            </Para>

            <ArticleFigure
              src="/blogs/fig10.png"
              alt="Single run versus repeated runs"
              caption="Fig. 4. A single run can hide noise. Repeated runs with error bars show whether a difference is real."
            />

            {/* Reason 4 */}
            <SectionHeading id="reason-4" number="04">
              Reason 4: Claims the Results Do Not Support
            </SectionHeading>

            <Para>
              Overclaiming is a favorite target for reviewers. Words like
              &quot;robust&quot;, &quot;real-time&quot;, &quot;optimal&quot;,
              and &quot;outperforms&quot; all need matching evidence (Fig. 5).
            </Para>

            <BulletList
              items={[
                "Tie every claim in the abstract to a specific result in the paper.",
                <>
                  Report effect sizes and uncertainty, and do not lean on a
                  single p-value (see the{" "}
                  <Ext href="https://doi.org/10.1080/00031305.2016.1154108">
                    ASA statement on p-values
                  </Ext>{" "}
                  <Cite n={4} />
                  ).
                </>,
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
              Reason 5: Formatting and Technical-Check Failures
            </SectionHeading>

            <Para>
              These are the most frustrating rejections because they have
              nothing to do with your science. Many journals run a check before
              the editor ever sees the paper. Our{" "}
              <Int href="/blog/formatting-guide">manuscript formatting guide</Int>{" "}
              covers templates, equations, figures, and references in detail,
              and our{" "}
              <Int href="/blog/contour-visualizations">
                scientific visualization guide
              </Int>{" "}
              explains how to export publication-quality figures.
            </Para>

            <DataTable
              caption="Common technical-check problems and quick fixes"
              headers={["Problem", "Quick fix"]}
              rows={formattingRows}
            />

            <TipBox title="Practical tip">
              Do a dry run in the submission system. Read the PDF it generates,
              because it often shows problems your own PDF hides.
            </TipBox>

            {/* Reason 6 */}
            <SectionHeading id="reason-6" number="06">
              Reason 6: Ethics, Plagiarism and Originality Problems
            </SectionHeading>

            <Para>
              Editors take these seriously, and they can end in rejection or
              worse. Most cases come from carelessness, not bad intent{" "}
              <Cite n={7} />. The{" "}
              <Ext href="https://publicationethics.org/core-practices">
                COPE Core Practices
              </Ext>{" "}
              describe what journals expect from authors and editors.
            </Para>

            <BulletList
              items={[
                "A classic trap is overlap with your own conference paper. Extending a conference paper is normal, but the journal expects clearly new material and a note explaining what changed.",
                <>
                  Run a similarity check before you submit if your institution
                  offers one, such as{" "}
                  <Ext href="https://www.crossref.org/services/similarity-check/">
                    Crossref Similarity Check
                  </Ext>{" "}
                  <Cite n={6} />. Rewrite overlapping text, even from your own
                  earlier papers.
                </>,
                "Never submit the same work to two journals at once, and do not split one study into several thin papers.",
                <>
                  Agree on authorship early. Everyone listed should have
                  contributed, and nobody who contributed should be missing.
                  The{" "}
                  <Ext href="https://credit.niso.org/">CRediT taxonomy</Ext>{" "}
                  <Cite n={5} /> helps describe each person’s role.
                </>,
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
              Reason 7: Unclear Writing and a Thin Literature Review
            </SectionHeading>

            <Para>
              Reviewers are busy volunteers, and a confusing paper loses their
              goodwill quickly <Cite n={8} />. They forgive a few language
              slips. They do not forgive a paper they cannot follow.
            </Para>

            <BulletList
              items={[
                "Put one idea in each paragraph, with the main point in the first sentence.",
                "Define abbreviations and keep notation consistent.",
                "Ask someone outside your project to read it. If English is not your first language, consider a professional editing service.",
                <>
                  Cover the key papers and recent work, and be fair to
                  competing methods. Our{" "}
                  <Int href="/blog/systematic-literature-review-guide">
                    systematic literature review guide
                  </Int>{" "}
                  shows how to search and report the literature rigorously.
                </>,
                "Limit self-citation to what is relevant, and cite primary sources.",
              ]}
            />

            {/* After rejection */}
            <SectionHeading id="after-rejection">
              What to Do After a Journal Rejection
            </SectionHeading>

            <Para>
              A rejection is information. Read the letter, wait a day, and read
              it again. Peer review is imperfect and reviewers often disagree{" "}
              <Cite n={9} />, so you do not have to accept every comment. Take
              repeated comments seriously, though.
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
              Pre-Submission Checklist to Avoid Rejection
            </SectionHeading>

            <Para>
              Before you press submit, confirm that each of the following is
              done.
            </Para>

            <CheckCards items={checklist} />

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Manuscript Rejection
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

            <Para>
              Looking for more? Browse the{" "}
              <Int href="/blog">ScholarGrid Knowledge Library</Int> for guides
              on structure, formatting, journal selection and more.
            </Para>

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
                Conclusion: Most Rejections Are Preventable
              </h2>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                Most rejections are preventable. Match the journal, state your
                novelty, document your methods, support your claims, and pass
                the technical check. Do these five things and your paper
                reaches reviewers on its merits.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Want expert help before you submit?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid helps researchers check scope fit, strengthen
                  manuscripts and prepare complete submission packages. Explore
                  our academic services or keep learning in the Knowledge
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
              <li><Link href="/blog/fast-review-q1-q2-journals" className="transition hover:text-white">Fast-Review Q1/Q2 Journals</Link></li>
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
