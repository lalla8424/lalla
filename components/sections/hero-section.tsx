/**
 * @file hero-section.tsx
 * @description Homepage hero — premium first impression for international families in Seoul.
 *
 * Communicates art experiences, Seoul location, creative pillars, and booking path
 * within the first viewport. Copy is brand-owned and must not be rewritten here.
 *
 * @dependencies
 * - next/image: full-bleed background
 * - @/components/ui/button: primary and secondary CTAs
 */

import React from "react";
import Link from "next/link";
import { Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const HERO_TRUST_BADGES = [
  { icon: Heart, label: "Loved by International Families" },
  { icon: Globe, label: "English-Friendly" },
] as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-4rem)] w-full items-end md:items-center"
      aria-label="Lalla Kids Art hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 bg-gray-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/playground.JPG"
          alt="Children playing and creating at Lalla Kids Art studio in Seoul"
          className="h-full w-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/25 md:bg-gradient-to-r md:from-black/70 md:via-black/40 md:to-black/10"
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container px-5 pb-14 pt-24 md:px-8 md:pb-20 md:pt-28 lg:px-10">
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
            <h1
              className="text-[2rem] font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Creative Art Experiences in Seoul
            </h1>

            <p
              className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:mt-5 md:text-xl"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Explore cultures, stories, and traditions through immersive art
              experiences.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-md bg-[#FFD700] px-8 text-sm font-semibold text-black shadow-md hover:bg-[#FFC400] sm:text-base"
              >
                <Link href="/#book-now">Book an Art Experience</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-md border-white/40 bg-white/10 px-8 text-sm font-semibold text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:text-base"
              >
                <Link href="/#choose-experience">View Programs</Link>
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-start">
              {HERO_TRUST_BADGES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white/75 sm:text-sm"
                  style={{ fontFamily: "Raleway, sans-serif" }}
                >
                  <Icon
                    className="h-4 w-4 shrink-0 stroke-[1.5] text-white/60"
                    aria-hidden="true"
                  />
                  {label}
                </span>
              ))}
            </div>

            <p
              className="mt-5 max-w-xl text-xs leading-relaxed text-white/60 sm:text-sm"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              Welcoming international families living in and visiting Korea
              through creative art experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
