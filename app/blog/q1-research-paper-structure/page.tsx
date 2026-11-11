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
type Faq = { q: string; a: string };

const faqs: Faq[] = [
  {
    q: "What is the standard structure of a Q1 research paper?",
    a: "Most Q1 papers follow an IMRaD-style flow: title, abstract, keywords, introduction with a clear research gap, problem formulation or study design, methodology, results and discussion, conclusion, declarations (CRediT, funding, competing interests, data availability) and references. Exact headings and order vary by discipline and journal, so always check the target journal's author guidelines.",
  },
  {
    q: "How long should the abstract of a Q1 journal paper be?",
    a: "Most journals ask for roughly 150 to 250 words, although limits differ. A strong abstract states the context, the research gap, the aim, the method, two or three quantified findings and the implication of the work, in that order.",
  },
  {
    q: "How do I write a strong research gap?",
    a: "Synthesise the literature into themes, then state precisely what existing studies measure and what they do not. A strong gap names the missing knowledge, explains why it matters and connects directly to your contribution, for example: existing studies measure A but not B, so decisions about the application rest on incomplete evidence.",
  },
  {
    q: "How many references does a Q1 paper need?",
    a: "There is no universal number. It depends on the discipline, article type and journal. Many authors aim for a focused list of primary sources, with a healthy share from the last five years, but every reference must be relevant, read and verified against the publisher page.",
  },
  {
    q: "What is the difference between verification and validation?",
    a: "Verification checks that the model, code or procedure is implemented correctly, for example through convergence or grid-independence tests. Validation checks that the model represents reality, which means comparing your results with a published benchmark, experimental data or an independent dataset.",
  },
  {
    q: "What is CRediT and do I need it in my manuscript?",
    a: "CRediT (Contributor Roles Taxonomy) is a standard list of 14 contributor roles, such as conceptualisation, methodology, software, validation and supervision. Many publishers now ask for a CRediT statement, so prepare one that accurately reflects each author's actual work.",
  },
  {
    q: "Can I use AI tools when preparing a manuscript?",
    a: "Journal policies differ, so read the target journal's current policy before using any AI tool. Most publishers require disclosure of AI-assisted writing, editing or analysis, and do not accept AI tools as authors, because authors remain fully responsible for the content.",
  },
  {
    q: "How do I check whether a journal is really Q1?",
    a: "Quartiles are assigned per subject category, not per journal overall. Check the journal's rank in your category on Scimago Journal & Country Rank or in Clarivate's Journal Citation Reports, and confirm that the journal is indexed in Scopus or Web of Science.",
  },
  {
    q: "Why are manuscripts rejected before peer review?",
    a: "Common reasons are a scope mismatch with the journal, an unclear or weak research gap, insufficient novelty, missing validation, poor reproducibility, and non-compliance with the author guidelines. A clear structure that follows this blueprint addresses most of these issues.",
  },
];

/* TODO: set NEXT_PUBLIC_SITE_URL in .env (e.g. https://www.yourdomain.com) */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.scholargrid.org"
).replace(/\/$/, "");

const SLUG = "/blog/q1-research-paper-structure";
const URL = `${SITE_URL}${SLUG}`;
const OG_IMAGE = `${SITE_URL}/images/blog/q1-research-paper-structure-og.webp`;

const TITLE =
  "How to Structure a Q1 Research Paper: 10-Part Blueprint (2026 Guide)";
const DESCRIPTION =
  "Learn how to structure a Q1 research paper step by step: abstract, methodology, results, conclusion, CRediT and a final submission checklist for any discipline.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Q1 research paper structure",
    "how to structure a research paper",
    "Q1 journal manuscript",
    "research paper format",
    "how to write a research gap",
    "research methodology section",
    "CRediT author contributions",
    "manuscript submission checklist",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-12T00:00:00Z",
    modifiedTime: "2026-11-12T00:00:00Z",
    authors: ["ScholarGrid Technical Team"],
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Blueprint showing the ten parts of a Q1 research paper structure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${URL}#article`,
      headline: "How to Structure a Q1 Research Paper from Scratch",
      alternativeHeadline:
        "A 10-Part Blueprint for Any Discipline",
      description: DESCRIPTION,
      image: [OG_IMAGE],
      datePublished: "2026-11-12",
      dateModified: "2026-11-12",
      inLanguage: "en",
      mainEntityOfPage: URL,
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
          name: "Q1 Research Paper Structure",
          item: URL,
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
  { id: "overview", title: "Overview: Q1 Paper Structure at a Glance" },
  { id: "abstract", title: "Abstract, Keywords and Nomenclature" },
  { id: "introduction", title: "Introduction and Research Gap" },
  { id: "formulation", title: "Problem Formulation" },
  { id: "methodology", title: "Research Methodology" },
  { id: "results", title: "Results and Discussion" },
  { id: "conclusion", title: "Conclusion and Future Research" },
  { id: "contributions", title: "CRediT and Declarations" },
  { id: "references", title: "References and Literature" },
  { id: "checklist", title: "Final Manuscript Checklist" },
  { id: "submission-readiness", title: "Submission Readiness" },
  { id: "faq", title: "FAQs" },
  { id: "final-thoughts", title: "Conclusion" },
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

/** External authoritative link (opens in new tab, no referrer leakage) */
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

