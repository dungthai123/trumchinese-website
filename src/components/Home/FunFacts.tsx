/* app/components/LanguageMethod.tsx */
"use client"

import Image from "next/image"

const CARDS = [
  {
    tag: "TẠO NỀN MÓNG",
    tagColor: "bg-[#9470FF]",
    topColor: "bg-[#F7F5FF]",
    accent: "text-[#8A4FFF]",
    bottomColor: "bg-[#C9ADFF]",
    title: "NẠP TỪ VỰNG & RÈN PHÁT ÂM",
    body: "Hơn 1200 hán tự được hình ảnh hoá. Tạo nền tảng vững chắc để học nâng cao.",
    img: "images/4StepSection/habit.webp",
    alt: "Step 1 Illustration - Learning vocabulary",
  },
  {
    tag: "TẮM NGÔN NGỮ",
    tagColor: "bg-[#00C4A7]",
    topColor: "bg-[#E6FFF9]",
    accent: "text-[#00C4A7]",
    bottomColor: "bg-[#00C4A7]",
    title: "TĂNG TỐC THU NẠP NHIỀU DỮ LIỆU",
    body: "Nạp thông tin từ sách nói, báo chí, video song ngữ. Nội dung thực tiễn và phong phú.",
    img: "images/4StepSection/showing.webp",
    alt: "Step 2 Illustration - Absorbing language content",
  },
  {
    tag: "PHƠI NGÔN NGỮ",
    tagColor: "bg-[#FF4FDC]",
    topColor: "bg-[#FFE6F5]",
    accent: "text-[#FF4FDC]",
    bottomColor: "bg-[#FF008C]",
    title: "NÓI NHIỀU HƠN VÀ CẢI THIỆN MỖI NGÀY",
    body: "Luyện nói và được sửa sai bằng công nghệ AI độc quyền.",
    img: "images/4StepSection/expose.webp",
    alt: "Step 3 Illustration - Speaking practice",
  },
  {
    tag: "ÔN LUYỆN LÀ “THÓI QUEN”",
    tagColor: "bg-[#FF9900]",
    topColor: "bg-[#FFF6E6]",
    accent: "text-[#FF9900]",
    bottomColor: "bg-[#FF9900]",
    title: "ÔN LUYỆN ĐỂ BIẾN KIẾN THỨC THÀNH KỸ NĂNG",
    body: "Luyện đề HSK thực tế, có đáp án và giải thích chi tiết.",
    img: "images/4StepSection/habit.webp",
    alt: "Step 4 Illustration - Practice and skill development",
  },
]

const LanguageMethod = () => {
  return (
    <section className="relative w-screen overflow-hidden py-10">
      {/* animated background */}
      {/* <Image
        src="/images/4StepSection/boomanimation.gif"
        alt="Colorful pattern animation"
        fill
        className="object-cover -z-10"
        priority
      /> */}

      {/* section content */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 text-center">
        {/* Section Header */}


        
        <span className="inline-flex items-center rounded-full bg-[#4AE290] px-4 py-1 text-sm font-bold text-black">
          <span className="mr-1">Trùm Chinese</span> Phương pháp mới hiệu quả
        </span>
        <h2 className="mt-4 text-[36px] font-bold leading-tight text-black md:text-[48px]">
          4 BƯỚC “ĐÁNH TAN TẮC”
        </h2>
        <h3 className="text-[36px] font-bold text-[#33A3EE] md:text-[48px]">
          NÓI SỢ NGÔN NGỮ
        </h3>

        {/* card grid */}
        <div className="mt-12 grid auto-rows-fr gap-3 md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map(
            (
              {
                tag,
                tagColor,
                topColor,
                accent,
                bottomColor,
                title,
                body,
                img,
                alt,
              },
              i
            ) => (
              <article
                key={i}
                className="flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-200 bg-white shadow-sm"
              >
                {/* top half */}
                <div className={`${topColor} flex-1 p-6 text-left`}>
                  <span
                    className={`${tagColor} mb-6 inline-block rounded-[16px] px-4 py-2 text-[16px] font-bold text-white`}
                  >
                    {tag}
                  </span>
                  <h4
                    className={`${accent} text-[24px] font-extrabold leading-snug md:text-[28px]`}
                  >
                    {title}
                  </h4>
                  <p className="mt-6 text-[16px] leading-relaxed text-[#191919]">
                    {body}
                  </p>
                </div>

{/* bottom illustration */}

<div className={`${topColor} relative h-[200px] flex justify-center`}>
  
  {/* Colored section - 100px tall */}
  <div className={`${bottomColor} h-[100px] w-full absolute bottom-0`} />

  {/* Image - 160px tall, overlapping the colored section */}
  <Image
    src={img}
    alt={alt}
    width={160}
    height={160}
    className="relative z-10 -mb-10 object-contain"
  />
</div>

              </article>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default LanguageMethod
