"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Award,
  Cpu,
  BarChart2,
  CheckCircle,
  ChevronDown,
  BookOpen,
  ArrowRight,
  ExternalLink,
  GraduationCap,
  Layers,
  Sigma,
  PenLine,
} from "lucide-react";

/* ------------------------------------------------------------------
   Static Content
------------------------------------------------------------------ */

const SITE_URL = "https://scholargrid.org";

const googleScholarUrl =
  "https://scholar.google.com/citations?hl=en&user=-VGaDnoAAAAJ";

const researchGateUrl =
  "https://www.researchgate.net/profile/Hamza-Iqbal-19?ev=hdr_xprf";

const blogPosts = [
  {
    tag: "Paper structure",
    title:
      "The Master Guide to Structuring a Q1 Research Paper from Scratch: A 10-Part Blueprint",
    desc: "How to organize a manuscript section by section, keep the argument logical, and prepare it for a high-impact journal submission.",
    href: "/blog/q1-research-paper-structure",
  },
  {
    tag: "Formatting",
    title:
      "A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier & IEEE",
    desc: "Journal templates, section structure, equation formatting, reference styles, and figure resolution requirements.",
    href: "/blog/formatting-guide",
  },
  {
    tag: "Publishing",
    title:
      "Common Reasons Engineering Manuscripts Get Rejected by Journals (And How to Avoid Them)",
    desc: "The usual causes of desk rejection, methodological weaknesses, and presentation problems, with fixes you can apply before submitting.",
    href: "/blog/paper-rejection-reasons",
  },
  {
    tag: "Visualization",
    title:
      "Mastering Contour Plots & 3D Visualizations in Python and MATLAB for Q1 Journals",
    desc: "Build publication-quality contour plots, color maps, and three-dimensional scientific figures.",
    href: "/blog/contour-visualizations",
  },
  {
    tag: "Methodology",
    title:
      "How to Conduct a Systematic Literature Review and Synthesize Prior Work Like a Senior Researcher",
    desc: "Search protocols, PRISMA screening, concept matrices, and evidence synthesis, step by step.",
    href: "/blog/systematic-literature-review-guide",
  },
  {
    tag: "Formatting",
    title:
      "Mastering Q1/Q2 Manuscript Formatting: Common Pitfalls and How to Avoid Rejection",
    desc: "Frequent formatting mistakes, journal requirements, figure quality, and reference management.",
    href: "/blog/q1-q2-manuscript-formatting-avoid-rejection",
  },
  {
    tag: "Journal selection",
    title:
      "How to Find Fast-Review Q1/Q2 Journals in Engineering & Applied Sciences Without Sacrificing Impact",
    desc: "A practical workflow to shortlist, verify, and rank journals by quartile, real review times, and legitimacy.",
    href: "/blog/fast-review-q1-q2-journals",
  },
  {
    tag: "AI & Machine Learning",
    title:
      "Artificial Intelligence in Scientific Research: Applications, Tools, Benefits, and Limitations (2026)",
    desc: "Where AI helps in research, which tools to use, a worked physics-informed neural network example, and the limits and ethics of responsible use.",
    href: "/blog/ai-in-scientific-research",
  },
];

const featuredPost = blogPosts[0];
const gridPosts = blogPosts.slice(1);

const startHere = [
  {
    label: "Structure your paper",
    href: "/blog/q1-research-paper-structure",
  },
  {
    label: "Format for Elsevier & IEEE",
    href: "/blog/formatting-guide",
  },
  {
    label: "Avoid desk rejection",
    href: "/blog/paper-rejection-reasons",
  },
];

