"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import Head from "next/head";
import { ShieldCheck } from "lucide-react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function PrivacyPolicy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "গোপনীয়তা নীতি | HealthVerse",
    description:
      "HealthVerse ব্যবহারকারীদের তথ্যের সুরক্ষা এবং ব্যবহারের নীতিমালা।",
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
        <title>গোপনীয়তা নীতি | HealthVerse</title>
        <meta
          name="description"
          content="HealthVerse ব্যবহারকারীদের তথ্যের সুরক্ষা এবং ব্যবহারের নীতিমালা।"
        />
      </Head>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <header className="mb-10 border-b border-slate-200 dark:border-slate-700 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck
              className="text-[#70E000]"
              size={32}
              aria-hidden="true"
            />
            <h1 className="text-3xl md:text-4xl font-bold">গোপনীয়তা নীতি</h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            সর্বশেষ আপডেট: ২০ জানুয়ারি, ২০২৬
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            হেলথভার্স-এ, আমরা আপনার গোপনীয়তাকে অত্যন্ত গুরুত্ব সহকারে দেখি। এই
            গোপনীয়তা নীতি বর্ণনা করে যে আমরা কীভাবে আপনার ব্যক্তিগত তথ্য
            সংগ্রহ, ব্যবহার এবং সুরক্ষা করি।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ১. আমরা কি তথ্য সংগ্রহ করি?
          </h2>
          <p>
            আমাদের সেবা উন্নত করার জন্য আমরা নিম্নলিখিত তথ্য সংগ্রহ করতে পারি:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>ব্যক্তিগত শনাক্তকরণ তথ্য (নাম, ইমেল ঠিকানা, ফোন নম্বর)।</li>
            <li>
              স্বাস্থ্য সংক্রান্ত তথ্য যা আপনি স্বেচ্ছায় আমাদের প্রদান করেন।
            </li>
            <li>ব্রাউজিং ডেটা এবং কুকিজ।</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">২. তথ্যের ব্যবহার</h2>
          <p>আপনার তথ্য আমরা নিম্নলিখিত কাজে ব্যবহার করি:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>আমাদের সেবা প্রদান এবং পরিচালনা করতে।</li>
            <li>
              আপনাকে নিউজলেটার এবং স্বাস্থ্য টিপস পাঠাতে (আপনার সম্মতি
              সাপেক্ষে)।
            </li>
            <li>
              ব্যবহারকারীর অভিজ্ঞতা উন্নত করতে এবং সাইটের পারফরম্যান্স বিশ্লেষণ
              করতে।
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">৩. তথ্য সুরক্ষা</h2>
          <p>
            আমরা আপনার ব্যক্তিগত তথ্যের অননুমোদিত অ্যাক্সেস বা প্রকাশ রোধ করতে
            উপযুক্ত প্রযুক্তিগত এবং সাংগঠনিক ব্যবস্থা গ্রহণ করি।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">৪. আপনার অধিকার</h2>
          <p>
            আপনার নিজের তথ্যের উপর সম্পূর্ণ নিয়ন্ত্রণ রয়েছে। আপনি যেকোনো সময়
            আপনার তথ্য মুছে ফেলার বা পরিবর্তন করার অনুরোধ করতে পারেন।
          </p>
        </article>
      </main>
    </div>
  );
}
