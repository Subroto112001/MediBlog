"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Noto_Serif_Bengali } from "next/font/google";
import { ARTICLES_DB } from "@/lib/articlesData";
import {
  Calendar,
  Clock,
  ArrowRight,
  Filter,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

// পেজিনেশন কনফিগারেশন
const ARTICLES_PER_PAGE = 12;

// Loading Fallback Component
function ArticlesLoading() {
  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="h-10 w-64 bg-slate-200 rounded-lg mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-96 bg-slate-200 rounded-lg mx-auto animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100"
            >
              <div className="h-56 bg-slate-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 w-32 bg-slate-200 rounded animate-pulse mb-3"></div>
                <div className="h-6 w-full bg-slate-200 rounded animate-pulse mb-3"></div>
                <div className="h-4 w-full bg-slate-200 rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

// Main Articles Content Component (uses useSearchParams)
function ArticlesContent() {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  // ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন
  const toBengaliNumber = (num) => {
    return num.toString().replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[d]);
  };

  // ১. স্টেট ম্যানেজমেন্ট
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // URL থেকে ক্যাটাগরি পড়ে সেট করা
  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("সব");
    }
    setCurrentPage(1);
  }, [categoryFromUrl]);

  // ২. ডেটাবেস থেকে ইউনিক ক্যাটাগরিগুলো বের করা
  const categories = useMemo(() => {
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

  // ৪. পেজিনেশন লজিক
  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // পেজ পরিবর্তন হ্যান্ডলার
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Breadcrumb */}
        {selectedCategory !== "সব" && (
          <nav
            className="flex items-center gap-2 text-sm mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/articles"
              className="text-slate-500 hover:text-[#68c20e] transition-colors font-medium"
            >
              ব্লগ
            </Link>
            <ChevronRight size={16} className="text-slate-400" />
            <span className="text-slate-900 font-semibold">
              {selectedCategory}
            </span>
          </nav>
        )}

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-4xl font-bold mb-4 text-slate-900">
            {selectedCategory !== "সব"
              ? `${selectedCategory} বিষয়ক নিবন্ধ`
              : "সকল ব্লগ"}
          </h1>
          <p className="text-slate-600 text-lg">
            আমাদের বিশেষজ্ঞ ডাক্তার এবং গবেষকদের দ্বারা লিখিত স্বাস্থ্য বিষয়ক
            সর্বশেষ প্রবন্ধ এবং ক্লিনিকাল আপডেট।
          </p>
        </div>

        {/* Grid Section */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article) => (
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
                      className="size-10 rounded-full bg-[#f0f9ff] flex items-center justify-center text-sky-600 group-hover:bg-[#236e00] group-hover:text-white transition-colors"
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
                setCurrentPage(1);
              }}
              className="mt-6 text-[#2d8c00] font-bold hover:underline"
            >
              সব নিবন্ধ দেখুন
            </button>
          </div>
        )}

        {/* Pagination Section (Fully Bengali) */}
        {totalPages > 1 && filteredArticles.length > 0 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200
                ${
                  currentPage === 1
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#2d8c00] hover:text-[#68c20e]"
                }`}
            >
              <ChevronLeft size={18} />
              পূর্ববর্তী
            </button>

            {/* Page Numbers (Bengali Digits) */}
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-lg font-semibold transition-all duration-200
                    ${
                      currentPage === page
                        ? "bg-[#68c20e] text-white shadow-md"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-[#2d8c00] hover:text-[#68c20e]"
                    }`}
                  >
                    {toBengaliNumber(page)}
                  </button>
                ),
              )}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold transition-all duration-200
                ${
                  currentPage === totalPages
                    ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-[#68c20e] hover:text-[#236e00]"
                }`}
            >
              পরবর্তী
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* Articles Count Info (Bengali Digits) */}
        {filteredArticles.length > 0 && (
          <p className="text-center text-slate-500 text-sm mt-6">
            মোট {toBengaliNumber(filteredArticles.length)}টি নিবন্ধের মধ্যে{" "}
            {toBengaliNumber(startIndex + 1)} -{" "}
            {toBengaliNumber(Math.min(endIndex, filteredArticles.length))}{" "}
            দেখানো হচ্ছে
          </p>
        )}
      </main>
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
    </div>
  );
}

// Main Export with Suspense Boundary
export default function AllArticles() {
  return (
    <Suspense fallback={<ArticlesLoading />}>
      <ArticlesContent />
    </Suspense>
  );
}
