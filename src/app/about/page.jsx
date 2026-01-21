"use client";

import React from "react";
import Image from "next/image";
import { Noto_Serif_Bengali } from "next/font/google";
import { Shield, FileText, Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

// --- Font Configuration ---
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function AboutPage() {
  // --- SEO: Structured Data (JSON-LD) ---
  // This helps Google understand your organization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "আমাদের সম্পর্কে | সাবাব সানি আর্থাইটিস কেয়ার",
    description:
      "সাবাব সানি আর্থাইটিস কেয়ার সেন্টার - আর্থাইটিস ও জয়েন্ট রোগের বিশেষায়িত চিকিৎসা কেন্দ্র।",
    publisher: {
      "@type": "MedicalOrganization",
      name: "সাবাব সানি আর্থাইটিস কেয়ার",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
      slogan: "আর্থাইটিস চিকিৎসায় বিশেষজ্ঞ সেবা",
    },
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-[#101728] text-slate-900 dark:text-slate-100 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* Injecting Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1 overflow-x-hidden">
        {/* --- Hero Section --- */}
        <section
          className="relative w-full px-6 lg:px-40 py-12 lg:py-20"
          aria-labelledby="hero-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            {/* Image Container with Shadow */}
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl min-h-[520px] flex items-center shadow-2xl">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
                  alt="আধুনিক হাসপাতালের করিডোর এবং শান্ত পরিবেশ"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay for Text Readability (A11y High Contrast) */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent dark:from-[#101728]/95 dark:via-[#101728]/80"
                  aria-hidden="true"
                ></div>
              </div>

              {/* Content */}
              <div className="relative z-10 px-8 lg:px-20 max-w-3xl">
                <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-[#BCE7FA] text-slate-900 rounded-full">
                  আমাদের লক্ষ্য
                </span>
                <h1
                  id="hero-heading"
                  className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.3] mb-6"
                >
                  আর্থাইটিস চিকিৎসায় <br />
                  <span className="text-slate-700 dark:text-[#BCE7FA]">
                    বিশেষজ্ঞ সেবা
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-xl leading-relaxed font-medium">
                  ডা. সাবাব সানি আর্থাইটিস কেয়ার সেন্টারে আমরা রিউমাটয়েড
                  আর্থাইটিস, অস্টিওআর্থাইটিস এবং অন্যান্য জয়েন্ট রোগের আধুনিক ও
                  কার্যকর চিকিৎসা প্রদান করি। ১৫+ বছরের অভিজ্ঞতা সহ আমরা আপনার
                  সুস্থতার জন্য প্রতিশ্রুতিবদ্ধ।
                </p>
                {/* this button will route story section */}
                <Link
                  href="#our-story"
                  className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg hover:opacity-90 transition-all shadow-lg focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-500"
                  aria-label="আমাদের শুরুর গল্প পড়ুন"
                >
                  আমাদের গল্প জানুন
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* --- Why Us Section --- */}
        <section
          className="w-full bg-slate-100 dark:bg-slate-900/50 px-6 lg:px-40 py-20"
          aria-labelledby="why-us-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="mb-16 text-center lg:text-left">
              <h2
                id="why-us-heading"
                className="text-3xl lg:text-4xl font-extrabold mb-4 text-slate-900 dark:text-white"
              >
                কেন সাবাব সানি আর্থাইটিস কেয়ার?
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
                আমরা আর্থাইটিস ও জয়েন্ট রোগের চিকিৎসায় বিশেষায়িত সেবা প্রদান
                করি যা রোগীদের জীবনযাত্রার মান উন্নত করে।
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#BCE7FA] text-slate-900 mb-6"
                  aria-hidden="true"
                >
                  <Shield size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  অভিজ্ঞতা ও দক্ষতা
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  ১৫+ বছরের অভিজ্ঞতা সহ ডা. সাবাব সানি দেশ-বিদেশে প্রশিক্ষিত
                  একজন বিশেষজ্ঞ রিউমাটোলজিস্ট যিনি হাজারো রোগীকে সুস্থ জীবন
                  উপহার দিয়েছেন।
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#BCE7FA] text-slate-900 mb-6"
                  aria-hidden="true"
                >
                  <FileText size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  দক্ষতা
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  শিল্পের শীর্ষস্থানীয়দের দ্বারা কিউরেট করা প্রমাণ-ভিত্তিক
                  সুস্থতার কন্টেন্ট। আমরা ভাইরাল হেলথ ট্রেন্ডের চেয়ে ক্লিনিকাল
                  নির্ভুলতাকে প্রাধান্য দিই।
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-[#1e293b] p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-all hover:-translate-y-1">
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#BCE7FA] text-slate-900 mb-6"
                  aria-hidden="true"
                >
                  <Users size={32} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                  কমিউনিটি
                </h3>
                <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                  একটি সহায়ক নেটওয়ার্ক যেখানে রোগীরা সংযুক্ত হতে পারেন এবং
                  ডাক্তাররা অর্থপূর্ণ পেশাদার প্রোফাইল তৈরি করতে পারেন।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Story Section --- */}
        <section
          id="our-story" // 👈 ID added here to match the link
          className="w-full px-6 lg:px-40 py-24 bg-white dark:bg-[#101728] scroll-mt-24" // 👈 Added scroll-mt-24 for spacing below header
          aria-labelledby="story-heading"
        >
          <div className="mx-auto max-w-300">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Text Content */}
              <div className="flex-1 order-2 lg:order-1">
                <h2
                  id="story-heading"
                  className="text-3xl lg:text-4xl font-extrabold mb-8 text-slate-900 dark:text-white"
                >
                  আমাদের গল্প
                </h2>
                <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                  <p>
                    হেলথভার্স একটি সাধারণ ধারণা দিয়ে শুরু হয়েছিল: পেশাদার
                    চিকিৎসা পরামর্শকে সহজলভ্য এবং মানবিক করা। আমরা জটিল মেডিকেল
                    জার্নাল এবং সোশ্যাল মিডিয়ার অনির্ভরযোগ্য স্বাস্থ্য
                    পরামর্শের মধ্যে একটি বিশাল ব্যবধান লক্ষ্য করেছি।
                  </p>
                  <p>
                    আমাদের প্ল্যাটফর্ম চিকিৎসকদের তাদের দক্ষতা শেয়ার করতে এবং
                    রোগীদের শেখার জন্য একটি নিরাপদ স্থান প্রদান করে। এটি
                    স্বাস্থ্য সাক্ষরতা বৃদ্ধি করতে সাহায্য করে।
                  </p>
                  <p className="font-bold text-slate-900 dark:text-[#BCE7FA]">
                    আজ, আমরা হাজার হাজার ব্যবহারকারীকে সেবা দিচ্ছি যারা সুস্থতার
                    জন্য একটি ব্যক্তিগতকৃত পদ্ধতি খুঁজছেন।
                  </p>
                </div>
                <div className="mt-10 flex gap-4">
                  <Link
                    href="/doctors"
                    className="px-6 py-3 font-bold border-2 border-slate-900 dark:border-slate-400 rounded-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300"
                    aria-label="আমাদের ডাক্তার এবং টিমের তালিকা দেখুন"
                  >
                    আমাদের টিমের সাথে পরিচিত হন
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div className="flex-1 order-1 lg:order-2 w-full">
                <div className="relative p-3 border-4 border-[#70E000] rounded-xl">
                  <div className="relative h-[450px] w-full rounded-lg overflow-hidden shadow-2xl bg-slate-200">
                    <Image
                      src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
                      alt="একটি উজ্জ্বল অফিসে সহযোগিতামূলক কাজ করছে বিভিন্ন মেডিকেল পেশাদারদের দল"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-[#70E000] text-[#1F2937] font-black px-6 py-4 rounded-lg shadow-xl uppercase tracking-wider text-sm flex items-center gap-2">
                    <CheckCircle2 size={18} /> প্রতিষ্ঠিত ২০২৪
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Newsletter Section --- */}
        <section
          className="w-full px-6 lg:px-40 py-16 mb-20"
          aria-labelledby="newsletter-heading"
        >
          <div className="mx-auto max-w-[1200px]">
            <div className="bg-[#1F2937] dark:bg-slate-800 rounded-2xl p-10 lg:p-20 text-center flex flex-col items-center shadow-2xl overflow-hidden relative">
              {/* Background Decorations */}
              <div
                className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
                aria-hidden="true"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#70E000] rounded-full blur-3xl -mr-32 -mt-32"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#BCE7FA] rounded-full blur-3xl -ml-32 -mb-32"></div>
              </div>

              <h2
                id="newsletter-heading"
                className="text-3xl lg:text-5xl font-extrabold text-white mb-6 relative z-10"
              >
                আপডেট থাকুন
              </h2>
              <p className="text-white/80 max-w-xl text-lg mb-10 relative z-10 font-medium">
                আমাদের মাসিক ডাইজেস্টে যোগ দিন এবং সরাসরি আপনার ইনবক্সে যাচাইকৃত
                চিকিৎসা অন্তর্দৃষ্টি এবং স্বাস্থ্য টিপস পান।
              </p>

              <form
                className="flex flex-col sm:flex-row gap-4 w-full max-w-lg relative z-10"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="email-input" className="sr-only">
                  আপনার ইমেইল ঠিকানা
                </label>
                <input
                  id="email-input"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-6 py-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-[#70E000] focus:border-transparent outline-none transition-all"
                  placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                  type="email"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#70E000] hover:bg-[#5db800] text-[#1F2937] font-black px-8 py-4 rounded-lg transition-all transform hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#70E000]/50"
                >
                  নিউজলেটারে যোগ দিন
                </button>
              </form>

              {/* A11y Fix: Increased contrast from text-white/40 to text-slate-400 */}
              <p className="text-slate-400 text-xs mt-6 relative z-10">
                আমরা আপনার গোপনীয়তাকে গুরুত্ব দিই। যেকোনো সময় আনসাবস্ক্রাইব
                করতে পারেন।
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
