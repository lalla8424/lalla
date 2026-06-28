"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Instagram, BookOpen, MessageCircle } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
          <SheetHeader className="mb-8 text-left">
            <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col h-full">
            <nav className="flex flex-col gap-6 flex-1">
              <Link
                href="/#experience-preview"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Experiences
              </Link>
              <Link
                href="/#choose-experience"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/#why-families"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Why LALLA
              </Link>
              <Link
                href="/#teacher"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Our Team
              </Link>
              <Link
                href="/#book-now"
                onClick={() => setOpen(false)}
                className="text-base font-semibold hover:text-[#FFD700] transition-colors"
              >
                Book Now
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