function Figure({
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
    <figure className="my-8">
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        priority={priority}
        sizes="(min-width: 1024px) 720px, 100vw"
        className="h-auto w-full rounded-xl border border-slate-200"
      />
      <figcaption className="mt-2.5 text-center text-xs leading-relaxed text-slate-500">
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

function ArticleTable({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: React.ReactNode[][];
  caption?: string;
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-blue-950 text-white">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-4 py-3.5 font-semibold leading-relaxed"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="border-t border-slate-200 px-4 py-3.5 align-top leading-relaxed text-slate-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NumberedSteps({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="mt-5 space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[13px] font-bold text-blue-900">
            {index + 1}
          </span>
          <span className="pt-0.5 text-[15px] leading-[1.8] text-slate-700">
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Related reading data                                                */
/* ------------------------------------------------------------------ */

const related = [
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Build the literature matrix and research gap that this blueprint depends on.",
  },
  {
    href: "/blog/formatting-guide",
    title: "Manuscript Formatting Guide",
    text: "Format your paper to match journal templates and author instructions.",
  },
  {
    href: "/blog/paper-rejection-reasons",
    title: "Why Journals Reject Papers",
    text: "Learn the most common rejection reasons and how to avoid them.",
  },
  {
    href: "/blog/contour-visualizations",
    title: "Scientific Visualization Guide",
    text: "Design clear, publication-ready figures for your results section.",
  },
];

/* ------------------------------------------------------------------ */
/* Main blog page                                                      */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const checklist = [
    "The research gap is specific, meaningful, and supported by a literature matrix.",
    "Objectives are measurable and match the conclusions one by one.",
    "Assumptions, data, variables, parameters, and conditions are fully stated.",
    "The selected methodology is justified and reproducible.",
    "Software versions, numerical settings, random seeds, and experimental protocols are reported.",
    "Validation against a published or benchmark case is demonstrated.",
    "Sensitivity analysis and uncertainty estimates are reported.",
    "Every figure and table has an interpretation explaining the observed mechanism.",
    "The main novelty metric receives a detailed discussion.",
    "Limitations are acknowledged and future research directions are specific.",
    "CRediT contributions, funding, competing interests, and data availability statements are complete.",
    "References are verified, relevant, recent, and formatted according to the target journal.",
  ];

  const references = [
    <>
      Booth, W. C., Colomb, G. G., Williams, J. M., Bizup, J., & FitzGerald,
      W. T. (2016). <i>The Craft of Research</i> (4th ed.). University of
      Chicago Press.
    </>,
    <>
      Swales, J. M. (1990). <i>Genre Analysis: English in Academic and
      Research Settings</i>. Cambridge University Press.
    </>,
    <>
      Page, M. J., McKenzie, J. E., Bossuyt, P. M., et al. (2021). The PRISMA
      2020 statement: An updated guideline for reporting systematic reviews.
      <i> BMJ</i>, 372, n71.{" "}
      <Ext href="https://doi.org/10.1136/bmj.n71">doi:10.1136/bmj.n71</Ext>
    </>,
    <>
      Schulz, K. F., Altman, D. G., & Moher, D. (2010). CONSORT 2010
      statement: Updated guidelines for reporting parallel group randomised
      trials. <i>BMJ</i>, 340, c332.{" "}
      <Ext href="https://doi.org/10.1136/bmj.c332">doi:10.1136/bmj.c332</Ext>
    </>,
    <>
      Wilkinson, M. D., Dumontier, M., Aalbersberg, I. J., et al. (2016).
      The FAIR Guiding Principles for scientific data management and
      stewardship. <i>Scientific Data</i>, 3, 160018.{" "}
      <Ext href="https://doi.org/10.1038/sdata.2016.18">
        doi:10.1038/sdata.2016.18
      </Ext>
    </>,
    <>
      Brand, A., Allen, L., Altman, M., Hlava, M., & Scott, J. (2015).
      Beyond authorship: Attribution, contribution, collaboration, and
      credit. <i>Learned Publishing</i>, 28(2), 151–155.{" "}
      <Ext href="https://doi.org/10.1087/20150211">doi:10.1087/20150211</Ext>
    </>,
    <>
      Roache, P. J. (1998). <i>Verification and Validation in Computational
      Science and Engineering</i>. Hermosa Publishers.
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Research Methods and Publishing Insights
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
                Q1 Research Paper Structure
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Research Methods &amp; Publishing Guide
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-12">November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                20 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              How to Structure a Q1 Research Paper from Scratch: A 10-Part
              Blueprint for Any Discipline
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Learn how to plan, structure, write, and validate a Q1 research
              paper for high-ranking journals. This step-by-step guide covers
              the abstract, introduction, methodology, results, conclusion,
              declarations, references, and a final submission checklist.
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
            {/* Overview */}
            <section
              id="overview"
              aria-labelledby="overview-heading"
              className="mb-7 scroll-mt-28"
            >
              <h2 id="overview-heading" className="sr-only">
                Overview: What Is the Structure of a Q1 Research Paper?
              </h2>
              <div className="space-y-4 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  A high-quality Q1 research paper is not simply a collection
                  of experiments, equations, statistical results, or numerical
                  simulations. It is a structured scientific argument. It
                  identifies a meaningful research gap, develops a defensible
                  model or research design, explains a reproducible
                  methodology, presents evidence, and interprets findings
                  without exceeding what the evidence can support. A{" "}
                  <strong>Q1 journal</strong> is one ranked in the top 25
                  percent of its subject category, for example on{" "}
                  <Ext href="https://www.scimagojr.com/">
                    Scimago Journal &amp; Country Rank
                  </Ext>
                  , so editors and reviewers expect rigorous structure.
                </p>

                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  For many researchers, especially MS and PhD scholars,
                  structuring a manuscript is one of the most challenging
                  stages of academic writing. A paper may contain valuable
                  results but still lack a clear research narrative, a
                  reproducible methodology, or a convincing discussion. This
                  guide provides a ten-part blueprint that can be adapted to
                  engineering, natural sciences, computing and AI, medicine,
                  health, social sciences, and management.
                </p>

                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Each part explains what the section must achieve, provides
                  practical writing templates, discusses discipline-specific
                  adaptations, and identifies common mistakes. Use it to plan a
                  new manuscript, audit an existing draft, or supervise
                  students developing their first journal paper. If you are
                  still collecting sources, start with our{" "}
                  <Int href="/blog/systematic-literature-review-guide">
                    systematic literature review guide
                  </Int>
                  .
                </p>
              </div>

              <Figure
                src="/images/blog/q1-research-paper-structure-blueprint.webp"
                alt="Infographic of the ten-part Q1 research paper structure from abstract and introduction to methodology, results, conclusion and submission"
                caption="Figure 1. The ten-part blueprint for structuring a Q1 research paper, from abstract to submission readiness."
                priority
              />

              <ArticleTable
                caption="Standard sections of a research paper and what each must achieve"
                headers={["Paper section", "Question it answers", "Covered in"]}
                rows={[
                  ["Abstract and keywords", "What did you do, and why does it matter?", <a key="a" href="#abstract" className={linkClass}>Part 01</a>],
                  ["Introduction", "What is the gap, and what is your contribution?", <a key="b" href="#introduction" className={linkClass}>Part 02</a>],
                  ["Problem formulation", "What exactly is being solved or tested?", <a key="c" href="#formulation" className={linkClass}>Part 03</a>],
                  ["Methodology", "Why should readers trust your findings?", <a key="d" href="#methodology" className={linkClass}>Part 04</a>],
                  ["Results and discussion", "What did you find, and why did it happen?", <a key="e" href="#results" className={linkClass}>Part 05</a>],
                  ["Conclusion", "What do the findings mean and what comes next?", <a key="f" href="#conclusion" className={linkClass}>Part 06</a>],
                  ["Declarations and references", "Is the work transparent and verifiable?", <a key="g" href="#contributions" className={linkClass}>Parts 07–08</a>],
                ]}
              />
            </section>

            {/* PART 01: ABSTRACT */}
            <SectionHeading id="abstract" number="01">
              How to Write the Abstract, Keywords and Nomenclature
            </SectionHeading>

            <SubHeading>1.1 How to Write a Strong Research Abstract</SubHeading>

            <p className={`${P} mt-4`}>
              The abstract is the shortest complete representation of your
              research. It should communicate the research problem, gap,
              objective, methodology, principal findings, and significance. A
              reader should understand the purpose and contribution of the
              study without reading the complete manuscript.
            </p>

            <p className={`${P} mt-3`}>
              A practical target is approximately 150 to 250 words, subject to
              the target journal’s instructions. The following six-sentence
              structure provides a useful starting point.
            </p>

            <NumberedSteps
              items={[
                <>Context: introduce the research topic and explain why it matters.</>,
                <>Gap: identify what existing studies have not adequately addressed.</>,
                <>Aim: state the purpose of the investigation using a direct objective.</>,
                <>Method: identify the principal model, research design, or computational approach.</>,
                <>Key results: report two or three important findings using numerical evidence.</>,
                <>Implication: explain what the findings contribute to theory, design, policy, or practice.</>,
              ]}
            />

            <Callout title="Abstract writing template">
              This study investigates [research problem] under [specific
              conditions]. Although previous studies have addressed [existing
              knowledge], [specific research gap] remains insufficiently
              understood. Therefore, this study aims to [main objective]. The
              investigation employs [methodology or model] to evaluate [main
              variables or outcomes]. The results demonstrate that [finding 1]
              and [finding 2], with [quantitative evidence]. These findings
              provide insights into [theoretical or practical implication].
            </Callout>

            <SubHeading>1.2 How to Select Research Keywords</SubHeading>

            <p className={`${P} mt-3`}>
              Keywords improve the discoverability of a manuscript in academic
              databases such as{" "}
              <Ext href="https://www.elsevier.com/products/scopus">Scopus</Ext>{" "}
              and{" "}
              <Ext href="https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/">
                Web of Science
              </Ext>
              . Choose approximately five to six terms that represent the
              phenomenon, methodology, and application area of your study.
            </p>

            <ul className="my-5 flex flex-wrap gap-2" aria-label="Example keywords">
              {[
                "Research Design",
                "Q1 Journal Publishing",
                "Literature Gap",
                "Methodology",
                "Results Interpretation",
                "Academic Writing",
              ].map((keyword) => (
                <li
                  key={keyword}
                  className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-[13px] font-medium text-blue-900"
                >
                  {keyword}
                </li>
              ))}
            </ul>

            <CheckList>
              <Check>Include the main research phenomenon.</Check>
              <Check>Identify the principal method or approach.</Check>
              <Check>Include the relevant application or research domain.</Check>
              <Check>Avoid generic terms such as analysis and study.</Check>
              <Check>Check the journal’s required keyword count.</Check>
            </CheckList>

            <SubHeading>1.3 How to Prepare the Nomenclature Table</SubHeading>

            <p className={`${P} mt-3`}>
              Every research discipline uses symbols, variables, or
              abbreviations. A nomenclature table helps readers understand the
              mathematical and technical notation used throughout the
              manuscript. Define every important symbol consistently.
            </p>

            <ArticleTable
              caption="Example nomenclature table for a research manuscript"
              headers={["Symbol", "Description", "Unit or type", "Examples"]}
              rows={[
                ["S", "Control or intervention parameter", "As defined", "Suction rate, dosage, learning rate"],
                ["γ₁", "Modifying or tuning parameter", "Dimensionless", "Velocity slip, regularisation strength"],
                ["γ₂", "Ratio or scaling parameter", "Dimensionless", "Velocity ratio, signal-to-noise ratio"],
                ["X₁ ... Xₙ", "Independent variables or inputs", "As defined", "Factors, features, predictors"],
                ["Y", "Dependent variable or response", "As defined", "Output, outcome, performance metric"],
                ["θ", "Model parameters", "As defined", "Coefficients, weights, material constants"],
                ["ε", "Error or uncertainty term", "As defined", "Noise, residual, tolerance"],
                ["n", "Sample size or number of cases", "Count", "Participants, data points, mesh nodes"],
                ["α", "Significance level or step size", "Dimensionless", "0.05, numerical tolerance"],
              ]}
            />

            <CheckList>
              <Check>Use the same symbol for the same quantity throughout.</Check>
              <Check>Never assign two different meanings to one symbol.</Check>
              <Check>Include SI units or the standard units of your discipline.</Check>
              <Check>Separate variables, parameters, and abbreviations when the list becomes lengthy.</Check>
            </CheckList>

            {/* PART 02: INTRODUCTION */}
            <SectionHeading id="introduction" number="02">
              How to Write the Introduction and Research Gap
            </SectionHeading>

            <SubHeading>2.1 What a Strong Q1 Introduction Must Achieve</SubHeading>

            <p className={`${P} mt-4`}>
              The introduction establishes the scientific motivation of your
              research. It should take readers from the broader research
              problem to the specific gap addressed by your study. Instead of
              listing previous papers individually, synthesise existing
              literature into meaningful research themes. Swales’ classic
              “create a research space” model and{" "}
              <i>The Craft of Research</i> (see{" "}
              <a href="#references" className={linkClass}>references</a>) are
              both useful frameworks.
            </p>

            <NumberedSteps
              items={[
                <>Context: explain why the problem matters to science, industry, or society.</>,
                <>Background: introduce the important concepts needed to understand the investigation.</>,
                <>Literature synthesis: organise previous studies into themes and compare their findings.</>,
                <>Research gap: identify precisely what remains unresolved and why it matters.</>,
                <>Contribution: explain what your study does, which method it uses, and what readers gain.</>,
              ]}
            />

            <SubHeading>2.2 How to Write a Research Gap: Weak Versus Strong</SubHeading>

            <div className="my-5 rounded-lg border border-red-100 bg-red-50/50 p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-red-800">
                Weak research gap
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                Few researchers have studied [topic].
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
                This statement does not identify what is missing or why the
                missing knowledge matters.
              </p>
            </div>

            <div className="my-5 rounded-lg border border-emerald-100 bg-emerald-50/50 p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                Strong research gap
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-700">
                Existing studies of [topic] measure [A] but not [B], so
                decisions about [application] rest on incomplete evidence. This
                paper quantifies [B] under [specific conditions].
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-slate-500">
                This version identifies the missing knowledge and connects it
                directly to the contribution.
              </p>
            </div>

            <SubHeading>2.3 How to Build a Literature Matrix</SubHeading>

            <p className={`${P} mt-3`}>
              A literature matrix makes research gaps easier to identify.
              Prepare one row for each important study. Aim for approximately
              15 to 30 key papers as a starting point, depending on the
              discipline and scope of your research. For a fully structured
              search and screening process, follow our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
              </Int>{" "}
              and the{" "}
              <Ext href="https://www.prisma-statement.org/">
                PRISMA 2020 reporting guideline
              </Ext>
              .
            </p>

            <ArticleTable
              caption="Literature matrix template for identifying research gaps"
              headers={[
                "Reference",
                "Year",
                "Method or data",
                "Main finding",
                "Limitation",
                "What remains open",
              ]}
              rows={[
                ["[Author 1]", "2024", "[Method]", "[Finding]", "[Limitation]", "[Research gap]"],
                ["[Author 2]", "2025", "[Method]", "[Finding]", "[Limitation]", "[Research gap]"],
                ["[Author 3]", "2025", "[Method]", "[Finding]", "[Limitation]", "[Research gap]"],
              ]}
            />

            <Figure
              src="/images/blog/literature-matrix-research-gap.webp"
              alt="Example literature matrix with columns for method, finding, limitation and research gap used to find a research gap"
              caption="Figure 2. Comparing the limitation column across studies reveals repeated unresolved issues, which form a defensible research gap."
            />

            <Callout title="Practical research tip">
              Read the limitations and future research sections of relevant
              papers carefully. Compare them with the methods and results of
              other studies. Repeated unresolved issues can help you formulate
              a defensible research gap.
            </Callout>

            <SubHeading>2.4 Objectives, Research Questions and Novelty</SubHeading>

            <p className={`${P} mt-3`}>
              Research objectives should describe measurable activities rather
              than broad intentions. They must be consistent with the
              methodology and the conclusions.
            </p>

            <Callout title="Objectives template">
              The objectives of this study are: (i) to [verb] [research
              object]; (ii) to [verb] [research object]; and (iii) to [verb]
              [research object]. The novelty lies in [new model, dataset,
              condition, method, or combination].
            </Callout>

            <p className={P}>
              Prefer measurable verbs such as quantify, compare, optimise,
              validate, and predict. Avoid vague expressions such as explore or
              look at when a more precise objective is possible.
            </p>

            <SubHeading>2.5 Establishing the Research Model</SubHeading>

            <p className={`${P} mt-3`}>
              Every research paper contains a model of reality, even when it is
              not mathematical. Describe the system, its inputs, outputs, and
              baseline conditions before discussing the technical details.
            </p>

            <ArticleTable
              caption="What the research model represents in different disciplines"
              headers={["Discipline", "What the model represents", "Boundary or baseline conditions"]}
              rows={[
                ["Engineering and physics", "Physical setup, geometry, and governing physics", "Boundary and initial conditions"],
                ["Computing and AI", "Architecture, dataset, and training pipeline", "Train/test split, hardware, hyperparameters"],
                ["Medical and health", "Study design, population, and intervention", "Eligibility criteria and control group"],
                ["Social science and management", "Conceptual framework, constructs, and hypotheses", "Sample, context, and measurement scales"],
                ["Environmental science", "System, geographical region, and time window", "Climate scenario, land use, and data sources"],
              ]}
            />

            <div className="my-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
                Research model framework
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-lg border border-blue-200 bg-white p-3.5 text-center">
                  <p className="text-xs font-bold text-blue-900">INPUTS</p>
                  <p className="mt-1.5 text-[13px] text-slate-600">
                    Parameters, variables, and conditions
                  </p>
                </div>

                <div className="rounded-lg border border-blue-800 bg-blue-950 p-3.5 text-center text-white">
                  <p className="text-xs font-bold">SYSTEM</p>
                  <p className="mt-1.5 text-[13px] text-blue-100">
                    Model, design, or physical setup
                  </p>
                </div>

                <div className="rounded-lg border border-blue-200 bg-white p-3.5 text-center">
                  <p className="text-xs font-bold text-blue-900">OUTPUTS</p>
                  <p className="mt-1.5 text-[13px] text-slate-600">
                    Metrics, outcomes, and performance
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-slate-200 bg-white p-3.5 text-center">
                <p className="text-xs font-bold text-slate-800">BASELINE CONDITIONS</p>
                <p className="mt-1.5 text-[13px] text-slate-600">
                  Reference model, control group, default settings, or boundary
                  conditions
                </p>
              </div>
            </div>

            <p className={P}>
              Always explain what is varied, what remains fixed, and what is
              measured. A suitable baseline also provides a reference case for
              verification in the results section.
            </p>

            <SubHeading>2.6 State Your Research Assumptions</SubHeading>

            <p className={`${P} mt-3`}>
              Every model simplifies reality. State the assumptions explicitly
              and explain why each is reasonable for the research question.
            </p>

            <Callout title="Assumption template">
              Assumption 1: [State the simplification], because [provide its
              scientific justification or supporting citation].
            </Callout>

            {/* PART 03: FORMULATION */}
            <SectionHeading id="formulation" number="03">
              Problem Formulation: Turning a Research Idea into a Reproducible Problem
            </SectionHeading>

            <SubHeading>3.1 What the Problem Formulation Section Must Contain</SubHeading>

            <p className={`${P} mt-4`}>
              The problem formulation converts the research idea into a precise
              scientific or technical statement. A reader should be able to
              understand the unknown quantities, governing relations,
              constraints, and expected outputs from this section alone.
            </p>

            <NumberedSteps
              items={[
                <>Variables and parameters: identify unknown quantities, given values, and variables to be changed.</>,
                <>Governing relations: present the equations, model, hypotheses, or study design.</>,
                <>Conditions and constraints: state boundary conditions, initial conditions, eligibility rules, or data limitations.</>,
                <>Outputs of interest: identify the quantities that will be evaluated and reported.</>,
              ]}
            />

            <SubHeading>3.2 A Generic Mathematical Formulation</SubHeading>

            <p className={`${P} mt-3`}>
              A broad representation of a quantitative research problem can be
              expressed as:
            </p>

            <div className="my-5 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
              <p className="whitespace-nowrap font-serif text-lg font-semibold text-blue-950 sm:text-2xl">
                Y = F(X₁, ..., Xₙ; θ; S, γ₁, γ₂) + ε
              </p>
              <div className="my-3 h-px bg-slate-200" />
              <p className="font-serif text-lg text-slate-800">C(Y, X) = 0</p>
              <p className="mt-2 text-xs text-slate-500">
                Boundary, initial, or study design conditions
              </p>
            </div>

            <p className={P}>
              Here, F represents the model, θ denotes model parameters, and S,
              γ₁, and γ₂ represent control or tuning parameters. The error term
              ε accounts for uncertainty or residual variation where
              applicable.
            </p>

            <ArticleTable
              caption="Model, conditions and reported outputs across research fields"
              headers={["Field", "Model F", "Conditions C", "Reported outputs"]}
              rows={[
                ["Physics and engineering", "Governing equations and conservation laws", "Boundary and initial conditions", "Profiles, coefficients, efficiency"],
                ["Computing and AI", "Network, algorithm, and loss function", "Dataset, split, and constraints", "Accuracy, F1, runtime, energy"],
                ["Statistics and epidemiology", "Regression or survival model", "Inclusion criteria and confounder adjustment", "Effect sizes, confidence intervals, p-values"],
                ["Social science", "Structural or path model", "Sample frame and measurement scales", "Path coefficients and fit indices"],
                ["Chemistry and materials", "Reaction or constitutive model", "Temperature, pressure, and composition", "Yield, strength, selectivity"],
              ]}
            />

            <SubHeading>3.3 How to Write Equations and Research Designs</SubHeading>

            <CheckList>
              <Check>Number every equation referenced later in the manuscript.</Check>
              <Check>Define each symbol at its first appearance.</Check>
              <Check>Explain how the model was derived or cite the published model being adopted.</Check>
              <Check>Show transformations such as normalisation, non-dimensionalisation, or standardisation.</Check>
              <Check>Ensure the transformed problem is clearly presented.</Check>
            </CheckList>

            <SubHeading>3.4 Conditions, Constraints and Baseline Cases</SubHeading>

            <p className={`${P} mt-3`}>
              State the baseline case explicitly. It should be the simplest
              setting for which a published result or established reference is
              available. For example, setting selected tuning parameters to
              zero may recover a classical model.
            </p>

            <p className={`${P} mt-3`}>
              This baseline becomes an important reference for validating the
              proposed numerical method, experimental procedure, or
              computational pipeline.
            </p>

            <SubHeading>3.5 Define the Quantities You Will Report</SubHeading>

            <p className={`${P} mt-3`}>
              Every reported output should have a mathematical definition or a
              clearly described measurement protocol.
            </p>

            <ArticleTable
              caption="Example reported quantities by research area"
              headers={["Research area", "Example quantities"]}
              rows={[
                ["Engineering", "Skin-friction coefficient, Nusselt number, efficiency"],
                ["Computing and AI", "Accuracy, precision, recall, F1-score"],
                ["Medicine", "Hazard ratio, risk ratio, confidence interval"],
                ["Social science", "Cronbach’s alpha, path coefficients, fit indices"],
                ["Thermodynamics", "Entropy generation and Bejan number"],
              ]}
            />

            <SubHeading>3.6 Problem Formulation Summary</SubHeading>

            <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
              {[
                ["GIVEN", "Data, geometry, population, constants"],
                ["UNKNOWN", "Response variables and effects of inputs"],
                ["VARIED", "Control parameters and independent variables"],
                ["MODEL", "Equations, algorithm, or conceptual framework"],
                ["CONDITIONS", "Boundary, design, and eligibility constraints"],
                ["OUTPUTS", "Metrics and quantities defined for reporting"],
              ].map(([label, description], index) => (
                <div
                  key={label}
                  className={`grid gap-1.5 px-4 py-3 sm:grid-cols-[120px_1fr] ${
                    index % 2 === 0 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <span className="text-xs font-bold tracking-wider text-blue-900">
                    {label}
                  </span>
                  <span className="text-sm leading-relaxed text-slate-700">
                    {description}
                  </span>
                </div>
              ))}
            </div>

            <Callout title="Common formulation mistakes">
              Unnumbered equations, undefined symbols, hidden assumptions,
              copied formulas without citations, and problem statements that
              cannot be independently reproduced.
            </Callout>

            {/* PART 04: METHODOLOGY */}
            <SectionHeading id="methodology" number="04">
              Research Methodology: How to Make Your Study Reproducible
            </SectionHeading>

            <SubHeading>4.1 How to Select and Justify Your Research Method</SubHeading>

            <p className={`${P} mt-4`}>
              The methodology section answers one important question: why
              should readers trust your findings? Naming a method is not
              enough. Explain why it is appropriate for the research problem
              and provide sufficient information for independent reproduction.
              Reporting guidelines from the{" "}
              <Ext href="https://www.equator-network.org/">EQUATOR Network</Ext>{" "}
              help you choose the right checklist for your study design.
            </p>

            <ArticleTable
              caption="Typical methods and reporting requirements by research field"
              headers={["Research field", "Typical methods", "What to report"]}
              rows={[
                ["Computational science and engineering", "Finite difference, finite volume, Runge-Kutta, collocation, CFD", "Software, version, tolerance, grid, domain, convergence"],
                ["Experimental sciences", "Controlled experiments and instrumentation", "Apparatus, uncertainty, repeats, calibration"],
                ["Computing and AI", "Model training, benchmarking, ablation", "Dataset, split, hyperparameters, seeds, hardware, code"],
                [
                  "Medical and health",
                  "RCT, cohort, case-control, systematic review",
                  <>
                    Protocol, ethics, sample size,{" "}
                    <Ext href="https://www.consort-statement.org/">CONSORT</Ext>,{" "}
                    <Ext href="https://www.strobe-statement.org/">STROBE</Ext>,{" "}
                    <Ext href="https://www.prisma-statement.org/">PRISMA</Ext>
                  </>,
                ],
                ["Social science and management", "Survey, interviews, SEM, mixed methods", "Sampling, instrument validation, reliability, ethics"],
              ]}
            />

            <SubHeading>4.2 How to Write the Methodology as Numbered Steps</SubHeading>

            <p className={`${P} mt-3`}>
              A numbered procedure makes the methodology easier to understand,
              evaluate, and reproduce.
            </p>

            <NumberedSteps
              items={[
                <>Define the research inputs, outputs, and scope.</>,
                <>Prepare the model, data, or experimental apparatus.</>,
                <>Specify initial values, starting guesses, seeds, or calibration settings.</>,
                <>Execute the core procedure, such as solving, training, measuring, or collecting data.</>,
                <>Check convergence, reliability, or quality against a defined criterion.</>,
                <>Test sensitivity to important settings, such as grid size, random seed, sample, or step size.</>,
                <>Validate against a published benchmark or independent dataset.</>,
                <>Analyse the effects of the selected parameters and independent variables.</>,
                <>Calculate additional measures related to the novelty of the research, such as cost, efficiency, irreversibility, or effect size.</>,
              ]}
            />

            <SubHeading>4.3 Verification, Validation and Reproducibility</SubHeading>

            <p className={`${P} mt-3`}>
              Verification establishes whether the computational or analytical
              procedure is implemented correctly. Validation establishes
              whether it represents reality. Reproducibility allows other
              researchers to understand and repeat the work.
            </p>

            <CheckList>
              <Check>Reduce the model to a known limiting case and compare it with published findings.</Check>
              <Check>Demonstrate that results remain stable after refining the grid, domain, or sample.</Check>
              <Check>Report software versions, numerical settings, and random seeds.</Check>
              <Check>
                Share code and data in an accessible repository where
                possible, following the{" "}
                <Ext href="https://www.go-fair.org/fair-principles/">
                  FAIR principles
                </Ext>
                .
              </Check>
              <Check>
                For human or animal research, report ethics approval and
                consent where applicable, in line with{" "}
                <Ext href="https://www.icmje.org/recommendations/">
                  ICMJE recommendations
                </Ext>
                .
              </Check>
            </CheckList>

            <Callout title="Important distinction">
              Do not claim that a method is validated simply because it
              produces converged numerical results. Show the actual comparison
              against a benchmark, published result, or independent reference.
            </Callout>

            <SubHeading>4.4 Common Methodology Mistakes</SubHeading>

            <CheckList>
              <Check>Naming a method without explaining why it was selected.</Check>
              <Check>Omitting important parameter values and computational settings.</Check>
              <Check>Skipping sensitivity or convergence analysis.</Check>
              <Check>Claiming validation without presenting a comparison.</Check>
              <Check>Providing insufficient detail for independent reproduction.</Check>
            </CheckList>

            <p className={`${P} mt-4`}>
              These are also among the leading causes of desk rejection. Read{" "}
              <Int href="/blog/paper-rejection-reasons">
                why journals reject research papers
              </Int>{" "}
              to see how editors judge methodology and novelty.
            </p>

            {/* PART 05: RESULTS */}
            <SectionHeading id="results" number="05">
              Results and Discussion: How to Validate and Interpret Your Findings
            </SectionHeading>

            <Callout title="The central rule for discussing every result">
              Claim, Evidence, Reason, Implication. State what changed, point
              to the relevant figure or table, explain why it changed, and
              describe what the finding means scientifically or practically.
            </Callout>

            <p className={P}>
              The results section should do more than describe numerical values
              or visual trends. It must explain the mechanisms behind the
              observations and connect them to the research objectives. A plot
              without a scientific interpretation contributes little to the
              argument of a paper.
            </p>

            <SubHeading>5.1 Validation and Comparison with Published Literature</SubHeading>

            <p className={`${P} mt-3`}>
              Validation should appear before the discussion of new results.
              Use the baseline case established in the problem formulation to
              demonstrate whether the present approach reproduces established
              findings.
            </p>

            <ArticleTable
              caption="Validation table template comparing present results with published values"
              headers={[
                "Quantity or metric",
                "Condition",
                "Published value",
                "Present study",
                "Difference",
              ]}
              rows={[
                ["[Metric 1]", "[Baseline case]", "[Value and reference]", "[Value]", "[Absolute or %]"],
                ["[Metric 2]", "[Baseline case]", "[Value and reference]", "[Value]", "[Absolute or %]"],
                ["[Metric 3]", "[Second condition]", "[Value and reference]", "[Value]", "[Absolute or %]"],
              ]}
            />

            <Callout title="Validation writing template">
              The maximum deviation is [x] percent, demonstrating agreement
              between the present [model, solver, or pipeline] and the
              established reference results.
            </Callout>

            <Figure
              src="/images/blog/validation-workflow-research-paper.webp"
              alt="Flowchart of the validation workflow: baseline case, comparison with published benchmark, deviation check and sensitivity analysis"
              caption="Figure 3. Validation workflow: reproduce a published baseline first, report the deviation, then present new results."
            />

            <SubHeading>5.2 How to Present the Main Results</SubHeading>

            <p className={`${P} mt-3`}>
              Include a main results table containing the core numerical
              findings that readers may want to compare or cite. The reported
              precision should reflect the uncertainty of the underlying
              measurements or calculations.
            </p>

            <ArticleTable
              caption="Main results table template"
              headers={["Case", "S", "γ₁", "γ₂", "Metric A", "Metric B", "Metric C"]}
              rows={[
                ["Baseline", "0", "0", "1", "[Value]", "[Value]", "[Value]"],
                ["Case 2", "[Value]", "0", "1", "[Value]", "[Value]", "[Value]"],
                ["Case 3", "[Value]", "[Value]", "1", "[Value]", "[Value]", "[Value]"],
                ["Case 4", "[Value]", "[Value]", "[Value]", "[Value]", "[Value]", "[Value]"],
              ]}
            />

            <SubHeading>5.3 How to Discuss Parameter Effects</SubHeading>

            <p className={`${P} mt-3`}>
              A parametric investigation should change one parameter at a time
              while keeping the remaining parameters fixed. Clearly state the
              fixed values in the relevant figure captions and explain the
              observed response.
            </p>

            <NumberedSteps
              items={[
                <>What changed? Report the numerical trend and relevant values.</>,
                <>Why did it change? Explain the physical, computational, statistical, or behavioural mechanism.</>,
                <>What does it mean? Discuss the scientific or practical consequence.</>,
              ]}
            />

            <Callout title="Example of a results discussion">
              Increasing S from 0 to 1 raises Metric A by [x] percent because
              of [scientific mechanism], which favours [specific application].
              Replace all placeholders with findings obtained from your own
              study.
            </Callout>

            <p className={P}>
              In machine-learning research, this part often includes ablation
              studies. In medical research, it may include subgroup and
              sensitivity analyses. In social science, it can involve
              moderation and robustness analysis.
            </p>

            <SubHeading>5.4 How to Discuss the Main Novelty Metric</SubHeading>

            <p className={`${P} mt-3`}>
              Every research paper should clearly explain its central
              contribution. If the novelty involves a particular metric, such
              as entropy generation, Bejan number, computational energy cost,
              cost-effectiveness, or carbon footprint, dedicate sufficient
              discussion to that quantity.
            </p>

            <NumberedSteps
              items={[
                <>Identify where or when the metric reaches its maximum or minimum.</>,
                <>Explain how it responds to each important parameter.</>,
                <>Identify the regimes in which one mechanism dominates another.</>,
                <>Translate the findings into a practical design or operational implication.</>,
              ]}
            />

            <ArticleTable
              caption="Template for discussing the effect of parameters on the novelty metric"
              headers={[
                "Parameter increased",
                "Effect on component 1",
                "Effect on component 2",
                "Effect on total metric",
                "Interpretation",
              ]}
              rows={[
                ["S", "[Rises / falls]", "[Rises / falls]", "[Rises / falls]", "[Mechanism]"],
                ["γ₁", "[Rises / falls]", "[Rises / falls]", "[Rises / falls]", "[Mechanism]"],
                ["γ₂", "[Rises / falls]", "[Rises / falls]", "[Rises / falls]", "[Mechanism]"],
              ]}
            />

            <p className={P}>
              Complete this comparison using your own calculated data. Never
              copy a trend from another paper without verifying it under your
              own model and conditions.
            </p>

            <SubHeading>5.5 Reporting Uncertainty and Statistical Significance</SubHeading>

            <CheckList>
              <Check>Report confidence intervals, standard deviations, or numerical error estimates.</Check>
              <Check>Identify the statistical test, test statistic, and exact p-value where applicable.</Check>
              <Check>Distinguish statistical significance from practical importance.</Check>
              <Check>Report alternative solution branches or subgroups when results are not unique.</Check>
            </CheckList>

            <SubHeading>5.6 How to Choose Effective Figures and Tables</SubHeading>

            <p className={`${P} mt-3`}>
              Figures should answer specific research questions rather than
              simply increase the number of visual elements in a manuscript. A
              practical starting point is four to eight well-designed figures,
              depending on the study and journal requirements. For plotting
              techniques, see our{" "}
              <Int href="/blog/contour-visualizations">
                scientific visualization guide
              </Int>
              .
            </p>

            <CheckList>
              <Check>Label axes with symbols, names, and units.</Check>
              <Check>Use readable fonts and distinguishable line styles.</Check>
              <Check>Include fixed parameter values in figure captions.</Check>
              <Check>Make each caption explain what is plotted and its main message.</Check>
              <Check>Ensure tables and figures are referenced and discussed in the text.</Check>
            </CheckList>

            <SubHeading>5.7 Common Results and Discussion Mistakes</SubHeading>

            <CheckList>
              <Check>Presenting plots without explaining the underlying mechanism.</Check>
              <Check>Omitting validation or presenting it only in the abstract.</Check>
              <Check>Reporting more decimal places than the precision justifies.</Check>
              <Check>Selecting only favourable results and omitting unsuccessful cases.</Check>
              <Check>Mixing the presentation of results with unsupported conclusions.</Check>
            </CheckList>

            {/* PART 06: CONCLUSION */}
            <SectionHeading id="conclusion" number="06">
              Conclusion and Future Research Directions
            </SectionHeading>

            <SubHeading>6.1 What a Research Conclusion Must Achieve</SubHeading>

            <p className={`${P} mt-4`}>
              The conclusion provides a concise answer to the research
              objectives stated in the introduction. Each important conclusion
              should be supported by findings already presented in the results
              section.
            </p>

            <p className={`${P} mt-3`}>
              Do not introduce new results, additional literature, or claims
              that go beyond the available evidence.
            </p>

            <SubHeading>6.2 A Practical Key Findings Template</SubHeading>

            <NumberedSteps
              items={[
                <>Finding 1: [Parameter A] increases or decreases [Metric] by [x percent] over [range], because [mechanism].</>,
                <>Finding 2: [Parameter B] produces [quantified effect], which means [consequence].</>,
                <>Finding 3: The [novelty metric] is highest at [location or stage], and [component] dominates under [condition].</>,
                <>Finding 4: The recommended operating or design setting is [setting], providing [benefit].</>,
                <>Finding 5: Compared with [benchmark], the present approach improves [metric] by [x percent].</>,
              ]}
            />

            <Callout title="Conclusion writing rule">
              Every key finding should be traceable to a specific figure or
              table. Use numerical evidence rather than unsupported
              expressions such as significantly improved or substantially
              enhanced.
            </Callout>

            <SubHeading>6.3 Connecting Research to Real-Life Applications</SubHeading>

            <p className={`${P} mt-3`}>
              Explain where the findings can be used and what a researcher,
              engineer, clinician, policymaker, or practitioner might do
              differently as a result.
            </p>

            <ArticleTable
              caption="Potential application areas by research field"
              headers={["Research field", "Potential application areas"]}
              rows={[
                ["Engineering", "Thermal management, aerospace components, energy systems, manufacturing and coating processes"],
                ["Computing and AI", "Edge-device deployment, healthcare decision support, fraud detection, energy-efficient training"],
                ["Medical and health", "Treatment guidelines, screening policy, and device design"],
                ["Social science and management", "Policy design, organisational practice, and education programmes"],
                ["Environment", "Resource management, climate adaptation, and pollution control"],
              ]}
            />

            <SubHeading>6.4 How to Acknowledge Research Limitations</SubHeading>

            <p className={`${P} mt-3`}>
              A credible manuscript acknowledges its limitations. Discussing
              them openly helps readers understand the boundaries within which
              the findings should be interpreted.
            </p>

            <CheckList>
              <Check>Model or design limitations, including simplifying assumptions and restricted scope.</Check>
              <Check>Data or sample limitations, including size, representativeness, and missing data.</Check>
              <Check>Methodological limitations, such as numerical tolerance, algorithmic bias, or measurement error.</Check>
              <Check>Generalisability limitations and the conditions under which the findings may not apply.</Check>
            </CheckList>

            <SubHeading>6.5 How to Identify Future Research Directions</SubHeading>

            <CheckList>
              <Check>Relax the principal simplifying assumption and quantify its effect.</Check>
              <Check>Extend the parameter range, dataset, or sample size.</Check>
              <Check>Perform experimental, clinical, or field validation.</Check>
              <Check>Apply advanced approaches such as stability analysis, machine-learning surrogates, multi-objective optimisation, or causal inference.</Check>
              <Check>Investigate whether the findings transfer to a neighbouring discipline or industrial application.</Check>
            </CheckList>

            <Callout title="Avoid generic future-work statements">
              Instead of ending with only “more research is needed”, identify a
              specific limitation, explain how it could be addressed, and
              describe the expected scientific benefit.
            </Callout>

            {/* PART 07: DECLARATIONS */}
            <SectionHeading id="contributions" number="07">
              CRediT Author Contributions and Research Declarations
            </SectionHeading>

            <SubHeading>7.1 How to Prepare CRediT Author Contributions</SubHeading>

            <p className={`${P} mt-4`}>
              Research contributions should be described transparently. The{" "}
              <Ext href="https://credit.niso.org/">
                CRediT (Contributor Roles Taxonomy)
              </Ext>{" "}
              provides a structured way to identify the different roles
              performed by each author. Use the journal’s required format and
              ensure that the contribution statements accurately reflect the
              work completed.
            </p>

            <ArticleTable
              caption="Example CRediT author contribution allocation"
              headers={["CRediT role", "Example author allocation"]}
              rows={[
                ["Conceptualisation", "[Author 1]"],
                ["Methodology", "[Author 1, Author 2]"],
                ["Software", "[Author 2]"],
                ["Validation", "[Author 2]"],
                ["Formal analysis", "[Author 1]"],
                ["Investigation", "[Author 1, Author 2]"],
                ["Writing: original draft", "[Author 1]"],
                ["Writing: review and editing", "[All authors]"],
                ["Visualisation", "[Author 2]"],
                ["Supervision", "[Corresponding author]"],
                ["Project administration", "[Corresponding author]"],
                ["Funding acquisition", "[If applicable]"],
              ]}
            />

            <SubHeading>7.2 Funding Statement</SubHeading>

            <Callout title="Funding statement template">
              This research received no specific grant from any funding agency
              in the public, commercial, or not-for-profit sectors. Replace
              this statement with the relevant grant name and number if the
              study received funding.
            </Callout>

            <SubHeading>7.3 Declaration of Competing Interest</SubHeading>

            <Callout title="Declaration template">
              The authors declare no known competing financial interests or
              personal relationships that could have influenced the work
              reported in this paper.
            </Callout>

            <SubHeading>7.4 Data Availability Statement</SubHeading>

            <Callout title="Data availability template">
              The data and solver scripts supporting this study are available
              from the corresponding author on reasonable request. Where
              possible, deposit the data and code in a public repository and
              cite its DOI.
            </Callout>

            <SubHeading>7.5 Disclosure of AI-Assisted Tools</SubHeading>

            <p className={`${P} mt-3`}>
              If generative AI or other AI-assisted tools were used during
              manuscript preparation, disclose their use according to the
              target journal’s current policy. Follow the journal’s
              instructions on writing, editing, coding, data analysis, and
              other AI-assisted activities. The{" "}
              <Ext href="https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools">
                COPE position statement
              </Ext>{" "}
              notes that AI tools cannot be listed as authors, because authors
              remain accountable for the work.
            </p>

            {/* PART 08: REFERENCES */}
            <SectionHeading id="references" number="08">
              References and Literature Management
            </SectionHeading>

            <SubHeading>8.1 How to Build a Strong Reference List</SubHeading>

            <p className={`${P} mt-4`}>
              References establish the scientific context of a manuscript and
              allow readers to verify the foundations of your investigation.
              Select primary research papers that directly support your
              arguments, methods, and comparisons.
            </p>

            <p className={`${P} mt-3`}>
              The foundational sources below provide guidance on research
              design, academic writing, reporting standards, reproducibility,
              and author contributions.
            </p>

            <SubHeading>8.2 Foundational Research and Reporting Sources</SubHeading>

            <ol className="mt-5 list-decimal space-y-3 pl-5 text-[13px] leading-[1.8] text-slate-600 sm:text-sm">
              {references.map((reference, index) => (
                <li key={index} className="pl-1">
                  {reference}
                </li>
              ))}
            </ol>

            <SubHeading>8.3 How to Find Recent Literature (2024–2026)</SubHeading>

            <p className={`${P} mt-3`}>
              Recent literature should be selected according to the specific
              research topic. Use Scopus or Web of Science to identify
              relevant studies, then verify each reference against its
              publisher page.
            </p>

            <NumberedSteps
              items={[
                <>Search using a combination of the research phenomenon, method, and application area.</>,
                <>Filter results to the 2024–2026 publication period where appropriate.</>,
                <>Select approximately 10 to 15 relevant papers from strong journals in your field.</>,
                <>Prioritise studies that are closely related to your research question and target journal.</>,
                <>Verify each DOI, article title, volume, issue, and page range on the publisher website.</>,
                <>
                  Format all entries according to the target journal’s
                  reference style (see our{" "}
                  <Int href="/blog/formatting-guide">manuscript formatting guide</Int>
                  ).
                </>,
              ]}
            />

            <Callout title="Reference format template">
              [n] Author, A. B., Author, C. D. (Year). Title of the article.
              Journal Name, Volume(Issue), Pages.
              https://doi.org/xx.xxxx/xxxxx
            </Callout>

            <CheckList>
              <Check>Cite primary research sources rather than relying only on review articles.</Check>
              <Check>Aim for approximately 40 to 60 percent of references from the last five years where suitable for your field.</Check>
              <Check>Never cite a paper that you have not read and verified.</Check>
              <Check>Follow the journal’s citation and reference formatting instructions.</Check>
            </CheckList>

            {/* PART 09: FINAL CHECKLIST */}
            <SectionHeading id="checklist" number="09">
              The Complete Q1 Manuscript Checklist Before Submission
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your manuscript, conduct a final review of its
              scientific structure, methodological transparency, numerical
              reliability, and publication requirements. Use the following
              checklist to identify missing elements.
            </p>

            <ul className="mt-5 space-y-2">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5"
                >
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="text-sm leading-[1.8] text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <Figure
              src="/images/blog/q1-manuscript-submission-checklist.webp"
              alt="Printable checklist of twelve items to verify before submitting a Q1 journal manuscript"
              caption="Figure 4. Twelve-point pre-submission checklist for a Q1 journal manuscript."
            />

            {/* PART 10: SUBMISSION READINESS */}
            <SectionHeading id="submission-readiness" number="10">
              From Manuscript Structure to Submission Readiness
            </SectionHeading>

            <p className={`${P} mt-4`}>
              A well-structured manuscript is the foundation of a professional
              journal submission. Once the scientific argument is complete,
              review the target journal’s instructions and ensure that all
              submission requirements are satisfied.
            </p>

            <SubHeading>10.1 Final Submission Preparation Steps</SubHeading>

            <CheckList>
              <Check>Confirm that the journal publishes the type of research presented in your manuscript, and verify its quartile on <Ext href="https://www.scimagojr.com/">Scimago</Ext>.</Check>
              <Check>Check the latest author instructions and manuscript template.</Check>
              <Check>Ensure that the title, abstract, keywords, and author information are consistent.</Check>
              <Check>Prepare the cover letter and required supplementary files.</Check>
              <Check>Review declarations, funding information, and author contributions.</Check>
              <Check>Check the generated submission PDF before completing the submission.</Check>
              <Check>Retain the final manuscript, source files, data, and relevant correspondence.</Check>
            </CheckList>

            <Callout title="Final research writing advice">
              A strong Q1 manuscript is built through a clear research
              question, a defensible gap, a reproducible method, meaningful
              results, and evidence-based interpretation. Structure the
              scientific argument first, then refine the language and
              formatting according to the target journal.
            </Callout>

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Q1 Research Paper Structure
            </SectionHeading>

            <div className="mt-6 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200">
              {faqs.map((faq, index) => (
                <details key={faq.q} className="group bg-white open:bg-slate-50" {...(index === 0 ? { open: true } : {})}>
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 text-left">
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
              Still have questions? Browse more{" "}
              <Int href="/blog">research guides in the ScholarGrid Knowledge Library</Int>{" "}
              or read our{" "}
              <Int href="/blog/paper-rejection-reasons">journal rejection guide</Int>.
            </p>

            {/* Conclusion + CTA */}
            <section
              id="final-thoughts"
              aria-labelledby="final-thoughts-heading"
              className="mt-10 scroll-mt-28 border-t border-slate-200 pt-7"
            >
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800">
                ScholarGrid Research Library
              </p>

              <h2
                id="final-thoughts-heading"
                className="mt-2 font-serif text-2xl font-bold text-slate-950 sm:text-[28px]"
              >
                Conclusion: Build Your Next Q1 Research Paper with a Clear Scientific Structure
              </h2>

              <p className={`${P} mt-3`}>
                Writing a competitive research paper requires more than
                collecting results. It requires a coherent scientific
                argument, transparent methodology, reliable validation, and
                careful interpretation. By following this ten-part blueprint,
                researchers can develop manuscripts that communicate their
                contributions clearly across different academic disciplines.
              </p>

              <p className={`${P} mt-3`}>
                The structure should always be adapted to the specific
                journal, discipline, and study design. No manuscript structure
                guarantees publication, but a well-organised and reproducible
                paper gives editors and reviewers a clearer basis for
                evaluating its scientific contribution.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need expert support with your manuscript?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid helps researchers plan, structure, format, and
                  prepare manuscripts for journal submission. Explore our
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
