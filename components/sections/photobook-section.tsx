/**
 * @file photobook-section.tsx
 * @description Premium feature section highlighting LALLA's signature Art Photobook.
 *
 * @dependencies
 * - @/constants/homepage: PHOTOBOOK_COVER, PHOTOBOOK_FEATURES, PHOTOBOOK_PRICE
 */

import React from "react";
import Image from "next/image";
import { BookMarked, Clock, FileImage, Sparkles } from "lucide-react";
import {
  PHOTOBOOK_COVER,
  PHOTOBOOK_INSIDE,
  PHOTOBOOK_FEATURES,
  PHOTOBOOK_PRICE,
} from "@/constants/homepage";

const FEATURE_ICONS = [BookMarked, FileImage, Sparkles, Clock];

export function PhotobookSection() {
  return (
    <section
      id="art-photobook"
      className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Every Moment Matters
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-gray-900 sm:text-4xl">
              Children create artwork.
              <br />
              We preserve the journey.
            </h2>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto] md:gap-12">
            <div className="space-y-5">
              <p className="max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
                Every child&apos;s creative journey is thoughtfully documented in
                our signature Art Photobook—capturing the moments, discoveries,
                smiles, and artwork that make each experience unforgettable.
              </p>
              <p className="text-sm text-gray-600">
                Art Photobook{" "}
                <span className="font-semibold text-gray-900">
                  {PHOTOBOOK_PRICE}
                </span>
              </p>
            </div>

            <div className="mx-auto flex items-stretch gap-3 md:mx-0 md:justify-self-end">
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                <div className="relative h-56 w-36 sm:h-64 sm:w-40">
                  <Image
                    src={PHOTOBOOK_COVER}
                    alt="LALLA Art Lab Photo Journal Book cover"
                    fill
                    className="rounded-lg object-contain"
                    sizes="160px"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl bg-white p-2 shadow-lg ring-1 ring-black/5">
                <div className="relative h-56 w-64 sm:h-64 sm:w-80">
                  <Image
                    src={PHOTOBOOK_INSIDE}
                    alt="Inside pages of LALLA Art Photobook"
                    fill
                    className="rounded-lg object-contain"
                    sizes="320px"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PHOTOBOOK_FEATURES.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? BookMarked;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
                >
                  <Icon
                    className="mb-3 h-5 w-5 text-[#C9A800]"
                    aria-hidden="true"
                  />
                  <h3 className="text-sm font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-500">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
