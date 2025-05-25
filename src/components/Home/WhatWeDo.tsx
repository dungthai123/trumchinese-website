"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start start", "end end"] 
  });
  
  const translateY1 = useTransform(scrollYProgress, [0, 0.3], [0, -1200]);
  const translateY2 = useTransform(scrollYProgress, [0.4, 0.7], [0, -1200]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section 
      id="what-we-do-section" 
      ref={sectionRef} 
      className="relative bg-white text-center flex flex-col items-center min-h-[200vh]"
    >
      <div className="sticky top-0 flex flex-col items-center w-full min-h-screen py-[40px]">
        <div className="container mx-auto max-w-[1200px] px-4 mb-12">
          <h2 className="text-black font-bold text-[40px] leading-[1.2] mb-6 text-left">
            3 buớc để bắt đầu học bất kỳ ngôn ngữ nào
          </h2>

        </div>

        <div className="relative w-full max-w-[1200px] h-[200px] md:h-[900px]">
          {[ 
            { 
              title: "nền tảng cơ bản: phát âm",
              desc: (
                <>
                  <p className="mb-4">Thực hành có phản hồi: Ghi âm giọng nói của bản thân và so sánh với giọng người bản xứ.</p>
                  <p className="mb-4">Xem kỹ nhận xét và sửa lỗi phát âm.</p>
                  <p>Đừng bỏ qua những lỗi nhỏ; nếu không được khắc phục, chúng sẽ dần trở thành thói quen khó sửa.</p>
                </>
              ),
              img: "/images/card1.webp",
              y: translateY1 
            },
            { 
              title: "Học: đọc và nghe thật nhiều",
              desc: (
                <>
                  <p className="mb-4">Sử dụng sách song ngữ có audio để vừa đọc vừa nghe.</p>
                  <p className="mb-4">Bắt đầu với các cuốn sách truyện đơn giản để xây dựng nền tảng, tăng dần theo thời gian.</p>
                  <p className="mb-4">Chạm để dịch từ, lưu lại từ để ôn tập.</p>
                </>
              ),
              img: "/images/card2.webp",
              y: translateY2 
            },
            { 
              title: "Hành: nói nhiều nhất có thể",
              desc: (
                <>
                  <p className="mb-4">Nói nhiều bằng cách nghe nói lại (shadowing) hoặc luyện đối thoại trực tiếp</p>
                  <p className="mb-4">Luyện shadowing khi nghe sách nói</p>
                  <p className="mb-4">Luyện nói có feedback và chấm điểm phát âm cùng gia sư AI của Trùm Chinese.</p>
                </>
              ),
              img: "/images/card3.webp",
              y: translateY3 
            }
          ].map((card, index) => (
            <motion.div
              key={index}
              className="absolute w-full bg-white rounded-[40px] p-8 md:p-8 px-4 flex flex-col md:flex-row h-auto md:h-[600px] shadow-[0_0_50px_0_rgba(56,56,56,0.1)]"
              style={{ y: card.y, zIndex: 3 - index }}
              initial={{ y: 0 }}
            >
              <div className="flex-1 relative text-left">
                <h3 className="text-black font-bold text-[32px] md:text-[40px] text-left mb-6 md:mb-0">{card.title}</h3>
                <div className="relative md:absolute md:bottom-0 md:left-0 mb-6 md:mb-0">
                  <div className="text-gray-600 text-lg text-left">{card.desc}</div>
                </div>
              </div>
              
              <div className="w-full md:w-1/2 md:pl-8">
                <Image 
                  src={card.img} 
                  alt={`Card ${index + 1}`} 
                  width={500} 
                  height={350} 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
