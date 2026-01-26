"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import Head from "next/head";
import { FileText } from "lucide-react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function TermsOfService() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "ব্যবহারের শর্তাবলী | আর্থ্রাইটিস কেয়ার",
    description: "আর্থ্রাইটিস কেয়ার ব্যবহারের নিয়ম ও শর্তাবলী।",
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
        <title>ব্যবহারের শর্তাবলী | আর্থ্রাইটিস কেয়ার</title>
      </Head>

      <main className="max-w-[800px] mx-auto px-6 py-16">
        <header className="mb-10 border-b border-slate-200 dark:border-slate-700 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-[#BCE7FA]" size={32} aria-hidden="true" />
            <h1 className="text-3xl md:text-4xl font-bold">
              ব্যবহারের শর্তাবলী
            </h1>
          </div>
          <p className="text-slate-600 dark:text-slate-400">
            সর্বশেষ আপডেট: ২৬ জানুয়ারি, ২০২৬
          </p>
        </header>

        <article className="prose prose-lg dark:prose-invert max-w-none">
          <p>
            আর্থ্রাইটিস কেয়ার ব্যবহার করার জন্য আপনাকে ধন্যবাদ। আমাদের
            ওয়েবসাইট বা পরিষেবাগুলি ব্যবহার করে, আপনি এই শর্তাবলীতে সম্মত
            হচ্ছেন।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ১. আর্থ্রাইটিস কেয়ার সম্পর্কে
          </h2>
          <p>
            আর্থ্রাইটিস কেয়ার হলো বাংলাদেশের একটি বিশ্বস্ত স্বাস্থ্য তথ্য
            প্ল্যাটফর্ম যা বাতরোগ ও আর্থ্রাইটিস সম্পর্কিত সঠিক তথ্য প্রদান করে।
            ডা: সাদাব সাউদ সানী এর তত্ত্বাবধানে এই প্ল্যাটফর্ম পরিচালিত হয়।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">২. শর্তাবলী গ্রহণ</h2>
          <p>
            এই ওয়েবসাইটটি অ্যাক্সেস করার মাধ্যমে, আপনি এই শর্তাবলী এবং প্রযোজ্য
            সমস্ত আইন মেনে চলতে সম্মত হচ্ছেন। আপনি যদি এই শর্তগুলির কোনোটির সাথে
            একমত না হন, তবে আপনার এই সাইটটি ব্যবহার করা উচিত নয়।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">৩. কন্টেন্ট ব্যবহার</h2>
          <p>
            এই সাইটের সমস্ত কন্টেন্ট (টেক্সট, গ্রাফিক্স, লোগো, আর্থ্রাইটিস
            সম্পর্কিত তথ্য) আর্থ্রাইটিস কেয়ার-এর সম্পত্তি। ব্যক্তিগত এবং
            অবাণিজ্যিক ব্যবহার ব্যতীত অন্য কোনো উদ্দেশ্যে এই কন্টেন্ট ব্যবহার
            করা নিষিদ্ধ।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            ৪. স্বাস্থ্য সংক্রান্ত দায়বদ্ধতা
          </h2>
          <p>
            আর্থ্রাইটিস কেয়ার-এ প্রদত্ত তথ্য শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে।
            এটি কোনো পেশাদার চিকিৎসা পরামর্শের বিকল্প নয়। যেকোনো স্বাস্থ্য
            সমস্যার জন্য সরাসরি ডাক্তারের সাথে পরামর্শ করুন।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">৫. ব্যবহারকারীর আচরণ</h2>
          <p>আপনি সম্মত হচ্ছেন যে:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>আপনি সাইটের নিরাপত্তা বিঘ্নিত করবেন না।</li>
            <li>ভুল বা বিভ্রান্তিকর স্বাস্থ্য তথ্য প্রদান করবেন না।</li>
            <li>অন্য ব্যবহারকারীদের হয়রানি করবেন না।</li>
            <li>আর্থ্রাইটিস সম্পর্কিত ভুল তথ্য ছড়াবেন না।</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">৬. পরিবর্তনসমূহ</h2>
          <p>
            আমরা যেকোনো সময় এই শর্তাবলী পরিবর্তন করার অধিকার রাখি। পরিবর্তনের
            পর সাইটটি ব্যবহার করা মানে আপনি নতুন শর্তাবলী মেনে নিয়েছেন।
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">৭. যোগাযোগ</h2>
          <p>শর্তাবলী সম্পর্কে কোনো প্রশ্ন থাকলে আমাদের সাথে যোগাযোগ করুন:</p>
          <p className="mt-2">
            <strong>ইমেইল:</strong> info@arthritiscare.com.bd
          </p>
        </article>
      </main>
    </div>
  );
}
