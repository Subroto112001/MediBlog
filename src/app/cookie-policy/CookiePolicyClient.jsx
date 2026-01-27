"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import { Cookie } from "lucide-react";

/**
 * todo: Font Configuration
 * description: Configure Noto Serif Bengali font for Bengali text rendering
 */
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * todo: Cookie Policy Page Component
 * description: Displays the cookie policy information with structured data for SEO
 */
export default function CookiePolicy() {
  /**
   * todo: JSON-LD Structured Data
   * description: Schema.org markup for search engine rich snippets
   */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "কুকি পলিসি | আর্থ্রাইটিস কেয়ার",
    description: "আর্থ্রাইটিস কেয়ার কীভাবে কুকি ব্যবহার করে তার বিস্তারিত।",
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-[#101728] text-slate-900 dark:text-slate-100 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* SEO: JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <header className="mb-10 border-b border-slate-200 dark:border-slate-700 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="text-yellow-500" size={32} aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold">কুকি পলিসি</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            <time dateTime="2026-01-26">সর্বশেষ আপডেট: ২৬ জানুয়ারি, ২০২৬</time>
          </p>
        </header>

        <article
          className="prose prose-lg dark:prose-invert max-w-none"
          aria-labelledby="cookie-policy-title"
        >
          <h2 id="cookie-policy-title" className="sr-only">
            কুকি পলিসির বিস্তারিত
          </h2>
          <p>
            এই কুকি পলিসি ব্যাখ্যা করে যে আর্থ্রাইটিস কেয়ার কীভাবে কুকি এবং
            অনুরূপ প্রযুক্তি ব্যবহার করে যখন আপনি আমাদের ওয়েবসাইট ভিজিট করেন।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ১. আর্থ্রাইটিস কেয়ার সম্পর্কে
          </h2>
          <p>
            আর্থ্রাইটিস কেয়ার হলো বাংলাদেশের একটি বিশ্বস্ত স্বাস্থ্য তথ্য
            প্ল্যাটফর্ম যা বাতরোগ ও আর্থ্রাইটিস সম্পর্কিত সঠিক তথ্য প্রদান করে।
            ডা: সাদাব সাউদ সানী এর তত্ত্বাবধানে এই প্ল্যাটফর্ম পরিচালিত হয়।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">২. কুকি কি?</h2>
          <p>
            কুকি হলো ছোট টেক্সট ফাইল যা আপনার কম্পিউটার বা মোবাইল ডিভাইসে
            সংরক্ষিত হয় যখন আপনি একটি ওয়েবসাইট ভিজিট করেন। এটি ওয়েবসাইটকে
            আপনার ভিজিট সম্পর্কে তথ্য মনে রাখতে সাহায্য করে।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ৩. আমরা কিভাবে কুকি ব্যবহার করি?
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>প্রয়োজনীয় কুকিজ:</strong> আর্থ্রাইটিস কেয়ার সাইটের
              মৌলিক কার্যকারিতার জন্য এগুলি অপরিহার্য।
            </li>
            <li>
              <strong>পারফরম্যান্স কুকিজ:</strong> আমরা বুঝতে চেষ্টা করি
              ভিজিটররা কীভাবে আর্থ্রাইটিস সম্পর্কিত তথ্য ব্যবহার করছেন।
            </li>
            <li>
              <strong>ফাংশনাল কুকিজ:</strong> আপনার ভাষা পছন্দ বা পড়ার ইতিহাস
              মনে রাখার জন্য।
            </li>
            <li>
              <strong>অ্যানালিটিক্স কুকিজ:</strong> আমাদের আর্থ্রাইটিস সম্পর্কিত
              কন্টেন্ট উন্নত করতে সাহায্য করে।
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">৪. কুকি নিয়ন্ত্রণ</h2>
          <p>
            আপনি আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকি ব্লক বা মুছে ফেলতে পারেন।
            তবে মনে রাখবেন, কুকি অক্ষম করলে সাইটের কিছু অংশ সঠিকভাবে কাজ নাও
            করতে পারে।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">৫. যোগাযোগ</h2>
          <p>কুকি পলিসি সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:</p>
          <p className="mt-2">
            <strong>ইমেইল:</strong> info@arthritiscare.com.bd
          </p>
        </article>
      </main>
    </div>
  );
}
