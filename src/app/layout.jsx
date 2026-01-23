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

export const metadata = {
  title: "আর্থাইটিস কেয়ার",
  description: "আর্থাইটিস কেয়ার - বাতরোগ ও আর্থাইটিস বিশেষজ্ঞ ডা: সাদাব সাউদ সানীর সাথে যোগাযোগ করুন।",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Header />
        <div>{children}</div>
        {/* Dynamic Footer */}
        <Footer />
      </body>
    </html>
  );
}
