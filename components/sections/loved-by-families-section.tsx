/**
 * @file loved-by-families-section.tsx
 * @description Trust section — international families, photo gallery, and review slider.
 *
 * Image-focused layout using only existing website media. TripAdvisor link
 * provides the review source without fabricated testimonials.
 *
 * @dependencies
 * - @/constants/homepage: family photos and TripAdvisor URL
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import {
  FAMILY_GALLERY_PHOTOS,
  FEATURED_FAMILY,
  REVIEW_SLIDER_PHOTOS,
  TRIPADVISOR_URL,
} from "@/constants/homepage";

function StarRating() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 fill-[#FFD700] text-[#FFD700]"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function ReviewMarquee() {
  const items = [...REVIEW_SLIDER_PHOTOS, ...REVIEW_SLIDER_PHOTOS];

  return (
    <div className="relative mt-12 overflow-hidden">
      <div className="flex animate-marquee gap-4">
        {items.map((photo, index) => (
          <Link
            key={`${photo.src}-${index}`}
            href={TRIPADVISOR_URL}
            target="_blank"
            rel="noopener noreferrer"
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
            <div className="absolute bottom-3 left-3 flex items-center gap-2">
              <StarRating />
              <span className="text-xs font-medium text-white/90">TripAdvisor</span>
            </div>
          </Link>
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

        {/* Featured family + TripAdvisor */}
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
            <div className="space-y-2">
              <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-7 w-7 fill-[#FFD700] text-[#FFD700]"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-xl font-bold text-gray-900 md:text-2xl">
                Rated 5.0 on TripAdvisor
              </p>
            </div>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              See what international families are saying about their creative
              experiences at LALLA.
            </p>
            <Link
              href={TRIPADVISOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#C9A800] underline-offset-4 transition-colors hover:text-[#FFD700] hover:underline md:text-base"
            >
              Read Reviews
            </Link>
          </div>
        </div>

        {/* Family photo gallery */}
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
