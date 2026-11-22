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

const SLUG = "/blog/best-ai-tools-for-literature-review";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE = "Best AI Tools for Literature Review in 2026 (Beyond Connected Papers)";
const DESCRIPTION =
  "The best AI tools for literature review in 2026, beyond Connected Papers: how to choose by job, write search queries, chase citations, screen and extract with checks, test a tool with a pilot, and report AI use responsibly.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI tools for literature review",
    "best AI tools for literature review",
    "Connected Papers alternatives",
    "AI literature review tools 2026",
    "ResearchRabbit vs Litmaps",
    "Elicit vs Consensus",
    "Undermind deep search",
    "AI-assisted systematic review",
    "citation chasing snowballing",
    "citation mapping tools",
    "responsible AI in evidence synthesis",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-22T00:00:00Z",
    modifiedTime: "2026-11-22T00:00:00Z",
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
    q: "What are the best AI tools for literature review in 2026?",
    a: "There is no single best tool, because tools do different jobs. AI search tools such as Undermind, Consensus, Google Scholar Labs and Semantic Scholar help you find papers. Citation mapping tools such as ResearchRabbit, Litmaps and Inciteful help you explore a field. Elicit and scite help with extraction and citation checking, and Rayyan, ASReview and Zotero support screening and reference management. Choose by the job, then verify the output.",
  },
  {
    q: "What are good alternatives to Connected Papers?",
    a: "Common alternatives are ResearchRabbit, Litmaps, Inciteful, Local Citation Network, Open Knowledge Maps and VOSviewer. They differ in what they start from (seed papers, keyword queries or exported database records), what they show, and whether they monitor new publications. Check each tool's current plan and data source before relying on it.",
  },
  {
    q: "How many AI tools should I use for one literature review?",
    a: "Usually two or three, each for a different job: one for discovery, one for exploring citations, and a reference manager to keep everything organized. Adding more tools increases the work of verifying, logging and reporting, so add a tool only when it solves a problem you actually have.",
  },
  {
    q: "Can AI do a systematic review for me?",
    a: "No. Cochrane, the Campbell Collaboration, JBI and the Collaboration for Environmental Evidence state that evidence synthesists remain ultimately responsible for their work, that AI should be used with human oversight, and that its use must be transparently reported. AI can speed up parts of the process, but it should not replace a documented, reproducible method.",
  },
  {
    q: "Are AI literature review tools accurate?",
    a: "Evidence is mixed and tool-specific. A 2026 feasibility study found that Elicit can support data extraction as a secondary extractor with human oversight, while earlier studies pointed to limits in the accuracy and repeatability of AI-based searching and screening. Test any tool on a topic where you already know the answer before you trust it.",
  },
  {
    q: "Is Elicit or Consensus better?",
    a: "They are built for different jobs. Consensus is mainly an AI search engine that summarizes what papers say about a question, while Elicit is designed around finding papers and extracting structured data into tables. Many researchers use one for orientation and the other for extraction, and verify both against the original papers.",
  },
  {
    q: "Do AI tools invent references?",
    a: "General chat models can, because they generate plausible text instead of retrieving verified records. Academic search tools usually link to real papers, but library guides note that a tool can still describe a paper incorrectly. Always open the paper, confirm the DOI and check that the claim matches the text.",
  },
  {
    q: "Can I use AI to write my literature review section?",
    a: "Use it for support, not for the thinking. AI can help you explain a method, restructure your own notes or improve the language of text you wrote, but the synthesis, the critical comparison and the research gap are your contribution and your responsibility. Many journals require disclosure of AI use and do not accept AI tools as authors, so follow the target journal's policy.",
  },
  {
    q: "What is the difference between a literature review and a systematic review?",
    a: "A narrative literature review summarizes and discusses the literature on a topic, usually with a flexible method. A systematic review follows a predefined, documented protocol with explicit search, screening and appraisal steps so that another team could repeat it, and is normally reported with PRISMA. AI tools can support both, but a systematic review demands stricter documentation of how they were used.",
  },
  {
    q: "Do I have to disclose that I used AI in my literature review?",
    a: "Most journals and evidence-synthesis organizations expect transparent reporting of AI use, and policies differ between publishers. Record the tool, its version or mode, the date, the query or prompt and what you used the output for, and follow the author guidelines of your target journal.",
  },
  {
    q: "Are there free AI tools for literature review?",
    a: "Several are free or open source, including Semantic Scholar, Inciteful, Local Citation Network, Open Knowledge Maps, ASReview and Zotero. Others offer free tiers whose limits and features change often, so check current terms. Free access does not remove the need for verification and documentation.",
  },
  {
    q: "How do I test whether an AI search tool is good enough for my topic?",
    a: "Build a small gold-standard list of papers you already know are relevant, run the tool twice with the same query, and measure how many known papers it retrieves and how consistent the two runs are. Also spot-check a random sample of the returned papers to confirm that each one exists and is described correctly. Section 10 of this guide includes a short script.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      articleSection: "AI & Research Tools",
      datePublished: "2026-11-22",
      dateModified: "2026-11-22",
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
          name: "Best AI Tools for Literature Review",
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
  { id: "choose", title: "How to Choose the Right Tool" },
  { id: "beyond-cp", title: "Why Look Beyond Connected Papers" },
  { id: "ai-search", title: "AI Search and Deep Search Tools" },
  { id: "mapping", title: "Citation Mapping Alternatives" },
  { id: "extraction", title: "Extraction and Claim Checking" },
  { id: "screening", title: "Screening and Reference Management" },
  { id: "assistants", title: "General AI Assistants" },
  { id: "comparison", title: "Tools at a Glance" },
  { id: "workflow", title: "A Practical Workflow" },
  { id: "pilot", title: "Test a Tool Before You Trust It" },
  { id: "responsible", title: "Responsible Use and Reporting" },
  { id: "method", title: "How This Guide Was Compiled" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Protocols, PRISMA screening, synthesis and LaTeX submission.",
  },
  {
    href: "/blog/ai-in-scientific-research",
    title: "AI in Scientific Research",
    text: "Applications, tools, PINNs and the limits of AI in research.",
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
];

/* ------------------------------------------------------------------ */
/* Code and text samples                                               */
/* ------------------------------------------------------------------ */

const booleanExample = `(("physics-informed neural network*" OR PINN*)
  AND ("heat transfer" OR "thermal" OR "conduction")
  AND (surrogate OR "reduced-order" OR simulation))

Concept 1: method        -> synonyms joined with OR
Concept 2: application   -> synonyms joined with OR
Concept 3: purpose       -> synonyms joined with OR
Concepts are joined with AND. Quotation marks keep phrases together, and * truncates
word endings. Field tags, truncation and proximity operators differ between databases,
so translate and test the string in each one, and save the exact version you ran.`;

const queryExamples = `Weak:    "AI in healthcare"
Better:  "How accurate are deep-learning models for detecting diabetic retinopathy
          in fundus images compared with ophthalmologists?"

Weak:    "heat transfer neural networks"
Better:  "Which physics-informed neural network designs reduce error in transient
          heat conduction problems with sparse sensor data?"

A good question names the problem or system, the method, the outcome or metric,
and the conditions (population, data type, time period).`;

const snowballCode = `import requests

BASE = "https://api.openalex.org"
MAILTO = "you@university.edu"        # identifies you to the API (see the OpenAlex docs)

def get_work(doi):
    r = requests.get(f"{BASE}/works/https://doi.org/{doi}",
                     params={"mailto": MAILTO}, timeout=30)
    r.raise_for_status()
    return r.json()

def short_id(work):
    return work["id"].rsplit("/", 1)[-1]          # e.g. W1234567890

def forward_citations(work_id):
    """Papers that cite the seed (forward snowballing)."""
    out, cursor = [], "*"
    while cursor:
        r = requests.get(f"{BASE}/works",
                         params={"filter": f"cites:{work_id}", "per-page": 200,
                                 "cursor": cursor, "mailto": MAILTO}, timeout=30)
        r.raise_for_status()
        data = r.json()
        out += [(w["id"], w.get("doi"), w.get("display_name"), w.get("publication_year"))
                for w in data["results"]]
        cursor = data["meta"].get("next_cursor")
    return out

seed = get_work("10.xxxx/seed-paper-doi")           # replace with a real seed DOI
backward = seed.get("referenced_works", [])          # backward snowballing: its reference list
forward = forward_citations(short_id(seed))
print(len(backward), "references,", len(forward), "citing papers")
# Not run for this article. Test on one seed first and check the current
# OpenAlex documentation, then log the date and the seed list for reproducibility.`;

const dedupCode = `import re
import pandas as pd

def norm_doi(value):
    if pd.isna(value):
        return None
    doi = re.sub(r"^https?://(dx\\.)?doi\\.org/", "", str(value).strip().lower())
    return doi or None

def norm_title(value):
    text = re.sub(r"[^a-z0-9 ]", "", str(value).lower())
    return re.sub(r"\\s+", " ", text).strip()

df = pd.read_csv("records.csv")                      # columns: title, year, doi
df["doi_n"] = df["doi"].map(norm_doi)
df["title_n"] = df["title"].map(norm_title)

has_doi = df["doi_n"].notna()
df = df[~(has_doi & df.duplicated("doi_n", keep="first"))]          # same DOI
df = df[~df.duplicated(["title_n", "year"], keep="first")]          # same title and year
print(len(df), "records after de-duplication")
# Keep the removed records in a separate file, and review borderline matches by hand.`;

const assistantPrompts = `Safe pattern (you supply the text, the assistant works only on it):
"Summarize the method in the abstract below in three bullet points. Use only
information that appears in the text, and say 'not stated' if something is missing.
[paste abstract]"

Safe pattern (checking your own writing):
"Rewrite the paragraph below for clarity without changing its meaning or adding
new claims or references. [paste your paragraph]"

Unsafe pattern:
"Give me 10 recent references on topic X with DOIs."
(Generated references can look complete and not exist.)`;

const pilotCode = `import pandas as pd

def load(path):
    dois = pd.read_csv(path)["doi"].dropna().astype(str)
    return {d.strip().lower().replace("https://doi.org/", "") for d in dois}

gold = load("gold_standard.csv")   # papers you know are relevant
run1 = load("tool_run1.csv")       # first run of the tool
run2 = load("tool_run2.csv")       # second run, same query

recall = len(gold & run1) / len(gold)
repeatability = len(run1 & run2) / len(run1 | run2)
print(f"recall = {recall:.2f}, repeatability = {repeatability:.2f}")
print("missed:", sorted(gold - run1))`;

const logCode = `date,tool,mode_or_version,query_or_prompt,filters,records_returned,records_kept,purpose,verified_by
<YYYY-MM-DD>,<tool name>,<mode / version>,"<exact query or prompt>",<filters>,<n>,<n>,<what you used it for>,<initials>`;

const disclosureStatement = `AI use statement (adapt to the journal's wording):
We used [tool name, version or mode] on [date] to [purpose, for example: discover candidate
papers for the search described in Section X]. The queries are provided in [supplement or
repository]. All records were screened by [n] reviewers, all included studies were read in
full, and all extracted data were checked against the source papers. No AI tool was used to
generate references, and the authors take full responsibility for the content.`;

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

function Equation({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 flex items-center gap-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
      <div className="mx-auto whitespace-nowrap font-serif text-[16px] italic text-slate-900">
        {children}
      </div>
      <span className="shrink-0 text-sm text-slate-500">({label})</span>
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
  rows: React.ReactNode[][];
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse text-left text-sm">
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
                key={rowIndex}
                className={`border-b border-slate-100 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3.5 align-top leading-relaxed ${
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
  const quickRows = [
    ["I need to find papers on a hard question", "An AI deep search tool, plus a documented database search", "Section 03"],
    ["I have one or two good papers and want more like them", "A citation map, and backward and forward citation chasing", "Sections 04 and 04.1"],
    ["I need to pull data from many papers into a table", "An extraction tool as a draft, with every value checked", "Section 05"],
    ["I have hundreds or thousands of records to screen", "A screening tool with a justified stopping rule", "Section 06"],
    ["I want to know whether a finding has been challenged", "A citation-context tool, then read the citing sentences", "Section 05"],
    ["I want help explaining or editing my own text", "A general assistant, used only on text you supply", "Section 07"],
  ];

  const categoryRows = [
    ["Finders (AI search)", "Find candidate papers for a question", "Undermind, Consensus, Google Scholar Labs, Semantic Scholar", "Ranking is hard to inspect and can vary between runs"],
    ["Connectors (citation maps)", "Explore a field from seed papers", "ResearchRabbit, Litmaps, Inciteful, Connected Papers", "Depends on seed papers and on open citation metadata"],
    ["Extractors and analysts", "Pull structured data, check how claims were received", "Elicit, scite", "Extracted values and labels can be wrong"],
    ["Screeners", "Prioritize and screen records", "Rayyan, ASReview", "Needs justified stopping rules and human decisions"],
    ["Reference managers", "Store, deduplicate and cite", "Zotero and similar tools", "Metadata errors are copied into your bibliography"],
    ["General assistants", "Explain, code and edit language", "ChatGPT, Claude", "Can invent facts and references"],
  ];

  const sourceRows = [
    ["OpenAlex", "Open index of scholarly works, authors and venues, with an open API", "Free and reusable, but metadata completeness varies by field and record"],
    ["Semantic Scholar", "Large academic graph with an open data platform", "Widely used as the data source behind other tools"],
    ["Crossref", "DOI registration metadata supplied by publishers", "Not a search engine for content, but useful for checking DOIs and references"],
    ["PubMed and MEDLINE", "Biomedical and life-science literature", "Strong subject indexing, narrow outside health and life sciences"],
    ["Scopus and Web of Science", "Curated, subscription citation databases", "Selective coverage, advanced search syntax, standard for documented searches"],
    ["Google Scholar", "Very broad web index including grey literature", "Hard to reproduce and limited export, so log the date and query"],
    ["Preprint servers (arXiv, medRxiv and others)", "Early versions of papers", "Not peer reviewed, so check whether a published version exists"],
  ];

  const searchRows = [
    ["Undermind", "Deep search agent", "Hard questions where recall matters", "Slower, and the process is not fully transparent"],
    ["Consensus", "AI search engine with quick and deep modes", "Orienting yourself on a question and seeing how studies line up", "Summaries can misdescribe a paper, so read the source"],
    ["Google Scholar Labs", "Experimental AI feature in Google Scholar", "Detailed questions viewed from several angles", "Experimental, and results may not be reproducible"],
    ["Semantic Scholar", "Free academic search with AI-assisted features", "Everyday discovery and as a data source for other tools", "Check any automatic summary against the abstract"],
  ];

  const mappingRows = [
    ["ResearchRabbit", "Collections of papers you build", "Network and timeline views, similar and earlier work", "Plans and limits change, so check current terms"],
    ["Litmaps", "Seed papers and searches", "Citation maps on a timeline, alerts for new papers", "Monitoring features may depend on the plan"],
    ["Inciteful", "One or two seed papers", "Graph of related papers, links between two papers", "Coverage depends on the underlying data"],
    ["Local Citation Network", "Seed papers", "Free, open-source network from open data", "Less polished interface than commercial tools"],
    ["Connected Papers", "One seed paper", "Similarity graph around that paper", "One paper at a time, limited free use"],
    ["Open Knowledge Maps", "A keyword query", "Topic map of related documents", "A keyword map, not a citation map"],
    ["VOSviewer", "Records exported from databases", "Keyword and co-citation maps of large corpora", "Needs clean exported data and some setup"],
  ];

  const extractionErrorRows = [
    ["Wrong value", "A sample size or effect size copied from the wrong table", "Compare the value with the table or paragraph in the full text"],
    ["Wrong unit or scale", "Reporting a percentage as a fraction, or mixing units", "Check units and definitions in the methods section"],
    ["Wrong population or condition", "Extracting a subgroup result as the overall result", "Check which group the number refers to"],
    ["Missing information presented as a value", "A guessed value where the paper does not report one", "Require “not reported” instead of an estimate"],
    ["Misread claim", "A limitation or hypothesis described as a finding", "Read the sentence around the extracted statement"],
  ];

  const prismaRows = [
    ["Records identified from databases", "980", "Searches in the chosen databases, with dates and strings logged"],
    ["Records identified from other sources", "260", "Citation chasing, AI-assisted discovery, grey literature"],
    ["Duplicates removed", "310", "Automatic matching plus manual review of borderline cases"],
    ["Records screened (title and abstract)", "930", "1,240 identified minus 310 duplicates"],
    ["Records excluded at title and abstract", "840", "Screened by reviewers, with disagreements resolved"],
    ["Reports assessed in full text", "90", "930 screened minus 840 excluded"],
    ["Reports excluded, with reasons", "52", "Recorded with a reason for each"],
    ["Studies included", "38", "90 assessed minus 52 excluded"],
  ];

  const glanceRows = [
    ["Undermind", "Finder", "Deep search on a hard question", "Verify every paper and summary"],
    ["Consensus", "Finder", "Quick orientation and Consensus Meter overview", "Read the studies behind each statement"],
    ["Google Scholar Labs", "Finder", "Multi-angle questions on Scholar's index", "Experimental; record date and query"],
    ["Semantic Scholar", "Finder", "Free discovery and citation graph", "Summaries are not a substitute for reading"],
    ["ResearchRabbit", "Connector", "Exploring around a set of papers", "Seed-dependent; check current plan"],
    ["Litmaps", "Connector", "Tracking a topic over time", "Map quality depends on metadata"],
    ["Inciteful", "Connector", "Finding connections between papers", "Not a documented search"],
    ["Connected Papers", "Connector", "Fast map around one paper", "Limited free use"],
    ["Elicit", "Extractor", "Draft extraction into tables", "Check each value in the full text"],
    ["scite", "Analyst", "How later papers cite a claim", "Labels are model-generated"],
    ["Rayyan", "Screener", "Collaborative screening", "Decisions must stay human"],
    ["ASReview", "Screener", "Prioritizing likely relevant records", "Stopping rule must be justified"],
    ["Zotero", "Reference manager", "Organizing and citing sources", "Fix metadata errors by hand"],
    ["ChatGPT and Claude", "Assistant", "Explaining, coding, language editing", "Never trust generated references"],
  ];

  const workflowRows = [
    ["Quick orientation (a few days)", "Semantic Scholar, Consensus, one citation map", "Read two or three review articles first, then log what you used"],
    ["Thesis or PhD chapter (weeks)", "AI deep search, citation maps, documented database search, Zotero", "Keep a protocol and a search log; verify all key papers"],
    ["Systematic review (months)", "Documented Boolean search, Rayyan or ASReview, optional Elicit draft extraction", "Follow PRISMA and the RAISE-based position statement"],
  ];

  const references: React.ReactNode[] = [
    <>
      “Position statement on artificial intelligence (AI) use in evidence synthesis across Cochrane, the Campbell Collaboration, JBI, and the Collaboration for Environmental Evidence 2025,” <i>JBI Evidence Synthesis</i>, 2025.{" "}
      <Ext href="https://doi.org/10.11124/JBIES-25-00480">doi:10.11124/JBIES-25-00480</Ext>
    </>,
    <>
      “Using Elicit AI research assistant for data extraction in systematic reviews: A feasibility study across environmental and life sciences,” <i>Research Synthesis Methods</i>, 2026.{" "}
      <Ext href="https://doi.org/10.1017/rsm.2026.10080">doi:10.1017/rsm.2026.10080</Ext>
    </>,
    <>
      “Evaluation of Elicit as an adjunct search, screening, and data extraction tool for systematic reviews,” medRxiv preprint, 2026 (not peer reviewed).{" "}
      <Ext href="https://doi.org/10.64898/2026.10.02.26364621">doi:10.64898/2026.10.02.26364621</Ext>
    </>,
    <>
      M. J. Page et al., “The PRISMA 2020 statement: An updated guideline for reporting systematic reviews,” <i>BMJ</i>, vol. 372, Art. no. n71, 2021.{" "}
      <Ext href="https://doi.org/10.1136/bmj.n71">doi:10.1136/bmj.n71</Ext>
    </>,
    <>
      M. L. Rethlefsen et al., “PRISMA-S: An extension to the PRISMA statement for reporting literature searches in systematic reviews,” <i>Systematic Reviews</i>, vol. 10, Art. no. 39, 2021.{" "}
      <Ext href="https://doi.org/10.1186/s13643-020-01542-z">doi:10.1186/s13643-020-01542-z</Ext>
    </>,
    <>
      M. Gusenbauer and N. R. Haddaway, “Which academic search systems are suitable for systematic reviews or meta-analyses?” <i>Research Synthesis Methods</i>, vol. 11, no. 2, pp. 181–217, 2020.{" "}
      <Ext href="https://doi.org/10.1002/jrsm.1378">doi:10.1002/jrsm.1378</Ext>
    </>,
    <>
      R. Kinney et al., “The Semantic Scholar Open Data Platform,” arXiv preprint, 2023.{" "}
      <Ext href="https://arxiv.org/abs/2301.10140">arXiv:2301.10140</Ext>
    </>,
    <>
      J. M. Nicholson et al., “scite: A smart citation index that displays the context of citations and classifies their intent using deep learning,” <i>Quantitative Science Studies</i>, vol. 2, no. 3, pp. 882–898, 2021.{" "}
      <Ext href="https://doi.org/10.1162/qss_a_00146">doi:10.1162/qss_a_00146</Ext>
    </>,
    <>
      M. Ouzzani, H. Hammady, Z. Fedorowicz, and A. Elmagarmid, “Rayyan: A web and mobile app for systematic reviews,” <i>Systematic Reviews</i>, vol. 5, Art. no. 210, 2016.{" "}
      <Ext href="https://doi.org/10.1186/s13643-016-0384-4">doi:10.1186/s13643-016-0384-4</Ext>
    </>,
    <>
      R. van de Schoot et al., “An open source machine learning framework for efficient and transparent systematic reviews,” <i>Nature Machine Intelligence</i>, vol. 3, pp. 125–133, 2021.{" "}
      <Ext href="https://doi.org/10.1038/s42256-020-00287-7">doi:10.1038/s42256-020-00287-7</Ext>
    </>,
    <>
      J. Priem, H. Piwowar, and R. Orr, “OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts,” arXiv preprint, 2022.{" "}
      <Ext href="https://arxiv.org/abs/2205.01833">arXiv:2205.01833</Ext>
    </>,
    <>
      N. J. van Eck and L. Waltman, “Software survey: VOSviewer, a computer program for bibliometric mapping,” <i>Scientometrics</i>, vol. 84, no. 2, pp. 523–538, 2010.{" "}
      <Ext href="https://doi.org/10.1007/s11192-009-0146-3">doi:10.1007/s11192-009-0146-3</Ext>
    </>,
    <>
      Z. Ji et al., “Survey of hallucination in natural language generation,” <i>ACM Computing Surveys</i>, vol. 55, no. 12, Art. no. 248, 2023.{" "}
      <Ext href="https://doi.org/10.1145/3571730">doi:10.1145/3571730</Ext>
    </>,
    <>
      C. Wohlin, “Guidelines for snowballing in systematic literature studies and a replication in software engineering,” in <i>Proc. 18th Int. Conf. Eval. Assessment Softw. Eng. (EASE)</i>, 2014, Art. no. 38.{" "}
      <Ext href="https://doi.org/10.1145/2601248.2601268">doi:10.1145/2601248.2601268</Ext>
    </>,
    <>
      D. Matthews, “Drowning in the literature? These smart software tools can help,” <i>Nature</i>, vol. 597, pp. 141–142, 2021.{" "}
      <Ext href="https://doi.org/10.1038/d41586-021-02346-4">doi:10.1038/d41586-021-02346-4</Ext>
    </>,
    <>
      Google, “Google Scholar Labs,” Google blog.{" "}
      <Ext href="https://blog.google/products-and-platforms/products/education/google-scholar-labs/">blog.google</Ext>
    </>,
    <>
      SMU Libraries, “Lost in the AI search maze? Here&apos;s your guide to choosing the right tool (updated September 2026).”{" "}
      <Ext href="https://library.smu.edu.sg/topics-insights/lost-ai-search-maze-heres-your-guide-choosing-right-tool-updated-september-2026">library.smu.edu.sg</Ext>
    </>,
    <>
      A. Shiri, “Beyond search: How AI agents are redefining research,” <i>Times Higher Education Campus</i>, 13 Jan. 2026.{" "}
      <Ext href="https://www.timeshighereducation.com/campus/beyond-search-how-ai-agents-are-redefining-research">timeshighereducation.com</Ext>
    </>,
    <>
      HKUST Library, “Literature discovery through citation chaining and mapping: Comparison of mapping tools.”{" "}
      <Ext href="https://libguides.hkust.edu.hk/citation-chaining/citation-mapping-tools-comparison">libguides.hkust.edu.hk</Ext>
    </>,
    <>
      Elicit, “How we evaluated Elicit Systematic Review” (vendor-reported evaluation).{" "}
      <Ext href="https://elicit.com/blog/how-we-evaluated-elicit-systematic-review">elicit.com</Ext>
    </>,
    <>
      J. Cohen, “A coefficient of agreement for nominal scales,” <i>Educational and Psychological Measurement</i>, vol. 20, no. 1, pp. 37–46, 1960.{" "}
      <Ext href="https://doi.org/10.1177/001316446002000104">doi:10.1177/001316446002000104</Ext>
    </>,
    <>
      M. L. McHugh, “Interrater reliability: The kappa statistic,” <i>Biochemia Medica</i>, vol. 22, no. 3, pp. 276–282, 2012.{" "}
      <Ext href="https://doi.org/10.11613/BM.2012.031">doi:10.11613/BM.2012.031</Ext>
    </>,
    <>
      A. M. Cohen, W. R. Hersh, K. Peterson, and P.-Y. Yen, “Reducing workload in systematic review preparation using automated citation classification,” <i>Journal of the American Medical Informatics Association</i>, vol. 13, no. 2, pp. 206–219, 2006.{" "}
      <Ext href="https://doi.org/10.1197/jamia.M1929">doi:10.1197/jamia.M1929</Ext>
    </>,
    <>
      W. M. Bramer, D. Giustini, G. B. de Jonge, L. Holland, and T. Bekhuis, “De-duplication of database search results for systematic reviews in EndNote,” <i>Journal of the Medical Library Association</i>, vol. 104, no. 3, pp. 240–243, 2016.{" "}
      <Ext href="https://doi.org/10.3163/1536-5050.104.3.014">doi:10.3163/1536-5050.104.3.014</Ext>
    </>,
    <>
      W. M. Bramer, M. L. Rethlefsen, J. Kleijnen, and O. H. Franco, “Optimal database combinations for literature searches in systematic reviews: A prospective exploratory study,” <i>Systematic Reviews</i>, vol. 6, Art. no. 245, 2017.{" "}
      <Ext href="https://doi.org/10.1186/s13643-017-0644-y">doi:10.1186/s13643-017-0644-y</Ext>
    </>,
    <>
      J. McGowan et al., “PRESS Peer Review of Electronic Search Strategies: 2015 guideline statement,” <i>Journal of Clinical Epidemiology</i>, vol. 75, pp. 40–46, 2016.{" "}
      <Ext href="https://doi.org/10.1016/j.jclinepi.2016.01.021">doi:10.1016/j.jclinepi.2016.01.021</Ext>
    </>,
    <>
      OpenAlex, “OpenAlex technical documentation.”{" "}
      <Ext href="https://docs.openalex.org/">docs.openalex.org</Ext>
    </>,
    <>
      Committee on Publication Ethics (COPE), “Authorship and AI tools,” COPE position statement.{" "}
      <Ext href="https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools">publicationethics.org</Ext>
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
            <Link href="/" className="transition hover:text-blue-800">Home</Link>
            <Link href="/#services" className="transition hover:text-blue-800">Support Scope</Link>
            <Link href="/#library" className="transition hover:text-blue-800">Insights</Link>
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
                AI Tools for Literature Review
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                AI &amp; Research Tools
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-22">November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                28 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              Best AI Tools for Literature Review in 2026 (Beyond Connected Papers)
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical guide for PhD students and researchers: which AI
              tools do which job, how to write queries and chase citations,
              how to screen and extract with checks, how to test a tool
              before you trust it, and how to report AI use responsibly.
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
                  <p className="mt-0.5 text-xs text-slate-500">Research Methods and AI Tools</p>
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
                Introduction
              </h2>
              <div className="space-y-4 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Citation maps changed how many researchers start a review,
                  and Connected Papers became the tool people name first{" "}
                  <Cite n={15} />. In 2026 the field is wider. There are{" "}
                  <strong>AI tools for literature review</strong> that run deep
                  searches for several minutes, extract data into tables,
                  classify how later papers cite a claim, and prioritize
                  records during screening. There is also new formal guidance
                  from evidence-synthesis organizations on using them
                  responsibly <Cite n={1} />.
                </p>
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  This guide does not crown a single winner, because the tools
                  do different jobs. It groups them by job, compares the main
                  options, shows how to test a tool on your own topic, and
                  explains what you must verify and report. One point first: we
                  compiled this guide from documentation, library guides and
                  published evaluations, not from our own head-to-head tests,
                  and we say so where it matters.
                </p>
              </div>

              <h3 className="mt-7 font-serif text-xl font-bold text-slate-950">
                Quick answer: which kind of tool for which need
              </h3>

              <DataTable
                caption="Quick guide matching a need to a kind of tool and the section that covers it"
                headers={["If you need to", "Use", "Read"]}
                rows={quickRows}
              />
            </section>

            {/* Choose */}
            <SectionHeading id="choose" number="01">
              How to Choose the Right AI Tool for Literature Review
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Start from the job, not the brand. Fig. 1 groups the tools into
              six categories, and the table that follows lists what each
              category is for and its most common risk.
            </p>

            <ArticleFigure
              src="/blogs/fig58.png"
              alt="Six categories of AI literature review tools: finders, connectors, extractors, screeners, reference managers and general assistants"
              caption="Fig. 1. A toolkit view of AI literature review tools. Each category does a different job."
              priority
            />

            <DataTable
              caption="Categories of AI literature review tools, their jobs, examples and risks"
              headers={["Category", "Job", "Examples", "Main risk"]}
              rows={categoryRows}
            />

            <p className={P}>
              Before adopting any tool, ask five questions. They matter more
              than feature lists, which change every few months.
            </p>

            <CheckList>
              <Check>
                <strong>What does it search?</strong> Many AI search tools rely
                on open indexes such as Semantic Scholar <Cite n={7} /> and
                OpenAlex <Cite n={11} />, and reports suggest several popular
                tools share this data <Cite n={18} />. If your field depends on
                books, grey literature or paywalled journals, expect gaps{" "}
                <Cite n={17} />.
              </Check>
              <Check>
                <strong>Can you see how it ranks and filters?</strong>{" "}
                Transparency determines whether you can describe the method in
                a paper.
              </Check>
              <Check>
                <strong>Can you export and log the results?</strong> Without
                exportable records, the search cannot be reproduced.
              </Check>
              <Check>
                <strong>Does it link to the full text?</strong> You need the
                original paper to verify a claim.
              </Check>
              <Check>
                <strong>What happens to the files you upload?</strong> Do not
                upload unpublished manuscripts or confidential material unless
                the terms clearly allow it.
              </Check>
            </CheckList>

            <SubHeading>The data sources behind the tools</SubHeading>

            <p className={`${P} mt-3`}>
              An AI tool can only find what its index contains, so know the
              sources behind it. No single source covers everything, and
              comparative studies of search systems show that coverage and
              search functionality differ widely, which is why guidance on
              systematic searching recommends combining several sources{" "}
              <Cite n={6} /> <Cite n={25} />.
            </p>

            <DataTable
              caption="Common data sources behind literature tools, what they cover and cautions"
              headers={["Source", "What it is", "What to remember"]}
              rows={sourceRows}
            />

            {/* Beyond CP */}
            <SectionHeading id="beyond-cp" number="02">
              Why Look Beyond Connected Papers
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Connected Papers builds a visual graph around one seed paper,
              arranging papers by similarity measures called co-citation and
              bibliographic coupling <Cite n={19} />. It remains a quick way to
              see the neighbourhood of a single paper. A literature review
              needs more than that, for four reasons (Fig. 2).
            </p>

            <ArticleFigure
              src="/blogs/fig59.png"
              alt="Diagram showing how citation maps are built from seed papers and the typical limits of citation mapping"
              caption="Fig. 2. How citation maps work and what they typically miss."
            />

            <CheckList>
              <Check>
                <strong>It depends on metadata.</strong> Citation mapping tools
                rely on open citation data, so a paper can be absent simply
                because its records are incomplete <Cite n={19} />.
              </Check>
              <Check>
                <strong>It depends on your seed.</strong> A poor seed paper
                gives a poor map, and a map built from one paper reflects one
                part of a field.
              </Check>
              <Check>
                <strong>It is not a search protocol.</strong> A graph cannot
                replace documented database searches, which is what a
                reviewer or editor expects <Cite n={5} />.
              </Check>
              <Check>
                <strong>It does not screen or extract.</strong> After
                discovery you still need to select, read, appraise and
                synthesize the papers.
              </Check>
            </CheckList>

            <p className={P}>
              Citation chasing itself is a sound technique, known in review
              methodology as snowballing <Cite n={14} />. The tools below
              either automate it better, search in a different way, or cover
              the stages that come after discovery.
            </p>

            {/* AI search */}
            <SectionHeading id="ai-search" number="03">
              AI Search and Deep Search Tools
            </SectionHeading>

            <p className={`${P} mt-4`}>
              A newer group of tools goes beyond keyword matching. Library
              guides distinguish quick AI search, which answers in seconds,
              from &quot;deep search&quot;, which can run for minutes to find
              more papers <Cite n={17} />. Fig. 3 compares both with a
              conventional Boolean database search.
            </p>

            <ArticleFigure
              src="/blogs/fig60.png"
              alt="Qualitative comparison of Boolean database search, quick AI search and AI deep search on speed, transparency, reproducibility, best use and main risk"
              caption="Fig. 3. Three ways to search, compared qualitatively. Combine a documented Boolean search with AI deep search."
            />

            <DataTable
              caption="AI search tools compared by mode, best use and caution"
              headers={["Tool", "Mode", "Best for", "Main caution"]}
              rows={searchRows}
            />

            <SubHeading>Undermind</SubHeading>
            <p className={`${P} mt-3`}>
              Undermind is described as a deep search agent that mimics a human
              search by combining iterative semantic, keyword and citation
              searching, takes around eight to ten minutes per search, and
              estimates how exhaustive its search was <Cite n={18} />. A library
              guide notes that it offers only a deep-search mode, unlike
              Consensus, which also has a quick mode <Cite n={17} />. It is a
              strong candidate when recall on a difficult question matters.
            </p>

            <SubHeading>Consensus</SubHeading>
            <p className={`${P} mt-3`}>
              Consensus is an AI search engine that summarizes what papers say
              about a question. It is known for its Consensus Meter, which
              visualizes agreement between studies, and it offers a quick mode
              and a Deep Search mode <Cite n={17} />
              <Cite n={18} />. The same library guide offers an important
              warning for every tool in this group: such tools generally have
              safeguards so that a cited paper exists, but they cannot ensure
              that the description of the paper is correct <Cite n={17} />.
            </p>

            <SubHeading>Google Scholar Labs and Semantic Scholar</SubHeading>
            <p className={`${P} mt-3`}>
              Google describes Scholar Labs as an experimental feature that
              explores how generative AI can help answer detailed scholarly
              questions <Cite n={16} />. Because it sits on Google Scholar,
              apply the usual caution that Scholar results are hard to
              reproduce, and record the date and query <Cite n={6} />.
              Semantic Scholar is a free academic search platform run by the
              Allen Institute for AI, with an open data platform behind it{" "}
              <Cite n={7} />. It is also the data source behind several other
              tools <Cite n={18} />.
            </p>

            <SubHeading>Write queries that AI search tools can answer</SubHeading>
            <p className={`${P} mt-3`}>
              AI search tools respond to questions better than to bare keywords,
              and the quality of the question limits the quality of the results.
              A good question names the problem or system, the method, the
              outcome or metric and the conditions. Compare these examples:
            </p>

            <CodeBlock label="Weak and better questions (examples)" code={queryExamples} />

            <p className={P}>
              Keep a conventional Boolean search at the core of any review that
              must be reproducible. Group each concept with synonyms joined by
              OR, join the concepts with AND, and have a colleague or librarian
              review the strategy before you run it <Cite n={27} />. Different
              databases use different syntax, so translate and test the string
              in each.
            </p>

            <CodeBlock label="Boolean search strategy (example structure)" code={booleanExample} />

            {/* Mapping */}
            <SectionHeading id="mapping" number="04">
              Citation Mapping Alternatives to Connected Papers
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Several tools build maps like Connected Papers does, with
              different starting points and extra features. Library comparison
              guides list ResearchRabbit, Litmaps, Inciteful and others as the
              main alternatives <Cite n={19} />, and Fig. 4 summarizes what
              each starts from and what it gives you.
            </p>

            <ArticleFigure
              src="/blogs/fig61.png"
              alt="Table of citation and topic mapping tools showing what each tool starts from and what it produces"
              caption="Fig. 4. Citation and topic mapping tools beyond Connected Papers. Plans and limits change, so check current documentation."
            />

            <DataTable
              caption="Citation and topic mapping tools: starting point, output and caution"
              headers={["Tool", "Starts from", "Gives you", "Caution"]}
              rows={mappingRows}
            />

            <p className={P}>
              A few practical notes. ResearchRabbit builds recommendations from
              collections you create, and independent reviews have described it
              as powerful but with a learning curve. Litmaps is notable for
              timeline maps and for monitoring new publications on a topic.
              Inciteful can show connections between two papers, which helps
              when you are bridging two fields. Local Citation Network is a free,
              open-source option. Open Knowledge Maps produces topic maps from a
              keyword query, which is useful for orientation but is not a
              citation map. VOSviewer works from records you export from
              databases and suits large corpora <Cite n={12} />. Because the
              features and pricing of these tools change often, confirm the
              current terms on each official site before you plan around them.
            </p>

            <SubHeading>04.1 Citation chasing step by step</SubHeading>

            <p className={`${P} mt-3`}>
              Whatever tool you use, the underlying method is snowballing{" "}
              <Cite n={14} />. Backward snowballing reads the reference lists of
              your key papers, and forward snowballing finds the papers that
              cite them. Done systematically, it finds relevant work that
              keyword searches miss, and it is easy to document.
            </p>

            <CheckList>
              <Check>
                <strong>Choose a seed set.</strong> Start with five to ten
                papers that are clearly relevant, preferably recent reviews and
                well-cited studies, and record them.
              </Check>
              <Check>
                <strong>Go backward.</strong> Collect the references of each
                seed paper and screen their titles and abstracts.
              </Check>
              <Check>
                <strong>Go forward.</strong> Collect the papers that cite each
                seed paper, using a citation index or an open source such as
                OpenAlex <Cite n={11} />.
              </Check>
              <Check>
                <strong>Repeat with the new includes.</strong> Treat relevant
                papers you find as new seeds, and stop when a round produces no
                new relevant papers.
              </Check>
              <Check>
                <strong>Log everything.</strong> Record the seed list, the date,
                the source used and the number of papers found at each round, so
                that the process can be reported <Cite n={5} />.
              </Check>
            </CheckList>

            <p className={`${P} mt-4`}>
              If you are comfortable with a little code, the script below shows
              how to retrieve the reference list and the citing papers of a
              seed from the open OpenAlex API <Cite n={26} />. We have not run
              it for this article, so test it on one seed first and check the
              current documentation before relying on it.
            </p>

            <CodeBlock label="Python: backward and forward snowballing with OpenAlex" code={snowballCode} />

            {/* Extraction */}
            <SectionHeading id="extraction" number="05">
              Extraction and Claim-Checking Tools: Elicit and scite
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Elicit is designed around finding papers, screening them and
              extracting structured data into tables, and it lets you upload
              your own papers <Cite n={18} />. This is where evidence matters
              most, because an extraction error silently enters your review.
            </p>

            <CheckList>
              <Check>
                <strong>Evidence for extraction is cautiously positive.</strong>{" "}
                A 2026 feasibility study in <i>Research Synthesis Methods</i>{" "}
                concluded that Elicit can support systematic reviews as a
                secondary extractor when paired with human oversight{" "}
                <Cite n={2} />.
              </Check>
              <Check>
                <strong>Evidence for searching and screening is mixed.</strong>{" "}
                The same study notes that earlier case studies pointed to
                limits in the accuracy and repeatability of Elicit-based
                searching and screening <Cite n={2} />. A 2026 preprint that
                tried to replicate one published review reported poor overlap
                at the search stage, finding 158 of 5,285 studies{" "}
                <Cite n={3} />. That is one review in one field and has not
                been peer reviewed, so treat it as a warning to test, not as a
                general verdict.
              </Check>
              <Check>
                <strong>Vendor evaluations are vendor claims.</strong> Elicit
                publishes its own evaluation results <Cite n={20} />. Read them
                as useful but not independent, and run your own pilot (see
                Section 10).
              </Check>
            </CheckList>

            <p className={P}>
              scite takes a different approach. It classifies the context of
              citations as supporting, contrasting or mentioning using deep
              learning <Cite n={8} />, which helps you see whether a finding
              has been challenged. Those labels are model-generated, so read the
              citing sentence before you rely on a classification.
            </p>

            <SubHeading>How to check AI-extracted data</SubHeading>

            <p className={`${P} mt-3`}>
              Treat extracted values as a draft made by a fast but fallible
              assistant. Define each field precisely before extraction (the
              unit, the population, the time point), require “not reported”
              instead of a guess, and have a person compare each value with the
              full text. In a systematic review the safest design is two
              independent extractors, with the AI as at most one of them under
              human oversight, which is how the feasibility study above framed
              it <Cite n={2} />. If you cannot check every value, audit a random
              sample and report the error rate you found.
            </p>

            <DataTable
              caption="Typical extraction errors and how to detect them"
              headers={["Error type", "Example", "How to check"]}
              rows={extractionErrorRows}
            />

            {/* Screening */}
            <SectionHeading id="screening" number="06">
              Screening and Reference Management Tools
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Screening is where most of the manual effort in a systematic
              review lies. Rayyan is a web and mobile app for collaborative
              screening <Cite n={9} />. ASReview is an open-source framework in
              which a model learns from your include and exclude decisions and
              prioritizes the records most likely to be relevant, so you meet
              relevant papers earlier <Cite n={10} />. Prioritization does not
              remove the human decision. You must still define and justify a
              stopping rule and report it.
            </p>

            <p className={P}>
              A reference manager such as Zotero keeps the whole corpus
              organized, removes duplicates and builds your bibliography.
              Metadata errors in imported records are copied into your
              citations, so spot-check titles, years and DOIs. Our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
              </Int>{" "}
              explains deduplication, PRISMA reporting and agreement
              measurement in detail.
            </p>

            <SubHeading>De-duplication before screening</SubHeading>

            <p className={`${P} mt-3`}>
              Combining several databases produces duplicates, and every
              duplicate wastes screening time and can distort counts in your
              flow diagram. Matching on DOI first and then on a normalised title
              and year catches most of them, and borderline matches should still
              be reviewed by hand <Cite n={24} />.
            </p>

            <CodeBlock label="Python (pandas): simple de-duplication by DOI, then title and year" code={dedupCode} />

            <SubHeading>Measure agreement between reviewers</SubHeading>

            <p className={`${P} mt-3`}>
              When two people screen the same records, report how well they
              agree. Cohen&apos;s kappa corrects the observed agreement for the
              agreement expected by chance <Cite n={21} />:
            </p>

            <Equation label="1">
              κ = (p<sub>o</sub> − p<sub>e</sub>) / (1 − p<sub>e</sub>)
            </Equation>

            <p className={P}>
              Here p<sub>o</sub> is the observed proportion of agreement and
              p<sub>e</sub> is the proportion expected by chance. Consider a
              hypothetical example in which two reviewers screen 200 records.
              They both include 30 and both exclude 150, and they disagree on
              20 records (10 in each direction). Then p<sub>o</sub> = (30 +
              150) / 200 = 0.90. Each reviewer included 40 records, so
              p<sub>e</sub> = 0.2 × 0.2 + 0.8 × 0.8 = 0.68, and κ = (0.90 −
              0.68) / (1 − 0.68) ≈ 0.69. How to interpret a value depends on the
              field, and simple verbal labels are only rough guides{" "}
              <Cite n={22} />, so report the number, resolve disagreements by
              discussion or a third reviewer, and say how you did it.
            </p>

            <SubHeading>Stopping rules for AI-prioritized screening</SubHeading>

            <p className={`${P} mt-3`}>
              Prioritization tools let you read the most promising records
              first, but you must decide when to stop. A stopping rule that is
              stated in advance, such as a defined number of consecutive
              irrelevant records after a minimum number screened, is more
              defensible than stopping when you feel tired. Work-saved-over-sampling
              measures how much screening effort a method saves at a target
              recall, for example 95 percent: WSS@95 = (TN + FN) / N − 0.05,
              where N is the number of records and TN and FN are the records
              left unscreened that were truly irrelevant and truly relevant
              respectively <Cite n={23} />. Report the rule, the metric and any
              validation you did, because the saved effort is only real if the
              recall holds.
            </p>

            {/* Assistants */}
            <SectionHeading id="assistants" number="07">
              General AI Assistants: ChatGPT and Claude
            </SectionHeading>

            <p className={`${P} mt-4`}>
              General assistants are excellent at explaining a method,
              restructuring your notes, writing code to process records, and
              improving the language of text you wrote. They are not
              citation databases. They generate plausible text, which means a
              reference can look complete and still not exist, or not support
              the claim <Cite n={13} />. Use them on documents you supply, never
              as a source of references, and never upload confidential
              manuscripts without checking the provider&apos;s terms and your
              publisher&apos;s rules.
            </p>

            <p className={P}>
              The difference between a safe and an unsafe use is whether the
              assistant works only on text you provide. Ask it to stay within
              the text, to say when something is missing, and check its output
              against the source:
            </p>

            <CodeBlock label="Safe and unsafe prompt patterns (examples)" code={assistantPrompts} />

            {/* Comparison */}
            <SectionHeading id="comparison" number="08">
              Tools at a Glance
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Fig. 5 maps the tools to the stages of a review and states what
              to verify at each stage. The table that follows gives a one-line
              summary of every tool discussed.
            </p>

            <ArticleFigure
              src="/blogs/fig62.png"
              alt="Table mapping literature review stages to AI-assisted tools and to the sources that must always be used to verify them"
              caption="Fig. 5. Which tool for which stage of the review, and what to verify against."
            />

            <DataTable
              caption="Summary of the AI literature review tools discussed"
              headers={["Tool", "Category", "Best for", "Key caution"]}
              rows={glanceRows}
            />

            {/* Workflow */}
            <SectionHeading id="workflow" number="09">
              A Practical Workflow That Combines the Tools
            </SectionHeading>

            <p className={`${P} mt-4`}>
              The strongest workflows mix AI discovery with documented,
              conventional methods. Fig. 6 shows an eight-step process in
              which every stage has a verification step.
            </p>

            <ArticleFigure
              src="/blogs/fig63.png"
              alt="Eight-step AI-assisted literature review workflow from question and protocol to writing and disclosure of AI use"
              caption="Fig. 6. An eight-step AI-assisted literature review workflow with verification built in."
            />

            <DataTable
              caption="Suggested tool combinations by type of review"
              headers={["Type of review", "Suggested tools", "Rule of thumb"]}
              rows={workflowRows}
            />

            <CheckList>
              <Check>
                <strong>Seed from review articles.</strong> Pick five to ten key
                papers from recent reviews, because a good seed set improves
                every citation-based tool.
              </Check>
              <Check>
                <strong>Keep the core search conventional.</strong> Use a
                documented Boolean search in at least two databases, and use AI
                tools to widen it, not to replace it <Cite n={6} />.
              </Check>
              <Check>
                <strong>Treat AI extraction as a draft.</strong> Check every
                value that goes into a results table against the full text.
              </Check>
              <Check>
                <strong>Synthesize yourself.</strong> Themes, taxonomies and
                research gaps are your contribution. Our{" "}
                <Int href="/blog/q1-research-paper-structure">
                  Q1 paper structure guide
                </Int>{" "}
                shows how to turn them into a manuscript.
              </Check>
            </CheckList>

            <SubHeading>Keep your counts consistent: a PRISMA-style example</SubHeading>

            <p className={`${P} mt-3`}>
              Whatever mix of tools you use, the numbers in your flow diagram
              must add up from one stage to the next <Cite n={4} />. The
              hypothetical example below shows how a review that combines
              database searches and AI-assisted discovery can be reported. The
              figures are invented for illustration.
            </p>

            <DataTable
              caption="Hypothetical PRISMA-style flow of record counts for a review using database and AI-assisted searches"
              headers={["Stage", "Records", "Note"]}
              rows={prismaRows}
            />

            {/* Pilot */}
            <SectionHeading id="pilot" number="10">
              Test a Tool Before You Trust It
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Published evaluations differ by tool, topic and date, so the most
              reliable evidence is a small pilot on your own topic (Fig. 7).
              Build a gold-standard list of papers you already know are
              relevant, run the tool twice with the same query, and measure two
              things: how many known papers it finds, and how consistent it is
              between runs.
            </p>

            <ArticleFigure
              src="/blogs/fig64.png"
              alt="Pilot evaluation pipeline for an AI literature tool: gold standard, two runs, recall and repeatability, spot checks and a decision on the tool's role"
              caption="Fig. 7. A small pilot evaluation for any AI literature tool."
            />

            <Equation label="2">
              recall = |gold ∩ run<sub>1</sub>| / |gold|
            </Equation>

            <Equation label="3">
              repeatability = |run<sub>1</sub> ∩ run<sub>2</sub>| / |run<sub>1</sub> ∪ run<sub>2</sub>|
            </Equation>

            <p className={P}>
              Recall tells you how much of what you already know the tool
              retrieves. Repeatability (the overlap between two runs) tells you
              whether the process is stable enough to describe in a method
              section. The script below computes both from three CSV files
              that each contain a doi column.
            </p>

            <CodeBlock label="Python: pilot evaluation of an AI search tool" code={pilotCode} />

            <p className={P}>
              We checked the script on small sample files. A gold standard of
              four papers, a first run that retrieved two of them, and two runs
              that shared two of four distinct papers gave recall = 0.50 and
              repeatability = 0.50, and listed the two missed papers. Use a gold
              standard that is large and varied enough to mean something for
              your topic, and build it independently of the tool you test, for
              example from a recent review or from papers your supervisor
              considers essential.
            </p>

            <Callout title="Interpret the numbers carefully">
              A high recall on a small gold standard does not prove a tool is
              exhaustive, and a low repeatability does not make it useless: it
              may still be good for discovery. Also spot-check a random sample
              of returned papers to confirm that each exists and that the tool
              describes it correctly.
            </Callout>

            {/* Responsible */}
            <SectionHeading id="responsible" number="11">
              Responsible Use and Reporting
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Cochrane, the Campbell Collaboration, JBI and the Collaboration
              for Environmental Evidence published a joint position statement
              based on the RAISE recommendations. In summary, evidence
              synthesists are ultimately responsible for their work, AI should
              be used with human oversight, and any AI use that makes or
              suggests judgements should be transparently reported{" "}
              <Cite n={1} />. Although written for evidence synthesis, the
              principles suit any rigorous literature review.
            </p>

            <ArticleFigure
              src="/blogs/fig65.png"
              alt="Verification ladder from an AI-suggested paper or claim up to citing the primary source and logging the AI use"
              caption="Fig. 8. The verification ladder: never cite what you have not checked in the source."
            />

            <CheckList>
              <Check>
                <strong>Verify before you cite.</strong> Confirm that the paper
                exists, read the relevant section, and check that the claim
                matches the text (Fig. 8).
              </Check>
              <Check>
                <strong>Report your search.</strong> Follow PRISMA 2020{" "}
                <Cite n={4} /> and PRISMA-S <Cite n={5} />, including any
                AI-assisted searches, with the tool, date and query.
              </Check>
              <Check>
                <strong>Log all AI use.</strong> A simple log makes disclosure
                easy and protects you if a reviewer asks questions.
              </Check>
              <Check>
                <strong>Follow the journal&apos;s policy.</strong> Disclosure
                rules differ, so read the author guidelines of your target
                journal before submission. Our guide to{" "}
                <Int href="/blog/paper-rejection-reasons">
                  common reasons for rejection
                </Int>{" "}
                lists issues editors flag early.
              </Check>
              <Check>
                <strong>Protect confidential material.</strong> Keep
                unpublished data and peer-review material out of external AI
                services, and check the terms before uploading copyrighted PDFs.
              </Check>
              <Check>
                <strong>Never list an AI tool as an author.</strong> Journals
                that follow COPE guidance do not accept AI tools as authors,
                because authors must be accountable for the work{" "}
                <Cite n={29} />.
              </Check>
            </CheckList>

            <CodeBlock label="CSV template: AI-use and search log" code={logCode} />

            <p className={P}>
              When the journal asks for a statement, a short and specific
              disclosure is better than a vague one. Adapt the wording below to
              the journal&apos;s own format:
            </p>

            <CodeBlock label="Template: AI-use disclosure statement" code={disclosureStatement} />

            <p className={P}>
              For a broader view of where AI helps and where it fails across
              the research process, see our article on{" "}
              <Int href="/blog/ai-in-scientific-research">
                AI in scientific research
              </Int>
              .
            </p>

            {/* Method */}
            <SectionHeading id="method" number="12">
              How This Guide Was Compiled, and Its Limits
            </SectionHeading>

            <p className={`${P} mt-4`}>
              We based this guide on vendor and project documentation, university
              library guides, peer-reviewed studies, preprints and position
              statements, listed in the references. We did not run a controlled
              comparison of the tools. Features, data sources and pricing
              change quickly, so we avoided quoting plans or prices. Where a
              source is a vendor claim or a preprint, we have labelled it. The
              code in this guide that we ran (the de-duplication logic, the
              agreement calculation and the pilot evaluation) was checked on small
              example data, while the OpenAlex script was not run and should be
              tested before use. If you find that a description is out of date,
              please tell us through the <Int href="/contact">contact page</Int>,
              and check the official site of each tool before you decide.
            </p>

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About AI Tools for Literature Review
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
                Conclusion: Match the Tool to the Job, Then Verify
              </h2>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                Going beyond Connected Papers does not mean replacing one tool
                with another. It means building a small toolkit: an AI deep
                search for recall, a citation map for exploration, an extraction
                or screening aid for the heavy lifting, and a reference manager
                to keep everything organized. Around that toolkit sit the
                habits that make a review trustworthy: a documented protocol,
                a pilot test of each tool, verification against the original
                papers, and transparent reporting of AI use. Tools will keep
                changing; those habits will not.
              </p>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                A sensible next step is small. Pick one real question, run a
                documented search, add one AI discovery tool and one citation
                chasing round, pilot the tool against papers you already know,
                and write the AI-use log as you go. By the end you will have a
                reproducible method, not just a list of papers.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Continue building your research workflow
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  Explore our guides on systematic reviews, AI in research and
                  manuscript preparation, or contact us with a question about
                  your workflow.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Browse the Knowledge Library
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
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Homepage
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
                Tool features, data sources, plans and policies change often.
                Confirm current details on each tool&apos;s official site and in
                your target journal&apos;s author guidelines before you rely on
                them.
              </p>
            </section>
          </article>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block" aria-label="Article sidebar">
            <div className="sticky top-24 space-y-5">
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