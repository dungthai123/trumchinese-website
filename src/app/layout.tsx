import "swiper/css/bundle";
import "../../public/css/navbar.css";
import "../../public/css/boxicons.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree, Outfit, Plus_Jakarta_Sans, Phudu } from "next/font/google";
import BackToTop from "@/components/Layout/BackToTop";
import AosAnimation from "@/components/Layout/AosAnimation";
import { Analytics } from "@vercel/analytics/next";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  style: "normal",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
  description: "Ứng dụng học tiếng Trung cùng AI hàng đầu",
  keywords: "học tiếng Trung, học tiếng Trung online, HSK, luyện thi HSK, Trùm Chinese, học tiếng Trung AI",
  authors: [{ name: "Trùm Chinese", url: "https://trumchinese.com" }],
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
    description: "Ứng dụng học tiếng Trung cùng AI hàng đầu",
    url: "https://trumchinese.com",
    type: "website",
    locale: "vi_VN",
    siteName: "Trùm Chinese",
    images: [
      {
        url: "/images/background_cover.png",
        width: 1200,
        height: 630,
        alt: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
    description: "Ứng dụng học tiếng Trung cùng AI hàng đầu",
    images: ["/images/background_cover.png"],
  },
};

console.log("Phudu Variable:", phudu.variable);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${outfit.variable} ${plusJakartaSans.variable} ${phudu.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        {children}

        {/* BackToTop */}
        <BackToTop />

        {/* AosAnimation */}
        <AosAnimation />
        <Analytics />
      </body>
    </html>
  );
}
