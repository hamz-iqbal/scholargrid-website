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

const SLUG = "/blog/python-vs-matlab-scientific-computing";
const PAGE_URL = `${SITE_URL}${SLUG}`;

const TITLE =
  "Python vs MATLAB for Scientific Computing: Which Is Better in 2026?";
const DESCRIPTION =
  "Python vs MATLAB for scientific computing: reproducible stiff-ODE measurements, Jacobian and tolerance checks, visualization, machine learning, performance profiling, cost, migration and a pilot-task decision method for 2026.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Python vs MATLAB",
    "Python or MATLAB for engineering",
    "Python vs MATLAB for scientific computing",
    "MATLAB alternatives",
    "SciPy vs MATLAB ODE solvers",
    "stiff ODE solve_ivp ode15s",
    "Matplotlib vs MATLAB plotting",
    "MATLAB machine learning vs scikit-learn",
    "MATLAB cost vs Python",
    "MATLAB to Python migration",
  ],
  alternates: { canonical: PAGE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: PAGE_URL,
    siteName: "ScholarGrid",
    title: `${TITLE} | ScholarGrid`,
    description: DESCRIPTION,
    publishedTime: "2026-11-21T00:00:00Z",
    modifiedTime: "2026-11-21T00:00:00Z",
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
    q: "Is Python better than MATLAB for scientific computing?",
    a: "Neither is better in every case. Python offers a free, general-purpose ecosystem with very broad machine-learning and open-source libraries. MATLAB offers an integrated environment, well-documented toolboxes and Simulink. The better choice depends on whether you need Simulink or vendor toolboxes, how much you depend on open-source research code, your budget, and what your team and reviewers can reproduce.",
  },
  {
    q: "Is MATLAB still worth learning in 2026?",
    a: "Yes, if your field uses Simulink, vendor toolboxes or MATLAB-based legacy code, or if your university and lab already teach and license it. MathWorks continues to release updates twice a year, and R2026b was released in September 2026. Many researchers also learn both and use each where it fits.",
  },
  {
    q: "Can Python completely replace MATLAB for engineering work?",
    a: "For many tasks, yes: numerical solvers, optimization, plotting, data analysis and machine learning are well covered by NumPy, SciPy, Matplotlib and related libraries. Model-based design in Simulink and some toolbox-specific workflows have no direct one-to-one Python equivalent, so replacing MATLAB entirely depends on what you actually use.",
  },
  {
    q: "Is Python faster than MATLAB?",
    a: "It depends on the workload. Dense linear algebra in both languages is handled by optimized BLAS and LAPACK libraries, so performance there depends mostly on the library and thread count. Loop-heavy code is slow in plain Python unless you vectorize it or use tools such as Numba. Always benchmark your own problem on the same hardware and tolerances.",
  },
  {
    q: "How do I make a speed comparison between Python and MATLAB fair?",
    a: "Use the same hardware, the same algorithm and the same numerical tolerances, run a warm-up call before timing, repeat the measurement and report the best or median value, and record software versions and thread counts. Compare accuracy as well as time, because a faster result that is less accurate is not a like-for-like comparison.",
  },
  {
    q: "Is there a free alternative to MATLAB?",
    a: "GNU Octave is a free program that runs much MATLAB-style code, but its compatibility is not complete, especially for toolboxes and newer language features. Python with NumPy and SciPy is the most common free alternative for new projects.",
  },
  {
    q: "Which is better for machine learning, Python or MATLAB?",
    a: "Python has the broadest ecosystem for machine-learning research, including scikit-learn, PyTorch, TensorFlow and JAX. MATLAB provides the Statistics and Machine Learning Toolbox and the Deep Learning Toolbox with interactive apps, and can exchange models with Python through ONNX and interoperability features.",
  },
  {
    q: "Can I use Python and MATLAB together?",
    a: "Yes. MATLAB can call Python libraries, and the MATLAB Engine API lets Python scripts start and control MATLAB. Data can also move through shared formats such as HDF5, CSV and MAT files. Document the versions of both tools so that the workflow can be reproduced.",
  },
  {
    q: "How do I migrate MATLAB code to Python safely?",
    a: "Port one function at a time, save reference outputs from the MATLAB version, and compare the Python results with a stated tolerance before moving on. Watch for 1-based versus 0-based indexing, matrix versus element-wise operators, column-major versus row-major memory order and NumPy slices being views. Profile only after the results match.",
  },
  {
    q: "Which is better for a PhD thesis, Python or MATLAB?",
    a: "Choose the tool that your supervisor, your lab code base and your field's reviewers can use, and that will still run when your examiners and successors need it. Both are accepted. What matters is that the code is documented, versioned and reproducible, and that the thesis states the software versions and numerical settings.",
  },
  {
    q: "Which is easier to learn for engineering students?",
    a: "MATLAB offers an integrated desktop and a consistent matrix-oriented syntax, which many students find a gentle start. Python is a general-purpose language whose skills transfer to data science and software development. Both are learnable in a semester; the practical advice is to start with the tool your course and lab use, then add the other.",
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
      articleSection: "Programming & Scientific Computing",
      datePublished: "2026-11-21",
      dateModified: "2026-11-21",
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
          name: "Python vs MATLAB for Scientific Computing",
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
  { id: "short-answer", title: "The Short Answer" },
  { id: "ecosystem", title: "Language Design and Ecosystem" },
  { id: "solvers", title: "Numerical Solvers" },
  { id: "visualization", title: "Visualization" },
  { id: "ml", title: "Machine Learning and AI" },
  { id: "performance", title: "Performance" },
  { id: "cost", title: "Cost, Licensing and Reproducibility" },
  { id: "applications", title: "Practical Applications" },
  { id: "hybrid", title: "Using Both Together" },
  { id: "checklist", title: "Decision Checklist" },
  { id: "faq", title: "FAQs" },
  { id: "conclusion", title: "Conclusion" },
  { id: "references", title: "References" },
];

