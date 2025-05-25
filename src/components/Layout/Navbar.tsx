"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowUpRight } from "lucide-react"

const Navbar: React.FC = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navItem = (href: string, label: string) => (
    <Link
      href={href}
      className={`transition-colors whitespace-nowrap ${
        pathname === href || (href === "/blog" && pathname.startsWith("/blog")) ? "font-semibold text-black" : "text-black/80"
      } hover:text-black/60`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  )

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: App icon */}
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Trùm Chinese logo"
            width={44}
            height={44}
            className="rounded-xl"
          />
        </Link>

        {/* Center: Floating nav pill absolutely centered */}
        <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
          <div className="hidden md:flex items-center gap-8 bg-gradient-to-b from-white via-white to-neutral-100 border border-gray-200 shadow-[0_4px_8px_rgba(0,0,0,0.05)] rounded-full px-8 py-3">
            {navItem("/", "Trùm Chinese")}
            {navItem("#features", "Tính năng")}
            {navItem("/blog", "Blog")}
            {navItem("#purchase", "Gói đăng ký")}
            {navItem("#contactus", "Liên hệ")}
          </div>
        </div>

        {/* Right: CTA download button */}
        <Link
          href="https://apps.apple.com"
          className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-6 py-2 text-sm font-medium text-white shadow ring-1 ring-white"
        >
          Tải xuống Trùm Chinese
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile menu icon */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-2 rounded-md text-[#191919] md:hidden"
        >
          <span className="sr-only">Open main menu</span>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden transition-all duration-200 ${
          open ? "opacity-100 scale-100" : "pointer-events-none opacity-0 scale-95"
        } origin-top`}
      >
        <div className="mx-4 mt-2 rounded-lg bg-white px-4 py-3 shadow-lg">
          <div className="flex flex-col gap-3">
            {navItem("#features", "Tính năng")}
            {navItem("/blog", "Blog")}
            {navItem("#purchase", "Gói đăng ký")}
            {navItem("#contactus", "Liên hệ")}
            <Link
              href="https://apps.apple.com"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-500 px-5 py-2 text-sm font-medium text-white"
            >
              Tải xuống Trùm Chinese
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
