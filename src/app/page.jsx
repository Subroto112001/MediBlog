"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import { ArrowRight, ChevronRight } from "lucide-react";
import Head from "next/head";

// --- Font Configuration ---
// Using a variable allows for easier integration with Tailwind
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
  display: "swap",
});

// --- DATA CONFIGURATION ---
const CATEGORIES = [
  "কার্ডিওলজি",
  "পুষ্টি",
  "শিশু বিভাগ",
  "মানসিক স্বাস্থ্য",
  "চর্মরোগ",
  "ফিটনেস",
];

const ARTICLES = [
  {
    id: 1,
    title: "কর্মক্ষেত্রে মানসিক চাপ ব্যবস্থাপনা: একটি ক্লিনিকাল পদ্ধতি",
    category: "সুস্থতা",
    author: "ডা. সারাহ উইলসন",
    readTime: "৫ মিনিট পাঠ",
    date: "2023-10-24", // Machine readable date
    dateDisplay: "২৪ অক্টোবর", // Human readable date
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "অফিসে ধ্যানের বাটি সহ আধুনিক কাজের পরিবেশ", // Descriptive Alt Text
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    title: "ভিটামিন ডি: ভুল ধারণা এবং সত্য, বিজ্ঞান যা বলে",
    category: "পুষ্টি",
    author: "ডা. জেমস লি",
    readTime: "৮ মিনিট পাঠ",
    date: "2023-10-22",
    dateDisplay: "২২ অক্টোবর",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "ভিটামিন এবং পানির গ্লাসের উপর সূর্যের আলো পড়ছে",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    id: 3,
    title: "নিউরোরিকভারিতে বা স্নায়ু পুনরুদ্ধারে ঘুমের ভূমিকা",
    category: "স্লিপ সায়েন্স",
    author: "ডা. এলিনা রদ্রিগেজ",
    readTime: "৬ মিনিট পাঠ",
    date: "2023-10-20",
    dateDisplay: "২০ অক্টোবর",
    image:
      "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "একজন ব্যক্তি আরামদায়কভাবে ঘুমাচ্ছেন",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
];

// --- SEO: Schema Markup (JSON-LD) ---
const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "HealthVerse Medical Insights",
  description:
    "Latest medical insights regarding cardiology, nutrition, and mental health in Bangla.",
  audience: "Patients and Medical Professionals",
};

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-white text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* SEO: Head Metadata */}
      <Head>
        <title>
          HealthVerse | প্রতিরোধমূলক কার্ডিওলজি এবং চিকিৎসা অন্তর্দৃষ্টি
        </title>
        <meta
          name="description"
          content="বাংলায় কার্ডিওলজি, পুষ্টি এবং মানসিক স্বাস্থ্য সম্পর্কিত সর্বশেষ চিকিৎসা গবেষণা এবং বিশেষজ্ঞের পরামর্শ পড়ুন।"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <header className="sr-only">
        <h1>HealthVerse বাংলা হোমপেজ</h1>
      </header>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        {/* A11y: Ensure contrast allows text to be readable on the background */}
        <section
          className="px-6 lg:px-20 py-12 lg:py-16 max-w-[1200px] mx-auto"
          aria-labelledby="hero-heading"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#BCE7FA] rounded-[2rem] p-8 lg:p-12 overflow-hidden relative">
            {/* Decorative background - aria-hidden to hide from screen readers */}
            <div
              className="absolute top-0 right-0 w-64 h-64 bg-[#38B000]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"
              aria-hidden="true"
            ></div>

            <div className="flex flex-col gap-8 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full w-fit shadow-sm border border-white/50">
                <span className="flex h-2 w-2 rounded-full bg-[#2d8c00] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-800 tracking-wider uppercase">
                  বিশেষ উদ্ভাবন
                </span>
              </div>

              <h2
                id="hero-heading"
                className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-[1.3] tracking-tight"
              >
                <span className="text-slate-800">প্রতিরোধমূলক</span> কার্ডিওলজি
                বা হৃদরোগ চিকিৎসার ভবিষ্যৎ
              </h2>

              <p className="text-lg text-slate-800 leading-relaxed max-w-lg font-medium">
                কার্ডিওভাসকুলার দীর্ঘায়ু সম্পর্কে আমাদের প্রত্যয়িত বিশেষজ্ঞদের
                কাছ থেকে সর্বশেষ চিকিৎসা অন্তর্দৃষ্টি এবং পেশাদার স্বাস্থ্য
                পরামর্শ অন্বেষণ করুন।
              </p>

              <div className="flex flex-wrap gap-4">
                {/* A11y: High contrast focus ring for keyboard navigation */}
                <button
                  className="bg-[#2d8c00] hover:bg-[#236e00] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-[#38B000]/20 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2d8c00]/40"
                  aria-label="এই নিবন্ধটি পড়ুন"
                >
                  নিবন্ধ পড়ুন
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </button>
                <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 px-8 py-4 rounded-xl text-base font-bold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-slate-300">
                  ডাক্তারদের দেখুন
                </button>
              </div>
            </div>

            <div className="relative group">
              <div
                className="absolute inset-0 bg-white/20 rounded-[1.5rem] rotate-3 scale-105 transition-transform group-hover:rotate-1"
                aria-hidden="true"
              ></div>
              {/* Image rendered as background, ensure a semantic alternative exists if it conveys content, or use standard img tag for better SEO. Using div here for styling as requested, but adding role="img" and aria-label. */}
              <div
                role="img"
                aria-label="ডাক্তার একটি উচ্চ প্রযুক্তির হার্ট হলোগ্রাম ধরে আছেন"
                className="w-full h-[400px] bg-center bg-no-repeat bg-cover rounded-[1.5rem] relative shadow-2xl transition-transform"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* --- Category Scroller --- */}
        <section
          className="px-6 lg:px-20 py-4 max-w-[1200px] mx-auto overflow-hidden"
          aria-label="বিভাগ নির্বাচন"
        >
          <div
            className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar"
            role="tablist"
          >
            <span
              className="text-sm font-bold text-slate-600 uppercase tracking-widest mr-4 whitespace-nowrap"
              id="explore-label"
            >
              অনুসন্ধান করুন:
            </span>
            {CATEGORIES.map((cat, index) => (
              <button
                key={cat}
                role="tab"
                aria-selected={index === 0}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900
                  ${
                    index === 0
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-[#BCE7FA] hover:text-slate-900 border border-slate-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* --- Blog Grid --- */}
        <section
          className="px-6 lg:px-20 py-16 max-w-[1200px] mx-auto"
          aria-labelledby="latest-insights-heading"
        >
          <div className="flex items-end justify-between mb-10 border-b border-slate-200 pb-6">
            <div>
              <h2
                id="latest-insights-heading"
                className="text-3xl font-extrabold text-slate-900"
              >
                সর্বশেষ চিকিৎসা অন্তর্দৃষ্টি
              </h2>
              <p className="text-slate-600 mt-1 font-medium">
                আমাদের ক্লিনিকাল নেটওয়ার্ক থেকে পিয়ার-রিভিউ করা আপডেট।
              </p>
            </div>
            <a
              href="#"
              className="text-slate-900 font-bold flex items-center gap-1 hover:gap-2 transition-all p-2 rounded-lg hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              aria-label="সব ব্লগ পোস্ট দেখুন"
            >
              সব পোস্ট দেখুন <ChevronRight size={20} aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="flex flex-col group cursor-pointer h-full"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-slate-100">
                  <div className="absolute inset-0 bg-[#38B000]/0 group-hover:bg-[#38B000]/10 transition-colors z-10"></div>
                  <img
                    src={article.image}
                    alt={article.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 z-20 bg-[#BCE7FA]/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-[1.4]">
                    <a
                      href="#"
                      className="focus-visible:underline focus-visible:outline-none"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={article.avatar}
                      alt={`${article.author} এর ছবি`}
                      className="size-8 rounded-full bg-slate-200 border border-slate-200"
                    />
                    <div className="text-xs text-slate-600 font-medium">
                      <p className="font-bold text-slate-900">
                        {article.author}
                      </p>
                      <p>
                        <span aria-label={`পড়ার সময় ${article.readTime}`}>
                          {article.readTime}
                        </span>{" "}
                        •{" "}
                        <time dateTime={article.date}>
                          {article.dateDisplay}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- Newsletter --- */}
        <section
          className="px-6 lg:px-20 py-20 bg-[#BCE7FA]/20"
          aria-labelledby="newsletter-heading"
        >
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="bg-white rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-slate-200/50 relative overflow-hidden border border-slate-100">
              <div
                className="absolute -left-10 -top-10 w-40 h-40 bg-[#38B000]/10 rounded-full blur-2xl"
                aria-hidden="true"
              ></div>
              <div
                className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#BCE7FA]/20 rounded-full blur-2xl"
                aria-hidden="true"
              ></div>

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6">
                <h2
                  id="newsletter-heading"
                  className="text-3xl lg:text-4xl font-extrabold text-slate-900"
                >
                  আপডেট থাকুন। চিকিৎসা অন্তর্দৃষ্টি পান।
                </h2>
                <p className="text-slate-600 text-lg font-medium">
                  আমাদের সাপ্তাহিক নিউজলেটারে সাবস্ক্রাইব করুন এবং সর্বশেষ
                  স্বাস্থ্য টিপস, যুগান্তকারী গবেষণা এবং বিশেষজ্ঞের পরামর্শ
                  সরাসরি আপনার ইনবক্সে পান।
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4 mt-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label htmlFor="email-input" className="sr-only">
                    আপনার ইমেইল ঠিকানা
                  </label>
                  <input
                    id="email-input"
                    className="flex-1 bg-slate-50 border-slate-300 text-slate-900 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#2d8c00] focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="আপনার ইমেইল ঠিকানা লিখুন"
                    type="email"
                    required
                  />
                  <button className="bg-[#2d8c00] hover:bg-[#236e00] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#38B000]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2d8c00]/40">
                    নিউজলেটারে যোগ দিন
                  </button>
                </form>
                <p className="text-xs text-slate-500">
                  ১৫,০০০+ স্বাস্থ্য সচেতন পাঠকদের সাথে যোগ দিন। কোনো স্প্যাম
                  নয়।
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
