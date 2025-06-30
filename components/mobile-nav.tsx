"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, BookOpen, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            className="flex items-center justify-center w-8 h-8 text-black"
            aria-label="Toggle navigation menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[280px] bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                onClick={() => setOpen(false)}
                className="w-6 h-6 text-gray-600"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col gap-6 flex-1">
              <Link
                href="#about"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#teacher"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Meet Our Creative Team
              </Link>
              <Link
                href="#programs"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Join our program!
              </Link>
              <Link
                href="#visit"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Visit Us
              </Link>
            </nav>
            
            <div className="flex items-center justify-center gap-6 mt-8 pb-6">
              <Link
                href="https://www.instagram.com/lalla_kids_art/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <Instagram className="h-6 w-6 text-gray-600 hover:text-black transition-colors" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://blog.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <BookOpen className="h-6 w-6 text-gray-600 hover:text-black transition-colors" />
                <span className="sr-only">Blog</span>
              </Link>
              <Link
                href="https://wa.me/821023978424"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="h-6 w-6 text-gray-600 hover:text-green-500 transition-colors" />
                <span className="sr-only">WhatsApp</span>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
