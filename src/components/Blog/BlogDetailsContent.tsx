"use client";

import Link from "next/link";
import { ArrowRight, ArrowLeft } from "iconsax-react";
import Image from "next/image";

import BlogPost1 from "/public/images/blog-post1.jpg"; 
import BlogPost2 from "/public/images/blog-post10.png"; 
import userImg1 from "/public/images/user5.png"; 
import userImg2 from "/public/images/user6.png"; 
import CommentForm from "./CommentForm";
import Sidebar from "./Sidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="space-y-[15px] mb-[30px] md:mb-[40px] lg:mb-[70px]">
                <Image src={BlogPost1} alt="BlogPost" className="rounded-[20px] mb-[30px]" />

                <p>January 21, 2022</p>

                <h1 className="font-semibold text-black text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] leading-[32px] md:leading-[40px] lg:leading-[48px]">Demystifying Paid Search Ads: A Beginner's Guide</h1>

                <p>Welcome to the world of Paid Search Ads! If you're new to digital advertising and wondering how to effectively harness the power of search engines to drive targeted traffic and reach potential customers, you're in the right place. In this beginner's guide, we'll take you on a journey through the ins and outs of paid search ads, unraveling the complexities and providing you with essential tips to kickstart your successful advertising campaigns.</p>

                <p>In this chapter, we'll lay the groundwork by explaining what paid search ads are and how they function. You'll gain insights into popular advertising platforms like Google Ads and Bing Ads, and we'll explore the numerous benefits these ads offer</p>
 
                <Image src={BlogPost2} alt="BlogPost" className="rounded-[20px]" />
              
                <p>Unravel the components that make up a successful search ad in this chapter. From captivating headlines to compelling descriptions and strategically placed URLs, we'll delve into the art of crafting ad copy that engages and resonates with your target audience. With a focus on relevant keywords and match types, you'll learn how to optimize your ads for maximum impact and relevancy.</p>

                <p>Ready to create your first paid search ad campaign? This chapter will guide you through the process step-by-step. You'll learn how to define your advertising goals, structure campaigns and ad groups effectively, and set appropriate budgets and bidding strategies. Armed with this knowledge, you'll be ready to launch your campaign with confidence.</p>
              </div>

              {/* Tags, Social share &  previous/next post*/}
              <div className="mb-[30px] md:mb-[40px] lg:mb-[70px]">
                <div className="sm:flex justify-between items-center space-y-[15px] sm:space-y-[0]">
                  <div>
                    <ul className="list-none space-x-[15px] rtl:space-x-reverse">
                      <li className="inline-block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="relative top-[3px]">
                          <g clipPath="url(#clip0_336_1414)">
                            <path d="M15 6.25C15.6904 6.25 16.25 5.69036 16.25 5C16.25 4.30964 15.6904 3.75 15 3.75C14.3096 3.75 13.75 4.30964 13.75 5C13.75 5.69036 14.3096 6.25 15 6.25Z" stroke="#4C4C4C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M1.25 11.25L11.25 1.25H18.75V8.75L8.75 18.75L1.25 11.25Z" stroke="#4C4C4C" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                          </g>
                          <defs>
                            <clipPath id="clip0_336_1414">
                              <rect width="20" height="20" fill="white"/>
                            </clipPath>
                          </defs>
                        </svg>
                      </li>

                      <li className="inline-block">
                        <Link
                          href="#"
                          className="font-bold text-13px text-black hover:text-[#EF4335]"
                        >
                          Paid Advert
                        </Link>
                      </li> 
                    </ul> 
                  </div>

                  <div className="inline-flex mt-15 sm:mt-0 sm:flex justify-center items-center">
                    <p className="text-15px mr-[10px] rtl:mr-0 rtl:ml-[10px]">Share</p>

                    <ul className="list-none space-x-[5px] md:space-x-[9px] rtl:space-x-reverse">
                      <li className="inline-block">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                        >
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>

                      <li className="inline-block">
                        <a
                          href="https://www.linkedin.com/"
                          target="_blank"
                          className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                        >
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>

                      <li className="inline-block">
                        <a
                          href="https://www.twitter.com/"
                          target="_blank"
                          className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                        >
                          <i className="bx bxl-twitter"></i>
                        </a>
                      </li>

                      <li className="inline-block">
                        <a
                          href="https://www.instagram.com/"
                          target="_blank"
                          className="bg-[#161519] text-white text-[17px] inline-block w-[25px] h-[25px] text-center rounded-full leading-[28px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                        >
                          <i className="bx bxl-instagram"></i>
                        </a>
                      </li> 
                    </ul>
                  </div>
                </div>

                <hr className="my-[30px]" />

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="flex items-center justify-center font-bold hover:text-black"
                  >
                    <ArrowLeft 
                      className="mr-[10px] rtl:mr-0 rtl:ml-[10px] text-[25px]"
                    />
                    Previous Post
                  </a>

                  <a
                    href="#"
                    className="flex items-center justify-center font-bold hover:text-black"
                  >
                    Next Post
                    <ArrowRight 
                      className="ml-[10px] rtl:ml-0 rtl:mr-[10px] text-[25px]"
                    />
                  </a>
                </div>
              </div>

              {/* Comments List */}
              <div className="mb-[30px] md:mb-[40px] lg:mb-[70px]">
                <h2 className="text-black font-bold text-[20px] md:text-[22px] lg:text-[25px] mb-[20px] md:mb-[30px]">
                  02 Comments
                </h2>
                <ul className="space-y-[20px] md:space-y-[30px]">
                  <li className="relative md:pl-[125px] rtl:md:pl-0 rtl:md:pr-[125px]">
                    <Image
                      src={userImg1}
                      className="mb-[20px] md:mb-0 md:absolute md:left-0 rtl:md:left-auto rtl:md:right-0 w-[100px] h-[100px] md:top-0 rounded-full"
                      alt="user"
                    />
                    <h4 className="text-black font-bold text-[17px] mb-[10px]">
                      Jonathon Ronan
                    </h4>
                    <p className="text-[14px] lg:text-[16px] mb-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Viverra elementum tellus odio at enim arcu
                      eget tristique sed. Tellus tellus ac orci id est
                      faucibus mattis ultrices gravida.
                    </p>
                    <Link
                      href="#"
                      className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                    >
                      Reply
                    </Link>

                    <ul className='mt-[20px] md:mt-[30px] space-y-[20px] md:space-y-[30px]'>
                      <li className="relative ml-[20px] md:ml-0 md:pl-[125px] rtl:md:pl-0 rtl:md:pr-[125px]">
                        <Image
                          src={userImg2}
                          className="mb-[20px] md:mb-0 md:absolute md:left-0 rtl:md:left-auto rtl:md:right-0 w-[100px] h-[100px] md:top-0 rounded-full"
                          alt="user"
                        />
                        <h4 className="text-black font-bold text-[14px] md:text-[15px] lg:text-[17px] mb-[10px]">
                          James Andy
                        </h4>
                        <p className="text-[14px] lg:text-[16px] mb-[15px]">
                          Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Viverra elementum tellus
                          odio at enim arcu eget tristique sed. Tellus
                          tellus ac orci id est faucibus mattis
                          ultrices gravida.
                        </p>
                        <Link
                          href="#"
                          className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                        >
                          Reply
                        </Link>
                      </li> 
                    </ul>
                  </li>

                  <li className="relative md:pl-[125px] rtl:md:pl-0 rtl:md:pr-[125px]">
                    <Image
                      src={userImg1}
                      className="mb-[20px] md:mb-0 md:absolute md:left-0 rtl:md:left-auto rtl:md:right-0 w-[100px] h-[100px] md:top-0 rounded-full"
                      alt="user"
                    />
                    <h4 className="text-black font-bold text-[14px] md:text-[15px] lg:text-[17px] mb-[10px]">
                      Angela Carter
                    </h4>
                    <p className="text-[14px] lg:text-[16px] mb-[15px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Viverra elementum tellus odio at enim arcu
                      eget tristique sed. Tellus tellus ac orci id est
                      faucibus mattis ultrices gravida.
                    </p>
                    <Link
                      href="#"
                      className="uppercase inline-block font-bold ease-in duration-300 text-[14px] hover:text-[#EF4335]"
                    >
                      Reply
                    </Link>
                  </li>
                </ul>
              </div>

              {/* CommentForm */}
              <CommentForm />
            </div>

            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsContent;
