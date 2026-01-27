"use client";

import React from "react";
import Image from "next/image";
import { Noto_Serif_Bengali } from "next/font/google";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  GraduationCap,
  Award,
  Star,
  TrendingUp,
  Facebook,
  Linkedin,
  Youtube,
  User,
} from "lucide-react";
import Link from "next/link";
import { DOCTOR_PROFILE } from "@/lib/doctorsData";

/**
 * todo: Font Configuration
 * description: Configure Noto Serif Bengali font for Bengali text rendering
 */
const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["bengali"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-bengali",
  display: "swap",
});

/**
 * todo: Doctor Profile Page Component
 * description: Displays the doctor/author profile with contact information and credentials
 */
export default function DoctorProfilePage() {
  const doctor = DOCTOR_PROFILE;

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-900 ${notoSerifBengali.className}`}
      lang="bn"
    >
      <main className="flex-1">
        {/* --- Hero Section --- */}
        <section className="relative h-[300px] md:h-[400px] bg-slate-900" aria-label="ডাক্তার প্রোফাইল হিরো">
          <Image
            src={doctor.cover}
            alt="ডাক্তার প্রোফাইল কভার"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" aria-hidden="true"></div>
        </section>

        {/* --- Doctor Info Card --- */}
        <section className="px-6 lg:px-20 -mt-32 pb-12 relative z-10" aria-labelledby="doctor-name">
          <div className="max-w-[1200px] mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                {/* Profile Image */}
                <div className="relative w-48 h-60 rounded-2xl overflow-hidden shadow-lg flex-shrink-0">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name}-এর ছবি`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Doctor Details */}

                <div className="flex-1 text-center lg:text-left">
                  <div className="mb-6">
                    <h1 id="doctor-name" className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-2">
                      {doctor.name}
                    </h1>
                    <p className="text-xl text-[#2d8c00] font-semibold mb-2">
                      {doctor.displayRole}
                    </p>
                    <p className="text-lg text-slate-600 mb-4">
                      {doctor.designation}
                    </p>
                    {/* Centered the MapPin location for mobile */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-600">
                      <MapPin size={20} aria-hidden="true" />
                      <span>{doctor.location}</span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    {doctor.bio}
                  </p>

                  {/* Social Links - Centered on mobile */}
                  <div className="flex gap-4 justify-center lg:justify-start" role="list" aria-label="সামাজিক যোগাযোগ লিংক">
                    <a
                      href={doctor.socials.facebook}
                      className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-[#BCE7FA] rounded-full transition-colors"
                      aria-label="Facebook প্রোফাইল দেখুন"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Facebook size={20} aria-hidden="true" />
                    </a>
                    <a
                      href={doctor.socials.linkedin}
                      className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-[#BCE7FA] rounded-full transition-colors"
                      aria-label="LinkedIn প্রোফাইল দেখুন"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin size={20} aria-hidden="true" />
                    </a>
                    <a
                      href={doctor.socials.youtube}
                      className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-[#BCE7FA] rounded-full transition-colors"
                      aria-label="YouTube চ্যানেল দেখুন"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Youtube size={20} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- About Section --- */}
        <section className="px-6 lg:px-20 py-12 bg-white" aria-labelledby="about-doctor-heading">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Full Biography */}
              <div>
                <h2 id="about-doctor-heading" className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <User className="text-[#2d8c00]" size={32} aria-hidden="true" />
                  ডা. সাদাব সাউদ সানী
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  {doctor.fullBiography}
                </p>

                {/* Specializations */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <Award className="text-[#2d8c00]" size={28} aria-hidden="true" />
                  বিশেষত্ব
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6" role="list" aria-label="বিশেষত্বের তালিকা">
                  {doctor.specializations.map((spec, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-slate-700"
                    >
                      <div className="w-2 h-2 bg-[#2d8c00] rounded-full" aria-hidden="true"></div>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Education & Chamber Info */}
              <div>
                {/* Education */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <GraduationCap className="text-[#2d8c00]" size={28} aria-hidden="true" />
                  শিক্ষাগত যোগ্যতা
                </h3>
                <ul className="space-y-3 mb-8" role="list" aria-label="শিক্ষাগত যোগ্যতার তালিকা">
                  {doctor.education.map((edu, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-lg"
                    >
                      <Star
                        className="text-[#2d8c00] mt-1 flex-shrink-0"
                        size={20}
                        aria-hidden="true"
                      />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>

                {/* Chamber Information */}
                <div className="bg-[#BCE7FA]/30 rounded-xl p-6 border-2 border-[#BCE7FA]" role="region" aria-labelledby="chamber-info-heading">
                  <h3 id="chamber-info-heading" className="text-2xl font-bold text-slate-900 mb-6">
                    চেম্বার তথ্য
                  </h3>
                  <dl className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin
                        className="text-[#2d8c00] mt-1 flex-shrink-0"
                        size={20}
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="font-semibold text-slate-900">ঠিকানা</dt>
                        <dd className="text-slate-700">
                          {doctor.chamberInfo.address}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-[#2d8c00]" size={20} aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-slate-900">ফোন</dt>
                        <dd className="text-slate-700">
                          {doctor.chamberInfo.phone}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="text-[#2d8c00]" size={20} aria-hidden="true" />
                      <div>
                        <dt className="font-semibold text-slate-900">ইমেইল</dt>
                        <dd className="text-slate-700">
                          {doctor.chamberInfo.email}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock
                        className="text-[#2d8c00] mt-1 flex-shrink-0"
                        size={20}
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="font-semibold text-slate-900">সময়সূচী</dt>
                        <dd className="text-slate-700">
                          {doctor.chamberInfo.hours}
                        </dd>
                        {doctor.chamberInfo.appointmentRequired && (
                          <p className="text-sm text-[#2d8c00] mt-1 font-medium">
                            * পূর্ব অ্যাপয়েন্টমেন্ট প্রয়োজন
                          </p>
                        )}
                      </div>
                    </div>
                  </dl>

                  <Link
                    href="/articles"
                    className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2d8c00] text-white font-bold rounded-lg hover:bg-[#247000] transition-colors"
                  >
                    অ্যাপয়েন্টমেন্ট নিন
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Call to Action --- */}
        <section className="px-6 lg:px-20 py-16 bg-slate-900" aria-labelledby="cta-heading">
          <div className="max-w-[1200px] mx-auto text-center">
            <h2 id="cta-heading" className="text-3xl lg:text-4xl font-bold text-white mb-6">
              আপনার সুস্বাস্থ্য আমাদের অগ্রাধিকার
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              আর্থাইটিস এবং জয়েন্ট সমস্যার জন্য বিশেষজ্ঞ পরামর্শ নিন। আমরা
              আপনার সুস্থ জীবনযাপনের জন্য প্রতিশ্রুতিবদ্ধ।
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={`tel:${doctor.chamberInfo.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#BCE7FA] text-slate-900 font-bold rounded-lg hover:bg-white transition-colors"
                aria-label="এখনই ফোনে কল করুন"
              >
                <Phone size={20} aria-hidden="true" />
                এখনই কল করুন
              </a>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors"
              >
                <TrendingUp size={20} aria-hidden="true" />
                স্বাস্থ্য টিপস পড়ুন
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
