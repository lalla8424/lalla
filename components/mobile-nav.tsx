"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <div className="fixed inset-0 z-50" style={{ backgroundColor: '#FFD700' }}>
          <div className="container flex h-16 items-center justify-between px-4">
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
              className="text-sm font-black hover:text-gray-600 transition-colors text-black uppercase"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="#teacher"
              className="text-sm font-black hover:text-gray-600 transition-colors text-black uppercase"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              onClick={() => setIsOpen(false)}
            >
              Meet Our Creative Team
            </Link>
            <Link
              href="#programs"
              className="text-sm font-black hover:text-gray-600 transition-colors text-black uppercase"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
              onClick={() => setIsOpen(false)}
            >
              Join our program!
            </Link>
            <Link
              href="#visit"
              className="text-sm font-black hover:text-gray-600 transition-colors text-black uppercase"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
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
          </nav>
        </div>
      )}
    </div>
  );
}
