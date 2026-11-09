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
  Microscope,
  Calculator,
  Layers,
  BookMarked,
  Lightbulb,
  Globe,
} from "lucide-react";

/* ------------------------------------------------------------------
   Static Content
------------------------------------------------------------------ */

const googleScholarUrl =
  "https://scholar.google.com/citations?hl=en&user=-VGaDnoAAAAJ";

const researchGateUrl =
  "https://www.researchgate.net/profile/Hamza-Iqbal-19?ev=hdr_xprf";

const blogPosts = [
  {
    tag: "Research paper structure",
    title:
      "The Master Guide to Structuring a Q1 Research Paper from Scratch: A 10-Part Blueprint",
    desc:
      "A comprehensive guide covering research paper organization, essential manuscript sections, logical flow, and preparation for high-impact journal submission.",
    href: "/blog/q1-research-paper-structure",
    number: "01",
  },
  {
    tag: "Formatting guide",
    title:
      "A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier & IEEE",
    desc:
      "Understand journal templates, section structures, equation formatting, reference styles, and figure resolutions.",
    href: "/blog/formatting-guide",
    number: "02",
  },
  {
    tag: "Publishing strategy",
    title:
      "Common Reasons Engineering Manuscripts Get Rejected by Journals (And How to Avoid Them)",
    desc:
      "Explore common causes of desk rejection, methodological weaknesses, presentation issues, and publication challenges.",
    href: "/blog/paper-rejection-reasons",
    number: "03",
  },
  {
    tag: "Scientific visualization",
    title:
      "Mastering Contour Plots & 3D Visualizations in Python and MATLAB for Q1 Journals",
    desc:
      "Learn how to create professional contour plots, color maps, and three-dimensional scientific visualizations.",
    href: "/blog/contour-visualizations",
    number: "04",
  },
  {
    tag: "Research methodology",
    title:
      "How to Conduct a Systematic Literature Review and Synthesize Prior Work Like a Senior Researcher",
    desc:
      "Explore literature search protocols, PRISMA screening, concept matrices, and systematic evidence synthesis.",
    href: "/blog/systematic-literature-review-guide",
    number: "05",
  },
  {
    tag: "Formatting & publishing",
    title:
      "Mastering Q1/Q2 Manuscript Formatting: Common Pitfalls and How to Avoid Rejection",
    desc:
      "Understand common formatting mistakes, journal requirements, figure quality, and reference management.",
    href: "/blog/q1-q2-manuscript-formatting-avoid-rejection",
    number: "06",
  },
  {
    tag: "Journal selection",
    title:
      "How to Find Fast-Review Q1/Q2 Journals in Engineering & Applied Sciences Without Sacrificing Impact",
    desc:
      "Follow a practical workflow to shortlist, verify, and rank fast-review journals by checking quartiles, real review times, and legitimacy.",
    href: "/blog/fast-review-q1-q2-journals",
    number: "07",
  },
];

/* ------------------------------------------------------------------
   Research Areas
------------------------------------------------------------------ */

const researchAreas = [
  {
    icon: BookOpen,
    title: "Research Design & Methodology",
    description:
      "Explore research approaches, study design, methodological frameworks, and systematic investigation across academic disciplines.",
    topics: [
      "Research design",
      "Methodological frameworks",
      "Study planning",
    ],
  },
  {
    icon: Layers,
    title: "Literature Review & Analysis",
    description:
      "Learn how to identify relevant literature, evaluate existing studies, synthesize findings, and establish research gaps.",
    topics: [
      "Literature reviews",
      "Critical analysis",
      "Research gaps",
    ],
  },
  {
    icon: BarChart2,
    title: "Data Analysis & Interpretation",
    description:
      "Understand approaches to collecting, organizing, analyzing, and interpreting research data using appropriate analytical methods.",
    topics: [
      "Data analysis",
      "Statistical methods",
      "Results interpretation",
    ],
  },
  {
    icon: FileText,
    title: "Academic Writing",
    description:
      "Develop effective academic writing practices for research proposals, dissertations, theses, journal articles, and scholarly reports.",
    topics: [
      "Scientific writing",
      "Thesis preparation",
      "Academic communication",
    ],
  },
  {
    icon: Award,
    title: "Scholarly Publishing",
    description:
      "Explore journal selection, manuscript preparation, peer review, publication ethics, and scholarly communication.",
    topics: [
      "Journal selection",
      "Peer review",
      "Publication ethics",
    ],
  },
  {
    icon: Lightbulb,
    title: "Research Ethics & Integrity",
    description:
      "Understand responsible research practices, academic integrity, reproducibility, proper attribution, and ethical standards.",
    topics: [
      "Research ethics",
      "Academic integrity",
      "Reproducibility",
    ],
  },
];

