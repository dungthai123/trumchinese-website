"use client";

import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer  className="bg-black text-white py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="bg-white text-black p-2 rounded-md">✏️</span>
            <h3 className="text-lg font-semibold">Trùm Chinese</h3>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-400">© 2025 Trùm Chinese</p>


        </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.facebook.com/trumtiengtrungHSK" target="_blank">
              <Facebook size={20} className="hover:text-gray-300" />
            </Link>
            <Link href="https://www.instagram.com/speakchinese.app/" target="_blank">
              <Instagram size={20} className="hover:text-gray-300" />
            </Link>
          </div>
        {/* Right Links */}
        <div className="text-center md:text-left space-y-2 mt-8 md:mt-0">
          <Link href="https://www.facebook.com/trumtiengtrungHSK"  className="block hover:text-gray-300">
            Liên hệ Fanpage Trùm Chinese
          </Link>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
