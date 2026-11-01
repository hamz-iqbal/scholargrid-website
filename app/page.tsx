"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  FileText, 
  Award, 
  Cpu, 
  BarChart2, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  Sparkles,
  Zap,
  ExternalLink,
  HelpCircle,
  ChevronDown,
  BookOpen,
  ArrowRight,
  Mail
} from 'lucide-react';

export default function ScholarGridLandingPage() {
  const whatsappNumber = "923147982032";
  const whatsappMsg = encodeURIComponent("Hello ScholarGrid team! I need expert support for my research manuscript / thesis simulation & formatting.");
  const emailAddress = "scholargrid030@gmail.com";
  
  // Direct Gmail web compose URL for 100% reliable opening on all browsers/devices
  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Manuscript%20Review%20Inquiry&body=Hello%20ScholarGrid%20team,%20I%20would%20like%20to%20get%20assistance%20with%20my%20research%20manuscript.`;

  const googleScholarUrl = "https://scholar.google.com/citations?hl=en&user=-VGaDnoAAAAJ"; 
  const researchGateUrl = "https://www.researchgate.net/profile/Hamza-Iqbal-19?ev=hdr_xprf";

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What core services does ScholarGrid offer to researchers?",
      a: "We provide comprehensive academic research assistance, including journal manuscript formatting, custom computational modeling, numerical simulations, data visualization, and technical polishing for peer-reviewed submissions.",
      category: "Services"
    },
    {
      q: "Which academic publishers do you format manuscripts for?",
      a: "We format manuscripts strictly according to the author guidelines of major international publishers, including IEEE, Elsevier, Springer Nature, Wiley, Taylor & Francis, and MDPI.",
      category: "Formatting"
    },
    {
      q: "Can you assist with both LaTeX and MS Word templates?",
      a: "Yes, we handle complete document conversions and styling in both LaTeX (Overleaf) and MS Word, ensuring all figures, equations, and tables adhere to target journal specifications.",
      category: "Formatting"
    },
    {
      q: "How do I get started with a consultation?",
      a: "Simply click the WhatsApp button or email us on our page to share your project outline, draft, or simulation requirements directly with our technical consultancy team.",
      category: "Process"
    },
    {
      q: "Is the initial manuscript review or project assessment free?",
      a: "Yes, our initial manuscript evaluation and preliminary project feasibility assessment are completely free of charge.",
      category: "Pricing"
    },
    {
      q: "What is the typical turnaround time for a project?",
      a: "Turnaround times depend on project scope and complexity. Standard formatting takes 2–4 days, while complex simulation scripts and data modeling usually require 5–10 days.",
      category: "Process"
    },
    {
      q: "Can you assist postgraduate students with thesis and dissertation formatting?",
      a: "Yes, we format Master's theses and Ph.D. dissertations according to specific institutional or university guidelines and style manuals.",
      category: "Services"
    },
    {
      q: "How do you ensure the confidentiality of my research data?",
      a: "We treat all intellectual property with strict confidentiality. Your drafts, raw data, codes, and unpublished results remain 100% secure and private.",
      category: "Security"
    },
    {
      q: "Do you offer custom coding for numerical modeling and algorithms?",
      a: "Yes, we develop custom, well-documented scripts in Python and MATLAB for mathematical modeling, differential equations, optimization, and data analysis.",
      category: "Simulations"
    },
    {
      q: "Can you fix reference lists and citation style inconsistencies?",
      a: "Yes, we organize and format references using tools like EndNote and Mendeley to match the exact citation style (APA, IEEE, Harvard, Vancouver, etc.) required by your journal.",
      category: "Formatting"
    },
    {
      q: "Do you generate publication-quality figures and graphics?",
      a: "Yes, we transform raw experimental or numerical data into high-resolution 2D/3D plots, vector graphics, and clear schematic diagrams suitable for high-impact journals.",
      category: "Graphics"
    },
    {
      q: "Can you help respond to reviewer comments and revise manuscripts?",
      a: "Yes, we assist authors in addressing peer-review feedback, revising manuscript content, and drafting professional point-by-point response letters.",
      category: "Publishing"
    },
    {
      q: "What options are available for international client payments?",
      a: "We accept flexible international transfer options. Detailed payment steps and invoices are provided upon project confirmation via WhatsApp or Email.",
      category: "Pricing"
    },
    {
      q: "Do you offer language editing and technical proofreading?",
      a: "Yes, we refine scientific English, correct grammatical errors, improve academic phrasing, and enhance overall technical clarity.",
      category: "Editing"
    },
    {
      q: "How are post-delivery revisions or corrections handled?",
      a: "We provide dedicated post-delivery support and complementary minor revisions to ensure complete satisfaction and journal compliance.",
      category: "Process"
    },
    {
      q: "Can you convert an existing MS Word draft into a LaTeX project?",
      a: "Yes, we perform complete document conversions from MS Word to LaTeX, including complex mathematical equations, tables, and bibtex reference files.",
      category: "Formatting"
    },
    {
      q: "Do you provide original, reproducible code files with simulations?",
      a: "Yes, upon project completion, clients receive all original source codes, scripts, data files, and documentation for complete transparency and reproducibility.",
      category: "Simulations"
    },
    {
      q: "What fields of study do you support?",
      a: "While our core strength is in applied mathematics, engineering, computational sciences, and AI modeling, our manuscript formatting and publishing support applies to all quantitative research domains.",
      category: "Services"
    },
    {
      q: "Can we schedule a one-on-one virtual consultation?",
      a: "Yes, after an initial text review, we can arrange direct communication or virtual technical discussions to review your project requirements in detail.",
      category: "Process"
    },
    {
      q: "How can I submit my manuscript files for a quote?",
      a: "You can send your manuscript draft, guidelines, or simulation specs directly as a PDF, Word document, or ZIP file via WhatsApp or Email.",
      category: "Process"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 py-2.5 px-4 text-center text-xs font-bold tracking-wider text-amber-400 shadow-md flex items-center justify-center gap-2">
        <Sparkles size={14} className="text-amber-400 animate-pulse" />
        <span>HIGH-IMPACT ACADEMIC CONSULTANCY | FAST-TRACK YOUR Q1/Q2 MANUSCRIPT FOR ELSEVIER & SPRINGER</span>
      </div>

      {/* Navigation Bar */}
      <nav className="border-b border-slate-200 bg-white/90 backdrop-blur-xl sticky top-0 z-50 px-6 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="text-2xl font-black tracking-tight text-slate-900 flex items-center gap-3">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="ScholarGrid Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span>ScholarGrid</span>
          </div>
          
          <div className="flex items-center gap-3 flex-wrap">
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-600 font-semibold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Accepting New Manuscripts</span>
            </div>
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-100 hover:bg-slate-200 text-blue-900 font-bold px-4 py-2.5 rounded-xl transition-all border border-slate-300 text-xs sm:text-sm flex items-center gap-2"
            >
              <Mail size={16} className="text-blue-700" /> Email Us
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-5 py-2.5 rounded-xl transition-all shadow-md shadow-amber-500/20 text-xs sm:text-sm flex items-center gap-2 hover:scale-105"
            >
              <MessageSquare size={16} /> Consult on WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-6 shadow-sm">
            <Zap size={14} className="text-amber-500" /> Engineering & Computational Research Specialists
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-950 leading-[1.15] mb-6 tracking-tight">
            Accelerate Your Research With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-amber-600">
              Publication-Ready Precision
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            End-to-end expertise for Engineering Manuscripts, Python/MATLAB Numerical Simulations, Physics-Informed Neural Networks (PINNs), and IEEE/Elsevier Template Formatting.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-900 hover:bg-blue-800 text-white font-extrabold px-8 py-4 rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2.5 text-base hover:scale-105"
            >
              <Send size={18} className="text-amber-400" /> Send Your Draft for Review
            </a>
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold px-8 py-4 rounded-xl transition-all text-base flex items-center justify-center gap-2 shadow-sm"
            >
              <Mail size={18} className="text-blue-700" /> Email Us Directly
            </a>
          </div>
        </div>
      </section>

      {/* Authority / Stats Section */}
      <section className="bg-slate-950 py-12 border-y border-slate-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-black text-amber-400">18+</div>
            <div className="text-xs md:text-sm text-slate-300 mt-1 font-medium">Q1/Q2 Journal Papers</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-black text-blue-400">100+</div>
            <div className="text-xs md:text-sm text-slate-300 mt-1 font-medium">Manuscripts Processed</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-black text-amber-400">100%</div>
            <div className="text-xs md:text-sm text-slate-300 mt-1 font-medium">Publisher Compliance</div>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
            <div className="text-3xl md:text-4xl font-black text-blue-400">Direct</div>
            <div className="text-xs md:text-sm text-slate-300 mt-1 font-medium">1-on-1 Author Support</div>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">Comprehensive Academic Services</h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-2xl mx-auto font-normal">
            Designed specifically for postgraduate students, PhD scholars, and engineering authors aiming for top-tier international publications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-600 transition-all group shadow-md hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <FileText className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Manuscript Layout & Formatting</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Complete layout overhaul strictly following targeted journal style guides (LaTeX & MS Word).
            </p>
            <ul className="text-xs text-slate-700 space-y-3 font-semibold">
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-amber-500 shrink-0" /> IEEE, Elsevier, Springer & MDPI Templates</li>
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-amber-500 shrink-0" /> Vector Figures & TikZ Graphics</li>
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-amber-500 shrink-0" /> Reference Management (EndNote/Mendeley)</li>
            </ul>
          </div>

          <div className="bg-white border-2 border-blue-600 p-8 rounded-3xl transition-all group shadow-xl relative">
            <div className="absolute -top-3 right-6 bg-blue-900 text-amber-400 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </div>
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="text-blue-700" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Computational Solvers & AI</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Custom Python & MATLAB script development for differential equations and fluid dynamics models.
            </p>
            <ul className="text-xs text-slate-700 space-y-3 font-semibold">
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-blue-700 shrink-0" /> Physics-Informed Neural Networks (PINNs)</li>
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-blue-700 shrink-0" /> Levenberg-Marquardt & PSO Algorithms</li>
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-blue-700 shrink-0" /> ODEs, PDEs & Boundary Value Solvers</li>
            </ul>
          </div>

          <div className="bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-600 transition-all group shadow-md hover:shadow-xl">
            <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BarChart2 className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Data Graphics & Analysis</h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Transforming raw simulation and experimental datasets into publication-standard 2D/3D visual plots.
            </p>
            <ul className="text-xs text-slate-700 space-y-3 font-semibold">
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-amber-500 shrink-0" /> High-Resolution Contour & Line Plots</li>
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-amber-500 shrink-0" /> In-depth Result Interpretation & Drafting</li>
              <li className="flex items-center gap-2.5"><CheckCircle size={15} className="text-amber-500 shrink-0" /> Abstract & Technical Section Polish</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BLOG SECTION WITH UNIFORM 2-COLUMN GRID (ALL 4 BLOGS IN EQUAL SIZE) */}
      <section className="max-w-7xl mx-auto px-6 py-20 bg-white border-y border-slate-200 my-12 rounded-3xl shadow-sm">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <BookOpen size={14} className="text-amber-500" /> Technical Insights & Blog
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">Expert Guides for Researchers</h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-xl mx-auto">
            Practical walkthroughs on manuscript formatting, simulation workflows, and journal publication strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Blog 1 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-600 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-900 rounded-full uppercase tracking-wider">
                Formatting Guide
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2 leading-snug">
                A Step-by-Step Guide to Formatting Engineering Manuscripts for Elsevier & IEEE
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                A practical walkthrough for PhD scholars covering templates, section structures, equation formatting, and figure resolutions.
              </p>
            </div>
            <Link 
              href="/blog/formatting-guide" 
              className="inline-flex items-center gap-2 font-black text-blue-700 hover:text-blue-900 text-sm transition-colors"
            >
              Read Full Article <ArrowRight size={16} />
            </Link>
          </div>

          {/* Blog 2 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-600 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-red-100 text-red-900 rounded-full uppercase tracking-wider">
                Publishing Strategy
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2 leading-snug">
                Common Reasons Engineering Manuscripts Get Rejected by Journals (And How to Avoid Them)
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                A critical guide for PhD scholars and academic researchers to bypass desk rejections in Q1/Q2 journals.
              </p>
            </div>
            <Link 
              href="/blog/paper-rejection-reasons" 
              className="inline-flex items-center gap-2 font-black text-blue-700 hover:text-blue-900 text-sm transition-colors"
            >
              Read Full Article <ArrowRight size={16} />
            </Link>
          </div>

          {/* Blog 3 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-600 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-emerald-100 text-emerald-900 rounded-full uppercase tracking-wider">
                Visualization Guide
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2 leading-snug">
                Mastering Contour Plots & 3D Visualizations in Python and MATLAB for Q1 Journals
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                A practical walkthrough for engineering authors on building clean contour plots, color maps, and 3D surfaces.
              </p>
            </div>
            <Link 
              href="/blog/contour-visualizations" 
              className="inline-flex items-center gap-2 font-black text-blue-700 hover:text-blue-900 text-sm transition-colors"
            >
              Read Full Article <ArrowRight size={16} />
            </Link>
          </div>

          {/* Blog 4 */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-blue-600 transition-all shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold px-3 py-1 bg-blue-100 text-blue-900 rounded-full uppercase tracking-wider">
                Research Methodology
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-4 mb-2 leading-snug">
                How to Conduct a Systematic Literature Review (SLR) and Synthesize Prior Work Like a Senior Researcher
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Learn how to follow documented search protocols, screen studies transparently using PRISMA guidelines, build concept matrices, and synthesize prior literature like a senior researcher.
              </p>
            </div>
            <Link 
              href="/blog/systematic-literature-review-guide" 
              className="inline-flex items-center gap-2 font-black text-blue-700 hover:text-blue-900 text-sm transition-colors"
            >
              Read Full Article <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Research Profiles & Publications Links Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-blue-50/60 border border-blue-200 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <div className="flex items-center gap-3 mb-3 justify-center">
            <div className="p-2 bg-blue-900 rounded-xl">
              <Award className="text-amber-400" size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Explore Complete Scientific Portfolio</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto text-sm">
            Browse our full record of peer-reviewed publications, citations, and research metrics directly on our official academic profiles.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={googleScholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border-2 border-blue-700 text-blue-900 font-extrabold px-8 py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-3 text-base hover:scale-105"
            >
              <span className="text-blue-700 font-black text-lg">📚</span> Google Scholar Profile <ExternalLink size={18} />
            </a>

            <a
              href={researchGateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-600 text-white font-extrabold px-8 py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-3 text-base hover:scale-105"
            >
              <span className="text-emerald-300 font-black text-lg">🔬</span> ResearchGate Profile <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Accordion Q&A Section */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <HelpCircle size={14} className="text-amber-500" /> Executive Knowledge Base
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight">Frequently Asked Questions</h2>
          <p className="text-slate-600 text-sm md:text-base mt-3 max-w-xl mx-auto">
            Everything you need to know about our manuscript preparation, simulation solvers, and global academic consultancy standards.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? 'bg-white border-blue-600 shadow-lg ring-1 ring-blue-600/20' 
                    : 'bg-white/80 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200 shrink-0 hidden sm:inline-block">
                      {faq.category}
                    </span>
                    <span className="text-sm md:text-base font-extrabold text-slate-900 leading-snug">
                      <span className="text-blue-700 font-black mr-2">Q{index + 1}.</span>
                      {faq.q}
                    </span>
                  </div>
                  <div className={`p-2 rounded-full transition-transform duration-300 ${isOpen ? 'bg-blue-50 text-blue-700 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed bg-slate-50/50">
                    <div className="pl-2 border-l-2 border-amber-500">
                      {faq.a}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="relative bg-slate-950 border-t border-slate-800 py-20 px-6 text-center mt-16 overflow-hidden text-white">
        <div className="relative max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">Ready to Submit Your Paper with Confidence?</h2>
          <p className="text-slate-300 max-w-xl mx-auto mb-8 text-sm md:text-base leading-relaxed font-normal">
            Get a free initial manuscript review and professional consultation for formatting, simulation solvers, or research layout.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-xl transition-all shadow-xl shadow-amber-500/10 text-base hover:scale-105"
            >
              <Send size={18} /> Consult via WhatsApp
            </a>
            <a
              href={gmailWebUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl text-base hover:scale-105"
            >
              <Mail size={18} className="text-amber-400" /> Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-6 text-center text-xs text-slate-500 font-medium">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 ScholarGrid — Computational Research, Simulation & Manuscript Consultancy. All rights reserved.</p>
          <div className="flex items-center gap-6 font-semibold">
            <Link href="/privacy-policy" className="hover:text-blue-700 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-blue-700 transition-colors">Terms & Conditions</Link>
            <Link href="/contact" className="hover:text-blue-700 transition-colors">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}