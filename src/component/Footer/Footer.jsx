"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

// --- Font Configuration ---
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function Footer() {
  // --- Dynamic Date Logic ---
  const currentYear = new Date().getFullYear();

  // Helper to convert English digits to Bangla
  const toBanglaDigits = (str) => {
    return str.toString().replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  };

  const banglaYear = toBanglaDigits(currentYear);

  const FOOTER_LINKS = [
    {
      title: "আইনি তথ্য", // Legal
      links: [
        { label: "গোপনীয়তা নীতি", href: "/privacy-policy" },
        { label: "ব্যবহারের শর্তাবলী", href: "/terms-of-service" },
        { label: "কুকি পলিসি", href: "/cookie-policy" },
        { label: "মেডিকেল দাবিত্যাগ", href: "/medical-disclaimer" },
      ],
    },
  ];

  return (
    <footer
      // Responsive padding: py-12 for mobile, py-20 for large screens
      className={`bg-slate-900 text-slate-400 px-6 lg:px-20 py-12 lg:py-20 border-t border-slate-800 ${notoSerifBengali.className}`}
      role="contentinfo"
      aria-label="সাইট ফুটার"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-8 lg:gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6 items-center text-center justify-center max-w-2xl px-4">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA] rounded-lg w-fit group"
          >
            <div
              className="size-8 bg-[#BCE7FA] flex items-center justify-center rounded-lg text-slate-900 group-hover:bg-white transition-colors"
              aria-hidden="true"
            >
              <Image
                src="/logo.png"
                alt="সাদাব সানি আর্থাইটিস কেয়ার লোগো"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight group-hover:text-[#BCE7FA] transition-colors">
              আর্থাইটিস কেয়ার বিডি
            </h2>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            বিশেষজ্ঞের অন্তর্দৃষ্টি এবং পেশাদার ক্লিনিকাল ডিরেক্টরির মাধ্যমে
            চিকিৎসা জ্ঞানের ভবিষ্যৎ নেতৃত্ব দিচ্ছে।
          </p>
        </div>

        {/* Dynamic Link Sections (Responsive) */}
        {FOOTER_LINKS.map((section, index) => (
          <nav key={index} className="w-full flex justify-center">
            {/* Added flex-wrap and gap adjustments for mobile */}
            <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-3 text-sm px-2">
              {section.links.map((link, i) => (
                <li key={link.label} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="hover:text-[#38B000] transition-colors focus-visible:outline-none focus-visible:underline decoration-[#38B000] underline-offset-4 whitespace-nowrap"
                  >
                    {link.label}
                  </Link>

                  {/* Separator Logic: Hide on mobile if wrapped, strictly visual separator */}
                  {i < section.links.length - 1 && (
                    <span className="text-slate-700 select-none hidden sm:inline">
                      |
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Copyright Bar (Responsive) */}
      <div className="max-w-[1200px] mx-auto mt-10 pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-center items-center gap-2">
        <p>&copy; {banglaYear} আর্থাইটিস কেয়ার</p>
        <span className="hidden sm:inline text-slate-700">|</span>
        <p>
          কারিগরি সহযোগিতায়{" "}
          <a href="#" className="font-medium text-slate-400 hover:text-white transition-colors cursor-pointer">
           ranocoder Ltd.
          </a>
        </p>
      </div>
    </footer>
  );
}
