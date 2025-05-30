"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, Instagram, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="text-black"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#FFD700]">
                Lalla Kids Art
              </span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-black"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="container grid gap-6 px-4 py-6">
            <Link
              href="#about"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#teacher"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Meet Our Creative Team
            </Link>
            <Link
              href="#programs"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Join our program!
            </Link>
            <Link
              href="#visit"
              className="text-lg font-medium hover:text-[#FFD700] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Visit Us
            </Link>
            <div className="flex items-center gap-4 pt-4">
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
          </nav>
        </div>
      )}
    </div>
  );
}
