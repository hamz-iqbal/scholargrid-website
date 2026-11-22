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
  "A technical guide to publication-quality contour and 3D surface plots in Python and MATLAB: scattered-data interpolation, perceptually uniform color maps, log-spaced levels, multi-panel consistency, vector export and reproducibility.";

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
    "scattered data interpolation griddata",
    "log-spaced contour levels",
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
    modifiedTime: "2026-11-17T00:00:00Z",
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
    a: "A good starting point is about 10 to 15 evenly spaced levels, adjusted to the data. Too many levels clutter the figure, and too few hide structure. For data that spans several orders of magnitude, logarithmically spaced levels are often more informative, and for signed data the levels should be symmetric about zero.",
  },
  {
    q: "How do I make a contour plot from scattered measurements?",
    a: "Either interpolate the points onto a regular grid, for example with scipy.interpolate.griddata in Python or scatteredInterpolant in MATLAB, or contour the triangulation directly with tricontourf. Report the method, mask regions outside the convex hull of the data, overlay the original measurement points, and validate the interpolation with held-out points whenever possible.",
  },
  {
    q: "Should I export figures as vector or raster files?",
    a: "Export contour plots and other line artwork as vector PDF or EPS whenever the journal accepts them. For very dense 3D surfaces, a raster export at a suitable resolution, such as 600 dpi where the journal allows it, is often more reliable and gives smaller files. Always check the target publisher's artwork instructions.",
  },
  {
    q: "Why does my vector contour plot show thin white lines between filled regions?",
    a: "This is an anti-aliasing seam that some PDF viewers draw between adjacent filled polygons. Rasterize only the filled contour layer (rasterized=True in Matplotlib) while keeping axes, labels and contour lines as vectors, or increase the number of levels slightly. This also reduces file size for complex fields.",
  },
  {
    q: "What is the best color map for readers with color vision deficiency?",
    a: "Cividis was designed with color vision deficiency in mind, and viridis is also widely used. Avoid relying on red-green combinations, and test every figure in grayscale before submission. The Scientific Colour Maps by Crameri provide additional perceptually uniform and colour-blind-friendly options, including diverging maps.",
  },
  {
    q: "When should I use a 3D surface plot instead of a 2D contour plot?",
    a: "Use a 2D representation whenever it communicates the same information more clearly. Use a 3D surface when the extra dimension adds real insight into peaks, valleys or geometry. Because 3D surfaces are poor for reading exact values, pair them with a contour projection or a 2D slice.",
  },
  {
    q: "How large should a figure be for a single-column journal layout?",
    a: "About 3.5 inches (89 mm) is a useful reference for a single IEEE column and 7.16 inches for a full-width figure, while Elsevier widths of roughly 90 mm, 140 mm and 190 mm depend on the journal's artwork instructions. Keep text around 7 to 9 pt at final publication size and print the figure at that size to check that tick labels remain readable.",
  },
  {
    q: "How can I make my figures reproducible?",
    a: "Save the original numerical data, the plotting script and the final exported figure together, and record the interpolation method, grid resolution, random seeds, library versions and color limits. This makes it easy to regenerate the figure when reviewers ask for changes, and it supports data availability statements.",
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
      dateModified: "2026-11-17",
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
/* Code samples                                                        */
/* ------------------------------------------------------------------ */

const pythonStyle = `import numpy as np
import matplotlib as mpl
import matplotlib.pyplot as plt

# One global style block keeps every figure in the paper consistent.
mpl.rcParams.update({
    "font.family": "serif",
    "mathtext.fontset": "stix",     # matches Times-like journal body text
    "font.size": 8,
    "axes.labelsize": 8,
    "xtick.labelsize": 7,
    "ytick.labelsize": 7,
    "pdf.fonttype": 42,             # embed TrueType, avoid Type 3 fonts
    "ps.fonttype": 42,
    "axes.linewidth": 0.6,
    "figure.dpi": 150,              # screen preview only
})`;

const pythonContour = `x = np.linspace(-3, 3, 300)
y = np.linspace(-3, 3, 300)
X, Y = np.meshgrid(x, y)
Z = np.exp(-(X**2 + Y**2)) * np.cos(2 * X)

levels = np.linspace(-1.0, 1.0, 13)               # explicit, reproducible levels

fig, ax = plt.subplots(figsize=(3.5, 3.0), constrained_layout=True)
cf = ax.contourf(X, Y, Z, levels=levels, cmap="viridis",
                 extend="both", rasterized=True)  # raster fill, vector everything else
cs = ax.contour(X, Y, Z, levels=levels, colors="k", linewidths=0.4)
ax.clabel(cs, levels=levels[::3], fontsize=6, fmt="%.1f")  # label selected levels

cbar = fig.colorbar(cf, ax=ax, ticks=levels[::3])
cbar.set_label("Response (units)")
ax.set_xlabel("x (m)")
ax.set_ylabel("y (m)")
ax.set_aspect("equal")

fig.savefig("contour.pdf")                        # vector PDF with embedded fonts`;

const pythonDiverging = `# Signed quantity (error, residual, difference): centre the scale on zero.
lim = np.abs(Z).max()
levels_div = np.linspace(-lim, lim, 15)           # symmetric about zero

cf = ax.contourf(X, Y, Z, levels=levels_div, cmap="RdBu_r")
# For an asymmetric range use matplotlib.colors.TwoSlopeNorm(vcenter=0.0).`;

const pythonScattered = `from scipy.interpolate import griddata

rng = np.random.default_rng(42)                   # fixed seed, recorded in the paper
pts = rng.uniform(-3, 3, size=(250, 2))           # measurement locations
vals = np.exp(-(pts[:, 0]**2 + pts[:, 1]**2)) * np.cos(2 * pts[:, 0])

xi = np.linspace(-3, 3, 200)
X, Y = np.meshgrid(xi, xi)
Z = griddata(pts, vals, (X, Y), method="cubic")   # NaN outside the convex hull

fig, ax = plt.subplots(figsize=(3.5, 3.0), constrained_layout=True)
cf = ax.contourf(X, Y, Z, levels=12, cmap="viridis")  # NaN regions stay blank
ax.plot(pts[:, 0], pts[:, 1], "k.", ms=1.5)           # show where data really exist
fig.colorbar(cf, ax=ax, label="Response (units)")

# Triangulation alternative without gridding:
# ax.tricontourf(pts[:, 0], pts[:, 1], vals, levels=12, cmap="viridis")`;

const matlabContour = `[X, Y] = meshgrid(linspace(-3, 3, 300));
Z = exp(-(X.^2 + Y.^2)) .* cos(2*X);
levels = linspace(-1, 1, 13);

figure('Units', 'inches', 'Position', [1 1 3.5 3.0]);
contourf(X, Y, Z, levels, 'LineColor', 'none'); hold on
[C, h] = contour(X, Y, Z, levels, 'k', 'LineWidth', 0.4);
clabel(C, h, levels(1:3:end), 'FontSize', 6);

colormap(parula);                 % perceptually uniform MATLAB default
cb = colorbar;
cb.Label.String = 'Response (units)';
axis equal tight
set(gca, 'FontName', 'Times New Roman', 'FontSize', 8);
xlabel('x (m)'); ylabel('y (m)');

exportgraphics(gcf, 'contour.pdf', 'ContentType', 'vector');`;

const matlabScattered = `% Scattered measurements px, py, pv  ->  regular grid
F = scatteredInterpolant(px, py, pv, 'natural', 'none');  % no extrapolation
[X, Y] = meshgrid(linspace(min(px), max(px), 200), linspace(min(py), max(py), 200));
Z = F(X, Y);                       % NaN outside the data hull

contourf(X, Y, Z, 12, 'LineColor', 'none'); hold on
plot(px, py, 'k.', 'MarkerSize', 4);   % overlay the actual measurements`;

const pythonSurface = `fig = plt.figure(figsize=(3.5, 3.0))
ax = fig.add_subplot(projection="3d")

zmin = Z.min() - 0.3
surf = ax.plot_surface(X, Y, Z, cmap="viridis", rcount=120, ccount=120,
                       linewidth=0, antialiased=True)
ax.contourf(X, Y, Z, zdir="z", offset=zmin, levels=12, cmap="viridis")  # projection

ax.set_zlim(zmin, Z.max())
ax.view_init(elev=28, azim=-55)                   # informative, consistent angle
ax.set_box_aspect((1, 1, 0.6))
for axis in (ax.xaxis, ax.yaxis, ax.zaxis):
    axis.pane.fill = False                        # light, unobtrusive panes
ax.set_xlabel("x (m)")
ax.set_ylabel("y (m)")
ax.set_zlabel("Response (units)")
fig.colorbar(surf, ax=ax, shrink=0.6, pad=0.1, label="Response (units)")

fig.savefig("surface.png", dpi=600)               # raster is safer for dense surfaces`;

const matlabSurface = `h = surfc(X, Y, Z);                % surface plus contours on the base plane
h(1).EdgeColor = 'none';           % remove heavy mesh lines from the surface
shading interp
colormap(parula);
view(-55, 30);                     % azimuth, elevation
axis tight; box on; grid on
xlabel('x (m)'); ylabel('y (m)'); zlabel('Response (units)');
colorbar;

% Dense surfaces: export as a high-resolution image instead of vector.
exportgraphics(gcf, 'surface.png', 'Resolution', 600);`;

const pythonOverlay = `import matplotlib.patheffects as pe
from matplotlib.colors import LogNorm
from scipy.optimize import minimize

def f(p):                                         # Rosenbrock test function
    return (1 - p[0])**2 + 100 * (p[1] - p[0]**2)**2

x = np.linspace(-2, 2, 400)
y = np.linspace(-1, 3, 400)
X, Y = np.meshgrid(x, y)
Z = f([X, Y])

path = [np.array([-1.5, 1.5])]                    # initial point
minimize(f, path[0], method="BFGS", callback=lambda xk: path.append(xk.copy()))
path = np.array(path)

levels = np.logspace(-1, 3.5, 12)                 # log-spaced: data span decades
fig, ax = plt.subplots(figsize=(3.5, 3.0), constrained_layout=True)
cf = ax.contourf(X, Y, Z, levels=levels, norm=LogNorm(), cmap="viridis",
                 rasterized=True)
outline = [pe.withStroke(linewidth=2.2, foreground="black")]
ax.plot(path[:, 0], path[:, 1], "-", color="white", lw=1.0, path_effects=outline)
ax.plot(*path[0], "o", color="white", mec="black", label="Start")
ax.plot(*path[-1], "*", color="gold", mec="black", ms=9, label="Optimum")
ax.legend(frameon=True, fontsize=6, loc="upper left")
fig.colorbar(cf, ax=ax, label="Objective value")`;

const pythonPanels = `# Three comparable panels: identical levels, identical colour scale, one colorbar.
X, Y = np.meshgrid(np.linspace(-3, 3, 200), np.linspace(-3, 3, 200))
Z = np.exp(-(X**2 + Y**2)) * np.cos(2 * X)
fields = {"(a) Case A": Z, "(b) Case B": 0.8 * Z, "(c) Case C": Z * np.cos(Y)}
levels = np.linspace(-1, 1, 13)

fig, axes = plt.subplots(1, 3, figsize=(7.16, 2.5), sharex=True, sharey=True,
                         constrained_layout=True)    # 7.16 in = IEEE full width
for ax, (title, field) in zip(axes, fields.items()):
    cf = ax.contourf(X, Y, field, levels=levels, cmap="viridis",
                     extend="both", rasterized=True)
    ax.set_title(title, fontsize=8)
    ax.set_aspect("equal")
fig.colorbar(cf, ax=axes, shrink=0.9, label="Response (units)")
fig.savefig("panels.pdf")`;

const pythonReproduce = `import sys, matplotlib as mpl

np.savez_compressed("fig3_data.npz", X=X, Y=Y, Z=Z, levels=levels)
fig.savefig(
    "fig3.pdf",
    metadata={"Title": "Fig. 3 contour of response", "Creator": "plot_fig3.py v1.2"},
)
print("python", sys.version.split()[0], "| numpy", np.__version__,
      "| matplotlib", mpl.__version__)       # record versions in the repository README`;

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

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[13px] text-blue-900">
      {children}
    </code>
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

function DataTable({
  caption,
  headers,
  rows,
  minWidthClass,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
  minWidthClass: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
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
  );
}

const P = "text-[15px] leading-[1.85] text-slate-700";

/* ------------------------------------------------------------------ */
/* Article body                                                        */
/* ------------------------------------------------------------------ */

function ArticleBody() {
  const plotTypes = [
    ["Contour lines", "Reading numerical levels and comparing curves.", "Excessive contour levels and missing labels."],
    ["Filled contour", "Showing magnitude and spatial distribution together.", "Misleading or poorly selected color maps."],
    ["Heat map (pcolormesh, imagesc)", "Displaying raw gridded data without unnecessary smoothing.", "Blocky cells when using coarse grids."],
    ["3D surface", "Understanding peaks, valleys, and surface geometry.", "Hidden regions and difficult numerical interpretation."],
    ["3D scatter or path", "Displaying trajectories and three-dimensional point clouds.", "Depth ambiguity and overlapping markers."],
    ["Line slices through a field", "Quantitative comparison of profiles with error bars or a reference.", "Hides the 2D structure unless paired with a map."],
  ];

  const interpolation = [
    ["Linear (Delaunay)", "griddata(method='linear')", "griddata, scatteredInterpolant 'linear'", "Robust and monotone, but shows triangular facets on coarse data."],
    ["Cubic or natural neighbour", "griddata(method='cubic')", "scatteredInterpolant 'natural'", "Smooth contours, yet may overshoot near sparse regions."],
    ["Radial basis functions", "scipy RBFInterpolator", "Custom or Curve Fitting Toolbox", "Good for smooth fields. Tune the kernel and smoothing, and watch for oscillations."],
    ["Gaussian process (kriging)", "scikit-learn GaussianProcessRegressor", "fitrgp (Statistics Toolbox)", "Gives uncertainty maps as well as estimates, ideal for noisy experimental data."],
    ["No gridding (triangulation)", "tricontourf, tripcolor", "trisurf, tricontour alternatives", "Honest representation of sampling, since no new values are invented."],
  ];

  const colormaps = [
    ["Sequential, magnitude only", "viridis, cividis, plasma, magma", "parula, or turbo with care", "jet, rainbow, hsv"],
    ["Signed, centred on zero", "RdBu_r, or Crameri vik and berlin", "Custom diverging map", "Sequential maps with a hidden zero"],
    ["Cyclic quantities (phase, angle)", "twilight, Crameri romaO", "hsv only if no better option", "Linear maps with a visual seam"],
    ["Print in grayscale", "cividis, or a monotone-luminance gray ramp", "gray", "Any map with non-monotone lightness"],
    ["Categorical regions", "tab10, or Okabe-Ito colours", "Distinct line styles", "Continuous maps for discrete classes"],
  ];

  const sizes = [
    ["IEEE single column", "3.5 in (about 89 mm)", "7 to 9 pt"],
    ["IEEE full width", "7.16 in (about 182 mm)", "7 to 9 pt"],
    ["Elsevier single column", "About 90 mm (3.54 in)", "7 to 9 pt"],
    ["Elsevier 1.5 column", "About 140 mm (5.51 in)", "7 to 9 pt"],
    ["Elsevier full width", "About 190 mm (7.48 in)", "7 to 9 pt"],
  ];

  const mistakes: [string, string][] = [
    ["Using the default rainbow color map without evaluating its suitability.", "Rainbow maps create false boundaries and fail in grayscale."],
    ["Leaving colorbars, measurement units, or axis labels incomplete.", "A figure should be interpretable without reading the surrounding text."],
    ["Using complex 3D representations when a simpler 2D plot communicates the results more clearly.", "Perspective makes exact values hard to read."],
    ["Submitting screenshots instead of properly exported vector or high-resolution figures.", "Screen captures blur at print size and may be rejected."],
    ["Using inconsistent color limits or viewing angles across comparative panels.", "Readers compare colours between panels, so identical levels and one shared colorbar are essential."],
    ["Interpolating beyond the data without saying so.", "Extrapolated regions look as credible as measured ones. Mask them and show the sample points."],
    ["Over-smoothing a coarse grid.", "Fine interpolation of sparse data suggests resolution that does not exist."],
    ["Using a sequential map for signed data.", "The zero crossing, often the most important feature, disappears into the middle of the scale."],
    ["Overlay clutter.", "Heavy markers, thick paths and dense contour labels hide the field they are meant to explain."],
    ["Failing to record how the figure was made.", "Without the script, seed, grid and library versions, a reviewer-requested change becomes a rebuild from memory."],
  ];

  const checklist = [
    "The plot type matches the scientific question being investigated.",
    "The selected color map is perceptually uniform and passes a grayscale test.",
    "Signed quantities use a diverging map centred on zero with symmetric levels.",
    "All axes, colorbars, and measurement units are clearly labelled.",
    "Interpolated or scattered data show the original sample points and a masked extrapolation region.",
    "Comparative panels share identical levels, color limits, axis limits and viewing angles.",
    "Text remains readable at the final journal publication size (about 7 to 9 pt).",
    "Figures are exported in vector format or at an appropriate resolution, with fonts embedded and no Type 3 fonts.",
    "Filled contours in vector files are checked for seams in more than one PDF viewer.",
    "Figures are tested in grayscale and with a color vision deficiency simulator.",
    "Original scripts, numerical data, random seeds and library versions are saved together.",
    "Every figure is cited in the text and explained in a caption that states what the reader should conclude.",
  ];

  const referenceList: React.ReactNode[] = [
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
      P. Virtanen et al., “SciPy 1.0: Fundamental algorithms for scientific
      computing in Python,” <i>Nature Methods</i>, vol. 17, pp. 261–272,
      2020.{" "}
      <Ext href="https://doi.org/10.1038/s41592-019-0686-2">
        doi:10.1038/s41592-019-0686-2
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
      W. S. Cleveland and R. McGill, “Graphical perception: Theory,
      experimentation, and application to the development of graphical
      methods,” <i>Journal of the American Statistical Association</i>,
      vol. 79, no. 387, pp. 531–554, 1984.{" "}
      <Ext href="https://doi.org/10.1080/01621459.1984.10478080">
        doi:10.1080/01621459.1984.10478080
      </Ext>
    </>,
    <>
      N. P. Rougier, M. Droettboom, and P. E. Bourne, “Ten simple rules for
      better figures,” <i>PLoS Computational Biology</i>, vol. 10, no. 9,
      Art. no. e1003833, 2014.{" "}
      <Ext href="https://doi.org/10.1371/journal.pcbi.1003833">
        doi:10.1371/journal.pcbi.1003833
      </Ext>
    </>,
    <>
      Elsevier, “Artwork and media instructions,” Elsevier Author Resources.
    </>,
    <>
      IEEE Author Center, “Graphics and figure guidelines for IEEE journals,”{" "}
      <Ext href="https://journals.ieeeauthorcenter.ieee.org/">
        IEEE Author Center
      </Ext>
      .
    </>,
    <>
      Matplotlib Development Team, “Choosing colormaps in Matplotlib,”{" "}
      <Ext href="https://matplotlib.org/stable/users/explain/colors/colormaps.html">
        matplotlib.org documentation
      </Ext>
      .
    </>,
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
                Scientific Visualization
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Scientific Visualization
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-17">Updated November 2026</time>
              </span>

              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                18 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[44px]">
              Contour Plots and 3D Visualizations in Python and MATLAB: A
              Publication-Quality Figure Guide for Q1 Journals
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A technical guide to accurate, readable, and reproducible
              contour and 3D surface figures: from scattered-data
              interpolation and perceptually uniform color maps to
              multi-panel consistency, vector export, and journal artwork
              compliance, with tested patterns in Python and MATLAB.
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

            <p className={`${P} mb-4`}>
              The reason is perceptual. Classic graphical-perception
              experiments show that readers judge position and length far
              more accurately than colour or area <Cite n={10} />. A colour
              field therefore conveys pattern, while the numbers must come
              from labelled contour lines, a well-designed colorbar and,
              where precision matters, line slices. Tufte’s principle of
              data-ink economy <Cite n={1} /> points the same way: remove
              anything that does not carry information, and make everything
              that remains unambiguous.
            </p>

            <p className={`${P} mb-5`}>
              This guide covers the complete workflow in Python (Matplotlib{" "}
              <Cite n={2} />, NumPy <Cite n={3} /> and SciPy <Cite n={4} />)
              and MATLAB <Cite n={5} />: choosing the appropriate plot type,
              preparing and interpolating numerical data, building readable
              contours, selecting scientific color maps, creating clear 3D
              surfaces, overlaying measurements and optimization paths, and
              exporting figures for top-quartile (Q1) journals. The examples
              demonstrate practical principles that can be adapted to
              computational and experimental research. For journal-specific
              artwork rules beyond figures, read our{" "}
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
              A reader who needs to compare two profiles quantitatively is
              best served by line plots with error bars, even when a full
              two-dimensional field is available.
            </p>

            <DataTable
              caption="Plot types, what each is best suited for, and potential issues"
              headers={["Plot type", "Best suited for", "Potential issue"]}
              rows={plotTypes}
              minWidthClass="min-w-[640px]"
            />

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
              are inconsistent. A contour plot is a statement about a
              continuous field, so you must be able to defend every region
              of it.
            </p>

            <CheckList>
              <Check>
                Build a regular numerical grid using meshgrid and maintain
                consistent measurement units across all axes and panels.
              </Check>
              <Check>
                For scattered measurements, interpolate onto a grid and
                clearly report the interpolation method in the caption or
                the methods section.
              </Check>
              <Check>
                Select grid density according to the actual resolution of
                the available data. Excessive smoothing can introduce
                artificial features.
              </Check>
              <Check>
                Retain original measurement points as markers whenever
                appropriate (Fig. 6), and mask regions outside the convex
                hull of the data instead of extrapolating silently.
              </Check>
              <Check>
                Where possible, hold out a subset of the measurements and
                report the interpolation error on it. A reviewer will trust
                a field far more when you quantify how well it reproduces
                data it has not seen.
              </Check>
            </CheckList>

            <SubHeading>Choosing an interpolation method</SubHeading>

            <DataTable
              caption="Interpolation options for scattered data in Python and MATLAB"
              headers={["Method", "Python", "MATLAB", "When to use it, and cautions"]}
              rows={interpolation}
              minWidthClass="min-w-[860px]"
            />

            <p className={P}>
              The example below interpolates scattered samples with SciPy
              <Cite n={4} />, leaves the region outside the data hull blank,
              and overlays the measurement locations. Fix and report the
              random seed whenever the sample positions come from a
              simulation.
            </p>

            <CodeBlock label="Python: scattered data" code={pythonScattered} />
            <CodeBlock label="MATLAB: scattered data" code={matlabScattered} />

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
                levels, adjusting the number according to the data. Define
                the levels explicitly so that the figure is reproducible.
              </Check>
              <Check>
                Combine filled contours with thin boundary lines and
                selectively labelled contour levels, for instance every
                third level.
              </Check>
              <Check>
                Include a clearly labelled colorbar with measurement units
                and descriptive axis labels. Use <InlineCode>extend</InlineCode>{" "}
                arrows when values fall outside the level range.
              </Check>
              <Check>
                Apply an equal aspect ratio when both axes represent the
                same physical unit and spatial scale.
              </Check>
            </CheckList>

            <SubHeading>Python (Matplotlib and NumPy) example</SubHeading>
            <p className={`${P} mt-3`}>
              Start every project with one style block so that all figures
              share the same fonts, sizes and embedding settings. Setting{" "}
              <InlineCode>pdf.fonttype</InlineCode> to 42 embeds TrueType
              fonts and avoids the Type 3 fonts that several publisher
              workflows reject.
            </p>
            <CodeBlock label="Python: global style" code={pythonStyle} />

            <p className={`${P} mt-3`}>
              The following sketch uses <Ext href="https://matplotlib.org/">Matplotlib</Ext>{" "}
              and <Ext href="https://numpy.org/">NumPy</Ext> to combine filled
              contours, thin labelled lines, a colorbar with units and a
              vector export at single-column width. Replace the test function
              and labels with your own data. Rasterizing only the filled
              layer keeps text and lines as sharp vectors while avoiding
              thin seams between filled regions in some PDF viewers.
            </p>
            <CodeBlock label="Python: contour" code={pythonContour} />

            <SubHeading>MATLAB example</SubHeading>
            <p className={`${P} mt-3`}>
              The equivalent MATLAB version uses the perceptually uniform
              parula map. The <InlineCode>exportgraphics</InlineCode> function is
              available in recent MATLAB releases (R2020a and later); check the{" "}
              <Ext href="https://www.mathworks.com/help/matlab/">
                MATLAB documentation
              </Ext>{" "}
              for your version.
            </p>
            <CodeBlock label="MATLAB: contour" code={matlabContour} />

            <ArticleFigure
              src="/blogs/fig16.png"
              alt="Publication-quality Python contour plot"
              caption="Fig. 3. Example of a publication-ready contour plot at single-column width (3.5 in)."
            />

            <SubHeading>Signed data and logarithmic levels</SubHeading>
            <p className={`${P} mt-3`}>
              Two cases need special treatment. For signed quantities such
              as errors, residuals or differences between simulations, use a
              diverging map with symmetric levels so that zero sits exactly
              at the neutral colour. For fields spanning several orders of
              magnitude, such as pressure, power density or an objective
              function, use logarithmically spaced levels together with a
              logarithmic colour normalisation. Linear levels would
              compress the whole interesting region into one colour.
            </p>
            <CodeBlock label="Python: diverging levels" code={pythonDiverging} />

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
              <Cite n={6} /> and{" "}
              <Ext href="https://doi.org/10.1038/s41467-020-19160-7">
                “The misuse of colour in science communication”
              </Ext>{" "}
              <Cite n={7} />.
            </p>

            <p className={`${P} mt-3`}>
              Prefer perceptually uniform color maps such as viridis and
              cividis in Python, or parula in MATLAB. Cividis was designed
              with color vision deficiency in mind <Cite n={8} />. Diverging
              color maps are more appropriate for signed quantities and
              should generally be centred around zero. Avoid relying on
              red-green combinations <Cite n={9} /> and evaluate figures in
              grayscale before submission (Fig. 4). The{" "}
              <Ext href="https://www.fabiocrameri.ch/colourmaps/">
                Scientific Colour Maps
              </Ext>{" "}
              collection (available in Python as the cmcrameri package) is
              another trusted source of perceptually uniform options, and
              the Matplotlib documentation <Cite n={14} /> explains how the
              built-in maps were designed.
            </p>

            <ArticleFigure
              src="/blogs/fig17.png"
              alt="Grayscale comparison of jet and viridis color maps"
              caption="Fig. 4. Grayscale comparison: jet produces uneven visual transitions, whereas viridis maintains a more consistent light-to-dark progression."
            />

            <SubHeading>Which color map for which data?</SubHeading>

            <DataTable
              caption="Color map selection by data type"
              headers={["Data type", "Recommended (Python)", "Recommended (MATLAB)", "Avoid"]}
              rows={colormaps}
              minWidthClass="min-w-[780px]"
            />

            <p className={P}>
              Roughly one in twelve men and a much smaller share of women
              have some form of color vision deficiency, so a figure that
              depends on hue alone excludes a measurable part of your
              readership. Test with a simulator such as the one built into
              many image viewers, or with the colorspacious library in
              Python, and keep lightness monotonic whenever the map encodes
              magnitude. Use the same map for the same quantity throughout
              the manuscript, so that readers learn the encoding once.
            </p>

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
                appropriately styled coordinate panes. Remove the mesh
                lines of dense surfaces, since they obscure the colour
                encoding.
              </Check>
              <Check>
                Maintain consistent viewing angles across comparative
                panels.
              </Check>
              <Check>
                Add a contour projection on the base plane so that readers
                can read approximate values and locate features precisely.
              </Check>
            </CheckList>

            <CodeBlock label="Python: 3D surface with projection" code={pythonSurface} />
            <CodeBlock label="MATLAB: 3D surface with contours" code={matlabSurface} />

            <ArticleFigure
              src="/blogs/fig18.png"
              alt="Clean three-dimensional scientific surface plot"
              caption="Fig. 5. A professional 3D surface with a balanced viewing angle, labelled axes, smooth shading, and a colorbar."
            />

            <Callout title="Important consideration">
              Three-dimensional surfaces communicate geometric patterns
              more effectively than exact numerical values. When precise
              values matter, include a contour projection or a separate
              two-dimensional representation. Dense 3D surfaces exported
              as vector files can also become very large and slow to
              render, so a 600 dpi raster is often the more reliable choice.
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
              a more informative representation. The example below draws an
              optimizer trajectory over the Rosenbrock function, a standard
              benchmark with a narrow curved valley, using log-spaced levels
              and a path outlined for legibility.
            </p>

            <CodeBlock label="Python: optimization path on log-spaced contours" code={pythonOverlay} />

            <ArticleFigure
              src="/blogs/fig19.png"
              alt="Contour visualization with an optimization trajectory"
              caption="Fig. 6. Contours of a test function showing an optimization path, initial point, and final point."
            />

            <p className={P}>
              When overlaying several algorithms, distinguish them by line
              style and marker as well as colour, and keep the legend
              inside the axes only if it does not hide the structure of the
              field. In the caption, state the algorithm settings, the
              starting point and the stopping criterion, because the path
              itself is a result that readers may wish to reproduce.
            </p>

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
              explains how poor figures contribute to rejection. Always
              confirm the final numbers in the publisher’s own instructions{" "}
              <Cite n={12} /> <Cite n={13} />.
            </p>

            <DataTable
              caption="Typical figure widths and text sizes for journal layouts"
              headers={["Layout", "Figure width", "Text size at final size"]}
              rows={sizes}
              minWidthClass="min-w-[520px]"
            />

            <CheckList>
              <Check>
                Set figures to their intended publication dimensions in
                code (for example figsize in inches), instead of resizing
                them in the manuscript. Resizing changes the effective font
                size and line weight.
              </Check>
              <Check>
                Maintain readable text, generally around 7 to 9 pt at final
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
                publisher’s artwork requirements. The pdffonts and
                pdfimages utilities report embedded fonts and the effective
                resolution of raster images in a PDF.
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

            <SubHeading>Consistency across multi-panel figures</SubHeading>
            <p className={`${P} mt-3`}>
              Readers compare panels by comparing colours, so panels that
              show the same quantity must share identical levels, colour
              limits, axis ranges and viewing angles, and should be served
              by a single colorbar. Label the panels (a), (b), (c) in the
              figure and refer to them in the caption and text.
            </p>
            <CodeBlock label="Python: shared levels and one colorbar" code={pythonPanels} />

            <SubHeading>Reproducibility: keep data, code and versions together</SubHeading>
            <p className={`${P} mt-3`}>
              Reviewers frequently ask for a different color scale, an
              extra panel or a larger font. If the figure is generated by a
              script from stored data, the request takes minutes. If it
              was assembled by hand, it can take days. Store the numerical
              arrays beside the script, record library versions, and
              reference the repository or archive in your data availability
              statement. These habits also align with the broader advice on
              figure design in <Cite n={11} />.
            </p>
            <CodeBlock label="Python: save the data and record versions" code={pythonReproduce} />

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
              {mistakes.map(([title, text], index) => (
                <li
                  key={title}
                  className="flex gap-3 rounded-lg border border-slate-200 bg-white p-3.5"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-600"
                  >
                    {index + 1}
                  </span>
                  <span className="text-sm leading-[1.8] text-slate-700">
                    <strong className="text-slate-900">{title}</strong>{" "}
                    {text}
                  </span>
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
                representations, perceptually sound colour choices and
                journal-compliant export settings, researchers can present
                their findings more clearly and professionally.
              </p>
              <p className={`${P} mt-3`}>
                The practical workflow is short: decide what the reader must
                be able to read, prepare and validate the data, apply one
                consistent style, make the figure at its final size, check
                it in grayscale and in print, and archive the script with
                the data. Following it once per project saves days during
                revision.
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
                  <li key={index} id={`ref${index + 1}`} className="scroll-mt-28 pl-1">
                    {reference}
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-xs italic leading-relaxed text-slate-500">
                Library behaviour and publisher artwork rules change over
                time. Check the current documentation and the journal’s own
                instructions before submitting.
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