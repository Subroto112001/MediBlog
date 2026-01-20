"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import Head from "next/head";
import { Cookie } from "lucide-react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function CookiePolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "কুকি পলিসি | HealthVerse",
    description: "HealthVerse কীভাবে কুকি ব্যবহার করে তার বিস্তারিত।",
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
        <title>কুকি পলিসি | HealthVerse</title>
      </Head>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <header className="mb-10 border-b border-slate-200 dark:border-slate-700 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <Cookie className="text-yellow-500" size={32} aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold">কুকি পলিসি</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            সর্বশেষ আপডেট: ২০ জানুয়ারি, ২০২৬
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            এই কুকি পলিসি ব্যাখ্যা করে যে হেলথভার্স কীভাবে কুকি এবং অনুরূপ
            প্রযুক্তি ব্যবহার করে যখন আপনি আমাদের ওয়েবসাইট ভিজিট করেন।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">১. কুকি কি?</h2>
          <p>
            কুকি হলো ছোট টেক্সট ফাইল যা আপনার কম্পিউটার বা মোবাইল ডিভাইসে
            সংরক্ষিত হয় যখন আপনি একটি ওয়েবসাইট ভিজিট করেন। এটি ওয়েবসাইটকে
            আপনার ভিজিট সম্পর্কে তথ্য মনে রাখতে সাহায্য করে।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ২. আমরা কিভাবে কুকি ব্যবহার করি?
          </h2>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <strong>প্রয়োজনীয় কুকিজ:</strong> সাইটের মৌলিক কার্যকারিতার জন্য
              এগুলি অপরিহার্য।
            </li>
            <li>
              <strong>পারফরম্যান্স কুকিজ:</strong> আমরা বুঝতে চেষ্টা করি
              ভিজিটররা কীভাবে সাইট ব্যবহার করছেন।
            </li>
            <li>
              <strong>ফাংশনাল কুকিজ:</strong> আপনার ভাষা পছন্দ বা লগইন তথ্য মনে
              রাখার জন্য।
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">৩. কুকি নিয়ন্ত্রণ</h2>
          <p>
            আপনি আপনার ব্রাউজার সেটিংসের মাধ্যমে কুকি ব্লক বা মুছে ফেলতে পারেন।
            তবে মনে রাখবেন, কুকি অক্ষম করলে সাইটের কিছু অংশ সঠিকভাবে কাজ নাও
            করতে পারে।
          </p>
        </article>
      </main>
    </div>
  );
}
