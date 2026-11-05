
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Mail,
  MessageSquare,
  X,
  BookOpen,
  ChevronRight,
  Menu,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Contact configuration                                               */
/* ------------------------------------------------------------------ */

const whatsappNumber = "923147982032";
const emailAddress = "scholargrid030@gmail.com";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello ScholarGrid team! I need professional assistance with contour plots and 3D visualizations for my research manuscript."
)}`;

const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(
  "Contour and 3D Visualization Inquiry"
)}&body=${encodeURIComponent(
  "Hello ScholarGrid team,\n\nI would like to discuss professional plotting and visualization support for my research manuscript.\n\nThank you."
)}`;

/* ------------------------------------------------------------------ */
/* Table of contents                                                   */
/* ------------------------------------------------------------------ */

const contents = [
  { id: "plot-types", title: "Choosing the Right Plot Type" },
  { id: "data-preparation", title: "Preparing Your Data" },
  { id: "contour-design", title: "Building Readable Contours" },
  { id: "color-maps", title: "Choosing Scientific Color Maps" },
  { id: "3d-surfaces", title: "Creating Professional 3D Surfaces" },
  { id: "data-overlays", title: "Overlaying Data and Optimization Paths" },
  { id: "journal-export", title: "Exporting Figures for Journals" },
  { id: "common-mistakes", title: "Common Visualization Mistakes" },
  { id: "final-checklist", title: "Final Publication Checklist" },
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
    <figure className="my-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="bg-slate-50 p-3 sm:p-6">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          className="mx-auto h-auto max-h-[560px] w-full rounded-lg object-contain"
        />
      </div>
      <figcaption className="border-t border-slate-100 px-5 py-4 text-center text-sm leading-relaxed text-slate-500 sm:px-8">
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
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
          Section {number}
        </p>
      )}
      <h2 className="font-serif text-2xl font-bold leading-tight tracking-tight text-slate-950 sm:text-3xl">
        {children}
      </h2>
      <div className="mt-4 h-1 w-12 rounded-full bg-blue-800" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Consultancy modal                                                   */
/* ------------------------------------------------------------------ */

function ConsultModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consult-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-2xl sm:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close consultancy dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-950"
        >
          <X size={19} />
        </button>

        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
          <BookOpen size={24} />
        </div>

        <h2
          id="consult-title"
          className="font-serif text-2xl font-bold text-slate-950"
        >
          Get consultancy
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Discuss your research requirements with our technical consultancy
          team. Choose your preferred communication channel below.
        </p>

        <div className="mt-7 space-y-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-emerald-600 hover:bg-emerald-50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <MessageSquare size={20} />
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-slate-900">
                Continue on WhatsApp
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                Quick communication and file sharing
              </span>
            </span>

            <ArrowRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-emerald-700"
            />
          </a>

          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-700 hover:bg-blue-50"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-900 text-white">
              <Mail size={20} />
            </span>

            <span className="flex-1">
              <span className="block font-semibold text-slate-900">
                Send an email
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                Best for detailed research requirements
              </span>
            </span>

            <ArrowRight
              size={18}
              className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800"
            />
          </a>
        </div>

        <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-xs text-slate-500">
          <ShieldCheck size={15} className="shrink-0 text-emerald-600" />
          Your research drafts and unpublished data remain confidential.
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main blog page                                                      */
/* ------------------------------------------------------------------ */

