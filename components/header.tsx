import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, BookOpen } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FFD700]" style={{ backgroundColor: '#FFD700' }}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-0 md:ml-[-50px]">
          <Image
            src="/logo_png.png"
            alt="Lalla Kids Art"
            width={160}
            height={53}
            className="h-12 w-auto -mr-2"
            priority
          />
          <span className="text-lg font-bold text-black uppercase tracking-wide" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
            Lalla Kids Art
          </span>
        </Link>
        <MobileNav />
        <nav className="hidden md:flex gap-6 items-start pt-1 ml-auto mr-6">
          <Link
            href="#about"
            className="text-xs font-black hover:text-gray-600 transition-colors text-black uppercase"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            About Us
          </Link>
          <Link
            href="#teacher"
            className="text-xs font-black hover:text-gray-600 transition-colors text-black uppercase"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Meet Our Creative Team
          </Link>
          <Link
            href="#programs"
            className="text-xs font-black hover:text-gray-600 transition-colors text-black uppercase"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Join our program!
          </Link>
          <Link
            href="#visit"
            className="text-xs font-black hover:text-gray-600 transition-colors text-black uppercase"
            style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
          >
            Visit Us
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-4 ml-6">
          <Link
            href="https://www.instagram.com/lalla_kids_art/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 text-gray-600 hover:text-[#FFD700] transition-colors" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://blog.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-5 w-5 text-black hover:text-gray-600" />
            <span className="sr-only">Blog</span>
          </Link>
          <a 
            href="https://wa.me/821023978424" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-1 px-2 py-1 rounded bg-green-500 text-white text-xs font-medium shadow hover:bg-green-600 transition-colors min-w-[80px] justify-center" 
            aria-label="WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 13.487c-.263-.131-1.558-.77-1.799-.858-.241-.088-.417-.131-.593.132-.175.263-.676.858-.828 1.033-.151.175-.304.197-.567.066-.263-.132-1.111-.409-2.117-1.304-.782-.696-1.31-1.556-1.464-1.819-.151-.263-.016-.405.115-.536.118-.117.263-.304.395-.456.132-.151.175-.263.263-.438.088-.175.044-.329-.022-.462-.066-.132-.593-1.433-.813-1.963-.214-.514-.432-.444-.593-.452l-.504-.009c-.175 0-.462.066-.705.329-.241.263-.926.905-.926 2.205 0 1.3.948 2.557 1.08 2.732.132.175 1.868 2.857 4.533 3.89.634.218 1.127.348 1.513.446.636.162 1.215.139 1.673.084.511-.06 1.558-.637 1.779-1.253.22-.616.22-1.144.154-1.253-.066-.109-.241-.175-.504-.307z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 16.654A9.718 9.718 0 0023 12.012C23 6.486 18.523 2 12.998 2 7.477 2 3 6.486 3 12.012c0 1.77.464 3.428 1.274 4.866L2.25 22l5.252-2.007a9.956 9.956 0 004.496 1.019h.004c5.523 0 9.998-4.486 9.998-10.012 0-.34-.018-.678-.048-1.012z"></path>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}
