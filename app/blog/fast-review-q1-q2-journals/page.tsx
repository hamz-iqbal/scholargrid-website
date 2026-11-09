"use client";

import React, { useState } from "react";
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
  Menu,
  X,
  List,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "introduction", title: "Introduction" },
  { id: "quartiles", title: "Understanding Q1/Q2 Quartiles" },
  { id: "long-list", title: "Defining Scope and Building a Long List" },
  { id: "speed-data", title: "Collecting Real Speed Data" },
  { id: "vetting", title: "Vetting Quality and Legitimacy" },
  { id: "ranking", title: "Ranking Your Top Three Journals" },
  { id: "tradeoff-map", title: "Mapping the Speed–Impact Trade-Off" },
  { id: "journal-types", title: "Journal Types That Balance Speed and Impact" },
  { id: "faster-review", title: "Speeding Up Your Own Review" },
  { id: "flags", title: "Red Flags vs. Green Flags" },
  { id: "final-checklist", title: "Final Submission Checklist" },
  { id: "references", title: "References" },
];

/* ------------------------------------------------------------------ */
/* Reusable figure component                                           */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Reusable section heading                                            */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Reusable bullet list (same markup as the original article)          */
/* ------------------------------------------------------------------ */

function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-3 text-[15px] leading-[1.8] text-slate-700">
      {items.map((item, index) => (
        <li key={index} className="flex gap-3">
          <CheckCircle2 className="mt-1 h-[18px] w-[18px] shrink-0 text-blue-800" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Main article page                                                   */
/* ------------------------------------------------------------------ */

export default function FastReviewJournalsBlog() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const referenceList = [
    <>
      B. González-Pereira, V. P. Guerrero-Bote, and F. Moya-Anegón, "A new
      approach to the metric of journals' scientific prestige: The SJR
      indicator," <i>Journal of Informetrics</i>, vol. 4, no. 3,
      pp. 379–391, 2010.
    </>,
    <>
      E. Garfield, "The history and meaning of the journal impact factor,"
      <i> JAMA</i>, vol. 295, no. 1, pp. 90–93, 2006.
    </>,
    <>
      SCImago Lab, "SCImago Journal &amp; Country Rank,"
      https://www.scimagojr.com.
    </>,
    <>
      Clarivate, "Journal Citation Reports,"
      https://clarivate.com/academia-government/scientific-and-academic-research/research-funding-analytics/journal-citation-reports/.
    </>,
    <>
      B.-C. Björk and D. Solomon, "The publishing delay in scholarly
      peer-reviewed journals," <i>Journal of Informetrics</i>, vol. 7,
      no. 4, pp. 914–923, 2013.
    </>,
    <>
      J. Huisman and J. Smits, "Duration and quality of the peer review
      process: The author's perspective," <i>Scientometrics</i>,
      vol. 113, no. 1, pp. 633–650, 2017.
    </>,
    <>
      K. Powell, "Does it take too long to publish research?"
      <i> Nature</i>, vol. 530, no. 7589, pp. 148–151, 2016.
    </>,
    <>
      SciRev, "Author-reported peer review experiences,"
      https://scirev.org.
    </>,
    <>
      A. Grudniewicz et al., "Predatory journals: No definition, no
      defence," <i>Nature</i>, vol. 576, no. 7786, pp. 210–212, 2019.
    </>,
    <>
      L. Shamseer et al., "Potential predatory and legitimate biomedical
      journals: Can you tell the difference? A cross-sectional
      comparison," <i>BMC Medicine</i>, vol. 15, Art. no. 28, 2017.
    </>,
    <>
      Committee on Publication Ethics (COPE), "Core practices and
      guidance," https://publicationethics.org.
    </>,
    <>
      Directory of Open Access Journals (DOAJ), https://doaj.org.
    </>,
    <>
      Think. Check. Submit., "Choose the right place for your research,"
      https://thinkchecksubmit.org.
    </>,
  ];

  const checklist = [
    "The journal is Q1 or Q2 in my specific subject category (latest year).",
    "It is indexed in Scopus and/or Web of Science, verified directly at the source.",
    "I sampled recent papers and calculated received-to-accepted times.",
    "The scope match is strong, and I have read at least three recent articles.",
    "Costs (APC, colour charges) fit my budget or funding.",
    "The manuscript follows the template and includes all required statements.",
    "I have a second and third choice ready.",
  ];

  const journalTypes = [
    {
      type: "Large multidisciplinary or broad-scope engineering journals (e.g., IEEE Access, Scientific Reports)",
      strength: "High volume, structured workflows, wide readership.",
      caution: "Broad scope means competition for attention; check topic-specific quartile.",
    },
    {
      type: "Application-focused society and publisher journals (e.g., IEEE Transactions letters, Elsevier “Results in…” and “Case Studies in…” series)",
      strength: "Welcome applied and incremental work, often clear review targets.",
      caution: "Some titles are newer; verify indexing and category quartile.",
    },
    {
      type: "Letters and rapid-communication journals",
      strength: "Short format, quick first decisions.",
      caution: "Strict length limits and novelty expectations.",
    },
    {
      type: "Open-access journals with published timelines (e.g., MDPI, Frontiers titles)",
      strength: "Transparent time-to-decision data, fast turnaround.",
      caution: "Article processing charges; review quality varies by title, so judge each journal individually.",
    },
    {
      type: "Traditional flagship journals",
      strength: "Highest prestige and visibility.",
      caution: "Longer reviews, higher desk-rejection rates.",
    },
  ];

  const flags = [
    {
      red: "Guaranteed acceptance or “review in 3 days”.",
      green: "Median review times published with methodology.",
    },
    {
      red: "Unsolicited emails inviting you to submit.",
      green: "Indexed in Scopus/WoS, verified at the source.",
    },
    {
      red: "Vague scope covering all of science.",
      green: "Clear aims and scope aligned with your topic.",
    },
    {
      red: "Fake or copied impact factor claims.",
      green: "Quartile confirmed in SJR/JCR for the correct category.",
    },
    {
      red: "No named editors or unverifiable board members.",
      green: "Transparent editors and peer-review policy, COPE alignment [11].",
    },
    {
      red: "Fees requested before peer review is described.",
      green: "Clear APC policy with waivers where applicable.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">

      {/* ------------------------------------------------------------ */}
      {/* Announcement bar                                              */}
      {/* ------------------------------------------------------------ */}

      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Journal Selection and Publishing Insights
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Navigation                                                     */}
      {/* ------------------------------------------------------------ */}

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
            <Link href="/" className="transition hover:text-blue-800">
              Home
            </Link>
            <Link href="/#services" className="transition hover:text-blue-800">
              Services
            </Link>
            <Link href="/#process" className="transition hover:text-blue-800">
              How it works
            </Link>
            <Link href="/#insights" className="transition hover:text-blue-800">
              Insights
            </Link>
            <Link
              href="/blog"
              className="font-semibold text-blue-800 transition hover:text-blue-950"
            >
              Knowledge Library
            </Link>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={mobileMenuOpen}
            className="rounded-lg border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-50 md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </Link>
              <Link href="/#insights" onClick={() => setMobileMenuOpen(false)}>
                Insights
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)}>
                Knowledge Library
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main>

        {/* ---------------------------------------------------------- */}
        {/* Article header                                              */}
        {/* ---------------------------------------------------------- */}

        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl px-6 pb-10 pt-9 sm:pb-12 sm:pt-12">

            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm">
              <Link
                href="/"
                className="font-medium text-slate-500 transition hover:text-blue-800"
              >
                Home
              </Link>
              <ChevronRight size={14} className="text-slate-400" />
              <Link
                href="/blog"
                className="font-medium text-slate-500 transition hover:text-blue-800"
              >
                Knowledge Library
              </Link>
              <ChevronRight size={14} className="text-slate-400" />
              <span className="font-medium text-blue-800">
                Journal Selection
              </span>
            </div>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Journal Selection
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} />
                November 2026
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} />
                10 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              How to Find Fast-Review Q1/Q2 Journals in Engineering & Applied Sciences Without Sacrificing Impact
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical guide for researchers who need to publish quickly,
              and well, using a repeatable process to shortlist, verify, and
              rank journals in engineering and applied sciences.
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
                  <p className="text-sm font-bold text-slate-950">
                    ScholarGrid Technical Team
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Research and Scholarly Publishing
                  </p>
                </div>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition hover:border-blue-800 hover:bg-blue-50"
              >
                <BookOpen size={15} />
                All Articles
              </Link>

            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Article layout                                              */}
        {/* ---------------------------------------------------------- */}

        <div
          id="article-content"
          className="mx-auto grid max-w-7xl gap-9 px-5 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_270px] lg:gap-12 lg:py-12"
        >

          {/* Article body */}

          <article className="min-w-0">

            {/* Introduction */}

            <div
              id="introduction"
              className="scroll-mt-28 mb-7 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6"
            >
              <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                Every engineering researcher knows the feeling: the
                experiments are done, the manuscript is polished, and then
                the waiting begins. Six months for a first decision is not
                unusual in some journals. If you are a PhD student facing a
                graduation requirement, an early-career researcher with a
                tenure or grant clock ticking, or a lab chasing a funding
                deadline, that delay is costly. The good news is that speed
                and impact are not opposites. Fig. 1 summarises a six-step
                workflow for finding journals that offer both.
              </p>
            </div>

            <ArticleFigure
              src="/blogs/fig35.png"
              alt="Six-step workflow for building a shortlist of fast, high-quality journals"
              caption="Fig. 1. Six-step workflow for building a shortlist of fast, high-quality journals."
            />

            <p className="mb-5 text-[15px] leading-[1.85] text-slate-700">
              Many reputable Q1 and Q2 journals in engineering and applied
              sciences have efficient editorial systems. The trick is
              knowing how to find them, how to verify them, and how to
              avoid the “fast but predatory” trap. This guide covers
              quartile basics, building a long list, collecting real review
              speed data, vetting legitimacy, ranking candidates with a
              scorecard, and preparing your submission so that the review
              moves as quickly as possible.
            </p>

            {/* Section 1 */}

            <SectionHeading id="quartiles" number="01">
              Understand What “Q1/Q2” Actually Means
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Quartiles rank journals within a subject category by an impact
              metric. A Q1 journal sits in the top 25% of its category, and
              Q2 in the 25–50% band. Two main systems are used:
            </p>

            <BulletList
              items={[
                <>
                  <b>Journal Citation Reports (Clarivate):</b> quartiles are
                  based on the Journal Impact Factor (JIF) within Web of
                  Science categories [2], [4].
                </>,
                <>
                  <b>SCImago Journal Rank (SJR, Scopus data):</b> quartiles
                  are based on SJR, which weights citations by the prestige
                  of the citing journal. It is free to use [1], [3].
                </>,
              ]}
            />

            <div className="my-6 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
              <p className="text-sm font-bold text-blue-950">
                Important consideration
              </p>
              <p className="mt-1.5 text-sm leading-[1.8] text-slate-700">
                A journal can be Q1 in one category and Q2 or Q3 in another,
                and quartiles change every year. Always check the category
                that matches your topic, and use the most recent data
                release.
              </p>
            </div>

            {/* Section 2 */}

            <SectionHeading id="long-list" number="02">
              Define Your Scope and Build a Long List
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Write a two-sentence summary of what is new in your work and
              pick three to five keywords. Be honest about whether your
              contribution is a fundamental advance, an application, or a
              case study. Applied and incremental work often finds faster,
              more welcoming homes in applications-focused journals than in
              flagship titles. Then use several sources rather than one:
            </p>

            <BulletList
              items={[
                <>
                  <b>SCImago (scimagojr.com):</b> filter by subject area
                  (e.g., Engineering, Materials Science, Energy) and by
                  quartile [3].
                </>,
                <>
                  <b>Scopus / Web of Science “Find a journal” tools:</b>{" "}
                  paste your abstract and get matches by topic.
                </>,
                <>
                  <b>Publisher matchers:</b> Elsevier JournalFinder,
                  Springer Journal Suggester, IEEE Publication Recommender,
                  Wiley Journal Finder, and similar tools.
                </>,
                <>
                  <b>Your own reference list:</b> the journals you cite most
                  are natural candidates, because they already publish on
                  your topic.
                </>,
                <>
                  <b>DOAJ:</b> useful for verifying open-access titles [12].
                </>,
              ]}
            />

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Narrow the long list to Q1 and Q2 journals in your closest
              subject category. Where possible, confirm the quartile in both
              SJR and JCR. A journal that is strong in both is a safer bet
              for hiring and promotion committees.
            </p>

            {/* Section 3 */}

            <SectionHeading id="speed-data" number="03">
              Collect Real Speed Data
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              This is where most researchers stop too early. Publication
              delays vary widely between journals and fields [5], [7], and a
              journal’s home page rarely tells the full story, so combine
              several signals:
            </p>

            <BulletList
              items={[
                <>
                  <b>Journal “About” or “Metrics” page:</b> many publishers
                  (Elsevier, Springer Nature, MDPI, Frontiers, Wiley) now
                  display median or average “time to first decision” and
                  “submission to acceptance”.
                </>,
                <>
                  <b>Published articles:</b> each paper lists received,
                  revised, and accepted dates. Sample 15–20 recent papers
                  and calculate the gaps yourself, an approach used in
                  published studies of publishing delay [5], [6]. This is
                  the most honest data you can get.
                </>,
                <>
                  <b>Review-time aggregators and community reports:</b>{" "}
                  sites such as SciRev collect author-reported review
                  times. Treat them as directional, not definitive [8].
                </>,
                <>
                  <b>Special issues and fast-track options:</b> these can
                  shorten timelines, but check that the same rigorous review
                  applies.
                </>,
              ]}
            />

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Most of the difference between fast and slow journals comes
              from two places: how quickly editors secure reviewers, and how
              long the review window lasts. Studies of the author’s
              perspective confirm that review duration differs substantially
              between journals [6], [7]. Journals with active handling
              editors and shorter review deadlines tend to publish more
              predictably (Fig. 2).
            </p>

            <ArticleFigure
              src="/blogs/fig36.png"
              alt="Bar chart comparing time spent per review stage in fast-track and slow journals"
              caption="Fig. 2. Typical places where review time is gained or lost (illustrative ranges, not measured data)."
            />

            {/* Section 4 */}

            <SectionHeading id="vetting" number="04">
              Vet for Quality and Legitimacy
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Fast does not mean careless, but some predatory outlets
              exploit the demand for speed [9], [10]. Before submitting,
              check the following:
            </p>

            <BulletList
              items={[
                "The journal is indexed in Scopus or Web of Science (verify directly in the index, not by the badge on the journal website).",
                "An identifiable editorial board with real affiliations and publication records.",
                <>
                  Transparent peer-review policy, ethics statements, and a
                  clear retraction process (see COPE membership and
                  guidelines [11]).
                </>,
                <>
                  No guarantees of acceptance within days, no unsolicited
                  email invitations, and no hidden fees. The “Think. Check.
                  Submit.” checklist is a useful companion [13].
                </>,
                "Check the journal against current lists of delisted or discontinued titles, since indexing status can change.",
              ]}
            />

            {/* Section 5 */}

            <SectionHeading id="ranking" number="05">
              Rank Your Top Three and Plan a Fallback
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Combine your findings into a weighted score (Fig. 3 offers a
              starting template). Choose a first-choice journal, a second,
              and a safe third, and prepare your cover letter and formatting
              so that a transfer takes days rather than weeks.
            </p>

            <ArticleFigure
              src="/blogs/fig37.png"
              alt="Horizontal bar chart of suggested scorecard weights for ranking journals"
              caption="Fig. 3. Example scorecard weights for ranking candidate journals. Adjust to your own priorities."
            />

            {/* Section 6 */}

            <SectionHeading id="tradeoff-map" number="06">
              Map the Speed–Impact Trade-Off
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              It helps to place candidate journals on a simple map. The goal
              is the upper-right quadrant: journals that are both fast and
              well regarded. Journals that are prestigious but slow can
              still be the right choice for a major result, but should be
              planned for in advance. The lower-right quadrant is where
              predatory or low-rigor outlets tend to appear [9], [10]
              (Fig. 4).
            </p>

            <ArticleFigure
              src="/blogs/fig38.png"
              alt="Quadrant map of journal speed versus impact"
              caption="Fig. 4. Conceptual speed-versus-impact map for positioning candidate journals."
            />

            {/* Section 7 */}

            <SectionHeading id="journal-types" number="07">
              Journal Types That Balance Speed and Impact
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Without naming a “best” list (quartiles shift every year),
              these categories commonly offer efficient review while keeping
              Q1/Q2 standing in engineering and applied sciences.
            </p>

            <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-4 py-3.5 font-semibold">Journal type</th>
                      <th className="px-4 py-3.5 font-semibold">Typical strengths</th>
                      <th className="px-4 py-3.5 font-semibold">What to watch</th>
                    </tr>
                  </thead>
                  <tbody>
                    {journalTypes.map((item, index) => (
                      <tr
                        key={item.type}
                        className={`border-b border-slate-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <td className="px-4 py-3.5 font-semibold text-slate-900">
                          {item.type}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">
                          {item.strength}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">
                          {item.caution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="my-6 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
              <p className="text-sm font-bold text-blue-950">Please note</p>
              <p className="mt-1.5 text-sm leading-[1.8] text-slate-700">
                The examples above illustrate categories and are not
                endorsements. Always confirm the current quartile, indexing
                status, and review metrics before submitting.
              </p>
            </div>

            {/* Section 8 */}

            <SectionHeading id="faster-review" number="08">
              Speed Up Your Own Review
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Journals control some of the timeline, but you control more
              than you think.
            </p>

            <BulletList
              items={[
                <>
                  <b>Avoid desk rejection:</b> match the scope, follow the
                  author guidelines exactly, and state your novelty in the
                  first paragraph of the abstract and cover letter.
                </>,
                <>
                  <b>Suggest qualified reviewers:</b> provide four to six
                  reviewers with institutional emails, no conflicts of
                  interest, and relevant publications. This reduces the time
                  editors spend finding them.
                </>,
                <>
                  <b>Submit a complete package:</b> figures at proper
                  resolution, a data availability statement, ethics
                  statements, and a clean reference list prevent
                  technical-check delays.
                </>,
                <>
                  <b>Pre-submission polish:</b> language editing and a
                  colleague’s read can avoid a major-revision round.
                </>,
                <>
                  <b>Respond to reviewers quickly and thoroughly:</b> a
                  point-by-point response with tracked changes often
                  shortens the revision cycle.
                </>,
                <>
                  <b>Use preprints where allowed:</b> posting on arXiv,
                  TechRxiv, or similar establishes priority while you wait.
                </>,
              ]}
            />

            {/* Red / green flags */}

            <SectionHeading id="flags">Red Flags vs. Green Flags</SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Use this comparison as a quick screen before you invest time in
              formatting a submission.
            </p>

            <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-4 py-3.5 font-semibold">Red flags (proceed with caution)</th>
                      <th className="px-4 py-3.5 font-semibold">Green flags (generally reassuring)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {flags.map((item, index) => (
                      <tr
                        key={index}
                        className={`border-b border-slate-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">
                          {item.red}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">
                          {item.green}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Final checklist */}

            <SectionHeading id="final-checklist">
              Final Submission Checklist
            </SectionHeading>

            <p className="mt-4 text-[15px] leading-[1.85] text-slate-700">
              Before you click “Submit”, use this checklist to confirm that
              your target journal is both fast enough and credible enough
              for your goals.
            </p>

            <div className="mt-5 space-y-2">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-3.5"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-sm leading-[1.8] text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* References */}

            <div
              id="references"
              className="mt-12 scroll-mt-28 border-t border-slate-200 pt-8"
            >
              <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                Further Reading
              </p>

              <h2 className="font-serif text-2xl font-bold text-slate-950 sm:text-3xl">
                References
              </h2>

              <ol className="mt-5 list-decimal space-y-3 pl-5 text-[13px] leading-[1.8] text-slate-600 sm:text-sm">
                {referenceList.map((reference, index) => (
                  <li key={index} className="pl-1">
                    {reference}
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-xs italic leading-relaxed text-slate-500">
                Journal metrics, quartiles, and review times change
                frequently. Figures 2 and 4 are conceptual illustrations, not
                measured data. Verify all details on SCImago, Journal
                Citation Reports, and the journal’s own website before
                making decisions.
              </p>
            </div>

            {/* Article ending */}

            <div className="mt-10 border-t border-slate-200 pt-7">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-blue-800">
                ScholarGrid Research Library
              </p>

              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                Finding a fast-review Q1 or Q2 journal is less about luck and
                more about method. By screening for quartile, gathering real
                turnaround data, vetting legitimacy, and preparing a polished
                submission, researchers can often shave months off their
                timeline without compromising on reputation.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  <ArrowLeft size={16} />
                  Back to Knowledge Library
                </Link>

                <Link
                  href="/"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                  Explore ScholarGrid
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

          </article>

          {/* -------------------------------------------------------- */}
          {/* Desktop sidebar                                           */}
          {/* -------------------------------------------------------- */}

          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-5">

              {/* Table of contents */}

              <div className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                  <List size={17} className="text-blue-800" />
                  <h3 className="font-serif text-base font-bold text-slate-950">
                    In This Article
                  </h3>
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
                        className="mt-1 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Knowledge library card */}

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                  <BookOpen size={19} />
                </div>

                <h3 className="font-serif text-lg font-bold text-slate-950">
                  Explore More Research Guides
                </h3>

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
                  <ArrowRight size={15} />
                </Link>
              </div>

              {/* Homepage link */}

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900"
              >
                <ArrowLeft size={15} />
                Back to Homepage
              </Link>

            </div>
          </aside>

        </div>

        {/* ---------------------------------------------------------- */}
        {/* Related reading section                                    */}
        {/* ---------------------------------------------------------- */}

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-blue-800">
                  Continue Exploring
                </p>
                <h2 className="mt-2 font-serif text-2xl font-bold text-slate-950">
                  More from the Research Library
                </h2>
              </div>

              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
              >
                View All Articles
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

      </main>

      {/* ------------------------------------------------------------ */}
      {/* Footer                                                        */}
      {/* ------------------------------------------------------------ */}

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
              resources, scholarly writing guidance, and publishing
              insights for researchers across disciplines.
            </p>
          </div>

          {/* Explore */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Explore ScholarGrid
            </h3>

            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Academic Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="transition hover:text-white">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="transition hover:text-white">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Article links */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Research Resources
            </h3>

            <ul className="mt-4 space-y-2.5 text-[13px]">
              <li>
                <Link
                  href="/blog/formatting-guide"
                  className="transition hover:text-white"
                >
                  Manuscript Formatting
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/paper-rejection-reasons"
                  className="transition hover:text-white"
                >
                  Journal Rejection Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/fast-review-q1-q2-journals"
                  className="transition hover:text-white"
                >
                  Fast-Review Q1/Q2 Journals
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/contour-visualizations"
                  className="transition hover:text-white"
                >
                  Scientific Visualization
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/systematic-literature-review-guide"
                  className="transition hover:text-white"
                >
                  Literature Review Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="transition hover:text-white"
                >
                  All Articles
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 px-6 py-5 text-center text-xs leading-relaxed text-slate-500">
          © 2026 ScholarGrid. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
