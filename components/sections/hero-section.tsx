import React from "react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center py-12 md:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
        backgroundColor: "rgba(255, 215, 0, 0.85)",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none text-white">
              Make Your New Story in Seoul — Through Art, For Your Kids.
            </h1>
            <p className="max-w-[600px] text-white md:text-xl">
              Creative art programs for young explorers living in Korea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#programs"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#FFD700] shadow transition-colors hover:bg-gray-100"
              >
                Explore Programs
              </Link>
              <Link
                href="#visit"
                className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10"
              >
                Visit Us
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <div className="aspect-square w-full rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Lalla Kids Art - Children creating art"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,0 C240,80 480,80 720,40 C960,0 1200,0 1440,80 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
