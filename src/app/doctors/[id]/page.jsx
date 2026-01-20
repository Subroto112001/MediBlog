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

// --- Font Configuration ---
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

// --- FULL DATABASE OF DOCTORS ---
const DOCTORS_DB = [
  {
    id: 1,
    name: "ডা. সুব্রত বর্মন",
    title: "সিনিয়র নিউরোলজিস্ট",
    location: "ঢাকা, বাংলাদেশ",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
    cover:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200&h=400",
    stats: [
      { label: "অভিজ্ঞতা", value: "১২ বছর" },
      { label: "অস্ত্রোপচার", value: "৩০০০+" },
      { label: "রেটিং", value: "৪.৮" },
      { label: "রোগী", value: "৮ হাজার" },
    ],
    about: [
      "ডা. সুব্রত বর্মন দেশের অন্যতম শীর্ষস্থানীয় নিউরোলজিস্ট। তিনি জটিল স্নায়ুরোগ, স্ট্রোক পরবর্তী পুনর্বাসন এবং দীর্ঘস্থায়ী মাথাব্যথা নিরাময়ে বিশেষজ্ঞ। তার চিকিৎসা পদ্ধতি সম্পূর্ণ রোগী-কেন্দ্রিক।",
      "তিনি ঢাকা মেডিকেল কলেজ থেকে এমবিবিএস এবং নিউরোলজিতে এফসিপিএস সম্পন্ন করেছেন। বর্তমানে তিনি একটি স্বনামধন্য হাসপাতালের নিউরো-মেডিসিন বিভাগের প্রধান হিসেবে কর্মরত আছেন।",
    ],
    articles: [
      {
        id: 101,
        title: "মাইগ্রেনের ব্যথা: কারণ ও প্রতিকার",
        category: "নিউরোলজি",
        readTime: "৫ মিনিট",
        date: "২০২৩-১১-১০",
      },
      {
        id: 102,
        title: "স্ট্রোকের লক্ষণ এবং তাৎক্ষণিক করণীয়",
        category: "স্বাস্থ্য সচেতনতা",
        readTime: "৭ মিনিট",
        date: "২০২৩-১০-১৫",
      },
    ],
  },
  {
    id: 2,
    name: "ডা. সারাহ জেনকিন্স",
    title: "সিনিয়র কার্ডিওলজিস্ট",
    location: "লন্ডন, যুক্তরাজ্য",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400",
    cover:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=1200&h=400",
    stats: [
      { label: "অভিজ্ঞতা", value: "১৫ বছর" },
      { label: "নিবন্ধ", value: "৫০০+" },
      { label: "রেটিং", value: "৪.৯" },
      { label: "পাঠক", value: "১২ হাজার" },
    ],
    about: [
      "ডা. সারাহ জেনকিন্স একজন বোর্ড-প্রত্যয়িত সিনিয়র কার্ডিওলজিস্ট। তার কাজ মূলত প্রতিরোধমূলক কার্ডিওলজি এবং লাইফস্টাইল মেডিসিনের সমন্বয়ের উপর গুরুত্ব দেয়।",
      "তিনি বিশ্বাস করেন যে একজন সচেতন রোগীই একজন ক্ষমতায়িত রোগী। সেন্ট মেরি হার্ট ইনস্টিটিউটে তার ক্লিনিকাল দায়িত্বের বাইরে, তিনি একজন নিবেদিত স্বাস্থ্য গবেষক।",
    ],
    articles: [
      {
        id: 201,
        title: "৪০-এর পর হার্টের স্বাস্থ্য",
        category: "কার্ডিওলজি",
        readTime: "৮ মিনিট",
        date: "২০২৩-১০-২৪",
      },
      {
        id: 202,
        title: "ভূমধ্যসাগরীয় ডায়েট ও হার্ট",
        category: "পুষ্টি",
        readTime: "৬ মিনিট",
        date: "২০২৩-১০-১২",
      },
    ],
  },
  {
    id: 3,
    name: "ডা. মাইকেল চেন",
    title: "শিশু বিশেষজ্ঞ (পেডিয়াট্রিশিয়ান)",
    location: "সিঙ্গাপুর সিটি",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400",
    cover:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200&h=400",
    stats: [
      { label: "অভিজ্ঞতা", value: "৮ বছর" },
      { label: "টিকা প্রদান", value: "১৫০০০+" },
      { label: "রেটিং", value: "৪.৯" },
      { label: "সুস্থ শিশু", value: "৫ হাজার" },
    ],
    about: [
      "ডা. মাইকেল চেন শিশুদের বিকাশ এবং কৈশোরকালীন হরমোনজনিত সমস্যায় বিশেষ দক্ষ। তিনি শিশুদের সাথে বন্ধুত্বপূর্ণ আচরণের জন্য অত্যন্ত জনপ্রিয়।",
      "তিনি পিতামাতাদের পুষ্টি এবং শিশুদের মানসিক বিকাশের বিষয়ে নিয়মিত কাউন্সেলিং প্রদান করেন।",
    ],
    articles: [
      {
        id: 301,
        title: "শিশুর প্রথম বছরের যত্ন",
        category: "শিশু স্বাস্থ্য",
        readTime: "৬ মিনিট",
        date: "২০২৩-০৯-২০",
      },
    ],
  },
  {
    id: 4,
    name: "ডা. এলিনা রদ্রিগেজ",
    title: "কনসালটেন্ট ডার্মাটোলজিস্ট",
    location: "মাদ্রিদ, স্পেন",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400",
    cover:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200&h=400",
    stats: [
      { label: "অভিজ্ঞতা", value: "১০ বছর" },
      { label: "চিকিৎসা", value: "৪০০০+" },
      { label: "রেটিং", value: "৪.৭" },
      { label: "পরামর্শ", value: "অনলাইন" },
    ],
    about: [
      "ডা. এলিনা রদ্রিগেজ ক্লিনিক্যাল ডার্মাটোলজি এবং লেজার চিকিৎসায় বিশেষজ্ঞ। তিনি ব্রণ, একজিমা এবং ত্বকের ক্যানসার স্ক্রিনিং-এ বিশেষ পারদর্শী।",
      "তিনি আন্তর্জাতিক ডার্মাটোলজি সোসাইটির একজন সক্রিয় সদস্য এবং নিয়মিত গবেষণা পত্র প্রকাশ করেন।",
    ],
    articles: [
      {
        id: 401,
        title: "শীতকালে ত্বকের যত্ন",
        category: "চর্মরোগ",
        readTime: "৪ মিনিট",
        date: "২০২৩-১২-০১",
      },
    ],
  },
];

