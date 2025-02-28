"use client";

import Link from "next/link";
import Image from "next/image";

import blogImg1 from "/public/images/blog-post1.jpg";
import blogImg2 from "/public/images/blog-post2.jpg";
import blogImg3 from "/public/images/blog-post3.jpg";

const LatestPost = () => {
  return (
    <>
      <div className="latest-post">
        <h2 className="text-[22px] font-semibold text-black mb-[25px] pb-[10px] border-b border-[#E1E1E1]">
          Latest Post
        </h2>

        <div className="space-y-[20px]">
          <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0">
              <Link href="/blog/blog-details">
                <Image
                  className="w-[120px] rounded-[20px]"
                  src={blogImg1}
                  alt="Post"
                />
              </Link>
            </div>
            <div>
              <p className="text-[14px] mb-[10px] leading-none">
                July 21, 2023
              </p>
              <h3 className="text-[15px] sm:text-[18px] lg:text-[15px] xl:text-[18px] leading-6 font-semibold text-black">
                <Link
                  href="/blog/blog-details"
                  className="hover:text-[#EF4335]"
                >
                  The leading characteristics of review
                </Link>
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0">
              <Link href="/blog/blog-details">
                <Image
                  className="w-[120px] rounded-[20px]"
                  src={blogImg2}
                  alt="Post"
                />
              </Link>
            </div>
            <div>
              <p className="text-[14px] mb-[10px] leading-none">
                July 22, 2023
              </p>
              <h3 className="text-[15px] sm:text-[18px] lg:text-[15px] xl:text-[18px] leading-6 font-semibold text-black">
                <Link
                  href="/blog/blog-details"
                  className="hover:text-[#EF4335]"
                >
                  The Art of Writing Compelling Ad Copy for Paid Search
                </Link>
              </h3>
            </div>
          </div>

          <div className="flex items-center space-x-[15px] rtl:space-x-reverse">
            <div className="shrink-0">
              <Link href="/blog/blog-details">
                <Image
                  className="w-[120px] rounded-[20px]"
                  src={blogImg3}
                  alt="Post"
                />
              </Link>
            </div>
            <div>
              <p className="text-[14px] mb-[10px] leading-none">
                July 23, 2023
              </p>
              <h3 className="text-[15px] sm:text-[18px] lg:text-[15px] xl:text-[18px] leading-6 font-semibold text-black">
                <Link
                  href="/blog/blog-details"
                  className="hover:text-[#EF4335]"
                >
                  Digital Advertising Content Creator
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestPost;
