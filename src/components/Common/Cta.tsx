"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Cta = () => {
  const [email, setEmail] = useState("");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only start animation when section is visible

    // Animation for 98/100
    const timer1 = setInterval(() => {
      setCount1(prev => {
        if (prev < 98) return prev + 1;
        clearInterval(timer1);
        return prev;
      });
    }, 20);

    // Animation for 100K
    const timer2 = setInterval(() => {
      setCount2(prev => {
        if (prev < 100) return prev + 1;
        clearInterval(timer2);
        return prev;
      });
    }, 20);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="contactus" className="relative overflow-hidden text-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-[url('/images/cta-bg.jpg')] bg-cover bg-center bg-no-repeat"
        style={{ filter: 'brightness(0.9)' }}  // Optional: slightly darken the image
      />

      <div className="container mx-auto relative z-10 py-[120px] flex flex-col items-center">
        {/* Stats Badge */}
        <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white text-[14px] px-4 py-2 rounded-full mb-5 gap-2">
          <div className="flex -space-x-1">
            {/* Add your circular icons here */}
            <div className="w-6 h-6 rounded-full bg-red-500" />
            <div className="w-6 h-6 rounded-full bg-yellow-500" />
            <div className="w-6 h-6 rounded-full bg-green-500" />
          </div>
          <span>22.9k đang học</span>
        </div>

        {/* Main Title */}
        <h2 className="text-white font-bold text-[40px] md:text-[56px] leading-[1.2] max-w-[800px] text-center mb-4">
          GIA NHẬP HỘI NGƯỜI YÊU<br />
          TIẾNG TRUNG NGAY HÔM NAY
        </h2>

        {/* Subtitle */}
        <p className="text-white text-[18px] md:text-[20px] max-w-[600px] mx-auto mb-12">
          Join over 10 million people learning interactively.
        </p>

        {/* App Store Buttons */}

        {/* Download Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <Link href="https://apps.apple.com/app/apple-store/id6468914724?pt=126639601&ct=landingpage0225&mt=8">
            <Image src="/images/appstore-button.png" alt="App Store" width={160} height={50} />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=com.meophe.catchinese&hl=vi">
            <Image src="/images/googleplay-button.png" alt="Google Play" width={160} height={50} />
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[800px] mx-auto text-center">
          <div className="text-white">
            <div className="flex text-2xl justify-center mb-2">⭐⭐⭐⭐⭐</div>
            <div className="text-sm">App Store Rating</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">{count2}K+</div>
            <div className="text-sm">Downloads</div>
          </div>
          <div className="text-white">
            <div className="text-2xl font-bold mb-2">{count1}/100</div>
            <div className="text-sm">Người học hài lòng</div>
          </div>
          <div className="text-white">
            <div className="flex justify-center gap-2 mb-2">
              {/* Add your award icons here */}
              <div className="w-8 h-8 bg-white rounded-full" />
              <div className="w-8 h-8 bg-white rounded-full" />
              <div className="w-8 h-8 bg-white rounded-full" />
            </div>
            <div className="text-sm">Giải thưởng giáo dục</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
