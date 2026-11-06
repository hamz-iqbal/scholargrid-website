"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Award,
  Cpu,
  BarChart2,
  MessageSquare,
  CheckCircle,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Mail,
  ExternalLink,
  ShieldCheck,
  X,
  Send,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Rotating copy (kept from your original version)                    */
/* ------------------------------------------------------------------ */
const announcementVariations = [
  "Fast-track your Q1/Q2 manuscript for Elsevier and Springer",
  "Expert MATLAB and Python numerical modeling for thesis and research support",
  "Accelerate your scholarly publications with advanced computational simulations",
  "Global academic consultancy for PhD scholars: IEEE and Elsevier formatting experts",
  "Enhance your research impact with precision data analysis and PINNs modeling",
  "Professional manuscript editing and journal submission strategy for researchers",
];

const badgeVariations = [
  "Engineering and computational research specialists",
  "Advanced numerical simulation and AI modeling experts",
  "Q1/Q2 journal manuscript formatting and support",
  "Python, MATLAB and LaTeX academic consultants",
  "Rigorous editorial and data analysis partners",
  "Empowering global scholars and PhD researchers",
];

const mainTitleVariations = [
  "Accelerate your research with",
  "Elevate your academic work to",
  "Maximize publication success with",
  "Optimize your scientific papers for",
  "Transform your research drafts into",
  "Advance your scholarly career with",
];

const gradientTitleVariations = [
  "publication-ready precision",
  "world-class journal standards",
  "Q1/Q2 impact excellence",
  "flawless academic formatting",
  "advanced computational accuracy",
  "top-tier editorial mastery",
];

const subtitleVariations = [
  "End-to-end expertise for engineering manuscripts, Python/MATLAB numerical simulations, Physics-Informed Neural Networks (PINNs), and IEEE/Elsevier template formatting.",
  "Accelerate your academic publishing journey with advanced numerical simulations, precise data visualization, and rigorous editorial support.",
  "Empowering researchers worldwide with publication-ready formatting, custom algorithmic solvers, and expert journal submission strategies.",
  "Professional academic consultancy specializing in high-impact Q1/Q2 journal manuscripts, computational modeling, and thesis development.",
  "Custom computational research solutions, comprehensive MATLAB/Python simulations, and immaculate journal layout styling for ambitious scholars.",
  "Streamline your peer-reviewed submissions with expert technical proofreading, advanced mathematical modeling, and precise manuscript formatting.",
];

const pick = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

