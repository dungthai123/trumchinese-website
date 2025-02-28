import HeroBanner from "@/components/Home/PaidSearchAdAgency/HeroBanner";
import BorderLine from "@/components/Common/BorderLine";
import WhatWeDo from "@/components/Home/PaidSearchAdAgency/WhatWeDo";
import FunFacts from "@/components/Home/PaidSearchAdAgency/FunFacts";
import ServicesCard from "@/components/Home/PaidSearchAdAgency/ServicesCard";
import SuccessStories from "@/components/Home/PaidSearchAdAgency/SuccessStories";
import BrandsSlider from "@/components/Common/BrandsSlider";
import TestimonialsSlider from "@/components/Common/TestimonialsSlider";
import Cta from "@/components/Common/Cta";
import OurBlog from "@/components/Common/OurBlog";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import OurExperts from "@/components/Common/OurExperts";
import FaqContent from "@/components/Faq/FaqContent";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar />

        <div className="px-0">
          <HeroBanner />
        </div>
      </div>

      {/* <BorderLine /> */}

      {/* này là Phương pháp học */}
      <FunFacts />
      {/* này là Phương Pháp từng bước*/}
      <WhatWeDo />

      {/* này là về đội của trùm chinese */}
      <ServicesCard />
      {/* này là featuré */}
      <SuccessStories />

      {/* này là vừa học vừa nghe chill chill */}
      <div className="px-0">
        <BrandsSlider />
      </div>

      {/* này là testimonials */}
      <div className="px-0">
        <TestimonialsSlider />
      </div>

      {/* này là gía bán */}
      <div className="px-0">
        <OurExperts />
      </div>

      {/* này là FAQs */}
      <div className="px-0">
        <FaqContent />
      </div>

      <BorderLine />

      <div className="px-0">
        <Cta />
      </div>

      <Footer />
    </>
  );
}
