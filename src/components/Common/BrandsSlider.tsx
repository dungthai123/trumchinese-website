"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { useRef } from "react";

const books = [
  { image: "/images/book1.png", title: "The Subtle Art of Not Giving a F*ck" },
  { image: "/images/book2.png", title: "Love 2.0" },
  { image: "/images/book3.png", title: "Food: WTF Should I Eat?" },
  { image: "/images/book4.png", title: "High Output Management" },
  { image: "/images/book5.png", title: "The Soulmate Experience" },
  { image: "/images/book6.png", title: "Thinking, Fast and Slow" },
  { image: "/images/book7.png", title: "Atomic Habits" },
  { image: "/images/book8.png", title: "Deep Work" },
  { image: "/images/book9.png", title: "The Psychology of Money" },
  { image: "/images/book10.png", title: "Make Time" },
];

const BookCarousel = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  
  const translateX = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

  return (
    <section
      ref={sectionRef}
      className="bg-[#1C1C1C] py-16 px-8"
    >
      <div className="container mx-auto">
        <div className="mb-8">
          <div className="inline-block bg-[#FE7E00] text-white rounded-full px-4 py-1 mb-4">
            28 days
          </div>
          <h1 className="text-4xl font-bold mb-2">
            <span className="text-[#FE7E00]">THỬ THÁCH 60 NGÀY</span>
            <span className="text-white"> ĐỌC 8 CUỐN SÁCH</span>
          </h1>
          <div className="text-gray-300 space-y-2">
            <p>Bạn chắc chắn sẽ:</p>
            <div className="flex flex-wrap gap-2">
              {['Thuộc ít nhất 2000 từ vựng', 'Phát âm chuẩn hơn', 'Phản xạ tốt hơn', 'Quen mặt mọi ngữ pháp', 'Kỹ năng nghe phát triển nhanh vượt trội'].map((item) => (
                <div key={item} className="flex items-center bg-gray-800 rounded-full px-3 py-1">
                  <svg className="w-4 h-4 mr-2 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {books.slice(0, 8).map((book, index) => (
            <div key={index} className="relative group max-w-[240px] mx-auto w-full">
              <div className={`bg-gradient-to-b rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105`}>
                <Image
                  src={book.image}
                  alt={book.title}
                  width={240}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-full px-3 py-1">
                <span className="text-white text-sm">Tuần {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookCarousel;
