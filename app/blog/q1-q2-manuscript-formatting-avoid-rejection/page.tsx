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
  "A practical manuscript formatting guide for Q1 and Q2 journals: the 9 mistakes that trigger technical returns and desk rejection, publisher differences, figure and declaration requirements, preflight commands and a day-by-day two-week checklist.";

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
    "technical check journal submission",
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
    modifiedTime: "2026-11-17T00:00:00Z",
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
    q: "Do all journals require their own template at first submission?",
    a: "No. Some journals, including many Elsevier titles, allow a flexible format at first submission as long as the file is complete and consistent, and ask for the journal style only at revision. Other journals, and most IEEE conferences, require the template immediately. The Guide for Authors states which rule applies, so read it before you decide.",
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
    a: "Many publishers screen submissions with Crossref Similarity Check, so overlap with your thesis, preprint or conference paper can be detected. Use your institution's similarity-checking access if available, rewrite overlapping passages, cite the earlier work, and explain any legitimate overlap in the cover letter. There is no universal acceptable percentage, because editors read the report and judge where the overlap lies.",
  },
  {
    q: "Should I convert my Word manuscript to LaTeX before submitting?",
    a: "Only if the journal or your co-authors benefit from it. Both formats are accepted by most Q1 and Q2 journals. Converting a finished paper late is risky because equations, figures and references can break, so decide at the start and stay with that tool unless the journal requires otherwise.",
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
    q: "How long does a technical check take, and how will I know the result?",
    a: "Timing varies by journal and workload, and some checks take only a few days while others take longer. The submission system normally shows a status such as awaiting editorial office checks, and a technical return arrives as an email with a list of fixes. If the stated time has passed with no change, send a short, polite status query.",
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
      dateModified: "2026-11-17",
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
/* Code and text samples                                               */
/* ------------------------------------------------------------------ */

const classVersionCode = `grep -n "ProvidesClass" elsarticle.cls IEEEtran.cls   # prints class version and date
grep -n "documentclass" main.tex                       # confirm the class and its options`;

const abstractTemplate = `Sentence 1    Context and problem: why it matters.
Sentence 2    Gap in current work.
Sentence 3    What you did: the method in one sentence.
Sentences 4-5 Key quantitative results with numbers, units and a comparison.
Sentence 6    Conclusion or implication, without new claims.`;

const wordCountCode = `texcount -inc -sum main.tex       # words in a LaTeX manuscript
pdftotext main.pdf - | wc -w      # rough word count from the compiled PDF`;

const declarationsExample = `Author contributions (CRediT): A. Author: Conceptualization, Methodology, Software,
  Writing - original draft. B. Author: Supervision, Writing - review and editing.
Funding: This work was supported by [funder] under grant [number].
Competing interests: The authors declare no competing interests.
Data availability: The data and code are available at [repository, DOI].
Ethics: [Approval body and reference number, or "Not applicable"].
AI use: [Tool, version, purpose, and confirmation that the authors reviewed the output.]`;

const figureCheckCode = `pdffonts main.pdf                 # every font should show "yes" under emb
pdffonts main.pdf | grep "Type 3" # should print nothing
pdfimages -list main.pdf          # check the ppi column of raster figures`;

const tableCode = `\\usepackage{booktabs}
...
\\begin{table}[t]
  \\caption{Results on the test set (mean over 10 runs)}  % caption above a table
  \\label{tab:results}
  \\centering
  \\begin{tabular}{lcc}
    \\toprule
    Method   & RMSE (m) & Time (s) \\\\
    \\midrule
    Baseline & 0.48     & 12.4 \\\\
    Proposed & 0.22     & 15.2 \\\\
    \\bottomrule
  \\end{tabular}
\\end{table}`;

const equationCode = `\\begin{equation}
  E = \\frac{1}{2} m v^{2},
  \\label{eq:energy}
\\end{equation}
where $E$ is the kinetic energy (J), $m$ is the mass (kg), and $v$ is the speed (m/s).
% Cite it as Eq.~\\eqref{eq:energy}; never type the number by hand.`;

const referenceCheckCode = `latexmk -pdf -interaction=nonstopmode main.tex
grep -nE "undefined|Overfull|Missing" main.log
pdftotext main.pdf - | grep -n "\\[?\\]"     # unresolved citations appear as [?]
chktex main.tex                              # common LaTeX style and syntax warnings`;

const packageNames = `01_Manuscript.pdf (or .docx / .tex)
02_Title_Page.docx           (only if the journal uses blind review)
03_Cover_Letter.pdf
04_Highlights.docx           (if requested)
05_Figure_1.pdf ... Figure_N.pdf
06_Supplementary_1.zip
07_Source_Files.zip          (main.tex, .bbl, .sty, figures)`;

const cleanBuildCode = `latexmk -C             # remove generated files
latexmk -pdf main.tex  # rebuild from scratch, then open the PDF and read it`;

const returnEmail = `Dear Editorial Office,

Thank you for the technical review of manuscript [ID]. We have addressed each item:
1. [Item from the list]: [what was changed, and where].
2. [Item from the list]: [what was changed, and where].

The corrected files are uploaded. Please let us know if anything else is needed.

Sincerely,
[Corresponding author]`;

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

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[13px] text-blue-900">
      {children}
    </code>
  );
}