const related = [
  {
    href: "/blog/ai-in-scientific-research",
    title: "AI in Scientific Research",
    text: "Applications, tools, PINNs and the limits of AI in research.",
  },
  {
    href: "/blog/contour-visualizations",
    title: "Contour Plots and 3D Visualizations",
    text: "Publication-quality scientific figures in Python and MATLAB.",
  },
  {
    href: "/blog/systematic-literature-review-guide",
    title: "Systematic Literature Review Guide",
    text: "Protocols, PRISMA screening, synthesis and LaTeX submission.",
  },
  {
    href: "/blog/formatting-guide",
    title: "Manuscript Formatting Guide",
    text: "Templates, equations, figures and references for Elsevier and IEEE.",
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

function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[13px] text-blue-900">
      {children}
    </code>
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
  rows: React.ReactNode[][];
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
                key={rowIndex}
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
  const evidenceRows = [
    ["Measured", "We ran the code and report the output. Counts are deterministic for the stated library versions and settings, and can be reproduced with the scripts shown.", "The stiff-ODE step and evaluation counts, the Jacobian and reference-solution checks"],
    ["Documented", "Taken from official documentation, a standard reference or a published paper, and cited.", "Solver families, default tolerances, API names, release information"],
    ["Guidance", "Practical judgement from common research workflows. It may not hold for your problem, so test it.", "Which tool suits a lab, migration advice, cost structure"],
  ];

  const verdictRows = [
    ["Simulink and model-based design", "MATLAB", "Simulink is a MathWorks product, and Python has no direct one-to-one equivalent"],
    ["Machine-learning research and custom models", "Python", "PyTorch, TensorFlow, JAX and scikit-learn are developed in the open and widely used in research"],
    ["Integrated, documented toolboxes", "MATLAB", "Desktop, editor, apps and toolboxes are documented and released together"],
    ["Free or open licensing", "Python", "Software is free, and reviewers can run the code without buying a licence"],
    ["Legacy lab or course code", "Usually the existing tool", "Rewriting working, validated code has a real cost; migrate only for a clear reason"],
    ["Teaching numerical methods", "Either", "Both express the same algorithms clearly; choose what your course supports"],
  ];

  const workflowRows = [
    ["Editor and IDE", "MATLAB Desktop, Editor and Live Editor", "VS Code, PyCharm, Spyder, JupyterLab"],
    ["Notebooks", "Live Scripts", "Jupyter notebooks"],
    ["Package and environment management", "Add-On Explorer, MATLAB Projects, toolbox licences", "venv, conda, pip, with requirements or environment files"],
    ["Debugging", "Integrated debugger with breakpoints", "pdb and IDE debuggers"],
    ["Testing", "MATLAB unit testing framework", "pytest, unittest"],
    ["Version control", "Git integration in the desktop", "Git from the command line or IDE"],
  ];

  const syntaxRows = [
    ["Indexing", "A(1,2): 1-based", "A[0, 1]: 0-based"],
    ["Ranges", "1:5 includes both ends", "range(1, 6) or np.arange(1, 6): end excluded"],
    ["Matrix product", "A * B", "A @ B"],
    ["Element-wise product", "A .* B", "A * B"],
    ["Power", "A^2 is a matrix power, A.^2 is element-wise", "A ** 2 is element-wise, np.linalg.matrix_power(A, 2) is a matrix power"],
    ["Linear solve", "x = A \\ b", "x = np.linalg.solve(A, b)"],
    ["Last element", "x(end)", "x[-1]"],
    ["Slices", "Copy by default", "Basic slices are views of the same data"],
    ["Memory order", "Column-major", "Row-major (C order) by default"],
    ["Transpose", "A' is the conjugate transpose", "A.T is the plain transpose"],
    ["Vectors", "Arrays have at least two dimensions", "1-D arrays exist, so shape (n,) and (n, 1) behave differently in broadcasting"],
    ["Floating-point equality", "Compare with a tolerance, such as abs(a-b) < tol", "np.isclose(a, b) or np.allclose(A, B)"],
  ];

  const stiffRows = [
    ["RK45 (explicit)", "234,650", "1,642,526", "Converged"],
    ["BDF (implicit)", "103", "229", "Converged"],
    ["Radau (implicit)", "42", "338", "Converged"],
    ["LSODA (switching)", "83", "165", "Converged"],
  ];

  const jacRows = [
    ["BDF", "Finite-difference (default)", "103", "229", "4"],
    ["BDF", "Analytic, supplied with jac=", "103", "229", "4"],
    ["Radau", "Finite-difference (default)", "42", "338", "6"],
    ["Radau", "Analytic, supplied with jac=", "42", "338", "6"],
  ];

  const solverRows = [
    ["Linear systems", "A \\ b, lu, chol", "numpy.linalg.solve, scipy.linalg, scipy.sparse.linalg"],
    ["Sparse matrices", "Built-in sparse type", "scipy.sparse (CSR and CSC formats)"],
    ["Iterative linear solvers", "pcg, gmres, bicgstab", "scipy.sparse.linalg.cg, gmres, bicgstab"],
    ["Non-stiff ODEs", "ode45", "solve_ivp(method='RK45')"],
    ["Stiff ODEs", "ode15s, ode23s", "solve_ivp(method='BDF', 'Radau' or 'LSODA')"],
    ["Boundary value problems", "bvp4c, bvp5c", "scipy.integrate.solve_bvp"],
    ["PDEs", "pdepe, PDE Toolbox", "FEniCS(x), scikit-fem, py-pde"],
    ["Constrained optimization", "fmincon (Optimization Toolbox)", "scipy.optimize.minimize, CVXPY"],
  ];

  const odeControlRows = [
    ["Relative and absolute tolerance", "odeset('RelTol', ..., 'AbsTol', ...)", "solve_ivp(rtol=..., atol=...)"],
    ["Events (stop at a condition)", "odeset('Events', @eventFcn)", "solve_ivp(events=...)"],
    ["Dense output (evaluate between steps)", "deval, or specify output times", "solve_ivp(dense_output=True) and sol.sol(t)"],
    ["Analytic Jacobian", "odeset('Jacobian', ...)", "solve_ivp(jac=...)"],
    ["Sparse Jacobian pattern", "odeset('JPattern', ...)", "solve_ivp(jac_sparsity=...)"],
    ["Solver statistics", "odeset('Stats', 'on')", "sol.nfev, sol.njev, sol.nlu and len(sol.t)"],
    ["Success check", "Check warnings and returned values", "sol.success and sol.status"],
  ];

  const vizRows = [
    ["Default colormap", "parula", "viridis"],
    ["Figure interface", "Figure windows, tiledlayout, Live Editor", "pyplot or object-oriented Axes, Jupyter"],
    ["Global style", "set(groot, 'defaultAxes...') defaults", "mpl.rcParams or style sheets"],
    ["Export", "exportgraphics", "savefig, with PDF and SVG support"],
    ["Interactive dashboards", "App Designer", "Plotly Dash, Streamlit, Jupyter widgets"],
    ["Large 3D mesh data", "patch, trisurf", "PyVista, ParaView Python scripting"],
  ];

  const mlRows = [
    ["Classical machine learning", "Statistics and Machine Learning Toolbox, Classification Learner app", "scikit-learn"],
    ["Deep learning", "Deep Learning Toolbox", "PyTorch, TensorFlow and Keras, JAX"],
    ["Hyperparameter search", "bayesopt and related functions", "scikit-learn search tools, Optuna"],
    ["Interpretability", "lime and shapley functions", "SHAP, LIME packages"],
    ["Experiment tracking", "Experiment Manager", "MLflow, Weights & Biases"],
    ["Model exchange", "importNetworkFromONNX and exportONNXNetwork", "torch.onnx.export and ONNX Runtime"],
  ];

  const perfToolRows = [
    ["Timing", "tic and toc, timeit", "time.perf_counter, timeit"],
    ["Profiling", "Profiler (profile on, profile viewer)", "cProfile, line_profiler, py-spy"],
    ["Compilation", "Execution engine, MATLAB Coder", "Numba, Cython, JAX jit"],
    ["Parallel loops and tasks", "parfor, Parallel Computing Toolbox", "multiprocessing, joblib, Dask"],
    ["GPU arrays", "gpuArray", "CuPy, PyTorch, JAX"],
  ];

  const costRows = [
    ["Software licence", "Commercial; individual, academic and campus options", "Free and open source; check each package licence"],
    ["Extra capabilities", "Toolboxes are separately licensed products", "Packages are free to install"],
    ["Release model", "R20XXa and R20XXb each year", "Python and each library release independently"],
    ["Support", "Vendor documentation and technical support", "Documentation, community forums, optional paid distributions"],
    ["Sharing with people who have no licence", "MATLAB Runtime can run compiled applications", "Anyone can install the environment from a requirements file"],
    ["Main hidden cost", "Licence availability for collaborators and reviewers", "Environment setup and library version drift"],
  ];

  const domainRows = [
    ["Control systems", "Control System Toolbox and Simulink", "python-control, scipy.signal"],
    ["Signal processing", "Signal Processing Toolbox", "scipy.signal, scipy.fft"],
    ["CFD and heat transfer", "PDE Toolbox, custom finite-difference or finite-volume code", "FEniCS(x), scikit-fem, PyVista, ParaView scripting"],
    ["Image processing", "Image Processing Toolbox", "scikit-image, OpenCV"],
    ["Data science", "Statistics and Machine Learning Toolbox", "pandas, scikit-learn, statsmodels"],
    ["Embedded code generation", "MATLAB Coder and Simulink Coder", "Numba and Cython serve different goals"],
    ["Cluster computing", "Parallel Computing Toolbox", "mpi4py, Dask, joblib"],
  ];

  const pilotRows = [
    ["Correctness", "Agreement with a reference result or analytical case, with a stated tolerance"],
    ["Time to first working result", "How long a competent team member needs to get a correct answer"],
    ["Run time and memory", "Median of repeated runs on the same machine, with versions and tolerances recorded"],
    ["Code size and readability", "Lines of code and how easily a colleague can follow it"],
    ["Reproducibility", "Whether a fresh machine can reproduce the result from the documented setup"],
    ["Total cost", "Licences, training time and the cost of converting existing code"],
  ];

  const envCode = `python -m venv .venv
source .venv/bin/activate          # Windows: .venv\\Scripts\\activate
pip install numpy scipy matplotlib
pip freeze > requirements.txt      # record the exact versions you used

python - <<'EOF'
import numpy, scipy, matplotlib, sys
print(sys.version.split()[0], numpy.__version__, scipy.__version__, matplotlib.__version__)
EOF`;

  const matlabVer = String.raw`ver                 % MATLAB version and every installed toolbox with its version
version             % short MATLAB release string
% Save this output with your results, and cite the release in the paper.`;

  const matlabOde = String.raw`mu = 1000;
f = @(t,y) [y(2); mu*(1 - y(1)^2)*y(2) - y(1)];
opts = odeset('RelTol',1e-6,'AbsTol',1e-9,'Stats','on');  % Stats prints steps and f-evaluations
[t,y] = ode15s(f,[0 300],[2; 0],opts);   % stiff solver
plot(t,y(:,1)); xlabel('t'); ylabel('y(t)');`;

  const pythonOde = `import numpy as np
from scipy.integrate import solve_ivp

mu = 1000.0
def f(t, y):
    return [y[1], mu * (1 - y[0]**2) * y[1] - y[0]]

for method in ["RK45", "BDF", "Radau", "LSODA"]:
    sol = solve_ivp(f, (0, 300), [2.0, 0.0], method=method,
                    rtol=1e-6, atol=1e-9)
    print(method, "steps:", len(sol.t) - 1, "evaluations:", sol.nfev)`;

  const pythonJac = `def jac(t, y):
    # Analytic Jacobian of the Van der Pol right-hand side
    return [[0.0, 1.0],
            [-2.0 * mu * y[0] * y[1] - 1.0, mu * (1.0 - y[0]**2)]]

for method in ["BDF", "Radau"]:
    sol = solve_ivp(f, (0, 300), [2.0, 0.0], method=method,
                    rtol=1e-6, atol=1e-9, jac=jac)
    print(method, "steps:", len(sol.t) - 1,
          "evaluations:", sol.nfev, "jacobians:", sol.njev)`;

  const matlabJac = String.raw`J = @(t,y) [0, 1; -2*mu*y(1)*y(2) - 1, mu*(1 - y(1)^2)];
opts = odeset(opts,'Jacobian',J);
[t,y] = ode15s(f,[0 300],[2; 0],opts);`;

  const pythonRef = `# Accuracy check: compare a loose-tolerance run with a tight-tolerance reference.
ref = solve_ivp(f, (0, 300), [2.0, 0.0], method="Radau",
                rtol=1e-12, atol=1e-14, dense_output=True)
test = solve_ivp(f, (0, 300), [2.0, 0.0], method="BDF",
                 rtol=1e-6, atol=1e-9, dense_output=True)

t = np.linspace(0, 300, 2000)
err = np.max(np.abs(test.sol(t)[0] - ref.sol(t)[0]))
print("max abs error in y1:", err)`;

  const pythonTimeSolvers = `from time import perf_counter

for method in ["BDF", "Radau", "LSODA"]:
    best = float("inf")
    for _ in range(5):                     # repeat and keep the best run
        t0 = perf_counter()
        solve_ivp(f, (0, 300), [2.0, 0.0], method=method, rtol=1e-6, atol=1e-9)
        best = min(best, perf_counter() - t0)
    print(method, "best of 5: %.4f s" % best)`;

  const matlabPlot = String.raw`[X,Y] = meshgrid(linspace(-3,3,200));
Z = exp(-(X.^2 + Y.^2)) .* cos(2*X);
contourf(X,Y,Z,20,'LineStyle','none');
colorbar; xlabel('x'); ylabel('y');
exportgraphics(gcf,'contour.pdf');`;

  const pythonPlot = `import numpy as np
import matplotlib.pyplot as plt

X, Y = np.meshgrid(np.linspace(-3, 3, 200), np.linspace(-3, 3, 200))
Z = np.exp(-(X**2 + Y**2)) * np.cos(2 * X)

fig, ax = plt.subplots()
cs = ax.contourf(X, Y, Z, 20)
fig.colorbar(cs)
ax.set_xlabel("x"); ax.set_ylabel("y")
fig.savefig("contour.pdf", bbox_inches="tight")`;

  const pythonStyle = `import matplotlib as mpl

mpl.rcParams.update({
    "font.size": 8,
    "axes.linewidth": 0.6,
    "pdf.fonttype": 42,      # embed TrueType fonts, avoid Type 3
    "figure.dpi": 150,       # screen preview only
})`;

  const matlabStyle = String.raw`set(groot,'defaultAxesFontSize',8);
set(groot,'defaultAxesFontName','Times New Roman');
set(groot,'defaultLineLineWidth',1);`;

  const vectorizeMatlab = String.raw`total = 0;
for i = 1:numel(x)
    total = total + x(i)^2;       % loop version
end
total = sum(x.^2);                % vectorized version`;

  const vectorizePython = `total = 0.0
for i in range(len(x)):
    total += x[i] ** 2            # loop version: slow in plain Python

total = np.sum(x ** 2)            # vectorized version (or np.dot(x, x))`;

  const matlabTime = String.raw`A = rand(4000); b = rand(4000,1);
t = timeit(@() A\b);            % repeated runs, median-style timing
fprintf('A\\b: %.3f s\n', t);`;

  const pythonTime = `import numpy as np
from timeit import repeat

A = np.random.rand(4000, 4000)
b = np.random.rand(4000)
runs = repeat(lambda: np.linalg.solve(A, b), number=1, repeat=5)
print("solve: %.3f s (best of 5)" % min(runs))`;

  const threadsCode = `export OMP_NUM_THREADS=4
export OPENBLAS_NUM_THREADS=4      # set before starting Python, and record the value
python benchmark.py`;

  const bridgeCode = `import matlab.engine

eng = matlab.engine.start_matlab()
result = eng.sqrt(16.0)        # call a MATLAB function from Python
print(result)
eng.quit()`;

  const migrateCode = `import numpy as np
from scipy.io import loadmat

# In MATLAB:  save('matlab_reference.mat', 'y')   (use -v7 for files read by loadmat)
ref = loadmat("matlab_reference.mat")

y_py = my_ported_function(inputs)                  # your Python version
ok = np.allclose(y_py, ref["y"].squeeze(), rtol=1e-8, atol=1e-10)
print("matches MATLAB reference:", ok)

# Files saved with -v7.3 are HDF5: read them with h5py instead of loadmat.`;

  const references: React.ReactNode[] = [
    <>
      C. R. Harris et al., “Array programming with NumPy,” <i>Nature</i>, vol. 585, pp. 357–362, 2020.{" "}
      <Ext href="https://doi.org/10.1038/s41586-020-2649-2">doi:10.1038/s41586-020-2649-2</Ext>
    </>,
    <>
      P. Virtanen et al., “SciPy 1.0: Fundamental algorithms for scientific computing in Python,” <i>Nature Methods</i>, vol. 17, pp. 261–272, 2020.{" "}
      <Ext href="https://doi.org/10.1038/s41592-019-0686-2">doi:10.1038/s41592-019-0686-2</Ext>
    </>,
    <>
      J. D. Hunter, “Matplotlib: A 2D graphics environment,” <i>Computing in Science &amp; Engineering</i>, vol. 9, no. 3, pp. 90–95, 2007.{" "}
      <Ext href="https://doi.org/10.1109/MCSE.2007.55">doi:10.1109/MCSE.2007.55</Ext>
    </>,
    <>
      L. F. Shampine and M. W. Reichelt, “The MATLAB ODE suite,” <i>SIAM Journal on Scientific Computing</i>, vol. 18, no. 1, pp. 1–22, 1997.{" "}
      <Ext href="https://doi.org/10.1137/S1064827594276424">doi:10.1137/S1064827594276424</Ext>
    </>,
    <>
      E. Anderson et al., <i>LAPACK Users&apos; Guide</i>, 3rd ed. Philadelphia, PA, USA: SIAM, 1999.{" "}
      <Ext href="https://doi.org/10.1137/1.9780898719604">doi:10.1137/1.9780898719604</Ext>
    </>,
    <>F. Pedregosa et al., “Scikit-learn: Machine learning in Python,” <i>Journal of Machine Learning Research</i>, vol. 12, pp. 2825–2830, 2011.</>,
    <>A. Paszke et al., “PyTorch: An imperative style, high-performance deep learning library,” in <i>Advances in Neural Information Processing Systems 32</i>, 2019.</>,
    <>
      S. K. Lam, A. Pitrou, and S. Seibert, “Numba: A LLVM-based Python JIT compiler,” in <i>Proc. Second Workshop on the LLVM Compiler Infrastructure in HPC</i>, 2015.{" "}
      <Ext href="https://doi.org/10.1145/2833157.2833162">doi:10.1145/2833157.2833162</Ext>
    </>,
    <>
      A. Logg, K.-A. Mardal, and G. N. Wells, Eds., <i>Automated Solution of Differential Equations by the Finite Element Method: The FEniCS Book</i>. Berlin, Germany: Springer, 2012.{" "}
      <Ext href="https://doi.org/10.1007/978-3-642-23099-8">doi:10.1007/978-3-642-23099-8</Ext>
    </>,
    <>
      E. Hairer and G. Wanner, <i>Solving Ordinary Differential Equations II: Stiff and Differential-Algebraic Problems</i>, 2nd ed. Berlin, Germany: Springer, 1996.{" "}
      <Ext href="https://doi.org/10.1007/978-3-642-05221-7">doi:10.1007/978-3-642-05221-7</Ext>
    </>,
    <>
      T. Kluyver et al., “Jupyter Notebooks: A publishing format for reproducible computational workflows,” in <i>Positioning and Power in Academic Publishing</i>. IOS Press, 2016, pp. 87–90.{" "}
      <Ext href="https://doi.org/10.3233/978-1-61499-649-1-87">doi:10.3233/978-1-61499-649-1-87</Ext>
    </>,
    <>
      Python Software Foundation, “What&apos;s new in Python 3.14,” Python documentation.{" "}
      <Ext href="https://docs.python.org/3/whatsnew/3.14.html">docs.python.org/3/whatsnew/3.14.html</Ext>
    </>,
    <>
      “PEP 779: Criteria for supported status for free-threaded Python,” Python Enhancement Proposals.{" "}
      <Ext href="https://peps.python.org/pep-0779/">peps.python.org/pep-0779</Ext>
    </>,
    <>
      MathWorks, “MATLAB release notes: R2026b.”{" "}
      <Ext href="https://www.mathworks.com/help/matlab/release-notes-R2026b.html">mathworks.com/help/matlab/release-notes-R2026b.html</Ext>
    </>,
    <>
      MathWorks, “Call Python from MATLAB,” MATLAB documentation.{" "}
      <Ext href="https://www.mathworks.com/help/matlab/call-python-libraries.html">mathworks.com/help/matlab/call-python-libraries.html</Ext>
    </>,
    <>
      MathWorks, “MATLAB Engine API for Python,” MATLAB documentation.{" "}
      <Ext href="https://www.mathworks.com/help/matlab/matlab-engine-for-python.html">mathworks.com/help/matlab/matlab-engine-for-python.html</Ext>
    </>,
    <>
      GNU Octave project, “GNU Octave.”{" "}
      <Ext href="https://octave.org/">octave.org</Ext>
    </>,
    <>
      SciPy community, “scipy.integrate.solve_ivp,” SciPy reference guide.{" "}
      <Ext href="https://docs.scipy.org/doc/scipy/reference/generated/scipy.integrate.solve_ivp.html">docs.scipy.org</Ext>
    </>,
    <>
      MathWorks, “ode15s,” MATLAB documentation.{" "}
      <Ext href="https://www.mathworks.com/help/matlab/ref/ode15s.html">mathworks.com/help/matlab/ref/ode15s.html</Ext>
    </>,
    <>
      NumPy community, “NumPy for MATLAB users.”{" "}
      <Ext href="https://numpy.org/doc/stable/user/numpy-for-matlab-users.html">numpy.org/doc/stable/user/numpy-for-matlab-users.html</Ext>
    </>,
    <>
      G. Wilson et al., “Good enough practices in scientific computing,” <i>PLOS Computational Biology</i>, vol. 13, no. 6, Art. no. e1005510, 2017.{" "}
      <Ext href="https://doi.org/10.1371/journal.pcbi.1005510">doi:10.1371/journal.pcbi.1005510</Ext>
    </>,
    <>
      G. K. Sandve, A. Nekrutenko, J. Taylor, and E. Hovig, “Ten simple rules for reproducible computational research,” <i>PLOS Computational Biology</i>, vol. 9, no. 10, Art. no. e1003285, 2013.{" "}
      <Ext href="https://doi.org/10.1371/journal.pcbi.1003285">doi:10.1371/journal.pcbi.1003285</Ext>
    </>,
    <>
      Python Software Foundation, “venv: Creation of virtual environments,” Python documentation.{" "}
      <Ext href="https://docs.python.org/3/library/venv.html">docs.python.org/3/library/venv.html</Ext>
    </>,
    <>
      ONNX project, “Open Neural Network Exchange.”{" "}
      <Ext href="https://onnx.ai/">onnx.ai</Ext>
    </>,
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased selection:bg-blue-100">
      {/* Announcement bar */}
      <div className="bg-blue-950 px-4 py-2 text-center text-xs leading-relaxed text-blue-100 sm:text-sm">
        Academic Research Resources, Scientific Computing and Publishing Insights
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
                Python vs MATLAB
              </span>
            </nav>

            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-blue-900">
                Programming &amp; Scientific Computing
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Calendar size={14} aria-hidden="true" />
                <time dateTime="2026-11-21">November 2026</time>
              </span>
              <span className="flex items-center gap-1.5 text-xs text-slate-500">
                <Clock size={14} aria-hidden="true" />
                24 min read
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-3xl font-bold leading-[1.2] tracking-tight text-slate-950 sm:text-4xl lg:text-[42px]">
              Python vs MATLAB for Scientific Computing: Which Is Better in 2026?
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              A practical comparison for engineering students, researchers and
              computational scientists: numerical solvers (with reproducible
              measured data), visualization, machine learning, performance,
              cost, migration and real applications, so you can choose with
              evidence instead of habit.
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
                  <p className="mt-0.5 text-xs text-slate-500">Scientific Computing and Research Methods</p>
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
                  The <strong>Python vs MATLAB</strong> question comes up in
                  almost every engineering department, and it is usually
                  argued from habit instead of evidence. Both are mature.
                  MathWorks released MATLAB R2026b in September 2026{" "}
                  <Cite n={14} />, and the Python 3.14 series made the
                  free-threaded build an officially supported option{" "}
                  <Cite n={12} />
                  <Cite n={13} />. Meanwhile NumPy <Cite n={1} />, SciPy{" "}
                  <Cite n={2} /> and Matplotlib <Cite n={3} /> have become the
                  standard open scientific stack.
                </p>
                <p className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
                  This guide compares the two on the points that matter for
                  scientific computing: numerical solvers, visualization,
                  machine learning, performance, cost and practical
                  applications. It includes a benchmark we ran ourselves, shows
                  the same problem in both languages, and states clearly which
                  claims are measured and which are general guidance.
                </p>
              </div>

              <h3 className="mt-7 font-serif text-xl font-bold text-slate-950">
                How to read the claims in this article
              </h3>
              <p className={`${P} mt-3`}>
                Comparisons between programming tools are easy to exaggerate,
                so each claim here belongs to one of three kinds. Treat the
                first as evidence you can reproduce, the second as
                something you can check in a source, and the third as a
                starting hypothesis to test on your own problem.
              </p>
              <DataTable
                caption="The three kinds of claim used in this article"
                headers={["Label", "Meaning", "Examples in this article"]}
                rows={evidenceRows}
              />
            </section>

            {/* Short answer */}
            <SectionHeading id="short-answer" number="01">
              The Short Answer: It Depends on Four Things
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Neither language wins everywhere. Four factors decide most
              cases: whether Simulink or a vendor toolbox is essential, how
              much you rely on open-source research code, your budget and
              licensing constraints, and what your collaborators and reviewers
              can reproduce. Fig. 1 turns this into three questions.
            </p>

            <ArticleFigure
              src="/blogs/fig49.png"
              alt="Decision flowchart for choosing between Python and MATLAB based on Simulink needs, open-source ecosystem needs and team reproducibility"
              caption="Fig. 1. A three-question decision flow for choosing between Python and MATLAB."
              priority
            />

            <DataTable
              caption="Which tool fits which priority"
              headers={["Priority", "Usually a better fit", "Reason"]}
              rows={verdictRows}
            />

            <p className={P}>
              Treat the table as a starting point. A lab with ten years of
              validated MATLAB code should not rewrite it because Python is
              fashionable, and a new machine-learning project should not
              adopt MATLAB just because a course used it.
            </p>

            {/* Ecosystem */}
            <SectionHeading id="ecosystem" number="02">
              Language Design and Ecosystem
            </SectionHeading>

            <p className={`${P} mt-4`}>
              MATLAB is a matrix-oriented language sold with an integrated
              desktop, a large set of separately licensed toolboxes, and
              Simulink. Python is a general-purpose language whose scientific
              abilities come from independent libraries, with NumPy providing
              the array foundation <Cite n={1} /> and SciPy the numerical
              algorithms <Cite n={2} />. Fig. 2 contrasts the structure.
            </p>

            <ArticleFigure
              src="/blogs/fig50.png"
              alt="Stack diagram comparing the MATLAB product family with the Python scientific library ecosystem"
              caption="Fig. 2. Ecosystem structure: a vendor-integrated MATLAB product family versus a community-maintained Python stack."
            />

            <p className={P}>
              The practical consequence is a trade-off. MATLAB gives you
              one place to look for documentation and one release to cite.
              Python gives you more choice and a larger open ecosystem, but you
              are responsible for choosing libraries and managing versions.
              For people moving between the two, the language details differ
              in ways that cause real bugs, summarized below. The NumPy
              project also maintains a dedicated guide for MATLAB users{" "}
              <Cite n={20} />.
            </p>

            <DataTable
              caption="Syntax and semantics differences between MATLAB and Python with NumPy"
              headers={["Topic", "MATLAB", "Python (NumPy)"]}
              rows={syntaxRows}
            />

            <Callout title="The most common migration bugs">
              Off-by-one errors from 1-based versus 0-based indexing, using *
              for matrix multiplication in NumPy (where it is element-wise),
              using ^ for a matrix power in MATLAB but ** for an element-wise
              power in NumPy, and forgetting that NumPy slices are views, so
              modifying a slice changes the original array.
            </Callout>

            <SubHeading>Daily workflow and tooling</SubHeading>

            <p className={`${P} mt-3`}>
              Day-to-day productivity depends as much on tooling as on the
              language. MATLAB bundles an editor, debugger, notebooks and
              project tools in one desktop. Python offers a choice of editors
              and notebooks, and separates package management from the
              language, which gives flexibility at the price of more setup
              decisions.
            </p>

            <DataTable
              caption="Typical workflow tooling in MATLAB and Python"
              headers={["Need", "MATLAB", "Python"]}
              rows={workflowRows}
            />

            <SubHeading>Record your environment from day one</SubHeading>

            <p className={`${P} mt-3`}>
              Whichever tool you choose, write down exactly what you ran.
              In Python, create an isolated environment <Cite n={23} /> and
              freeze the versions of the libraries. In MATLAB, save the output
              of <InlineCode>ver</InlineCode>, which lists the release and
              every installed toolbox with its version. These habits are among
              the most effective for reproducible computational work{" "}
              <Cite n={21} /> <Cite n={22} />, and they are what reviewers and
              future collaborators will ask for first.
            </p>

            <CodeBlock label="Python: create an environment and record versions" code={envCode} />
            <CodeBlock label="MATLAB: record the release and toolboxes" code={matlabVer} />

            {/* Solvers */}
            <SectionHeading id="solvers" number="03">
              Numerical Solvers: ODEs, PDEs, Linear Systems and Optimization
            </SectionHeading>

            <p className={`${P} mt-4`}>
              For core numerical tasks the two ecosystems are closely
              matched. Fig. 3 lists common equivalents. Dense linear algebra
              in both is built on optimized BLAS and LAPACK routines{" "}
              <Cite n={5} />, so a linear solve in either is largely a call to
              the same kind of compiled library, and the differences you
              measure come mostly from which library build and how many
              threads are used.
            </p>

            <ArticleFigure
              src="/blogs/fig51.png"
              alt="Table mapping common numerical tasks to MATLAB functions and Python SciPy equivalents"
              caption="Fig. 3. Common numerical solver equivalents in MATLAB and Python. Names are starting points, not exact replacements."
            />

            <DataTable
              caption="Selected numerical solver equivalents"
              headers={["Task", "MATLAB", "Python"]}
              rows={solverRows}
            />

            <p className={P}>
              For large sparse systems the choice of storage format and solver
              matters more than the language. Use the sparse types of either
              tool instead of dense matrices, prefer a direct solver for
              moderate sizes and a preconditioned iterative solver for very
              large ones, and check the residual of the computed solution
              instead of assuming that it converged.
            </p>

            <SubHeading>ODE Solvers and the Stiffness Test</SubHeading>

            <p className={`${P} mt-3`}>
              Ordinary differential equation solvers are a good test because
              the right method matters more than the language. The MATLAB ODE
              suite <Cite n={4} /> pairs the explicit ode45 for non-stiff
              problems with ode15s and related solvers for stiff problems{" "}
              <Cite n={19} />. SciPy offers the same split through
              solve_ivp, with RK45 for non-stiff problems and BDF, Radau or
              LSODA for stiff ones <Cite n={18} />. Stiff problems force
              explicit methods to take tiny steps for stability instead of
              accuracy <Cite n={10} />.
            </p>

            <p className={P}>
              We used the Van der Pol oscillator with a large damping
              parameter, a standard stiff test:
            </p>

            <Equation label="1">
              dy<sub>1</sub>/dt = y<sub>2</sub>, dy<sub>2</sub>/dt = μ(1 − y<sub>1</sub>
              <sup>2</sup>) y<sub>2</sub> − y<sub>1</sub>, μ = 1000, y(0) = (2, 0)
            </Equation>

            <CodeBlock label="MATLAB" code={matlabOde} />
            <CodeBlock label="Python (SciPy): the benchmark we ran" code={pythonOde} />

            <p className={P}>
              The Python script above produced the following counts on t = 0
              to 300 with rtol = 1e-6 and atol = 1e-9, using NumPy 2.5.4 and
              SciPy 1.18.1. We report step and function-evaluation counts
              because they do not depend on the machine; wall-clock time does.
              The counts are deterministic for a given library version and
              settings, and re-running the script with these versions
              reproduced every number in the table.
            </p>

            <DataTable
              caption="Measured cost of SciPy ODE methods on the stiff Van der Pol problem"
              headers={["SciPy method", "Steps", "RHS evaluations", "Outcome"]}
              rows={stiffRows}
            />

            <ArticleFigure
              src="/blogs/fig52.png"
              alt="Bar chart on a logarithmic scale comparing function evaluations of RK45, BDF, Radau and LSODA on a stiff Van der Pol problem, with the BDF solution curve"
              caption="Fig. 4. Measured cost of four SciPy ODE methods on the stiff Van der Pol problem (μ = 1000). The explicit RK45 method needs several orders of magnitude more evaluations."
            />

            <p className={P}>
              Fig. 4 shows the key lesson. The explicit RK45 method needed
              about 1.6 million evaluations, while the stiff solvers needed
              a few hundred. We did not run MATLAB for this article, so we make
              no numerical claim about MATLAB; the expectation, consistent
              with how the two suites are designed, is that ode45 would behave
              like RK45 and ode15s like the stiff solvers. If you compare the
              two yourself, set identical tolerances explicitly, because
              default settings and error-control details differ between
              implementations. In MATLAB, <InlineCode>odeset(&apos;Stats&apos;,
              &apos;on&apos;)</InlineCode> prints the number of steps and
              function evaluations, as in the MATLAB script above, so that you
              can put the two sets of counts side by side.
            </p>

            <SubHeading>Controlling the Solver: Jacobians, Events and Tolerances</SubHeading>

            <p className={`${P} mt-3`}>
              The table below maps the controls that matter most in practice.
              Both suites default to a relative tolerance of 1e-3 and an
              absolute tolerance of 1e-6, which is often too loose for
              research results, so always set tolerances explicitly and
              state them in the paper <Cite n={18} /> <Cite n={19} />.
            </p>

            <DataTable
              caption="Common ODE solver controls in MATLAB and SciPy"
              headers={["Control", "MATLAB", "Python (SciPy)"]}
              rows={odeControlRows}
            />

            <p className={P}>
              Implicit solvers need the Jacobian of the right-hand side. By
              default both estimate it by finite differences, and supplying an
              analytic Jacobian is a common way to improve robustness and
              reduce the work per step for larger systems. For this problem
              the Jacobian is small:
            </p>

            <CodeBlock label="Python: supply the analytic Jacobian" code={pythonJac} />
            <CodeBlock label="MATLAB: supply the analytic Jacobian" code={matlabJac} />

            <p className={P}>
              We ran the Python version and compared it with the default.
              The result is instructive: for this two-variable problem the
              step counts and the right-hand-side evaluation counts were
              identical, because SciPy&apos;s evaluation counter does not
              include the extra calls used to build a finite-difference
              Jacobian. A count table therefore cannot show the benefit of an
              analytic Jacobian, and you should time it on your own problem.
            </p>

            <DataTable
              caption="Measured effect of supplying an analytic Jacobian on the stiff Van der Pol problem"
              headers={["Method", "Jacobian", "Steps", "RHS evaluations", "Jacobian evaluations"]}
              rows={jacRows}
            />

            <p className={P}>
              Counts are only half of a performance story. The script below
              times each solver with repeated runs and keeps the best, which
              reduces the effect of other processes on the machine. We do not
              quote wall-clock times from it, because they depend on your
              hardware:
            </p>

            <CodeBlock label="Python: time the solvers on your machine" code={pythonTimeSolvers} />

            <SubHeading>Check accuracy, not only cost</SubHeading>

            <p className={`${P} mt-3`}>
              A cheaper solution is only better if it is accurate enough. A
              simple check is to compare a loose-tolerance run with a
              reference computed at a much tighter tolerance. Using the
              script below, the maximum absolute difference in y<sub>1</sub>{" "}
              between BDF at rtol 1e-6 and a Radau reference at rtol 1e-12,
              over 2000 evenly spaced times, was about 2.9e-6 in our run.
              Treat pointwise comparisons on stiff oscillators with care:
              because the solution has sharp transitions, a tiny shift in
              timing can dominate the error, so also compare features such as
              the transition times or the period.
            </p>

            <CodeBlock label="Python: compare against a tight-tolerance reference" code={pythonRef} />

            <Callout title="Common ODE mistakes">
              Using an explicit solver on a stiff problem, leaving the default
              tolerances unchanged, never checking whether the solver reports
              success, comparing two solvers with different tolerances, and
              reporting results without the solver name, tolerances and
              library versions.
            </Callout>

            <SubHeading>PDEs and Optimization</SubHeading>

            <p className={`${P} mt-3`}>
              For partial differential equations, MATLAB provides pdepe and the
              PDE Toolbox as a packaged environment. In Python the options are
              separate projects: FEniCS for finite elements <Cite n={9} />,
              scikit-fem, and py-pde for grid-based problems. The Python route
              is more flexible and scriptable but expects you to assemble the
              pipeline; the MATLAB route is more integrated but tied to its
              licensed toolboxes. For optimization, fmincon in the
              Optimization Toolbox and scipy.optimize.minimize cover similar
              ground, with CVXPY available for convex problems. In both,
              supply gradients where you can, set explicit tolerances, and try
              several starting points for non-convex problems. For
              physics-informed approaches to differential equations, see our
              article on{" "}
              <Int href="/blog/ai-in-scientific-research">
                AI in scientific research
              </Int>
              .
            </p>

            {/* Visualization */}
            <SectionHeading id="visualization" number="04">
              Visualization and Publication-Quality Figures
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Both can produce journal-quality figures; the difference is
              workflow. MATLAB figures are edited in an integrated environment
              and exported with exportgraphics. Matplotlib <Cite n={3} />{" "}
              offers a scripting-first approach with fine control over every
              element and exports vector PDF or SVG directly. Python adds
              Plotly for interactive web figures and PyVista or ParaView
              scripting for large 3D meshes.
            </p>

            <ArticleFigure
              src="/blogs/fig53.png"
              alt="Table mapping common plotting tasks to MATLAB and Python Matplotlib equivalents"
              caption="Fig. 5. Common visualization tasks and their MATLAB and Python equivalents."
            />

            <DataTable
              caption="Visualization differences between MATLAB and Python"
              headers={["Aspect", "MATLAB", "Python"]}
              rows={vizRows}
            />

            <p className={P}>
              The same filled contour plot in each language looks like this.
              Notice that the structure is almost line for line the same:
            </p>

            <CodeBlock label="MATLAB" code={matlabPlot} />
            <CodeBlock label="Python (Matplotlib)" code={pythonPlot} />

            <p className={P}>
              For a paper, set a global style once instead of adjusting each
              figure, so that fonts and line widths match the journal and one
              another. Embedding TrueType fonts also avoids a common
              automated-check failure:
            </p>

            <CodeBlock label="Python: one global figure style" code={pythonStyle} />
            <CodeBlock label="MATLAB: default figure properties" code={matlabStyle} />

            <p className={P}>
              Whichever tool you choose, the journal&apos;s figure rules
              matter more than the software: consistent fonts, adequate line
              widths and readable colormaps. Our guide to{" "}
              <Int href="/blog/contour-visualizations">
                contour plots and 3D visualizations
              </Int>{" "}
              walks through publication-quality examples, and the{" "}
              <Int href="/blog/formatting-guide">manuscript formatting guide</Int>{" "}
              covers journal figure requirements.
            </p>

            {/* ML */}
            <SectionHeading id="ml" number="05">
              Machine Learning and AI
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Python is where most open machine-learning libraries are
              developed: scikit-learn for classical methods <Cite n={6} />,
              PyTorch <Cite n={7} />, TensorFlow and JAX for deep learning.
              MATLAB provides the Statistics and Machine Learning Toolbox and
              the Deep Learning Toolbox with interactive apps that suit
              prototyping and teaching. The two are not isolated:
              MathWorks documents calling Python from MATLAB <Cite n={15} /> and
              its release notes describe expanding PyTorch interoperability{" "}
              <Cite n={14} />.
            </p>

            <ArticleFigure
              src="/blogs/fig54.png"
              alt="Diagram of MATLAB and Python machine learning ecosystems with an interoperability layer between them"
              caption="Fig. 6. Machine-learning ecosystems in MATLAB and Python, and the interoperability options between them."
            />

            <DataTable
              caption="Common machine-learning tasks in MATLAB and Python"
              headers={["Task", "MATLAB", "Python"]}
              rows={mlRows}
            />

            <p className={P}>
              Models can move between the two through the ONNX exchange format{" "}
              <Cite n={24} />, although not every layer or operator survives
              conversion, so validate the converted model by comparing its
              predictions with the original on the same inputs.
            </p>

            <p className={P}>
              For research that needs custom architectures or new loss
              functions, such as physics-informed networks, Python frameworks
              with automatic differentiation give the most flexibility. For
              engineers who want interactive model building inside an existing
              MATLAB and Simulink workflow, the MATLAB toolboxes can be the
              shorter path. Either way, the evaluation rules do not change:
              split data by experiment, keep a test set untouched, tune
              baselines as carefully as the proposed model, and report library
              versions and random seeds. These points are expanded in our
              article on{" "}
              <Int href="/blog/ai-in-scientific-research">
                AI in scientific research
              </Int>
              .
            </p>

            {/* Performance */}
            <SectionHeading id="performance" number="06">
              Performance: What Is Actually Measurable
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Performance claims in this debate are usually too broad.
              A more useful view separates three situations.
            </p>

            <CheckList>
              <Check>
                <strong>Dense linear algebra and FFTs.</strong> Both call
                optimized compiled libraries, so results depend on the BLAS and
                LAPACK build and thread count, not on the language that
                issues the call <Cite n={5} />. MATLAB ships its own library
                build, while NumPy and SciPy use OpenBLAS or other builds
                depending on how they were installed.
              </Check>
              <Check>
                <strong>Loops and scalar code.</strong> Plain Python loops are
                slow. The usual remedies are vectorization with NumPy{" "}
                <Cite n={1} />, compiling hot functions with Numba{" "}
                <Cite n={8} />, or using a framework such as JAX. MATLAB&apos;s
                execution engine accelerates many loops directly, though
                vectorized code is still the safer habit.
              </Check>
              <Check>
                <strong>Parallelism.</strong> MATLAB offers the Parallel
                Computing Toolbox. Python offers multiprocessing, Dask and
                mpi4py, and the 3.14 series supports a free-threaded build,
                although it is optional and not installed by default{" "}
                <Cite n={12} />
                <Cite n={13} />.
              </Check>
            </CheckList>

            <SubHeading>Profile first, then optimize</SubHeading>

            <p className={`${P} mt-3`}>
              Most scientific code spends its time in a few places, and
              guessing which ones is unreliable. Measure first with a profiler,
              then fix the hot spots, and check that the answers did not
              change.
            </p>

            <DataTable
              caption="Timing, profiling and acceleration tools"
              headers={["Need", "MATLAB", "Python"]}
              rows={perfToolRows}
            />

            <CodeBlock label="MATLAB: loop versus vectorized" code={vectorizeMatlab} />
            <CodeBlock label="Python: loop versus vectorized" code={vectorizePython} />

            <p className={P}>
              The honest advice is to benchmark your own workload. Use the
              same hardware, the same tolerances, a warm-up run before timing,
              and repeated measurements:
            </p>

            <CodeBlock label="MATLAB: timing a linear solve" code={matlabTime} />
            <CodeBlock label="Python: timing a linear solve" code={pythonTime} />

            <p className={P}>
              Thread counts can change dense linear-algebra timings
              noticeably, so record them. In Python the common BLAS back ends
              read environment variables that you set before starting the
              interpreter, and MATLAB manages threads automatically in most
              cases, so check its documentation for the version you use:
            </p>

            <CodeBlock label="Shell: fix the thread count for a benchmark" code={threadsCode} />

            <Callout title="Reporting benchmarks fairly">
              State the software versions, the hardware, thread counts and the
              numerical tolerances. A speed comparison without these details
              cannot be reproduced and should not be trusted, including ours.
            </Callout>

            {/* Cost */}
            <SectionHeading id="cost" number="07">
              Cost, Licensing and Reproducibility
            </SectionHeading>

            <p className={`${P} mt-4`}>
              We deliberately avoid quoting prices, because they vary by
              licence type, institution and time. Check the current terms with
              MathWorks and your university. What does not change is the
              structure of the costs, shown in Fig. 7.
            </p>

            <ArticleFigure
              src="/blogs/fig55.png"
              alt="Comparison of MATLAB and Python licensing, add-on packages, release model, support and reviewer access"
              caption="Fig. 7. The structure of cost, licensing and reproducibility for MATLAB and Python."
            />

            <DataTable
              caption="Cost and licensing structure compared"
              headers={["Aspect", "MATLAB", "Python"]}
              rows={costRows}
            />

            <p className={P}>
              Free does not mean costless. Python&apos;s cost moves into
              setup time and version management, and an analysis written for
              one library version can break on another. MATLAB&apos;s cost is
              the licence and the toolboxes you need, and collaborators or
              reviewers without a licence cannot run your code, unless you
              distribute a compiled application that runs on the MATLAB
              Runtime. For a reproducible paper, record exact versions in
              either case, and consider sharing code as a notebook{" "}
              <Cite n={11} /> or a documented script. GNU Octave is a free
              option that runs much MATLAB-style code, but compatibility is not
              complete, so test before relying on it <Cite n={17} />.
            </p>

            {/* Applications */}
            <SectionHeading id="applications" number="08">
              Practical Applications by Domain
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Fig. 8 maps well-known tools in each domain. Both ecosystems can
              cover most fields; what differs is which tools are the
              established default.
            </p>

            <ArticleFigure
              src="/blogs/fig56.png"
              alt="Table of application domains with typical MATLAB toolboxes and Python libraries for each"
              caption="Fig. 8. Typical tools by application domain in MATLAB and Python."
            />

            <DataTable
              caption="Typical tools by application domain"
              headers={["Domain", "MATLAB", "Python"]}
              rows={domainRows}
            />

            <CheckList>
              <Check>
                <strong>Control and embedded systems.</strong> The combination
                of Simulink, the Control System Toolbox and code generation is
                a defining MATLAB strength. Python&apos;s python-control covers
                analysis and design but is not a Simulink replacement.
              </Check>
              <Check>
                <strong>CFD and heat transfer.</strong> Production CFD is
                usually done in dedicated solvers; MATLAB or Python then handle
                pre-processing, post-processing, surrogate modelling and
                custom research solvers. Python&apos;s FEniCS{" "}
                <Cite n={9} /> and ParaView scripting are strong for
                open-source finite-element and visualization pipelines.
              </Check>
              <Check>
                <strong>Signal and image processing.</strong> Both have mature
                toolsets; the choice often follows existing lab code.
              </Check>
              <Check>
                <strong>Data science and statistics.</strong> Python&apos;s
                pandas and scikit-learn ecosystem is the common choice,
                although MATLAB tables and its statistics toolbox work well for
                engineers already inside MATLAB.
              </Check>
              <Check>
                <strong>Cluster and cloud computing.</strong> Python integrates
                naturally with open-source schedulers and containers, while
                MATLAB offers vendor-supported parallel and server products.
              </Check>
            </CheckList>

            <SubHeading>Migrating from MATLAB to Python without breaking results</SubHeading>

            <p className={`${P} mt-3`}>
              If you decide to move validated MATLAB code to Python, treat the
              migration as a test-driven project. Port one function at a time,
              save reference outputs from the MATLAB version, and compare the
              Python results with a stated tolerance before you continue. The
              NumPy guide for MATLAB users <Cite n={20} /> lists the language
              differences, and the table in Section 02 covers the ones that
              most often cause silent errors.
            </p>

            <CodeBlock label="Python: compare a ported function with a MATLAB reference" code={migrateCode} />

            <CheckList>
              <Check>Start with the functions that have clear inputs and outputs and no plotting, so that comparison is easy.</Check>
              <Check>Keep the MATLAB reference results in the repository as test data, and run the comparison automatically.</Check>
              <Check>Do not optimize until the results match, and re-run the comparison after every optimization.</Check>
              <Check>Document any intentional numerical differences, such as a different solver or tolerance, and justify them.</Check>
            </CheckList>

            {/* Hybrid */}
            <SectionHeading id="hybrid" number="09">
              Using Python and MATLAB Together
            </SectionHeading>

            <p className={`${P} mt-4`}>
              Many research groups use both. MATLAB can call Python libraries{" "}
              <Cite n={15} />, and the MATLAB Engine API lets Python start and
              control MATLAB <Cite n={16} />. Data can also move through shared
              formats such as HDF5, CSV and MAT files.
            </p>

            <ArticleFigure
              src="/blogs/fig57.png"
              alt="Hybrid research workflow connecting a MATLAB or Simulink model to Python analysis, figures and a paper through APIs and shared data formats"
              caption="Fig. 9. A hybrid MATLAB and Python research workflow connected through documented interfaces."
            />

            <CodeBlock label="Python: calling MATLAB through the Engine API" code={bridgeCode} />

            <p className={P}>
              A hybrid workflow has real overhead: two installations, two
              dependency sets and more to document. Use it when each tool
              clearly does something the other cannot do well, such as a
              Simulink plant model feeding a Python machine-learning
              pipeline, and record the version of every component. Prefer
              open, text-based or HDF5 data formats between the two, so that
              the intermediate results remain readable by both.
            </p>

            {/* Checklist */}
            <SectionHeading id="checklist" number="10">
              A Practical Decision Checklist
            </SectionHeading>

            <CheckList>
              <Check>
                <strong>List what you cannot do without.</strong> If Simulink or
                a specific toolbox is on the list, that settles the question.
              </Check>
              <Check>
                <strong>Check what your collaborators and reviewers can run.</strong>{" "}
                Reproducibility needs shared tools or shared environments.
              </Check>
              <Check>
                <strong>Estimate the migration cost honestly.</strong> Validated
                legacy code has value; rewriting needs a clear benefit.
              </Check>
              <Check>
                <strong>Prototype one real problem in both.</strong> A small
                version of your own task teaches more than any comparison
                article, including this one.
              </Check>
              <Check>
                <strong>Pin and record versions.</strong> Whatever you choose,
                state software versions, solver settings and tolerances in the
                paper or supplementary material, as our{" "}
                <Int href="/blog/systematic-literature-review-guide">
                  literature review guide
                </Int>{" "}
                recommends for search reproducibility.
              </Check>
            </CheckList>

            <SubHeading>Run a one-week pilot</SubHeading>

            <p className={`${P} mt-3`}>
              If the choice is still unclear, pick one real task from your
              project, such as a solver, a data-processing step or a figure,
              and implement it in both tools. Score the two attempts with the
              same criteria, and decide on the evidence:
            </p>

            <DataTable
              caption="Criteria for scoring a pilot implementation in Python and MATLAB"
              headers={["Criterion", "How to measure it"]}
              rows={pilotRows}
            />

            {/* FAQ */}
            <SectionHeading id="faq">
              Frequently Asked Questions About Python vs MATLAB
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
                Conclusion: Choose by Evidence, Not by Habit
              </h2>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                The better tool is the one that fits your problem, your team and
                your constraints. MATLAB is strongest where Simulink,
                integrated toolboxes and vendor support matter. Python is
                strongest where open libraries, machine-learning research,
                free licensing and broad reproducibility matter. Our measured
                stiff-ODE test showed that choosing the right solver class
                mattered far more than the language, and the same applies to
                most decisions in scientific computing. Prototype a real task
                in both, record versions and tolerances, and let the results
                guide you.
              </p>
              <p className="mt-3 text-[15px] leading-[1.85] text-slate-600">
                Whatever you pick, the habits that make results trustworthy
                are the same: explicit tolerances, a check against a reference
                or a tighter run, recorded versions, a script that regenerates
                every figure, and an honest statement in the paper of what was
                measured and what was assumed.
              </p>

              <div className="mt-6 rounded-xl border border-blue-100 bg-blue-50/60 p-6">
                <p className="font-serif text-lg font-bold text-blue-950">
                  Continue building your research workflow
                </p>
                <p className="mt-2 text-sm leading-[1.8] text-slate-700">
                  Explore our guides on scientific visualization, AI in
                  research, literature reviews and manuscript preparation, or
                  contact us with a question about your workflow.
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

              <p className="mt-5 text-xs italic leading-relaxed text-slate-500">
                Software versions, release dates and library behaviour change
                over time. The measured counts in this article were obtained
                with NumPy 2.5.4 and SciPy 1.18.1, and no MATLAB measurements
                are reported. Confirm current details in each project&apos;s own
                documentation before relying on them.
              </p>
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