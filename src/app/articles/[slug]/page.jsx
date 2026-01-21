"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // To get the slug
import { ARTICLES_DB } from "@/lib/articlesData"; // Import Data
import Head from "next/head";
import { Noto_Serif_Bengali } from "next/font/google";
import {
  CheckCircle2,
  Clock,
  Calendar,
  Share2,
  Mail,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import Image from "next/image";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function ArticleDetail() {
  const params = useParams(); // Get slug from URL
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // --- Fetch Data Logic ---
  useEffect(() => {
    if (params?.slug) {
      // Find the article that matches the slug
      const foundArticle = ARTICLES_DB.find((a) => a.slug === params.slug);
      setArticle(foundArticle);
      setLoading(false);
    }
  }, [params]);

  // --- Scroll Progress Logic ---
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

  // --- Loading State ---
  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        লোড হচ্ছে...
      </div>
    );

  // --- 404 State ---
  if (!article)
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center ${notoSerifBengali.className}`}
      >
        <h1 className="text-2xl font-bold mb-4">নিবন্ধটি পাওয়া যায়নি</h1>
        <button
          onClick={() => router.back()}
          className="text-sky-600 hover:underline"
        >
          ফিরে যান
        </button>
      </div>
    );

  // --- SEO Schema ---
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalScholarlyArticle",
    headline: article.title,
    image: article.image,
    author: { "@type": "Physician", name: article.author },
    datePublished: article.date,
    description: article.excerpt,
  };

  return (
    <div
      className={`min-h-screen bg-white text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* --- Reading Progress Bar --- */}
      <div
        className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-[100]"
        role="progressbar"
        aria-valuenow={readingProgress}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="h-full bg-[#70E000] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <main className="max-w-[1440px] mx-auto px-6 py-12 lg:py-16">
        {/* --- Header --- */}
        <header className="max-w-[800px] mx-auto text-center mb-16 relative">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="absolute left-0 top-0 md:-left-20 p-2 rounded-full hover:bg-slate-100 transition-colors hidden md:block"
            aria-label="ফিরে যান"
          >
            <ChevronLeft size={24} className="text-slate-500" />
          </button>

          <div className="flex justify-center gap-3 mb-6">
            <span className="px-4 py-1 rounded-full bg-[#BCE7FA] text-slate-900 text-xs font-bold tracking-wide uppercase">
              {article.category}
            </span>
            <span className="px-4 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold tracking-wide uppercase">
              {article.type}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.3] text-slate-900 mb-8">
            {article.title}
          </h1>

          <div className="flex items-center justify-center gap-4">
            <div className="size-14 rounded-full border-2 border-[#BCE7FA] p-0.5">
              <Image
                src={article.authorImage}
                alt={article.author}
                width={32}
                height={32}
                className="w-10 h-10 rounded-full bg-slate-200 border border-slate-200 object-cover"
              />
            </div>
            <div className="text-left">
              <p className="font-bold text-slate-900 text-lg">
                {article.author}
              </p>
              <div className="flex items-center gap-3 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {article.dateDisplay}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {article.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* --- Content Layout --- */}
        <div className="relative flex justify-center gap-16">
          {/* Main Article Body */}
          <article className="max-w-[800px] w-full text-lg leading-relaxed text-slate-700">
            {/* Hero Image inside article */}
            <div className="mb-10 rounded-2xl overflow-hidden shadow-sm">
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* DangerouslySetInnerHTML is used here because we are passing HTML strings 
                from our database. In a real app, use a markdown parser or sanitizer.
            */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:mb-6 prose-li:mb-2 prose-strong:text-slate-900"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            <hr className="my-16 border-slate-200" />

            {/* Author Bio Box */}
            <section className="bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-100 mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="size-28 shrink-0 rounded-2xl overflow-hidden shadow-sm border-2 border-white">
                  <img
                    alt={article.author}
                    className="w-full h-full object-cover"
                    src={article.authorImage}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2">
                    {article.author}
                  </h4>
                  <p className="text-slate-600 text-base leading-relaxed mb-6">
                    {article.authorBio}
                  </p>
                  <button className="bg-[#BCE7FA] text-slate-900 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#a0dcf8] transition-all">
                    প্রোফাইল দেখুন
                  </button>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>
    </div>
  );
}
