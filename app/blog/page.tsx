
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Knowledge Library | ScholarGrid",
  description:
    "Explore practical academic research guides, manuscript writing advice, literature review strategies, and scholarly publishing resources.",
};

const articles = [
  {
    number: "01",
    category: "Research Writing",
    title: "How to Structure a Q1 Research Paper",
    description:
      "Understand the essential sections of a high-quality research paper, from the introduction and methodology to results, discussion, and conclusion.",
    href: "/blog/q1-research-paper-structure",
  },
  {
    number: "02",
    category: "Academic Publishing",
    title: "Research Paper Formatting Guide",
    description:
      "Learn how to organize and format your manuscript according to academic journal requirements and improve its overall presentation.",
    href: "/blog/formatting-guide",
  },
  {
    number: "03",
    category: "Scholarly Publishing",
    title: "Common Reasons Why Research Papers Get Rejected",
    description:
      "Explore common manuscript rejection reasons and understand how to address weaknesses in research quality, methodology, writing, and presentation.",
    href: "/blog/paper-rejection-reasons",
  },
  {
    number: "04",
    category: "Research Visualization",
    title: "Creating Effective Contour Visualizations in Research",
    description:
      "Discover how well-designed contour plots and scientific visualizations can help communicate research findings clearly and effectively.",
    href: "/blog/contour-visualizations",
  },
  {
    number: "05",
    category: "Literature Review",
    title: "A Practical Guide to Systematic Literature Reviews",
    description:
      "Explore the key stages of a systematic literature review, including research question development, literature searching, screening, and synthesis.",
    href: "/blog/systematic-literature-review-guide",
  },
  {
    number: "06",
    category: "Manuscript Preparation",
    title: "Q1 and Q2 Manuscript Formatting: How to Avoid Common Mistakes",
    description:
      "Learn about common manuscript formatting problems and practical ways to prepare your research paper for journal submission.",
    href: "/blog/q1-q2-manuscript-formatting-avoid-rejection",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight text-slate-950"
          >
            ScholarGrid<span className="text-blue-600">.</span>
          </Link>

          <nav className="flex items-center gap-6">
            <Link
              href="/"
              className="hidden text-sm font-medium text-slate-600 transition hover:text-blue-700 sm:inline-block"
            >
              Home
            </Link>
            <span className="text-sm font-semibold text-blue-700">
              Knowledge Library
            </span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
              <BookOpen size={16} />
              Research Knowledge Library
            </div>

            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Knowledge That
              <span className="block text-blue-300">
                Moves Research Forward.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Explore practical guides, academic writing resources, research
              strategies, and scholarly publishing insights to support every
              stage of your research journey.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#articles"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Explore Articles
                <ArrowUpRight size={17} />
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
              >
                <ArrowLeft size={16} />
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section
        id="articles"
        className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24"
      >
        <div className="mb-12 flex flex-col justify-between gap-5 border-b border-slate-200 pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
              Explore Our Resources
            </p>

            <h2 className="font-serif text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Latest Research Articles
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Carefully prepared resources to help researchers improve their
              academic writing, research methods, and publishing practices.
            </p>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <BookOpen size={18} className="text-blue-600" />
            {articles.length} Articles
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.number}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-200/60"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="text-3xl font-serif font-semibold text-slate-200 transition group-hover:text-blue-200">
                  {article.number}
                </span>

                <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                  {article.category}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold leading-snug text-slate-950 transition group-hover:text-blue-700">
                {article.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                {article.description}
              </p>

              <div className="mt-7 border-t border-slate-100 pt-5">
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition group-hover:gap-3"
                >
                  Read Article
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            ScholarGrid
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-semibold text-slate-950 sm:text-4xl">
            Supporting Researchers at Every Stage
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600">
            Return to ScholarGrid to explore research resources and tools
            designed to support your academic work.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Visit ScholarGrid
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-6 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-white"
          >
            ScholarGrid<span className="text-blue-400">.</span>
          </Link>

          <p className="text-sm text-slate-400">
            © 2026 ScholarGrid. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
