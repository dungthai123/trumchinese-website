"use client";

import Link from "next/link";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import author from "/public/images/author.png";
import blogPostImg1 from "/public/images/blog-post1.jpg";
import blogPostImg2 from "/public/images/blog-post2.jpg";
import blogPostImg3 from "/public/images/blog-post3.jpg";
import blogPostImg4 from "/public/images/blog-post4.jpg";
import blogPostImg5 from "/public/images/blog-post5.jpg";
import blogPostImg6 from "/public/images/blog-post6.jpg";
import blogPostImg7 from "/public/images/blog-post7.jpg";
import blogPostImg8 from "/public/images/blog-post8.jpg";
import blogPostImg9 from "/public/images/blog-post9.jpg";
import Pagination from "./Pagination";

const BlogPost = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          {/* Blog Post 1 */}
          <div className="bg-[#ffffff] rounded-[20px] py-[40px] px-[20px] md:px-[40px] lg:px-[40px] xl:px-[65px] mb-[30px] lg:mb-[50px]">
            <div className="grid items-center gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
              <div>
                <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                  <div className="shrink-0">
                    <Image src={author} alt="author" className="w-[46px]" />
                  </div>

                  <div>
                    <p className="leading-none text-[15px] mb-[9px]">
                      Posted by
                    </p>
                    <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                      Adla
                    </h4>
                  </div>
                </div>

                <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse mb-[15px]">
                  <Link
                    href="#"
                    className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    Paid Advert
                  </Link>
                  <Link
                    href="#"
                    className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                  >
                    Google Search
                  </Link>
                </div>

                <Link href="/blog/blog-details">
                  <h3 className="text-black text-[20px] sm:text-[22px] lg:text-[25px] xl:text-[30px] 2xl:text-[36px] font-semibold md:leading-[32px] lg:leading-[35px] xl:leading-[40px] 2xl:leading-[48px] hover:text-[#EF4335]">
                    Demystifying Paid Search Ads: A Beginner's Guide
                  </h3>
                </Link>

                <Link
                  href="/services/service-details/"
                  className="text-black text-[14px] mt-[20px] md:mt-[25px] lg:mt-[30px] xl:mt-[40px] font-medium inline-block uppercase transition duration-500 ease-in-out hover:text-[#EF4335]"
                >
                  read more{" "}
                  <ArrowRight2
                    className="inline-block relative -top-[2px]"
                    size={20}
                    color="#EF4335"
                  />
                </Link>
              </div>

              <div className="xl:pl-[100px]">
                <Link href="/blog/blog-details">
                  <Image
                    src={blogPostImg1}
                    alt="Post"
                    className="rounded-[20px]"
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Blog Post */}
          <div className="grid gap-[25px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
            {/* Blog Post 2 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg1}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  Demystifying Paid Search Ads: A Beginner's Guide
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg2}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  The Art of Writing Compelling Ad Copy for Paid Search
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 4 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg3}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  Targeting Techniques: Reaching the Right Audience in Paid
                  Search
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 5 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg4}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  3 Best Marketing Automation Tools You Need To Use
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 6 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg5}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  Digital Advertising Content Creator
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 7 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg6}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  Turning Customer Needs into Product Solutions
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 8 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg7}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  The manufacturing industry became a key sector
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 9 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg8}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  Why Are Your Brand Values So Important
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>

            {/* Blog Post 10 */}
            <div className="bg-[#ffffff] rounded-[20px] p-[20px] sm:p-[45px]">
              <div className="flex items-center space-x-[15px] rtl:space-x-reverse mb-[30px]">
                <div className="shrink-0">
                  <Image src={author} alt="author" className="w-[46px]" />
                </div>

                <div>
                  <p className="leading-none text-[15px] mb-[9px]">Posted by</p>
                  <h4 className="text-black font-medium text-[15px] md:text-[18px] leading-none">
                    Adla
                  </h4>
                </div>
              </div>

              <Link href="/blog/blog-details">
                <Image
                  src={blogPostImg9}
                  alt="Post"
                  className="rounded-[20px] mb-[25px]"
                />
              </Link>

              <Link href="/blog/blog-details">
                <h3 className="text-black text-[20px] sm:text-[22px] font-semibold mb-[20px] hover:text-[#EF4335]">
                  Design Tools to Create Your Visual Identity
                </h3>
              </Link>

              <div className="space-x-[5px] md:space-x-[10px] rtl:space-x-reverse">
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Paid Advert
                </Link>
                <Link
                  href="#"
                  className="bg-[#FEE] rounded-[100px] py-[7px] px-[20px] md:px-[22px] inline-block text-[14px] md:text-[16px] hover:text-[#fff] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
                >
                  Google Search
                </Link>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <Pagination />
        </div>
      </div>
    </>
  );
};

export default BlogPost;
