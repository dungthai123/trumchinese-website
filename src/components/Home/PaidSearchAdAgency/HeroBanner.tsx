"use client";

import Link from "next/link";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <section className="relative bg-[#AEE2FF] h-screen flex items-center text-center">
      {/* Background Hills & Trees */}
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src="/images/background-hills.png" 
          alt="Hills" 
          fill
          className="h-full w-full object-cover"
          priority 
        />
      </div>
      
      {/* Container */}
      <div className="relative container mx-auto flex flex-col items-center justify-center z-20 -mt-32 md:-mt-16">
        {/* Title */}
        <h1 className="text-black text-[40px] md:text-[56px] font-bold leading-tight mb-8">
          HỌC TIẾNG TRUNG "DỄ CHỊU VÔ CÙNG" VỚI TRÙM CHINESE
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] text-gray-800 mb-10 max-w-[600px]">
          App học tiếng Trung "có tâm" nhất quả đất. Giải quyết 90% vấn đề của người học tiếng Trung.
        </p>

        {/* Logo */}
        <Image 
          src="/images/logo-avatar.png" 
          alt="Trùm Chinese Logo"
          width={120} 
          height={120} 
          className="mb-10 rounded-full"
        />

        {/* <p className="text-[18px] text-gray-800 mb-6 max-w-[600px]">
          Tải ứng dụng miễn phí trên
        </p> */}

        {/* Download Buttons */}
        <div className="flex gap-6">
          <Link href="https://apps.apple.com/app/apple-store/id6468914724?pt=126639601&ct=landingpage0225&mt=8">
            <Image src="/images/appstore-button.png" alt="App Store" width={160} height={50} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.meophe.catchinese&hl=vi">
            <Image src="/images/googleplay-button.png" alt="Google Play" width={160} height={50} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
