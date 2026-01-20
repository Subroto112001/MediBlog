"use client";

import React, { useState } from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import { ChevronDown, Linkedin, Twitter, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { SPECIALISTS } from "@/lib/doctorsData";


// --- Font Configuration ---
const notoSerif = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SPECIALTIES = [
  "সব বিভাগ",
  "কার্ডিওলজি",
  "নিউরোলজি",
  "শিশু বিশেষজ্ঞ",
  "চর্মরোগ",
];

export default function SpecialistsDirectoryBn() {
  const [activeCategory, setActiveCategory] = useState("সব বিভাগ");

  const filteredSpecialists =
    activeCategory === "সব বিভাগ"
      ? SPECIALISTS
      : SPECIALISTS.filter((doc) => doc.role === activeCategory);

  return (
    <div
      className={`${notoSerif.className} bg-white dark:bg-[#101728] text-slate-900 dark:text-slate-100`}
    >
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            আমাদের বিশেষজ্ঞ ডাক্তারগণ
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            আপনার স্বাস্থ্য এবং সুস্থতার জন্য নিবেদিত বিশ্বমানের চিকিৎসা
            পেশাদারদের সাথে সংযোগ স্থাপন করুন।
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-10 pb-6 border-b border-slate-100 dark:border-slate-800">
          {SPECIALTIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-lg text-base font-semibold transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA]
                ${
                  activeCategory === category
                    ? "bg-[#BCE7FA] text-[#1e293b] shadow-md shadow-[#BCE7FA]/20"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
                }`}
            >
              {category}
              {category !== "সব বিভাগ" && (
                <ChevronDown
                  size={18}
                  className={`opacity-50 ${activeCategory === category ? "opacity-100" : ""}`}
                />
              )}
            </button>
          ))}
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredSpecialists.map((doctor) => (
            <article
              key={doctor.id}
              className="group bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-[#BCE7FA]/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="aspect-square w-full rounded-lg overflow-hidden mb-5 bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} এর ছবি`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3 flex-grow">
                <h2 className="text-xl font-bold leading-tight">
                  {doctor.name}
                </h2>
                <span className="inline-block px-2.5 py-1 bg-[#BCE7FA]/20 text-slate-700 dark:text-[#BCE7FA] text-sm font-semibold rounded tracking-wide">
                  {doctor.displayRole}
                </span>
                <p className="text-base text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed pt-1">
                  {doctor.bio}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <a
                  href={doctor.socials.twitter}
                  className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-[#0A2540] hover:bg-[#BCE7FA] transition-colors"
                >
                  <Twitter size={18} fill="currentColor" strokeWidth={0} />
                </a>
                <a
                  href={doctor.socials.linkedin}
                  className="p-2 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-400 hover:text-[#0A2540] hover:bg-[#BCE7FA] transition-colors"
                >
                  <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                </a>
              </div>

              {/* Dynamic Link Here */}
              <Link
                href={`/doctors/${doctor.id}`}
                className="w-full mt-6 py-2.5 px-4 rounded-lg border-2 border-[#BCE7FA] text-[#1e293b] dark:text-white font-bold hover:bg-[#BCE7FA] hover:text-[#1e293b] transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#BCE7FA]/40"
              >
                প্রোফাইল দেখুন <ArrowRight size={18} />
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