const services = [
  {
    icon: PenLine,
    title: "Academic writing support",
    description:
      "Structure, argument flow, and clarity for journal articles, theses, and dissertations.",
    scope: [
      "Manuscript organization",
      "Abstract and introduction clarity",
      "Response-to-reviewer guidance",
    ],
    href: "/blog/q1-research-paper-structure",
    cta: "See the paper structure guide",
  },
  {
    icon: Sigma,
    title: "LaTeX and journal formatting",
    description:
      "Template setup, equations, references, and figure requirements for Elsevier, IEEE, and similar publishers.",
    scope: [
      "LaTeX and Word templates",
      "Equation and table formatting",
      "Reference style checks",
    ],
    href: "/blog/formatting-guide",
    cta: "Read the formatting guide",
  },
  {
    icon: Cpu,
    title: "Computational support",
    description:
      "Python and MATLAB workflows for analysis, numerical modeling, and publication-ready figures.",
    scope: [
      "Contour and 3D plots",
      "Reproducible analysis scripts",
      "Results presentation",
    ],
    href: "/blog/contour-visualizations",
    cta: "Learn the visualization workflow",
  },
  {
    icon: Layers,
    title: "Literature review and journal selection",
    description:
      "Systematic review methods and a verification workflow for choosing the right Q1/Q2 journal.",
    scope: [
      "PRISMA-style screening",
      "Research gap identification",
      "Quartile and review-time checks",
    ],
    href: "/blog/systematic-literature-review-guide",
    cta: "Start the literature review guide",
  },
];

const stats = [
  { value: "8", label: "In-depth research guides" },
  { value: "Free", label: "To read, no sign-up" },
];

const publishers = [
  "IEEE",
  "Elsevier",
  "Springer Nature",
  "Wiley",
  "Taylor & Francis",
  "MDPI",
];

const topicLinks = [
  { label: "Research paper structure", href: "/blog/q1-research-paper-structure" },
  { label: "Journal formatting", href: "/blog/formatting-guide" },
  { label: "Manuscript rejection", href: "/blog/paper-rejection-reasons" },
  { label: "Python & MATLAB plots", href: "/blog/contour-visualizations" },
  { label: "Systematic literature review", href: "/blog/systematic-literature-review-guide" },
  { label: "Q1/Q2 formatting pitfalls", href: "/blog/q1-q2-manuscript-formatting-avoid-rejection" },
  { label: "Fast-review journals", href: "/blog/fast-review-q1-q2-journals" },
];

const faqs = [
  {
    q: "What is ScholarGrid?",
    a: "ScholarGrid is an academic knowledge platform for PhD scholars and researchers. It publishes practical guides on academic writing, LaTeX and journal formatting, computational methods, literature reviews, and scholarly publishing.",
    category: "About",
  },
  {
    q: "Who are the guides written for?",
    a: "PhD candidates, master's students, research associates, and faculty who are preparing manuscripts, theses, or journal submissions. Most guides assume you already have a research result and need help presenting and publishing it.",
    category: "Audience",
  },
  {
    q: "Do you cover Q1 and Q2 journal publishing?",
    a: "Yes. The library covers manuscript structure, journal selection, formatting for Elsevier and IEEE, common causes of rejection, and how to verify that a journal is legitimate before you submit.",
    category: "Publishing",
  },
  {
    q: "Do you help with LaTeX and computational work?",
    a: "Yes. The guides explain template setup, equations, references, and figure preparation, and cover Python and MATLAB workflows for contour plots, 3D visualizations, and reproducible analysis.",
    category: "Tools",
  },
  {
    q: "Can ScholarGrid help with literature reviews?",
    a: "Yes. The systematic literature review guide walks through search protocols, PRISMA screening, concept matrices, and evidence synthesis so you can identify research gaps with confidence.",
    category: "Methodology",
  },
  {
    q: "How often is new content added?",
    a: "New articles are added periodically. The Knowledge Library always lists the latest guides first.",
    category: "Content",
  },
  {
    q: "Where can I see the researcher's publications?",
    a: "Publication records and citations are available on the linked Google Scholar and ResearchGate profiles further down this page.",
    category: "Profiles",
  },
];

/* ------------------------------------------------------------------
   Reusable Section Heading
------------------------------------------------------------------ */

function SectionHeading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>
    </div>
  );
}

/* ------------------------------------------------------------------
   Main Page
------------------------------------------------------------------ */

