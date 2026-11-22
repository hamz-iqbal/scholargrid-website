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
  "How to Format a Manuscript for Elsevier and IEEE: Step-by-Step Guide (2026)";
const DESCRIPTION =
  "A technical guide to formatting engineering manuscripts for Elsevier and IEEE: elsarticle and IEEEtran setup, amsmath equations, siunitx units, figure and font rules, BibTeX, and LaTeX error fixes.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "manuscript formatting guide",
    "Elsevier manuscript format",
    "IEEE manuscript format",
    "elsarticle LaTeX template",
    "IEEEtran template",
    "amsmath equations",
    "siunitx units",
    "IEEE PDF eXpress Type 3 fonts",
    "BibTeX IEEEtran",
    "journal submission checklist",
    "LaTeX errors before submission",
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
    q: "Which LaTeX class should I use for Elsevier and IEEE papers?",
    a: "Elsevier journals usually provide the elsarticle class, while IEEE journals and conferences use the IEEEtran class. Always download the template named in the journal’s Guide for Authors or the conference call for papers, because class options, required packages and bibliography styles can change between venues and years.",
  },
  {
    q: "Should I write my engineering paper in LaTeX or Word?",
    a: "Choose LaTeX if your paper is equation-heavy, you want automatic numbering and cross-references, or you collaborate through Overleaf or Git. Choose Word if the paper is mostly experimental, your co-authors do not use LaTeX, or the venue supplies a Word template. Both are accepted by most Elsevier and IEEE venues, but the template and style rules apply equally to either.",
  },
  {
    q: "How long should the abstract and title be?",
    a: "A specific title of roughly 10 to 15 words works well, and most abstracts run 150 to 250 words in a single paragraph that states the problem, method, key quantitative result and conclusion. For IEEE, avoid equations, citations and undefined abbreviations in the abstract. Limits vary by journal, so check the Guide for Authors before you finalise either.",
  },
  {
    q: "What are Elsevier Highlights and are they mandatory?",
    a: "Highlights are a short list of three to five bullet points, each limited to 85 characters including spaces, that summarise the core findings. Many Elsevier journals require them as a separate editable file or as a frontmatter environment in elsarticle. They are not part of the abstract and should not repeat it.",
  },
  {
    q: "Where should figure and table captions be placed?",
    a: "Place captions below figures and above tables, and keep the numbering consistent throughout the manuscript. In LaTeX, put the label command immediately after the caption command, otherwise the cross-reference can point to the wrong number. Every figure and table should be cited in the text before it appears.",
  },
  {
    q: "What image format and resolution should I use for figures?",
    a: "Use vector formats such as PDF or EPS for plots, circuits and block diagrams, and TIFF or PNG for photographs and microscopy. Typical publisher guidance asks for about 300 dpi for photographs and 500 to 1000 dpi for line art when a raster file is unavoidable, but you should confirm the exact figures in the journal’s artwork instructions. Choose colours that stay readable for colour-blind readers and in greyscale print.",
  },
  {
    q: "Why does IEEE PDF eXpress reject my PDF because of Type 3 fonts?",
    a: "Plotting tools such as Matplotlib and some MATLAB export paths can embed bitmap-like Type 3 fonts, which many publisher workflows reject or render poorly. Re-export your figures with TrueType (Type 42) or Type 1 fonts embedded, then verify the final PDF with the pdffonts utility. Every font should show as embedded and none should be listed as Type 3.",
  },
  {
    q: "How do I format equations correctly in a research paper?",
    a: "Use inline math for short symbols and display math for anything long, complex or referenced later. Number only referenced equations if the journal allows it, end each with the punctuation the sentence requires, define every symbol in a “where” line, and cite equations with a cross-reference command instead of typing numbers by hand. The amsmath package provides align, split and multline for multi-line equations, and siunitx formats units consistently.",
  },
  {
    q: "Can I change margins or font size to meet the page limit?",
    a: "No. Automated and editorial checks flag changed margins, font sizes and repeated spacing tricks. If you are over the limit, cut text, move material to supplementary files, shrink figures within the template rules, or use a more compact table design built with booktabs.",
  },
  {
    q: "What formatting mistakes cause a manuscript to be returned at the technical check?",
    a: "Common causes include an outdated template, altered layout settings, equations or citations in an IEEE abstract, low-resolution raster figures, unembedded or Type 3 fonts, unresolved citation markers such as [?], missing source files such as the compiled .bbl, and missing author, funding or declaration statements. The checklist near the end of this guide helps you catch them before upload.",
  },
  {
    q: "Do I need to upload the .bib file or the .bbl file?",
    a: "Many submission systems compile your LaTeX source themselves and do not run BibTeX, so they need the generated .bbl file with the same base name as your main .tex file. Upload the .bbl, and include the .bib only if the system or the Guide for Authors asks for it. Always compile the uploaded archive from scratch before submitting to prove that it builds.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline:
        "A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier & IEEE",
      description: DESCRIPTION,
      datePublished: "2026-10-01",
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
          name: "Manuscript Formatting",
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
  { id: "step-1", title: "Elsevier vs IEEE Templates" },
  { id: "step-2", title: "Front Matter and Section Structure" },
  { id: "step-3", title: "Mathematics, Equations and Units" },
  { id: "step-4", title: "Figures, Fonts and Tables" },
  { id: "step-5", title: "Citation Management" },
  { id: "step-6", title: "Diagnosing LaTeX Errors" },
  { id: "common-mistakes", title: "Common Formatting Mistakes" },
  { id: "checklist", title: "Pre-Submission Checklist" },
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
    text: "Publication-quality contour and 3D plots for journals.",
  },
  {
    href: "/blog/fast-review-q1-q2-journals",
    title: "Fast-Review Q1/Q2 Journals",
    text: "Find, verify and rank fast-review journals in engineering.",
  },
];

/* ------------------------------------------------------------------ */
/* Code samples (LaTeX / shell / Python)                               */
/* ------------------------------------------------------------------ */

const classLines = `\\documentclass[journal]{IEEEtran}    % IEEE journal
\\documentclass[conference]{IEEEtran}  % IEEE conference
\\documentclass[review,3p]{elsarticle} % Elsevier submission, double-spaced`;

