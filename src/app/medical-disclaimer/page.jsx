"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import Head from "next/head";
import { AlertTriangle } from "lucide-react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function MedicalDisclaimer() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "মেডিকেল দাবিত্যাগ | HealthVerse",
    description: "HealthVerse এর মেডিকেল তথ্যের সীমাবদ্ধতা এবং দাবিত্যাগ।",
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-[#101728] text-slate-900 dark:text-slate-100 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Head>
        <title>মেডিকেল দাবিত্যাগ | HealthVerse</title>
      </Head>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <header className="mb-10 border-b border-slate-200 dark:border-slate-700 pb-6">
          <div className="flex items-center gap-3 mb-4 text-red-500">
            <AlertTriangle size={32} aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              মেডিকেল দাবিত্যাগ
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            অনুগ্রহ করে মনোযোগ সহকারে পড়ুন
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-8 rounded">
            <p className="font-bold text-red-700 dark:text-red-300">
              জরুরি অবস্থা: আপনি যদি মনে করেন আপনার জরুরি চিকিৎসা প্রয়োজন, তবে
              অবিলম্বে আপনার ডাক্তারকে কল করুন অথবা নিকটস্থ হাসপাতালে যান।
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ১. কোনো চিকিৎসা পরামর্শ নয়
          </h2>
          <p>
            হেলথভার্স-এ প্রকাশিত কন্টেন্ট (টেক্সট, গ্রাফিক্স, ছবি এবং অন্যান্য
            উপাদান) শুধুমাত্র সাধারণ তথ্যের উদ্দেশ্যে তৈরি। এটি পেশাদার চিকিৎসা
            পরামর্শ, রোগ নির্ণয় বা চিকিৎসার বিকল্প নয়।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ২. ডাক্তারের পরামর্শ নিন
          </h2>
          <p>
            যেকোনো শারীরিক সমস্যা বা চিকিৎসা সংক্রান্ত প্রশ্নের জন্য সর্বদা
            আপনার চিকিৎসক বা যোগ্য স্বাস্থ্যসেবা প্রদানকারীর পরামর্শ নিন।
            ইন্টারনেটে কিছু পড়েছেন বলে পেশাদার চিকিৎসকের পরামর্শ উপেক্ষা করবেন
            না বা নিতে দেরি করবেন না।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ৩. কোনো গ্যারান্টি নেই
          </h2>
          <p>
            হেলথভার্স সাইটে প্রকাশিত তথ্যের সঠিকতা, সময়োপযোগিতা বা সম্পূর্ণতার
            কোনো গ্যারান্টি দেয় না। চিকিৎসা বিজ্ঞান প্রতিনিয়ত পরিবর্তিত হচ্ছে,
            তাই কিছু তথ্য পুরোনো হতে পারে।
          </p>
        </article>
      </main>
    </div>
  );
}