export default function ContourVisualizationsBlog() {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const referenceList = [
    <>
      E. R. Tufte, <i>The Visual Display of Quantitative Information</i>,
      2nd ed. Cheshire, CT, USA: Graphics Press, 2001.
    </>,
    <>
      J. D. Hunter, "Matplotlib: A 2D graphics environment,"
      <i> Computing in Science & Engineering</i>, vol. 9, no. 3,
      pp. 90–95, 2007.
    </>,
    <>
      C. R. Harris et al., "Array programming with NumPy,"
      <i> Nature</i>, vol. 585, pp. 357–362, 2020.
    </>,
    <>
      MathWorks, "MATLAB documentation: Graphics and 3-D visualization,"
      MathWorks Documentation.
    </>,
    <>
      D. Borland and R. M. Taylor II, "Rainbow color map (still) considered
      harmful," <i>IEEE Computer Graphics and Applications</i>, vol. 27,
      no. 2, pp. 14–17, 2007.
    </>,
    <>
      F. Crameri, G. E. Shephard, and P. J. Heron, "The misuse of colour
      in science communication," <i>Nature Communications</i>, vol. 11,
      Art. no. 5444, 2020.
    </>,
    <>
      J. R. Nunez, C. R. Anderton, and R. S. Renslow, "Optimizing colormaps
      with consideration for color vision deficiency to enable accurate
      interpretation of scientific data," <i>PLoS ONE</i>, vol. 13,
      no. 7, Art. no. e0199239, 2018.
    </>,
    <>
      B. Wong, "Points of view: Color blindness," <i>Nature Methods</i>,
      vol. 8, no. 6, p. 441, 2011.
    </>,
    <>
      Elsevier, "Artwork and media instructions," Elsevier Author Resources.
    </>,
  ];

  const checklist = [
    "The plot type matches the scientific question being investigated.",
    "The selected color map is perceptually uniform and passes a grayscale test.",
    "All axes, colorbars, and measurement units are clearly labelled.",
    "Text remains readable at the final journal publication size.",
    "Figures are exported in vector format or at an appropriate resolution.",
    "Original scripts, numerical data, and final figures are saved together.",
  ];

  const plotTypes = [
    {
      plot: "Contour lines",
      best: "Reading numerical levels and comparing curves.",
      caution: "Excessive contour levels and missing labels.",
    },
    {
      plot: "Filled contour",
      best: "Showing magnitude and spatial distribution together.",
      caution: "Misleading or poorly selected color maps.",
    },
    {
      plot: "Heat map",
      best: "Displaying raw gridded data without unnecessary smoothing.",
      caution: "Blocky cells when using coarse grids.",
    },
    {
      plot: "3D surface",
      best: "Understanding peaks, valleys, and surface geometry.",
      caution: "Hidden regions and difficult numerical interpretation.",
    },
    {
      plot: "3D scatter or path",
      best: "Displaying trajectories and three-dimensional point clouds.",
      caution: "Depth ambiguity and overlapping markers.",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-200">

      <ConsultModal open={modalOpen} onClose={closeModal} />

      {/* ------------------------------------------------------------ */}
      {/* Announcement bar                                              */}
      {/* ------------------------------------------------------------ */}

      <div className="bg-blue-950 px-4 py-2 text-center text-xs text-blue-100 sm:text-sm">
        Advanced computational research, scientific visualization and
        publication support for researchers worldwide.
      </div>

      {/* ------------------------------------------------------------ */}
      {/* Navigation                                                     */}
      {/* ------------------------------------------------------------ */}

      <nav
        aria-label="Main navigation"
        className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6">

          <Link href="/" className="flex items-center gap-3">
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

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <Link href="/#services" className="transition hover:text-blue-800">
              Services
            </Link>
            <Link href="/#process" className="transition hover:text-blue-800">
              How it works
            </Link>
            <Link href="/#insights" className="transition hover:text-blue-800">
              Insights
            </Link>
            <Link href="/#profiles" className="transition hover:text-blue-800">
              Publications
            </Link>
            <Link href="/#faq" className="transition hover:text-blue-800">
              FAQ
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={openModal}
              className="hidden items-center gap-2 rounded-lg bg-blue-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-950 sm:inline-flex"
            >
              Get Consultancy <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={mobileMenuOpen}
              className="rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-slate-200 bg-white px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-slate-700">
              <Link href="/#services" onClick={() => setMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/#process" onClick={() => setMobileMenuOpen(false)}>
                How it works
              </Link>
              <Link href="/#insights" onClick={() => setMobileMenuOpen(false)}>
                Insights
              </Link>
              <Link href="/#profiles" onClick={() => setMobileMenuOpen(false)}>
                Publications
              </Link>
              <Link href="/#faq" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="mt-2 rounded-lg bg-blue-800 px-5 py-3 text-left font-semibold text-white"
              >
                Get Consultancy <ArrowRight size={16} className="ml-2 inline" />
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>

        {/* ---------------------------------------------------------- */}
        {/* Article header                                              */}
        {/* ---------------------------------------------------------- */}

        <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-5xl px-6 pb-14 pt-12 sm:pb-16 sm:pt-16">

            <Link
              href="/"
              className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
            >
              <ArrowLeft size={16} />
              Back to ScholarGrid
            </Link>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-900">
                Scientific Visualization
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} />
                October 2026
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} />
                12 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.18] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
              Mastering Contour Plots & 3D Visualizations in Python and MATLAB for Q1 Journals
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              A practical guide to creating accurate, readable, and
              publication-quality scientific figures for PhD scholars,
              computational scientists, and engineering researchers.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-7">

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <Image
                    src="/logo.png"
                    alt="ScholarGrid"
                    width={42}
                    height={42}
                    className="h-full w-full object-contain p-1"
                  />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-950">
                    ScholarGrid Technical Team
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    Computational Research & Publishing Consultants
                  </p>
                </div>
              </div>

              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-blue-900 transition hover:border-blue-800 hover:bg-blue-50"
              >
                <MessageSquare size={16} />
                Discuss your project
              </button>

            </div>
          </div>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Article layout                                              */}
        {/* ---------------------------------------------------------- */}

        <div
          id="article-content"
          className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-6 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-16 lg:py-20"
        >

          {/* Article body */}

          <article className="min-w-0">

            {/* Introduction */}

            <div className="mb-12 rounded-r-xl border-l-4 border-blue-800 bg-slate-50 p-6 sm:p-8">
              <p className="text-base leading-[1.9] text-slate-700 sm:text-lg">
                Reviewers look at your figures before they read your text.
                A clean contour plot or a well-built 3D surface can make a
                result obvious in seconds. A cluttered one can make a good
                result look doubtful. Good figures follow one simple rule:
                every element should help the reader read a value, not
                decorate the page. Fig. 1 shows the same data twice, with
                the default look on the left and a publication-ready version
                on the right.
              </p>
            </div>

            <ArticleFigure
              src="/blogs/fig14.png"
              alt="Default rainbow plot versus publication-ready contour plot"
              caption="Fig. 1. The same data: default rainbow plot versus a publication-ready contour plot."
            />

            <p className="mb-8 text-base leading-[1.9] text-slate-700">
              This guide covers the complete workflow in Python
              (Matplotlib and NumPy) and MATLAB: choosing the appropriate
              plot type, preparing numerical data, building readable
              contours, selecting scientific color maps, creating clear
              3D surfaces, and exporting figures for top-quartile (Q1)
              journals. The examples demonstrate practical visualization
              principles that can be adapted to computational and
              experimental research.
            </p>

            {/* Step 1 */}

            <SectionHeading id="plot-types" number="01">
              Choose the Right Plot Type
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Start with the scientific question the figure is intended
              to answer. A reader who needs to interpret numerical levels
              benefits from contour lines. A reader who needs to understand
              the overall geometry may benefit from a surface representation.
            </p>

            <div className="my-8 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th className="px-5 py-4 font-semibold">Plot type</th>
                      <th className="px-5 py-4 font-semibold">Best suited for</th>
                      <th className="px-5 py-4 font-semibold">Potential issue</th>
                    </tr>
                  </thead>
                  <tbody>
                    {plotTypes.map((item, index) => (
                      <tr
                        key={item.plot}
                        className={`border-b border-slate-100 ${
                          index % 2 === 0 ? "bg-white" : "bg-slate-50"
                        }`}
                      >
                        <td className="px-5 py-4 font-semibold text-slate-900">
                          {item.plot}
                        </td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600">
                          {item.best}
                        </td>
                        <td className="px-5 py-4 leading-relaxed text-slate-600">
                          {item.caution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="text-base leading-[1.9] text-slate-700">
              A useful rule is to prefer a 2D representation whenever it
              communicates the same information more clearly. Use 3D when
              the additional dimension contributes meaningful scientific
              insight. Pair a 3D surface with a contour projection or a
              2D slice whenever readers need to interpret numerical values
              (Fig. 2).
            </p>

            <ArticleFigure
              src="/blogs/fig15.png"
              alt="Contour lines, filled contours and 3D surface comparison"
              caption="Fig. 2. One mathematical function represented using contour lines, filled contours, and a 3D surface."
            />

            {/* Step 2 */}

            <SectionHeading id="data-preparation" number="02">
              Prepare Your Data
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Reliable visualization begins with correctly prepared
              numerical data. Even an attractive figure can be misleading
              if its underlying grid, interpolation, or measurement units
              are inconsistent.
            </p>

            <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Build a regular numerical grid using meshgrid and maintain
                consistent measurement units.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                For scattered measurements, interpolate onto a grid and
                clearly report the interpolation method.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Select grid density according to the actual resolution of
                the available data. Excessive smoothing can introduce
                artificial features.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Retain original measurement points as markers whenever
                appropriate (Fig. 6).
              </li>
            </ul>

            {/* Step 3 */}

            <SectionHeading id="contour-design" number="03">
              Build a Contour Plot That Reads Well
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Contour plots should communicate numerical variation without
              overwhelming the reader. Their visual structure should make
              important gradients, boundaries, and spatial patterns easy
              to identify.
            </p>

            <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Begin with approximately 10 to 15 evenly spaced contour
                levels, adjusting the number according to the data.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Combine filled contours with thin boundary lines and
                selectively labelled contour levels.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Include a clearly labelled colorbar with measurement units
                and descriptive axis labels.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Apply an equal aspect ratio when both axes represent the
                same physical unit and spatial scale.
              </li>
            </ul>

            <ArticleFigure
              src="/blogs/fig16.png"
              alt="Publication-quality Python contour plot"
              caption="Fig. 3. Example of a publication-ready contour plot at single-column width (3.5 in)."
            />

            <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
              <p className="text-sm font-bold text-blue-950">
                Practical visualization tip
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Print the figure at its actual publication size and examine
                it from a normal reading distance. If the colorbar ticks,
                axis labels, or contour annotations are difficult to read,
                the figure needs further refinement.
              </p>
            </div>

            {/* Step 4 */}

            <SectionHeading id="color-maps" number="04">
              Choose Scientific Color Maps Carefully
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Color selection is one of the most important aspects of
              scientific visualization. Traditional rainbow maps such as
              jet can create artificial boundaries, obscure numerical
              gradients, and produce misleading patterns when reproduced
              in grayscale.
            </p>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Prefer perceptually uniform color maps such as viridis and
              cividis in Python, or parula in MATLAB. Cividis was designed
              with color vision deficiency in mind. Diverging color maps
              are more appropriate for signed quantities and should
              generally be centred around zero. Avoid relying on red-green
              combinations and evaluate figures in grayscale before
              submission (Fig. 4).
            </p>

            <ArticleFigure
              src="/blogs/fig17.png"
              alt="Grayscale comparison of jet and viridis color maps"
              caption="Fig. 4. Grayscale comparison: jet produces uneven visual transitions, whereas viridis maintains a more consistent light-to-dark progression."
            />

            {/* Step 5 */}

            <SectionHeading id="3d-surfaces" number="05">
              Create Clean and Professional 3D Surfaces
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Three-dimensional surface plots are particularly useful for
              visualizing nonlinear relationships, peaks, valleys, and
              spatial variations. However, poor viewing angles, heavy grid
              lines, and unnecessary visual effects can make scientific
              interpretation difficult.
            </p>

            <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Select an informative viewing angle. Elevation angles
                between 25° and 35° and an azimuth near -55° can be useful
                starting points for many surface geometries.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Label all three axes with physical quantities and
                corresponding units.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Use clear surface shading, subtle grid lines, and
                appropriately styled coordinate panes.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Maintain consistent viewing angles across comparative
                panels.
              </li>
            </ul>

            <ArticleFigure
              src="/blogs/fig18.png"
              alt="Clean three-dimensional scientific surface plot"
              caption="Fig. 5. A professional 3D surface with a balanced viewing angle, labelled axes, smooth shading, and a colorbar."
            />

            <div className="my-8 rounded-xl border border-blue-100 bg-blue-50/60 p-5">
              <p className="text-sm font-bold text-blue-950">
                Important consideration
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Three-dimensional surfaces communicate geometric patterns
                more effectively than exact numerical values. When precise
                values matter, include a contour projection or a separate
                two-dimensional representation.
              </p>
            </div>

            {/* Step 6 */}

            <SectionHeading id="data-overlays" number="06">
              Overlay Data, Paths, and Optimization Results
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Overlays can turn a simple visualization into a more
              informative scientific figure. Experimental measurements
              can be displayed as markers, optimization trajectories as
              lines, and final optimal solutions as distinctive symbols
              with clear legend entries (Fig. 6).
            </p>

            <p className="mt-4 text-base leading-[1.9] text-slate-700">
              Use contrasting black or white overlays with appropriate
              outlines to maintain visibility across different
              backgrounds. For functions spanning several orders of
              magnitude, logarithmically spaced contour levels may provide
              a more informative representation.
            </p>

            <ArticleFigure
              src="/blogs/fig19.png"
              alt="Contour visualization with an optimization trajectory"
              caption="Fig. 6. Contours of a test function showing an optimization path, initial point, and final point."
            />

            {/* Step 7 */}

            <SectionHeading id="journal-export" number="07">
              Export Figures According to Journal Requirements
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              A scientifically accurate figure must also satisfy the
              technical artwork requirements of its target journal.
              Resolution, physical dimensions, font embedding, and file
              format should be considered before submission rather than
              after reviewer feedback.
            </p>

            <ul className="mt-5 space-y-4 text-base leading-relaxed text-slate-700">
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Set figures to their intended publication dimensions.
                Approximately 3.5 in (89 mm) is a useful reference for a
                single IEEE column, while Elsevier figure widths should
                follow the selected journal's artwork instructions.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Maintain readable text, generally around 7–9 pt at final
                publication size, subject to journal specifications.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Export contour plots and line artwork as vector PDF or EPS
                whenever accepted by the journal.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                For dense 3D surfaces, consider raster export at an
                appropriate resolution, such as 600 dpi where suitable.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Embed fonts and verify resolution against the target
                publisher's artwork requirements.
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-blue-800" />
                Save the original numerical scripts and source data
                alongside the final figure files.
              </li>
            </ul>

            <ArticleFigure
              src="/blogs/fig20.png"
              alt="Comparison of figure typography at different sizes"
              caption="Fig. 7. Typography comparison at identical figure dimensions: small text becomes difficult to read, while appropriately sized 8 pt text remains clearer."
            />

            {/* Common mistakes */}

            <SectionHeading id="common-mistakes">
              Common Visualization Mistakes
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Several recurring issues can reduce the clarity and
              reproducibility of scientific figures. Review the following
              points before finalizing your manuscript illustrations.
            </p>

            <div className="mt-6 space-y-3">
              {[
                "Using the default rainbow color map without evaluating its suitability.",
                "Leaving colorbars, measurement units, or axis labels incomplete.",
                "Using complex 3D representations when a simpler 2D plot communicates the results more clearly.",
                "Submitting screenshots instead of properly exported vector or high-resolution figures.",
                "Using inconsistent color limits or viewing angles across comparative panels.",
              ].map((mistake, index) => (
                <div
                  key={index}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-slate-600">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-slate-700">
                    {mistake}
                  </p>
                </div>
              ))}
            </div>

            {/* Final checklist */}

            <SectionHeading id="final-checklist">
              Final Publication Checklist
            </SectionHeading>

            <p className="mt-5 text-base leading-[1.9] text-slate-700">
              Before submitting your manuscript, use this checklist to
              evaluate the overall quality and technical consistency of
              your scientific figures.
            </p>

            <div className="mt-7 space-y-3">
              {checklist.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4"
                >
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-emerald-600"
                  />
                  <span className="text-sm leading-relaxed text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* References */}

            <div
              id="references"
              className="mt-16 scroll-mt-28 border-t border-slate-200 pt-10"
            >
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-800">
                Further Reading
              </p>

              <h2 className="font-serif text-3xl font-bold text-slate-950">
                References
              </h2>

              <ol className="mt-7 list-decimal space-y-5 pl-6 text-sm leading-[1.9] text-slate-600">
                {referenceList.map((reference, index) => (
                  <li key={index} className="pl-2">
                    {reference}
                  </li>
                ))}
              </ol>
            </div>

            {/* Article ending */}

            <div className="mt-16 border-t border-slate-200 pt-8">
              <p className="text-sm font-semibold text-blue-800">
                ScholarGrid Technical Insights
              </p>

              <p className="mt-3 text-base leading-[1.9] text-slate-600">
                High-quality scientific visualization is an essential part
                of communicating computational and experimental research.
                By combining accurate numerical data, appropriate graphical
                representations, and journal-compliant export settings,
                researchers can present their findings more clearly and
                professionally.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href="/#insights"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  <ArrowLeft size={16} />
                  Explore more research guides
                </Link>

                <button
                  onClick={openModal}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-800 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-950"
                >
                  Get Consultancy <ArrowRight size={16} />
                </button>
              </div>
            </div>

          </article>

          {/* -------------------------------------------------------- */}
          {/* Desktop sidebar                                           */}
          {/* -------------------------------------------------------- */}

          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-7">

              {/* Table of contents */}

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-blue-800" />
                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    In this article
                  </h3>
                </div>

                <div className="mt-5 space-y-1">
                  {contents.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-start gap-2 rounded-lg px-2 py-2.5 text-sm leading-relaxed text-slate-600 transition hover:bg-blue-50 hover:text-blue-900"
                    >
                      <span className="mt-0.5 text-xs font-bold text-slate-400 group-hover:text-blue-800">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span>{item.title}</span>
                      <ChevronRight
                        size={14}
                        className="ml-auto mt-1 shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </div>
              </div>

              {/* Consultancy card */}

              <div className="rounded-2xl bg-blue-950 p-6 text-white shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-amber-300">
                  <MessageSquare size={22} />
                </div>

                <h3 className="font-serif text-xl font-bold">
                  Need professional research support?
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-blue-100">
                  Get assistance with scientific plotting, MATLAB/Python
                  simulations, and publication-quality figures.
                </p>

                <button
                  onClick={openModal}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-blue-950 transition hover:bg-blue-50"
                >
                  Get Consultancy <ArrowRight size={16} />
                </button>

                <div className="mt-4 flex items-center gap-2 text-xs text-blue-200">
                  <ShieldCheck size={14} />
                  Confidential research support
                </div>
              </div>

              {/* Back to home */}

              <Link
                href="/"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-800 hover:text-blue-900"
              >
                <ArrowLeft size={15} />
                Explore ScholarGrid
              </Link>

            </div>
          </aside>

        </div>

        {/* ---------------------------------------------------------- */}
        {/* Final consultancy CTA                                      */}
        {/* ---------------------------------------------------------- */}

        <section className="bg-blue-950">
          <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">

            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-amber-300">
              <BookOpen size={28} />
            </div>

            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              ScholarGrid Research Support
            </p>

            <h2 className="mx-auto max-w-3xl font-serif text-3xl font-bold leading-tight text-white sm:text-4xl">
              Need Help with Publication-Quality Scientific Figures?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-blue-100">
              Get professional assistance with Python and MATLAB
              visualization, contour plots, 3D surfaces, numerical
              simulations, and journal-specific figure formatting.
            </p>

            <div className="mt-9">
              <button
                onClick={openModal}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-sm font-bold text-blue-950 shadow-lg transition hover:bg-blue-50"
              >
                Get Consultancy <ArrowRight size={18} />
              </button>
            </div>

            <p className="mt-5 text-xs text-blue-200">
              Share your research requirements through your preferred
              communication channel.
            </p>

          </div>
        </section>

      </main>

      {/* ------------------------------------------------------------ */}
      {/* Footer                                                        */}
      {/* ------------------------------------------------------------ */}

      <footer className="border-t border-slate-800 bg-slate-950 text-slate-400">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr]">

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

            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Academic research and computational consultancy for
              postgraduate scholars, engineering researchers, and
              computational scientists targeting international journals.
            </p>

            <button
              onClick={openModal}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
            >
              Get Consultancy <ArrowRight size={16} />
            </button>
          </div>

          {/* Explore */}

          <div>
            <h3 className="text-sm font-semibold text-white">
              Explore ScholarGrid
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
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
                <Link href="/#insights" className="transition hover:text-white">
                  Research Insights
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

            <ul className="mt-5 space-y-3 text-sm">
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
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 px-6 py-6 text-center text-xs leading-relaxed text-slate-500">
          © 2026 ScholarGrid. All rights reserved. Professional Academic
          and Research Support.
        </div>
      </footer>

    </div>
  );
}
