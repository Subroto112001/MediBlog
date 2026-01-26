"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import { ArrowRight, Calendar, ChevronRight, Clock } from "lucide-react";
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
        <title> আর্থ্রাইটিস কেয়ার | আর্থ্রাইটিস চিকিৎসা ও পরামর্শ</title>
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
                  href={`/articles/${FEATURED_ARTICLE.slug}`}
                  className="bg-[#2D8C00] hover:bg-[#236e00] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-[#38B000]/20 flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2d8c00]/40"
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

            <div className="relative group h-[250px] md:h-[400px] w-full">
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
          {/* Header: Stacks on mobile, side-by-side on tablet+ */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-slate-200 pb-6 gap-4">
            <div>
              <h2
                id="latest-insights-heading"
                className="text-3xl font-extrabold text-slate-900"
              >
                সর্বশেষ আর্টিকেলসমূহ
              </h2>
              <p className="text-slate-600 mt-1 font-medium w-full md:w-[80%]">
                আমাদের ক্লিনিকাল নেটওয়ার্ক থেকে প্রাপ্ত স্বাস্থ্য তথ্য ও
                পরামর্শ।
              </p>
            </div>
            <Link
              href="/articles"
              className="text-slate-900 font-bold text-[14px] md:text-[16px] flex items-center gap-1 hover:gap-2 transition-all p-2 rounded-lg hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 w-fit"
            >
              সব পোস্ট দেখুন <ChevronRight size={20} aria-hidden="true" />
            </Link>
          </div>

          {/* Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LATEST_ARTICLES.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
              >
                {/* Image as a Link */}
                <Link
                  href={`/articles/${article.slug}`}
                  className="h-56 relative overflow-hidden block"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-[#BCE7FA] text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {article.category}
                  </span>
                </Link>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-4 text-xs text-slate-500 font-medium mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {article.dateDisplay}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 leading-snug group-hover:text-sky-600 transition-colors">
                    <Link href={`/articles/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                    {article.excerpt}
                  </p>

                  <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <Image
                        src={article.authorImage}
                        alt={article.author}
                        width={40}
                        height={40}
                        className=" w-10 h-10 rounded-full bg-slate-200 border border-slate-200 object-cover"
                      />
                      <span className="text-xs font-bold text-slate-700">
                        {article.author}
                      </span>
                    </div>
                    <Link
                      href={`/articles/${article.slug}`}
                      className="size-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors"
                      aria-label={`পড়ুন: ${article.title}`}
                    >
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        {/* --- YouTube Video Section --- */}
        <section
          className="px-4 lg:px-20 py-12 max-w-[1200px] mx-auto border-t border-slate-200"
          style={{ fontFamily: '"Noto Serif", serif' }}
          aria-labelledby="video-section-heading"
        >
          {/* হেডার */}
          <div className="mb-8">
            <h2
              id="video-section-heading"
              className="text-2xl md:text-3xl font-extrabold text-slate-900"
            >
              ভিডিও পরামর্শ
            </h2>
            <p className="text-slate-600 mt-1 font-medium text-sm md:text-base">
              আর্থ্রাইটিস ও জয়েন্ট পেইন নিয়ে সরাসরি ডক্টরের পরামর্শ দেখুন।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-stretch">
            {/* বড় ভিডিও (বাম পাশ) */}
            <div className="lg:col-span-7 relative overflow-hidden rounded-xl bg-slate-900 shadow-xl aspect-video lg:aspect-auto lg:h-full">
              <iframe
                className="w-full h-full object-cover border-0"
                src="https://www.youtube.com/embed/VIDEO_ID_1"
                title="Featured Health Video"
                allowFullScreen
              ></iframe>
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
                <h3 className="text-white text-base md:text-2xl font-bold leading-tight">
                  আর্থ্রাইটিস রোগীদের জন্য সঠিক জীবনধারা
                </h3>
              </div>
            </div>

            {/* ছোট ভিডিওর কন্টেইনার (ডান পাশ / মোবাইল বটম) */}
            <div className="lg:col-span-5 flex flex-row lg:flex-col gap-3 md:gap-4 overflow-hidden">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex flex-col lg:flex-row gap-2 lg:gap-4 flex-1 min-w-0"
                >
                  {/* থাম্বনেইল অংশ - মোবাইলে ১/৩ জায়গা নিবে */}
                  <div className="relative overflow-hidden rounded-lg bg-slate-200 shadow-sm aspect-video lg:w-40 xl:w-48 flex-shrink-0">
                    <iframe
                      className="w-full h-full object-cover border-0"
                      src={`https://www.youtube.com/embed/VIDEO_ID_${item + 1}?modestbranding=1&rel=0`}
                      title={`Health Tip Video ${item}`}
                      allowFullScreen
                    ></iframe>
                  </div>

                  {/* টাইটেল অংশ */}
                  <div className="flex flex-col justify-start lg:justify-center overflow-hidden">
                    <h4 className="text-slate-900 text-[9px] sm:text-xs md:text-sm lg:text-[15px] font-bold leading-tight line-clamp-2">
                      জয়েন্ট পেইন ব্যায়াম - পর্ব {item}
                    </h4>
                    <p className="hidden lg:block text-slate-500 text-[12px] mt-1 font-medium">
                      Youtube Video
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
                  ই-মেইলে স্বাস্থ্য টিপস পান
                </h2>
                <p className="text-slate-600 text-lg font-medium">
                  স্বাস্থ্য টিপস পেতে সাবস্ক্রাইব করুন!
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
                    যোগ দিন
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
