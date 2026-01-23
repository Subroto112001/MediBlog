"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Noto_Serif_Bengali } from "next/font/google";
import { ARTICLES_DB } from "@/lib/articlesData";
import { Calendar, Clock, ArrowRight, Search, Filter } from "lucide-react";
import Image from "next/image";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function AllArticles() {
  // ১. স্টেট ম্যানেজমেন্ট (ক্যাটাগরি এবং সার্চের জন্য)
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [searchQuery, setSearchQuery] = useState("");

  // ২. ডেটাবেস থেকে ইউনিক ক্যাটাগরিগুলো বের করা
  const categories = useMemo(() => {
    // সেট ব্যবহার করে ডুপ্লিকেট ক্যাটাগরি রিমুভ করা হয়েছে
    const allCats = ARTICLES_DB.map((article) => article.category);
    return ["সব", ...new Set(allCats)];
  }, []);

  // ৩. ফিল্টারিং লজিক
  const filteredArticles = ARTICLES_DB.filter((article) => {
    const matchesCategory =
      selectedCategory === "সব" || article.category === selectedCategory;
    const matchesSearch = article.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            সকল চিকিৎসা নিবন্ধ
          </h1>
          <p className="text-slate-600 text-lg">
            আমাদের বিশেষজ্ঞ ডাক্তার এবং গবেষকদের দ্বারা লিখিত স্বাস্থ্য বিষয়ক
            সর্বশেষ প্রবন্ধ এবং ক্লিনিকাল আপডেট।
          </p>

          {/* Search Bar (Functional) */}
          <div className="mt-8 relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="নিবন্ধ অনুসন্ধান করুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-slate-200 focus:ring-2 focus:ring-[#70E000] focus:border-transparent outline-none transition-shadow hover:shadow-md"
            />
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={20}
            />
          </div>
        </div>

        {/* ৪. ক্যাটাগরি ফিল্টার সেকশন */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                  selectedCategory === category
                    ? "bg-[#70E000] text-white border-[#70E000] shadow-md transform scale-105" // একটিভ স্টাইল
                    : "bg-white text-slate-600 border-slate-200 hover:border-[#70E000] hover:text-[#70E000]" // ইন-একটিভ স্টাইল
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
              >
                {/* Image as a Link */}
                <Link
                  // href={`/articles/${article.slug}`}
                  href={"#"}
                  className="h-56 relative overflow-hidden block"
                >
                  <Image
                    src={article.image} // এটি ইম্পোর্ট করা অবজেক্ট বা URL স্ট্রিং—উভয়ই গ্রহণ করবে
                    alt={article.title}
                    fill // প্যারেন্ট কন্টেইনারের সাইজ অনুযায়ী ইমেজ ফিট করবে
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // পারফরম্যান্স অপ্টিমাইজেশন
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
                    <Link
                      // href={`/articles/${article.slug}`}
                      href={`#`}
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
                      // href={`/articles/${article.slug}`}
                      href={"#"}
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
        ) : (
          // ৫. যদি কোনো রেজাল্ট না পাওয়া যায়
          <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
              <Filter size={24} className="text-slate-400" />
            </div>
            <h3 className="text-xl font-bold text-slate-700">
              কোনো নিবন্ধ পাওয়া যায়নি
            </h3>
            <p className="text-slate-500 mt-2">
              অন্য কোনো ক্যাটাগরি নির্বাচন করুন বা পুনরায় অনুসন্ধান করুন।
            </p>
            <button
              onClick={() => {
                setSelectedCategory("সব");
                setSearchQuery("");
              }}
              className="mt-6 text-[#70E000] font-bold hover:underline"
            >
              সব নিবন্ধ দেখুন
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
