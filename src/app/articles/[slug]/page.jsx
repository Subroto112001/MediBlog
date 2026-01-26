"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ARTICLES_DB } from "@/lib/articlesData";
import { Noto_Serif_Bengali } from "next/font/google";
import {
  Clock,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Share2,
  Bookmark,
  List,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function ArticleDetail() {
  const params = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [modifiedContent, setModifiedContent] = useState("");
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");
  const [readingProgress, setReadingProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // ১. আর্টিকেল লোড এবং কন্টেন্ট প্রসেসিং
  useEffect(() => {
    if (params?.slug) {
      const foundArticle = ARTICLES_DB.find((a) => a.slug === params.slug);

      if (foundArticle) {
        const { processedContent, extractedHeadings } = processContent(
          foundArticle.content,
        );
        setArticle(foundArticle);
        setModifiedContent(processedContent);
        setHeadings(extractedHeadings);
      }
      setLoading(false);
    }
  }, [params]);

  // ২. স্ক্রল প্রোগ্রেস বার
  useEffect(() => {
    const updateProgress = () => {
      const currentScroll = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(
          Number((currentScroll / scrollHeight).toFixed(2)) * 100,
        );
      }
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  // ৩. স্ক্রল স্পাই (Active Section Detection)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px" },
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings, modifiedContent]);

  // --- Helper Function: Content Processor ---
  const processContent = (htmlString) => {
    const headingRegex = /<h([2-3])>(.*?)<\/h\1>/g;
    const extractedHeadings = [];
    let counter = 0;

    const processedContent = htmlString.replace(
      headingRegex,
      (match, level, text) => {
        const id = `section-${counter++}`;
        const cleanText = text.replace(/<[^>]*>?/gm, "");
        extractedHeadings.push({ id, text: cleanText, level: parseInt(level) });
        return `<h${level} id="${id}" class="scroll-mt-24">${text}</h${level}>`;
      },
    );

    return { processedContent, extractedHeadings };
  };

  const handleScrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  // --- Reusable Table of Contents Component ---
  // এটি ডেস্কটপ এবং মোবাইল দুই ভিউতেই ব্যবহার করা হবে
  const renderTableOfContents = (isMobile = false) => (
    <div
      className={`bg-slate-50/50 rounded-2xl p-6 border border-slate-100 ${isMobile ? "mb-10" : ""}`}
    >
      <div className="flex items-center gap-2 mb-4 text-slate-900 font-bold text-lg border-b border-slate-200 pb-2">
        <List size={20} className="text-[#2d8c00]" />
        <h3>এই পৃষ্ঠায়</h3>
      </div>

      {headings.length > 0 ? (
        <nav className="flex flex-col gap-1">
          {headings.map((heading) => (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              onClick={(e) => handleScrollToSection(e, heading.id)}
              className={`block text-sm py-2 px-3 rounded-lg transition-all duration-200 border-l-2 
                ${
                  activeId === heading.id
                    ? "border-[#2d8c00] bg-[#2d8c00]/10 text-[#2d8c00] font-bold shadow-sm"
                    : "border-transparent text-slate-600 hover:text-[#2d8c00] hover:bg-slate-100 font-medium"
                }
                ${heading.level === 3 ? "ml-4 text-xs" : ""}
              `}
            >
              {heading.text}
            </a>
          ))}
        </nav>
      ) : (
        <p className="text-slate-400 text-sm">কোনো সূচিপত্র নেই</p>
      )}
    </div>
  );

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#68c20e] border-t-transparent rounded-full animate-spin"></div>
          <span className="text-slate-500 font-medium">লোড হচ্ছে...</span>
        </div>
      </div>
    );

  if (!article)
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-slate-50 ${notoSerifBengali.className}`}
      >
        <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100 max-w-md w-full">
          <h1 className="text-2xl font-bold mb-2 text-slate-800">
            নিবন্ধটি পাওয়া যায়নি
          </h1>
          <button
            onClick={() => router.back()}
            className="bg-[#2d8c00] text-white px-6 py-2.5 rounded-full hover:bg-[#267500] transition-colors font-medium"
          >
            ফিরে যান
          </button>
        </div>
      </div>
    );

  return (
    <div
      className={`min-h-screen bg-white text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-[100]"
        role="progressbar"
      >
        <div
          className="h-full bg-gradient-to-r from-[#68c20e] to-[#2d8c00] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="max-w-[1280px] mx-auto px-6 py-8 lg:py-12">
        {/* Navigation & Actions */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="group flex items-center gap-2 text-slate-500 hover:text-[#2d8c00] transition-colors"
          >
            <div className="p-2 rounded-full bg-slate-50 group-hover:bg-[#2d8c00]/10 transition-colors">
              <ChevronLeft size={20} />
            </div>
            <span className="font-medium hidden sm:inline">ফিরে যান</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              className="p-2.5 rounded-full text-slate-500 hover:bg-slate-50 hover:text-[#2d8c00] transition-colors"
              title="সেভ করুন"
            >
              <Bookmark size={20} />
            </button>
            <button
              className="p-2.5 rounded-full text-slate-500 hover:bg-slate-50 hover:text-[#2d8c00] transition-colors"
              title="শেয়ার করুন"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* Layout Grid: Left Sidebar (TOC) & Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 items-start">
          {/* --- Left Sidebar: Table of Contents (Desktop Only + Sticky) --- */}
          <aside className="hidden lg:block sticky top-24  overflow-y-auto pr-4 custom-scrollbar">
            {renderTableOfContents(false)}
          </aside>

          {/* --- Right Column: Main Content --- */}
          <article className="w-full min-w-0">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm mb-6 text-slate-500 flex-wrap">
              <Link
                href="/articles"
                className="hover:text-[#2d8c00] transition-colors"
              >
                ব্লগ
              </Link>
              <ChevronRight size={14} />
              <Link
                href={`/articles?category=${encodeURIComponent(
                  article.category,
                )}`}
                className="hover:text-[#2d8c00] transition-colors"
              >
                {article.category}
              </Link>
            </nav>

            {/* Header */}
            <header className="mb-10">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[#E8F7F0] text-[#2d8c00] text-xs font-bold uppercase tracking-wider border border-[#2d8c00]/20">
                  {article.category}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider">
                  {article.type}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-slate-900 mb-8">
                {article.title}
              </h1>

              {/* Author Meta (Mobile Visible) */}
              <div className="flex items-center justify-between border-y border-slate-100 py-6">
                <div className="flex items-center gap-4">
                  <div className="relative size-12 rounded-full overflow-hidden border border-slate-200">
                    <Image
                      src={article.authorImage}
                      alt={article.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-base">
                      {article.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      বিশেষজ্ঞ রিউমাটোলজিস্ট
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={15} className="text-[#68c20e]" />{" "}
                    {article.dateDisplay}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={15} className="text-[#68c20e]" />{" "}
                    {article.readTime}
                  </span>
                </div>
              </div>
            </header>

            {/* Hero Image */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg mb-10">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1000px) 100vw, 800px"
              />
            </div>

            {/* --- Mobile Table of Contents (Under Image, Non-Sticky) --- */}
            <div className="lg:hidden">{renderTableOfContents(true)}</div>

            {/* Dynamic Content with IDs */}
            <div
              className="prose prose-lg md:prose-xl prose-slate max-w-none 
              prose-headings:font-bold prose-headings:text-slate-900 prose-headings:scroll-mt-24
              prose-p:text-slate-700 prose-p:leading-8 
              prose-a:text-[#2d8c00] prose-a:no-underline hover:prose-a:underline
              prose-strong:text-slate-900 
              prose-li:marker:text-[#68c20e]"
            >
              <div dangerouslySetInnerHTML={{ __html: modifiedContent }} />
            </div>

            <hr className="my-12 border-slate-200" />

            {/* Author Box Footer */}
            <div className="bg-[#f8fcf5] rounded-3xl p-8 border border-[#e6f4d9]">
              <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
                <div className="relative size-24 shrink-0 rounded-2xl overflow-hidden shadow-sm border-2 border-white ring-2 ring-[#68c20e]/20">
                  <Image
                    alt={article.author}
                    src={article.authorImage}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {article.author}
                  </h4>
                  <p className="text-slate-600 text-base leading-relaxed mb-0">
                    {article.authorBio} ডা: সাদাব সাউদ সানী রোগীদের দীর্ঘমেয়াদী
                    বাত ব্যথা নিরাময়ে নিবেদিতপ্রাণ।
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
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
