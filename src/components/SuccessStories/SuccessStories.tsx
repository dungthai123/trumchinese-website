"use client";

import Link from "next/link"; 

const SuccessStories = () => {
  return (
    <>
      <div className="pt-[50px] md:pt-[60px] lg:pt-[80px] xl:pt-[100px]">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="max-w-[648px] mx-auto text-center mb-[30px] md:mb-[50px]">
            <h4 className="text-black uppercase text-[15px] md:text-[17px] font-medium mb-[15px]">
              success stories
            </h4>

            <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2]">
              Drive traffic, generate leads, achieve success with our paid
              search services!
            </h2>
          </div>

          <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
            <div>
              <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link
                  href="/success-stories/success-story-details/"
                  className="relative block h-[290px] rounded-[20px] p-[30px] xl:p-[0px] bg-cover bg-center w-full"
                  style={{
                    backgroundImage: `url(/images/success-stories1.jpg)`,
                  }}
                >
                  <div className="custom-black-bg-opacity-85 bg-opacity-85 rounded-[20px] absolute left-0 right-0 mx-[30px] bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                    <div>
                      <h3 className="text-white text-[20px] font-medium">
                        EnvyTheme
                      </h3>
                      <p className="text-[#CACACA] text-[14px]">
                        Premium Themes
                      </p>
                    </div>

                    <div className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        className="inline-block"
                      >
                        <path
                          d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                          fill="#EF4335"
                        />
                        <path
                          d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                          fill="#EF4335"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/success-stories/success-story-details/"
                  className="relative block h-[290px] rounded-[20px] p-[30px] bg-cover bg-center w-full"
                  style={{
                    backgroundImage: `url(/images/success-stories2.jpg)`,
                  }}
                >
                  <div className="custom-black-bg-opacity-85 bg-opacity-85 rounded-[20px] absolute left-0 right-0 mx-[30px] bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                    <div>
                      <h3 className="text-white text-[20px] font-medium">
                        Bolster
                      </h3>
                      <p className="text-[#CACACA] text-[14px]">eCommerce</p>
                    </div>

                    <div className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        className="inline-block"
                      >
                        <path
                          d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                          fill="#EF4335"
                        />
                        <path
                          d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                          fill="#EF4335"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>

              <Link
                href="/success-stories/success-story-details/"
                className="relative block h-[290px] rounded-[20px] p-[30px] bg-cover bg-center w-full mt-[25px]"
                style={{
                  backgroundImage: `url(/images/success-stories3.jpg)`,
                }}
              >
                <div className="custom-black-bg-opacity-85 bg-opacity-85 rounded-[20px] absolute left-0 right-0 mx-[30px] bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                  <div>
                    <h3 className="text-white text-[20px] font-medium">
                      Shoponix
                    </h3>
                    <p className="text-[#CACACA] text-[14px]">eCommerce</p>
                  </div>

                  <div className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                        fill="#EF4335"
                      />
                      <path
                        d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            <div>
              <Link
                href="/success-stories/success-story-details/"
                className="relative block h-[290px] rounded-[20px] p-[30px] bg-cover bg-center w-full mb-[25px]"
                style={{
                  backgroundImage: `url(/images/success-stories12.jpg)`,
                }}
              >
                <div className="custom-black-bg-opacity-85 bg-opacity-85 rounded-[20px] absolute left-0 right-0 mx-[30px] bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                  <div>
                    <h3 className="text-white text-[20px] font-medium">
                      Fabulous
                    </h3>
                    <p className="text-[#CACACA] text-[14px]">eCommerce Shop</p>
                  </div>

                  <div className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      className="inline-block"
                    >
                      <path
                        d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                        fill="#EF4335"
                      />
                      <path
                        d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                        fill="#EF4335"
                      />
                    </svg>
                  </div>
                </div>
              </Link>

              <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Link
                  href="/success-stories/success-story-details/"
                  className="relative block h-[290px] rounded-[20px] p-[30px] xl:p-[0px] bg-cover bg-center w-full"
                  style={{
                    backgroundImage: `url(/images/success-stories13.jpg)`,
                  }}
                >
                  <div className="custom-black-bg-opacity-85 bg-opacity-85 rounded-[20px] absolute left-0 right-0 mx-[30px] bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                    <div>
                      <h3 className="text-white text-[20px] font-medium">
                        Rockies
                      </h3>
                      <p className="text-[#CACACA] text-[14px]">
                        Clothing Brands
                      </p>
                    </div>

                    <div className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        className="inline-block"
                      >
                        <path
                          d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                          fill="#EF4335"
                        />
                        <path
                          d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                          fill="#EF4335"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>

                <Link
                  href="/success-stories/success-story-details/"
                  className="relative block h-[290px] rounded-[20px] p-[30px] bg-cover bg-center w-full"
                  style={{
                    backgroundImage: `url(/images/success-stories14.jpg)`,
                  }}
                >
                  <div className="custom-black-bg-opacity-85 bg-opacity-85 rounded-[20px] absolute left-0 right-0 mx-[30px] bottom-[30px] flex justify-between items-center px-[25px] py-[20px]">
                    <div>
                      <h3 className="text-white text-[20px] font-medium">
                        Draftee
                      </h3>
                      <p className="text-[#CACACA] text-[14px]">
                        Interior Design
                      </p>
                    </div>

                    <div className="bg-[#232323] w-[50px] h-[50px] leading-[48px] rounded-full text-center shrink-0 hover:bg-[#000]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="31"
                        viewBox="0 0 31 31"
                        fill="none"
                        className="inline-block"
                      >
                        <path
                          d="M9.04167 23.25C8.65417 23.25 8.39583 23.1208 8.1375 22.8625C7.62083 22.3458 7.62083 21.5708 8.1375 21.0542L21.0542 8.1375C21.5708 7.62083 22.3458 7.62083 22.8625 8.1375C23.3792 8.65417 23.3792 9.42917 22.8625 9.94583L9.94583 22.8625C9.6875 23.1208 9.42917 23.25 9.04167 23.25Z"
                          fill="#EF4335"
                        />
                        <path
                          d="M21.9583 21.9583C21.1833 21.9583 20.6666 21.4417 20.6666 20.6667V10.3333H10.3333C9.55829 10.3333 9.04163 9.81667 9.04163 9.04167C9.04163 8.26667 9.55829 7.75 10.3333 7.75H21.9583C22.7333 7.75 23.25 8.26667 23.25 9.04167V20.6667C23.25 21.4417 22.7333 21.9583 21.9583 21.9583Z"
                          fill="#EF4335"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStories;
