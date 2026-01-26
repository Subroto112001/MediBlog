"use client";

import React, { useState, useMemo } from "react";
import { Search, Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Serif_Bengali } from "next/font/google";
import Image from "next/image";
import Button from "../Button/Button";
import { ARTICLES_DB } from "@/lib/articlesData";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-bengali",
  display: "swap",
});

// ইংরেজি সংখ্যাকে বাংলায় রূপান্তর করার ফাংশন
const toBengaliNumber = (num) => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num.toString().replace(/\d/g, (d) => bengaliDigits[d]);
};

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();

  const categoryData = useMemo(() => {
    const categoryCounts = {};
    ARTICLES_DB.forEach((article) => {
      const cat = article.category;
      if (!categoryCounts[cat]) {
        categoryCounts[cat] = { count: 0 };
      }
      categoryCounts[cat].count++;
    });

    return Object.entries(categoryCounts).map(([name, data]) => ({
      name,
      href: `/articles?category=${name}`,
      count: data.count,
    }));
  }, []);

  const NAV_DATA = [
    { name: "হোম", href: "/" },
    {
      name: "টপিকস",
      href: "#",
      hasMegaMenu: true,
      dropdownItems: categoryData,
    },
    { name: "ব্লগ", href: "/articles" },
    { name: "লেখক সম্পর্কে", href: "/writer" },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-6 lg:px-20 py-3 sm:py-4 ${notoSerifBengali.className}`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-4 lg:gap-10">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-1.5 sm:gap-2 group cursor-pointer flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="আর্থ্রাইটিস কেয়ার বিডি"
                width={36}
                height={36}
                className="w-8 h-8 sm:w-9 sm:h-9"
                priority
              />
              <h2 className="text-slate-900 text-sm min-[400px]:text-base sm:text-lg lg:text-xl font-bold tracking-tight whitespace-nowrap">
                <span className="hidden min-[400px]:inline">
                  আর্থ্রাইটিস কেয়ার
                </span>
                <span className="min-[400px]:hidden">আ. কেয়ার</span>
              </h2>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {NAV_DATA.map((link) => {
                const hasMegaMenu =
                  link.hasMegaMenu && link.dropdownItems?.length > 0;

                // টপিকস্ শুধু hover হলে active, বাকিগুলো pathname দিয়ে
                const isActive = hasMegaMenu
                  ? isMegaMenuOpen
                  : pathname === link.href ||
                    (link.href === "/articles" &&
                      pathname.startsWith("/articles"));

                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => hasMegaMenu && setIsMegaMenuOpen(true)}
                    onMouseLeave={() => hasMegaMenu && setIsMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-base font-semibold transition-colors py-2
                        ${isActive ? "text-[#2d8c00]" : "text-slate-600 hover:text-[#2d8c00]"}`}
                    >
                      {link.name}
                      {hasMegaMenu && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${isMegaMenuOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* Desktop Mega Menu */}
                    {hasMegaMenu && (
                      <div
                        className={`fixed left-0 right-0 top-[73px] bg-white border-b border-slate-200 shadow-lg transition-all z-[100] ${isMegaMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                      >
                        <div className="max-w-[1200px] mx-auto px-6 py-8">
                          <div className="flex flex-wrap items-center gap-3 mb-6">
                            {link.dropdownItems.map((category, index) => (
                              <Link
                                key={index}
                                href={category.href}
                                onClick={() => setIsMegaMenuOpen(false)}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 hover:bg-[#2D8C00] hover:text-white transition-all"
                              >
                                {category.name}{" "}
                                <span className="text-xs opacity-70">
                                  ({toBengaliNumber(category.count)})
                                </span>
                              </Link>
                            ))}
                          </div>
                          <hr className="border-slate-100 mb-4" />
                          <Link
                            href="/articles"
                            onClick={() => setIsMegaMenuOpen(false)}
                            className="inline-flex items-center gap-2 text-[#2d8c00] font-bold hover:underline"
                          >
                            সকল ব্লগ দেখুন <ArrowRight size={18} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
            {/* Desktop/Tablet Search Bar */}
            <form className="hidden md:flex items-center bg-slate-100 rounded-full px-3 lg:px-4 py-2 w-44 lg:w-56 xl:w-64 transition-all">
              <Search className="text-slate-400 mr-2 shrink-0" size={18} />
              <input
                type="text"
                placeholder="অনুসন্ধান করুন..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            {/* Mobile/Tablet Search Icon */}
            <button
              type="button"
              className="md:hidden p-2 text-slate-600 hover:text-[#2d8c00] hover:bg-slate-100 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="অনুসন্ধান"
            >
              <Search size={20} />
            </button>
            <Button />
            <button
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl max-h-[85vh] overflow-y-auto p-4 flex flex-col gap-2 z-50">
            {/* Mobile Search Bar */}
            <form className="flex items-center bg-slate-100 rounded-full px-4 py-3 mb-2">
              <Search className="text-slate-400 mr-3 shrink-0" size={20} />
              <input
                type="text"
                placeholder="অনুসন্ধান করুন..."
                className="bg-transparent border-none focus:ring-0 text-base w-full outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-slate-400 hover:text-slate-600 ml-2"
                >
                  <X size={18} />
                </button>
              )}
            </form>
            {NAV_DATA.map((link) => {
              const hasDropdown = link.dropdownItems?.length > 0;
              const isExpanded = mobileExpanded === link.name;

              // টপিকস্ শুধু expanded হলে active, বাকিগুলো pathname দিয়ে
              const isActive = hasDropdown
                ? isExpanded
                : pathname === link.href ||
                  (link.href === "/articles" &&
                    pathname.startsWith("/articles"));

              return (
                <div key={link.name} className="flex flex-col">
                  <div
                    onClick={() =>
                      hasDropdown
                        ? setMobileExpanded(isExpanded ? null : link.name)
                        : setIsMobileMenuOpen(false)
                    }
                    className={`flex items-center justify-between p-3 rounded-lg font-medium transition-all
                    ${isActive ? "text-[#2d8c00] bg-[#2d8c00]/10" : "text-slate-900"}`}
                  >
                    {hasDropdown ? (
                      <span className="flex-1 cursor-pointer">{link.name}</span>
                    ) : (
                      <Link href={link.href} className="flex-1">
                        {link.name}
                      </Link>
                    )}
                    {hasDropdown && (
                      <ChevronDown
                        size={20}
                        className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
                      />
                    )}
                  </div>

                  {hasDropdown && isExpanded && (
                    <div className="mt-2 ml-2 pl-4 border-l-2 border-slate-100 space-y-1">
                      {link.dropdownItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="flex items-center justify-between p-3 rounded-lg text-sm bg-slate-50"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="text-slate-700">{subItem.name}</span>
                          <span className="text-xs text-slate-500">
                            {toBengaliNumber(subItem.count)}টি
                          </span>
                        </Link>
                      ))}
                      <Link
                        href="/articles"
                        className="flex items-center justify-center gap-2 p-3 mt-2 rounded-lg text-sm font-bold text-white bg-[#2d8c00]"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        সকল ব্লগ দেখুন <ArrowRight size={16} />
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        )}
      </header>
    </>
  );
}