const elsarticleSkeleton = `\\documentclass[review,3p,times]{elsarticle}
\\usepackage{amsmath,amssymb,bm}
\\usepackage{graphicx,booktabs}
\\usepackage{siunitx}
\\biboptions{sort&compress}          % [1-3] instead of [1,2,3]
\\journal{Name of the Target Journal}

\\begin{document}
\\begin{frontmatter}

\\title{A Specific Title Without Undefined Abbreviations}

\\author[inst1]{First Author\\corref{cor1}}
\\ead{first.author@university.edu}
\\cortext[cor1]{Corresponding author}
\\affiliation[inst1]{organization={Department of Electrical Engineering, University},
                    city={City}, country={Country}}

\\begin{abstract}
One paragraph: problem, method, key quantitative result, conclusion.
\\end{abstract}

\\begin{highlights}
\\item Three to five bullets, each at most 85 characters
\\item State a result, not a topic
\\end{highlights}

\\begin{keyword}
keyword one \\sep keyword two \\sep keyword three \\sep keyword four
\\end{keyword}

\\end{frontmatter}

\\section{Introduction}
% ...
\\bibliographystyle{elsarticle-num}
\\bibliography{refs}
\\end{document}`;

const ieeeSkeleton = `\\documentclass[journal]{IEEEtran}
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts,bm}
\\usepackage{graphicx,booktabs,xcolor,textcomp}
\\usepackage{siunitx}
\\usepackage[caption=false,font=footnotesize]{subfig}

\\begin{document}
\\title{A Specific Title in Title Case Without Math or Citations}
\\author{First A. Author,~\\IEEEmembership{Member,~IEEE,}
        and Second B. Author,~\\IEEEmembership{Senior Member,~IEEE}%
\\thanks{Manuscript received Month DD, 2026. This work was supported by ...}}
\\markboth{IEEE Transactions on ..., Vol. XX, No. X, Month 2026}%
{Author \\MakeLowercase{\\textit{et al.}}: Short Title}
\\maketitle

\\begin{abstract}
No equations, no citations, no undefined abbreviations. 150--250 words.
\\end{abstract}

\\begin{IEEEkeywords}
Channel estimation, deep learning, MIMO, wireless communication
\\end{IEEEkeywords}

\\IEEEpeerreviewmaketitle

\\section{Introduction}
\\IEEEPARstart{T}{he} opening letter uses the drop-cap macro.

\\bibliographystyle{IEEEtran}
\\bibliography{IEEEabrv,refs}
\\end{document}`;

const alignCode = `\\begin{align}
  \\hat{\\bm{\\theta}} &= \\operatorname*{arg\\,min}_{\\bm{\\theta}} \\; J(\\bm{\\theta}),
      \\label{eq:argmin} \\\\
  J(\\bm{\\theta}) &= \\frac{1}{N}\\sum_{k=1}^{N}
      \\bigl\\lVert \\mathbf{y}_k - f(\\mathbf{x}_k;\\bm{\\theta}) \\bigr\\rVert_2^{2}
      + \\lambda \\lVert \\bm{\\theta} \\rVert_2^{2}.
      \\label{eq:cost}
\\end{align}
where $\\lambda > 0$ is the regularisation weight and $N$ is the number of
training samples. The minimiser in \\eqref{eq:argmin} is obtained by ...`;

const splitCode = `\\begin{equation}
  \\begin{split}
    P_{\\mathrm{out}} &= \\Pr\\bigl[\\gamma < \\gamma_{\\mathrm{th}}\\bigr] \\\\
                      &= 1 - \\exp\\!\\left(-\\frac{\\gamma_{\\mathrm{th}}}{\\bar{\\gamma}}\\right).
  \\end{split}
  \\label{eq:outage}
\\end{equation}`;

const siunitxCode = `\\sisetup{per-mode=symbol}
The carrier frequency is \\SI{2.4}{\\giga\\hertz} and the gain is
\\SI{12.5 \\pm 0.3}{\\decibel}. The sample rate is \\SI{10}{\\mega\\sample\\per\\second}.
Range values use \\SIrange{1}{5}{\\kilo\\ohm}; bare numbers use \\num{1.2e-3}.`;

const tableCode = `\\begin{table}[t]
  \\caption{Mean Absolute Error and Runtime (mean over 10 runs)}
  \\label{tab:mae}
  \\centering
  \\begin{tabular}{l S[table-format=1.3] S[table-format=2.1]}
    \\toprule
    {Method}   & {MAE (\\si{\\meter})} & {Time (\\si{\\second})} \\\\
    \\midrule
    Baseline A & 0.482 & 12.4 \\\\
    Baseline B & 0.351 & 18.9 \\\\
    Proposed   & \\bfseries 0.217 & 15.2 \\\\
    \\bottomrule
  \\end{tabular}
\\end{table}`;

const figureCode = `\\begin{figure}[t]
  \\centering
  \\includegraphics[width=\\columnwidth]{fig_response.pdf}
  \\caption{Step response of the closed loop for three controller gains.}
  \\label{fig:response}   % label AFTER caption, always
\\end{figure}`;

const matplotlibCode = `import matplotlib as mpl

mpl.rcParams["pdf.fonttype"] = 42   # embed TrueType, avoid Type 3 fonts
mpl.rcParams["ps.fonttype"] = 42
mpl.rcParams["font.family"] = "serif"
mpl.rcParams["font.size"] = 8       # roughly caption size in a two-column layout

fig.set_size_inches(3.5, 2.4)       # one IEEE column is 3.5 in wide
fig.savefig("fig_response.pdf")     # vector output, no dpi needed`;

const bibCode = `@article{Author2025,
  author  = {A. B. Author and C. D. Author},
  title   = {Robust estimation of {MIMO} channels under {Rician} fading},
  journal = IEEE_J_COM,
  volume  = {73},
  number  = {4},
  pages   = {2210--2224},
  month   = apr,
  year    = {2025},
  doi     = {10.0000/example.2025.0000}
}`;

const preflightCode = `latexmk -pdf -interaction=nonstopmode main.tex   # full build incl. BibTeX
grep -nE "undefined|Overfull|Missing|Warning" main.log
pdffonts main.pdf                 # every font must show "yes" under emb
pdffonts main.pdf | grep "Type 3" # should print nothing
pdfimages -list main.pdf          # check the ppi column of raster figures`;

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

