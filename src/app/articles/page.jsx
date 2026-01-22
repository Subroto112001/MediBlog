"use client";

import React from "react";
import Link from "next/link";
import { Noto_Serif_Bengali } from "next/font/google";
import { ARTICLES_DB } from "@/lib/articlesData";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import Image from "next/image";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function AllArticles() {
  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            সকল চিকিৎসা নিবন্ধ
          </h1>
          <p className="text-slate-600 text-lg">
            আমাদের বিশেষজ্ঞ ডাক্তার এবং গবেষকদের দ্বারা লিখিত স্বাস্থ্য বিষয়ক
            সর্বশেষ প্রবন্ধ এবং ক্লিনিকাল আপডেট।
          </p>

          {/* Search Bar */}
          <div className="mt-8 relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="নিবন্ধ অনুসন্ধান করুন..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-[#70E000] focus:border-transparent outline-none"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_DB.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
            >
              {/* Image as a Link */}
              <Link
                href={`/articles/${article.slug}`}
                className="h-56 relative overflow-hidden block"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
                  <Link
                    href={`/articles/${article.slug}`}
                    className="focus:outline-none focus:underline"
                  >
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
                    className="size-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-sky-600 group-hover:bg-[#70E000] group-hover:text-white transition-colors"
                    aria-label={`পড়ুন: ${article.title}`}
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