function CodeBlock({ label, code }: { label: string; code: string }) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
      <p className="border-b border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600">
        {label}
      </p>
      <pre className="overflow-x-auto bg-slate-950 p-4 text-[13px] leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
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
  minWidthClass = "min-w-[600px]",
}: {
  caption: string;
  headers: string[];
  rows: React.ReactNode[][];
  minWidthClass?: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
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
                key={rowIndex}
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
  );
}

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const stages: React.ReactNode[][] = [
    [
      "Editorial office or technical check",
      "Administrative staff or an automated screen",
      "Template, file completeness and format, declarations, word and page limits, anonymisation, similarity report, ethics statements.",
      "The file is returned for corrections, or the paper is screened out before an editor reads it.",
    ],
    [
      "Handling editor",
      "An editor with subject expertise",
      "Scope and fit, novelty, article type, language, whether the paper is ready for reviewers.",
      "Desk rejection, usually within days or weeks.",
    ],
    [
      "Peer reviewers",
      "Subject experts, often unpaid",
      "Soundness, methods, evidence, clarity, literature, and how readable the paper is.",
      "Reject, or a request for revision.",
    ],
    [
      "Production team",
      "Publisher’s staff after acceptance",
      "Source files, figure quality, permissions, reference accuracy, final declarations.",
      "Delays and queries before publication.",
    ],
  ];

  const publishers: React.ReactNode[][] = [
    [
      "First submission format",
      "Often flexible at first submission at many journals, but the journal’s own rule decides.",
      "The template is usually required straight away, especially for conferences.",
      "Follow each journal’s page. Some accept any consistent format at first, others require the template.",
    ],
    [
      "LaTeX class",
      "elsarticle",
      "IEEEtran",
      "Publisher or journal class, or a generic article class if allowed.",
    ],
    [
      "Keywords",
      "Usually 4 to 6, listed under Keywords.",
      "Listed as Index Terms, often from the IEEE Taxonomy.",
      "Number and format set by the journal.",
    ],
    [
      "Extra files",
      "Highlights, and sometimes a graphical abstract.",
      "Often a biography and photo for journal papers, plus PDF compliance checks for conferences.",
      "Cover letter, title page and declarations as listed by the journal.",
    ],
    [
      "References",
      "Numbered or author-year, as set by the journal.",
      "Numbered, in order of first citation.",
      "Match the journal’s style exactly.",
    ],
  ];

  const declarationRows: React.ReactNode[][] = [
    [
      "Author contributions",
      "Every author’s role, ideally using the 14 CRediT roles.",
      "A named list such as “Conceptualization, Methodology, Software”.",
    ],
    [
      "Competing interests",
      "Financial or personal relationships that could appear to influence the work.",
      "Either a specific disclosure or an explicit “no competing interests” statement.",
    ],
    [
      "Funding",
      "Funder names and grant numbers, or a statement that there was no funding.",
      "Many funders require the exact acknowledgement wording.",
    ],
    [
      "Data availability",
      "Where the data and code can be found, or the reason they cannot be shared.",
      "A repository DOI is best. “On request” is often judged weak.",
    ],
    [
      "Ethics approval",
      "Approving committee and reference number for human, animal or sensitive data.",
      "State “not applicable” if it is not needed.",
    ],
    [
      "Generative AI use",
      "Tool, purpose and human review, in the way the journal specifies.",
      "AI tools are not accepted as authors under COPE-aligned policies.",
    ],
  ];

  const artwork: React.ReactNode[][] = [
    [
      "Line art (plots, circuits)",
      "Vector PDF or EPS preferred, or about 1000 dpi raster.",
      "Vector PDF or EPS preferred, or about 600 dpi raster.",
    ],
    [
      "Photographs, microscopy",
      "About 300 dpi, TIFF or JPEG.",
      "About 300 dpi, TIFF or PNG.",
    ],
    [
      "Combination (image plus text)",
      "About 500 dpi.",
      "About 600 dpi.",
    ],
    [
      "Width on the page",
      "About 90 mm single, 140 mm 1.5 column, 190 mm full.",
      "About 3.5 in single column, 7.16 in full width.",
    ],
    [
      "Fonts in figures",
      "Standard fonts, embedded, readable at final size.",
      "Embedded, no Type 3 fonts, readable at final size.",
    ],
  ];

  const consistency: React.ReactNode[][] = [
    ["Headings and numbering", "One pattern for levels and capitalisation", "Read the table of contents or outline view"],
    ["Abbreviations", "Defined at first use in the abstract and again in the text", "Search for each abbreviation and check the first hit"],
    ["Units and numbers", "SI units, a space between number and unit, consistent decimals", "Search for “m/s”, “ms” and similar variants"],
    ["Terminology", "One term per concept (for example “dataset”, not also “corpus”)", "Make a short glossary and search for synonyms"],
    ["Figure and table references", "Every reference matches its number and every item is cited", "Use labels and cross-references, not typed numbers"],
    ["Spelling", "US or UK English, never both", "Set the proofing language and run the spell checker"],
    ["Numbers across sections", "Abstract, results, tables and conclusion report the same values", "Place key numbers in one source file and cite from there"],
  ];

  const timeline: React.ReactNode[][] = [
    ["Days 1–2", "Choose the journal and requirements", "Copy the Guide for Authors into a one-page checklist, and note limits, article type, declarations and anonymisation rules."],
    ["Days 3–4", "Template and structure", "Move the text into the current template, confirm the class version, and check section order and limits."],
    ["Days 5–6", "Front matter and declarations", "Finish the title, abstract, keywords, affiliations, highlights, CRediT, funding, data and AI statements."],
    ["Days 7–8", "Figures, tables and equations", "Export at final size and resolution, check fonts, simplify tables, number and punctuate equations."],
    ["Days 9–10", "References and consistency", "Clean the bibliography, resolve every [?], and run the consistency pass."],
    ["Day 11", "Similarity and co-author read", "Run the similarity check, rewrite overlaps, and ask a colleague outside the project to read for clarity."],
    ["Day 12", "Package and cover letter", "Name files clearly, compile source files from a clean folder, and finish the cover letter."],
    ["Day 13", "Dry run", "Upload to the submission system, read the system-generated PDF, and fix whatever it reveals."],
    ["Day 14", "Buffer and submit", "Keep this day free for surprises, then submit calmly."],
  ];

  const returnReasons: React.ReactNode[][] = [
    ["Wrong or outdated template", "Download the current template and move the text into it. Do not modify layout parameters."],
    ["Missing statements", "Add every declaration on the journal’s list, even when the answer is “none”."],
    ["Figures unreadable or low resolution", "Re-export from the source at final size, and upload original figure files."],
    ["Author or affiliation mismatch", "Make the submission form, title page and manuscript identical."],
    ["Anonymisation failure", "Remove names, identifying acknowledgements, self-citations in the first person and file metadata."],
    ["Over the word, page or figure limit", "Cut text, move material to supplementary files, and do not reduce the font or margins."],
    ["Similarity concerns", "Rewrite the overlapping text, cite the earlier work and explain legitimate overlap in the cover letter."],
  ];

  const checklist = [
    "The current template and Guide for Authors are followed, and the page and word limits are met.",
    "Title, abstract, keywords, and author details are correct and complete.",
    "All declarations and statements are included.",
    "A similarity check is done, and any overlap is explained.",
    "Figures meet the dpi and size rules, fonts are embedded, and tables are editable text.",
    "Equations are numbered and punctuated, and notation is consistent.",
    "References use one style and the compiled PDF has no [?].",
    "Numbers agree across the abstract, text, tables and conclusion.",
    "File names are clear, the source archive compiles from a clean folder, and the cover letter is ready.",
    "The dry run is done, and the system-generated PDF has been read.",
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
    <>
      International Committee of Medical Journal Editors, “Recommendations for
      the conduct, reporting, editing, and publication of scholarly work in
      medical journals,”{" "}
      <Ext href="https://www.icmje.org/recommendations/">
        icmje.org/recommendations
      </Ext>
      .
    </>,
    <>
      NISO, “CRediT (Contributor Roles Taxonomy), ANSI/NISO Z39.104-2022,”{" "}
      <Ext href="https://credit.niso.org/">credit.niso.org</Ext>.
    </>,
    <>
      F. Crameri, G. E. Shephard, and P. J. Heron, “The misuse of colour in
      science communication,” <i>Nature Communications</i>, vol. 11, Art. no.
      5444, 2020.{" "}
      <Ext href="https://doi.org/10.1038/s41467-020-19160-7">
        doi:10.1038/s41467-020-19160-7
      </Ext>
    </>,
    <>
      T. Oetiker, H. Partl, I. Hyna, and E. Schlegl, “The Not So Short
      Introduction to LaTeX2e,”{" "}
      <Ext href="https://ctan.org/pkg/lshort-english">
        CTAN package documentation
      </Ext>
      .
    </>,
    <>
      S. Fear, “Publication quality tables in LaTeX (booktabs),”{" "}
      <Ext href="https://ctan.org/pkg/booktabs">CTAN package documentation</Ext>.
    </>,
    <>
      American Mathematical Society, “User’s guide for the amsmath package,”{" "}
      <Ext href="https://ctan.org/pkg/amsmath">CTAN package documentation</Ext>.
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
                <time dateTime="2026-11-17">Updated November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                20 min read
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
              see what differs between publishers, and follow a day-by-day
              two-week plan with preflight commands to fix everything before
              you submit.
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

            <SubHeading>Who checks what, and when</SubHeading>

            <p className={`${P} mt-3`}>
              A manuscript passes through several gates, and each gate looks
              for different problems. Knowing the order tells you which
              problems to eliminate first, because the earliest gate is the
              least forgiving.
            </p>

            <DataTable
              caption="The stages of manuscript screening, who performs them and what happens on failure"
              headers={["Stage", "Who", "Typically checks", "If it fails"]}
              rows={stages}
              minWidthClass="min-w-[820px]"
            />

            <SubHeading>What differs between publishers</SubHeading>

            <p className={`${P} mt-3`}>
              The principles are common, but the details differ, and
              authors who move between publishers carry over assumptions that
              no longer hold. The comparison below is a summary only. Your
              journal’s own page decides.
            </p>

            <DataTable
              caption="Typical differences in manuscript requirements between publishers"
              headers={["Item", "Elsevier journals", "IEEE journals and conferences", "Other publishers"]}
              rows={publishers}
              minWidthClass="min-w-[860px]"
            />

            <p className={P}>
              If you write in LaTeX, use the class your journal names (for
              example <InlineCode>elsarticle</InlineCode> for many Elsevier
              journals and <InlineCode>IEEEtran</InlineCode> for IEEE) and
              start from the publisher’s sample file. For general LaTeX
              learning, the open{" "}
              <em>Not So Short Introduction to LaTeX2e</em> <Cite n={14} />{" "}
              is a good reference.
            </p>

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
            <p className={`${P} mt-4`}>
              If you work in LaTeX, confirm which class version you are
              using, because a class copied from an older project can differ
              from the current one. The class file states its version and date
              in its header:
            </p>
            <CodeBlock label="Shell" code={classVersionCode} />
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

            <p className={`${P} mt-4`}>
              An abstract that follows a fixed sentence plan is easy to
              check against the limit and easy for an editor to scan. The
              plan below fits most engineering papers in 150 to 250 words:
            </p>
            <CodeBlock label="Abstract plan" code={abstractTemplate} />
            <p className={P}>
              Count the words with a tool instead of estimating them. Check
              the limit in the Guide for Authors, since it differs between
              journals, and include the number of keywords, highlights and
              figures in your check:
            </p>
            <CodeBlock label="Shell" code={wordCountCode} />
            <p className={P}>
              Some Elsevier journals ask for Highlights, which are short
              bullet points (commonly three to five, each at most 85
              characters including spaces) and sometimes a graphical abstract
              with minimum dimensions given in the journal’s artwork
              instructions <Cite n={9} />. State results in the Highlights,
              not topics, and do not repeat the abstract.
            </p>

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
                <Cite n={11} /> give widely used authorship criteria.
              </Check>
            </CheckList>

            <DataTable
              caption="Common statements, what to include, and typical pitfalls"
              headers={["Statement", "What to include", "Typical pitfall"]}
              rows={declarationRows}
              minWidthClass="min-w-[720px]"
            />

            <p className={P}>
              The 14 CRediT roles are Conceptualization, Data curation, Formal
              analysis, Funding acquisition, Investigation, Methodology,
              Project administration, Resources, Software, Supervision,
              Validation, Visualization, Writing – original draft, and
              Writing – review &amp; editing <Cite n={12} />. Prepare the whole
              block once and paste it wherever each journal wants it:
            </p>
            <CodeBlock label="Reusable declarations block" code={declarationsExample} />

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
            <CheckList>
              <Check>
                <b>Read the report, not just the percentage.</b> There is no
                universal acceptable score. Matches in the methods or
                reference list can be harmless, whereas a long matching
                paragraph in the introduction or discussion is not.
              </Check>
              <Check>
                <b>Know the policy on theses and preprints.</b> Many journals
                do not treat a thesis or a preprint as prior publication, but
                policies differ, so check and cite them.
              </Check>
              <Check>
                <b>Mind figures and tables.</b> Reusing a figure from your own
                earlier paper can require permission from the publisher, even
                when you are the author.
              </Check>
              <Check>
                <b>Paraphrase properly.</b> Changing a few words in a
                sentence from another paper is still copying. Write from your
                own understanding and cite the source.
              </Check>
            </CheckList>

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
                for color-blind readers <Cite n={10} />, and avoid rainbow
                color maps for continuous data <Cite n={13} />.
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

            <DataTable
              caption="Typical artwork requirements by publisher"
              headers={["Item", "Elsevier (typical)", "IEEE (typical)"]}
              rows={artwork}
              minWidthClass="min-w-[680px]"
            />

            <p className={P}>
              These are planning values. Confirm them in the journal’s
              artwork instructions. After you build the final PDF, check what
              it actually contains, because a figure that looks fine on screen
              can hide missing fonts or a low pixel density:
            </p>
            <CodeBlock label="Shell (poppler-utils)" code={figureCheckCode} />
            <p className={P}>
              A font listed as “Type 3” or as not embedded is a classic reason
              for a PDF to be rejected by an automated checker. Re-export the
              figure from the plotting tool with TrueType or Type 1 fonts
              embedded, and check again.
            </p>

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
            <p className={`${P} mt-4`}>
              In LaTeX, the <InlineCode>booktabs</InlineCode> package{" "}
              <Cite n={15} /> removes vertical rules and gives clean,
              professional tables, and the <InlineCode>amsmath</InlineCode>{" "}
              package <Cite n={16} /> provides robust equation environments. In
              Word, use the built-in equation editor, and avoid pasting
              equations as images, because editors and production teams cannot
              edit them.
            </p>
            <CodeBlock label="LaTeX: a clean table" code={tableCode} />
            <CodeBlock label="LaTeX: a numbered, punctuated equation" code={equationCode} />

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

            <p className={`${P} mt-4`}>
              Reference managers and exported BibTeX entries often contain
              wrong volumes, missing pages, duplicated records and lowercased
              acronyms, so verify a sample of entries against the publisher’s
              page or DOI record. For LaTeX projects, a short routine
              exposes most reference and layout problems in the log:
            </p>
            <CodeBlock label="Shell" code={referenceCheckCode} />
            <p className={P}>
              If the submission system compiles your source files, it may not
              run BibTeX, so include the generated <InlineCode>.bbl</InlineCode>{" "}
              file with the same base name as your main file.
            </p>

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

            <DataTable
              caption="A consistency pass: what to check and how"
              headers={["Item", "What to check", "How"]}
              rows={consistency}
              minWidthClass="min-w-[720px]"
            />

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

            <p className={`${P} mt-4`}>
              A numbered file naming scheme sorts predictably and makes it
              obvious when something is missing. If your journal accepts
              LaTeX source, prove that it builds by compiling it from a clean
              folder, since local auxiliary files can hide missing
              dependencies:
            </p>
            <CodeBlock label="Example package" code={packageNames} />
            <CodeBlock label="Shell: clean build" code={cleanBuildCode} />
            <p className={P}>
              For a cover letter skeleton and the reasons that editors give
              for early decisions, see our guide on{" "}
              <Int href="/blog/paper-rejection-reasons">
                why journals reject research papers
              </Int>
              .
            </p>
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

            <DataTable
              caption="A day-by-day plan for the final two weeks before submission"
              headers={["Days", "Focus", "Tasks"]}
              rows={timeline}
              minWidthClass="min-w-[720px]"
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

            <DataTable
              caption="Common reasons for a technical return and the corresponding fix"
              headers={["Reason for return", "How to fix it"]}
              rows={returnReasons}
              minWidthClass="min-w-[560px]"
            />

            <p className={P}>
              Resubmit as soon as every item is fixed, and, if the system
              allows a note, summarise what you changed so that the editorial
              office can confirm it quickly:
            </p>
            <CodeBlock label="Short reply to the editorial office" code={returnEmail} />

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
              <p className={`${P} mt-3`}>
                The practical routine is short: read the journal’s rules
                first, work inside the right template from the start, prepare
                declarations and figures early, verify the PDF with simple
                commands, and keep a buffer day before submitting. Add every
                new lesson to your own checklist, and each submission becomes
                faster and calmer than the last.
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
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-xs italic leading-relaxed text-slate-500">
                Templates, artwork specifications and author guidelines are
                updated regularly, and the figures quoted here are typical
                values. Always confirm requirements on the journal’s own
                website before submitting.
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