"use client";

const SocialLinks = () => {
  return (
    <>
      <ul className="list-none space-x-[5px] md:space-x-[9px] rtl:space-x-reverse">
        <li className="inline-block">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </li>

        <li className="inline-block">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
          >
            <i className="bx bxl-linkedin"></i>
          </a>
        </li>

        <li className="inline-block">
          <a
            href="https://www.twitter.com/"
            target="_blank"
            className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </li>

        <li className="inline-block">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </li>

        <li className="inline-block">
          <a
            href="https://www.youtube.com/"
            target="_blank"
            className="bg-[#161519] text-white text-[20px] inline-block w-[30px] h-[30px] text-center rounded-full leading-[34px] hover:bg-[#EF4335] transition delay-100 duration-300 ease-in-out"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </li>
      </ul>
    </>
  );
};

export default SocialLinks;
