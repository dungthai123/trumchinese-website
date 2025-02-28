"use client";

import Image from "next/image";

import clutchLogo from "/public/images/clutch-logo.png";
import trustpilotLogo from "/public/images/trustpilot.png";

const Reviews = () => {
  return (
    <>
      <div className="lg:pl-[50px] lg:rtl:pl-0 lg:rtl:pr-[50px] xl:pl-[105px] xl:rtl:pl-0 xl:rtl:pr-[105px]">
        <div className="bg-[#FAF4F4] rounded-[20px] py-[40px] sm:py-[80px] md:sm:py-[115px] lg:sm:py-[80px] 2xl:sm:py-[115px] px-[30px] sm:px-[70px] md:px-[100px] lg:px-[50px] xl:px-[100px]">
          <div>
            <div className="flex items-center space-x-[60px] sm:space-x-[95px] rtl:space-x-reverse mb-[14px]">
              <h4 className="text-black font-medium leading-none">Review On</h4>

              <div className="leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="112"
                  height="22"
                  viewBox="0 0 112 22"
                  fill="none"
                >
                  <path d="M21.0824 0H0V21.0545H21.0824V0Z" fill="#00B67A" />
                  <path d="M43.702 0H22.6196V21.0545H43.702V0Z" fill="#00B67A" />
                  <path
                    d="M66.5411 0H45.4587V21.0545H66.5411V0Z"
                    fill="#00B67A"
                  />
                  <path
                    d="M89.1607 0H68.0784V21.0545H89.1607V0Z"
                    fill="#00B67A"
                  />
                  <path d="M112 0H90.9175V21.0545H112V0Z" fill="#DCDCE6" />
                  <path
                    d="M90.9175 0H101.459V20.8351H90.9175V0Z"
                    fill="#00B67A"
                  />
                  <path
                    d="M10.3215 14.036L13.6156 13.1587L14.9333 17.3258L10.3215 14.036ZM17.7882 8.77241H12.0784L10.3215 3.50879L8.56466 8.77241H3.07446L7.68623 12.0622L5.92937 17.3258L10.5411 14.036L13.396 12.0622L17.7882 8.77241Z"
                    fill="white"
                  />
                  <path
                    d="M33.1606 14.036L36.4548 13.1587L37.7724 17.3258L33.1606 14.036ZM40.4077 8.77241H34.6979L32.941 3.50879L31.1842 8.77241H25.4744L30.0861 12.0622L28.3293 17.3258L32.941 14.036L35.7959 12.0622L40.4077 8.77241Z"
                    fill="white"
                  />
                  <path
                    d="M56 14.036L59.2941 13.1587L60.6118 17.3258L56 14.036ZM63.2471 8.77241H57.5372L55.7804 3.50879L54.0235 8.77241H48.3137L52.9255 12.0622L51.3882 17.3258L56 14.036L58.8549 12.0622L63.2471 8.77241Z"
                    fill="white"
                  />
                  <path
                    d="M78.6195 14.036L81.9136 13.1587L83.2313 17.3258L78.6195 14.036ZM86.0862 8.77241H80.3764L78.6195 3.50879L76.8626 8.77241H71.1528L75.7646 12.0622L74.0077 17.3258L78.6195 14.036L81.4744 12.0622L86.0862 8.77241Z"
                    fill="white"
                  />
                  <path
                    d="M101.459 14.036L104.753 13.1587L106.071 17.3258L101.459 14.036ZM108.706 8.77241H102.996L101.239 3.50879L99.702 8.77241H93.9922L98.6039 12.0622L96.8471 17.3258L101.459 14.036L104.314 12.0622L108.706 8.77241Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>

            <div className="flex items-center space-x-[30px] sm:space-x-[45px] rtl:space-x-reverse">
              <Image src={trustpilotLogo} alt="trustpilotLogo" />
              <h4 className="text-black font-medium">7584+ Reviews</h4>
            </div>
          </div>

          <div className="bg-[#E3E3E3] h-[1px] my-[30px] sm:my-[50px]"></div>

          <div>
            <div className="flex items-center space-x-[55px] rtl:space-x-reverse mb-[14px]">
              <h4 className="text-black font-medium leading-none">Review On</h4>

              <div className="leading-none">
                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
                <i className="bx bxs-star text-[#EF4335] text-[21px]"></i>
              </div>
            </div>

            <div className="flex items-center space-x-[50px] rtl:space-x-reverse">
              <Image src={clutchLogo} alt="clutchLogo" />
              <h4 className="text-black font-medium">1500+ Reviews</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
