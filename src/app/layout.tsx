import "swiper/css/bundle";
import "../../public/css/navbar.css";
import "../../public/css/boxicons.min.css";
import "./globals.css";

import type { Metadata } from "next";
import { Figtree, Outfit, Plus_Jakarta_Sans, Phudu } from "next/font/google";
import BackToTop from "@/components/Layout/BackToTop";
import AosAnimation from "@/components/Layout/AosAnimation";
import PerformanceMonitor from "@/components/Common/PerformanceMonitor";
import { Analytics } from "@vercel/analytics/next";

// Optimize font loading with preload and fallback
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  style: "normal",
  display: "swap",
  preload: true,
  fallback: ['system-ui', 'arial'],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://trumchinese.com'),
  title: {
    default: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
    template: "%s | Trùm Chinese"
  },
  description: "Ứng dụng học tiếng Trung cùng AI hàng đầu. Phương pháp học hiệu quả, luyện thi HSK, từ vựng và ngữ pháp tiếng Trung.",
  keywords: [
    "học tiếng Trung", 
    "học tiếng Trung online", 
    "HSK", 
    "luyện thi HSK", 
    "Trùm Chinese", 
    "học tiếng Trung AI",
    "ứng dụng học tiếng Trung",
    "từ vựng tiếng Trung",
    "ngữ pháp tiếng Trung",
    "học tiếng Trung miễn phí"
  ],
  authors: [{ name: "Trùm Chinese", url: "https://trumchinese.com" }],
  creator: "Trùm Chinese",
  publisher: "Trùm Chinese",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/images/logo.webp", sizes: "32x32", type: "image/webp" },
      { url: "/images/logo.webp", sizes: "16x16", type: "image/webp" },
    ],
    shortcut: "/images/logo.webp",
    apple: [
      { url: "/images/logo.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://trumchinese.com",
    siteName: "Trùm Chinese",
    title: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
    description: "Ứng dụng học tiếng Trung cùng AI hàng đầu. Phương pháp học hiệu quả, luyện thi HSK, từ vựng và ngữ pháp tiếng Trung.",
    images: [
      {
        url: "https://www.trumchinese.com/images/background_cover.webp",
        width: 1200,
        height: 630,
        alt: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trùm Chinese - 10X Hiệu suất học tiếng Trung",
    description: "Ứng dụng học tiếng Trung cùng AI hàng đầu",
    images: ["https://www.trumchinese.com/images/background_cover.webp"],
    creator: "@trumchinese",
    site: "@trumchinese",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    yandex: "your-yandex-verification-code", // Add if targeting Russian/Eastern European markets
  },
  alternates: {
    canonical: "https://trumchinese.com",
    languages: {
      'vi': 'https://trumchinese.com',
      'en': 'https://trumchinese.com/en', // If you have English version
    },
  },
  category: 'education',
};

console.log("Phudu Variable:", phudu.variable);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${figtree.variable} ${outfit.variable} ${plusJakartaSans.variable} ${phudu.variable}`}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/logo.webp" as="image" type="image/webp" />
        <link rel="preload" href="/css/navbar.css" as="style" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//apps.apple.com" />
        <link rel="dns-prefetch" href="//play.google.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.webp" type="image/webp" sizes="32x32" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Trùm Chinese",
              "url": "https://trumchinese.com",
              "logo": "https://trumchinese.com/images/logo.webp",
              "description": "Ứng dụng học tiếng Trung cùng AI hàng đầu",
              "foundingDate": "2023",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "availableLanguage": ["Vietnamese", "Chinese"]
              },
              "sameAs": [
                "https://apps.apple.com/app/apple-store/id6468914724",
                "https://play.google.com/store/apps/details?id=com.meophe.catchinese"
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}

        {/* BackToTop */}
        <BackToTop />

        {/* AosAnimation */}
        <AosAnimation />
        
        {/* Performance Monitoring */}
        <PerformanceMonitor />
        
        {/* Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