/* ------------------------------------------------------------------
   Frequently Asked Questions
------------------------------------------------------------------ */

const faqs = [
  {
    q: "What is ScholarGrid?",
    a:
      "ScholarGrid is an academic knowledge platform providing educational resources, practical research guides, academic writing guidance, methodological insights, and scholarly publishing information for students, researchers, and academic professionals across different disciplines.",
    category: "About",
  },
  {
    q: "Which academic disciplines does ScholarGrid cover?",
    a:
      "ScholarGrid aims to support researchers across a wide range of academic disciplines, including natural sciences, social sciences, engineering, medicine, computer science, business, education, arts, and humanities. Its resources focus on research practices and academic knowledge that can be applied across different fields.",
    category: "Research",
  },
  {
    q: "What research topics are covered on ScholarGrid?",
    a:
      "Our content covers research design, literature reviews, academic writing, data analysis, research methodology, scholarly communication, publication standards, research ethics, and other essential aspects of academic work.",
    category: "Learning",
  },
  {
    q: "Which tools and software are discussed?",
    a:
      "Our educational resources may cover a variety of research tools and software, including data analysis applications, statistical packages, reference management tools, academic writing software, programming environments, and digital research platforms.",
    category: "Technology",
  },
  {
    q: "Does ScholarGrid provide guidance on Q1 and Q2 journal publications?",
    a:
      "Yes. ScholarGrid publishes educational material about journal selection, manuscript organization, formatting requirements, peer-review processes, publication ethics, scientific presentation, and common publication challenges.",
    category: "Publishing",
  },
  {
    q: "Can ScholarGrid help with literature reviews and research methodology?",
    a:
      "Yes. Our research guides explore literature search strategies, systematic reviews, research design, methodological frameworks, critical evaluation of previous studies, identification of research gaps, and evidence synthesis.",
    category: "Methodology",
  },
  {
    q: "Are the resources suitable for postgraduate and doctoral researchers?",
    a:
      "Yes. ScholarGrid is designed for undergraduate and postgraduate students, master's scholars, PhD candidates, research associates, university faculty, and academic professionals seeking to improve their research and scholarly communication skills.",
    category: "Education",
  },
  {
    q: "How frequently are new research articles published?",
    a:
      "New educational articles and research resources are added periodically. Readers can explore the Insights section and knowledge library to discover the latest available publications and academic guides.",
    category: "Content",
  },
  {
    q: "Can I explore academic researcher profiles?",
    a:
      "Yes. ScholarGrid provides links to academic research profiles where readers can explore scholarly publications, citations, research contributions, and academic activities.",
    category: "Profiles",
  },
];

/* ------------------------------------------------------------------
   Reusable Section Heading
------------------------------------------------------------------ */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-800">
        <span className="h-px w-7 bg-blue-700" />
        {eyebrow}
      </div>

      <h2 className="font-serif text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-base leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------
   Main Page
------------------------------------------------------------------ */

