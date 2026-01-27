import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header/Header";
import Footer from "@/component/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/**
 * todo: SEO Metadata Configuration
 * description: Comprehensive metadata for search engine optimization including Open Graph and Twitter cards
 */
export const metadata = {
  metadataBase: new URL("https://arthritiscare.com.bd"),
  title: {
    default: "আর্থ্রাইটিস কেয়ার | বাতরোগ ও জয়েন্ট চিকিৎসা বিশেষজ্ঞ",
    template: "%s | আর্থ্রাইটিস কেয়ার",
  },
  description:
    "রিউমাটয়েড আর্থ্রাইটিস, অস্টিওআর্থ্রাইটিস, গাউট ও অন্যান্য জয়েন্ট রোগের বিশেষজ্ঞ চিকিৎসা এবং পরামর্শ। ডা: সাদাব সাউদ সানীর সাথে যোগাযোগ করুন।",
  keywords: [
    "আর্থ্রাইটিস",
    "বাতরোগ",
    "জয়েন্ট ব্যথা",
    "রিউমাটয়েড আর্থ্রাইটিস",
    "অস্টিওআর্থ্রাইটিস",
    "গাউট",
    "স্পন্ডিলাইটিস",
    "রিউমাটোলজিস্ট",
    "জয়েন্ট চিকিৎসা",
    "বাংলাদেশ",
  ],
  authors: [{ name: "ডা: সাদাব সাউদ সানী" }],
  creator: "আর্থ্রাইটিস কেয়ার",
  publisher: "আর্থ্রাইটিস কেয়ার",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: "https://arthritiscare.com.bd",
    siteName: "আর্থ্রাইটিস কেয়ার",
    title: "আর্থ্রাইটিস কেয়ার | বাতরোগ ও জয়েন্ট চিকিৎসা বিশেষজ্ঞ",
    description:
      "রিউমাটয়েড আর্থ্রাইটিস, অস্টিওআর্থ্রাইটিস, গাউট ও অন্যান্য জয়েন্ট রোগের বিশেষজ্ঞ চিকিৎসা এবং পরামর্শ।",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "আর্থ্রাইটিস কেয়ার - বাতরোগ বিশেষজ্ঞ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "আর্থ্রাইটিস কেয়ার | বাতরোগ ও জয়েন্ট চিকিৎসা বিশেষজ্ঞ",
    description:
      "রিউমাটয়েড আর্থ্রাইটিস, অস্টিওআর্থ্রাইটিস, গাউট ও অন্যান্য জয়েন্ট রোগের বিশেষজ্ঞ চিকিৎসা।",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://arthritiscare.com.bd",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {/* Accessibility: Skip to main content link */}
        <a href="#main-content" className="skip-link">
          মূল বিষয়বস্তুতে যান
        </a>
        <Header />
        <main id="main-content" tabIndex="-1">
          {children}
        </main>
        {/* Dynamic Footer */}
        <Footer />
      </body>
    </html>
  );
}
