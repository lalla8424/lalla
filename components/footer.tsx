import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#FFD700]/5 py-6 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo_png.png"
                alt="Lalla Kids Art"
                width={160}
                height={53}
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold text-[#FFD700] uppercase tracking-wide" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
                Lalla Kids Art
              </span>
            </Link>
            <p className="text-sm text-gray-500">
              Creative art programs for young explorers living in Korea.
            </p>
            <div className="flex items-center gap-4">
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
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link
                href="#about"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                About Us
              </Link>
              <Link
                href="#teacher"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                Meet Our Creative Team
              </Link>
              <Link
                href="#programs"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                Join our program!
              </Link>
              <Link
                href="#visit"
                className="text-sm text-gray-500 hover:text-[#FFD700]"
              >
                Visit Us
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Us</h3>
            <div className="text-sm text-gray-500">
              <p>2F, 7 Dongho-ro 10-gil, Jung-gu</p>
              <p>Seoul, South Korea</p>
              <p>(Korean: 서울 중구 동호로10길 7 2층)</p>
              <p>Email: lallartlab@gmail.com</p>
              <p>Phone: 010.2397.8424</p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Lalla Kids Art. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
