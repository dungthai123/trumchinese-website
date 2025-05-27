import HeroBanner from "@/components/Home/HeroBanner";
import BorderLine from "@/components/Common/BorderLine";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import LazyWrapper from "@/components/Common/LazyWrapper";
import { Suspense } from "react";

// Lazy load components that are below the fold
import dynamic from "next/dynamic";

const WhatWeDo = dynamic(() => import("@/components/Home/WhatWeDo"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const FunFacts = dynamic(() => import("@/components/Home/FunFacts"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

const ServicesCard = dynamic(() => import("@/components/Home/ServicesCard"), {
  loading: () => <div className="h-80 bg-gray-100 animate-pulse rounded-lg" />
});

const SuccessStories = dynamic(() => import("@/components/Home/SuccessStories"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const BrandsSlider = dynamic(() => import("@/components/Common/BrandsSlider"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />
});

const TestimonialsSlider = dynamic(() => import("@/components/Common/TestimonialsSlider"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

const Cta = dynamic(() => import("@/components/Common/Cta"), {
  loading: () => <div className="h-48 bg-gray-100 animate-pulse rounded-lg" />
});

const OurExperts = dynamic(() => import("@/components/Common/OurExperts"), {
  loading: () => <div className="h-80 bg-gray-100 animate-pulse rounded-lg" />
});

const FaqContent = dynamic(() => import("@/components/Faq/FaqContent"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />
});

const LearningSection = dynamic(() => import("@/components/Home/LearningSection"), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg" />
});

export default function Home() {
  return (
    <>
      <div className="bg-white">
        <Navbar />
        <div className="px-0">
          <HeroBanner />
        </div>
      </div>

      {/* Lazy load below-the-fold content */}
      <LazyWrapper>
        <FunFacts />
      </LazyWrapper>

      <LazyWrapper>
        <LearningSection />
      </LazyWrapper>

      {/* <LazyWrapper>
        <WhatWeDo />
      </LazyWrapper> */}

      <LazyWrapper>
        <ServicesCard />
      </LazyWrapper>

      <LazyWrapper>
        <SuccessStories />
      </LazyWrapper>

      <LazyWrapper>
        <div className="px-0">
          <BrandsSlider />
        </div>
      </LazyWrapper>

      <LazyWrapper>
        <div className="px-0">
          <TestimonialsSlider />
        </div>
      </LazyWrapper>

      <LazyWrapper>
        <div className="px-0">
          <OurExperts />
        </div>
      </LazyWrapper>

      <LazyWrapper>
        <div className="px-0">
          <FaqContent />
        </div>
      </LazyWrapper>

      <BorderLine />

      <LazyWrapper>
        <div className="px-0">
          <Cta />
        </div>
      </LazyWrapper>

      <Footer />
    </>
  );
}
