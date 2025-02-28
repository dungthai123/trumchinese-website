"use client";

import Image from "next/image";

const ServicesCard = () => {
  return (
    <section id="services" className="py-[100px] bg-[#FFFFFF] text-center">
      <div className="container mx-auto max-w-[1100px]">
        {/* Top Section with Tags */}
        <h2 className="text-black font-bold text-[32px] leading-[1.2] mb-6 px-4 text-center">NẾU BẠN ĐANG</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12 px-4">
          {[ 
            "Biết cơ bản tiếng Trung và muốn tăng tốc", 
            "Mệt mỏi mỗi lần tra cứu từ", 
            "Hay quên mặt chữ", 
            "Cần người sửa lỗi phát âm", 
            "Cần tăng tốc nạp nhiều từ vựng", 
            "Làm quen tốc độ nói của người bản xứ"
          ].map((text, index) => (
            <div key={index} className="border border-gray-300 rounded-full px-4 py-2 flex items-center gap-2 text-gray-700">
              {text}
              <img src="/icons/icon-badge.svg" alt="badge" className="w-5 h-5" />
            </div>
          ))}
        </div>

        {/* Main Heading */}
        <h2 className="text-black font-bold text-[42px] leading-[1.2] mb-10 px-4 text-left lg:text-left text-center">
          VỀ ĐỘI CỦA TRÙM CHINESE ĐỂ TINH THÔNG TIẾNG TRUNG NHANH HƠN
        </h2>

        {/* Single Image Mockup & Statistics */}
        <div className="flex flex-col lg:flex-row items-center gap-14 px-4">
          <div className="w-full lg:w-1/2">
            <Image src="/images/phone-mockup.png" alt="Phone Mockup" width={500} height={600} className="rounded-xl" />
          </div>

          {/* Stats Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 text-center lg:text-left">
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-500 text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 font-bold text-xl">App Store Rating</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-black font-bold text-3xl">100K+</p>
              <p className="text-gray-700 text-xl">Downloads</p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-black font-bold text-3xl">98/100</p>
              <p className="text-gray-700 text-xl">Người học hài lòng</p>
            </div>
            <div className="flex items-center gap-3">
              <img src="/icons/award-icon.svg" alt="Award" className="w-6 h-6" />
              <p className="text-gray-700 text-xl">Giải thưởng giáo dục</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