function CodeBlock({ code, label }: { code: string; label?: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-lg bg-slate-950">
      {label && (
        <p className="border-b border-slate-800 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:px-5">
          {label}
        </p>
      )}
      <div className="overflow-x-auto p-4 sm:p-5">
        <pre className="font-mono text-[13px] leading-6 text-blue-100">{code}</pre>
      </div>
    </div>
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
  monoColumn,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  minWidthClass: string;
  monoColumn?: number;
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
                        : cellIndex === monoColumn
                          ? "font-mono text-[13px] text-blue-800"
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
const LIST = "mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-700";

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const comparison = [
    ["Typical layout", "Single column, double-spaced, usually with line numbers (review option)", "Two columns, single-spaced, 10 pt body text"],
    ["LaTeX class", "elsarticle", "IEEEtran"],
    ["Common class options", "review, preprint, 1p, 3p, 5p, times, number, authoryear", "journal, conference, compsoc, transmag, peerreview, draftcls"],
    ["Keywords heading", "Keywords (usually 4 to 6, separated with \\sep)", "Index Terms (alphabetical, preferably from the IEEE Taxonomy)"],
    ["Extra front matter", "Highlights, optional graphical abstract, corresponding-author marker", "Funding and manuscript-received footnote, IEEE membership grades"],
    ["Bibliography style", "elsarticle-num, elsarticle-num-names or elsarticle-harv", "IEEEtran.bst with the IEEEabrv.bib journal abbreviations"],
    ["Final layout", "Typeset by the publisher after acceptance", "Often close to exactly what you submit, especially for conferences"],
  ];

  const symbols = [
    ["Scalar", "Italic", "x, \\alpha"],
    ["Vector", "Bold lowercase", "\\mathbf{x}, \\bm{\\alpha}"],
    ["Matrix", "Bold uppercase", "\\mathbf{A}, \\bm{\\Sigma}"],
    ["Set or space", "Calligraphic or blackboard bold", "\\mathcal{S}, \\mathbb{R}"],
    ["Operator name", "Upright", "\\operatorname{tr}(\\mathbf{A})"],
    ["Text subscript", "Upright", "x_{\\mathrm{max}}"],
    ["Differential", "Upright d (ISO style, be consistent)", "\\int f(t)\\,\\mathrm{d}t"],
  ];

  const artwork = [
    ["Line art (plots, circuits)", "Vector (EPS or PDF) preferred; raster at about 1000 dpi", "Vector (PDF or EPS) preferred; raster at about 600 dpi"],
    ["Photographs, microscopy", "About 300 dpi, TIFF or JPEG", "About 300 dpi, TIFF or PNG"],
    ["Combination (image plus text)", "About 500 dpi", "About 600 dpi"],
    ["Width on the page", "90 mm single, 140 mm 1.5 column, 190 mm full width", "3.5 in single column, 7.16 in full width"],
    ["Fonts inside figures", "Arial, Times New Roman, Courier or Symbol, embedded", "Embedded, no Type 3 fonts, text readable at final size"],
  ];

  const errors = [
    ["Citation undefined, or [?] in the PDF", "BibTeX was not run, or the cite key differs from the .bib key (keys are case-sensitive)", "Run pdflatex, bibtex, pdflatex, pdflatex (or use latexmk). Compare the exact keys."],
    ["Reference undefined, or ?? in the text", "Label is missing, misspelled, or placed before the caption", "Place the label after the caption and compile twice."],
    ["Missing $ inserted", "An underscore, caret or math symbol in normal text", "Write \\_ for a literal underscore or wrap the symbol in math mode."],
    ["Undefined control sequence", "A package is not loaded, or the command is misspelled", "Load the package (bm for \\bm, siunitx for \\SI) and check the spelling."],
    ["Overfull \\hbox in a two-column layout", "A long equation, URL, or table wider than the column", "Use split or multline, break the line manually, or use table* for wide tables."],
    ["Too many unprocessed floats", "More floats queued than LaTeX can place", "Insert \\clearpage, loosen placement to [t], or load the placeins package."],
    ["File not found for a figure", "Case mismatch, spaces in the name, or a wrong path (Overleaf is case-sensitive)", "Use lowercase names without spaces and keep paths relative."],
    ["Option clash for package", "A package was loaded twice with different options", "Load it once or use \\PassOptionsToPackage before \\documentclass."],
    ["Token not allowed in a PDF string", "Math inside a section title confuses hyperref bookmarks", "Use \\texorpdfstring{math}{plain text} in the heading."],
  ];

  const sections: [string, React.ReactNode][] = [
    ["Introduction:", "context, a focused related-work argument that ends in an explicit research gap, a bulleted or sentence-level list of contributions, and a one-paragraph outline of the remaining sections."],
    ["Methodology:", "detailed enough for an independent group to reproduce. Define every symbol at first use, and state assumptions, parameter values, datasets, hardware and software versions, and random seeds."],
    ["Results and Discussion:", "follow the order of your methods. Compare against baselines fairly, report units and uncertainty (standard deviation, confidence intervals or repeated runs), and explain why the results look the way they do rather than only describing them."],
    ["Conclusion:", "findings and significance in one or two paragraphs, plus honest limitations and future work. No new results and no repeated abstract sentences."],
    [
      "Back Matter:",
      <>
        acknowledgements and funding, the CRediT author statement{" "}
        <Cite n={5} />, a competing-interest declaration, a data availability
        statement, and, where the publisher requires it, a declaration of
        generative AI use <Cite n={19} />. Elsevier journals normally place
        these before the reference list.
      </>,
    ],
  ];

  const mistakes: [string, string][] = [
    ["Reusing an old template.", "Conference classes and journal wrappers are revised often, and an outdated file can change margins, headers or copyright blocks."],
    ["Changing layout to fit the page limit.", "Editing margins, font sizes, \\vspace values or \\baselinestretch is detectable and will be returned. Cut words instead."],
    ["Putting equations, citations or undefined abbreviations in an IEEE abstract.", "The abstract is indexed on its own and must stand alone."],
    ["Submitting low-resolution raster images.", "Screenshots of plots blur at print size. Export vector graphics from the plotting tool."],
    ["Leaving Type 3 or unembedded fonts in figures.", "They are a classic reason for PDF eXpress failure, and they print inconsistently."],
    ["Leaving unresolved markers such as [?] or ??.", "These signal an unfinished manuscript to editors and reviewers."],
    ["Using eqnarray instead of align.", "The eqnarray environment produces uneven spacing around relation symbols and is discouraged in favour of amsmath environments."],
    ["Typing numbers by hand.", "Hard-coded equation, figure and section numbers break the moment you reorder content. Always use labels and references."],
    ["Mixing notation.", "Using x for a scalar in one section and a vector in another confuses readers. Declare notation once and keep it consistent."],
    ["Uploading incomplete source files.", "Missing .bbl, custom .sty or figure files make a LaTeX build fail on the publisher’s server even when it compiled locally."],
  ];

  const checklist = [
    "The latest official template of the target journal or conference is used, with no modified layout parameters.",
    "Title length, abstract word count and keyword or Index Terms format are verified against the Guide for Authors.",
    "Highlights (three to five, at most 85 characters each) and a graphical abstract are prepared if the journal requires them.",
    "All referenced equations are numbered, cited with a cross-reference command, and every symbol is defined once.",
    "Units are typeset with siunitx and variables are italic while operator names and text subscripts are upright.",
    "Figures are vector or meet the stated dpi at final printed size, with captions placed correctly and readable text in the figure.",
    "pdffonts shows all fonts embedded and no Type 3 fonts; figures remain readable in greyscale and for colour-blind readers.",
    "No [?] or ?? markers remain, and the log contains no undefined citation, undefined reference or serious Overfull warnings.",
    "References follow the required style, journal names are abbreviated consistently, and DOIs are present where available.",
    "The .bbl file, custom styles and all figure files are in the upload archive, and the archive compiles from a clean folder.",
    "Author affiliations, corresponding author, funding, CRediT, competing interests, data availability and AI-use declarations are complete.",
    "The final PDF has been read once on screen at 100 percent zoom and once as a printout or a greyscale preview.",
  ];

  const references: React.ReactNode[] = [
    <>Elsevier, “Guide for Authors,” available on each journal’s homepage at sciencedirect.com.</>,
    <>
      Elsevier, “elsarticle: Class for articles submitted to Elsevier journals,”{" "}
      <Ext href="https://ctan.org/pkg/elsarticle">CTAN package documentation</Ext>.
    </>,
    <>
      IEEE Author Center, “Templates for IEEE journal and conference articles,”{" "}
      <Ext href="https://template-selector.ieee.org/">IEEE Template Selector</Ext>.
    </>,
    <>
      M. Shell, “How to use the IEEEtran LaTeX class,”{" "}
      <Ext href="https://ctan.org/pkg/ieeetran">CTAN package documentation</Ext>.
    </>,
    <>
      A. Brand, L. Allen, M. Altman, M. Hlava, and J. Scott, “Beyond authorship: Attribution, contribution, collaboration, and credit,” <i>Learned Publishing</i>, vol. 28, no. 2, pp. 151–155, 2015.{" "}
      <Ext href="https://doi.org/10.1087/20150211">doi:10.1087/20150211</Ext>
    </>,
    <>IEEE, “IEEE Editorial Style Manual for Authors,” IEEE Periodicals.</>,
    <>
      American Mathematical Society, “User’s guide for the amsmath package,”{" "}
      <Ext href="https://ctan.org/pkg/amsmath">CTAN package documentation</Ext>.
    </>,
    <>
      J. Wright, “siunitx: A comprehensive (SI) units package,”{" "}
      <Ext href="https://ctan.org/pkg/siunitx">CTAN package documentation</Ext>.
    </>,
    <>Elsevier, “Artwork and media instructions,” Elsevier Author Resources.</>,
    <>
      B. Wong, “Points of view: Color blindness,” <i>Nature Methods</i>, vol. 8, no. 6, p. 441, 2011.{" "}
      <Ext href="https://doi.org/10.1038/nmeth.1618">doi:10.1038/nmeth.1618</Ext>
    </>,
    <>
      S. Fear, “Publication quality tables in LaTeX (booktabs),”{" "}
      <Ext href="https://ctan.org/pkg/booktabs">CTAN package documentation</Ext>.
    </>,
    <>L. Lamport, <i>LaTeX: A Document Preparation System</i>, 2nd ed. Reading, MA, USA: Addison-Wesley, 1994.</>,
    <>
      IEEE, “IEEE PDF eXpress: PDF compliance checking for IEEE conferences,”{" "}
      <Ext href="https://ieee-pdf-express.org/">ieee-pdf-express.org</Ext>.
    </>,
    <>
      F. Crameri, G. E. Shephard, and P. J. Heron, “The misuse of colour in science communication,” <i>Nature Communications</i>, vol. 11, art. no. 5444, 2020.{" "}
      <Ext href="https://doi.org/10.1038/s41467-020-19160-7">doi:10.1038/s41467-020-19160-7</Ext>
    </>,
    <>
      The LaTeX Project, “The bm package: Access to bold math symbols,”{" "}
      <Ext href="https://ctan.org/pkg/bm">CTAN package documentation</Ext>.
    </>,
    <>
      P. W. Daly, “Natural sciences citations and references (natbib),”{" "}
      <Ext href="https://ctan.org/pkg/natbib">CTAN package documentation</Ext>.
    </>,
    <>
      S. Fear, “subfig: Figures broken into subfigures,”{" "}
      <Ext href="https://ctan.org/pkg/subfig">CTAN package documentation</Ext>.
    </>,
    <>
      T. Oetiker, H. Partl, I. Hyna, and E. Schlegl, “The Not So Short Introduction to LaTeX2e,”{" "}
      <Ext href="https://ctan.org/pkg/lshort-english">CTAN package documentation</Ext>.
    </>,
    <>Elsevier, “Generative AI policies for journals,” Elsevier Author Resources.</>,
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
                Manuscript Formatting
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Manuscript Formatting Guide
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-17">Updated November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                18 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              A Step-by-Step Guide to Formatting Engineering Manuscripts for
              Elsevier &amp; IEEE
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A technical walkthrough for PhD scholars and engineering authors:
              elsarticle and IEEEtran setup, amsmath and siunitx, figure and
              font compliance, BibTeX, and the LaTeX errors that most often
              stall a submission.
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
                Introduction: Why Manuscript Formatting Matters
              </h2>
              <div className="rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Formatting alone will not get a weak paper accepted, but it
                  can get a strong paper returned at the technical check, and a
                  delay of a week or two is costly when you are racing a
                  graduation deadline or a conference cut-off. This guide
                  follows the order in which you will actually meet each task:
                  template, front matter, equations, figures, references, error
                  diagnosis, and a final audit (Fig. 1).
                </p>
              </div>
            </section>

            <Callout title="One rule beats everything below">
              The journal’s Guide for Authors <Cite n={1} />, or the conference
              call for papers, always takes priority. Treat this guide as a map
              and the journal page as the final word.
            </Callout>

            <ArticleFigure
              src="/blogs/fig1.png"
              alt="The six steps of manuscript formatting"
              caption="Fig. 1. The six steps, in the order you will meet them."
              priority
            />

            <p className={`${P} mb-4`}>
              Most journals run an initial quality check before an editor sees
              the science. Editorial assistants confirm that the submission
              uses the right template, that all files are present and legible,
              that declarations such as funding, competing interests and data
              availability are complete, and that the PDF is not visibly broken.
              A submission that fails any of these is typically “returned to
              author” without review, which restarts the clock. Formatting also
              shapes reviewers’ first impression: consistent notation, clean
              figures and complete references signal a careful research team,
              while unresolved citation markers and blurry plots signal the
              opposite before a single claim has been evaluated.
            </p>

            <p className={`${P} mb-5`}>
              Formatting is one piece of a successful submission. To plan the
              content itself, read our{" "}
              <Int href="/blog/q1-research-paper-structure">
                guide to structuring a Q1 research paper
              </Int>
              , and to avoid the problems that lead to an early decline, see{" "}
              <Int href="/blog/paper-rejection-reasons">
                why journals reject research papers
              </Int>
              . If you are new to LaTeX itself, the open-source{" "}
              <em>Not So Short Introduction to LaTeX2e</em> <Cite n={18} /> is
              an excellent companion to this guide.
            </p>

            {/* Step 1 */}
            <SectionHeading id="step-1" number="01">
              Elsevier vs IEEE Template: Which One Should You Use?
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Your target venue decides the publisher, so what you really choose
              is the file format and how closely you follow the template. The
              two publishers make different assumptions about who finalises the
              layout, which is why their templates behave so differently.
            </p>

            <DataTable
              caption="Comparison of Elsevier and IEEE manuscript formatting"
              headers={["Feature", "Elsevier Journals", "IEEE Journals and Conferences"]}
              rows={comparison}
              minWidthClass="min-w-[720px]"
            />

            <p className={P}>
              The last row matters. Elsevier typesets your paper after
              acceptance, so your manuscript only has to be easy to review. IEEE
              conference papers are often published almost exactly as you format
              them, so layout details, page limits and font embedding count for
              much more (Fig. 2). Many Elsevier journals also offer a flexible
              “Your Paper Your Way” first submission, where any clear, consistent
              style is accepted until revision, but this is a journal-level
              policy, so confirm it before you rely on it.
            </p>

            <ArticleFigure
              src="/blogs/fig2.png"
              alt="IEEE versus Elsevier manuscript layout"
              caption="Fig. 2. A two-column IEEE page next to a single-column, double-spaced Elsevier page."
            />

            <SubHeading>Should You Use LaTeX or Word?</SubHeading>

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">Pick LaTeX if:</strong> your
                paper is equation-heavy (control, signal processing,
                electromagnetics, mechanics), you want automatic numbering and
                cross-references, or you share the project through{" "}
                <Ext href="https://www.overleaf.com">Overleaf</Ext> or Git.
                LaTeX also keeps notation consistent because every symbol is
                defined in text you can search.
              </Check>
              <Check>
                <strong className="text-slate-900">Pick Word if:</strong> your
                paper is mostly experimental, your co-authors do not use LaTeX,
                or the venue provides a Word template. If you do, use the
                built-in heading styles, create equations with the native
                equation editor or MathType instead of pasting images, and use a
                reference manager so that citation numbers stay synchronised.
              </Check>
            </ul>

            <SubHeading>Where to Download the Official Template</SubHeading>

            <p className={`${P} mt-3`}>
              For general LaTeX reference, see Lamport <Cite n={12} />.
            </p>

            <p className={`${P} mt-3`}>
              <strong className="text-slate-900">Elsevier:</strong> open the
              journal homepage, then the Guide for Authors. It links to the
              current template, usually the{" "}
              <Ext href="https://ctan.org/pkg/elsarticle">elsarticle class</Ext>{" "}
              <Cite n={2} /> or a Word file.
            </p>

            <p className={`${P} mt-3`}>
              <strong className="text-slate-900">IEEE:</strong> use the{" "}
              <Ext href="https://template-selector.ieee.org/">
                IEEE Template Selector
              </Ext>{" "}
              <Cite n={3} /> or the one named in your conference call, with the{" "}
              <Ext href="https://ctan.org/pkg/ieeetran">IEEEtran class</Ext>{" "}
              <Cite n={4} /> for LaTeX. Never reuse an old paper’s template,
              because conferences change theirs yearly.
            </p>

            <SubHeading>Class Options That Actually Matter</SubHeading>

            <p className={`${P} mt-3`}>
              The options you pass to <InlineCode>{"\\documentclass"}</InlineCode>{" "}
              decide whether your file looks like a review copy or a final
              layout. Choose them deliberately:
            </p>

            <CodeBlock label="LaTeX" code={classLines} />

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">elsarticle:</strong>{" "}
                <InlineCode>review</InlineCode> gives a double-spaced
                single-column layout with line numbers for reviewers, while{" "}
                <InlineCode>preprint</InlineCode> is similar but without that
                review emphasis. The options <InlineCode>1p</InlineCode>,{" "}
                <InlineCode>3p</InlineCode> and <InlineCode>5p</InlineCode>{" "}
                mimic the final page layout, and <InlineCode>number</InlineCode>{" "}
                or <InlineCode>authoryear</InlineCode> selects the citation
                family.
              </Check>
              <Check>
                <strong className="text-slate-900">IEEEtran:</strong>{" "}
                <InlineCode>journal</InlineCode> and{" "}
                <InlineCode>conference</InlineCode> select entirely different
                headers and spacing, so the wrong one is an immediate flag.{" "}
                <InlineCode>peerreview</InlineCode> gives a double-spaced layout
                that some IEEE journals request for review, and{" "}
                <InlineCode>draftcls</InlineCode> marks overfull boxes while you
                debug.
              </Check>
            </ul>

            <Callout title="Do not tweak the template">
              Automated checkers flag changed margins, font sizes, and repeated{" "}
              <InlineCode>\vspace</InlineCode> tricks. If you are over the page
              limit, cut text instead of changing the layout.
            </Callout>

            <SubHeading>Minimal Working Skeletons</SubHeading>

            <p className={`${P} mt-3`}>
              Start from the publisher’s sample file, not from a blank page. The
              two skeletons below show the structure you should expect, and they
              are deliberately minimal so that you can see what belongs where.
            </p>

            <CodeBlock label="Elsevier (elsarticle) skeleton" code={elsarticleSkeleton} />
            <CodeBlock label="IEEE (IEEEtran) skeleton" code={ieeeSkeleton} />

            <p className={P}>
              Older elsarticle releases use <InlineCode>{"\\address"}</InlineCode>{" "}
              for affiliations, while current releases use{" "}
              <InlineCode>{"\\affiliation"}</InlineCode> with key-value fields.
              Always compile the official sample first and copy its syntax, since
              mixing both styles produces confusing warnings.
            </p>

            {/* Step 2 */}
            <SectionHeading id="step-2" number="02">
              Front Matter and Section Structure
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Most engineering papers share one skeleton. Check your journal
              first, since some require a structured abstract or a different
              section order.
            </p>

            <SubHeading>How to Write the Title, Abstract, and Keywords</SubHeading>

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">Title:</strong> specific and
                concise, roughly 10 to 15 words. Avoid abbreviations that are
                not universally known, and avoid formulas, which break indexing.
              </Check>
              <Check>
                <strong className="text-slate-900">Abstract:</strong> one
                paragraph, usually 150 to 250 words, that states the problem,
                the method, at least one quantitative result, and the
                conclusion. For IEEE, avoid equations, citations, and undefined
                abbreviations. Elsevier limits vary, so check the journal.
              </Check>
              <Check>
                <strong className="text-slate-900">Keywords:</strong> Elsevier
                usually requires 4 to 6, while IEEE uses “Index Terms”, normally
                alphabetical and drawn from the IEEE Taxonomy where possible{" "}
                <Cite n={6} />. Do not simply repeat title words, because
                keywords exist to widen discoverability.
              </Check>
            </ul>

            <ArticleFigure
              src="/blogs/fig3.png"
              alt="Annotated first page of an IEEE paper"
              caption="Fig. 3. The first page of an IEEE paper, annotated."
            />

            <SubHeading>Highlights and Graphical Abstracts for Elsevier</SubHeading>

            <p className={`${P} mt-3`}>
              Many Elsevier journals ask for Highlights, which are three to five
              bullet points of no more than 85 characters each, including
              spaces. They should state results and not topics: “Pruning cuts
              inference latency by 38 percent” is useful, whereas “A study of
              network pruning” is not. A graphical abstract, when requested, is
              a single image that conveys the main message at a glance. Elsevier
              asks for a minimum of 531 by 1328 pixels (height by width), so
              that it stays legible at about 5 by 13 cm <Cite n={9} />. Check the
              journal page, because requirements differ between titles.
            </p>

            <SubHeading>Main Sections and Back Matter</SubHeading>

            <ul className={LIST}>
              {sections.map(([label, text]) => (
                <Check key={label}>
                  <strong className="text-slate-900">{label}</strong> {text}
                </Check>
              ))}
            </ul>

            <p className={`${P} mt-4`}>
              For a deeper look at what each section must contain, see our{" "}
              <Int href="/blog/q1-research-paper-structure">
                Q1 research paper structure blueprint
              </Int>
              . The back-matter statements follow the{" "}
              <Ext href="https://credit.niso.org/">CRediT taxonomy</Ext>, which
              assigns each author one or more of fourteen contributor roles.
            </p>

            {/* Step 3 */}
            <SectionHeading id="step-3" number="03">
              Mathematics, Equations and Units in LaTeX
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Use inline math for short symbols and simple definitions inside a
              sentence. Use display math for anything long, complex, or
              referenced later (Fig. 4). The{" "}
              <Ext href="https://ctan.org/pkg/amsmath">amsmath package</Ext>{" "}
              <Cite n={7} /> handles alignment and numbering, the{" "}
              <Ext href="https://ctan.org/pkg/bm">bm package</Ext>{" "}
              <Cite n={15} /> provides bold italic symbols, and{" "}
              <Ext href="https://ctan.org/pkg/siunitx">siunitx</Ext>{" "}
              <Cite n={8} /> keeps units consistent.
            </p>

            <CodeBlock
              label="LaTeX"
              code={`\\begin{equation}
  \\mathbf{y} = \\mathbf{H}\\mathbf{x} + \\mathbf{n},
  \\label{eq:model}
\\end{equation}
where $\\mathbf{H}$ is the channel matrix and $\\mathbf{n}$ is noise.
% Refer to it as \\eqref{eq:model}, which prints (1) automatically.`}
            />

            <ArticleFigure
              src="/blogs/fig4.png"
              alt="Display equation formatting example"
              caption={"Fig. 4. A display equation with its number, punctuation, and “where” line."}
            />

            <SubHeading>Rules for Clean Equations</SubHeading>

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">Treat equations as sentences.</strong>{" "}
                Place a comma or full stop after the equation according to the
                grammar, and begin the following “where” line in lowercase.
              </Check>
              <Check>
                <strong className="text-slate-900">Define every symbol.</strong>{" "}
                Introduce each symbol at first use with its meaning and, where
                relevant, its unit and dimension.
              </Check>
              <Check>
                <strong className="text-slate-900">Number what you cite.</strong>{" "}
                IEEE numbers equations sequentially through the paper. Elsevier
                journals accept the same, and section-based numbering through{" "}
                <InlineCode>{"\\numberwithin{equation}{section}"}</InlineCode>{" "}
                is acceptable only if the Guide for Authors permits it. Always
                cite with <InlineCode>{"\\eqref{...}"}</InlineCode>. IEEE style
                typically refers to an equation as (1), and writes “Equation
                (1)” at the start of a sentence.
              </Check>
              <Check>
                <strong className="text-slate-900">Never use eqnarray.</strong>{" "}
                It produces inconsistent spacing around relation symbols. Use
                the amsmath <InlineCode>align</InlineCode>,{" "}
                <InlineCode>gather</InlineCode>, <InlineCode>multline</InlineCode>{" "}
                and <InlineCode>split</InlineCode> environments instead.
              </Check>
            </ul>

            <SubHeading>Multi-Line Equations and Alignment</SubHeading>

            <p className={`${P} mt-3`}>
              Align related equations at the relation symbol with{" "}
              <InlineCode>align</InlineCode>. Each line receives its own number
              unless you suppress it with <InlineCode>{"\\notag"}</InlineCode>.
              Declare named operators such as{" "}
              <InlineCode>{"\\operatorname*{arg\\,min}"}</InlineCode> so that they
              print upright with correct spacing and place their limits beneath.
            </p>

            <CodeBlock label="LaTeX: aligned equations with a defined operator" code={alignCode} />

            <p className={P}>
              A single equation that is too long for a two-column IEEE column
              should be broken at a relation or an operator, and the second line
              should be indented. Use <InlineCode>split</InlineCode> inside an{" "}
              <InlineCode>equation</InlineCode> environment, so that the whole
              block gets one number:
            </p>

            <CodeBlock label="LaTeX: one number for a split equation" code={splitCode} />

            <SubHeading>How to Format Vectors, Matrices, and Symbols</SubHeading>

            <p className={`${P} mt-3`}>
              Choose one notation convention at the start and keep it. Bold
              Greek letters need <InlineCode>{"\\bm"}</InlineCode> or{" "}
              <InlineCode>{"\\boldsymbol"}</InlineCode> because{" "}
              <InlineCode>{"\\mathbf"}</InlineCode> leaves Greek unchanged.
            </p>

            <DataTable
              caption="Recommended notation styles and LaTeX commands"
              headers={["Object", "Style", "LaTeX"]}
              rows={symbols}
              minWidthClass="min-w-[560px]"
              monoColumn={2}
            />

            <SubHeading>Units and Numbers with siunitx</SubHeading>

            <p className={`${P} mt-3`}>
              Units are upright, separated from the number by a thin non-breaking
              space, and should never be typeset in math italics. The siunitx
              package does this automatically and also guarantees that “2.4 GHz”
              never splits across a line. Configure the package once in the
              preamble, and use the same commands everywhere:
            </p>

            <CodeBlock label="LaTeX: siunitx" code={siunitxCode} />

            <p className={P}>
              The package changed its interface in version 3, where{" "}
              <InlineCode>{"\\qty"}</InlineCode> and{" "}
              <InlineCode>{"\\qtyrange"}</InlineCode> are preferred, but the
              older <InlineCode>{"\\SI"}</InlineCode> and{" "}
              <InlineCode>{"\\SIrange"}</InlineCode> commands continue to work,
              so check which version your journal’s build system uses before
              you adopt the newer names. Dimensionless quantities, ratios and
              percentages should follow the same discipline: “5 percent” or
              “5 %” should be used consistently, never both.
            </p>

            {/* Step 4 */}
            <SectionHeading id="step-4" number="04">
              Figures, Fonts, and Tables for Journals
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Use vector formats (PDF or EPS) for plots, circuits, and block
              diagrams. Use TIFF or PNG for photos and microscopy, and follow the
              publisher’s artwork rules <Cite n={9} /> (Fig. 5). Raster figures
              should meet the target resolution at their final printed size, not
              at the size of your screen. Choose colours that remain readable
              for colour-blind readers <Cite n={10} />, avoid rainbow colour
              maps for continuous data <Cite n={14} />, and test every figure in
              greyscale. For plot-specific advice, see our{" "}
              <Int href="/blog/contour-visualizations">
                scientific visualization guide
              </Int>
              .
            </p>

            <ArticleFigure
              src="/blogs/fig5.png"
              alt="Low resolution versus vector image export"
              caption="Fig. 5. Same plot, same zoom: low-resolution raster versus a sharp export."
            />

            <SubHeading>Artwork Specifications at a Glance</SubHeading>

            <p className={`${P} mt-3`}>
              The values below summarise typical requirements. They differ
              between journals and years, so treat them as planning figures and
              confirm them in the publisher’s artwork instructions.
            </p>

            <DataTable
              caption="Typical artwork requirements for Elsevier and IEEE"
              headers={["Item", "Elsevier (typical)", "IEEE (typical)"]}
              rows={artwork}
              minWidthClass="min-w-[720px]"
            />

            <SubHeading>Fonts, Type 3 Problems and PDF eXpress</SubHeading>

            <p className={`${P} mt-3`}>
              Many IEEE conferences require every PDF to pass through IEEE PDF
              eXpress <Cite n={13} />, which checks that fonts are embedded and
              that the page size and metadata comply. The most common failure
              comes from figures exported with Type 3 fonts. In Matplotlib you
              can avoid this by embedding TrueType fonts, and you can size the
              figure to the exact column width so that text stays legible after
              inclusion:
            </p>

            <CodeBlock label="Python (Matplotlib)" code={matplotlibCode} />

            <p className={P}>
              In MATLAB, export with <InlineCode>exportgraphics</InlineCode>{" "}
              using vector content type instead of saving a screenshot. In
              Origin, Visio and PowerPoint, export to PDF rather than PNG, and
              keep figure text at least 7 to 8 pt at its final size, so that
              axis labels do not become unreadable when the figure shrinks to a
              single column.
            </p>

            <SubHeading>Including Figures and Sub-Figures Correctly</SubHeading>

            <CodeBlock label="LaTeX: figure environment" code={figureCode} />

            <p className={P}>
              Placing <InlineCode>{"\\label"}</InlineCode> before{" "}
              <InlineCode>{"\\caption"}</InlineCode> is a classic error because
              the label then captures the previous counter value, and every
              cross-reference points at the wrong figure. With IEEEtran, use the
              subfig package configured with <InlineCode>caption=false</InlineCode>{" "}
              <Cite n={17} />, since the class has its own caption handling,
              while in elsarticle the subcaption package works well.
              Sub-figures should be labelled (a), (b), (c) and each referenced
              in the text, for example “Fig. 3(b)”.
            </p>

            <ArticleFigure
              src="/blogs/fig6.png"
              alt="Correct figure and table caption placements"
              caption="Fig. 6. Caption placement: below for figures, above for tables."
            />

            <SubHeading>Professional Tables with booktabs and siunitx</SubHeading>

            <p className={`${P} mt-3`}>
              Place captions below figures and above tables, and keep the
              numbering consistent throughout the manuscript (Fig. 6). The{" "}
              <Ext href="https://ctan.org/pkg/booktabs">booktabs package</Ext>{" "}
              <Cite n={11} /> gives clean, professional rules and removes the
              vertical lines that make tables look crowded. Combined with the
              siunitx <InlineCode>S</InlineCode> column type, numbers align on
              the decimal point automatically:
            </p>

            <CodeBlock label="LaTeX: publication-style table" code={tableCode} />

            <p className={P}>
              In IEEE two-column layouts, use <InlineCode>table*</InlineCode> for
              tables that must span both columns, and place them at the top of a
              page. Report the same number of decimal places within a column,
              bold only the best results, and explain what the bold means in the
              caption or a note.
            </p>

            {/* Step 5 */}
            <SectionHeading id="step-5" number="05">
              How to Manage Citations and References with BibTeX
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Keep every reference in one <InlineCode>.bib</InlineCode> file
              and let the style file format it. IEEE uses numerical brackets
              ordered by first citation (<InlineCode>[1], [2], [3]</InlineCode>),
              and the <InlineCode>cite</InlineCode> package compresses runs into
              [1]–[3]. Elsevier supports both numbered (
              <InlineCode>elsarticle-num</InlineCode>) and author-year (
              <InlineCode>elsarticle-harv</InlineCode>) styles, and the
              author-year family relies on natbib <Cite n={16} /> commands such
              as <InlineCode>{"\\citet"}</InlineCode> and{" "}
              <InlineCode>{"\\citep"}</InlineCode>.
            </p>

            <SubHeading>Writing Clean BibTeX Entries</SubHeading>

            <p className={`${P} mt-3`}>
              The entry below is illustrative. The key habits it demonstrates
              matter more than the content: protect capitalisation with braces,
              use <InlineCode>--</InlineCode> in page ranges, store the DOI, and
              use the IEEE journal abbreviation macros from{" "}
              <InlineCode>IEEEabrv.bib</InlineCode>, which ships with IEEEtran.
            </p>

            <CodeBlock label="BibTeX" code={bibCode} />

            <ul className={LIST}>
              <Check>
                <strong className="text-slate-900">Protect capitals.</strong>{" "}
                Without braces, BibTeX lowercases words such as MIMO, Rician or
                IEEE in sentence-case titles.
              </Check>
              <Check>
                <strong className="text-slate-900">Be consistent.</strong> Use
                one abbreviation policy for journal names across all entries,
                and complete author lists exactly as the style requires.
              </Check>
              <Check>
                <strong className="text-slate-900">Verify against the source.</strong>{" "}
                Reference-manager exports often contain wrong volumes, missing
                pages and duplicated entries, so check each one against the
                publisher’s page or the DOI record.
              </Check>
              <Check>
                <strong className="text-slate-900">Upload the .bbl.</strong>{" "}
                Submission systems frequently compile the LaTeX source without
                running BibTeX, so include the generated <InlineCode>.bbl</InlineCode>{" "}
                file that shares the main file’s base name.
              </Check>
            </ul>

            <p className={`${P} mt-4`}>
              Cite sources in the order your journal expects, avoid citing
              unpublished or unverifiable material when a peer-reviewed source
              exists, and make sure every entry in the list is cited in the text.
              Unreferenced entries and uncited claims are both easy for
              reviewers to spot.
            </p>

            {/* Step 6 */}
            <SectionHeading id="step-6" number="06">
              Diagnosing LaTeX Errors Before You Submit
            </SectionHeading>

            <p className={`${P} mt-4`}>
              A paper that compiles on your laptop can still fail on a publisher’s
              server, which is usually a Linux machine with a clean TeX
              installation. Build from a clean folder, read the log rather than
              only the PDF, and fix the first error before looking at later ones,
              since a single missing brace can create dozens of follow-on
              messages. The table below lists the messages that most often
              appear in pre-submission builds.
            </p>

            <DataTable
              caption="Frequent LaTeX messages, likely causes and fixes"
              headers={["Message or symptom", "Typical cause", "Fix"]}
              rows={errors}
              minWidthClass="min-w-[760px]"
            />

            <SubHeading>A Five-Minute Preflight Routine</SubHeading>

            <p className={`${P} mt-3`}>
              Run the following commands on the final archive. They give you
              the same information that an editorial assistant or an automated
              checker will see, and they take less than five minutes:
            </p>

            <CodeBlock label="Shell" code={preflightCode} />

            <p className={P}>
              If <InlineCode>pdffonts</InlineCode> lists any font as not
              embedded, or if it lists any Type 3 font, re-export the figures that
              contain them. If <InlineCode>pdfimages -list</InlineCode> shows a
              raster figure with a low ppi value, replace it with a vector
              version or re-render it at a higher resolution. Finally, delete
              auxiliary files, compile once more from scratch, and confirm that
              the page count and layout match the template’s expectations.
            </p>

            {/* Common mistakes */}
            <SectionHeading id="common-mistakes">
              Common Manuscript Formatting Mistakes to Avoid
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Several recurring issues cause technical-check rejections. Review
              the following points before you upload, and use them as a
              checklist for your co-authors as well.
            </p>

            <ol className="mt-5 space-y-2.5">
              {mistakes.map(([title, text], index) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600"
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm leading-[1.8] text-slate-700">
                    <strong className="text-slate-900">{title}</strong> {text}
                  </span>
                </li>
              ))}
            </ol>

            {/* Final checklist */}
            <SectionHeading id="checklist">
              Final Pre-Submission Formatting Checklist
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your manuscript, use this checklist to evaluate
              its overall quality and technical consistency. If you have not
              yet chosen a journal, our guide to{" "}
              <Int href="/blog/fast-review-q1-q2-journals">
                finding fast-review Q1/Q2 journals
              </Int>{" "}
              can help.
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
              Frequently Asked Questions About Elsevier and IEEE Manuscript Formatting
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
              on structure, literature reviews, visualization and more, or read
              our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
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
                Conclusion: Format Once, Format Correctly
              </h2>
              <p className={`${P} mt-3`}>
                Good formatting will not rescue a weak paper, but poor
                formatting can slow down a strong one. The most reliable
                strategy is to invest an hour at the start of a project: pick
                the correct class and options, define your notation, set up
                siunitx and booktabs, adopt a figure export recipe that embeds
                fonts, and keep a clean BibTeX database. Every later revision
                then costs minutes instead of days.
              </p>
              <p className={`${P} mt-3`}>
                Finish every submission with the same discipline: build from a
                clean folder, read the log, inspect the fonts and images, and
                compare the result with the Guide for Authors line by line. Do
                that consistently and you can spend your energy on the science,
                which is what reviewers are meant to evaluate.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need help formatting your manuscript for Elsevier or IEEE?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid helps researchers prepare templates, equations,
                  figures and references so submissions pass the technical
                  check. Explore our academic services or keep learning in the
                  Knowledge Library.
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
                Templates, package versions and author guidelines are updated
                regularly, and the figures quoted here are typical values.
                Always confirm requirements on the journal’s own website before
                submitting.
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