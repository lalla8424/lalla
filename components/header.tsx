import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, BookOpen } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#FFD700]" style={{ backgroundColor: '#FFD700' }}>
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-0">
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
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="h-5 w-5 text-black hover:text-gray-600" />
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
        </div>
      </div>
    </header>
  );
}
