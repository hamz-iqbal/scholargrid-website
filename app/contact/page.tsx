
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Mail,
  FileCheck,
  Lightbulb,
  HelpCircle,
  BookOpen,
  MessageCircle,
} from "lucide-react";

const SITE_URL = "https://scholargrid.org";
const CONTACT_EMAIL = "scholargrid030@gmail.com";

const gmailComposeUrl = (subject = "") => {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
  });

  if (subject) {
    params.set("su", subject);
  }

  return `https://mail.google.com/mail/?${params.toString()}`;
};

export const metadata: Metadata = {
  title: "Contact ScholarGrid | Feedback, Corrections and Inquiries",
  description:
    "Contact ScholarGrid to report content corrections, suggest research topics, or share feedback about academic writing, journal formatting, computational research, and scientific methods.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact ScholarGrid",
    description:
      "Get in touch with ScholarGrid for content feedback, corrections, and academic research topic suggestions.",
    url: `${SITE_URL}/contact`,
    siteName: "ScholarGrid",
    type: "website",
  },
};

const contactReasons = [
  {
    icon: FileCheck,
    title: "Report a Correction",
    description:
      "Found an inaccurate statement, broken link, outdated journal requirement, or technical issue in one of our articles? Let us know which section needs attention.",
    subject: "Content Correction - ScholarGrid",
  },
  {
    icon: Lightbulb,
    title: "Suggest a Research Topic",
    description:
      "Have an idea for a guide on academic publishing, applied mathematics, artificial intelligence, computational research, or scientific visualization? We welcome suggestions.",
    subject: "Research Topic Suggestion - ScholarGrid",
  },
  {
    icon: HelpCircle,
    title: "General Inquiries",
    description:
      "Contact us regarding the website, published educational resources, research guides, or other general questions about ScholarGrid.",
    subject: "General Inquiry - ScholarGrid",
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact ScholarGrid",
  description:
    "Official contact page for ScholarGrid, an independent educational platform covering academic writing, research methods, and computational science.",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "ScholarGrid",
    url: SITE_URL,
    email: CONTACT_EMAIL,
  },
};

export default function ContactUs() {
  return (
    <main className="min-h-screen bg-white px-4 py-12 font-sans text-slate-900 antialiased sm:px-8 lg:px-12">

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      <article className="mx-auto max-w-5xl">

        {/* Back Navigation */}
        <Link
          href="/"
          className="mb-9 inline-flex items-center gap-2 text-sm font-semibold text-blue-800 transition-colors hover:text-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to ScholarGrid
        </Link>

        {/* Page Introduction */}
        <header>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-blue-900">
            <MessageCircle size={15} aria-hidden="true" />
            Contact and Feedback
          </div>

          <h1 className="font-serif text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Contact ScholarGrid
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            ScholarGrid publishes educational resources on academic
            writing, research methods, artificial intelligence,
            computational science, and scientific publishing.
            We welcome feedback, corrections, and suggestions
            that help improve the accuracy and usefulness of
            our published content.
          </p>
        </header>

        {/* Primary Email Contact */}
        <section
          aria-labelledby="email-heading"
          className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-10"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-900 text-white">
                <Mail size={23} aria-hidden="true" />
              </div>

              <div>
                <h2
                  id="email-heading"
                  className="font-serif text-xl font-bold text-slate-950"
                >
                  Email Us
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  For detailed inquiries, content feedback,
                  corrections, and suggestions, please contact
                  our editorial team by email.
                </p>

                <a
                  href={gmailComposeUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block break-all text-sm font-semibold text-blue-900 underline decoration-blue-300 underline-offset-2 hover:text-blue-700"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            <a
              href={gmailComposeUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send an email to ScholarGrid using Gmail"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-900 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              <Mail size={16} aria-hidden="true" />
              Send an Email
              <ArrowRight size={16} aria-hidden="true" />
            </a>

          </div>
        </section>

        {/* Contact Categories */}
        <section
          aria-labelledby="contact-reasons-heading"
          className="mt-14"
        >
          <div className="max-w-2xl">
            <h2
              id="contact-reasons-heading"
              className="font-serif text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl"
            >
              How Can We Help?
            </h2>

            <p className="mt-3 text-base leading-7 text-slate-600">
              You can contact the ScholarGrid team regarding
              any of the following matters.
            </p>
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {contactReasons.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-md"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-900">
                    <Icon size={23} aria-hidden="true" />
                  </div>

                  <h3 className="font-serif text-lg font-bold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <a
                    href={gmailComposeUrl(item.subject)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Write to ScholarGrid: ${item.title}`}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-bold text-blue-900 transition-colors hover:text-blue-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    Write to us
                    <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              );
            })}
          </div>
        </section>

        {/* About ScholarGrid */}
        <section
          aria-labelledby="about-heading"
          className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-900 shadow-sm">
              <BookOpen size={23} aria-hidden="true" />
            </div>

            <div>
              <h2
                id="about-heading"
                className="font-serif text-xl font-bold text-slate-950"
              >
                About Our Platform
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                ScholarGrid is an independent educational platform
                dedicated to making academic and technical
                knowledge more accessible to students, researchers,
                and academics. Our content covers research
                methodology, manuscript preparation, journal
                formatting, artificial intelligence, numerical
                simulations, and scientific computing.
              </p>

              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                We aim to provide clear, technically informed,
                and practical educational resources. Readers
                are encouraged to consult original publications,
                journal guidelines, and authoritative sources
                when applying the information presented in
                our articles.
              </p>
            </div>
          </div>
        </section>

        {/* Knowledge Library */}
        <section className="mt-12 border-t border-slate-200 pt-9">
          <h2 className="font-serif text-xl font-bold text-slate-950">
            Explore Our Knowledge Library
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Before contacting us, you may find the information
            you need in our published research guides and
            educational articles.
          </p>

          <Link
            href="/blog"
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-blue-900 transition-colors hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <BookOpen size={17} aria-hidden="true" />
            Browse Knowledge Library
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </section>

        {/* Policies and Footer */}
        <footer className="mt-12 border-t border-slate-200 pt-7">
          <p className="text-sm leading-7 text-slate-600">
            For information about how we handle website-related
            data and the conditions governing the use of our
            resources, please review our{" "}
            <Link
              href="/privacy-policy"
              className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-2 hover:text-blue-950"
            >
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link
              href="/terms"
              className="font-semibold text-blue-800 underline decoration-blue-300 underline-offset-2 hover:text-blue-950"
            >
              Terms and Conditions
            </Link>
            .
          </p>

          <p className="mt-5 text-xs text-slate-400">
            © 2026 ScholarGrid. All rights reserved.
          </p>
        </footer>

      </article>
    </main>
  );
}
