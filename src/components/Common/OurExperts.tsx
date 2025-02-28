"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const OurOffer = () => {
  return (
    <section id="purchase" className="relative py-[100px] bg-black text-center"
      style={{ backgroundImage: "url('/images/offer-bg-pattern.png')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <motion.h2
          className="text-white text-[50px] font-bold mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ƯU ĐÃI GIẢM 10% CHO BẠN HỌC KHI LIÊN HỆ FANPAGE
        </motion.h2>

        {/* Offer Box */}
        <motion.div
          className="bg-yellow-400 text-left text-black rounded-2xl px-6 py-4 max-w-lg mx-auto flex flex-col gap-2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg font-semibold">Gói PlusAI+ 1 năm, giá gốc:</p>
          <p className="text-[32px] font-bold">599K, <span className="text-lg font-medium">tương đương 50k/tháng</span></p>
          <p className="text-sm">Mở khoá toàn bộ tính năng và bài học</p>
        </motion.div>

        {/* Call to Action Button */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="https://www.facebook.com/trumtiengtrungHSK"
            className="inline-flex items-center px-6 py-3 bg-white text-black text-lg font-semibold rounded-full shadow-md hover:bg-gray-200 transition-all"
          >
            <Image src="/images/messenger-icon.png" alt="Messenger" width={24} height={24} className="mr-2" />
            Nhận ưu đãi
          </Link>
        </motion.div>

        {/* Feature Boxes */}
        <motion.div
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {[
            {
              title: "Kho sách nói, video, báo chí song ngữ",
              description: "Luyện phản xạ 100+ tình huống, AI sửa lỗi sai, hướng dẫn cách nói như người bản xứ"
            },
            {
              title: "Luyện phát âm với AI",
              description: "AI phân tích giọng nói, chỉ ra lỗi sai và hướng dẫn cách phát âm chuẩn xác"
            },
            {
              title: "Học từ vựng thông minh",
              description: "Hệ thống ghi nhớ từ vựng thông minh, giúp bạn học nhanh và nhớ lâu hơn"
            },
            {
              title: "Luyện nghe hiểu",
              description: "Các bài tập nghe đa dạng từ nhiều nguồn, giúp cải thiện kỹ năng nghe hiểu"
            },
            {
              title: "Trò chuyện với AI",
              description: "Thực hành giao tiếp với AI thông minh, tăng cường tự tin khi nói"
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white text-black p-4 rounded-xl shadow-sm flex items-start gap-4">
              <Image src="/images/feature-icon.png" alt="Feature" width={24} height={24} />
              <div>
                <p className="font-semibold">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurOffer;
