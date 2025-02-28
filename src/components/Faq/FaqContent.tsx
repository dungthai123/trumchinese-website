"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react"; // Icon library for (+) and (-)

const faqs = [
  {
    question: "Ứng dụng Trùm Chinese là gì?",
    answer:
      "Trùm Chinese – Ứng dụng học tiếng Trung công nghệ AI tốt nhất hiện nay, luyện nói và chấm điểm phát âm chi tiết, giúp bạn nghe - nói - đọc - viết một cách tự nhiên và hiệu quả.",
  },
  {
    question: "Có những tính năng nào hay?",
    answer: (
      <>
        <p className="mb-2">
          Trùm Chinese có rất nhiều tính năng thú vị và hữu ích để giúp bạn học tiếng Trung một cách hiệu quả:
        </p>
        <p className="mb-2">
          1. Gia sư AI+: Luyện nói với AI, nhận phản hồi chi tiết về phát âm và ngữ điệu của bạn. AI sẽ chỉ ra những lỗi cụ thể và cách khắc phục.
        </p>
        <p className="mb-2">
          2. Luyện đề HSK: Hệ thống đề thi thông minh với tính năng dịch nhanh, giải thích chi tiết từng đáp án. Giúp bạn ôn thi hiệu quả và tiết kiệm thời gian.
        </p>
        <p className="mb-2">
          3. Học từ vựng: Phương pháp học từ vựng theo ngữ cảnh, kết hợp với công nghệ spaced repetition giúp ghi nhớ từ vựng lâu dài.
        </p>
        <p>
          4. Tin tức tiếng Trung: Cập nhật tin tức mới nhất bằng tiếng Trung, giúp bạn cải thiện kỹ năng đọc hiểu và mở rộng vốn từ vựng thực tế.
        </p>
      </>
    ),
  },
  {
    question: "Trùm Chinese có những gói nào?",
    answer: (
      <>
        <p className="mb-2">
          Gói PlusAI: 3 tháng, 6 tháng, 1 năm:
        </p>
        <p className="mb-2">
          Mở khoá toàn bộ tính năng bao gồm luyện nói cùng gia sư AI, AI chấm chữa bài viết HSK.
        </p>
        <p className="mb-2">
          Gói Plus: 3 tháng, 6 tháng, 1 năm:
        </p>
        <p className="mb-2">
          Mở khoá toàn bộ tính năng, ngoại trừ tính năng luyện nói cùng gia sư AI .
        </p>
      </>
    ),
  },
  {
    question: "Có thật sự hiệu quả như lời đồn?",
    answer:
      "Chắc chắn rồi! Trùm Chinese đã giúp hàng ngàn người học nghe - nói - đọc - viết tiếng Trung một cách hiệu quả. Trùm Chinese hỗ trợ hoàn tiền trong vòng 3 ngày đầu sau khi thanh toán, bạn có thể yên tâm nếu trải nghiệm học không như kỳ vọng.",
  },
];

// Add this interface above the component
interface FaqContentProps {
  className?: string;
}

const FaqContent = ({ className }: FaqContentProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className={`py-[80px] bg-[#FFFFFF] ${className}`}>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Left Side: Title with More Vertical Space */}
        <div className="text-left">
          <h2 className="text-black text-[42px] md:text-[50px] font-semibold leading-[1.3]">
            BẠN THẮC MẮC <br /> TRÙM CHINESE TRẢ LỜI
          </h2>
        </div>

        {/* Right Side: FAQ List with More Space */}
        <div className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0">
              <button
                className="w-full text-left py-6 flex justify-between items-center font-medium text-[22px] text-black hover:text-[#666]"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus size={24} className="text-black transition-all duration-300" />
                ) : (
                  <Plus size={24} className="text-black transition-all duration-300" />
                )}
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden text-gray-600 text-[20px] pb-6 leading-[1.7]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqContent;
