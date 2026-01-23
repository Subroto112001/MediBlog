"use client";

import React, { useState } from "react";
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
  const pathname = usePathname();

  // ১. ডায়নামিক ক্যাটাগরিগুলো জেনারেট করা (Articles DB থেকে)
  const uniqueCategories = [
    ...new Set(ARTICLES_DB.map((article) => article.category)),
  ];

  // ক্যাটাগরিগুলোকে ড্রপডাউন আইটেমের ফরম্যাটে সাজানো
  const blogDropdownItems = uniqueCategories.map((cat) => ({
    name: cat,
    href: `/articles?category=${cat}`,
  }));

  // ২. মেইন নেভিগেশন ডেটা স্ট্রাকচার (যেকোনো মেনুতে ড্রপডাউন সাপোর্ট করার জন্য)
  const NAV_DATA = [
    {
      name: "হোম",
      href: "/",
    },
    {
      name: "ডাক্তার",
      href: "/doctor",
      // উদাহরণ: ভবিষ্যতে যদি ডাক্তারের নিচে ড্রপডাউন চান, এভাবে দিতে পারবেন:
      // dropdownItems: [
      //   { name: "অর্থোপেডিক", href: "/doctor/ortho" },
      //   { name: "ফিজিওথেরাপি", href: "/doctor/physio" }
      // ]
    },
    {
      name: "ব্লগ",
      href: "/articles",
      dropdownItems: blogDropdownItems, // এখানে ডায়নামিক ক্যাটাগরিগুলো পাস করা হলো
    },
    {
      name: "আমাদের সম্পর্কে",
      href: "/about",
    },
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

              const hasDropdown =
                link.dropdownItems && link.dropdownItems.length > 0;

              return (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8c00] rounded px-1 py-2
                      ${
                        isActive
                          ? "text-[#68c20e]"
                          : "text-slate-600 group-hover:text-[#68c20e]"
                      }`}
                  >
                    {link.name}

                    {hasDropdown && (
                      <ChevronDown
                        size={16}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    )}
                  </Link>

                  {hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 w-max opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50">
                      <div className="bg-white border border-slate-100 rounded-lg shadow-xl overflow-hidden">
                        <ul className="py-2 flex ">
                          {link.dropdownItems.map((subItem, index) => (
                            <li key={index}>
                              <Link
                                href={subItem.href}
                                className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#2d8c00] hover:bg-slate-50 transition-colors"
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
        <nav className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
          {NAV_DATA.map((link) => {
            const isActive = pathname === link.href;
            const hasDropdown =
              link.dropdownItems && link.dropdownItems.length > 0;

            return (
              <div key={link.name} className="flex flex-col">
                <Link
                  href={link.href}
                  className={`font-medium p-2 rounded-lg 
                  ${isActive ? "text-[#2d8c00] bg-[#2d8c00]/10" : "text-slate-900 hover:bg-slate-50"}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>

                {hasDropdown && (
                  <div className="pl-6 pt-1 flex flex-col gap-2 border-l-2 border-slate-100 ml-2 mt-1">
                    {link.dropdownItems.map((subItem, idx) => (
                      <Link
                        key={idx}
                        href={subItem.href}
                        className="text-sm text-slate-500 hover:text-[#2d8c00] py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
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
  );
}