export default function DoctorProfileBn() {
  const params = useParams();
  const router = useRouter();

  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Error State

  useEffect(() => {
    // Simulated Async Data Fetching
    const fetchDoctor = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 600));

        if (!params?.id) {
          throw new Error("আইডি পাওয়া যায়নি");
        }

        const foundDoctor = DOCTORS_DB.find(
          (d) => d.id.toString() === params.id,
        );

        if (!foundDoctor) {
          setError("404"); // Specific error code for Not Found
        } else {
          setDoctor(foundDoctor);
        }
      } catch (err) {
        console.error(err);
        setError("একটি সমস্যা হয়েছে। অনুগ্রহ করে পরে আবার চেষ্টা করুন।");
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [params]);

  // --- 1. Loading State (Skeleton / Spinner) ---
  if (loading) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#101728] ${notoSerifBengali.className}`}
      >
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#70E000]"
          role="status"
        >
          <span className="sr-only">লোড হচ্ছে...</span>
        </div>
        <p className="mt-4 text-slate-500 animate-pulse">
          প্রোফাইল লোড হচ্ছে...
        </p>
      </div>
    );
  }

  // --- 2. Error State (404 or Generic) ---
  if (error) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-white dark:bg-[#101728] px-6 text-center ${notoSerifBengali.className}`}
        role="alert"
      >
        <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-full mb-6">
          <AlertCircle size={48} className="text-red-500 dark:text-red-400" />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
          {error === "404" ? "ডাক্তার খুঁজে পাওয়া যায়নি" : "ওহ! কিছু ভুল হয়েছে"}
        </h1>

        <p className="text-slate-600 dark:text-slate-400 max-w-md mb-8 leading-relaxed">
          {error === "404"
            ? "আপনি যে বিশেষজ্ঞের খোঁজ করছেন তা আমাদের ডেটাবেসে নেই বা লিংকটি ভুল হতে পারে।"
            : "সার্ভারে সংযোগ করতে সমস্যা হচ্ছে। আপনার ইন্টারনেট সংযোগ পরীক্ষা করুন।"}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            ফিরে যান
          </button>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg bg-[#70E000] hover:bg-[#62c400] text-white font-bold shadow-lg shadow-[#70E000]/20 transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#70E000]/40"
          >
            <Home size={18} />
            হোম পেজ
          </Link>
        </div>
      </div>
    );
  }

  // --- 3. Success State (Profile) ---
  return (
    <main
      className={`min-h-screen bg-white dark:bg-[#101728] text-slate-900 dark:text-slate-100 ${notoSerifBengali.className}`}
      lang="bn"
    >
      {/* Back Button (Floating) */}
      <div className="fixed top-24 left-6 z-50 md:left-20">
        <button
          onClick={() => router.back()}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur p-2 rounded-full shadow-md border border-slate-100 dark:border-slate-800 hover:bg-[#BCE7FA] hover:text-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BCE7FA]"
          aria-label="পূর্ববর্তী পৃষ্ঠায় ফিরে যান"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* --- Profile Header / Hero --- */}
      <section aria-labelledby="doctor-name" className="relative">
        <div
          className="h-[320px] w-full bg-cover bg-center relative"
          style={{ backgroundImage: `url('${doctor.cover}')` }}
          role="img"
          aria-label="কভার ছবি"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#101728] via-transparent opacity-70"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10">
          <div className="flex flex-col md:flex-row items-end gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
            {/* Avatar */}
            <div className="relative group">
              <div className="size-44 rounded-full border-4 border-white dark:border-[#101728] overflow-hidden shadow-xl bg-slate-200">
                <img
                  src={doctor.image}
                  alt={`${doctor.name} এর ছবি`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute bottom-2 right-2 bg-[#70E000] text-white p-1.5 rounded-full border-2 border-white dark:border-[#101728] shadow-lg"
                title="যাচাইকৃত প্রোফাইল"
              >
                <CheckCircle2
                  size={16}
                  strokeWidth={3}
                  aria-label="যাচাইকৃত ডাক্তার"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 pb-2 w-full">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1
                    id="doctor-name"
                    className="text-4xl font-bold text-slate-900 dark:text-white mb-2"
                  >
                    {doctor.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="bg-[#BCE7FA] text-slate-900 px-3 py-1 rounded text-sm font-bold">
                      {doctor.title}
                    </span>
                    <span
                      className="hidden sm:block h-1 w-1 bg-slate-300 dark:bg-slate-700 rounded-full"
                      aria-hidden="true"
                    ></span>
                    <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium text-sm">
                      <MapPin size={16} aria-hidden="true" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 md:flex-none bg-[#70E000] hover:bg-[#62c400] text-white font-bold px-8 py-3 rounded-lg shadow-lg shadow-[#70E000]/20 transition-all flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#70E000]/40">
                    <Calendar size={20} aria-hidden="true" />
                    অ্যাপয়েন্টমেন্ট
                  </button>
                  <button
                    className="p-3 rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
                    aria-label="শেয়ার করুন"
                  >
                    <Share2 size={20} className="text-slate-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8"
            role="list"
            aria-label="পরিসংখ্যান"
          >
            {doctor.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-xl border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center"
              >
                <span className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </span>
                {stat.label.includes("রেটিং") && (
                  <Star
                    size={12}
                    className="text-yellow-500 fill-yellow-500 my-1"
                    aria-hidden="true"
                  />
                )}
                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- About --- */}
      <section
        className="max-w-5xl mx-auto px-6 py-12"
        aria-labelledby="about-title"
      >
        <div className="max-w-3xl">
          <h2
            id="about-title"
            className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
          >
            {doctor.name} সম্পর্কে
          </h2>
          <div className="text-lg leading-relaxed text-slate-600 dark:text-slate-400 space-y-6">
            {doctor.about.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="flex gap-6 mt-8">
            <button
              className="text-slate-400 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded p-1"
              aria-label="ওয়েবসাইট"
            >
              <Globe size={24} />
            </button>
            <button
              className="text-slate-400 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded p-1"
              aria-label="ইমেইল"
            >
              <Mail size={24} />
            </button>
            <button
              className="text-slate-400 hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded p-1"
              aria-label="গ্যালারি"
            >
              <Camera size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* --- Articles --- */}
      {doctor.articles && doctor.articles.length > 0 && (
        <section
          className="bg-slate-50 dark:bg-slate-900/50 py-20"
          aria-labelledby="articles-title"
        >
          <div className="max-w-7xl mx-auto px-6">
            <h2
              id="articles-title"
              className="text-3xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight"
            >
              {doctor.name} এর প্রকাশিত নিবন্ধ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctor.articles.map((article) => (
                <article
                  key={article.id}
                  className="bg-white dark:bg-[#101728] rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 mb-3">
                    <span className="bg-[#BCE7FA] text-slate-900 px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 hover:text-sky-600 transition-colors flex-grow">
                    <a
                      href="#"
                      className="focus-visible:outline-none focus-visible:underline decoration-sky-600"
                    >
                      {article.title}
                    </a>
                  </h3>
                  <div
                    className="flex items-center gap-2 text-[#70E000] font-bold text-sm mt-auto"
                    aria-hidden="true"
                  >
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
