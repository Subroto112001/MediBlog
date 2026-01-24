"use client";

import React, { useState, useMemo } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Noto_Serif_Bengali } from "next/font/google";
import Image from "next/image";
import Button from "../Button/Button";
import { ARTICLES_DB } from "@/lib/articlesData";

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
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const pathname = usePathname();

  // ১. ডায়নামিক ক্যাটাগরিগুলো জেনারেট করা (Articles DB থেকে) সাথে আর্টিকেল কাউন্ট
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

  const blogDropdownItems = categoryData;

  const NAV_DATA = [
    {
      name: "হোম",
      href: "/",
    },
    {
      name: "টপিকস",
      href: "/articles",
      hasMegaMenu: true,
      dropdownItems: blogDropdownItems,
    },
    {
      name: "ব্লগ",
      href: "/articles",
    },
    {
      name: "ডাক্তার",
      href: "/doctor",
    },
    {
      name: "আমাদের সম্পর্কে",
      href: "/about",
    },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 lg:px-20 py-4 ${notoSerifBengali.className}`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-10">
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
                // টপিকস্ এর জন্য active check করবো না, শুধু hover এ highlight হবে
                const isActive = !link.hasMegaMenu && pathname === link.href;
                const hasMegaMenu =
                  link.hasMegaMenu && link.dropdownItems?.length > 0;
                const hasDropdown =
                  !link.hasMegaMenu && link.dropdownItems?.length > 0;

                return (
                  <div
                    key={link.name}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => hasMegaMenu && setIsMegaMenuOpen(true)}
                    onMouseLeave={() => hasMegaMenu && setIsMegaMenuOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8c00] rounded px-1 py-2
                        ${
                          isActive
                            ? "text-[#68c20e]"
                            : hasMegaMenu && isMegaMenuOpen
                              ? "text-[#68c20e]"
                              : "text-slate-600 hover:text-[#68c20e]"
                        }`}
                    >
                      {link.name}

                      {(hasMegaMenu || hasDropdown) && (
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-300 ${hasMegaMenu && isMegaMenuOpen ? "rotate-180" : ""}`}
                        />
                      )}
                    </Link>

                    {/* মেগা মেনু - Google Blog স্টাইল হরাইজেন্টাল */}
                    {hasMegaMenu && (
                      <>
                        {/* Invisible bridge - হেডার থেকে মেগামেনুতে যাওয়ার জন্য */}
                        <div
                          className={`fixed left-0 right-0 top-[57px] h-[20px] z-[99] ${isMegaMenuOpen ? "block" : "hidden"}`}
                          onMouseEnter={() => setIsMegaMenuOpen(true)}
                        />

                        <div
                          className={`fixed left-0 right-0 top-[73px] bg-white border-b border-slate-200 shadow-sm
                            transition-all duration-200 ease-out z-[100]
                            ${isMegaMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                          onMouseEnter={() => setIsMegaMenuOpen(true)}
                          onMouseLeave={() => setIsMegaMenuOpen(false)}
                        >
                          <div className="max-w-[1200px] mx-auto px-6 py-5">
                            {/* হরাইজেন্টাল ক্যাটাগরি লিস্ট */}
                            <div className="flex flex-wrap items-center gap-3">
                              {link.dropdownItems.map((category, index) => (
                                <Link
                                  key={index}
                                  href={category.href}
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium 
                                    text-slate-600 bg-slate-50 border border-slate-200
                                    hover:bg-[#2d8c00] hover:text-white hover:border-[#2d8c00]
                                    transition-all duration-200"
                                >
                                  {category.name}
                                  <span className="text-xs opacity-70">
                                    ({category.count})
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* সাধারণ ড্রপডাউন (মেগা মেনু ছাড়া) */}
                    {hasDropdown && (
                      <div className="absolute top-full left-0 pt-2 w-max max-w-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="bg-white border border-slate-100 rounded-lg shadow-xl overflow-hidden">
                          <ul className="p-3 flex flex-wrap gap-2">
                            {link.dropdownItems.map((subItem, index) => (
                              <li key={index} className="flex-shrink-0">
                                <Link
                                  href={subItem.href}
                                  className="block px-4 py-2 text-sm text-slate-600 font-medium hover:text-[#2d8c00] hover:bg-slate-50 rounded-md transition-colors whitespace-nowrap border border-transparent hover:border-slate-100"
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Search Bar */}
            <form className="hidden lg:flex items-center bg-slate-100 rounded-full px-4 py-2 w-64 focus-within:ring-2 focus-within:ring-[#BCE7FA]">
              <Search className="text-slate-400 mr-2" size={18} />
              <input
                type="text"
                placeholder="অনুসন্ধান করুন..."
                className="bg-transparent border-none focus:ring-0 text-sm w-full outline-none text-slate-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-slate-900 rounded-lg hover:bg-slate-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-2 shadow-xl max-h-[80vh] overflow-y-auto">
            {NAV_DATA.map((link) => {
              const isActive = pathname === link.href;
              const hasDropdown =
                link.dropdownItems && link.dropdownItems.length > 0;
              const isExpanded = mobileExpanded === link.name;

              return (
                <div key={link.name} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      className={`flex-1 font-medium p-3 rounded-lg 
                      ${isActive ? "text-[#2d8c00] bg-[#2d8c00]/10" : "text-slate-900 hover:bg-slate-50"}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {hasDropdown && (
                      <button
                        onClick={() =>
                          setMobileExpanded(isExpanded ? null : link.name)
                        }
                        className="p-3 hover:bg-slate-100 rounded-lg"
                      >
                        <ChevronDown
                          size={20}
                          className={`text-slate-500 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Submenu */}
                  {hasDropdown && isExpanded && (
                    <div className="mt-2 ml-2 pl-4 border-l-2 border-slate-100 space-y-1">
                      {link.dropdownItems.map((subItem, idx) => (
                        <Link
                          key={idx}
                          href={subItem.href}
                          className="flex items-center justify-between p-3 rounded-lg text-sm transition-colors bg-slate-50 hover:bg-slate-100"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <span className="font-medium text-slate-700">
                            {subItem.name}
                          </span>
                          <span className="text-xs text-slate-500">
                            {subItem.count}টি
                          </span>
                        </Link>
                      ))}
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
