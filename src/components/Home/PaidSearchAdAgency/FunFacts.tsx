"use client";

import Image from "next/image";
import Link from "next/link";

const FunFacts = () => {
  return (
    <section className="relative text-center bg-[#F9E0C4] py-[80px] overflow-hidden w-full min-h-[120vh] flex flex-col justify-center">
      {/* Background Mountain Path */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/images/mountain-path.png" alt="Mountain Path" layout="fill" objectFit="cover" priority />
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <span className="bg-black text-white px-4 py-2 rounded-full text-[14px] uppercase">Phương pháp 3 bước nhảy</span>
        <h2 className="text-black text-[40px] md:text-[48px] font-bold leading-tight mt-4">
          Con đường ngắn nhất để nói được tiếng Trung
        </h2>
        <p className="text-gray-800 text-[18px] mt-4 max-w-[700px] mx-auto">
          Phương pháp từ một người mắc chứng Aphantasia – hội chứng tưởng tượng không được hình ảnh – gặp khó khăn trong việc học ngôn ngữ cho đến thành thạo 3 ngôn ngữ, 2 nhạc cụ, và 4 ngôn ngữ lập trình.
        </p>
        
        {/* 3 Step Process Title */}
        <div className="mt-12 text-center">
          <span className="bg-[#F4A261] text-white px-4 py-2 rounded-full text-[14px] uppercase">3-step process</span>
          <h2 className="text-[#FFFFFF] text-[36px] md:text-[42px] font-bold mt-4">
            3 BƯỚC ĐI TỪ DỞ ĐẾN GIỎI NGÔN NGỮ
          </h2>
        </div>
        
        {/* 3 Step Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-[32px_8px_8px_32px] text-left flex flex-col items-center">
            <h3 className="text-[#33A3EE] text-[24px] font-bold">01</h3>
            <h4 className="text-[#33A3EE] text-[36px] font-semibold mt-2">Làm chủ phát âm</h4>
            <Image src="/images/step1.png" alt="Step 1 Illustration" width={150} height={150} className="my-6" />
            <p className="text-gray-700 mt-2 text-center">
              Đảm bảo phát âm chắc chắn phải chuẩn trước khi học từ vựng cao siêu. Phát âm sai coi như chưa học.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-6 rounded-[8px] text-left flex flex-col items-center">
            <h3 className="text-[#FFC91C] text-[24px] font-bold">02</h3>
            <h4 className="text-[#FFC91C] text-[36px] font-semibold mt-2">Nhồi từ vựng & ngữ pháp</h4>
            <Image src="/images/step2.png" alt="Step 2 Illustration" width={150} height={150} className="my-6" />
            <p className="text-gray-700 mt-2 text-center">
              Thu nạp thật nhiều từ vựng & ngữ pháp qua giáo trình, sách song ngữ. Đọc bất kỳ thứ gì trong tầm mắt.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-6 rounded-[8px_32px_32px_8px] text-left flex flex-col items-center">
            <h3 className="text-[#3DDB60] text-[24px] font-bold">03</h3>
            <h4 className="text-[#3DDB60] text-[36px] font-semibold mt-2">Nghe - Đọc - Nói:Lặp lại thật nhiều</h4>
            <Image src="/images/step3.png" alt="Step 3 Illustration" width={150} height={150} className="my-6" />
            <div className="mt-2 flex items-center bg-gray-200 p-3 rounded-lg w-full">
              <audio controls className="w-full">
                <source src="/audio/hoangtube.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            <p className="text-gray-700 mt-2 text-center">
              Nghe nhiều, nói nhiều bằng việc nghe nói lặp lại (shadowing) hoặc luyện nói với người có thể sửa cho mình.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
