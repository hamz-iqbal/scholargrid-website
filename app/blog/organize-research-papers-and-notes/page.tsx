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

const SLUG = "/blog/organize-research-papers-and-notes";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "How to Organize Research Papers and Notes: A Practical Workflow for Scholars";
const DESCRIPTION =
  "A tool-independent five-stage workflow to organize research papers and notes: reference manager setup, triage, three-pass reading, note templates, folders, backups and a weekly review.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "how to organize research papers",
    "research organization system",
    "reference manager",
    "research notes template",
    "literature notes",
    "note-taking system for researchers",
    "PDF management",
    "academic workflow",
    "thesis organization",
    "file naming convention research",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-28T00:00:00Z",
    modifiedTime: "2026-11-28T00:00:00Z",
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
    q: "Should I take notes by hand or on a computer?",
    a: "Choose the one you will actually keep up. The research on this question is mixed (Mueller & Oppenheimer, 2014; Morehead et al., 2019). What matters more is that your notes are processed in your own words. If you write by hand, scan or photograph the notes and link them to the paper’s record so they remain searchable.",
  },
  {
    q: "How many papers should I keep in my library?",
    a: "As many as are relevant. A library is a catalogue, not a to-do list. Reading statuses keep a large library manageable by separating papers you have read from papers you merely own.",
  },
  {
    q: "What should I do with papers I will never read?",
    a: "Tag them “Not relevant” or archive them rather than deleting them. A record of what you excluded, and why, helps you avoid rediscovering the same paper repeatedly and supports your search documentation.",
  },
  {
    q: "Is it worth switching systems mid-project?",
    a: "Usually not, unless your current one is actively failing. Switching costs time and often loses annotations or links. If you do switch, export your library first, migrate one project as a test, and keep the old system read-only until you are sure nothing was lost.",
  },
  {
    q: "Which reference manager is the best?",
    a: "No tool is best for everyone. Compare candidates on automatic metadata import, PDF and annotation handling, word-processor integration, export options and sharing, then test each on your own papers before committing.",
  },
  {
    q: "How often should I review my research library?",
    a: "Weekly. A short routine of about three hours at most keeps your inbox empty, your notes current and your backups verified. Reduce the time if your workload is light, but protect the slot in your calendar.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: "How to Organize Research Papers and Notes",
      description: DESCRIPTION,
      datePublished: "2026-11-28",
      dateModified: "2026-11-28",
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
          name: "How to Organize Research Papers and Notes",
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
  { id: "failure-points", title: "Where Scholars Lose Track" },
  { id: "workflow", title: "The Five-Stage Workflow" },
  { id: "stage-1", title: "Stage 1: Capture in One Library" },
  { id: "stage-2", title: "Stage 2: Triage Before Reading" },
  { id: "stage-3", title: "Stage 3: Read and Annotate" },
  { id: "stage-4", title: "Stage 4: Write Reusable Notes" },
  { id: "stage-5", title: "Stage 5: Folders, Naming, Backup" },
  { id: "weekly-review", title: "The Weekly Review" },
  { id: "citations", title: "Managing Citations While Writing" },
  { id: "collaboration", title: "Supervisors and Co-Authors" },
  { id: "common-mistakes", title: "Common Mistakes" },
  { id: "thirty-day-plan", title: "A 30-Day Setup Plan" },
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
    href: "/blog/identify-a-real-research-gap",
    title: "How to Identify a Real Research Gap",
    text: "Turn your organised literature into a defensible gap.",
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
          {number}
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
  const managerQuestions = [
    ["Does it import metadata automatically?", "Manual typing causes errors and wastes time", "Import ten papers from your usual databases and count the fixes needed"],
    ["Does it handle PDFs and annotations?", "You want reading and notes linked to the record", "Attach a PDF, highlight, then search the annotation text"],
    ["Does it work with your word processor?", "Citation errors usually appear at the writing stage", "Insert five citations and generate a bibliography in your required style"],
    ["Can you export your library?", "Protects you from lock-in if you change tools", "Export to a standard format and re-import it elsewhere"],
    ["Does it support sharing?", "Supervisors and co-authors may need access", "Create a shared collection with a colleague"],
  ];

  const threePass = [
    ["First", "5–10 minutes", "Read title, abstract, introduction, headings and conclusion", "Category, relevance and a keep/discard decision"],
    ["Second", "Up to about an hour", "Read with care, study figures, ignore proof details", "A summary you could explain to someone else"],
    ["Third", "Several hours for papers that matter most", "Re-create the argument and test its assumptions", "Detailed critique, strengths, weaknesses, ideas for your work"],
  ];

  const noteTemplate = [
    ["Citation and DOI", "Full reference or citation key, plus the DOI, so you can find the paper again"],
    ["Research question / aim", "The question the authors are trying to answer, in one sentence"],
    ["Theory or framework", "Concepts, models or theories the paper uses"],
    ["Method and sample", "Design, participants or data, size, setting, time frame"],
    ["Key findings", "The two or three results that matter, with page numbers"],
    ["Limitations", "What the authors admit and what you notice yourself"],
    ["My critique", "Is the evidence convincing? What is missing? Why do you trust or doubt it?"],
    ["Link to my project", "How the paper supports, challenges or shapes your own question"],
    ["Tags / related notes", "Keywords and links to other notes and papers"],
  ];

  const fileNames = [
    ["Draft chapter", "Chapter2_final_FINAL2.docx", "2026-03-14_Thesis_Ch2_LitReview_v03.docx"],
    ["Literature note", "notes on paper.docx", "Smith2021_SleepVideo_LitNote.md"],
    ["Supervisor meeting", "meeting.docx", "2026-02-27_SupervisorMeeting_Actions.docx"],
    ["Data export", "data (1).csv", "Survey_Wave1_Raw_2026-01-12.csv"],
  ];

  const mistakes = [
    ["Saving PDFs in several folders and on several devices", "Keep all papers in one managed library with one backup"],
    ["Highlighting without commenting", "Add a margin comment in your own words to every key highlight"],
    ["Building an elaborate system before reading anything", "Start with the minimum (inbox, statuses, one note template) and refine"],
    ["Keeping notes in many different apps", "Choose one primary notes location and link to it from everywhere else"],
    ["Copying text into notes without marking it", "Use quotation marks, page numbers and a “Quote” label"],
    ["Never reviewing or cleaning the library", "Schedule the weekly review and protect it in your calendar"],
    ["Changing tools every few months", "Switch only for a clear, tested reason, and export your library first"],
  ];

  const plan = [
    ["Week 1: Foundation", "Choose and install a reference manager. Create the Inbox and status tags. Gather scattered PDFs into it. Set up the project folder structure."],
    ["Week 2: Triage and reading", "Triage the entire inbox. Move relevant papers to “To Read.” Practise first-pass reading on ten papers and record decisions."],
    ["Week 3: Notes", "Adopt the literature note template. Write notes for your five most important papers. Start two or three idea notes and link them."],
    ["Week 4: Safety and routine", "Set up automatic backup and test a restore. Adopt the file naming convention. Run your first 170-minute weekly review."],
  ];

  const checklist = [
    "All papers enter through one reference manager inbox.",
    "Every record has correct metadata and a DOI.",
    "Each paper has exactly one reading status.",
    "I use a three-pass approach and give most papers only a first pass.",
    "Annotations carry comments in my own words and page numbers.",
    "Each paper I read in depth has a literature note using the same template.",
    "Idea notes link to papers and to each other.",
    "My project has a consistent folder structure and file naming convention.",
    "Backups follow the three-copy rule and I have tested a restore.",
    "I run a weekly review and keep a record of what I changed.",
  ];

  const referenceList: React.ReactNode[] = [
    <>
      J. Dunlosky, K. A. Rawson, E. J. Marsh, M. J. Nathan, and D. T.
      Willingham, “Improving students’ learning with effective learning
      techniques: Promising directions from cognitive and educational
      psychology,” <i>Psychological Science in the Public Interest</i>, vol.
      14, no. 1, pp. 4–58, 2013.{" "}
      <Ext href="https://doi.org/10.1177/1529100612453266">
        doi:10.1177/1529100612453266
      </Ext>
    </>,
    <>
      R. Gilmour and L. Cobus-Kuo, “Reference management software: A
      comparative analysis of four products,”{" "}
      <i>Issues in Science and Technology Librarianship</i>, no. 66, 2011.{" "}
      <Ext href="https://doi.org/10.29173/istl1521">doi:10.29173/istl1521</Ext>
    </>,
    <>
      S. Keshav, “How to read a paper,”{" "}
      <i>ACM SIGCOMM Computer Communication Review</i>, vol. 37, no. 3, pp.
      83–84, 2007.{" "}
      <Ext href="https://doi.org/10.1145/1273445.1273458">
        doi:10.1145/1273445.1273458
      </Ext>
    </>,
    <>
      K. Morehead, J. Dunlosky, and K. A. Rawson, “How much mightier is the
      pen than the keyboard for note-taking? A replication and extension of
      Mueller and Oppenheimer (2014),” <i>Educational Psychology Review</i>,
      vol. 31, pp. 753–780, 2019.{" "}
      <Ext href="https://doi.org/10.1007/s10648-019-09468-2">
        doi:10.1007/s10648-019-09468-2
      </Ext>
    </>,
    <>
      P. A. Mueller and D. M. Oppenheimer, “The pen is mightier than the
      keyboard: Advantages of longhand over laptop note taking,”{" "}
      <i>Psychological Science</i>, vol. 25, no. 6, pp. 1159–1168, 2014.{" "}
      <Ext href="https://doi.org/10.1177/0956797614524581">
        doi:10.1177/0956797614524581
      </Ext>
    </>,
    <>
      M. J. Page et al., “The PRISMA 2020 statement: An updated guideline for
      reporting systematic reviews,” <i>BMJ</i>, vol. 372, Art. no. n71,
      2021.{" "}
      <Ext href="https://doi.org/10.1136/bmj.n71">doi:10.1136/bmj.n71</Ext>
    </>,
    <>
      H. L. Roediger and J. D. Karpicke, “Test-enhanced learning: Taking
      memory tests improves long-term retention,”{" "}
      <i>Psychological Science</i>, vol. 17, no. 3, pp. 249–255, 2006.{" "}
      <Ext href="https://doi.org/10.1111/j.1467-9280.2006.01693.x">
        doi:10.1111/j.1467-9280.2006.01693.x
      </Ext>
    </>,
    <>
      G. K. Sandve, A. Nekrutenko, J. Taylor, and E. Hovig, “Ten simple rules
      for reproducible computational research,”{" "}
      <i>PLoS Computational Biology</i>, vol. 9, no. 10, Art. no. e1003285,
      2013.{" "}
      <Ext href="https://doi.org/10.1371/journal.pcbi.1003285">
        doi:10.1371/journal.pcbi.1003285
      </Ext>
    </>,
    <>
      M. D. Wilkinson et al., “The FAIR Guiding Principles for scientific
      data management and stewardship,” <i>Scientific Data</i>, vol. 3, Art.
      no. 160018, 2016.{" "}
      <Ext href="https://doi.org/10.1038/sdata.2016.18">
        doi:10.1038/sdata.2016.18
      </Ext>
    </>,
    <>
      G. Wilson, J. Bryan, K. Cranston, J. Kitzes, L. Nederbragt, and T. K.
      Teal, “Good enough practices in scientific computing,”{" "}
      <i>PLoS Computational Biology</i>, vol. 13, no. 6, Art. no. e1005510,
      2017.{" "}
      <Ext href="https://doi.org/10.1371/journal.pcbi.1005510">
        doi:10.1371/journal.pcbi.1005510
      </Ext>
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Research Workflow and Publishing Insights
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
                Research Workflow
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Research Workflow
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-28">November 2026</time>
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                18 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              How to Organize Research Papers and Notes: A Practical Workflow
              for Scholars
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A complete, tool-independent guide for students, PhD candidates
              and academics: capture papers in one library, triage and read
              efficiently, write reusable notes, structure your files, back
              them up and keep the whole system alive with a weekly review.
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
                    Research Workflow and Academic Productivity
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
                Introduction: Why Organizing Research Papers and Notes Matters
              </h2>
              <div className="rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Every scholar eventually has the same experience. You
                  remember reading a paper that perfectly supports your
                  argument, but you cannot recall the author, the journal or
                  where you saved it. You search a folder called
                  “Papers_New_Final2,” find four versions of the same PDF,
                  and discover that your notes on it are scattered across a
                  notebook, a phone app or nowhere at all. An hour
                  disappears, and the paper is still missing.
                </p>
              </div>
            </section>

            <p className={`${P} mb-4`}>
              Disorganization is not a trivial inconvenience. It wastes
              valuable research time, increases the likelihood of citation
              errors, leads researchers to revisit papers they have already
              examined and, most importantly, makes it difficult to retrieve
              and build upon previously developed ideas. A well-designed{" "}
              <strong>research organization system</strong> addresses these
              problems. It allows you to locate papers quickly, retrieve
              relevant notes and move from reading to academic writing
              without repeatedly starting from scratch.
            </p>

            <p className={`${P} mb-5`}>
              This guide presents a complete, tool-independent workflow. It
              works whether you use{" "}
              <Ext href="https://www.zotero.org/">Zotero</Ext>,{" "}
              <Ext href="https://www.mendeley.com/">Mendeley</Ext>,{" "}
              <Ext href="https://endnote.com/">EndNote</Ext>,{" "}
              <Ext href="https://obsidian.md/">Obsidian</Ext>,{" "}
              <Ext href="https://www.notion.com/">Notion</Ext>, OneNote or a
              paper notebook. You will learn how to collect and organize
              research papers in one place, determine which papers deserve
              closer attention, annotate efficiently, prepare reusable
              research notes, structure project files, maintain reliable
              backups and review your system regularly. Each stage is
              straightforward on its own. Together, they provide a
              systematic approach that can scale from an initial literature
              review to a doctoral thesis. If you are at the very start of a
              review, read our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
              </Int>{" "}
              alongside this one.
            </p>

            {/* Failure points */}
            <SectionHeading id="failure-points">
              Where Scholars Lose Track: The Three Failure Points
            </SectionHeading>

            <SubHeading>Failure Point 1: Capture chaos</SubHeading>
            <p className={`${P} mt-3`}>
              Papers arrive from everywhere: database searches, email from
              supervisors, social media, citation chasing, conference
              handouts. When each arrives in a different place (downloads
              folder, desktop, messaging apps, browser bookmarks), your
              library has no single source of truth. You cannot trust any
              search because you cannot be sure it covers everything.
            </p>

            <SubHeading>Failure Point 2: Reading without recording</SubHeading>
            <p className={`${P} mt-3`}>
              Reading a paper and not capturing what you learned is the most
              expensive mistake in research. Without a record, you will
              reread the paper later, often more than once. Highlighting
              alone does not solve this. A page of yellow lines tells you
              what looked important at the time, not why, and not how it
              connects to your own question.
            </p>

            <SubHeading>Failure Point 3: Notes without synthesis</SubHeading>
            <p className={`${P} mt-3`}>
              Many scholars do write notes, but only as isolated summaries,
              one per paper, never connected to each other. When it is time
              to write a literature review, they face dozens of disconnected
              summaries and must rebuild the argument from scratch. The
              notes recorded information but did not build understanding.
            </p>

            <p className={`${P} mt-4`}>
              The workflow below addresses each failure point directly: a
              single capture point for the first, structured reading and
              annotation for the second, and layered, linked notes for the
              third.
            </p>

            {/* Workflow overview */}
            <SectionHeading id="workflow">
              The Five-Stage Workflow for Research Papers and Notes
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Fig. 1 shows the complete cycle. Every paper moves through the
              same five stages: capture, triage, read and annotate, write
              notes, and archive and review. Because the cycle repeats, the
              system gets more valuable over time. New papers connect to old
              notes, and each weekly review keeps the whole library
              trustworthy.
            </p>

            <ArticleFigure
              src="/blogs/fig70.png"
              alt="Cycle diagram of the five-stage workflow: capture, triage, read and annotate, write notes, archive and review"
              caption="Fig. 1. The five-stage workflow for organizing research papers and notes."
            />

            {/* Stage 1 */}
            <SectionHeading id="stage-1" number="Stage 1">
              Capture Every Paper in One Reference Manager
            </SectionHeading>

            <SubHeading>One library, one inbox</SubHeading>
            <p className={`${P} mt-3`}>
              The first rule is the simplest:{" "}
              <strong>every paper enters your system through one door.</strong>{" "}
              That door should be a reference manager, software designed to
              store bibliographic records, attach PDFs, add tags and generate
              citations. Whenever you find a paper, you add it there
              immediately, before reading and before deciding whether it is
              useful. Treat the reference manager as your library catalogue,
              and treat your PDF folder as a storage shelf behind it, not
              the other way round.
            </p>
            <p className={`${P} mt-3`}>
              Set up a single “Inbox” collection where new items land.
              Nothing leaves the inbox until it has been triaged (Stage 2).
              This one habit prevents the downloads-folder graveyard.
            </p>

            <SubHeading>Choosing a reference manager</SubHeading>
            <p className={`${P} mt-3`}>
              No tool is best for everyone. Gilmour and Cobus-Kuo (2011)
              compared four reference managers on features and on the
              accuracy of the bibliographies they produced{" "}
              <Cite n={2} />. They found that the tools had different
              strengths: one generated the most accurate citations, another
              was easiest for automated importing and another was strongest
              for PDF management. Their conclusion was that the choice
              should reflect the user’s needs and work habits. The tools have
              changed considerably since 2011, so do not copy that
              comparison literally, but the method it models is still sound.
              Test a tool on your own papers before committing.
            </p>

            <DataTable
              caption="Five practical questions for choosing a reference manager"
              headers={["Question to ask", "Why it matters", "How to test it"]}
              rows={managerQuestions}
              minWidthClass="min-w-[720px]"
              note="Table 1. Five practical questions for choosing a reference manager."
            />

            <SubHeading>Clean metadata and DOIs from the start</SubHeading>
            <p className={`${P} mt-3`}>
              A library is only as searchable as its records are accurate.
              When you add a paper, check that the title, authors, year,
              journal and <strong>DOI</strong> are correct. The DOI is a
              permanent identifier, so storing it lets you relocate the
              paper, check for corrections and resolve duplicates (you can
              resolve any DOI at{" "}
              <Ext href="https://www.doi.org/">doi.org</Ext>). Run your
              manager’s duplicate-detection feature regularly, especially
              after importing results from several databases. If you are
              running a formal systematic review, record counts at each stage
              so you can report them in a flow diagram in line with the{" "}
              <Ext href="https://www.prisma-statement.org/">
                PRISMA 2020
              </Ext>{" "}
              guidance (Page et al., 2021) <Cite n={6} />.
            </p>

            {/* Stage 2 */}
            <SectionHeading id="stage-2" number="Stage 2">
              Triage Papers Before You Read Them
            </SectionHeading>

            <SubHeading>Give every paper one status</SubHeading>
            <p className={`${P} mt-3`}>
              Most researchers collect far more than they can read. Triage
              prevents guilt and overload by making an explicit decision
              about each paper. Use a small set of statuses, implemented as
              tags or collections, and make sure each paper has exactly one
              at a time. Fig. 2 shows a simple pipeline.
            </p>

            <ArticleFigure
              src="/blogs/fig71.png"
              alt="Reading-status pipeline: Inbox, To Read, Reading, Read and Noted, Cited in Draft"
              caption="Fig. 2. A reading-status pipeline implemented with tags or collections."
            />

            <CheckList>
              <Check>
                <strong>Inbox:</strong> captured but not yet judged.
              </Check>
              <Check>
                <strong>To Read:</strong> relevant enough to read, with a
                priority if needed.
              </Check>
              <Check>
                <strong>Reading:</strong> currently in progress; keep this
                list short.
              </Check>
              <Check>
                <strong>Read + Noted:</strong> read, with a literature note
                written.
              </Check>
              <Check>
                <strong>Cited in Draft:</strong> used in your writing, so you
                know what must appear in the bibliography.
              </Check>
            </CheckList>

            <SubHeading>A five-minute triage test</SubHeading>
            <p className={`${P} mt-3`}>
              To decide whether a paper belongs in “To Read,” scan its title,
              abstract, headings and conclusion. Keshav (2007) describes this
              as the first pass of a three-pass reading method and suggests
              it takes about five to ten minutes <Cite n={3} />. By the end
              you should be able to say what type of paper it is, what it is
              about, whether its assumptions look valid, what its
              contributions are and whether it is clearly written. If the
              paper does not clear the bar for your question, tag it “Not
              relevant” (so you do not rediscover it later) and move on.
              Giving up on a paper is a skill, not a failure.
            </p>

            {/* Stage 3 */}
            <SectionHeading id="stage-3" number="Stage 3">
              Read and Annotate With a Three-Pass Method
            </SectionHeading>

            <SubHeading>Three passes, three purposes</SubHeading>
            <p className={`${P} mt-3`}>
              Reading every paper in full, in the same way, is slow and
              unnecessary. Keshav (2007) proposed reading in up to three
              passes, spending effort only when the paper earns it{" "}
              <Cite n={3} />. Table 2 summarises the approach.
            </p>

            <DataTable
              caption="The three-pass reading method and the record each pass should produce"
              headers={[
                "Pass",
                "Approximate time (Keshav, 2007)",
                "What you do",
                "What you record",
              ]}
              rows={threePass}
              minWidthClass="min-w-[820px]"
              note="Table 2. The three-pass reading method, with the kind of record each pass should produce."
            />

            <p className={P}>
              Most papers in your library will receive only the first pass. A
              smaller group will receive a second. A handful of central
              papers, the ones your argument depends on, deserve the third.
              Matching effort to importance is what keeps a large literature
              manageable. Papers that earn a third pass are usually the ones
              that anchor your{" "}
              <Int href="/blog/identify-a-real-research-gap">
                research gap
              </Int>
              .
            </p>

            <SubHeading>Five annotation rules that save time later</SubHeading>
            <NumberedList
              items={[
                <>
                  <strong className="text-slate-900">
                    Annotate inside your reference manager or PDF reader,
                  </strong>{" "}
                  so annotations stay attached to the paper.
                </>,
                <>
                  <strong className="text-slate-900">
                    Use a colour code and keep it consistent,
                  </strong>{" "}
                  for example one colour for findings, one for methods, one
                  for limitations and one for ideas to follow up.
                </>,
                <>
                  <strong className="text-slate-900">Highlight sparingly.</strong>{" "}
                  If half the page is highlighted, nothing is.
                </>,
                <>
                  <strong className="text-slate-900">
                    Add a margin comment in your own words
                  </strong>{" "}
                  to every important highlight, saying why it matters to your
                  question.
                </>,
                <>
                  <strong className="text-slate-900">Record page numbers</strong>{" "}
                  for any passage you may quote, because citations and
                  quotations need them later.
                </>,
              ]}
            />

            {/* Stage 4 */}
            <SectionHeading id="stage-4" number="Stage 4">
              Write Research Notes That You Can Reuse
            </SectionHeading>

            <SubHeading>Four layers of notes: from paper summaries to writing</SubHeading>
            <p className={`${P} mt-3`}>
              Notes become useful when they are layered. Fig. 3 shows four
              levels. At the base are <strong>literature notes</strong>, one
              for each paper you have read in depth. Above them sit{" "}
              <strong>concept or idea notes</strong>, each capturing one idea
              in your own words and linking to the papers that support or
              challenge it. Above those are <strong>synthesis notes</strong>,
              which combine ideas into arguments, comparisons or outlines. At
              the top is your actual writing. Each layer is built from the
              one below, so by the time you write, much of the thinking is
              already done.
            </p>

            <ArticleFigure
              src="/blogs/fig72.png"
              alt="Pyramid of four note layers: literature notes, idea notes, synthesis notes and writing output"
              caption="Fig. 3. Four layers of research notes, from literature notes to writing output."
            />

            <SubHeading>A literature note template</SubHeading>
            <p className={`${P} mt-3`}>
              Consistency makes notes searchable and comparable. Use the same
              template for every literature note. Table 3 offers a starting
              structure; adapt it to your field.
            </p>

            <DataTable
              caption="A reusable template for literature notes"
              headers={["Field", "What to write"]}
              rows={noteTemplate}
              minWidthClass="min-w-[600px]"
              note="Table 3. A reusable template for literature notes."
            />

            <p className={P}>
              The two most valuable fields are “My critique” and “Link to my
              project.” These are the parts that cannot be copied from the
              abstract. Writing them forces you to think, and they are what
              you will reach for when you draft your literature review. The
              same critique habit feeds directly into the argument of a{" "}
              <Int href="/blog/q1-research-paper-structure">
                Q1 research paper
              </Int>
              .
            </p>

            <SubHeading>Own words, not copied text</SubHeading>
            <p className={`${P} mt-3`}>
              Notes written in your own words are more useful than
              transcribed text. Mueller and Oppenheimer (2014) reported that
              students who took laptop notes tended to transcribe more
              verbatim and performed worse on conceptual questions than those
              who took notes longhand <Cite n={5} />. A later direct
              replication and extension (Morehead et al., 2019) re-examined
              that claim, so the longhand-versus-typing debate should be
              treated as unsettled <Cite n={4} />. The durable lesson is not
              about the medium. Notes that rephrase and process an idea are
              better than notes that copy it, whether you write them by hand
              or type them.
            </p>
            <p className={`${P} mt-3`}>
              Practically, this means clearly marking direct quotations (with
              page numbers and quotation marks) and keeping them separate
              from your paraphrases. That separation protects you from
              unintentional plagiarism when you later cannot remember which
              words were yours.
            </p>

            <SubHeading>Link your notes together</SubHeading>
            <p className={`${P} mt-3`}>
              The difference between a pile of notes and a thinking tool is
              connection. Whenever you write an idea note, link it to related
              notes and to the papers that support it. Many note-taking
              applications support links between notes, and the same effect
              is possible with a simple naming convention and a spreadsheet
              index. When it is time to write, you can follow the links to
              assemble a section instead of searching from zero.
            </p>

            {/* Stage 5 */}
            <SectionHeading id="stage-5" number="Stage 5">
              Folder Structure, File Naming, Backup and Version Control
            </SectionHeading>

            <SubHeading>A simple project folder structure</SubHeading>
            <p className={`${P} mt-3`}>
              Your reference manager handles papers. Everything else, such as
              notes, data, drafts and administrative files, needs a
              predictable home. Wilson and colleagues (2017) recommend
              organising each project in its own directory, using clear and
              consistent names, and separating raw data from processed data{" "}
              <Cite n={10} />. Fig. 4 shows a structure that follows those
              principles. Numeric prefixes keep folders in a logical order,
              and a dedicated archive folder gives you a safe place for
              retired files.
            </p>

            <ArticleFigure
              src="/blogs/fig73.png"
              alt="Example project folder tree with numbered folders for papers, notes, data, drafts and archive"
              caption="Fig. 4. A simple, consistent folder structure for one research project."
            />

            <SubHeading>File naming conventions</SubHeading>
            <p className={`${P} mt-3`}>
              A good file name tells you what a file is without opening it.
              Wilkinson and colleagues (2016) proposed the FAIR principles
              (findable, accessible, interoperable and reusable) for research
              data <Cite n={9} />. Their guidance targets shared datasets, but
              the spirit applies to personal files: use stable identifiers,
              descriptive metadata and open, durable formats. Table 4 shows
              a naming pattern you can adapt. The{" "}
              <Ext href="https://www.go-fair.org/fair-principles/">
                GO FAIR initiative
              </Ext>{" "}
              explains the principles in plain language.
            </p>

            <DataTable
              caption="Examples of weak and better file names"
              headers={["Item", "Weak name", "Better name"]}
              rows={fileNames}
              minWidthClass="min-w-[720px]"
              note="Table 4. Examples of weak and better file names."
            />

            <p className={P}>
              Use dates in year-month-day order so that files sort
              chronologically, avoid spaces and special characters if you
              work across systems, and put the version number at the end.
              Never use “final” in a file name. There is always another
              revision. For journal-specific naming and file requirements at
              submission, see our{" "}
              <Int href="/blog/formatting-guide">
                manuscript formatting guide
              </Int>
              .
            </p>

            <SubHeading>Backup and version control for researchers</SubHeading>
            <p className={`${P} mt-3`}>
              Losing a thesis to a failed laptop is entirely preventable.
              Follow the widely used guideline of keeping at least three
              copies of important files, on two different types of storage,
              with one copy off-site or in a cloud service. Test restoring a
              file from your backup at least once, because a backup you have
              never restored is only a hope.
            </p>
            <p className={`${P} mt-3`}>
              For drafts and scripts, version control matters as much as
              backup. Wilson and colleagues (2017) recommend tracking changes
              to your work <Cite n={10} />, and Sandve and colleagues (2013)
              advise keeping track of how every result was produced and
              versioning custom scripts <Cite n={8} />. If you do not use a
              tool such as <Ext href="https://git-scm.com/">Git</Ext>, a
              disciplined “v01, v02, v03” convention and a short change log
              achieve much of the same benefit.
            </p>

            {/* Weekly review */}
            <SectionHeading id="weekly-review">
              The Weekly Review: How to Keep Your System Alive
            </SectionHeading>

            <SubHeading>A 170-minute maintenance routine</SubHeading>
            <p className={`${P} mt-3`}>
              Systems fail not because they are badly designed but because
              they are not maintained. A short weekly review keeps your inbox
              empty, your notes current and your backups verified. Fig. 5
              suggests an allocation that adds up to under three hours;
              reduce it if your workload is light.
            </p>

            <ArticleFigure
              src="/blogs/fig74.png"
              alt="Suggested weekly maintenance routine for a research library totalling 170 minutes"
              caption="Fig. 5. A suggested weekly maintenance routine for a research library (170 minutes)."
            />

            <SubHeading>Use your notes for retrieval practice</SubHeading>
            <p className={`${P} mt-3`}>
              A review does not have to be passive. Cognitive psychology
              offers strong evidence that retrieving information from memory
              strengthens it. Roediger and Karpicke (2006) showed that taking
              memory tests improved long-term retention compared with
              rereading <Cite n={7} />. In a broad review of learning
              techniques, Dunlosky and colleagues (2013) rated practice
              testing and distributed practice as high-utility strategies,
              and rated rereading and highlighting as low-utility{" "}
              <Cite n={1} />. For researchers, the implication is to turn
              your notes into questions: cover your summary of a paper and
              try to state its question, method and finding from memory, then
              check yourself. Spacing these sessions across weeks does more
              than cramming them into one afternoon.
            </p>

            {/* Citations */}
            <SectionHeading id="citations">
              Managing Citations While You Write
            </SectionHeading>

            <p className={`${P} mt-4`}>
              The payoff for all of this organization arrives when you write.
              Install your reference manager’s plug-in for your word
              processor and insert citations from your library as you draft,
              rather than typing author names and years by hand. Doing so
              means your bibliography updates itself, and a change of
              citation style takes seconds instead of days.
            </p>

            <CheckList>
              <Check>
                <strong>Use citation keys or placeholders</strong> if you
                draft in a tool without a plug-in, and resolve them in one
                pass later.
              </Check>
              <Check>
                <strong>Mark papers “Cited in Draft”</strong> so you can
                reconcile your bibliography with your library before
                submission.
              </Check>
              <Check>
                <strong>Check every reference against its DOI</strong> before
                submission. Imported metadata sometimes contains errors, and
                reviewers notice. Sloppy references are also a quiet
                contributor to{" "}
                <Int href="/blog/paper-rejection-reasons">
                  desk rejections and reviewer complaints
                </Int>
                .
              </Check>
              <Check>
                <strong>Keep a “To Verify” tag</strong> for quotations or
                statistics you inserted from memory, and clear it before
                sending the draft.
              </Check>
            </CheckList>

            {/* Collaboration */}
            <SectionHeading id="collaboration">
              Working With Supervisors and Co-Authors
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Shared work needs shared rules. Agree early on which reference
              manager group or shared folder holds the common library, who
              may add or delete records, and how files are named. Keep a
              single running document for supervisor meetings, with dated
              entries and an action list at the top, so that decisions are
              recorded rather than half-remembered. When sending drafts, use
              version numbers and dates in the file name, and tell
              collaborators which version is current. If you work from
              several devices, rely on one synchronised location rather than
              emailing files to yourself.
            </p>

            {/* Mistakes */}
            <SectionHeading id="common-mistakes">
              Common Mistakes in Organizing Research Papers and Notes
            </SectionHeading>

            <DataTable
              caption="Common organization mistakes and their remedies"
              headers={["Mistake", "Better practice"]}
              rows={mistakes}
              minWidthClass="min-w-[640px]"
              note="Table 5. Common organization mistakes and their remedies."
            />

            {/* 30-day plan */}
            <SectionHeading id="thirty-day-plan">
              A 30-Day Plan to Set Up Your Research Organization System
            </SectionHeading>

            <DataTable
              caption="Four-week plan for setting up a research organization system"
              headers={["Week", "Actions"]}
              rows={plan}
              minWidthClass="min-w-[640px]"
            />

            <Callout title="Start small">
              You do not need to process your whole backlog before the system
              works. Apply the workflow to new papers from today, and clear
              the old backlog in short, scheduled sessions.
            </Callout>

            {/* Checklist */}
            <SectionHeading id="final-checklist">
              Quick Checklist for Organizing Research Papers and Notes
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
              Frequently Asked Questions About Research Organization
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
              Once your library is under control, put it to work: learn how
              to{" "}
              <Int href="/blog/identify-a-real-research-gap">
                identify a real research gap
              </Int>
              , plan a{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review
              </Int>
              , or browse the{" "}
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
                Conclusion: A System You Can Trust
              </h2>
              <p className={`${P} mt-3`}>
                Organizing research is not about perfect folders or the most
                fashionable app. It is about building habits that protect
                your time and your thinking: capture in one place, triage
                honestly, read in proportion to importance, write notes that
                you can reuse, structure your files predictably and review
                regularly. Each habit is small. Together, they mean that
                when you sit down to write, you can find what you need and
                remember why it mattered.
              </p>
              <p className={`${P} mt-3`}>
                Start with the minimum, run the weekly review, and improve
                the system as your project grows. A system you actually use
                will always beat a perfect system you abandon in week three.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need help organizing your research workflow?
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
                Figures 1 to 5 and the tables were prepared by the author for
                this article. The libraries, statuses and time allocations
                shown are illustrative suggestions, not research findings.
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
              <li><Link href="/blog/organize-research-papers-and-notes" className="transition hover:text-white">Organize Papers and Notes</Link></li>
              <li><Link href="/blog/identify-a-real-research-gap" className="transition hover:text-white">Identify a Research Gap</Link></li>
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