/* ------------------------------------------------------------------ */
/*  Static data                                                        */
/* ------------------------------------------------------------------ */
const faqs = [
  { q: "What core services does ScholarGrid offer to researchers?", a: "We provide comprehensive academic research assistance, including journal manuscript formatting, custom computational modeling, numerical simulations, data visualization, and technical polishing for peer-reviewed submissions.", category: "Services" },
  { q: "Which academic publishers do you format manuscripts for?", a: "We format manuscripts strictly according to the author guidelines of major international publishers, including IEEE, Elsevier, Springer Nature, Wiley, Taylor & Francis, and MDPI.", category: "Formatting" },
  { q: "Can you assist with both LaTeX and MS Word templates?", a: "Yes, we handle complete document conversions and styling in both LaTeX (Overleaf) and MS Word, ensuring all figures, equations, and tables adhere to target journal specifications.", category: "Formatting" },
  { q: "How do I get started with a consultation?", a: "Click the Get Consultancy button and choose WhatsApp or Email to share your project outline, draft, or simulation requirements directly with our technical consultancy team.", category: "Process" },
  { q: "Is the initial manuscript review or project assessment free?", a: "Yes, our initial manuscript evaluation and preliminary project feasibility assessment are completely free of charge.", category: "Pricing" },
  { q: "What is the typical turnaround time for a project?", a: "Turnaround times depend on project scope and complexity. Standard formatting takes 2–4 days, while complex simulation scripts and data modeling usually require 5–10 days.", category: "Process" },
  { q: "Can you assist postgraduate students with thesis and dissertation formatting?", a: "Yes, we format Master's theses and Ph.D. dissertations according to specific institutional or university guidelines and style manuals.", category: "Services" },
  { q: "How do you ensure the confidentiality of my research data?", a: "We treat all intellectual property with strict confidentiality. Your drafts, raw data, codes, and unpublished results remain 100% secure and private.", category: "Security" },
  { q: "Do you offer custom coding for numerical modeling and algorithms?", a: "Yes, we develop custom, well-documented scripts in Python and MATLAB for mathematical modeling, differential equations, optimization, and data analysis.", category: "Simulations" },
  { q: "Can you fix reference lists and citation style inconsistencies?", a: "Yes, we organize and format references using tools like EndNote and Mendeley to match the exact citation style (APA, IEEE, Harvard, Vancouver, etc.) required by your journal.", category: "Formatting" },
  { q: "Do you generate publication-quality figures and graphics?", a: "Yes, we transform raw experimental or numerical data into high-resolution 2D/3D plots, vector graphics, and clear schematic diagrams suitable for high-impact journals.", category: "Graphics" },
  { q: "Can you help respond to reviewer comments and revise manuscripts?", a: "Yes, we assist authors in addressing peer-review feedback, revising manuscript content, and drafting professional point-by-point response letters.", category: "Publishing" },
  { q: "What options are available for international client payments?", a: "We accept flexible international transfer options. Detailed payment steps and invoices are provided upon project confirmation.", category: "Pricing" },
  { q: "Do you offer language editing and technical proofreading?", a: "Yes, we refine scientific English, correct grammatical errors, improve academic phrasing, and enhance overall technical clarity.", category: "Editing" },
  { q: "How are post-delivery revisions or corrections handled?", a: "Yes, we provide dedicated post-delivery support and complementary minor revisions to ensure complete satisfaction and journal compliance.", category: "Process" },
  { q: "Can you convert an existing MS Word draft into a LaTeX project?", a: "Yes, we perform complete document conversions from MS Word to LaTeX, including complex mathematical equations, tables, and bibtex reference files.", category: "Formatting" },
  { q: "Do you provide original, reproducible code files with simulations?", a: "Yes, upon project completion, clients receive all original source codes, scripts, data files, and documentation for complete transparency and reproducibility.", category: "Simulations" },
  { q: "What fields of study do you support?", a: "While our core strength is in applied mathematics, engineering, computational sciences, and AI modeling, our manuscript formatting and publishing support applies to all quantitative research domains.", category: "Services" },
  { q: "Can we schedule a one-on-one virtual consultation?", a: "Yes, after an initial text review, we can arrange direct communication or virtual technical discussions to review your project requirements in detail.", category: "Process" },
  { q: "How can I submit my manuscript files for a quote?", a: "Use the Get Consultancy button and send your manuscript draft, guidelines, or simulation specs as a PDF, Word document, or ZIP file via WhatsApp or Email.", category: "Process" },
];

const blogPosts = [
  {
    tag: "Research paper structure",
    title: "The Master Guide to Structuring a Q1 Research Paper from Scratch: A 10-Part Blueprint",
    desc: "A comprehensive 10-part blueprint covering research paper organization, essential manuscript sections, logical flow, and preparation for high-impact journal submission.",
    href: "/blog/q1-research-paper-structure",
  },
  {
    tag: "Formatting guide",
    title: "A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier & IEEE",
    desc: "Templates, section structures, equation formatting, and figure resolutions for PhD scholars.",
    href: "/blog/formatting-guide",
  },
  {
    tag: "Publishing strategy",
    title: "Common Reasons Engineering Manuscripts Get Rejected by Journals (And How to Avoid Them)",
    desc: "A critical guide to bypassing desk rejections in Q1/Q2 journals.",
    href: "/blog/paper-rejection-reasons",
  },
  {
    tag: "Visualization",
    title: "Mastering Contour Plots & 3D Visualizations in Python and MATLAB for Q1 Journals",
    desc: "Build clean contour plots, color maps, and 3D surfaces for engineering papers.",
    href: "/blog/contour-visualizations",
  },
  {
    tag: "Research methodology",
    title: "How to Conduct a Systematic Literature Review and Synthesize Prior Work Like a Senior Researcher",
    desc: "Search protocols, PRISMA screening, concept matrices, and synthesis.",
    href: "/blog/systematic-literature-review-guide",
  },
  {
    tag: "Formatting & publishing",
    title: "Mastering Q1/Q2 Manuscript Formatting: Common Pitfalls and How to Avoid Rejection",
    desc: "Avoid outdated templates, weak first pages, low-quality figures, and reference chaos.",
    href: "/blog/q1-q2-manuscript-formatting-avoid-rejection",
  },
];

