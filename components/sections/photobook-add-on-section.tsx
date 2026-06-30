/**
 * @file photobook-add-on-section.tsx
 * @description Optional LALLA Art Photobook add-on block for program detail pages.
 */

import React from "react";
import Image from "next/image";
import {
  PHOTOBOOK_ADDON_POINTS,
  PHOTOBOOK_COVER,
  PHOTOBOOK_INSIDE,
  PHOTOBOOK_PRICE,
} from "@/constants/homepage";

interface PhotobookAddOnSectionProps {
  intro?: string;
}

export function PhotobookAddOnSection({
  intro = "Turn your session into a keepsake your family will treasure.",
}: PhotobookAddOnSectionProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <span className="inline-block rounded-full bg-[#FFD700]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-800">
          Optional Add-On
        </span>
        <h2 className="text-2xl font-bold text-gray-900">LALLA Art Photobook</h2>
        <p className="text-gray-600 md:text-lg leading-relaxed">{intro}</p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#FFD700]/30 bg-[#FFD700]/5 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex shrink-0 justify-center gap-3 md:justify-start">
            <div className="overflow-hidden rounded-xl bg-white p-2 shadow-md ring-1 ring-black/5">
              <div className="relative h-44 w-28 sm:h-52 sm:w-32">
                <Image
                  src={PHOTOBOOK_COVER}
                  alt="LALLA Art Photobook cover"
                  fill
                  className="rounded-lg object-contain"
                  sizes="128px"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl bg-white p-2 shadow-md ring-1 ring-black/5">
              <div className="relative h-44 w-48 sm:h-52 sm:w-64">
                <Image
                  src={PHOTOBOOK_INSIDE}
                  alt="Inside pages of LALLA Art Photobook"
                  fill
                  className="rounded-lg object-contain"
                  sizes="256px"
                />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <ul className="space-y-2 text-sm text-gray-600 md:text-base">
              {PHOTOBOOK_ADDON_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[#C9A800]" aria-hidden="true">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-gray-900">{PHOTOBOOK_PRICE}</span>{" "}
              — add when you book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
