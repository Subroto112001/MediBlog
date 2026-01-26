"use client";

import React from "react";

const Button = () => {
  const handleCall = (e) => {
    if (window.innerWidth >= 640) {
      e.preventDefault();
      alert("কল করতে অনুগ্রহ করে মোবাইল ব্যবহার করুন: +8801700000000");
    }
  };

  return (
    <a
      href="tel:+8801700000000"
      onClick={handleCall}
      className="inline-block bg-[#2D8C00] hover:bg-[#236e00] text-white px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-lg shadow-[#38B000]/20 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2d8c00]/40 text-center cursor-pointer whitespace-nowrap"
    >
      পরামর্শ নিন
    </a>
  );
};

export default Button;
