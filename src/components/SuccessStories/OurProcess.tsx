"use client";

const OurProcess = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="bg-[#FFF] rounded-[20px] py-[40px] md:py-[60px] lg:py-[80px] px-[20px] md:px-[50px] lg:px-[50px xl:px-[100px]">
          {/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[50px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              our process
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Your path to paid search excellence starts here!
            </h2>
          </div>

          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
            <div className="relative">
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                1
              </div>
              <div className="pr-[0] xl:pr-[50px] rtl:xl:pr-0 rtl:xl:pl-[50px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  Discovery and Strategy
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                2
              </div>
              <div className="pr-[0] xl:pr-[50px] rtl:xl:pr-0 rtl:xl:pl-[50px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  Campaign Execution
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="text-[75px] text-[#E3E3E3] italic font-bold leading-none mb-[10px]">
                3
              </div>
              <div className="pr-[0] xl:pr-[50px] rtl:xl:pr-0 rtl:xl:pl-[50px]">
                <h3 className="text-black text-[20px] md:text-[22px] font-semibold mb-[10px]">
                  Reporting and Analysis
                </h3>
                <p>
                  Work closely with clients to understand their business goals,
                  target audience, and budget. Develop a comprehensive
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
