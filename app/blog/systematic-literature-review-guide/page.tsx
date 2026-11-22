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

const SLUG = "/blog/systematic-literature-review-guide";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "Systematic Literature Review Guide for Engineers: Method, Synthesis and LaTeX Submission (2026)";
const DESCRIPTION =
  "A research-grade guide to systematic literature reviews: protocol, database search, PRISMA 2020 screening, synthesis and gap analysis, plus Elsevier elsarticle and IEEEtran LaTeX preparation and pre-submission checks.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "systematic literature review",
    "how to write a systematic review",
    "PRISMA 2020 flow diagram",
    "PRISMA-S search reporting",
    "literature review search string",
    "inclusion and exclusion criteria",
    "research gap identification",
    "thematic analysis literature review",
    "Kitchenham guidelines",
    "elsarticle LaTeX template",
    "IEEEtran LaTeX template",
    "siunitx amsmath manuscript",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-01T00:00:00Z",
    modifiedTime: "2026-11-18T00:00:00Z",
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
    q: "What is a systematic literature review and how is it different from a narrative review?",
    a: "A systematic literature review follows a documented, repeatable method: a written protocol, defined databases and search strings, fixed inclusion and exclusion criteria, and transparent screening and synthesis. A narrative review is a selective overview that gives background or an expert view without a reproducible search.",
  },
  {
    q: "How many databases should I search for a systematic review?",
    a: "Use at least two or three major databases that cover your field, such as Scopus, Web of Science, and IEEE Xplore or ScienceDirect for engineering topics. Add backward and forward snowballing to catch papers the databases missed, and record the database, date, string, filters and hit count for every search.",
  },
  {
    q: "Can I rely on Google Scholar alone?",
    a: "It is not recommended. Google Scholar results are hard to reproduce and cannot be exported cleanly, which conflicts with the transparency a systematic review requires. It can be a useful supplement alongside structured databases.",
  },
  {
    q: "What is the PRISMA 2020 flow diagram and do I need it?",
    a: "PRISMA 2020 is a reporting guideline for systematic reviews. Its flow diagram shows how many records you identified, screened, excluded and included at each stage, and its checklist has 27 items. Most journals expect something equivalent for a systematic review, so it is good practice to include one. PRISMA-S is a companion extension for reporting the literature searches themselves.",
  },
  {
    q: "How many reviewers do I need for screening?",
    a: "Ideally two reviewers screen independently, or at least a sample of the records, and disagreements are settled by discussion. Agreement can be measured with Cohen’s kappa. If you work alone, say so as a limitation and explain how you reduced bias, for example by re-screening a sample after a break.",
  },
  {
    q: "How do I find a research gap from the literature?",
    a: "Build a concept matrix of papers against themes, then cross two dimensions such as method and application and count the studies in each cell. Thin cells are candidate gaps. Check that a gap matters and is not merely empty, then write it as a specific sentence a future paper could answer.",
  },
  {
    q: "How do I make my literature review reproducible?",
    a: "Date-stamp a protocol before searching, record every search string with its database and date, document the reason for each full-text exclusion, keep your extraction and quality sheets, and share the search strings and sheets as supplementary files.",
  },
  {
    q: "What are the most common mistakes in systematic reviews?",
    a: "Common mistakes include searching only one database, changing criteria halfway without recording it, listing papers instead of synthesizing them, skipping quality appraisal, submitting with a stale search, and ending with vague gaps such as “more research is needed”.",
  },
  {
    q: "Should I use elsarticle or IEEEtran for my review paper?",
    a: "Use the class that the target journal publishes in. Elsevier journals use elsarticle, and IEEE journals and conferences use IEEEtran. Always download the template from the journal’s own author page, because journals sometimes ship a customized version, and do not switch classes late in the project because the front matter, figure placement and bibliography style all change.",
  },
  {
    q: "How do I typeset units and numbers correctly in a LaTeX manuscript?",
    a: "Load the siunitx package and write quantities with \\qty{25}{\\celsius} or the older \\SI{25}{\\celsius}, and plain numbers with \\num{1.5e-3}. It keeps the number and unit together on one line, formats scientific notation consistently, and aligns decimals in tables with the S column type.",
  },
  {
    q: "Why does my IEEE or Elsevier submission system reject my PDF?",
    a: "The most common causes are fonts that are not embedded (often Type 3 fonts from plotting libraries), figures with transparency or the wrong color space, missing files, and unresolved references that appear as question marks. Embed fonts, export vector figures as PDF or high-resolution images, and run a full build with BibTeX before uploading.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: "A Practical Guide to Systematic Literature Reviews",
      description: DESCRIPTION,
      datePublished: "2026-11-01",
      dateModified: "2026-11-18",
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
          name: "Systematic Literature Review Guide",
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
  { id: "overview", title: "Overview" },
  { id: "step-1", title: "Define the Question and Protocol" },
  { id: "step-2", title: "Search Systematically" },
  { id: "step-3", title: "Screen Studies Transparently" },
  { id: "step-4", title: "Extract Data and Judge Quality" },
  { id: "step-5", title: "Synthesize Like a Senior Researcher" },
  { id: "step-6", title: "Write It Up and Report It" },
  { id: "step-7", title: "Prepare the Manuscript in LaTeX" },
  { id: "presubmission", title: "Pre-Submission Errors to Fix" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "final-checklist", title: "Final Checklist" },
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
    href: "/blog/fast-review-q1-q2-journals",
    title: "Fast-Review Q1/Q2 Journals",
    text: "Find, verify and rank fast-review journals in engineering.",
  },
  {
    href: "/blog/paper-rejection-reasons",
    title: "Why Journals Reject Papers",
    text: "The most common rejection reasons and how to avoid them.",
  },
  {
    href: "/blog/formatting-guide",
    title: "Manuscript Formatting Guide",
    text: "Templates, equations, figures and references for Elsevier and IEEE.",
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
          Step {number}
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

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg bg-slate-950">
      <p className="border-b border-slate-800 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-blue-200">
        {label}
      </p>
      <div className="overflow-x-auto p-4 sm:p-5">
        <pre className="font-mono text-[13px] leading-6 text-blue-100">
          {code}
        </pre>
      </div>
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

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const reviewTypes = [
    ["Narrative review", "You need background or an expert view", "Selective overview"],
    ["Mapping study", "You want to chart a broad area", "Counts and categories"],
    ["Systematic review", "You need a defensible answer to a focused question", "Transparent synthesis"],
    ["Meta-analysis", "Studies report comparable numbers", "Pooled estimate"],
  ];

  const picoc = [
    ["Population", "Rotating machinery (bearings, gearboxes) in laboratory or industrial settings"],
    ["Intervention", "Deep-learning fault diagnosis and prognosis methods"],
    ["Comparison", "Classical signal processing and shallow machine learning baselines"],
    ["Outcome", "Accuracy, robustness to noise, cross-domain generalization"],
    ["Context", "Public benchmark datasets versus real plant data"],
  ];

  const databases = [
    ["Scopus", "Broad multidisciplinary coverage and clean CSV export", "Indexing of very recent papers can lag"],
    ["Web of Science", "Curated core collection and strong citation tracking", "Coverage depends on your institution’s subscription"],
    ["IEEE Xplore", "Full-text IEEE and IET journals and conferences", "Publisher-limited: misses Elsevier and Springer papers"],
    ["ScienceDirect", "Full-text Elsevier journals", "Export and query length limits"],
    ["Compendex or Inspec", "Engineering-focused indexing with controlled vocabulary", "Paid access, so check your library"],
    ["Google Scholar", "Finds grey literature and odd papers", "Not reproducible, so use it only as a supplement"],
  ];

  const criteria = [
    ["Period", "2015 to 2025", "Earlier work"],
    ["Type", "Peer-reviewed journal and conference papers", "Editorials, theses, posters"],
    ["Topic", "Deep-learning fault diagnosis of rotating machinery", "Other machinery or methods"],
    ["Evidence", "Reports experimental results", "Concept papers without data"],
    ["Language", "English full text available", "Abstract-only records"],
  ];

  const extractionFields = [
    ["Bibliographic", "Authors, year, venue, DOI", "Traceability and deduplication"],
    ["Problem and data", "Task, dataset, sample size, sampling rate, train/test split", "Reveals whether results are comparable"],
    ["Method", "Architecture, input representation, key hyperparameters", "Feeds the taxonomy"],
    ["Validation", "Metrics, baselines, cross-validation scheme, statistical tests", "Feeds quality appraisal"],
    ["Results", "Reported numbers with units and page number", "Lets you answer reviewer queries quickly"],
    ["Limitations", "Stated and unstated weaknesses", "Feeds the gap analysis"],
  ];

  const packages = [
    ["amsmath", "Equations: align, multline, split, \\text, \\operatorname", "Using eqnarray, which spaces badly, instead of align"],
    ["siunitx", "Units, numbers and decimal-aligned table columns", "Typing units as plain text so they break across lines"],
    ["booktabs", "Professional tables with \\toprule, \\midrule, \\bottomrule", "Vertical rules and \\hline, which journals discourage"],
    ["graphicx", "Figure inclusion with \\includegraphics", "Raster screenshots of charts instead of vector PDF"],
    ["cite (IEEE) or sort&compress (Elsevier)", "Compressed citation ranges such as [3]–[6]", "Unsorted citation lists in the text"],
    ["hyperref", "Clickable references and PDF metadata", "Loading it too early, which can clash with other packages"],
  ];

  const errorRows = [
    ["Question marks in text (??)", "References or labels not resolved", "Run LaTeX, BibTeX, then LaTeX twice, or use latexmk"],
    ["Overfull \\hbox warnings", "Long URLs, equations or tables exceed the column", "Break equations with align, shrink tables, use \\url and allow breaks"],
    ["Fonts not embedded in the PDF", "Plotting library exported Type 3 fonts", "Set pdf.fonttype to 42 in matplotlib and re-export the figures"],
    ["Blurry or pixelated figures", "Low-resolution raster export", "Export vector PDF, or raster at the journal’s required dpi"],
    ["Bibliography shows keys or missing entries", "Wrong .bst file or duplicate or missing keys", "Check the style file and BibTeX log (.blg) for warnings"],
    ["Equations run into the margin in two columns", "Single-line equation too wide for IEEEtran", "Split with multline or align, or use figure* and table* for wide items"],
    ["Wrong capitalization in titles", "BibTeX lowercases words", "Protect names and acronyms with braces, such as {LSTM} and {Gaussian}"],
  ];

  const searchString = String.raw`TITLE-ABS-KEY(
  ("predictive maintenance" OR "condition monitoring"
   OR prognostics)
  AND ("deep learning" OR "neural network*")
  AND ("rotating machinery" OR bearing* OR gearbox*) )
AND PUBYEAR > 2014 AND PUBYEAR < 2026
AND DOCTYPE(ar OR cp)`;

  const dedupCode = String.raw`import pandas as pd

df = pd.read_csv('records.csv')
df['key'] = (df['doi'].str.lower()
    .fillna(df['title'].str.lower()
    .str.replace(r'\W+', '', regex=True)))
dedup = df.drop_duplicates('key')
print(len(df), '->', len(dedup))`;

  const elsCode = String.raw`\documentclass[preprint,12pt,number]{elsarticle}
\usepackage{amsmath}
\usepackage{booktabs}
\usepackage{siunitx}
\usepackage{graphicx}

\journal{Journal Name}

\begin{document}
\begin{frontmatter}
\title{Deep Learning for Rotating Machinery Diagnosis:
  A Systematic Literature Review}

\author[inst1]{First Author\corref{cor1}}
\ead{first.author@university.edu}
\cortext[cor1]{Corresponding author}
\affiliation[inst1]{organization={University Name},
  city={City}, country={Country}}

\begin{abstract}
Context, method (databases, dates, criteria), main findings,
and implications in 150--250 words.
\end{abstract}

\begin{keyword}
systematic review \sep PRISMA \sep fault diagnosis
\end{keyword}
\end{frontmatter}

\section{Introduction}
...
\bibliographystyle{elsarticle-num}
\bibliography{refs}
\end{document}`;

  const ieeeCode = String.raw`\documentclass[journal]{IEEEtran}
\usepackage{amsmath,amssymb}
\usepackage{cite}
\usepackage{graphicx}
\usepackage{booktabs}
\usepackage{siunitx}

\begin{document}
\title{Deep Learning for Rotating Machinery Diagnosis:
  A Systematic Literature Review}

\author{First~Author,~\IEEEmembership{Member,~IEEE,}
  and~Second~Author%
\thanks{Manuscript received Month DD, 2026.}}

\markboth{IEEE Transactions on Journal Name, 2026}%
{Author \MakeLowercase{\textit{et al.}}: Short Title}
\maketitle

\begin{abstract}
Context, method, findings and implications.
\end{abstract}

\begin{IEEEkeywords}
Systematic review, PRISMA, fault diagnosis.
\end{IEEEkeywords}

\section{Introduction}
\IEEEPARstart{S}{ystematic} reviews ...

\bibliographystyle{IEEEtran}
\bibliography{refs}
\end{document}`;

  const tableCode = String.raw`\begin{table}[t]
\centering
\caption{Search log. All searches were run on 14 October 2026.}
\label{tab:searchlog}
\begin{tabular}{@{}l l S[table-format=4.0] @{}}
\toprule
Database & Fields searched & {Records} \\
\midrule
Scopus         & Title, abstract, keywords & 1243 \\
Web of Science & Topic (TS)                & 987  \\
IEEE Xplore    & All metadata              & 654  \\
\midrule
\multicolumn{2}{@{}l}{Total before deduplication} & 2884 \\
\bottomrule
\end{tabular}
\end{table}

% Quantities in running text (siunitx v3):
% The signals were sampled at \qty{12}{\kilo\hertz} and the
% load was \qty{1.5}{\kilo\watt}, with \num{3e-4} noise variance.
% Cross-reference equations with Eq.~\eqref{eq:loss}.`;

  const fontCode = String.raw`import matplotlib as mpl

# Embed TrueType fonts so journal PDF checkers accept the figures
mpl.rcParams['pdf.fonttype'] = 42
mpl.rcParams['ps.fonttype'] = 42
mpl.rcParams['font.size'] = 9        # match the journal body text
mpl.rcParams['figure.dpi'] = 300

fig.savefig('fig_flow.pdf', bbox_inches='tight')`;

  const buildCode = String.raw`# One command that resolves references and the bibliography
latexmk -pdf -interaction=nonstopmode main.tex

# Then inspect the logs for the issues that matter
grep -n "Warning" main.log | head -50
grep -n "Warning" main.blg`;

  const mistakes = [
    "Searching only one database, or only Google Scholar.",
    "Changing criteria halfway without recording the change and the reason.",
    "Listing papers instead of synthesizing them into themes and arguments.",
    "Skipping quality appraisal, so weak studies carry the same weight as strong ones.",
    "Submitting with a stale search. Re-run it shortly before you submit and update the counts.",
    "Ending with vague gaps such as “more research is needed”.",
    "Comparing accuracy numbers from studies that used different data splits or leaked data between training and test sets.",
    "Reporting PRISMA numbers that do not add up between the text, the flow diagram and the search log.",
    "Switching LaTeX classes late, or editing a journal template’s margins and fonts to squeeze in more text.",
    "Uploading source files that compile only on your machine, with missing figures or local package paths.",
  ];

  const checklist = [
    "Research questions and protocol are written and dated.",
    "Search strings, databases, dates, and hit counts are recorded and reported following PRISMA-S.",
    "Criteria are fixed, and screening is documented in a PRISMA flow diagram whose numbers reconcile.",
    "Two reviewers screened at least a sample, and agreement is reported.",
    "Extraction and quality sheets are complete and shared as supplementary files.",
    "Synthesis shows themes, a taxonomy, and clear, specific gaps.",
    "Limitations and threats to validity are stated.",
    "The manuscript compiles cleanly with the journal’s own class file, with no unresolved references or fonts missing from the PDF.",
    "Figures meet the journal’s resolution and format rules, and units and equations are typeset consistently.",
    "Mandatory declarations are included (competing interests, funding, data availability, author contributions).",
  ];

  const references: React.ReactNode[] = [
    <>B. Kitchenham and S. Charters, “Guidelines for performing systematic literature reviews in software engineering,” Keele Univ. and Durham Univ., Tech. Rep. EBSE-2007-01, 2007.</>,
    <>
      M. J. Page et al., “The PRISMA 2020 statement: An updated guideline for reporting systematic reviews,” <i>BMJ</i>, vol. 372, Art. no. n71, 2021.{" "}
      <Ext href="https://doi.org/10.1136/bmj.n71">doi:10.1136/bmj.n71</Ext>
    </>,
    <>M. Petticrew and H. Roberts, <i>Systematic Reviews in the Social Sciences: A Practical Guide</i>. Malden, MA, USA: Blackwell, 2006.</>,
    <>M. Gusenbauer and N. R. Haddaway, “Which academic search systems are suitable for systematic reviews or meta-analyses?” <i>Research Synthesis Methods</i>, vol. 11, no. 2, pp. 181–217, 2020.</>,
    <>
      C. Wohlin, “Guidelines for snowballing in systematic literature studies and a replication in software engineering,” in <i>Proc. 18th Int. Conf. Eval. Assessment Softw. Eng. (EASE)</i>, 2014, Art. no. 38.{" "}
      <Ext href="https://doi.org/10.1145/2601248.2601268">doi:10.1145/2601248.2601268</Ext>
    </>,
    <>
      M. Ouzzani, H. Hammady, Z. Fedorowicz, and A. Elmagarmid, “Rayyan: A web and mobile app for systematic reviews,” <i>Systematic Reviews</i>, vol. 5, Art. no. 210, 2016.{" "}
      <Ext href="https://doi.org/10.1186/s13643-016-0384-4">doi:10.1186/s13643-016-0384-4</Ext>
    </>,
    <>
      J. Cohen, “A coefficient of agreement for nominal scales,” <i>Educational and Psychological Measurement</i>, vol. 20, no. 1, pp. 37–46, 1960.{" "}
      <Ext href="https://doi.org/10.1177/001316446002000104">doi:10.1177/001316446002000104</Ext>
    </>,
    <>J. Webster and R. T. Watson, “Analyzing the past to prepare for the future: Writing a literature review,” <i>MIS Quarterly</i>, vol. 26, no. 2, pp. xiii–xxiii, 2002.</>,
    <>
      V. Braun and V. Clarke, “Using thematic analysis in psychology,” <i>Qualitative Research in Psychology</i>, vol. 3, no. 2, pp. 77–101, 2006.{" "}
      <Ext href="https://doi.org/10.1191/1478088706qp063oa">doi:10.1191/1478088706qp063oa</Ext>
    </>,
    <>
      N. J. van Eck and L. Waltman, “Software survey: VOSviewer, a computer program for bibliometric mapping,” <i>Scientometrics</i>, vol. 84, no. 2, pp. 523–538, 2010.{" "}
      <Ext href="https://doi.org/10.1007/s11192-009-0146-3">doi:10.1007/s11192-009-0146-3</Ext>
    </>,
    <>
      M. L. Rethlefsen et al., “PRISMA-S: An extension to the PRISMA statement for reporting literature searches in systematic reviews,” <i>Systematic Reviews</i>, vol. 10, Art. no. 39, 2021.{" "}
      <Ext href="https://doi.org/10.1186/s13643-020-01542-z">doi:10.1186/s13643-020-01542-z</Ext>
    </>,
    <>J. R. Landis and G. G. Koch, “The measurement of observer agreement for categorical data,” <i>Biometrics</i>, vol. 33, no. 1, pp. 159–174, 1977.</>,
    <>
      Elsevier Ltd., “elsarticle: Class for articles submitted to Elsevier journals,” CTAN package documentation.{" "}
      <Ext href="https://ctan.org/pkg/elsarticle">ctan.org/pkg/elsarticle</Ext>
    </>,
    <>
      M. Shell, “How to use the IEEEtran LaTeX class,” IEEE, CTAN package documentation.{" "}
      <Ext href="https://ctan.org/pkg/ieeetran">ctan.org/pkg/ieeetran</Ext>
    </>,
    <>
      J. Wright, “The siunitx package: A comprehensive SI units package,” CTAN package documentation.{" "}
      <Ext href="https://ctan.org/pkg/siunitx">ctan.org/pkg/siunitx</Ext>
    </>,
    <>
      American Mathematical Society, “User’s guide for the amsmath package,” CTAN package documentation.{" "}
      <Ext href="https://ctan.org/pkg/amsmath">ctan.org/pkg/amsmath</Ext>
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Literature Review Methods and Publishing Insights
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
                <Link href="/#services">Support Scope</Link>
                <Link href="/#library">Insights</Link>
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
                Literature Review
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Literature Review Guide
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-18">Updated November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                18 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              A Practical Guide to Systematic Literature Reviews
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A research-grade walkthrough for PhD scholars and engineering
              authors: from defining the question and searching databases, to
              PRISMA screening, synthesis, and preparing the final manuscript
              in Elsevier and IEEE LaTeX templates.
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
                  <p className="mt-0.5 text-xs text-slate-500">Research and Literature Review Methods</p>
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
                Overview: What Is a Systematic Literature Review?
              </h2>
              <div className="space-y-4 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  A literature review that lists papers one after another is easy
                  to write and easy to reject. A <strong>systematic literature
                  review (SLR)</strong> does something harder. It follows a
                  documented method, so another researcher could repeat your
                  search and arrive at the same set of papers. Journals value this
                  because it makes the review fair, transparent, and checkable.
                  Guidelines such as Kitchenham and Charters <Cite n={1} /> and
                  the{" "}
                  <Ext href="https://www.prisma-statement.org/">
                    PRISMA 2020 statement
                  </Ext>{" "}
                  <Cite n={2} /> describe the process, and Fig. 1 shows it in
                  six steps.
                </p>
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Senior researchers add one more thing: they synthesize. They do
                  not report what each paper did. They show patterns, conflicts,
                  and gaps across the whole body of work. This guide covers both
                  the method and the thinking, and then closes the loop that most
                  tutorials skip: how to turn the finished review into a clean
                  LaTeX manuscript that passes an Elsevier or IEEE submission
                  system without technical rejections.
                </p>
              </div>
            </section>

            <ArticleFigure
              src="/blogs/fig21.png"
              alt="The six steps of a systematic literature review"
              caption="Fig. 1. The six steps of a systematic literature review."
              priority
            />

            <p className={`${P} mb-2`}>
              Plan for weeks, not days. The search and screening stages are
              mechanical but slow, and the synthesis stage rewards time spent
              thinking. A realistic review also produces a paper that is
              judged on two things: the rigor of the method and the quality of
              the insight. Once your review is complete, our guides on{" "}
              <Int href="/blog/q1-research-paper-structure">
                structuring a Q1 research paper
              </Int>{" "}
              and{" "}
              <Int href="/blog/fast-review-q1-q2-journals">
                choosing a fast-review journal
              </Int>{" "}
              cover the next stages.
            </p>

            {/* Step 1 */}
            <SectionHeading id="step-1" number="01">
              How to Define the Research Question and Write a Protocol
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Everything downstream depends on a sharp question. &quot;What is
              known about machine learning in maintenance?&quot; is far too
              broad. Frame the question with a structure such as PICO(C):
              population, intervention, comparison, outcome, and context{" "}
              <Cite n={3} />. A good question is answerable from published
              evidence, bounded enough to finish, and non-trivial enough that
              the answer is worth publishing. First, check that an SLR is the
              right type of review.
            </p>

            <SubHeading>Which Type of Literature Review Do You Need?</SubHeading>

            <DataTable
              caption="Types of literature review and when to use each"
              headers={["Review type", "Use it when", "Output"]}
              rows={reviewTypes}
            />

            <SubHeading>Framing an Engineering Question with PICOC</SubHeading>

            <p className={`${P} mt-3`}>
              The PICOC table below shows how a vague topic becomes a precise
              review question. Notice how each row later maps to one concept
              block in your search string.
            </p>

            <DataTable
              caption="PICOC framing example for a machinery diagnosis review"
              headers={["Element", "Example for this review"]}
              rows={picoc}
            />

            <CheckList>
              <Check>
                Write two to four research questions, such as: RQ1, which
                architectures are used? RQ2, how are they validated? RQ3, what
                gaps remain? Avoid yes/no questions, because they produce thin
                answers.
              </Check>
              <Check>
                Write a protocol before you search: databases, search strings,
                criteria, extraction fields, quality questions, and how
                disagreements are resolved.
              </Check>
              <Check>
                Date-stamp the protocol in a repository or on{" "}
                <Ext href="https://osf.io/">OSF</Ext>. It proves you did not
                change the criteria after seeing the results.
              </Check>
              <Check>
                Decide in advance whether preprints and grey literature are
                in scope. Either choice is defensible, but it must be stated
                and applied consistently.
              </Check>
            </CheckList>

            <Callout title="Colleague tip">
              Show the protocol to your supervisor before you search. Changing
              the question after 800 papers are screened is painful.
            </Callout>

            {/* Step 2 */}
            <SectionHeading id="step-2" number="02">
              How to Search Databases Systematically
            </SectionHeading>

            <p className={`${P} mt-4`}>
              No single database covers a field. Each has different coverage,
              indexing, and export limits, so the combination you choose shapes
              which papers you can possibly find <Cite n={4} />. The table
              below summarizes the usual options for engineering topics.
            </p>

            <DataTable
              caption="Common databases for engineering literature reviews"
              headers={["Source", "Best for", "Watch out for"]}
              rows={databases}
            />

            <CheckList>
              <Check>
                Use at least two or three major databases, such as{" "}
                <Ext href="https://www.elsevier.com/products/scopus">Scopus</Ext>,{" "}
                <Ext href="https://clarivate.com/academia-government/scientific-and-academic-research/research-discovery-and-referencing/web-of-science/">
                  Web of Science
                </Ext>
                , and <Ext href="https://ieeexplore.ieee.org/">IEEE Xplore</Ext>{" "}
                or <Ext href="https://www.sciencedirect.com/">ScienceDirect</Ext>.
              </Check>
              <Check>
                Do not rely on Google Scholar alone. Its results are hard to
                reproduce and cannot be exported cleanly <Cite n={4} />.
              </Check>
              <Check>
                Build the search string from concept blocks taken from your
                PICOC table. Join synonyms with OR inside a block, and join
                blocks with AND (Fig. 2). Use truncation (such as
                network*) for word endings and quotation marks for exact
                phrases.
              </Check>
              <Check>
                Remember that field codes differ between platforms. Scopus uses
                TITLE-ABS-KEY, while Web of Science uses TS=. Translate the
                same logic for each database instead of pasting one string
                everywhere.
              </Check>
              <Check>
                Pilot the string against a gold-standard set: five to ten
                papers you already know are relevant. If the string misses
                them, revise it and note why.
              </Check>
              <Check>
                Record the database, date, string, filters, and number of hits
                for every search, and report them following PRISMA-S{" "}
                <Cite n={11} />.
              </Check>
              <Check>
                Add backward and forward snowballing to catch papers the
                databases missed <Cite n={5} />.
              </Check>
            </CheckList>

            <CodeBlock label="Scopus search string" code={searchString} />

            <ArticleFigure
              src="/blogs/fig22.png"
              alt="Search string built from concept blocks"
              caption="Fig. 2. A search string built from concept blocks: OR inside a block, AND between blocks."
            />

            <Callout title="Reproducibility note">
              Databases change. A search re-run six months later will return
              different counts because of new indexing. Always store the
              exported records file together with the date, so your reported
              numbers can be reproduced exactly.
            </Callout>

            {/* Step 3 */}
            <SectionHeading id="step-3" number="03">
              How to Screen Studies and Create a PRISMA Flow Diagram
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Write your inclusion and exclusion criteria before screening, and
              apply them the same way to every paper. Criteria should be
              observable from the text, not matters of opinion. &quot;Reports
              experimental results on a named dataset&quot; is checkable.
              &quot;High-quality study&quot; is not.
            </p>

            <SubHeading>Example Inclusion and Exclusion Criteria</SubHeading>

            <DataTable
              caption="Example inclusion and exclusion criteria"
              headers={["Criterion", "Include", "Exclude"]}
              rows={criteria}
            />

            <CheckList>
              <Check>
                Remove duplicates first, using the DOI or a cleaned title (code
                below). Keep a log of how many were removed, because the
                PRISMA diagram needs that number.
              </Check>
              <Check>
                Screen in two rounds: titles and abstracts, then full texts.
                Record a coded reason for every full-text exclusion, such as E1
                for wrong population and E2 for no experimental evidence.
              </Check>
              <Check>
                Tools such as{" "}
                <Ext href="https://www.rayyan.ai/">Rayyan</Ext> <Cite n={6} />{" "}
                and <Ext href="https://www.zotero.org/">Zotero</Ext> make this
                much easier.
              </Check>
              <Check>
                Calibrate first. Have both reviewers screen the same 30 to 50
                records, compare, and refine the criteria before the main
                round.
              </Check>
              <Check>
                Measure agreement with Cohen&apos;s kappa <Cite n={7} />. By the
                common Landis and Koch convention <Cite n={12} />, values of
                0.61 to 0.80 indicate substantial agreement and above 0.80
                almost perfect agreement. Settle disagreements by discussion,
                or with a third reviewer.
              </Check>
            </CheckList>

            <CodeBlock label="Python" code={dedupCode} />

            <p className={P}>
              Report the counts in a PRISMA 2020 flow diagram <Cite n={2} />{" "}
              (Fig. 3). Before you finalize it, run an arithmetic check: records
              identified minus duplicates must equal records screened, and
              records screened minus excluded must equal full texts assessed.
              Reviewers notice flow diagrams whose numbers do not reconcile
              with the text.
            </p>

            <ArticleFigure
              src="/blogs/fig23.png"
              alt="PRISMA-style flow diagram"
              caption="Fig. 3. A PRISMA-style flow diagram with illustrative numbers."
            />

            {/* Step 4 */}
            <SectionHeading id="step-4" number="04">
              How to Extract Data and Assess Study Quality
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Extraction turns papers into comparable rows. Decide the columns
              before reading in depth, because every extra column is a second
              pass over every paper.
            </p>

            <DataTable
              caption="Recommended data extraction fields"
              headers={["Field group", "What to record", "Why it matters"]}
              rows={extractionFields}
            />

            <CheckList>
              <Check>
                Pilot the sheet on five papers, then fix it. Changing columns
                later means re-reading everything.
              </Check>
              <Check>
                Copy numbers exactly as reported, with units, conditions, and
                page numbers.
              </Check>
              <Check>
                Judge quality with four to six yes/no questions, such as: Are
                the aims clear? Is the data described? Are the baselines fair?
                Are limitations stated?
              </Check>
              <Check>
                Look for validity threats that are specific to your field. In
                machine-learning studies, a classic one is data leakage:
                overlapping windows from the same recording appearing in both
                training and test sets inflate accuracy and make results
                incomparable with honest splits.
              </Check>
              <Check>
                Do not hide weak studies. Say how they affect your confidence in
                the findings, or run the synthesis with and without them.
              </Check>
            </CheckList>

            <Callout title="Colleague tip">
              When a reviewer asks where a number came from, you will find it in
              a minute if you saved the page number.
            </Callout>

            {/* Step 5 */}
            <SectionHeading id="step-5" number="05">
              How to Synthesize Literature and Find Research Gaps
            </SectionHeading>

            <p className={`${P} mt-4`}>
              This is where reviews succeed or fail. A summary says what each
              paper did. A synthesis says what the papers mean together (Fig.
              4). Choose the synthesis approach that fits your evidence:
              thematic or narrative synthesis for diverse methods, a taxonomy
              for organizing techniques, and a meta-analysis only when studies
              report comparable effect measures under comparable conditions.
            </p>

            <ArticleFigure
              src="/blogs/fig24.png"
              alt="Summary versus synthesis"
              caption="Fig. 4. Summary versus synthesis: the second paragraph interprets the pattern (illustrative)."
            />

            <CheckList>
              <Check>
                Build a concept matrix with papers as rows and themes as columns{" "}
                <Cite n={8} />. The column totals show you what the field
                actually studies (Fig. 5).
              </Check>
              <Check>
                Code the papers systematically. Thematic analysis gives a clear
                routine: read, code, group, and name the themes <Cite n={9} />.
              </Check>
              <Check>
                Turn themes into a taxonomy that organizes the methods and shows
                how they relate (Fig. 6).
              </Check>
              <Check>
                Compare results on common metrics only when conditions are
                comparable. When they are not, say so. Avoid &quot;vote
                counting&quot; (X papers found an effect, Y did not), because
                it ignores sample size and study quality.
              </Check>
              <Check>
                Look for contradictions, and offer reasons: different data,
                settings, or definitions. Explaining a contradiction is often
                the most original contribution a review can make.
              </Check>
              <Check>
                For large sets, keyword and co-citation maps from{" "}
                <Ext href="https://www.vosviewer.com/">VOSviewer</Ext> can
                reveal clusters you did not expect <Cite n={10} />.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig25.png"
              alt="Concept matrix of papers and themes"
              caption="Fig. 5. A concept matrix: papers as rows, themes as columns, totals at the bottom (illustrative)."
            />

            <ArticleFigure
              src="/blogs/fig26.png"
              alt="Taxonomy built from themes"
              caption="Fig. 6. A taxonomy built from the themes found in the reviewed papers."
            />

            <SubHeading>How to Find a Research Gap</SubHeading>

            <p className={`${P} mt-3`}>
              Cross two dimensions, such as method and application, and count
              the studies in each cell (Fig. 7). Thin cells are candidate gaps.
              Check that a gap matters and is not just empty. A real gap is one
              a reviewer would agree is worth filling, and it usually falls into
              one of three kinds: an untested combination (method and
              application), an unreliable evidence base (weak validation), or an
              unstudied condition (such as real plant data rather than
              laboratory benchmarks). For how to present the gap in a paper, see
              our{" "}
              <Int href="/blog/q1-research-paper-structure">
                Q1 research paper structure guide
              </Int>
              .
            </p>

            <ArticleFigure
              src="/blogs/fig27.png"
              alt="Gap map of methods against applications"
              caption="Fig. 7. A gap map: methods against applications, with thin rows highlighted (illustrative)."
            />

            <Callout title="Colleague tip">
              Write each gap as a sentence a future paper could answer:
              &quot;No study validates transformer models on wind-turbine
              data.&quot; Avoid &quot;more research is needed.&quot;
            </Callout>

            {/* Step 6 */}
            <SectionHeading id="step-6" number="06">
              How to Write and Report a Systematic Review
            </SectionHeading>

            <CheckList>
              <Check>
                Structure: Introduction, Method (databases, strings, criteria,
                flow diagram), Results (descriptive statistics, then themes),
                Discussion, Threats to validity, and Conclusion.
              </Check>
              <Check>
                Write each theme as an argument. Open with the finding, then
                support it with the studies.
              </Check>
              <Check>
                Use tables for details and prose for insight. Never walk through
                papers one by one.
              </Check>
              <Check>
                Discuss threats to validity in three groups: search coverage
                (missed papers), selection and extraction bias (subjective
                decisions), and synthesis bias (coding and interpretation) <Cite n={1} />.
              </Check>
              <Check>
                Be honest about limits: database coverage, language, publication
                bias, and subjective coding.
              </Check>
              <Check>Tie future directions to the gaps you found.</Check>
              <Check>
                Share search strings and the extraction sheet as supplementary
                files so others can reproduce your work.
              </Check>
            </CheckList>

            {/* Step 7: LaTeX */}
            <SectionHeading id="step-7" number="07">
              How to Prepare the Review Manuscript in LaTeX (Elsevier and IEEE)
            </SectionHeading>

            <p className={`${P} mt-4`}>
              A strong review can still be returned by the editorial office for
              technical reasons: wrong template, broken references, fonts not
              embedded, or figures that miss the resolution rules. Most
              engineering journals accept or prefer LaTeX, and two classes cover
              the majority of submissions: <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[13px]">elsarticle</code> for
              Elsevier journals <Cite n={13} /> and{" "}
              <code className="rounded bg-slate-100 px-1.5 py-0.5 text-[13px]">IEEEtran</code> for IEEE journals and
              conferences <Cite n={14} />. Always download the template from the
              journal&apos;s own author page. The{" "}
              <Ext href="https://journals.ieeeauthorcenter.ieee.org/">
                IEEE Author Center
              </Ext>{" "}
              and the Elsevier author instructions for your target journal are
              the final authority, and they can differ from older copies on
              your computer. Our{" "}
              <Int href="/blog/formatting-guide">manuscript formatting guide</Int>{" "}
              covers the wider checklist.
            </p>

            <SubHeading>Elsevier: the elsarticle Class</SubHeading>

            <p className={`${P} mt-3`}>
              The class options control the layout. The preprint option gives a
              single-column draft, and review adds double line spacing for
              reviewers. Options such as 1p, 3p and 5p preview the final
              column widths, and number or authoryear selects the citation
              style that must match the bibliography style file
              (elsarticle-num for numbered citations, elsarticle-harv for
              author-year). All front matter goes inside the frontmatter
              environment, and Elsevier typically also requires separate
              highlights (three to five bullet points, each at most 85
              characters including spaces) and a declaration of competing
              interests, so check the journal&apos;s current list.
            </p>

            <CodeBlock label="elsarticle skeleton" code={elsCode} />

            <SubHeading>IEEE: the IEEEtran Class</SubHeading>

            <p className={`${P} mt-3`}>
              Use the journal option for IEEE Transactions and journals, and
              the conference option for conference papers. IEEEtran sets a
              two-column layout, so wide tables and figures need the starred
              forms (figure* and table*). Captions follow IEEE convention:
              table captions go above the table and figure captions below the
              figure, and the class already styles them. Reference lists use
              the IEEEtran.bst style, and the cite package compresses ranges
              such as [3]–[6].
            </p>

            <CodeBlock label="IEEEtran skeleton" code={ieeeCode} />

            <SubHeading>Essential Packages and Their Pitfalls</SubHeading>

            <p className={`${P} mt-3`}>
              Load only what you need, and load it after the document class.
              The packages below handle most of what a review manuscript
              contains: equations, quantities, tables and figures.
            </p>

            <DataTable
              caption="Essential LaTeX packages for engineering manuscripts"
              headers={["Package", "Use it for", "Common pitfall"]}
              rows={packages}
            />

            <SubHeading>amsmath: Typesetting Equations Cleanly</SubHeading>

            <CheckList>
              <Check>
                Use equation for a single numbered formula and align for
                several aligned lines. Avoid the old eqnarray environment,
                because it produces uneven spacing around the equals sign{" "}
                <Cite n={16} />.
              </Check>
              <Check>
                Put words inside math with \text{"{...}"}, and define repeated
                operators once with \DeclareMathOperator in the preamble.
              </Check>
              <Check>
                Label every numbered equation and refer to it with
                Eq.~\eqref{"{eq:loss}"}, so numbering stays correct when you
                add or remove equations. In IEEEtran, break long equations
                manually, because a single line cannot overflow a column.
              </Check>
              <Check>
                Define every symbol at first use, and keep notation consistent
                between the method section and the results.
              </Check>
            </CheckList>

            <SubHeading>siunitx: Units, Numbers and Tables</SubHeading>

            <p className={`${P} mt-3`}>
              Typing units as plain text causes inconsistent spacing and line
              breaks between a number and its unit. The siunitx package
              solves this and also formats scientific notation consistently{" "}
              <Cite n={15} />. In version 3, \qty{"{value}{unit}"} is the
              recommended command, and the older \SI still works. In tables,
              the S column type aligns numbers on the decimal point, and the
              header cell must be wrapped in braces. The example below also
              shows a PRISMA-S style search log, built with booktabs, which
              you can adapt directly for your own review.
            </p>

            <CodeBlock label="siunitx and booktabs search-log table" code={tableCode} />

            <SubHeading>Figures and Bibliography</SubHeading>

            <CheckList>
              <Check>
                Prefer vector formats (PDF) for diagrams and plots. For raster
                images, follow the journal&apos;s stated resolution rules: Elsevier&apos;s
                artwork guidance asks for about 300 dpi for photographs and
                much higher for line art, and IEEE gives its own resolution
                requirements, so confirm the current numbers before exporting.
              </Check>
              <Check>
                Keep figure text readable at final print size, roughly the
                same size as the body text, and use the same font family
                across all figures.
              </Check>
              <Check>
                Provide every figure as a separate file when the journal asks
                for it, and name files plainly (fig1.pdf, not
                Figure final v3 (copy).pdf).
              </Check>
              <Check>
                Keep one clean .bib file with consistent keys, complete fields
                and DOIs. Protect capitalization with braces, such as {"{LSTM}"}{" "}
                and {"{Gaussian}"}, or BibTeX will lowercase them in
                titles.
              </Check>
            </CheckList>

            <CodeBlock label="Matplotlib: embed fonts for journal PDF checks" code={fontCode} />

            {/* Pre-submission errors */}
            <SectionHeading id="presubmission">
              Pre-Submission Errors That Trigger Technical Rejection
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Editorial offices run automated and manual checks before a
              manuscript ever reaches a reviewer. The table lists the
              symptoms we see most often, with the cause and the fix. Work
              through it on a clean build, not on the copy that has been open
              in your editor for weeks.
            </p>

            <DataTable
              caption="Common LaTeX and submission errors with fixes"
              headers={["Symptom", "Likely cause", "Fix"]}
              rows={errorRows}
            />

            <CodeBlock label="Terminal: clean build and log check" code={buildCode} />

            <CheckList>
              <Check>
                Compile from a clean folder containing only the files you plan
                to upload. If it fails there, it will fail in the submission
                system.
              </Check>
              <Check>
                Do not modify the class file, margins, font sizes or
                spacing to fit more content. Journals treat this as a
                formatting violation, and it can shift the layout of the
                final typeset article.
              </Check>
              <Check>
                Check the front matter once more: author affiliations,
                corresponding author, keywords, abstract length, highlights and
                declarations, exactly as the journal&apos;s author guidelines
                list them.
              </Check>
              <Check>
                Read the final PDF from start to finish, looking for question
                marks, broken tables, overflowing equations and inconsistent
                numbering. Our guide to the{" "}
                <Int href="/blog/paper-rejection-reasons">
                  common reasons journals reject papers
                </Int>{" "}
                lists the scientific problems that follow after the technical
                checks pass.
              </Check>
            </CheckList>

            <Callout title="Colleague tip">
              Keep a small submission folder per journal with the unmodified
              template, a working main.tex, a .bib file and a figures
              directory. When a paper is rejected, resubmitting to the next
              journal becomes a template swap and not a rebuild.
            </Callout>

            {/* Common mistakes */}
            <SectionHeading id="common-mistakes">
              Common Systematic Review Mistakes to Avoid
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Several recurring issues weaken otherwise good reviews. Check the
              following points before you write up.
            </p>

            <ol className="mt-5 space-y-2.5">
              {mistakes.map((mistake, index) => (
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
                  <span className="text-sm leading-[1.8] text-slate-700">{mistake}</span>
                </li>
              ))}
            </ol>

            {/* Final checklist */}
            <SectionHeading id="final-checklist">
              Final Systematic Review Checklist
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your review, use this checklist to evaluate its
              overall quality, transparency and technical readiness.
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

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Systematic Literature Reviews
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
              Looking for more? Browse the{" "}
              <Int href="/blog">ScholarGrid Knowledge Library</Int> for guides
              on structure, formatting, journal selection and visualization,
              including our{" "}
              <Int href="/blog/contour-visualizations">
                scientific visualization guide
              </Int>
              .
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
                Conclusion: Build a Review Readers Can Trust
              </h2>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                A strong review is not the one with the most papers. It is the
                one a reader can trust, repeat, and build on. Follow the method,
                show your work, and let the synthesis carry your argument. Then
                protect that work at the finish line: use the journal&apos;s own
                LaTeX class, typeset equations and units consistently, and
                clear the technical checks before an editor ever sees the
                manuscript.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need help with your literature review?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid helps researchers plan searches, structure
                  reviews and prepare complete submission packages. Explore our
                  support scope or keep learning in the Knowledge Library.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#services"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Explore ScholarGrid Support
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                  >
                    Contact us
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

      {/* Footer is rendered globally by app/layout.tsx (SiteFooter) */}
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