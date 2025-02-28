"use client";

import React, { useState, useEffect } from "react";

const RtlDemoSidebar: React.FC = () => {
  const [dirAttribute, setDirAttribute] = useState<string>('ltr');

  // Use effect to read the user preference from local storage on component mount
  useEffect(() => {
    const storedDirAttribute = localStorage.getItem('dirAttribute');
    if (storedDirAttribute) {
      setDirAttribute(storedDirAttribute);
      document.documentElement.setAttribute('dir', storedDirAttribute);
    }
  }, []);

  // Function to handle button click and update state and local storage
  const handleButtonClick = () => {
    const newDirAttribute = dirAttribute === 'ltr' ? 'rtl' : 'ltr';
    setDirAttribute(newDirAttribute);
    localStorage.setItem('dirAttribute', newDirAttribute);
    document.documentElement.setAttribute('dir', newDirAttribute);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        className="
          fixed 
          z-50 
          text-[14px] 
          bg-[#EF4335] 
          text-white 
          px-[15px] 
          py-[5px] 
          rounded-[30px] 
          bottom-[40px] 
          right-[10px]
          hover:bg-[#d71809]
        "
      >
        Switch to RTL/LTR
      </button>
    </div>
  );
};

export default RtlDemoSidebar;
