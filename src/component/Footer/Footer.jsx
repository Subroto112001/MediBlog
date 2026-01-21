"use client";

import React from "react";
import { Activity, Share2, Network } from "lucide-react";
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
      className={`bg-slate-900 text-slate-400 px-6 lg:px-20 py-20 border-t border-slate-800 ${notoSerifBengali.className}`}
      role="contentinfo"
      aria-label="সাইট ফুটার"
    >
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6 items-center text-center justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA] rounded-lg w-fit"
          >
            <div
              className="size-8 bg-[#BCE7FA] flex items-center justify-center rounded-lg text-slate-900"
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
            <h2 className="text-white text-xl font-bold tracking-tight">
              সাদাব সানি আর্থাইটিস কেয়ার
            </h2>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            বিশেষজ্ঞের অন্তর্দৃষ্টি এবং পেশাদার ক্লিনিকাল ডিরেক্টরির মাধ্যমে
            চিকিৎসা জ্ঞানের ভবিষ্যৎ নেতৃত্ব দিচ্ছে।
          </p>
          
        </div>

        {/* Dynamic Link Sections */}
        {FOOTER_LINKS.map((section) => (
         
            <ul className="flex gap-3 text-sm">
              {section.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#38B000] transition-colors focus-visible:outline-none focus-visible:underline decoration-[#38B000] underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
         
        ))}
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1200px] mx-auto mt-10 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>
          &copy; {banglaYear} সাদাব সানি আর্থাইটিস কেয়ার | কারিগরি সহযোগিতায়
          ranodocer Ltd.
        </p>
      </div>
    </footer>
  );
}
