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

const SLUG = "/blog/contour-visualizations";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "Contour Plots & 3D Surface Plots in Python and MATLAB for Q1 Journals";
const DESCRIPTION =
  "Learn how to make publication-quality contour plots and 3D surface plots in Python and MATLAB: color maps, export settings and a checklist for Q1 journals.";

export const metadata: Metadata = {
  /* If your root layout already uses title.template "%s | ScholarGrid",
     keep this plain string; otherwise append " | ScholarGrid". */
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "contour plot Python",
    "contour plot MATLAB",
    "3D surface plot Matplotlib",
    "scientific color maps",
    "viridis vs jet",
    "publication quality figures",
    "journal figure export",
    "scientific data visualization",
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
    modifiedTime: "2026-11-12T00:00:00Z",
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
    q: "What is the difference between a contour plot and a filled contour plot?",
    a: "A contour plot draws lines of constant value, which makes it easy to read numerical levels and compare curves. A filled contour plot colours the regions between levels, which shows magnitude and spatial distribution at a glance. Many journal figures combine both: filled contours with thin boundary lines and a few labelled levels.",
  },
  {
    q: "Why should I avoid the jet (rainbow) color map in scientific figures?",
    a: "Rainbow maps such as jet are not perceptually uniform. They can create artificial boundaries, hide real gradients and become unreadable when printed in grayscale or viewed by readers with colour vision deficiency. Perceptually uniform maps such as viridis, cividis or parula give a more faithful and accessible representation.",
  },
  {
    q: "How many contour levels should I use?",
    a: "A good starting point is about 10 to 15 evenly spaced levels, adjusted to the data. Too many levels clutter the figure, and too few hide structure. For data that spans several orders of magnitude, logarithmically spaced levels are often more informative.",
  },
  {
    q: "Should I export figures as vector or raster files?",
    a: "Export contour plots and other line artwork as vector PDF or EPS whenever the journal accepts them. For very dense 3D surfaces, a raster export at a suitable resolution, such as 600 dpi where the journal allows it, can be more reliable. Always check the target publisher's artwork instructions.",
  },
  {
    q: "What is the best color map for readers with color vision deficiency?",
    a: "Cividis was designed with color vision deficiency in mind, and viridis is also widely used. Avoid relying on red-green combinations, and test every figure in grayscale before submission. The Scientific Colour Maps by Crameri provide additional perceptually uniform and colour-blind-friendly options.",
  },
  {
    q: "When should I use a 3D surface plot instead of a 2D contour plot?",
    a: "Use a 2D representation whenever it communicates the same information more clearly. Use a 3D surface when the extra dimension adds real insight into peaks, valleys or geometry. Because 3D surfaces are poor for reading exact values, pair them with a contour projection or a 2D slice.",
  },
  {
    q: "How large should a figure be for a single-column journal layout?",
    a: "About 3.5 inches (89 mm) is a useful reference for a single IEEE column, while Elsevier widths depend on the journal's artwork instructions. Keep text around 7 to 9 pt at final publication size and print the figure at that size to check that tick labels remain readable.",
  },
  {
    q: "How can I make my figures reproducible?",
    a: "Save the original numerical data, the plotting script and the final exported figure together, and record the interpolation method, grid resolution and color limits. This makes it easy to regenerate the figure when reviewers ask for changes.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline:
        "Contour Plots and 3D Visualizations in Python and MATLAB for Q1 Journals",
      description: DESCRIPTION,
      datePublished: "2026-10-01",
      dateModified: "2026-11-12",
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
          name: "Contour Plots and 3D Visualizations",
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
  { id: "plot-types", title: "Choosing the Right Plot Type" },
  { id: "data-preparation", title: "Preparing Your Data" },
  { id: "contour-design", title: "Building Readable Contours" },
  { id: "color-maps", title: "Choosing Scientific Color Maps" },
  { id: "3d-surfaces", title: "Creating Professional 3D Surfaces" },
  { id: "data-overlays", title: "Overlaying Data and Optimization Paths" },
  { id: "journal-export", title: "Exporting Figures for Journals" },
  { id: "common-mistakes", title: "Common Visualization Mistakes" },
  { id: "final-checklist", title: "Final Publication Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/formatting-guide",
    title: "Manuscript Formatting Guide",
    text: "Figure resolution, templates and declarations for Q1/Q2 journals.",
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
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Plan, search and report a rigorous literature review.",
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
    <div className="my-5 overflow-hidden rounded-xl border border-slate-200">
      <p className="border-b border-slate-200 bg-slate-100 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-600">
        {label}
      </p>
      <pre className="overflow-x-auto bg-slate-950 p-4 text-[13px] leading-relaxed text-slate-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

const P = "text-[15px] leading-[1.85] text-slate-700";

const pythonContour = `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-3, 3, 300)
y = np.linspace(-3, 3, 300)
X, Y = np.meshgrid(x, y)
Z = np.exp(-(X**2 + Y**2)) * np.cos(2 * X)

fig, ax = plt.subplots(figsize=(3.5, 3.0))      # single-column width
cf = ax.contourf(X, Y, Z, levels=12, cmap="viridis")
cs = ax.contour(X, Y, Z, levels=12, colors="k", linewidths=0.4)
ax.clabel(cs, levels=cs.levels[::3], fontsize=6)  # label selected levels

cbar = fig.colorbar(cf, ax=ax)
cbar.set_label("Response (units)")
ax.set_xlabel("x (m)")
ax.set_ylabel("y (m)")
ax.set_aspect("equal")

fig.savefig("contour.pdf", bbox_inches="tight")   # vector export`;

const matlabContour = `[X, Y] = meshgrid(linspace(-3, 3, 300));
Z = exp(-(X.^2 + Y.^2)) .* cos(2*X);

figure('Units', 'inches', 'Position', [1 1 3.5 3.0]);
contourf(X, Y, Z, 12, 'LineColor', 'none'); hold on
[C, h] = contour(X, Y, Z, 12, 'k', 'LineWidth', 0.4);
clabel(C, h, 'FontSize', 6);

colormap(parula);
cb = colorbar;
cb.Label.String = 'Response (units)';
axis equal tight
xlabel('x (m)'); ylabel('y (m)');

exportgraphics(gcf, 'contour.pdf', 'ContentType', 'vector');`;

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const referenceList = [
    <>
      E. R. Tufte, <i>The Visual Display of Quantitative Information</i>,
      2nd ed. Cheshire, CT, USA: Graphics Press, 2001.
    </>,
    <>
      J. D. Hunter, “Matplotlib: A 2D graphics environment,”
      <i> Computing in Science &amp; Engineering</i>, vol. 9, no. 3,
      pp. 90–95, 2007.{" "}
      <Ext href="https://doi.org/10.1109/MCSE.2007.55">
        doi:10.1109/MCSE.2007.55
      </Ext>
    </>,
    <>
      C. R. Harris et al., “Array programming with NumPy,”
      <i> Nature</i>, vol. 585, pp. 357–362, 2020.{" "}
      <Ext href="https://doi.org/10.1038/s41586-020-2649-2">
        doi:10.1038/s41586-020-2649-2
      </Ext>
    </>,
    <>
      MathWorks, “MATLAB documentation: Graphics and 3-D visualization,”{" "}
      <Ext href="https://www.mathworks.com/help/matlab/">
        mathworks.com/help/matlab
      </Ext>
      .
    </>,
    <>
      D. Borland and R. M. Taylor II, “Rainbow color map (still) considered
      harmful,” <i>IEEE Computer Graphics and Applications</i>, vol. 27,
      no. 2, pp. 14–17, 2007.{" "}
      <Ext href="https://doi.org/10.1109/MCG.2007.323435">
        doi:10.1109/MCG.2007.323435
      </Ext>
    </>,
    <>
      F. Crameri, G. E. Shephard, and P. J. Heron, “The misuse of colour
      in science communication,” <i>Nature Communications</i>, vol. 11,
      Art. no. 5444, 2020.{" "}
      <Ext href="https://doi.org/10.1038/s41467-020-19160-7">
        doi:10.1038/s41467-020-19160-7
      </Ext>
    </>,
    <>
      J. R. Nunez, C. R. Anderton, and R. S. Renslow, “Optimizing colormaps
      with consideration for color vision deficiency to enable accurate
      interpretation of scientific data,” <i>PLoS ONE</i>, vol. 13,
      no. 7, Art. no. e0199239, 2018.{" "}
      <Ext href="https://doi.org/10.1371/journal.pone.0199239">
        doi:10.1371/journal.pone.0199239
      </Ext>
    </>,
    <>
      B. Wong, “Points of view: Color blindness,” <i>Nature Methods</i>,
      vol. 8, no. 6, p. 441, 2011.{" "}
      <Ext href="https://doi.org/10.1038/nmeth.1618">doi:10.1038/nmeth.1618</Ext>
    </>,
    <>
      Elsevier, “Artwork and media instructions,” Elsevier Author Resources.
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
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Scientific Visualization and Publishing Insights
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
            <Link href="/" className="transition hover:text-blue-800">Home</Link>
            <Link href="/#services" className="transition hover:text-blue-800">Services</Link>
            <Link href="/#process" className="transition hover:text-blue-800">How it works</Link>
            <Link href="/#insights" className="transition hover:text-blue-800">Insights</Link>
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
                Scientific Visualization
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Scientific Visualization
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-10-01">October 2026</time>
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                12 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              Contour Plots and 3D Visualizations in Python and MATLAB: A
              Publication-Quality Figure Guide for Q1 Journals
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical guide to making accurate, readable, and
              publication-quality contour plots and 3D surface plots for
              researchers across computational, experimental, and engineering
              disciplines, with Python and MATLAB examples.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-slate-200 bg-white">
                  <Image
                    src="/logo.png"
                    alt="ScholarGrid Technical Team"
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
                    Research and Scientific Visualization
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
                Introduction: Why Scientific Figures Matter to Reviewers
              </h2>
              <div className="rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  Reviewers look at your figures before they read your text.
                  A clean contour plot or a well-built 3D surface can make a
                  result obvious in seconds. A cluttered one can make a good
                  result look doubtful. Good figures follow one simple rule:
                  every element should help the reader read a value, not
                  decorate the page. Fig. 1 shows the same data twice, with
                  the default look on the left and a publication-ready
                  version on the right.
                </p>
              </div>
            </section>

            <ArticleFigure
              src="/blogs/fig14.png"
              alt="Default rainbow plot versus publication-ready contour plot"
              caption="Fig. 1. The same data: default rainbow plot versus a publication-ready contour plot."
            />

            <p className={`${P} mb-5`}>
              This guide covers the complete workflow in Python (Matplotlib
              and NumPy) and MATLAB: choosing the appropriate plot type,
              preparing numerical data, building readable contours,
              selecting scientific color maps, creating clear 3D surfaces,
              and exporting figures for top-quartile (Q1) journals. The
              examples demonstrate practical visualization principles that
              can be adapted to computational and experimental research. For
              journal-specific artwork rules beyond figures, read our{" "}
              <Int href="/blog/formatting-guide">
                manuscript formatting guide for Q1 and Q2 journals
              </Int>
              .
            </p>

            {/* Step 1 */}
            <SectionHeading id="plot-types" number="01">
              How to Choose the Right Plot Type for Scientific Data
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Start with the scientific question the figure is intended
              to answer. A reader who needs to interpret numerical levels
              benefits from contour lines. A reader who needs to understand
              the overall geometry may benefit from a surface representation.
            </p>

            <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Plot types, what each is best suited for, and potential issues
                  </caption>
                  <thead>
                    <tr className="bg-blue-950 text-white">
                      <th scope="col" className="px-4 py-3.5 font-semibold">Plot type</th>
                      <th scope="col" className="px-4 py-3.5 font-semibold">Best suited for</th>
                      <th scope="col" className="px-4 py-3.5 font-semibold">Potential issue</th>
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
                        <td className="px-4 py-3.5 font-semibold text-slate-900">
                          {item.plot}
                        </td>
                        <td className="px-4 py-3.5 leading-relaxed text-slate-600">
                          {item.best}
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

            <p className={P}>
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
              How to Prepare Numerical Data for Contour Plots
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Reliable visualization begins with correctly prepared
              numerical data. Even an attractive figure can be misleading
              if its underlying grid, interpolation, or measurement units
              are inconsistent.
            </p>

            <CheckList>
              <Check>
                Build a regular numerical grid using meshgrid and maintain
                consistent measurement units.
              </Check>
              <Check>
                For scattered measurements, interpolate onto a grid and
                clearly report the interpolation method.
              </Check>
              <Check>
                Select grid density according to the actual resolution of
                the available data. Excessive smoothing can introduce
                artificial features.
              </Check>
              <Check>
                Retain original measurement points as markers whenever
                appropriate (Fig. 6).
              </Check>
            </CheckList>

            {/* Step 3 */}
            <SectionHeading id="contour-design" number="03">
              How to Build a Readable Contour Plot in Python and MATLAB
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Contour plots should communicate numerical variation without
              overwhelming the reader. Their visual structure should make
              important gradients, boundaries, and spatial patterns easy
              to identify.
            </p>

            <CheckList>
              <Check>
                Begin with approximately 10 to 15 evenly spaced contour
                levels, adjusting the number according to the data.
              </Check>
              <Check>
                Combine filled contours with thin boundary lines and
                selectively labelled contour levels.
              </Check>
              <Check>
                Include a clearly labelled colorbar with measurement units
                and descriptive axis labels.
              </Check>
              <Check>
                Apply an equal aspect ratio when both axes represent the
                same physical unit and spatial scale.
              </Check>
            </CheckList>

            <SubHeading>Python (Matplotlib and NumPy) example</SubHeading>
            <p className={`${P} mt-3`}>
              The following sketch uses <Ext href="https://matplotlib.org/">Matplotlib</Ext>{" "}
              and <Ext href="https://numpy.org/">NumPy</Ext> to combine filled
              contours, thin labelled lines, a colorbar with units and a
              vector export at single-column width. Replace the test function
              and labels with your own data.
            </p>
            <CodeBlock label="Python" code={pythonContour} />

            <SubHeading>MATLAB example</SubHeading>
            <p className={`${P} mt-3`}>
              The equivalent MATLAB version uses the perceptually uniform
              parula map. The <code>exportgraphics</code> function is
              available in recent MATLAB releases (R2020a and later); check the{" "}
              <Ext href="https://www.mathworks.com/help/matlab/">
                MATLAB documentation
              </Ext>{" "}
              for your version.
            </p>
            <CodeBlock label="MATLAB" code={matlabContour} />

            <ArticleFigure
              src="/blogs/fig16.png"
              alt="Publication-quality Python contour plot"
              caption="Fig. 3. Example of a publication-ready contour plot at single-column width (3.5 in)."
            />

            <Callout title="Practical visualization tip">
              Print the figure at its actual publication size and examine
              it from a normal reading distance. If the colorbar ticks,
              axis labels, or contour annotations are difficult to read,
              the figure needs further refinement.
            </Callout>

            {/* Step 4 */}
            <SectionHeading id="color-maps" number="04">
              Best Scientific Color Maps for Journal Figures
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Color selection is one of the most important aspects of
              scientific visualization. Traditional rainbow maps such as
              jet can create artificial boundaries, obscure numerical
              gradients, and produce misleading patterns when reproduced
              in grayscale. This is a well-documented problem; see{" "}
              <Ext href="https://doi.org/10.1109/MCG.2007.323435">
                “Rainbow color map (still) considered harmful”
              </Ext>{" "}
              and{" "}
              <Ext href="https://doi.org/10.1038/s41467-020-19160-7">
                “The misuse of colour in science communication”
              </Ext>
              .
            </p>

            <p className={`${P} mt-3`}>
              Prefer perceptually uniform color maps such as viridis and
              cividis in Python, or parula in MATLAB. Cividis was designed
              with color vision deficiency in mind. Diverging color maps
              are more appropriate for signed quantities and should
              generally be centred around zero. Avoid relying on red-green
              combinations and evaluate figures in grayscale before
              submission (Fig. 4). The{" "}
              <Ext href="https://www.fabiocrameri.ch/colourmaps/">
                Scientific Colour Maps
              </Ext>{" "}
              collection is another trusted source of perceptually uniform
              options.
            </p>

            <ArticleFigure
              src="/blogs/fig17.png"
              alt="Grayscale comparison of jet and viridis color maps"
              caption="Fig. 4. Grayscale comparison: jet produces uneven visual transitions, whereas viridis maintains a more consistent light-to-dark progression."
            />

            {/* Step 5 */}
            <SectionHeading id="3d-surfaces" number="05">
              How to Create a Clean and Professional 3D Surface Plot
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Three-dimensional surface plots are particularly useful for
              visualizing nonlinear relationships, peaks, valleys, and
              spatial variations. However, poor viewing angles, heavy grid
              lines, and unnecessary visual effects can make scientific
              interpretation difficult.
            </p>

            <CheckList>
              <Check>
                Select an informative viewing angle. Elevation angles
                between 25° and 35° and an azimuth near -55° can be useful
                starting points for many surface geometries.
              </Check>
              <Check>
                Label all three axes with physical quantities and
                corresponding units.
              </Check>
              <Check>
                Use clear surface shading, subtle grid lines, and
                appropriately styled coordinate panes.
              </Check>
              <Check>
                Maintain consistent viewing angles across comparative
                panels.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig18.png"
              alt="Clean three-dimensional scientific surface plot"
              caption="Fig. 5. A professional 3D surface with a balanced viewing angle, labelled axes, smooth shading, and a colorbar."
            />

            <Callout title="Important consideration">
              Three-dimensional surfaces communicate geometric patterns
              more effectively than exact numerical values. When precise
              values matter, include a contour projection or a separate
              two-dimensional representation.
            </Callout>

            {/* Step 6 */}
            <SectionHeading id="data-overlays" number="06">
              How to Overlay Data, Paths and Optimization Results
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Overlays can turn a simple visualization into a more
              informative scientific figure. Experimental measurements
              can be displayed as markers, optimization trajectories as
              lines, and final optimal solutions as distinctive symbols
              with clear legend entries (Fig. 6).
            </p>

            <p className={`${P} mt-3`}>
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
              How to Export Figures According to Journal Requirements
            </SectionHeading>

            <p className={`${P} mt-4`}>
              A scientifically accurate figure must also satisfy the
              technical artwork requirements of its target journal.
              Resolution, physical dimensions, font embedding, and file
              format should be considered before submission rather than
              after reviewer feedback. Our{" "}
              <Int href="/blog/formatting-guide">
                manuscript formatting guide
              </Int>{" "}
              lists the typical dpi requirements of Elsevier and IEEE, and{" "}
              <Int href="/blog/paper-rejection-reasons">
                why journals reject papers
              </Int>{" "}
              explains how poor figures contribute to rejection.
            </p>

            <CheckList>
              <Check>
                Set figures to their intended publication dimensions.
                Approximately 3.5 in (89 mm) is a useful reference for a
                single IEEE column, while Elsevier figure widths should
                follow the selected journal’s artwork instructions.
              </Check>
              <Check>
                Maintain readable text, generally around 7–9 pt at final
                publication size, subject to journal specifications.
              </Check>
              <Check>
                Export contour plots and line artwork as vector PDF or EPS
                whenever accepted by the journal.
              </Check>
              <Check>
                For dense 3D surfaces, consider raster export at an
                appropriate resolution, such as 600 dpi where suitable.
              </Check>
              <Check>
                Embed fonts and verify resolution against the target
                publisher’s artwork requirements.
              </Check>
              <Check>
                Save the original numerical scripts and source data
                alongside the final figure files.
              </Check>
            </CheckList>

            <ArticleFigure
              src="/blogs/fig20.png"
              alt="Comparison of figure typography at different sizes"
              caption="Fig. 7. Typography comparison at identical figure dimensions: small text becomes difficult to read, while appropriately sized 8 pt text remains clearer."
            />

            {/* Common mistakes */}
            <SectionHeading id="common-mistakes">
              Common Scientific Visualization Mistakes to Avoid
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Several recurring issues can reduce the clarity and
              reproducibility of scientific figures. Review the following
              points before finalizing your manuscript illustrations.
            </p>

            <ol className="mt-5 space-y-2.5">
              {[
                "Using the default rainbow color map without evaluating its suitability.",
                "Leaving colorbars, measurement units, or axis labels incomplete.",
                "Using complex 3D representations when a simpler 2D plot communicates the results more clearly.",
                "Submitting screenshots instead of properly exported vector or high-resolution figures.",
                "Using inconsistent color limits or viewing angles across comparative panels.",
              ].map((mistake, index) => (
                <li
                  key={index}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-[1.8] text-slate-700">
                    {mistake}
                  </p>
                </li>
              ))}
            </ol>

            {/* Final checklist */}
            <SectionHeading id="final-checklist">
              Final Publication Checklist for Scientific Figures
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Before submitting your manuscript, use this checklist to
              evaluate the overall quality and technical consistency of
              your scientific figures.
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
                  <span className="text-sm leading-[1.8] text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Contour and 3D Plots
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
              Planning the full manuscript? Read how to{" "}
              <Int href="/blog/q1-research-paper-structure#results">
                present and interpret results in a Q1 paper
              </Int>{" "}
              or browse the{" "}
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
                Conclusion: Clear Figures Make Strong Research Visible
              </h2>
              <p className={`${P} mt-3`}>
                High-quality scientific visualization is an essential part
                of communicating computational and experimental research.
                By combining accurate numerical data, appropriate graphical
                representations, and journal-compliant export settings,
                researchers can present their findings more clearly and
                professionally.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Need help with publication-ready figures?
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  ScholarGrid supports researchers with scientific
                  visualization, manuscript preparation, and journal
                  submission. Explore our academic services or continue
                  learning in the Knowledge Library.
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
                  <li key={index} className="pl-1">
                    {reference}
                  </li>
                ))}
              </ol>
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
              <li><Link href="/blog/formatting-guide" className="transition hover:text-white">Manuscript Formatting</Link></li>
              <li><Link href="/blog/paper-rejection-reasons" className="transition hover:text-white">Journal Rejection Guide</Link></li>
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
