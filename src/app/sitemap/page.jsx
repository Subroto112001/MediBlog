"use client";

import React from "react";
import { Noto_Serif_Bengali } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { MapPin, Users, BookOpen, Home, Shield } from "lucide-react";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Sitemap() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SitemapPage",
    name: "সাইটম্যাপ | সাবাব সানি আর্থ্রাইটিস কেয়ার",
    description: "আর্থ্রাইটিস, বাতরোগ এবং জয়েন্ট স্বাস্থ্য সম্পর্কিত সকল প্রয়োজনীয় নিবন্ধ ও পৃষ্ঠার তালিকা।",
    url: "https://yourdomain.com/sitemap", 
    publisher: {
      "@type": "Organization",
      "name": "সাবাব সানি আর্থ্রাইটিস কেয়ার",
    },
  };

  const sitemapSections = [
    {
      title: "প্রধান পৃষ্ঠাসমূহ",
      icon: Home,
      iconColor: "text-blue-500",
      links: [
        { name: "হোম", href: "/" },
        { name: "ব্লগ", href: "/articles" },
        { name: "লেখক পরিচিতি", href: "/writer" },
      ],
    },
    {
      title: "আইনি তথ্য",
      icon: Shield,
      iconColor: "text-purple-600",
      links: [
        { name: "গোপনীয়তা নীতি", href: "/privacy-policy" },
        { name: "কুকি পলিসি", href: "/cookie-policy" },
        { name: "ব্যবহারের শর্তাবলী", href: "/terms-of-service" },
      ],
    },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-50 dark:bg-[#0f172a] text-slate-900 dark:text-slate-100 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <Head>
        <title>সাইটম্যাপ | সাবাব সানি আর্থ্রাইটিস কেয়ার</title>
        <meta name="description" content="আর্থ্রাইটিস কেয়ার ওয়েবসাইটের সম্পূর্ণ সাইটম্যাপ।" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <main className="max-w-[1100px] mx-auto px-5 sm:px-8 py-10 md:py-16">
        {/* --- Header Section --- */}
        <header className="mb-10 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-3 md:gap-4 mb-3">
            <div className="p-2 bg-[#2D8C00]/10 rounded-xl">
              <MapPin className="text-[#2D8C00]" size={32} aria-hidden="true" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              সাইটম্যাপ
            </h1>
          </div>
          <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
            আর্থ্রাইটিস কেয়ার ওয়েবসাইটের সকল পৃষ্ঠা এবং গুরুত্বপূর্ণ তথ্যের একটি সুসংগঠিত তালিকা।
          </p>
        </header>

        {/* --- Navigation Grid: Optimized for Mobile/Tablet/Desktop --- */}
        <nav aria-label="Sitemap Navigation">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {sitemapSections.map((section, index) => (
              <section
                key={index}
                className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col transition-all hover:shadow-md"
                aria-labelledby={`section-heading-${index}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    <section.icon
                      className={section.iconColor}
                      size={24}
                      aria-hidden="true"
                    />
                  </div>
                  <h2 id={`section-heading-${index}`} className="text-xl font-bold">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-[#2D8C00] dark:hover:text-[#2D8C00] transition-all flex items-center gap-3 group py-1"
                      >
                        <span
                          className="w-2 h-2 bg-slate-300 dark:bg-slate-600 group-hover:bg-[#2D8C00] rounded-full transition-colors flex-shrink-0"
                          aria-hidden="true"
                        ></span>
                        <span className="font-medium text-[15px] md:text-base">
                          {link.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </nav>

        {/* --- About Section --- */}
        <article className="mt-12 bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200 dark:border-slate-800">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Users className="text-blue-500" size={28} aria-hidden="true" />
            আর্থ্রাইটিস কেয়ার সম্পর্কে
          </h2>
          <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            <p>
              আর্থ্রাইটিস কেয়ার হলো বাংলাদেশের একটি বিশ্বস্ত স্বাস্থ্য তথ্য
              প্ল্যাটফর্ম যা বাতরোগ ও আর্থ্রাইটিস সম্পর্কিত সঠিক তথ্য প্রদান
              করে। <strong>ডা: সাদাব সাউদ সানী</strong>-এর তত্ত্বাবধানে এই
              প্ল্যাটফর্ম পরিচালিত হয়।
            </p>
            <p>
              আমাদের লক্ষ্য হলো বাংলা ভাষায় আর্থ্রাইটিস সম্পর্কিত সঠিক ও
              বিজ্ঞানভিত্তিক তথ্য সরবরাহ করা এবং মানুষকে তাদের জয়েন্ট স্বাস্থ্য
              সম্পর্কে সচেতন করা।
            </p>
          </div>
        </article>

        {/* --- Contact Footer --- */}
        <footer className="mt-12 text-center border-t border-slate-200 dark:border-slate-800 pt-8">
          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base">
            যেকোনো জিজ্ঞাসায় যোগাযোগ করুন:{" "}
            <a
              href="mailto:info@arthritiscare.com.bd"
              className="text-[#2D8C00] font-bold hover:underline decoration-2 underline-offset-4 transition-all"
            >
              info@arthritiscare.com.bd
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
}