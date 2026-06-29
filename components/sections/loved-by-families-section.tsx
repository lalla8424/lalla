/**
 * @file loved-by-families-section.tsx
 * @description Trust section — family messages, featured photos, and parent reviews.
 *
 * @dependencies
 * - @/constants/homepage: featured photos and family review quotes
 */

"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  FAMILY_REVIEWS,
  FEATURED_FAMILY_PHOTOS,
} from "@/constants/homepage";

function StarRating({
  rating = 5,
  size = "md",
}: {
  rating?: number;
  size?: "md" | "lg";
}) {
  const iconClass =
    size === "lg"
      ? "h-7 w-7 fill-[#FFD700] text-[#FFD700]"
      : "h-4 w-4 fill-[#FFD700] text-[#FFD700]";

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className={iconClass} aria-hidden="true" />
      ))}
    </div>
  );
}

function FamilyReviews() {
  return (
    <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-[#FFD700]/20 bg-[#FFD700]/10 px-4 py-10 md:px-8 md:py-12">
      <div className="text-center">
        <span className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-black">
          Family Reviews
        </span>
        <p className="mt-3 text-sm text-gray-600 md:text-base">
          What parents say about their children&apos;s experience at LALLA
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FAMILY_REVIEWS.map((review) => (
          <article
            key={review.id}
            className="flex flex-col rounded-2xl border border-[#FFD700]/15 bg-white/90 p-6 shadow-sm backdrop-blur-sm"
          >
            <StarRating rating={review.rating} />
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-700 md:text-base">
              &ldquo;{review.quote}&rdquo;
            </blockquote>
            <footer className="mt-5 border-t border-[#FFD700]/20 pt-4">
              <p className="text-sm font-semibold text-gray-900">{review.name}</p>
              <p className="mt-0.5 text-xs font-medium text-[#9A7B00]">
                {review.context}
              </p>
            </footer>
          </article>
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
          <div className="grid grid-cols-2 gap-3">
            {FEATURED_FAMILY_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  priority
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center space-y-4 px-2 lg:px-6">
            <StarRating size="lg" />
            <p className="text-xl font-bold text-gray-900 md:text-2xl">
              Messages from Our Families
            </p>
            <p className="text-base font-bold leading-relaxed text-gray-900 md:text-lg">
              More than just an art class — a memorable part of your
              family&apos;s trip to Korea.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              Whether you&apos;re visiting Seoul for a few days or living here
              for a while, LALLA offers children a creative experience
              they&apos;ll remember long after they return home.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              Instead of simply making crafts, children paint on walls, explore
              unique materials, discover Korean and world cultures through art,
              and create something truly their own.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              Many parents tell us their children keep talking about LALLA long
              after the visit—and proudly take home not only their artwork, but
              unforgettable memories made in Korea.
            </p>
          </div>
        </div>

        <FamilyReviews />
      </div>
    </section>
  );
}
