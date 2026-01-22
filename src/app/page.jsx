"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import { ArrowRight, ChevronRight } from "lucide-react";
import Head from "next/head";
import Link from "next/link"; // Import Link for routing
import { ARTICLES_DB } from "@/lib/articlesData"; // Import Shared Data
import Image from "next/image";

// --- Font Configuration ---
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
  display: "swap",
});

// --- Dynamic Data Selection ---
// 1. Find the featured article for the Hero Section
const FEATURED_ARTICLE =
  ARTICLES_DB.find((article) => article.isFeatured) || ARTICLES_DB[0];

// 2. Filter out the featured one to show the rest in the grid
const LATEST_ARTICLES = ARTICLES_DB.filter(
  (article) => article.id !== FEATURED_ARTICLE.id,
).slice(0, 6);

const CATEGORIES = [
  "আর্থাইটিস",
  "জয়েন্ট সমস্যা",
  "পুষ্টি",
  "ব্যায়াম",
  "অটোইমিউন রোগ",
  "স্পাইন সমস্যা",
];

// --- SEO: Schema Markup ---
const schemaData = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  name: "সাবাব সানি আর্থাইটিস কেয়ার",
  description:
    "আর্থাইটিস ও জয়েন্ট রোগের চিকিৎসা, পরামর্শ এবং প্রতিরোধ সম্পর্কে বিশেষজ্ঞ পরামর্শ।",
  audience: "Patients and Medical Professionals",
};

export default function Home() {
  return (
    <div
      className={`min-h-screen bg-white text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <Head>
        <title>সাবাব সানি আর্থাইটিস কেয়ার | আর্থাইটিস চিকিৎসা ও পরামর্শ</title>
        <meta
          name="description"
          content="রিউমাটয়েড আর্থাইটিস, অস্টিওআর্থাইটিস, গাউট ও অন্যান্য জয়েন্ট রোগের বিশেষজ্ঞ চিকিৎসা এবং পরামর্শ।"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <main className="flex-1">
        {/* --- Hero Section (Dynamic) --- */}
        <section
          className="px-6 lg:px-20 py-12 lg:py-16 max-w-[1200px] mx-auto"
          aria-labelledby="hero-heading"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#BCE7FA] rounded-[2rem] p-8 lg:p-12 overflow-hidden relative">
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
                className="text-3xl lg:text-5xl font-extrabold text-slate-900 leading-[1.3] tracking-tight"
              >
                {FEATURED_ARTICLE.title}
              </h2>

              <p className="text-lg text-slate-800 leading-relaxed max-w-lg font-medium line-clamp-3">
                {FEATURED_ARTICLE.excerpt}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href={`#`}
                  // href={`/articles/${FEATURED_ARTICLE.slug}`}
                  className="bg-[#2d8c00] hover:bg-[#236e00] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-[#38B000]/20 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2d8c00]/40"
                  aria-label={`পড়ুন: ${FEATURED_ARTICLE.title}`}
                >
                  নিবন্ধ পড়ুন
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>

            <div className="relative group h-[400px] w-full">
              
              <div
                className="absolute inset-0 bg-white/20 rounded-[1.5rem] rotate-3 scale-105 transition-transform group-hover:rotate-1"
                aria-hidden="true"
              ></div>

              <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden shadow-2xl">
                <Image
                  src={FEATURED_ARTICLE.image} 
                  alt={FEATURED_ARTICLE.title}
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority 
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Blog Grid (Dynamic Links) --- */}
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
                সর্বশেষ আর্টিকেলসমূহ
              </h2>
              <p className="text-slate-600 mt-1 font-medium">
                আমাদের ক্লিনিকাল নেটওয়ার্ক থেকে প্রাপ্ত স্বাস্থ্য তথ্য ও পরামর্শ।
              </p>
            </div>
            <Link
              href="#"
              // href="/articles"
              className="text-slate-900 font-bold flex items-center gap-1 hover:gap-2 transition-all p-2 rounded-lg hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            >
              সব পোস্ট দেখুন <ChevronRight size={20} aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_ARTICLES.map((article) => (
              <Link
                // href={`/articles/${article.slug}`}
                href={"#"}
                key={article.id}
                className="group focus-visible:outline-none"
              >
                <article className="flex flex-col h-full cursor-pointer">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3] bg-slate-100 group-focus-visible:ring-4 group-focus-visible:ring-slate-900">
                    <div className="absolute inset-0 bg-[#38B000]/0 group-hover:bg-[#38B000]/10 transition-colors z-10"></div>
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <span className="absolute top-4 left-4 z-20 bg-[#BCE7FA]/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 transition-colors leading-[1.4] group-hover:underline decoration-2 underline-offset-4">
                      {article.title}
                    </h3>
                    <Link
                      href={`/doctor`}
                      className="flex items-center gap-3 mt-auto"
                    >
                      <Image
                        src={article.authorImage}
                        alt={article.author}
                        width={32}
                        className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200 object-cover"
                      />
                      <div className="text-xs text-slate-600 font-medium">
                        <p className="font-bold text-slate-900">
                          {article.author}
                        </p>
                        <p>
                          {article.readTime} •{" "}
                          <time dateTime={article.date}>
                            {article.dateDisplay}
                          </time>
                        </p>
                      </div>
                    </Link>
                  </div>
                </article>
              </Link>
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
                  আপডেট থাকুন। স্বাস্থ্য টিপস পান।
                </h2>
                <p className="text-slate-600 text-lg font-medium">
                  আমাদের সাপ্তাহিক নিউজলেটারে সাবস্ক্রাইব করুন এবং সর্বশেষ
                  স্বাস্থ্য টিপস সরাসরি আপনার ইনবক্সে পান।
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
