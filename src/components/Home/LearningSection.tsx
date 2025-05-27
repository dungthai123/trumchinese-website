import Image from "next/image"
import { ArrowRight, Play } from "lucide-react"

const AUDIO_CARDS = [
  {
    image: "images/featureSection/book.webp",
    alt: "Cô bé quàng khăn đỏ",
  },
  {
    image: "images/featureSection/book2.webp",
    alt: "Chú mèo đi hia",
  },
]

const AudioCard = ({ image, alt }: { image: string; alt: string }) => (
  <div className="relative overflow-hidden rounded-2xl hover:shadow-xl transition-all cursor-pointer">
    <Image
      src={image}
      alt={alt}
      width={600}
      height={180}
      className="w-full h-auto object-cover"
    />
  </div>
)

export default function ChineseLearningSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-purple-100 via-purple-200 to-[#e55733]/30">
      {/* Background blur img */}
      <Image
        src="images/featureSection/background.webp"
        alt="Background"
        height={500}
        width={900}
        className="absolute inset-0 w-full "
      />
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left Content - 3/4 */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <h2 className="text-3xl font-medium text-[#424d5d]/80 md:text-4xl lg:text-5xl">
              VỪA HỌC TỪ VỰNG, VỪA LUYỆN NGHE
            </h2>
            <h1 className="mb-6 text-4xl font-bold text-[#191919] md:text-5xl lg:text-6xl">
              HỌC TIẾNG TRUNG CHƯA BAO GIỜ DỄ ĐẾN THẾ!
            </h1>
            <p className="mb-8 text-lg text-[#424d5d]">
              Trải nghiệm ngay tính năng Sách Nói với hàng nghìn đầu sách
              <br />
              được cập nhật mỗi ngày
            </p>


            <div className="space-y-6">
              <h3 className="text-xl font-bold text-[#424d5d]">CHỌN ĐỂ NGHE THỬ</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {AUDIO_CARDS.map((card, index) => (
                  <AudioCard key={index} {...card} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - 1/4 */}
          <div className="lg:col-span-2 flex items-center justify-center">
            <div className="relative h-[600px] w-[300px] rounded-[40px] p-2">
              <div className="absolute left-0 right-0 top-0 z-10 h-6 w-40 rounded-b-3xl" />
              <div className="h-full w-full overflow-hidden rounded-[32px]">
                <Image
                  src="images/featureSection/storyScreen.webp"
                  alt="Chinese learning app interface"
                  width={300}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