export default function ScholarGridLandingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 5);

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

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">

      {/* SEO Structured Data */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Announcement Strip */}

      <div className="bg-slate-950 px-4 py-2 text-center text-xs font-medium tracking-wide text-slate-200 sm:text-sm">
        Academic Knowledge · Research Methodology · Scholarly Publishing
      </div>

      {/* Navigation */}

      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">

          <Link
            href="/"
            className="flex shrink-0 items-center gap-2.5"
          >
            <Image
              src="/logo.png"
              alt="ScholarGrid Academic Research Logo"
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
            <a href="#about" className="transition hover:text-blue-800">
              About
            </a>

            <a href="#research" className="transition hover:text-blue-800">
              Research Areas
            </a>

            <a href="#insights" className="transition hover:text-blue-800">
              Insights
            </a>

            <a href="#profiles" className="transition hover:text-blue-800">
              Researchers
            </a>

            <a href="#faq" className="transition hover:text-blue-800">
              FAQ
            </a>
          </div>

          <Link
            href="/blog"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-blue-950 sm:px-5 sm:text-sm"
          >
            Explore Articles
            <ArrowRight size={15} />
          </Link>

        </div>
      </nav>

      <main>

        {/* Hero Section */}

        <section
          id="about"
          className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50/60"
        >
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-100/40 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">

            {/* Hero Content */}

            <div>

              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-semibold tracking-wide text-blue-900 shadow-sm">
                <BookOpen size={15} />
                AN ACADEMIC KNOWLEDGE PLATFORM
              </div>

              <h1 className="max-w-2xl font-serif text-4xl font-bold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.65rem]">
                Discover Research.
                <br />
                <span className="text-blue-800">
                  Understand Knowledge.
                </span>
                <br />
                Advance Your Ideas.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Exploring the world of academic research through
                practical learning resources, research methodologies,
                scholarly insights, and guidance for researchers
                across all academic disciplines.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">

                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-950"
                >
                  Explore Research Articles
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="#research"
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900"
                >
                  Research Topics
                </a>

              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-blue-800" />
                  Resources for all disciplines
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle size={15} className="text-blue-800" />
                  Practical research guidance
                </span>
              </div>

            </div>

            {/* Featured Article Panel */}

            <div className="relative">

              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-7">

                <div className="mb-5 flex items-center justify-between gap-3">

                  <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-blue-900">
                    <BookMarked size={16} />
                    FEATURED READING
                  </div>

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-800">
                    Research Guide
                  </span>

                </div>

                <div className="relative mb-6 flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800">

                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute left-1/4 top-1/4 h-40 w-40 rounded-full border border-white" />
                    <div className="absolute left-1/3 top-1/3 h-28 w-28 rounded-full border border-white" />
                    <div className="absolute bottom-5 right-8 h-32 w-32 rounded-full border border-white" />
                  </div>

                  <div className="relative text-center text-white">
                    <GraduationCap
                      size={55}
                      strokeWidth={1.2}
                      className="mx-auto mb-3"
                    />
                    <p className="font-serif text-2xl font-bold">
                      Research Excellence
                    </p>
                    <p className="mt-2 text-xs tracking-[0.2em] text-blue-200">
                      KNOWLEDGE • METHODS • DISCOVERY
                    </p>
                  </div>

                </div>

                <p className="text-xs font-semibold uppercase tracking-widest text-blue-800">
                  Research Paper Structure
                </p>

                <h2 className="mt-3 font-serif text-2xl font-bold leading-snug text-slate-950">
                  The Master Guide to Structuring a Q1 Research Paper
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explore the essential elements of a scientific
                  manuscript, from research objectives and methodology
                  to results, discussion, and conclusions.
                </p>

                <Link
                  href="/blog/q1-research-paper-structure"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-900 transition hover:gap-3"
                >
                  Read the featured guide
                  <ArrowRight size={16} />
                </Link>

              </div>

              <div className="absolute -bottom-4 -right-3 -z-10 h-full w-full rounded-2xl border border-blue-100 bg-blue-50/70" />

            </div>

          </div>
        </section>

        {/* Statistics Strip */}

        <section
          aria-label="Academic statistics"
          className="border-b border-slate-200 bg-white"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 sm:grid-cols-4 sm:divide-y-0">

            {[
              ["18+", "Q1/Q2 journal papers"],
              ["100+", "Manuscripts processed"],
              ["100%", "Publisher compliance"],
              ["7", "Research guides"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="px-3 py-6 text-center sm:py-7"
              >
                <div className="font-serif text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                  {number}
                </div>

                <p className="mt-1.5 text-xs font-medium text-slate-500 sm:text-sm">
                  {label}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* Publisher Strip */}

        <section className="border-b border-slate-200 bg-slate-50/80 py-5">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-7 gap-y-3 px-6 text-xs font-semibold tracking-wide text-slate-500 sm:text-sm">
            <span className="text-slate-400">PUBLISHING LANDSCAPE</span>
            <span>IEEE</span>
            <span>Elsevier</span>
            <span>Springer Nature</span>
            <span>Wiley</span>
            <span>Taylor & Francis</span>
            <span>MDPI</span>
          </div>
        </section>

        {/* Research Areas */}

        <section
          id="research"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-8 lg:py-24"
        >

          <SectionHeading
            eyebrow="AREAS OF KNOWLEDGE"
            title="Explore Our Research Domains"
            description="Discover practical academic resources and educational insights covering the essential aspects of research, from study design and data analysis to academic writing and scholarly publishing."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {researchAreas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article
                  key={area.title}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-900/5"
                >

                  <div className="mb-5 flex items-center justify-between">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900 transition group-hover:bg-blue-900 group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <span className="font-serif text-sm font-semibold text-slate-300">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-md bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-600"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                </article>
              );
            })}

          </div>
        </section>

        {/* Editorial Divider */}

        <section className="border-y border-slate-200 bg-slate-50 py-12">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 text-center sm:px-8 md:flex-row md:text-left">

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm">
                <Lightbulb size={24} />
              </div>

              <div>
                <h2 className="font-serif text-xl font-bold text-slate-900">
                  Knowledge begins with curiosity.
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Explore ideas, methods, and academic discoveries.
                </p>
              </div>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 transition hover:gap-3"
            >
              Browse the knowledge library
              <ArrowRight size={17} />
            </Link>

          </div>
        </section>

        {/* Blog / Insights */}

        <section
          id="insights"
          className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 sm:px-8 lg:py-24"
        >

          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-800">
                <BookOpen size={17} />
                THE KNOWLEDGE LIBRARY
              </div>

              <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Latest Research Insights
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Practical academic guides, research resources, and
                educational articles to support students, scholars,
                and researchers across different disciplines.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-900 transition hover:gap-3"
            >
              View all articles
              <ArrowRight size={17} />
            </Link>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {blogPosts.map((post) => (
              <article
                key={post.href}
                className="group flex flex-col rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg hover:shadow-slate-200/70"
              >

                <div className="mb-5 flex items-center justify-between">

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-900">
                    {post.tag}
                  </span>

                  <span className="font-serif text-lg font-bold text-slate-200">
                    {post.number}
                  </span>

                </div>

                <h3 className="font-serif text-xl font-bold leading-snug text-slate-900 transition group-hover:text-blue-900">
                  {post.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                  {post.desc}
                </p>

                <div className="mt-6 border-t border-slate-100 pt-5">

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-900 transition group-hover:gap-3"
                  >
                    Read article
                    <ArrowRight size={16} />
                  </Link>

                </div>

              </article>
            ))}

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-800 hover:text-blue-900"
            >
              Explore All Research Articles
              <ArrowRight size={16} />
            </Link>
          </div>

        </section>

        {/* Academic Profiles */}

        <section
          id="profiles"
          className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-20 lg:py-24"
        >

          <div className="mx-auto max-w-7xl px-6 sm:px-8">

            <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">

              <div>

                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-blue-800">
                  <Award size={18} />
                  SCHOLARLY CONTRIBUTIONS
                </div>

                <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                  Research Beyond the Pages
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
                  Academic research is an ongoing process of
                  investigation, discovery, and knowledge sharing.
                  Explore scholarly publications, research
                  contributions, academic achievements, and citation
                  records through researcher profiles.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">

                  <a
                    href={googleScholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
                  >
                    Google Scholar
                    <ExternalLink size={15} />
                  </a>

                  <a
                    href={researchGateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-800 hover:text-blue-900"
                  >
                    ResearchGate
                    <ExternalLink size={15} />
                  </a>

                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <GraduationCap
                    size={25}
                    className="mb-5 text-blue-900"
                  />

                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Academic Research
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Scholarly contributions and academic achievements.
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <Globe
                    size={25}
                    className="mb-5 text-blue-900"
                  />

                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Global Knowledge
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Connecting researchers, ideas, and academic communities.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <FileText
                    size={25}
                    className="mb-5 text-blue-900"
                  />

                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Publications
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Peer-reviewed research and scholarly publications.
                  </p>
                </div>

                <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <BookOpen
                    size={25}
                    className="mb-5 text-blue-900"
                  />

                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Research Learning
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    Educational resources for students and researchers.
                  </p>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* FAQ */}

        <section
          id="faq"
          className="mx-auto max-w-4xl scroll-mt-24 px-6 py-20 sm:px-8 lg:py-24"
        >

          <div className="mb-10 text-center">

            <div className="mb-3 flex items-center justify-center gap-2 text-sm font-semibold text-blue-800">
              <BookOpen size={17} />
              KNOWLEDGE & INFORMATION
            </div>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Find answers about ScholarGrid, its academic resources,
              research guidance, and educational content.
            </p>

          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white divide-y divide-slate-200">

            {visibleFaqs.map((faq, index) => {

              const isOpen = openFaqIndex === index;

              return (
                <div key={faq.q}>

                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaqIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition hover:bg-slate-50 sm:px-7"
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
                      className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-900" : ""
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="bg-slate-50 px-5 pb-6 pt-1 text-sm leading-7 text-slate-600 sm:px-7">
                      {faq.a}
                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {!showAllFaqs && (
            <div className="mt-7 text-center">

              <button
                type="button"
                onClick={() => setShowAllFaqs(true)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 transition hover:gap-3"
              >
                Show all {faqs.length} questions
                <ArrowRight size={15} />
              </button>

            </div>
          )}

        </section>

        {/* Knowledge Section */}

        <section className="border-y border-slate-200 bg-blue-950">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-center sm:px-8 md:flex-row md:text-left">

            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                EXPLORE. LEARN. DISCOVER.
              </p>

              <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                Continue Your Research Journey
              </h2>

              <p className="mt-2 max-w-xl text-sm leading-7 text-blue-100/80">
                Discover practical academic resources, develop
                research skills, and explore new perspectives
                across different fields of knowledge.
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-sm font-bold text-blue-950 transition hover:bg-blue-50"
            >
              Visit Knowledge Library
              <ArrowRight size={17} />
            </Link>

          </div>

        </section>

      </main>

      {/* Footer */}

      <footer className="bg-slate-950 text-slate-400">

        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <Link
              href="/"
              className="inline-flex items-center gap-3"
            >
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

            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              An academic knowledge platform providing educational
              resources, research guidance, academic writing
              insights, methodological resources, and scholarly
              publishing information for researchers across
              different disciplines.
            </p>

          </div>

          {/* Explore */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/blog" className="transition hover:text-white">
                  Research Articles
                </Link>
              </li>

              <li>
                <a href="#research" className="transition hover:text-white">
                  Research Areas
                </a>
              </li>

              <li>
                <a href="#insights" className="transition hover:text-white">
                  Latest Insights
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-white">
                  FAQ
                </a>
              </li>

            </ul>

          </div>

          {/* Academic Profiles */}

          <div>

            <h3 className="text-sm font-bold text-white">
              Academic Profiles
            </h3>

            <ul className="mt-5 space-y-3 text-sm">

              <li>
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  Google Scholar
                  <ExternalLink size={13} />
                </a>
              </li>

              <li>
                <a
                  href={researchGateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition hover:text-white"
                >
                  ResearchGate
                  <ExternalLink size={13} />
                </a>
              </li>

            </ul>

          </div>

        </div>

        {/* Copyright */}

        <div className="border-t border-slate-800 px-6 py-6 sm:px-8">

          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">

            <p>
              © 2026 ScholarGrid. All rights reserved.
            </p>

            <p>
              Advancing Academic Knowledge Through Research & Innovation.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}