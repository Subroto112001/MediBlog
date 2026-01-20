"use client";

import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Search,
  Moon,
  Sun,
  ArrowRight,
  ChevronRight,
  Activity,
  Share2,
  Network,
  Menu,
  X,
} from "lucide-react";

// --- Dynamic Data Configuration ---

const NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Doctors", href: "#" },
  { name: "Topics", href: "#" },
  { name: "About", href: "#" },
];

const CATEGORIES = [
  "Cardiology",
  "Nutrition",
  "Pediatrics",
  "Mental Health",
  "Dermatology",
  "Fitness",
];

const ARTICLES = [
  {
    id: 1,
    title: "Managing Stress at Work: A Clinical Approach",
    category: "Wellness",
    author: "Dr. Sarah Wilson",
    readTime: "5 min read",
    date: "Oct 24",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: 2,
    title: "Vitamin D Myths and Facts: What Science Says",
    category: "Nutrition",
    author: "Dr. James Lee",
    readTime: "8 min read",
    date: "Oct 22",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
  },
  {
    id: 3,
    title: "The Role of Sleep in Neuro-Recovery",
    category: "Sleep Science",
    author: "Dr. Elena Rodriguez",
    readTime: "6 min read",
    date: "Oct 20",
    image:
      "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
  },
];