export default function ScholarGridLandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ScholarGrid",
    url: SITE_URL,
    description:
      "Academic writing, LaTeX, and computational guides for PhD scholars and researchers.",
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* SEO Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Navigation */}

      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
          <Link href="/" className="flex shrink-0 items-center gap-2.5">
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

          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 lg:flex">
            <a href="#library" className="transition hover:text-blue-800">
              Knowledge Library
            </a>
            <a href="#services" className="transition hover:text-blue-800">
              Support Scope
            </a>
            <a href="#topics" className="transition hover:text-blue-800">
              Topics
            </a>
            <a href="#profiles" className="transition hover:text-blue-800">
              Researcher
            </a>
            <a href="#faq" className="transition hover:text-blue-800">
              FAQ
            </a>
          </div>

          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:px-5 sm:text-sm"
          >
            Open the Library
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}

        <section
          id="about"
          className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/60"
        >
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:py-24">
            {/* Hero Content */}

            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-900 shadow-sm">
                <GraduationCap size={16} aria-hidden="true" />
                Built for PhD scholars and researchers
              </p>

              <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.4rem]">
                Academic writing, LaTeX, and computational support for
                getting your research published.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Step-by-step guides on structuring Q1 papers, formatting
                for Elsevier and IEEE, building publication-quality
                figures in Python and MATLAB, and choosing the right
                journal.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-7 py-4 text-base font-semibold text-white shadow-md shadow-blue-900/20 transition hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Browse the Knowledge Library
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>

                <Link
                  href="/blog/q1-research-paper-structure"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-4 text-base font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  Read the Q1 paper structure guide
                </Link>
              </div>

              <ul className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-blue-800"
                    aria-hidden="true"
                  />
                  Free, practical guides
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-blue-800"
                    aria-hidden="true"
                  />
                  Written by a published researcher
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle
                    size={16}
                    className="text-blue-800"
                    aria-hidden="true"
                  />
                  Engineering and applied sciences focus
                </li>
              </ul>
            </div>

            {/* Start Here Panel */}

            <aside
              aria-label="Start here"
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-7"
            >
              <h2 className="font-serif text-2xl font-bold text-slate-950">
                Start here
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                The three guides readers open first. Pick the stage you
                are at.
              </p>

              <ul className="mt-5 divide-y divide-slate-100">
                {startHere.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center justify-between gap-3 py-4 text-base font-semibold text-slate-900 transition hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      {item.label}
                      <ArrowRight
                        size={17}
                        aria-hidden="true"
                        className="shrink-0 text-blue-800 transition group-hover:translate-x-1"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href="/blog"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-blue-900 hover:underline"
              >
                See all {blogPosts.length} guides
                <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </aside>
          </div>
        </section>

        {/* Trust Strip */}

        <section
          aria-label="Track record"
          className="border-b border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-6 text-center sm:py-7">
                <div className="font-serif text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                  {stat.value}
                </div>
                <p className="mt-1.5 text-xs font-medium text-slate-600 sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-200 bg-slate-50/80 py-4">
            <p className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 text-xs font-semibold text-slate-500 sm:text-sm">
              <span className="font-medium text-slate-500">
                Guides cover submission rules for:
              </span>
              {publishers.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </p>
          </div>
        </section>

        {/* Knowledge Library (Featured Insights) */}

        <section
          id="library"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 sm:px-8 lg:py-20"
        >
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Knowledge Library
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Practical guides for every stage between a finished
                result and an accepted paper.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-900 hover:underline"
            >
              View all articles
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Featured guide */}

          <Link
            href={featuredPost.href}
            className="group mb-6 grid gap-6 rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-950 to-blue-900 p-7 text-white transition hover:shadow-xl hover:shadow-blue-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:p-9 md:grid-cols-[1.4fr_1fr] md:items-center"
          >
            <div>
              <span className="inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-100">
                Featured guide · {featuredPost.tag}
              </span>
              <h3 className="mt-4 font-serif text-2xl font-bold leading-snug sm:text-3xl">
                {featuredPost.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-blue-100/90">
                {featuredPost.desc}
              </p>
            </div>

            <div className="md:justify-self-end">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-blue-950 transition group-hover:bg-blue-50">
                Read the guide
                <ArrowRight
                  size={16}
                  aria-hidden="true"
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>

          {/* Remaining guides */}

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {gridPosts.map((post) => (
              <article key={post.href}>
                <Link
                  href={post.href}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">
                    {post.tag}
                  </span>

                  <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-900">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {post.desc}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-bold text-blue-900 transition group-hover:gap-3">
                    Read article
                    <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Explore all articles
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Services / Support Scope */}

        <section
          id="services"
          className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <SectionHeading
              title="What ScholarGrid helps with"
              description="Four areas of support for researchers who are writing, formatting, analyzing, and submitting. Each one links to the guide that explains the method."
            />

            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="flex flex-col rounded-xl border border-slate-200 bg-white p-7"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-slate-900">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {service.description}
                    </p>

                    <ul className="mt-4 space-y-2 text-sm text-slate-700">
                      {service.scope.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle
                            size={16}
                            aria-hidden="true"
                            className="mt-0.5 shrink-0 text-blue-800"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-900 hover:underline"
                    >
                      {service.cta}
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Topics */}

        <section
          id="topics"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-16 sm:px-8 lg:py-20"
        >
          <SectionHeading
            title="Find a guide by topic"
            description="Know what you are stuck on? Jump straight to the article."
          />

          <ul className="flex flex-wrap gap-3">
            {topicLinks.map((topic) => (
              <li key={topic.href}>
                <Link
                  href={topic.href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-800 transition hover:border-blue-800 hover:bg-blue-50 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <BookOpen
                    size={15}
                    aria-hidden="true"
                    className="text-blue-800"
                  />
                  {topic.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* Researcher Profiles */}

        <section
          id="profiles"
          className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-16 lg:py-20"
        >
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Guidance from a published researcher
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  The guides come from direct experience preparing and
                  submitting manuscripts to Q1 and Q2 journals. Check
                  the publication record and citations yourself on the
                  public profiles below.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={googleScholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Google Scholar
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>

                  <a
                    href={researchGateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-800 hover:text-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    ResearchGate
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="rounded-xl border border-slate-200 bg-white p-6">
                  <FileText
                    size={24}
                    aria-hidden="true"
                    className="mb-4 text-blue-900"
                  />
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Peer-reviewed publications
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Full publication list and citations are on Google
                    Scholar.
                  </p>
                </li>

                <li className="rounded-xl border border-slate-200 bg-white p-6">
                  <BarChart2
                    size={24}
                    aria-hidden="true"
                    className="mb-4 text-blue-900"
                  />
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Computational research
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Numerical modeling and data-driven methods in engineering.
                  </p>
                </li>

                <li className="rounded-xl border border-slate-200 bg-white p-6 sm:col-span-2">
                  <Award
                    size={24}
                    aria-hidden="true"
                    className="mb-4 text-blue-900"
                  />
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Publishing experience
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    The formatting and rejection guides are based on
                    hands-on experience preparing manuscripts for
                    journal submission.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section
          id="faq"
          className="mx-auto max-w-4xl scroll-mt-24 px-6 py-16 sm:px-8 lg:py-20"
        >
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
              Quick answers about ScholarGrid and what you will find in
              the library.
            </p>
          </div>

          <div className="divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-7"
                  >
                    <span className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                      <span className="w-fit rounded-md bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-800">
                        {faq.category}
                      </span>
                      <span className="text-sm font-semibold leading-6 text-slate-900 sm:text-base">
                        {faq.q}
                      </span>
                    </span>

                    <ChevronDown
                      size={19}
                      aria-hidden="true"
                      className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-900" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={panelId}
                      className="bg-slate-50 px-5 pb-6 pt-1 text-sm leading-7 text-slate-600 sm:px-7"
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}

        <section className="border-y border-slate-200 bg-blue-950">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center sm:px-8 md:flex-row md:text-left">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Ready to get your paper submission-ready?
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-blue-100/80 sm:text-base">
                Start with the Q1 paper structure guide, then move on to
                formatting and journal selection.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/blog/q1-research-paper-structure"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-blue-950 transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              >
                Read the first guide
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                href="/blog"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-blue-300/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
              >
                Visit the Knowledge Library
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}