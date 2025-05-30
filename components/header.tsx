import React from "react";
import Link from "next/link";
import { Instagram, BookOpen } from "lucide-react";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#FFD700]">
            Lalla Kids Art
          </span>
        </Link>
        <MobileNav />
        <nav className="hidden md:flex gap-6 items-start pt-1 ml-auto mr-6">
          <Link
            href="#about"
            className="text-sm font-medium hover:text-[#FFD700] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#teacher"
            className="text-sm font-medium hover:text-[#FFD700] transition-colors"
          >
            Meet Our Creative Team
          </Link>
          <Link
            href="#programs"
            className="text-sm font-medium hover:text-[#FFD700] transition-colors"
          >
            Join our program!
          </Link>
          <Link
            href="#visit"
            className="text-sm font-medium hover:text-[#FFD700] transition-colors"
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
            <Instagram className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://blog.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BookOpen className="h-5 w-5 text-gray-600 hover:text-[#FFD700]" />
            <span className="sr-only">Blog</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
