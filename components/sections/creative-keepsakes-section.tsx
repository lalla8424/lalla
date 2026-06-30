/**
 * @file creative-keepsakes-section.tsx
 * @description Optional Creative Keepsakes add-on block for program detail pages.
 */

import React from "react";
import Image from "next/image";
import {
  KEEPSAKE_BOOKING_DETAILS,
  KEEPSAKE_PRICING,
  SHOE_SIZE_GUIDE,
} from "@/constants/homepage";

export function CreativeKeepsakesSection() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-[#FFD700]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
          Optional Add-On
        </span>
        <h2 className="text-2xl font-bold text-gray-900">Creative Keepsakes</h2>
        <p className="text-base font-semibold text-gray-800 md:text-lg">
          Take home your child&apos;s artwork in a unique way.
        </p>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          Your child will create an original artwork during the session, then
          transform it into a personalised keepsake as part of the workshop.
        </p>
        <p className="font-semibold text-gray-700 md:text-lg leading-relaxed">
          The keepsake-making process is included in the activity, allowing
          children to enjoy the full creative journey and take home their
          finished creation on the same day.
        </p>
      </div>

      <div className="space-y-2">
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src="/keepsake.jpg"
              alt="Your child's artwork transformed into personalised keepsakes"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
        <p className="text-center text-sm font-medium text-gray-700 md:text-base">
          Your Child&apos;s Artwork → Personalised Keepsakes
        </p>
      </div>

      <ul className="space-y-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
        {KEEPSAKE_PRICING.map(({ item, price }) => (
          <li
            key={item}
            className="flex items-start justify-between gap-4 text-sm text-gray-700 md:text-base"
          >
            <span>{item}</span>
            <span className="shrink-0 font-semibold text-gray-900">{price}</span>
          </li>
        ))}
      </ul>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">Booking Information</h3>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          If you would like to create a personalised keepsake during your
          workshop, please let us know{" "}
          <span className="font-semibold text-gray-900">
            3–5 days before your session
          </span>{" "}
          whenever possible.
        </p>
        <p className="text-gray-600 md:text-lg">Please include:</p>
        <ul className="space-y-2 text-gray-600 md:text-lg">
          {KEEPSAKE_BOOKING_DETAILS.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-[#C9A800]" aria-hidden="true">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-gray-600 md:text-lg leading-relaxed">
          This allows us to prepare the correct materials and have everything
          ready for your workshop.
        </p>
      </div>

      <div className="relative max-w-xs rotate-[-0.5deg] rounded-sm border border-amber-200/70 bg-[#FFF9E6] p-4 pt-5 shadow-[1px_2px_6px_rgba(0,0,0,0.07)]">
        <div
          className="absolute -top-2 left-1/2 h-3.5 w-10 -translate-x-1/2 rounded-sm border border-amber-200/50 bg-amber-100/90 shadow-sm"
          aria-hidden="true"
        />
        <p className="text-xs font-semibold tracking-wide text-amber-900/80">
          Shoe Size Guide
        </p>
        <ul className="mt-2 space-y-0.5 text-[11px] leading-relaxed text-amber-950/70">
          {SHOE_SIZE_GUIDE.map((size) => (
            <li key={size}>{size}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
