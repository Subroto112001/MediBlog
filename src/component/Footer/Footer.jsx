"use client";

import React from "react";
import { Activity, Share2, Network } from "lucide-react";
import { Noto_Serif_Bengali } from "next/font/google";
import Link from "next/link";

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
      title: "বিভাগসমূহ", // Categories
      links: [
        { label: "কার্ডিওলজি", href: "#" },
        { label: "মানসিক স্বাস্থ্য", href: "#" },
        { label: "পুষ্টি ও ডায়েট", href: "#" },
        { label: "শিশু বিভাগ", href: "#" },
      ],
    },
    {
      title: "প্ল্যাটফর্ম", // Platform
      links: [
        { label: "ডাক্তার খুঁজুন", href: "#" },
        { label: "মেডিকেল বিষয়সমূহ", href: "#" },
        { label: "প্রফেশনাল লগইন", href: "#" },
        { label: "আমাদের সম্পর্কে", href: "#" },
      ],
    },
    {
      title: "আইনি তথ্য", // Legal
      links: [
        { label: "গোপনীয়তা নীতি", href: "#" },
        { label: "ব্যবহারের শর্তাবলী", href: "#" },
        { label: "কুকি পলিসি", href: "#" },
        { label: "মেডিকেল দাবিত্যাগ", href: "#" },
      ],
    },
  ];

  return (
    <footer
      className={`bg-slate-900 text-slate-400 px-6 lg:px-20 py-20 border-t border-slate-800 ${notoSerifBengali.className}`}
      role="contentinfo"
      aria-label="সাইট ফুটার"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA] rounded-lg w-fit"
          >
            <div
              className="size-8 bg-[#BCE7FA] flex items-center justify-center rounded-lg text-slate-900"
              aria-hidden="true"
            >
              <Activity size={20} />
            </div>
            <h2 className="text-white text-xl font-bold tracking-tight">
              হেলথভার্স
            </h2>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            বিশেষজ্ঞের অন্তর্দৃষ্টি এবং পেশাদার ক্লিনিকাল ডিরেক্টরির মাধ্যমে
            চিকিৎসা জ্ঞানের ভবিষ্যৎ নেতৃত্ব দিচ্ছে।
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BCE7FA] hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA]"
              aria-label="সোশ্যাল মিডিয়ায় শেয়ার করুন"
            >
              <Share2 size={18} aria-hidden="true" />
            </a>
            <a
              href="#"
              className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BCE7FA] hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA]"
              aria-label="আমাদের নেটওয়ার্কে যুক্ত হোন"
            >
              <Network size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Dynamic Link Sections */}
        {FOOTER_LINKS.map((section) => (
          <div key={section.title} className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">{section.title}</h3>
            <ul className="flex flex-col gap-3 text-sm">
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
          </div>
        ))}
      </div>

      {/* Copyright Bar */}
      <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>
          &copy; {banglaYear} হেলথভার্স মেডিকেল থিম। সমস্ত চিকিৎসা তথ্য
          বোর্ড-প্রত্যয়িত পেশাদারদের দ্বারা যাচাইকৃত।
        </p>
      </div>
    </footer>
  );
}
