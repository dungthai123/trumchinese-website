"use client";

import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

// Loading component for better UX
const ImageSkeleton = ({ className }: { className: string }) => (
  <div className={`${className} bg-gray-200 animate-pulse rounded`} />
);

const HeroBanner = () => {
  return (
    <section className="relative bg-[#AEE2FF] h-screen flex items-center text-center overflow-hidden">
      {/* Background Hills & Trees - Optimized */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/background-hills.webp" 
          alt="Beautiful hills background for learning Chinese" 
          fill
          className="h-full w-full object-cover"
          priority 
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Optimized Glowing Circles - Reduced animation for better performance */}
      <div className="absolute inset-0 overflow-hidden opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 right-1/3 w-64 h-64 rounded-full border-2 border-white/20 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full border-2 border-white/20 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full border-2 border-white/20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto px-6 pt-12 pb-24 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Phone Mockup - Optimized with proper sizing */}
        <Suspense fallback={<ImageSkeleton className="w-[200px] h-[400px] mx-auto" />}>
          <div className="relative z-10 scale-[3.5] md:scale-[4.8]">
            <div className="relative w-[200px] h-auto mx-auto">
              <Image
                src="/images/heroBanner/phoneMockup.webp"
                alt="Trùm Chinese app interface showing learning features"
                width={300}
                height={600}
                className="mx-auto"
                quality={90}
                sizes="(max-width: 768px) 200px, 300px"
                loading="eager"
              />

              {/* Mascot Character - Lazy loaded */}
              <div className="absolute -bottom-16 -right-6 w-32 h-32">
                <Image 
                  src="/images/heroBanner/mascot.webp" 
                  alt="Trùm Chinese mascot character" 
                  width={128} 
                  height={128}
                  quality={80}
                  sizes="128px"
                />
              </div>
            </div>
          </div>
        </Suspense>

        {/* Headline + Buttons */}
        <div className="text-center z-10">
          <Suspense fallback={<ImageSkeleton className="w-[700px] h-[200px] mx-auto mb-6" />}>
            <Image 
              src="/images/heroBanner/text.webp" 
              alt="Trùm Chinese - 10X Hiệu suất học tiếng Trung" 
              width={700} 
              height={200} 
              className="mx-auto mb-6"
              quality={90}
              sizes="(max-width: 768px) 90vw, 700px"
              priority
            />
          </Suspense>

          {/* Download Buttons - Optimized with proper alt text and loading */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="https://apps.apple.com/app/apple-store/id6468914724?pt=126639601&ct=landingpage0225&mt=8"
              aria-label="Download Trùm Chinese on App Store"
              className="transition-transform hover:scale-105 focus:scale-105"
            >
              <Image 
                src="/images/heroBanner/appstore-button.webp" 
                alt="Download on the App Store" 
                width={160} 
                height={50}
                quality={85}
                sizes="160px"
              />
            </Link>
            <Link 
              href="https://play.google.com/store/apps/details?id=com.meophe.catchinese&hl=vi"
              aria-label="Download Trùm Chinese on Google Play"
              className="transition-transform hover:scale-105 focus:scale-105"
            >
              <Image 
                src="/images/heroBanner/googleplay-button.webp" 
                alt="Get it on Google Play" 
                width={160} 
                height={50}
                quality={85}
                sizes="160px"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
