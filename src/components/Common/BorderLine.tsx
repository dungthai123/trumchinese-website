"use client";

import Image from "next/image";
import borderLine from "/public/images/border-line.png";

const BorderLine = () => {
  return (
      <>
        <div className="container mx-auto">
          <Image src={borderLine} alt="borderLine" />
        </div>
      </>
  )
}

export default BorderLine;