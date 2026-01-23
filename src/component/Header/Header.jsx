"use client";

import React, { useState } from "react";
import { Search, Activity, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Serif_Bengali } from "next/font/google";
import Image from "next/image";
import Button from "../Button/Button";

// --- Font Configuration ---
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();

  const NAV_DATA = [
    { name: "হোম", href: "/" },
    { name: "ডাক্তার", href: "/doctor" },
    { name: "সকল ব্লগ", href: "/articles" },
    { name: "আমাদের সম্পর্কে", href: "#" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4 ${notoSerifBengali.className}`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-10 ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-lg p-1"
          >
            <Image
              src="/logo.png"
              alt="আর্থ্রাইটিস কেয়ার বিডি"
              width={36}
              height={36}
              className="object-contain"
              priority
            />
            <h2 className="text-slate-900 text-xl font-bold tracking-tight">
              আর্থ্রাইটিস কেয়ার
            </h2>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="ডেস্কটপ নেভিগেশন"
          >
            {NAV_DATA.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8c00] rounded px-1
                    ${
                      isActive
                        ? "text-[#2d8c00] underline decoration-2 underline-offset-4"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4 lg:gap-6">
          {/* Search Bar */}
          <form
            className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-[#BCE7FA]"
            role="search"
          >
            <label htmlFor="search-input" className="sr-only">
              অনুসন্ধান করুন
            </label>
            <Search
              className="text-slate-400 mr-2"
              size={18}
              aria-hidden="true"
            />
            <input
              id="search-input"
              type="text"
              placeholder="অনুসন্ধান করুন..."
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500 outline-none text-slate-900"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <Button />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-900 rounded-lg hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <nav
          className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl"
          aria-label="মোবাইল নেভিগেশন"
        >
          {NAV_DATA.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`font-medium p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200
                  ${
                    isActive
                      ? "text-[#2d8c00] bg-[#2d8c00]/10"
                      : "text-slate-900 hover:bg-slate-50"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
