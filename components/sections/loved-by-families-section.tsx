/**
 * @file loved-by-families-section.tsx
 * @description Trust section — international families, photo gallery, and family review slider.
 *
 * Uses only existing website media. Reviews are presented as authentic
 * messages from families — not third-party platform branding.
 *
 * @dependencies
 * - @/constants/homepage: family photos and review slider images
 */

"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  FAMILY_GALLERY_PHOTOS,
  FEATURED_FAMILY,
  REVIEW_SLIDER_PHOTOS,
} from "@/constants/homepage";

function StarRating({ size = "md" }: { size?: "md" | "lg" }) {
  const iconClass =
    size === "lg" ? "h-7 w-7 fill-[#FFD700] text-[#FFD700]" : "h-4 w-4 fill-[#FFD700] text-[#FFD700]";

  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={iconClass} aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewMarquee() {
  const items = [...REVIEW_SLIDER_PHOTOS, ...REVIEW_SLIDER_PHOTOS];

  return (
    <div className="relative mt-12 overflow-hidden">
      <p className="mb-6 text-center text-sm font-semibold uppercase tracking-wide text-gray-400">
        Family Reviews
      </p>
      <div className="flex animate-marquee gap-4">
        {items.map((photo, index) => (
          <div
            key={`${photo.src}-${index}`}
            className="group relative h-48 w-72 shrink-0 overflow-hidden rounded-2xl"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="288px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-3 left-3">
              <StarRating />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LovedByFamiliesSection() {
  return (
    <section
      id="loved-by-families"
      className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            Families
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Loved by International Families
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={FEATURED_FAMILY.image}
              alt={FEATURED_FAMILY.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="flex flex-col justify-center space-y-5 px-2 lg:px-6">
            <StarRating size="lg" />
            <p className="text-xl font-bold text-gray-900 md:text-2xl">
              Messages from Our Families
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              Genuine feedback from parents and international families after
              attending our programs — shared directly with LALLA.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {FAMILY_GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-square overflow-hidden rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>

        <ReviewMarquee />
      </div>
    </section>
  );
}