export default function HealthVerse() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Theme Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 font-sans ${isDarkMode ? "dark bg-[#101728] text-slate-100" : "bg-white text-slate-900"}`}
    >
      <Head>
        <title>HealthVerse | Medical & Wellness Portal</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#101728]/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 px-6 lg:px-20 py-4">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
            {/* Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <div className="size-9 bg-[#BCE7FA] flex items-center justify-center rounded-lg text-slate-900">
                <Activity size={20} strokeWidth={2.5} />
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight">
                HealthVerse
              </h2>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            {/* Search Bar */}
            <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 w-64">
              <Search className="text-slate-400 mr-2" size={18} />
              <input
                type="text"
                placeholder="Search insights..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-400 outline-none text-slate-700 dark:text-slate-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* CTA & Theme Toggle */}
            <button className="hidden sm:block bg-[#38B000] hover:bg-[#2d8c00] text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-[#38B000]/20">
              Subscribe
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? (
                <Sun size={20} className="text-yellow-400" />
              ) : (
                <Moon size={20} className="text-slate-600" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#101728] border-b border-slate-100 dark:border-slate-800 p-4 flex flex-col gap-4 shadow-xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-900 dark:text-white font-medium p-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="px-6 lg:px-20 py-12 lg:py-16 max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#BCE7FA] dark:bg-[#BCE7FA]/10 rounded-[2rem] p-8 lg:p-12 overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#38B000]/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

            <div className="flex flex-col gap-8 relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur px-3 py-1 rounded-full w-fit shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-[#38B000] animate-pulse"></span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300 tracking-wider uppercase">
                  Featured Breakthrough
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
                The Future of{" "}
                <span className="text-slate-800 dark:text-[#BCE7FA]">
                  Preventative
                </span>{" "}
                Cardiology
              </h1>

              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-lg">
                Explore the latest medical insights and professional health
                advice from our certified experts on cardiovascular longevity.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-[#38B000] hover:bg-[#2d8c00] text-white px-8 py-4 rounded-xl text-base font-bold transition-all shadow-xl shadow-[#38B000]/30 flex items-center gap-2 group">
                  Read Article{" "}
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
                <button className="bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-xl text-base font-bold transition-all">
                  View Doctors
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 dark:bg-[#BCE7FA]/10 rounded-[1.5rem] rotate-3 scale-105 transition-transform group-hover:rotate-1"></div>
              {/* Using a reliable placeholder image */}
              <div
                className="w-full h-[400px] bg-center bg-no-repeat bg-cover rounded-[1.5rem] relative shadow-2xl transition-transform"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* --- Category Scroller --- */}
        <section className="px-6 lg:px-20 py-4 max-w-[1200px] mx-auto overflow-hidden">
          <div className="flex items-center gap-4 overflow-x-auto pb-4 no-scrollbar">
            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest mr-4 whitespace-nowrap">
              Explore:
            </span>
            {CATEGORIES.map((cat, index) => (
              <button
                key={cat}
                className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 font-semibold transition-all
                  ${
                    index === 0
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-[#BCE7FA] hover:text-slate-900"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* --- Blog Grid --- */}
        <section className="px-6 lg:px-20 py-16 max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-10 border-b border-slate-100 dark:border-slate-800 pb-6">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
                Latest Medical Insights
              </h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">
                Peer-reviewed updates from our clinical network.
              </p>
            </div>
            <a
              href="#"
              className="text-slate-900 dark:text-[#BCE7FA] font-bold flex items-center gap-1 hover:gap-2 transition-all"
            >
              View All Posts <ChevronRight size={20} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((article) => (
              <article
                key={article.id}
                className="flex flex-col group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/3]">
                  <div className="absolute inset-0 bg-[#38B000]/0 group-hover:bg-[#38B000]/10 transition-colors z-10"></div>
                  <div
                    className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url('${article.image}')` }}
                  ></div>
                  <span className="absolute top-4 left-4 z-20 bg-[#BCE7FA]/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-900">
                    {article.category}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-[#BCE7FA] transition-colors leading-tight">
                    {article.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    <img
                      src={article.avatar}
                      alt={article.author}
                      className="size-8 rounded-full bg-slate-200"
                    />
                    <div className="text-xs">
                      <p className="font-bold text-slate-900 dark:text-white">
                        {article.author}
                      </p>
                      <p className="text-slate-500">
                        {article.readTime} • {article.date}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* --- Newsletter --- */}
        <section className="px-6 lg:px-20 py-20 bg-[#BCE7FA]/20 dark:bg-[#BCE7FA]/5">
          <div className="max-w-[1200px] mx-auto text-center">
            <div className="bg-white dark:bg-[#101728] rounded-[3rem] p-10 lg:p-16 shadow-2xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
              <div className="absolute -left-10 -top-10 w-40 h-40 bg-[#38B000]/10 rounded-full blur-2xl"></div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#BCE7FA]/20 rounded-full blur-2xl"></div>

              <div className="relative z-10 max-w-2xl mx-auto flex flex-col gap-6">
                <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white">
                  Stay Informed. Get Medical Insights.
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg">
                  Subscribe to our weekly newsletter and receive the latest
                  health tips, breakthrough research, and expert advice
                  delivered to your inbox.
                </p>
                <form
                  className="flex flex-col sm:flex-row gap-4 mt-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl px-6 py-4 focus:ring-[#BCE7FA] focus:border-[#BCE7FA] outline-none transition-all"
                    placeholder="Enter your email address"
                    type="email"
                  />
                  <button className="bg-[#38B000] hover:bg-[#2d8c00] text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-[#38B000]/20">
                    Join Newsletter
                  </button>
                </form>
                <p className="text-xs text-slate-400">
                  Join 15,000+ health-conscious readers. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-slate-900 text-slate-400 px-6 lg:px-20 py-20 border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-[#BCE7FA] flex items-center justify-center rounded-lg text-slate-900">
                <Activity size={20} />
              </div>
              <h2 className="text-white text-xl font-extrabold tracking-tight">
                HealthVerse
              </h2>
            </div>
            <p className="text-sm leading-relaxed">
              Leading the future of medical knowledge through expert insights
              and professional clinical directories.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BCE7FA] hover:text-slate-900 transition-colors"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                className="size-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-[#BCE7FA] hover:text-slate-900 transition-colors"
              >
                <Network size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold">Categories</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Cardiology",
                "Mental Health",
                "Nutrition & Diet",
                "Pediatrics",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#38B000] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold">Platform</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Find a Doctor",
                "Medical Topics",
                "Professional Login",
                "About Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#38B000] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-white font-bold">Legal</h4>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Medical Disclaimer",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-[#38B000] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          © 2024 HealthVerse Medical Theme. All medical information is verified
          by board-certified professionals.
        </div>
      </footer>
    </div>
  );
}
