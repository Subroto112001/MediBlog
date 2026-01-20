"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  MapPin,
  Calendar,
  Share2,
  Star,
  CheckCircle2,
  ArrowRight,
  Lock,
  Globe,
  Mail,
  Camera,
  ChevronLeft,
  AlertCircle,
  Home,
} from "lucide-react";
import { Noto_Serif_Bengali } from "next/font/google";
import Link from "next/link";
import { SPECIALISTS } from "@/lib/doctorsData";
;


// --- Font Configuration ---
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function DoctorProfileDynamic() {
  const params = useParams();
  const router = useRouter();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        // Simulate slight network delay for better UX feeling
        await new Promise((resolve) => setTimeout(resolve, 300));

        if (!params?.id) {
          throw new Error("আইডি পাওয়া যায়নি");
        }

        // Find doctor from the shared list
        const foundDoctor = SPECIALISTS.find(
          (d) => d.id.toString() === params.id,
        );

        if (!foundDoctor) {
          setError("404");
        } else {
          setDoctor(foundDoctor);
        }
      } catch (err) {
        console.error(err);
        setError("generic");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [params]);

  // Loading View
  if (loading) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#101728] ${notoSerifBengali.className}`}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#70E000]"></div>
        <p className="mt-4 text-slate-500">প্রোফাইল লোড হচ্ছে...</p>
      </div>
    );
  }

  // Error View
  if (error || !doctor) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#101728] px-6 text-center ${notoSerifBengali.className}`}
      >
        <AlertCircle size={48} className="text-red-500 mb-4" />
        <h1 className="text-2xl font-bold mb-2">
          {error === "404" ? "ডাক্তার খুঁজে পাওয়া যায়নি" : "কিছু ভুল হয়েছে"}
        </h1>
        <button
          onClick={() => router.back()}
          className="text-sky-600 hover:underline font-bold mt-4"
        >
          ফিরে যান
        </button>
      </div>
    );
  }

  // Main Profile View
  return (
    <main
      className={`min-h-screen bg-white dark:bg-[#101728] text-slate-900 dark:text-slate-100 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50 md:left-20">
        <button
          onClick={() => router.back()}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur p-2 rounded-full shadow-md hover:bg-[#BCE7FA] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          aria-label="ফিরে যান"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* --- Profile Header --- */}
      <section className="relative">
        <div
          className="h-[320px] w-full bg-cover bg-center relative"
          style={{ backgroundImage: `url('${doctor.cover}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#101728] via-transparent opacity-70"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            {/* Avatar */}
            <div className="relative">
              <div className="size-44 rounded-full border-4 border-white dark:border-[#101728] overflow-hidden shadow-xl bg-slate-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-[#70E000] text-white p-1.5 rounded-full border-2 border-white shadow-lg">
                <CheckCircle2 size={16} strokeWidth={3} />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 pb-2 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-4xl font-bold mb-2">{doctor.name}</h1>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-[#BCE7FA] text-slate-900 px-3 py-1 rounded text-sm font-bold">
                      {doctor.displayRole}
                    </span>
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium text-sm">
                      <MapPin size={16} />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm">{doctor.designation}</p>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 md:flex-none bg-[#70E000] hover:bg-[#62c400] text-white font-bold px-8 py-3 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2">
                    <Calendar size={20} /> অ্যাপয়েন্টমেন্ট
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {doctor.stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
              {doctor.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center"
                >
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* --- About --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">{doctor.name} সম্পর্কে</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 mb-6">
            {doctor.fullBiography || doctor.bio}
          </p>

          <div className="flex gap-6 mt-8">
            <button className="text-slate-400 hover:text-sky-500">
              <Globe size={24} />
            </button>
            <button className="text-slate-400 hover:text-sky-500">
              <Mail size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- Articles --- */}
      {doctor.articles && doctor.articles.length > 0 && (
        <section className="bg-slate-50 dark:bg-slate-900/50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">
              প্রকাশিত নিবন্ধ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctor.articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white dark:bg-[#101728] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                    <span className="bg-[#BCE7FA] text-slate-900 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 hover:text-sky-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#70E000] font-bold text-sm">
                    পড়ুন <ArrowRight size={16} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
