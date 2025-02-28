"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight2 } from "iconsax-react";
import Image from "next/image";

import logo from "/public/images/logo.png";

const Navbar: React.FC = () => {
  const currentRoute = usePathname();

  // Sticky Navbar
  useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId?.classList.add("isSticky");
      } else {
        elementId?.classList.remove("isSticky");
      }
    });

    return () => {
      document.removeEventListener("scroll", () => {
        if (window.scrollY > 170) {
          elementId?.classList.add("isSticky");
        } else {
          elementId?.classList.remove("isSticky");
        }
      });
    };
  }, []);

  // Toggle active class
  const [isActive, setActive] = useState<boolean>(false);
  const handleToggleSearchModal = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div
        id="navbar"
        className="navbar-area bg-[#BAE7FF] relative z-[2] py-[15px] lg:py-[20px] xl:py-0"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`navbar relative flex flex-wrap ${
              isActive ? "active" : ""
            }`}
          >
            <div className="self-center">
              <Link href="/">
                <Image 
                  src={logo} 
                  className="inline w-[50px] md:w-[70px] h-auto" 
                  alt="logo" 
                />
              </Link>
            </div>

            {/* Toggle button */}
            <button
              className="navbar-toggler absolute ml-auto right-0 rtl:left-0 rtl:right-auto top-[4px] xl:hidden"
              type="button"
              onClick={handleToggleSearchModal}
            >
              <span className="burger-menu text-black cursor-pointer leading-none text-[30px]">
                <i className="bx bx-menu"></i>
              </span>
            </button>

            <div className="navbar-collapse flex self-center grow basis-auto">
              <ul className="navbar-nav self-center flex-row mx-auto xl:flex">
                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[25px] 2xl:py-[30px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#services"
                    className="text-black uppercase text-[16px] font-medium transition-all hover:text-[#FF7300] "
                    // onClick={(e) => e.preventDefault()}
                  >
                    Về Trùm Chinese
                  </Link>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[25px] 2xl:py-[30px] relative group last:mr-0 first:ml-0">
                  <a
                    href="#features"
                    className="text-black uppercase text-[16px] font-medium transition-all hover:text-[#FF7300]"
                    // onClick={(e) => e.preventDefault()}
                  >
                    Tính năng
                  </a>

                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[25px] 2xl:py-[30px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#faqs"
                    className="text-black uppercase text-[16px] font-medium transition-all hover:text-[#FF7300] "
                    // onClick={(e) => e.preventDefault()}
                  >
                    Câu hỏi thường gặp
                  </Link>

                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[25px] 2xl:py-[30px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#purchase"
                    className={`uppercase text-[16px] font-medium transition-all hover:text-[#FF7300] ${
                      currentRoute === "/about-us/"
                        ? "text-[#EF4335]"
                        : "text-black"
                    }`}
                  >
                    Mua gói học
                  </Link>
                </li>

                <li className="xl:mx-[10px] 2xl:mx-[18px] py-[10px] lg:py-[15px] xl:py-[25px] 2xl:py-[30px] relative group last:mr-0 first:ml-0">
                  <Link
                    href="#contactus"
                    className={`uppercase text-[16px] font-medium transition-all hover:text-[#FF7300] ${
                      currentRoute === "/contact-us/"
                        ? "text-[#EF4335]"
                        : "text-black"
                    }`}
                  >
                    Liên hệ
                  </Link>
                </li>
              </ul>

              {/* Other options */}
              <div className="other-options self-center border-t border-[#eeeeee] pt-[20px] xl:pt-[0] pb-[10px] xl:pb-[0] xl:border-none xl:ml-[20px] 2xl:ml-[15px]">
                <Link
                  href="#contactus"
                  className="bg-black text-white text-[16px] font-medium inline-block uppercase rounded-full py-[15px] px-[30px] transition duration-500 ease-in-out hover:bg-[#FF7300]"
                >
                  TẢI APP NGAY{" "}
                  <ArrowRight2
                    className="inline-block relative -top-[2px]"
                    size={20}
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
