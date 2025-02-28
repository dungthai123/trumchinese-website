"use client";

import Image from "next/image";

import pageBanner3 from "/public/images/page-banner3.png";

const SuccessStoriesHeader = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]"> 
        <div className="container mx-auto">
          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            <div className="lg:pr-[60px] rtl:lg:pr-0 rtl:lg:pl-[60px] xl:pr-[100px] rtl:xl:pr-0 rtl:xl:pl-[100px]">
              <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
                our achievements
              </h4>

              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                From Vision to Victory: Our Achievements, Where Dreams
                Transcend into Reality
              </h2>

              <p>
                Transforming your brand's online presence and generating
                meaningful results is our top priority at{" "}
                <strong>Adla</strong>. As a leading paid search ad agency.
              </p>
            </div>

            <div>
              <Image src={pageBanner3} alt="Page Banner" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoriesHeader;
