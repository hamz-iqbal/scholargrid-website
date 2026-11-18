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

const SLUG = "/blog/ai-in-scientific-research";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "Artificial Intelligence in Scientific Research: Applications, Tools, Benefits, and Limitations (2026)";
const DESCRIPTION =
  "How AI in scientific research works: applications from literature review to physics-informed neural networks, key tools, a practical workflow, benefits, limitations and responsible use.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "AI in scientific research",
    "artificial intelligence in scientific research",
    "AI tools for researchers",
    "AI applications in scientific research",
    "machine learning in scientific research",
    "generative AI in academic research",
    "AI-assisted literature review",
    "AI for scientific data analysis",
    "AI in computational science",
    "limitations of AI in scientific research",
    "responsible AI in academic research",
    "physics-informed neural networks",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-18T00:00:00Z",
    modifiedTime: "2026-11-18T00:00:00Z",
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
    q: "What is AI in scientific research?",
    a: "AI in scientific research means using machine learning, deep learning, and generative models as instruments inside the research process: finding and screening literature, analysing data, building predictive or surrogate models, solving differential equations, planning experiments, and drafting text. The AI is a tool whose output the researcher must validate, not an authority.",
  },
  {
    q: "Can AI replace a researcher or a systematic literature review?",
    a: "No. AI can accelerate searching, screening and extraction, but the research question, the inclusion criteria, the quality judgement and the interpretation remain human responsibilities. A review that relies on unverified AI output is not reproducible and risks citing papers that do not say what the tool claims.",
  },
  {
    q: "Which AI tools are most useful for researchers?",
    a: "It depends on the task. Semantic Scholar, Elicit, Consensus, Research Rabbit, Connected Papers and Scite support literature discovery. ChatGPT and Claude assist with explanation, coding and drafting. Python with scikit-learn, PyTorch, TensorFlow and MATLAB provide the computational foundation for modelling and data analysis.",
  },
  {
    q: "What is a physics-informed neural network (PINN)?",
    a: "A PINN is a neural network trained so that its output satisfies a governing differential equation, together with boundary and initial conditions. The equation residual is computed with automatic differentiation and added to the training loss, so the network learns from physics as well as from data.",
  },
  {
    q: "Is it acceptable to use ChatGPT or Claude when writing a paper?",
    a: "Most publishers allow limited use, such as language editing, but require disclosure and do not accept AI systems as authors. Policies differ between journals, so read the author guidelines of your target journal. You remain fully responsible for accuracy, originality and every citation in the manuscript.",
  },
  {
    q: "Why do language models invent references?",
    a: "Language models generate text that is statistically plausible, not text retrieved from a verified database. A reference can therefore look complete while pointing to a paper that does not exist or does not support the claim. Always confirm every citation in the publisher page, DOI resolver or an indexed database.",
  },
  {
    q: "What are the main limitations of AI in scientific research?",
    a: "The main limitations are hallucinated or misattributed content, poor extrapolation outside the training data, dependence on data quality, limited interpretability, training difficulties in physics-informed methods, reproducibility problems, and confidentiality risks when unpublished data are sent to external services.",
  },
  {
    q: "How can I use AI responsibly in my research?",
    a: "Define where AI is used before starting, keep sensitive data local, validate every output against primary sources or reference solutions, record software versions, seeds and prompts, disclose the use according to the journal policy, and never let a model make a scientific judgement that you cannot independently check.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BlogPosting",
      "@id": `${PAGE_URL}#article`,
      headline: TITLE,
      description: DESCRIPTION,
      articleSection: "AI & Machine Learning",
      datePublished: "2026-11-18",
      dateModified: "2026-11-18",
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
          name: "AI in Scientific Research",
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
  { id: "understanding-ai", title: "Understanding AI in Scientific Research" },
  { id: "applications", title: "Major Applications" },
  { id: "tools", title: "Important AI Tools for Researchers" },
  { id: "workflow", title: "Practical Workflow" },
  { id: "benefits", title: "Benefits" },
  { id: "limitations", title: "Limitations and Challenges" },
  { id: "ethics", title: "Ethical and Responsible Use" },
  { id: "future", title: "Future Directions" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Protocols, PRISMA screening, synthesis and LaTeX submission.",
  },
  {
    href: "/blog/contour-visualizations",
    title: "Contour Plots and 3D Visualizations",
    text: "Publication-quality scientific figures in Python and MATLAB.",
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
/* Reusable pieces                                                     */
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
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="my-7 overflow-hidden rounded-xl border border-slate-200 bg-white">
      <div className="bg-slate-50 p-3 sm:p-5">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          priority={priority}
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
    <div className="my-6 overflow-hidden rounded-lg bg-slate-950">
      <p className="border-b border-slate-800 px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-blue-200">
        {label}
      </p>
      <div className="overflow-x-auto p-4 sm:p-5">
        <pre className="font-mono text-[13px] leading-6 text-blue-100">
          {code}
        </pre>
      </div>
    </div>
  );
}

function Equation({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="my-5 flex items-center gap-4 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 px-4 py-4">
      <div className="mx-auto whitespace-nowrap font-serif text-[16px] italic text-slate-900">
        {children}
      </div>
      <span className="shrink-0 text-sm text-slate-500">({label})</span>
    </div>
  );
}

function DataTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-slate-200">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-blue-950 text-white">
              {headers.map((header) => (
                <th key={header} scope="col" className="px-4 py-3.5 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={row[0]}
                className={`border-b border-slate-100 ${
                  rowIndex % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3.5 align-top leading-relaxed ${
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
  const aiLayers = [
    ["Artificial intelligence", "Any system performing tasks that normally need human intelligence", "Search ranking, planning, expert systems"],
    ["Machine learning", "Algorithms that learn patterns from data instead of following hand-written rules", "Regression, random forests, support vector machines, clustering"],
    ["Deep learning", "Machine learning with multi-layer neural networks", "Convolutional networks, recurrent networks, autoencoders, neural operators"],
    ["Generative AI", "Models that produce new text, images, code or structures", "Large language models such as ChatGPT and Claude"],
  ];

  const applicationTable = [
    ["Literature discovery", "Semantic search, citation graphs, similarity maps", "Missed papers, opaque ranking"],
    ["Literature review", "Screening support, structured data extraction", "Wrong extractions, irreproducible searches"],
    ["Data analysis", "Feature extraction, clustering, anomaly detection", "Leakage, overfitting, hidden bias"],
    ["Predictive modelling", "Surrogate models for expensive simulations", "Poor extrapolation outside the training range"],
    ["Physics-informed networks", "Solving PDEs and inverse problems with physical constraints", "Loss balancing, stiff problems, slow training"],
    ["Experimental research", "Choosing informative experiments, image analysis", "Models trained on narrow operating conditions"],
    ["Scientific writing", "Language editing, code and explanation help", "Fabricated citations, loss of authorial voice"],
  ];

  const toolRows = [
    ["Google Scholar", "Broad scholarly search and citation tracking", "Initial discovery and grey literature", "Results are hard to reproduce, so it should not be the only source for a systematic review"],
    ["Semantic Scholar", "Academic search with citation graph and AI-assisted features", "Finding related work and influential citations", "Check any automatic summary against the abstract and full text"],
    ["Elicit", "AI research assistant for finding papers and extracting information into tables", "Screening support and comparing study attributes", "Verify every extracted value against the source paper"],
    ["Consensus", "AI-assisted search across scientific papers", "Quickly locating studies relevant to a question", "Use it for discovery, then read the papers yourself"],
    ["Research Rabbit", "Citation-network exploration and collections", "Snowballing from known papers", "Network position reflects connectivity, not quality"],
    ["Connected Papers", "Visual graph of papers related to a seed paper", "Mapping a new subfield", "The graph depends heavily on the chosen seed paper"],
    ["Scite", "Citation context labelled as supporting, contrasting or mentioning", "Checking how a claim has been received", "Labels are model-generated, so read the citing sentence"],
    ["ChatGPT", "General-purpose large language model assistant", "Explaining concepts, debugging code, language editing", "Can invent facts and references; disclose use as the journal requires"],
    ["Claude", "General-purpose large language model assistant", "Reading long documents, code review, drafting", "Same verification duties as any language model"],
    ["Python and scikit-learn", "Open-source classical machine-learning library", "Regression, classification, clustering, cross-validation", "Needs careful preprocessing and honest data splitting"],
    ["PyTorch", "Deep-learning framework with automatic differentiation", "Neural networks, PINNs, custom losses", "Fix seeds and record versions for reproducibility"],
    ["TensorFlow", "Deep-learning framework", "Production-style training pipelines", "API changes between versions can break older code"],
    ["MATLAB", "Commercial environment with machine-learning, deep-learning and PDE toolboxes", "Engineering workflows that already use MATLAB", "Toolbox licences and versions must be reported"],
  ];

  const workflowRows = [
    ["Question and scope", "Define the question and its metric by hand", "Decide where AI adds value and where it does not"],
    ["Literature", "Keyword search in a few databases", "Database search plus citation graphs and screening support, still documented"],
    ["Data handling", "Manual cleaning and spreadsheet analysis", "Scripted, versioned pipelines with automated checks"],
    ["Modelling", "Parametric studies with repeated simulations", "Surrogate or physics-informed model trained on a designed dataset"],
    ["Validation", "Compare with experiment or benchmark", "Same comparison plus held-out cases and uncertainty analysis"],
    ["Writing", "Manual drafting and editing", "Human drafting with limited, disclosed language assistance"],
  ];

  const pinnCode = `import math
import torch

torch.manual_seed(0)
alpha, L = 0.1, 1.0

net = torch.nn.Sequential(
    torch.nn.Linear(2, 32), torch.nn.Tanh(),
    torch.nn.Linear(32, 32), torch.nn.Tanh(),
    torch.nn.Linear(32, 32), torch.nn.Tanh(),
    torch.nn.Linear(32, 1),
)

def T(x, t):
    return net(torch.cat([x, t], dim=1))

def pde_residual(x, t):
    x.requires_grad_(True)
    t.requires_grad_(True)
    u = T(x, t)
    ones = torch.ones_like(u)
    u_t = torch.autograd.grad(u, t, ones, create_graph=True)[0]
    u_x = torch.autograd.grad(u, x, ones, create_graph=True)[0]
    u_xx = torch.autograd.grad(u_x, x, torch.ones_like(u_x),
                               create_graph=True)[0]
    return u_t - alpha * u_xx

opt = torch.optim.Adam(net.parameters(), lr=1e-3)

for step in range(5000):
    opt.zero_grad()
    x_f, t_f = L * torch.rand(2000, 1), torch.rand(2000, 1)
    loss_pde = pde_residual(x_f, t_f).pow(2).mean()

    t_b = torch.rand(200, 1)
    loss_bc = (T(torch.zeros_like(t_b), t_b).pow(2).mean()
               + T(L * torch.ones_like(t_b), t_b).pow(2).mean())

    x_i = L * torch.rand(200, 1)
    loss_ic = (T(x_i, torch.zeros_like(x_i))
               - torch.sin(math.pi * x_i / L)).pow(2).mean()

    loss = loss_pde + loss_bc + loss_ic
    loss.backward()
    opt.step()

# Validation against the analytical solution
x = torch.linspace(0, L, 101).reshape(-1, 1)
t = torch.full_like(x, 0.5)
exact = torch.exp(-alpha * math.pi**2 * t / L**2) * torch.sin(math.pi * x / L)
with torch.no_grad():
    err = torch.norm(T(x, t) - exact) / torch.norm(exact)
print("relative L2 error at t = 0.5:", err.item())`;

  const references: React.ReactNode[] = [
    <>
      H. Wang et al., “Scientific discovery in the age of artificial intelligence,” <i>Nature</i>, vol. 620, pp. 47–60, 2023.{" "}
      <Ext href="https://doi.org/10.1038/s41586-023-06221-2">doi:10.1038/s41586-023-06221-2</Ext>
    </>,
    <>
      A. Vaswani et al., “Attention is all you need,” in <i>Advances in Neural Information Processing Systems 30</i>, 2017, pp. 5998–6008.{" "}
      <Ext href="https://arxiv.org/abs/1706.03762">arXiv:1706.03762</Ext>
    </>,
    <>
      R. Kinney et al., “The Semantic Scholar Open Data Platform,” arXiv preprint, 2023.{" "}
      <Ext href="https://arxiv.org/abs/2301.10140">arXiv:2301.10140</Ext>
    </>,
    <>
      M. Gusenbauer and N. R. Haddaway, “Which academic search systems are suitable for systematic reviews or meta-analyses?” <i>Research Synthesis Methods</i>, vol. 11, no. 2, pp. 181–217, 2020.{" "}
      <Ext href="https://doi.org/10.1002/jrsm.1378">doi:10.1002/jrsm.1378</Ext>
    </>,
    <>
      M. J. Page et al., “The PRISMA 2020 statement: An updated guideline for reporting systematic reviews,” <i>BMJ</i>, vol. 372, Art. no. n71, 2021.{" "}
      <Ext href="https://doi.org/10.1136/bmj.n71">doi:10.1136/bmj.n71</Ext>
    </>,
    <>
      J. M. Nicholson et al., “scite: A smart citation index that displays the context of citations and classifies their intent using deep learning,” <i>Quantitative Science Studies</i>, vol. 2, no. 3, pp. 882–898, 2021.{" "}
      <Ext href="https://doi.org/10.1162/qss_a_00146">doi:10.1162/qss_a_00146</Ext>
    </>,
    <>F. Pedregosa et al., “Scikit-learn: Machine learning in Python,” <i>Journal of Machine Learning Research</i>, vol. 12, pp. 2825–2830, 2011.</>,
    <>A. Paszke et al., “PyTorch: An imperative style, high-performance deep learning library,” in <i>Advances in Neural Information Processing Systems 32</i>, 2019.</>,
    <>
      M. Abadi et al., “TensorFlow: Large-scale machine learning on heterogeneous distributed systems,” arXiv preprint, 2016.{" "}
      <Ext href="https://arxiv.org/abs/1603.04467">arXiv:1603.04467</Ext>
    </>,
    <>
      M. Raissi, P. Perdikaris, and G. E. Karniadakis, “Physics-informed neural networks: A deep learning framework for solving forward and inverse problems involving nonlinear partial differential equations,” <i>Journal of Computational Physics</i>, vol. 378, pp. 686–707, 2019.{" "}
      <Ext href="https://doi.org/10.1016/j.jcp.2018.10.045">doi:10.1016/j.jcp.2018.10.045</Ext>
    </>,
    <>
      G. E. Karniadakis et al., “Physics-informed machine learning,” <i>Nature Reviews Physics</i>, vol. 3, pp. 422–440, 2021.{" "}
      <Ext href="https://doi.org/10.1038/s42254-021-00314-5">doi:10.1038/s42254-021-00314-5</Ext>
    </>,
    <>
      S. Cai, Z. Wang, S. Wang, P. Perdikaris, and G. E. Karniadakis, “Physics-informed neural networks for heat transfer problems,” <i>Journal of Heat Transfer</i>, vol. 143, no. 6, Art. no. 060801, 2021.{" "}
      <Ext href="https://doi.org/10.1115/1.4050542">doi:10.1115/1.4050542</Ext>
    </>,
    <>
      S. Cai, Z. Mao, Z. Wang, M. Yin, and G. E. Karniadakis, “Physics-informed neural networks (PINNs) for fluid mechanics: A review,” <i>Acta Mechanica Sinica</i>, vol. 37, pp. 1727–1738, 2021.{" "}
      <Ext href="https://doi.org/10.1007/s10409-021-01148-1">doi:10.1007/s10409-021-01148-1</Ext>
    </>,
    <>
      L. Lu, X. Meng, Z. Mao, and G. E. Karniadakis, “DeepXDE: A deep learning library for solving differential equations,” <i>SIAM Review</i>, vol. 63, no. 1, pp. 208–228, 2021.{" "}
      <Ext href="https://doi.org/10.1137/19M1274067">doi:10.1137/19M1274067</Ext>
    </>,
    <>A. G. Baydin, B. A. Pearlmutter, A. A. Radul, and J. M. Siskind, “Automatic differentiation in machine learning: A survey,” <i>Journal of Machine Learning Research</i>, vol. 18, no. 153, pp. 1–43, 2018.</>,
    <>
      D. P. Kingma and J. Ba, “Adam: A method for stochastic optimization,” in <i>Proc. 3rd Int. Conf. Learning Representations (ICLR)</i>, 2015.{" "}
      <Ext href="https://arxiv.org/abs/1412.6980">arXiv:1412.6980</Ext>
    </>,
    <>
      S. Wang, Y. Teng, and P. Perdikaris, “Understanding and mitigating gradient flow pathologies in physics-informed neural networks,” <i>SIAM Journal on Scientific Computing</i>, vol. 43, no. 5, pp. A3055–A3081, 2021.{" "}
      <Ext href="https://doi.org/10.1137/20M1318043">doi:10.1137/20M1318043</Ext>
    </>,
    <>
      J. Jumper et al., “Highly accurate protein structure prediction with AlphaFold,” <i>Nature</i>, vol. 596, pp. 583–589, 2021.{" "}
      <Ext href="https://doi.org/10.1038/s41586-021-03819-2">doi:10.1038/s41586-021-03819-2</Ext>
    </>,
    <>
      Z. Ji et al., “Survey of hallucination in natural language generation,” <i>ACM Computing Surveys</i>, vol. 55, no. 12, Art. no. 248, 2023.{" "}
      <Ext href="https://doi.org/10.1145/3571730">doi:10.1145/3571730</Ext>
    </>,
    <>
      Committee on Publication Ethics (COPE), “Authorship and AI tools,” COPE position statement.{" "}
      <Ext href="https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools">
        publicationethics.org
      </Ext>
    </>,
    <>
      Z. Li et al., “Fourier neural operator for parametric partial differential equations,” in <i>Proc. 9th Int. Conf. Learning Representations (ICLR)</i>, 2021.{" "}
      <Ext href="https://arxiv.org/abs/2010.08895">arXiv:2010.08895</Ext>
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, AI and Machine Learning Methods, and Publishing Insights
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
            <Link href="/" className="transition hover:text-blue-800">Home</Link>
            <Link href="/#services" className="transition hover:text-blue-800">Support Scope</Link>
            <Link href="/#library" className="transition hover:text-blue-800">Insights</Link>
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
                <Link href="/#services">Support Scope</Link>
                <Link href="/#library">Insights</Link>
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
                AI in Scientific Research
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                AI &amp; Machine Learning
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-18">November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                17 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              Artificial Intelligence in Scientific Research: Applications,
              Tools, Benefits, and Limitations (2026)
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical, critical guide to AI in scientific research for
              PhD students, engineers and computational scientists: where it
              helps, which tools to use, how to build a worked
              physics-informed example, and where human judgement must stay
              in control.
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
                  <p className="text-sm font-bold text-slate-950">ScholarGrid Technical Team</p>
                  <p className="mt-0.5 text-xs text-slate-500">AI, Computational Science and Research Methods</p>
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
          <article className="min-w-0">
            {/* Introduction */}
            <section
              id="introduction"
              aria-labelledby="introduction-heading"
              className="mb-7 scroll-mt-28"
            >
              <h2 id="introduction-heading" className="sr-only">
                Introduction
              </h2>
              <div className="space-y-4 rounded-r-lg border-l-[3px] border-blue-800 bg-slate-50 px-5 py-5 sm:px-6">
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  <strong>AI in scientific research</strong> is no longer a
                  niche topic confined to computer science. Machine-learning
                  methods now appear in protein structure prediction{" "}
                  <Cite n={18} />, in the solution of partial differential
                  equations <Cite n={10} />, and in everyday tasks such as
                  searching literature or drafting code. A broad review in{" "}
                  <i>Nature</i> describes how AI is being used across the
                  scientific process, from hypothesis generation to
                  experimentation, while also pointing out the open
                  challenges <Cite n={1} />.
                </p>
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  For a researcher the practical question is not whether AI
                  is impressive, but where it is reliable enough to trust and
                  where it is not. This guide answers that question stage by
                  stage. It explains the main ideas, compares the tools
                  researchers actually use, walks through a complete
                  physics-informed example, and sets out the limitations and
                  ethical duties that come with using AI in academic work.
                </p>
              </div>
            </section>

            <ArticleFigure
              src="/blogs/fig40.png"
              alt="Diagram showing where AI can support each stage of the scientific research lifecycle"
              caption="Fig. 1. AI integration across the scientific research lifecycle, from question formulation to publication."
              priority
            />

            <p className={P}>
              Fig. 1 summarizes the structure of this article. AI can support
              every stage of the lifecycle, but its role differs: at the
              literature stage it is a search and organization aid, at the
              modelling stage it is a computational method, and at the writing
              stage it is an editing assistant. Treating these roles
              separately avoids the common mistake of applying one
              &quot;AI approach&quot; to every problem. If you are planning a
              review, read this article together with our{" "}
              <Int href="/blog/systematic-literature-review-guide">
                systematic literature review guide
              </Int>
              .
            </p>

            {/* Understanding */}
            <SectionHeading id="understanding-ai" number="01">
              Understanding Artificial Intelligence in Scientific Research
            </SectionHeading>

            <p className={`${P} mt-4`}>
              The terms AI, machine learning, deep learning and generative AI
              are often used interchangeably, but they describe nested ideas
              (Fig. 2). Artificial intelligence is the broadest category.
              Machine learning is the subset in which a model is fitted to
              data. Deep learning uses multi-layer neural networks, and
              generative AI covers models that produce new content, including
              the large language models built on the transformer
              architecture <Cite n={2} />.
            </p>

            <ArticleFigure
              src="/blogs/fig41.png"
              alt="Nested diagram of artificial intelligence, machine learning, deep learning and generative AI"
              caption="Fig. 2. Relationship between artificial intelligence, machine learning, deep learning and generative AI."
            />

            <DataTable
              caption="The layers of AI relevant to scientific research"
              headers={["Layer", "Core idea", "Typical research examples"]}
              rows={aiLayers}
            />

            <p className={P}>
              Two distinctions matter for researchers. First, a model can be{" "}
              <strong>data-driven</strong>, learning only from examples, or{" "}
              <strong>physics-informed</strong>, where known governing
              equations constrain the solution. Second, a model can be{" "}
              <strong>predictive</strong>, giving an output for new inputs, or{" "}
              <strong>generative</strong>, producing text or structures. Each
              combination has different failure modes, which is why validation
              looks different in each case. Karniadakis and co-authors
              review how physical knowledge can be embedded into learning
              systems <Cite n={11} />.
            </p>

            {/* Applications */}
            <SectionHeading id="applications" number="02">
              Major Applications of AI in Scientific Research
            </SectionHeading>

            <p className={`${P} mt-4`}>
              The table below gives an overview. Each application is
              discussed in the subsections that follow, together with the
              specific risk that a researcher must manage.
            </p>

            <DataTable
              caption="Applications of AI in scientific research and their typical risks"
              headers={["Application", "What AI contributes", "Main risk"]}
              rows={applicationTable}
            />

            <SubHeading>Literature Discovery</SubHeading>

            <p className={`${P} mt-3`}>
              Modern academic search tools combine keyword search with
              semantic similarity and citation graphs. Semantic Scholar, for
              example, is an open platform that links papers, authors and
              citations <Cite n={3} />, while Connected Papers and Research
              Rabbit visualize how a paper sits within its citation
              neighbourhood. These tools are strongest for exploration: they
              reveal clusters and influential papers that a keyword search
              can miss. They are weakest for completeness, because their
              ranking is not transparent.
            </p>

            <ArticleFigure
              src="/blogs/fig42.png"
              alt="Workflow diagram of AI-assisted literature discovery and evidence synthesis with human verification steps"
              caption="Fig. 3. AI-assisted literature discovery and evidence synthesis workflow, with human verification at each stage."
            />

            <p className={P}>
              Fig. 3 shows the workflow we recommend: use AI-assisted search
              to broaden discovery, export the records, screen them against
              written criteria, and verify every claim in the primary source.
              The human checkpoints are not optional.
            </p>

            <SubHeading>AI-Assisted Literature Reviews</SubHeading>

            <p className={`${P} mt-3`}>
              Tools such as Elicit can extract attributes from papers into
              tables, and Scite shows whether later papers support or
              contrast a finding by classifying citation context with deep
              learning <Cite n={6} />. This can shorten screening and
              extraction, but a systematic review must stay reproducible.
              Record the query, the date and the tool version, follow the
              PRISMA 2020 reporting guideline <Cite n={5} />, and treat any
              AI-extracted value as a draft to be checked. Google Scholar,
              although useful, is not recommended as the sole source because
              its results are difficult to reproduce <Cite n={4} />.
            </p>

            <SubHeading>Scientific Data Analysis</SubHeading>

            <p className={`${P} mt-3`}>
              Machine learning is valuable when data are high-dimensional or
              the relationship between variables is nonlinear. Typical tasks
              include dimensionality reduction, clustering, anomaly
              detection, regression and classification. The pipeline in Fig. 4
              makes the order of operations explicit: data audit,
              preprocessing, a split that respects the structure of the data,
              model fitting, evaluation and interpretation.
            </p>

            <ArticleFigure
              src="/blogs/fig43.png"
              alt="Machine-learning pipeline for scientific data analysis from data audit to interpretation"
              caption="Fig. 4. Machine-learning pipeline for scientific data analysis, including a leakage-safe train, validation and test split."
            />

            <p className={P}>
              The step most often done badly is the split. If samples from
              the same experiment, specimen or simulation run appear in both
              the training and test sets, performance is overestimated because
              the model has effectively seen the test conditions. Split by
              experiment or by case, not by random row, and report the
              metric on cases the model has never seen. Open-source libraries
              such as scikit-learn <Cite n={7} /> provide cross-validation
              utilities that support grouped splitting.
            </p>

            <SubHeading>Predictive Modelling</SubHeading>

            <p className={`${P} mt-3`}>
              In engineering, a common use of machine learning is the
              surrogate model: a fast approximation trained on the results of
              an expensive simulation or experiment, so that design
              exploration needs fewer full runs. A surrogate is only valid
              inside the range of conditions it was trained on. Extrapolation
              is the failure mode that most often goes unnoticed, so report
              the training range alongside any prediction and include test
              cases near its boundary.
            </p>

            <SubHeading>Physics-Informed Neural Networks</SubHeading>

            <p className={`${P} mt-3`}>
              A physics-informed neural network (PINN) approximates the
              solution of a differential equation with a neural network and
              trains it so that the equation, the boundary conditions and the
              initial conditions are satisfied <Cite n={10} />. The
              derivatives needed for the equation residual are obtained by
              automatic differentiation <Cite n={15} />, so no mesh is
              required. The total loss combines the individual terms:
            </p>

            <Equation label="1">
              ℒ(θ) = λ<sub>pde</sub> ℒ<sub>pde</sub> + λ<sub>bc</sub> ℒ<sub>bc</sub> + λ<sub>ic</sub> ℒ<sub>ic</sub> + λ<sub>data</sub> ℒ<sub>data</sub>
            </Equation>

            <p className={P}>
              Here θ are the network parameters and each λ is a weight. For a
              generic equation written as 𝒩[T] = 0, the physics term is the
              mean squared residual at N<sub>f</sub> collocation points:
            </p>

            <Equation label="2">
              ℒ<sub>pde</sub> = (1 / N<sub>f</sub>) Σ<sub>i</sub> | 𝒩[T(x<sub>i</sub>, t<sub>i</sub>; θ)] |²
            </Equation>

            <ArticleFigure
              src="/blogs/fig44.png"
              alt="Architecture of a physics-informed neural network with governing equation, boundary conditions, network approximation and physics-based loss"
              caption="Fig. 5. Physics-informed neural network architecture: the network output is differentiated automatically to form the physics residual, which is combined with boundary, initial and data losses."
            />

            <p className={P}>
              Fig. 5 shows the architecture. The network takes coordinates as
              input and returns the field. Automatic differentiation
              produces the derivatives, which feed the residual and the
              boundary and initial terms, and the optimizer, commonly Adam{" "}
              <Cite n={16} />, minimizes the combined loss. DeepXDE is an
              open-source library that packages this workflow <Cite n={14} />.
              PINNs are attractive for inverse problems and for problems with
              sparse data, but they are not automatically better than
              classical solvers. Training can be difficult when loss terms
              have very different magnitudes, a problem analysed by Wang,
              Teng and Perdikaris <Cite n={17} />, so always compare with a
              trusted numerical solution.
            </p>

            <SubHeading>Worked Example: PINN for Transient Heat Conduction</SubHeading>

            <p className={`${P} mt-3`}>
              To keep the example verifiable, we use a problem with a known
              analytical solution: one-dimensional transient heat conduction
              in a rod of length L with fixed zero temperature at both ends
              and a sinusoidal initial profile.
            </p>

            <Equation label="3">
              ∂T/∂t = α ∂²T/∂x², T(0, t) = T(L, t) = 0, T(x, 0) = sin(πx / L)
            </Equation>

            <p className={P}>
              The exact solution is T(x, t) = exp(−απ²t / L²) sin(πx / L),
              which can be checked by substitution. The network is trained on
              the residual of Eq. (3), the two boundary conditions and the
              initial condition, and its accuracy is measured by the relative
              L<sub>2</sub> error:
            </p>

            <Equation label="4">
              ε = ‖ T<sub>pred</sub> − T<sub>ref</sub> ‖<sub>2</sub> / ‖ T<sub>ref</sub> ‖<sub>2</sub>
            </Equation>

            <CodeBlock label="PyTorch: PINN for 1D transient heat conduction" code={pinnCode} />

            <p className={P}>
              The code uses PyTorch <Cite n={8} /> and has three
              responsibilities that map directly onto Eq. (1): the residual
              loss, the boundary loss and the initial-condition loss. Run
              it, then plot the prediction against the analytical solution
              at several times and report the error for each. We have not
              reported numerical results here because they depend on the
              random seed, network size and training length, which is itself
              a lesson: always state these settings next to any accuracy
              claim.
            </p>

            <Callout title="From the toy problem to CFD and heat transfer">
              The same pattern extends to convective heat transfer and fluid
              flow. For incompressible flow with heat transfer, the residuals
              of the continuity, momentum and energy equations replace the
              single heat equation. PINN applications to heat transfer{" "}
              <Cite n={12} /> and fluid mechanics <Cite n={13} /> have been
              reviewed in the literature. Difficulty rises sharply with
              turbulence, steep boundary layers and complex geometry, where
              conventional CFD remains the reference.
            </Callout>

            <Equation label="5">
              ∇·u = 0, ρ(∂u/∂t + u·∇u) = −∇p + μ∇²u, ρc<sub>p</sub>(∂T/∂t + u·∇T) = k∇²T
            </Equation>

            <ArticleFigure
              src="/blogs/fig45.png"
              alt="Diagram of AI integrated with CFD and heat-transfer modelling, showing simulation data, a surrogate or PINN model and validation"
              caption="Fig. 6. Integration of AI with CFD and heat-transfer modelling: simulation or experimental data train a surrogate or physics-informed model, which is validated against reference solutions."
            />

            <p className={P}>
              Fig. 6 illustrates two common integration patterns. In the
              first, CFD simulations generate a designed dataset and a
              machine-learning surrogate learns the input-output map for
              rapid design exploration. In the second, the governing
              equations of Eq. (5) are built into the loss so that the model
              respects conservation laws even where data are scarce. In both
              patterns, validation against an independent CFD or experimental
              case is the deciding step. For presenting the resulting fields,
              see our guide to{" "}
              <Int href="/blog/contour-visualizations">
                contour plots and 3D visualizations
              </Int>
              .
            </p>

            <SubHeading>Experimental Research</SubHeading>

            <p className={`${P} mt-3`}>
              In experimental work, machine learning is used to analyse
              images and signals, to detect anomalies in sensor streams, and
              to guide which experiment to run next. Established techniques
              such as active learning and Bayesian optimization choose
              informative conditions when each experiment is costly. The
              broad review by Wang and colleagues surveys such uses across
              disciplines <Cite n={1} />. Two cautions apply: a model trained
              on a narrow range of operating conditions will not transfer to
              others, and automated analysis of measurements must be checked
              against manual inspection before it is trusted.
            </p>

            <SubHeading>Scientific Writing</SubHeading>

            <p className={`${P} mt-3`}>
              Language models are effective at improving clarity, suggesting
              structure and explaining code. They are unreliable as sources of
              facts. Use them to polish text you have written yourself, not
              to generate claims or citations, and follow the disclosure
              rules of your target journal. Our guides to{" "}
              <Int href="/blog/q1-research-paper-structure">
                structuring a Q1 research paper
              </Int>{" "}
              and to the{" "}
              <Int href="/blog/paper-rejection-reasons">
                common reasons papers are rejected
              </Int>{" "}
              show where authors most often lose reviewers, and none of those
              problems is solved by automatic text generation.
            </p>

            {/* Tools */}
            <SectionHeading id="tools" number="03">
              Important AI Tools for Scientific Researchers
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Tools change quickly, so the table describes the stable role of
              each tool and the main caution. Check each tool&apos;s official
              documentation for current features, pricing and data-handling
              policies before you rely on it. Official sites include{" "}
              <Ext href="https://www.semanticscholar.org/">Semantic Scholar</Ext>,{" "}
              <Ext href="https://elicit.com/">Elicit</Ext>,{" "}
              <Ext href="https://consensus.app/">Consensus</Ext>,{" "}
              <Ext href="https://www.researchrabbit.ai/">Research Rabbit</Ext>,{" "}
              <Ext href="https://www.connectedpapers.com/">Connected Papers</Ext>{" "}
              and <Ext href="https://scite.ai/">Scite</Ext>.
            </p>

            <DataTable
              caption="AI tools for scientific researchers: role, best use and caution"
              headers={["Tool", "Primary role", "Best used for", "Key caution"]}
              rows={toolRows}
            />

            <p className={P}>
              Group the tools by purpose rather than by brand. Discovery tools
              (Google Scholar, Semantic Scholar, Elicit, Consensus, Research
              Rabbit, Connected Papers, Scite) help you find and contextualize
              papers, and none of them replaces reading. Language assistants
              (ChatGPT and Claude) help with explanation, code and editing,
              and require the strictest verification. Computational
              frameworks (scikit-learn <Cite n={7} />, PyTorch <Cite n={8} />,
              TensorFlow <Cite n={9} /> and MATLAB) are where the actual
              modelling happens, and where reproducibility is determined by
              seeds, versions and documented settings.
            </p>

            {/* Workflow */}
            <SectionHeading id="workflow" number="04">
              Practical Workflow for Integrating AI into Scientific Research
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Fig. 7 contrasts a conventional workflow with an AI-assisted
              one. The AI-assisted version does not remove steps. It adds
              validation and documentation steps, because a model introduces
              new ways to be wrong.
            </p>

            <ArticleFigure
              src="/blogs/fig46.png"
              alt="Side-by-side comparison of a conventional scientific research workflow and an AI-assisted workflow"
              caption="Fig. 7. Conventional versus AI-assisted scientific research workflow, showing the added validation and documentation steps."
            />

            <DataTable
              caption="Conventional versus AI-assisted research workflow by stage"
              headers={["Stage", "Conventional approach", "AI-assisted approach"]}
              rows={workflowRows}
            />

            <CheckList>
              <Check>
                <strong>Define the question and the success metric first.</strong>{" "}
                Decide what the model must predict, to what accuracy, and
                compared with which baseline, before you choose any
                algorithm.
              </Check>
              <Check>
                <strong>Audit the data.</strong> Check units, missing values,
                measurement uncertainty and how each sample was generated.
                Models inherit every flaw in their data.
              </Check>
              <Check>
                <strong>Start with a simple baseline.</strong> A linear model
                or a classical solver sets the bar that a complex model must
                clearly beat to justify its cost.
              </Check>
              <Check>
                <strong>Split by experiment or case.</strong> Keep a test set
                that was never used for tuning, and report results on it only
                once.
              </Check>
              <Check>
                <strong>Apply physical sanity checks.</strong> Verify
                conservation laws, bounds and limiting cases. A model that
                violates energy conservation is wrong even if its error looks
                small.
              </Check>
              <Check>
                <strong>Quantify uncertainty and report failure cases.</strong>{" "}
                Show where the model is least accurate, not only the average
                error.
              </Check>
              <Check>
                <strong>Document for reproducibility.</strong> Save code,
                software versions, random seeds, hyperparameters, data
                versions and, for language models, the prompts used.
              </Check>
            </CheckList>

            {/* Benefits */}
            <SectionHeading id="benefits" number="05">
              Benefits of AI in Scientific Research
            </SectionHeading>

            <CheckList>
              <Check>
                <strong>Speed on repetitive tasks.</strong> Screening support,
                extraction and code generation reduce routine effort, leaving
                more time for design and interpretation.
              </Check>
              <Check>
                <strong>Cheaper exploration of design spaces.</strong> Trained
                surrogates evaluate in a fraction of the time of a full
                simulation, which makes optimization and sensitivity studies
                practical.
              </Check>
              <Check>
                <strong>Handling complexity.</strong> Learning methods can
                find structure in high-dimensional data where manual analysis
                is impractical, as in structure prediction <Cite n={18} />.
              </Check>
              <Check>
                <strong>Inverse problems and sparse data.</strong>{" "}
                Physics-informed methods can combine scattered measurements
                with governing equations to infer unknown parameters{" "}
                <Cite n={10} />.
              </Check>
              <Check>
                <strong>Reproducible pipelines.</strong> Scripted analysis,
                when versioned properly, is easier to repeat and audit than
                manual spreadsheet work.
              </Check>
            </CheckList>

            {/* Limitations */}
            <SectionHeading id="limitations" number="06">
              Limitations and Challenges of AI in Scientific Research
            </SectionHeading>

            <CheckList>
              <Check>
                <strong>Hallucination.</strong> Language models can produce
                fluent text that is unsupported or false, including
                nonexistent references <Cite n={19} />. Every citation and
                every factual claim must be verified in the source.
              </Check>
              <Check>
                <strong>Dependence on data quality.</strong> Biased,
                unrepresentative or leaky data lead to confident but wrong
                models, however sophisticated the architecture.
              </Check>
              <Check>
                <strong>Poor extrapolation.</strong> Learned models are
                reliable near their training distribution and often fail
                outside it without warning.
              </Check>
              <Check>
                <strong>Limited interpretability.</strong> Deep networks rarely
                explain why a prediction was made, which complicates
                scientific justification and peer review.
              </Check>
              <Check>
                <strong>Training difficulty in physics-informed methods.</strong>{" "}
                Imbalanced loss terms and stiff problems can stall
                optimization <Cite n={17} />, and classical solvers are often
                faster and more accurate for well-posed forward problems.
              </Check>
              <Check>
                <strong>Reproducibility.</strong> Random initialization,
                library versions and hardware differences can change results,
                and commercial language models can change without notice.
              </Check>
              <Check>
                <strong>Confidentiality.</strong> Uploading unpublished data,
                manuscripts or reviewer material to an external service may
                breach publisher rules or data agreements.
              </Check>
            </CheckList>

            <Callout title="A rule of thumb">
              The more consequential a claim is, the less it should rest on
              output you cannot independently check. Use AI freely for
              exploration and drafting, and verify before anything enters your
              results, your citations or your conclusions.
            </Callout>

            {/* Ethics */}
            <SectionHeading id="ethics" number="07">
              Ethical and Responsible Use of AI in Academic Research
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Responsible use rests on accountability, transparency and
              verification (Fig. 8). The Committee on Publication Ethics states
              that AI tools cannot meet the requirements for authorship
              because they cannot take responsibility for the work{" "}
              <Cite n={20} />. The author who uses a tool remains accountable
              for everything in the paper.
            </p>

            <ArticleFigure
              src="/blogs/fig47.png"
              alt="Responsible AI framework for academic research showing accountability, transparency, verification, privacy and fairness"
              caption="Fig. 8. Responsible AI framework for academic research: accountability, transparency, verification, data protection and fairness."
            />

            <CheckList>
              <Check>
                <strong>Disclose.</strong> State which tools were used, for
                what purpose and at which stage, following the policy of the
                target journal.
              </Check>
              <Check>
                <strong>Verify.</strong> Confirm every reference, quotation,
                number and code output independently.
              </Check>
              <Check>
                <strong>Protect data.</strong> Keep unpublished, personal or
                confidential data away from services that retain or train on
                inputs, unless the terms clearly allow it.
              </Check>
              <Check>
                <strong>Respect peer-review confidentiality.</strong> Do not
                submit manuscripts you are reviewing to external AI services
                unless the journal explicitly permits it.
              </Check>
              <Check>
                <strong>Check for bias and fairness.</strong> Examine whether
                training data under-represent populations, materials or
                conditions relevant to your conclusions.
              </Check>
              <Check>
                <strong>Keep originality.</strong> Ideas, arguments and
                interpretations must be your own, and quoted or closely
                paraphrased material must be properly attributed.
              </Check>
            </CheckList>

            {/* Future */}
            <SectionHeading id="future" number="08">
              Future Directions
            </SectionHeading>

            <p className={`${P} mt-4`}>
              The most promising direction is hybrid modelling, in which
              physics-based and data-driven components complement each other
              (Fig. 9). Physical models supply structure and extrapolation
              ability, while learned components capture effects that are hard
              to model explicitly, such as unresolved closures or complex
              material behaviour <Cite n={11} />.
            </p>

            <ArticleFigure
              src="/blogs/fig48.png"
              alt="Hybrid physics-based and data-driven scientific discovery framework with feedback between simulation, data and learning"
              caption="Fig. 9. Hybrid physics-based and data-driven scientific discovery framework: simulation, experiments and learning inform one another in a validated loop."
            />

            <p className={P}>
              Neural operators, which learn mappings between function spaces,
              are being developed to solve families of PDEs rapidly once
              trained <Cite n={21} />. Broader reviews also point to growing
              use of AI for hypothesis generation and automated
              experimentation, along with open concerns about validation,
              transparency and access to compute <Cite n={1} />. Whatever
              the technology, the standard is unchanged: a result is only as
              credible as the evidence and validation behind it. Choosing
              where to publish such work is its own decision, and our guide to{" "}
              <Int href="/blog/fast-review-q1-q2-journals">
                fast-review Q1/Q2 journals
              </Int>{" "}
              explains how to shortlist and verify journals.
            </p>

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About AI in Scientific Research
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
                Conclusion: Use AI as an Instrument, Not an Authority
              </h2>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                AI in scientific research offers real gains in searching,
                analysing, modelling and computing, and physics-informed
                methods show how domain knowledge and learning can work
                together. Those gains depend on disciplined practice: honest
                data splits, simple baselines, physical sanity checks,
                independent validation, careful documentation and transparent
                disclosure. Researchers who treat AI as an instrument whose
                output must be verified will benefit most, and will produce
                work that reviewers and readers can trust.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Continue building your research workflow
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  Explore our guides on literature reviews, manuscript
                  structure, formatting and journal selection, or contact us
                  with a question about your research workflow.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 rounded-lg bg-blue-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Browse the Knowledge Library
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                  >
                    Contact us
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                  >
                    <ArrowLeft size={16} aria-hidden="true" />
                    Back to Homepage
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
                {references.map((reference, index) => (
                  <li key={index} id={`ref${index + 1}`} className="scroll-mt-28 pl-1">
                    {reference}
                  </li>
                ))}
              </ol>
            </section>
          </article>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block" aria-label="Article sidebar">
            <div className="sticky top-24 space-y-5">
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

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                  <BookOpen size={19} aria-hidden="true" />
                </div>
                <p className="font-serif text-lg font-bold text-slate-950">
                  Explore More Research Guides
                </p>
                <p className="mt-2 text-[13px] leading-[1.8] text-slate-600">
                  Discover practical resources on academic writing, literature
                  reviews, research methodology, and scholarly publishing.
                </p>
                <Link
                  href="/blog"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition hover:text-blue-950"
                >
                  Browse All Articles
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

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