import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const googleScholarUrl =
  "https://scholar.google.com/citations?hl=en&user=-VGaDnoAAAAJ";

const researchGateUrl =
  "https://www.researchgate.net/profile/Hamza-Iqbal-19?ev=hdr_xprf";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:px-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
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

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Academic writing, LaTeX, and computational guides for PhD
            scholars and researchers preparing Q1 and Q2 journal
            submissions.
          </p>
        </div>

        {/* Explore */}

        <div>
          <h3 className="text-sm font-bold text-white">Explore</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="transition hover:text-white">
                Knowledge Library
              </Link>
            </li>
            <li>
              <Link
                href="/blog/q1-research-paper-structure"
                className="transition hover:text-white"
              >
                Q1 Paper Structure
              </Link>
            </li>
            <li>
              <Link
                href="/blog/formatting-guide"
                className="transition hover:text-white"
              >
                Formatting Guide
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal & Support */}

        <div>
          <h3 className="text-sm font-bold text-white">Legal &amp; support</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/privacy-policy"
                className="transition hover:text-white"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Academic Profiles */}

        <div>
          <h3 className="text-sm font-bold text-white">Academic profiles</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={googleScholarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                Google Scholar
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={researchGateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                ResearchGate
                <ExternalLink size={13} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}

      <div className="border-t border-slate-800 px-6 py-6 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© 2026 ScholarGrid. All rights reserved.</p>
          <p>Academic writing, LaTeX, and computational guides for researchers.</p>
        </div>
      </div>
    </footer>
  );
}