const steps = [
  { t: "Share your draft or requirements", d: "Send a manuscript, thesis, or simulation brief through WhatsApp or Email." },
  { t: "Receive a free assessment", d: "We review scope, target journal, and feasibility before any commitment." },
  { t: "Delivery with revision support", d: "Get publication-ready files, source code, and complementary minor revisions." },
];

const googleScholarUrl = "https://scholar.google.com/citations?hl=en&user=-VGaDnoAAAAJ";
const researchGateUrl = "https://www.researchgate.net/profile/Hamza-Iqbal-19?ev=hdr_xprf";

/* ------------------------------------------------------------------ */
/*  Consultancy modal (WhatsApp / Email live only in here)             */
/* ------------------------------------------------------------------ */
function ConsultModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const whatsappNumber = "923147982032";
  const whatsappMsg = encodeURIComponent(
    "Hello ScholarGrid team! I need expert support for my research manuscript / thesis simulation & formatting."
  );
  const emailAddress = "scholargrid030@gmail.com";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
    "Manuscript Review Inquiry"
  )}&body=${encodeURIComponent(
    "Hello ScholarGrid team, I would like to get assistance with my research manuscript."
  )}`;

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
        >
          <X size={18} />
        </button>

        <h2 id="consult-title" className="font-serif text-2xl font-bold text-slate-900">
          Get consultancy
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Choose how you would like to reach us. Your first manuscript assessment is free, and we usually reply the same day.
        </p>

        <div className="mt-6 space-y-3">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-emerald-600 hover:bg-emerald-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-700"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <MessageSquare size={20} />
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-slate-900">Continue on WhatsApp</span>
              <span className="block text-xs text-slate-500">Fastest way to share drafts and files</span>
            </span>

            <ArrowRight size={18} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-emerald-700" />
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-700 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-700"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-800 text-white">
              <Mail size={20} />
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-slate-900">Send an email</span>
              <span className="block text-xs text-slate-500">Best for detailed project briefs</span>
            </span>

            <ArrowRight size={18} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-800" />
          </a>
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck size={14} className="text-emerald-600" />
          Your drafts and data stay strictly confidential.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ScholarGridLandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const [announcement, setAnnouncement] = useState(announcementVariations[0]);
  const [badge, setBadge] = useState(badgeVariations[0]);
  const [mainTitle, setMainTitle] = useState(mainTitleVariations[0]);
  const [gradientTitle, setGradientTitle] = useState(gradientTitleVariations[0]);
  const [subtitle, setSubtitle] = useState(subtitleVariations[0]);

  useEffect(() => {
    setAnnouncement(pick(announcementVariations));
    setBadge(pick(badgeVariations));
    setMainTitle(pick(mainTitleVariations));
    setGradientTitle(pick(gradientTitleVariations));
    setSubtitle(pick(subtitleVariations));
  }, []);

  const visibleFaqs = showAllFaqs ? faqs : faqs.slice(0, 6);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  /* One button style, used everywhere */
  const ConsultButton = ({
    className = "",
    variant = "solid",
  }: {
    className?: string;
    variant?: "solid" | "light";
  }) => (
    <button
      onClick={openModal}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 ${
        variant === "solid"
          ? "bg-blue-800 text-white shadow-sm hover:bg-blue-900"
          : "bg-white text-blue-900 hover:bg-blue-50"
      } ${className}`}
    >
      Get Consultancy <ArrowRight size={16} />
    </button>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ConsultModal open={modalOpen} onClose={closeModal} />

      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs text-blue-100 sm:text-sm">
        {announcement}
      </div>

      {/* Responsive Navigation */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-3.5">

          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Image
              src="/logo.png"
              alt="ScholarGrid - Academic Research & Consultancy Logo"
              width={38}
              height={38}
              priority
              className="h-8 w-8 object-contain sm:h-9 sm:w-9"
            />

            <span className="font-serif text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
              ScholarGrid
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 lg:flex xl:gap-8">
            <a href="#services" className="whitespace-nowrap hover:text-blue-800">Services</a>
            <a href="#process" className="whitespace-nowrap hover:text-blue-800">How it works</a>
            <a href="#insights" className="whitespace-nowrap hover:text-blue-800">Insights</a>
            <a href="#profiles" className="whitespace-nowrap hover:text-blue-800">Publications</a>
            <a href="#faq" className="whitespace-nowrap hover:text-blue-800">FAQ</a>
          </div>

          {/* Consultancy Button */}
          <ConsultButton className="shrink-0 whitespace-nowrap !px-3 !py-2 !text-xs sm:!px-5 sm:!py-2.5 sm:!text-sm" />

        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div>
              <p className="mb-5 inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-900">
                {badge}
              </p>

              <h1 className="font-serif text-4xl font-bold leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                {mainTitle}
                <br />
                <span className="text-blue-800">{gradientTitle}</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                {subtitle}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <ConsultButton className="!px-8 !py-3.5 !text-base" />

                <span className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle size={16} className="text-emerald-600" />
                  Free initial manuscript assessment
                </span>
              </div>
            </div>

            {/* Process card */}
            <div
              id="process"
              className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60"
            >
              <h2 className="font-serif text-xl font-bold text-slate-900">
                How a project starts
              </h2>

              <ol className="mt-6 space-y-6">
                {steps.map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-800 text-sm font-semibold text-white">
                      {i + 1}
                    </span>

                    <div>
                      <p className="font-semibold text-slate-900">{s.t}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section aria-label="Track record" className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-6 md:grid-cols-4">
            {[
              ["18+", "Q1/Q2 journal papers"],
              ["100+", "Manuscripts processed"],
              ["100%", "Publisher compliance"],
              ["1-on-1", "Direct author support"],
            ].map(([n, l]) => (
              <div key={l} className="px-4 py-9 text-center">
                <div className="font-serif text-3xl font-bold text-blue-900 md:text-4xl">
                  {n}
                </div>
                <div className="mt-1 text-sm text-slate-600">{l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Publishers strip */}
        <section aria-label="Supported publishers" className="bg-slate-50 py-8">
          <p className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">
            Formatting aligned to the author guidelines of IEEE, Elsevier, Springer Nature, Wiley, Taylor &amp; Francis and MDPI
          </p>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              Comprehensive academic services
            </h2>

            <p className="mt-4 text-slate-600">
              Built for postgraduate students, PhD scholars, and engineering authors aiming for top-tier international publications.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: FileText,
                title: "Manuscript layout & formatting",
                desc: "Complete layout overhaul following the target journal's style guide in LaTeX or MS Word.",
                items: ["IEEE, Elsevier, Springer & MDPI templates", "Vector figures & TikZ graphics", "Reference management (EndNote / Mendeley)"],
                featured: false,
              },
              {
                icon: Cpu,
                title: "Computational solvers & AI",
                desc: "Custom Python and MATLAB development for differential equations and fluid dynamics models.",
                items: ["Physics-Informed Neural Networks (PINNs)", "Levenberg-Marquardt & PSO algorithms", "ODEs, PDEs & boundary value solvers"],
                featured: true,
              },
              {
                icon: BarChart2,
                title: "Data graphics & analysis",
                desc: "Raw simulation and experimental datasets turned into publication-standard 2D/3D plots.",
                items: ["High-resolution contour & line plots", "Result interpretation & drafting", "Abstract & technical section polish"],
                featured: false,
              },
            ].map(({ icon: Icon, title, desc, items, featured }) => (
              <article
                key={title}
                className={`relative flex flex-col rounded-2xl p-8 ${
                  featured
                    ? "border-2 border-blue-800 bg-white shadow-xl shadow-blue-900/10"
                    : "border border-slate-200 bg-white shadow-sm"
                }`}
              >
                {featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-blue-800 px-3 py-1 text-xs font-semibold text-white">
                    Most requested
                  </span>
                )}

                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800">
                  <Icon size={24} />
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{desc}</p>

                <ul className="mt-6 space-y-3 text-sm text-slate-700">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="mt-0.5 shrink-0 text-emerald-600" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <ConsultButton />
          </div>
        </section>

        {/* Insights / Blog */}
        <section id="insights" className="scroll-mt-24 border-y border-slate-200 bg-slate-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-2 flex items-center gap-2 text-sm font-medium text-blue-800">
                  <BookOpen size={16} />
                  Technical insights
                </p>

                <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
                  Expert guides for researchers
                </h2>

                <p className="mt-3 max-w-xl text-slate-600">
                  Practical walkthroughs on manuscript formatting, simulation workflows, and journal publication strategy.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts.map((p, i) => (
                <article
                  key={p.href}
                  className={`flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-7 transition hover:border-blue-700 hover:shadow-md ${
                    i === blogPosts.length - 1 && blogPosts.length % 2 === 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div>
                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900">
                      {p.tag}
                    </span>

                    <h3 className="mt-4 font-serif text-xl font-bold leading-snug text-slate-900">
                      {p.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {p.desc}
                    </p>
                  </div>

                  <Link
                    href={p.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 hover:text-blue-950"
                  >
                    Read article <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section id="profiles" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
          <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-sm md:p-14">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-900 text-amber-300">
              <Award size={28} />
            </div>

            <h2 className="font-serif text-2xl font-bold text-slate-900 md:text-3xl">
              Explore the full scientific portfolio
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
              Browse peer-reviewed publications, citations, and research metrics on our official academic profiles.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-800 hover:text-blue-900 sm:w-auto"
              >
                Google Scholar profile <ExternalLink size={16} />
              </a>

              <a
                href={researchGateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-800 hover:text-blue-900 sm:w-auto"
              >
                ResearchGate profile <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl scroll-mt-24 px-6 pb-24">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold text-slate-900 md:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              Everything you need to know about manuscript preparation, simulation solvers, and our consultancy process.
            </p>
          </div>

          <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {visibleFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-blue-700"
                  >
                    <span className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:gap-4">
                      <span className="w-24 shrink-0 text-xs font-medium text-blue-700">
                        {faq.category}
                      </span>

                      <span className="font-semibold text-slate-900">
                        {faq.q}
                      </span>
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-800" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="bg-slate-50 px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-600 sm:pl-[10.5rem] sm:text-base">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {!showAllFaqs && (
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowAllFaqs(true)}
                className="text-sm font-semibold text-blue-800 hover:text-blue-950"
              >
                Show all {faqs.length} questions
              </button>
            </div>
          )}
        </section>

        {/* Final CTA */}
        <section className="bg-blue-950">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Ready to get your manuscript publication-ready?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-blue-100">
              Share your draft or project brief and receive a free assessment from our technical consultancy team.
            </p>

            <div className="mt-8">
              <ConsultButton variant="light" className="!px-9 !py-3.5 !text-base" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer (no phone / email shown) */}
      <footer className="border-t border-slate-200 bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ScholarGrid Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />

              <span className="font-serif text-xl font-bold text-white">
                ScholarGrid
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Global academic consultancy for PhD scholars, engineering researchers, and computational scientists targeting Q1/Q2 journals.
            </p>

            <button
              onClick={openModal}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Get Consultancy <ArrowRight size={16} />
            </button>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Explore</h3>

            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#process" className="hover:text-white">How it works</a></li>
              <li><a href="#insights" className="hover:text-white">Insights</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white">Research profiles</h3>

            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={googleScholarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  Google Scholar <ExternalLink size={13} />
                </a>
              </li>

              <li>
                <a
                  href={researchGateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white"
                >
                  ResearchGate <ExternalLink size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 px-6 py-6 text-center text-xs text-slate-500">
          &copy; 2026 ScholarGrid. All rights reserved. Professional academic and research support.
        </div>
      </footer>
    </div>
  );
}