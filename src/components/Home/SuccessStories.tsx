"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start start", "end end"] 
  });

  const features = [
    {
      title: "NÓI SAI KHÔNG SỢ BỊ NGƯỜI KHÁC ĐÁNH GIÁ",
      subtitle: "GIA SƯ AI+ CỦA TRÙM CHINESE SẼ ĐÁNH GIÁ BẠN :)",
      image: "/images/feature-1.webp",
      bgImage: "/images/bg-green.webp",
      alt: "AI Tutor Feature",
      description: "Công nghệ AI hỗ trợ đắc lực cùng bạn thực hành liên tục, chỉ ra lỗi phát âm và nhận xét chi tiết. Để bạn nắm cách phát âm chuẩn thanh mẫu, vận mẫu, thanh điệu.",
      cta: "Thử ngay"
    },
    {
      title: "cập nhật tin tức bằng tiếng trung mỗi ngày",
      // subtitle: "ĐỌC HIỂU ĐƯỢC ĐẦY ĐỦ 1 CUỐN SÁCH",
      image: "/images/feature-5.webp",
      bgImage: "/images/bg-pink.webp",
      alt: "Feature 4",
      description: "Mở rộng vốn từ vựng, quen mặt chữ, nâng cấp khả năng nghe",
    },
  ];

  return (
    <section 
      id="features" 
      ref={sectionRef} 
      className="relative flex flex-col items-center gap-20 py-24"
    >
      {features.map((feature, index) => (
        <div 
          key={index}
          className="w-full flex items-center justify-center"
        >
          <div className="sticky top-24 w-full flex items-center justify-center px-6">
            <div 
              className={`relative flex flex-col items-center rounded-[48px] max-w-[1400px] mx-auto shadow-lg overflow-hidden min-h-[700px] ${
                index === features.length - 1 ? 'text-center' : 'lg:flex-row items-center justify-between'
              }`}
              style={{
                backgroundImage: `url(${feature.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {index === features.length - 1 ? (
                // Last card layout
                <>
                  <div className="w-full space-y-6 z-10 p-8">
                    <h2 className={`font-bold text-[40px] leading-[1.2] ${index === 1 ? 'text-black' : 'text-white'}`}>
                      {feature.title}
                    </h2>
                    <p className={`text-lg leading-relaxed max-w-3xl mx-auto ${index === 1 ? 'text-black' : 'text-white'}`}>
                      {feature.description}
                    </p>
                  </div>
                  <div className="w-full z-10 p-0 sm:p-8">
                    <Image 
                      src={feature.image}
                      alt={feature.alt}
                      width={2200} 
                      height={600} 
                      className="w-full h-auto object-contain sm:object-scale-down"
                      priority
                    />
                  </div>
                </>
              ) : (
                // Original layout for other cards
                <>
                  <div className="w-full lg:w-1/2 space-y-3 sm:space-y-6 z-10 p-4 sm:p-8">
                    <h2 className={`font-bold text-[40px] leading-[1.2] ${index === 1 ? 'text-black' : 'text-white'}`}>
                      {feature.title}
                    </h2>
                    <h3 className={`font-bold text-[32px] leading-[1.2] ${index === 1 ? 'text-black' : 'text-white'}`}>
                      {feature.subtitle}
                    </h3>
                    <p className={`text-lg leading-relaxed ${index === 1 ? 'text-black' : 'text-white'}`}>
                      {feature.description}
                    </p>
                    <button 
                      onClick={() => {
                        document.getElementById('contactus')?.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }} 
                      className="bg-white text-black text-lg font-semibold px-8 py-4 rounded-full shadow-md hover:bg-gray-200 w-fit transition-all"
                    >
                      {feature.cta}
                    </button>
                  </div>
                  <div className="w-full lg:w-1/2 z-10 p-4 sm:p-8">
                    <Image 
                      src={feature.image}
                      alt={feature.alt}
                      width={700} 
                      height={700} 
                      className="w-full h-auto object-scale-down"
                      priority
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SuccessStories;

