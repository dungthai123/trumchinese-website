"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    name: "Minh Anh",
    date: "09/24/24",
    text: "Phần luyện tập hội thoại với AI cực kỳ hữu ích, mình cảm thấy tự tin hơn khi giao tiếp. Nội dung bài học cũng rất đa dạng, phù hợp với cả người mới bắt đầu và nâng cao!",
  },
  {
    id: 2,
    rating: 5,
    name: "David Tran",
    date: "01/02/25",
    text: "I've tried many Chinese learning apps, but this one stands out. The voice recognition for pronunciation correction is amazing, the spaced repetition flashcards helped me remember vocabulary much better!",
  },
  {
    id: 3,
    rating: 5,
    name: "Lê Thảo Linh",
    date: "01/11/25",
    text: "Trùm Chinese giúp mình rất nhiều! Mình thích nhất phần đọc truyện song ngữ vì nó giúp mình học từ vựng trong ngữ cảnh thực tế. Hơn nữa, AI có thể sửa lỗi phát âm cho mình, điều này rất hữu ích khi tự học!",
    highlight: "Rất hay",
  },
  {
    id: 4,
    rating: 5,
    name: "Jason Wong",
    date: "22/05/23",
    text: "I started using this app three months ago, as a Chinese American, my progress has been incredible! The grammar explanations are short and easy to understand. Also, the AI tutor provides instant feedback, making my learning experience very efficient!.",
  },
  {
    id: 5,
    rating: 5,
    name: "Trần Đức Hải",
    date: "12/14/24",
    text: "Tính năng luyện thi HSK trên ứng dụng rất hữu ích. Mình có thể làm bài kiểm tra mô phỏng, xem đáp án giải thích chi tiết và cải thiện điểm yếu của mình. Nhờ ứng dụng này, mình đã đạt HSK4 dễ dàng!",
  },
];

const TestimonialsSlider = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <section
      ref={sectionRef}
      className="relative py-[120px] bg-[#F8F5ED] overflow-hidden"
      style={{ backgroundImage: "url('/images/review-bg-pattern.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="container mx-auto text-center">
        {/* Title Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-black font-bold text-[50px]">
            NGƯỜI HỌC YÊU QUÝ TRÙM CHINESE
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex flex-col justify-between h-full text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div>
                {/* Star Rating */}
                <div className="flex text-yellow-500 text-xl mb-2">
                  {Array(testimonial.rating).fill("⭐").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>

                {/* User Info */}
                <h5 className="text-gray-900 font-semibold text-lg">{testimonial.name}, {testimonial.date}</h5>
              </div>
              
              {/* Highlighted Text (if exists) */}
              {testimonial.highlight && (
                <p className="text-blue-600 font-semibold mt-2">{testimonial.highlight}</p>
              )}
              
              {/* Testimonial Text */}
              <p className="text-gray-700 text-[16px] leading-[1.5] mt-3 self-end">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;