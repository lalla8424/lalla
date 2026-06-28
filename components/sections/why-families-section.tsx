/**
 * @file why-families-section.tsx
 * @description Emotional brand philosophy — storytelling reinforced by family photography.
 */

import React from "react";
import Image from "next/image";
import { PHILOSOPHY_PHOTOS } from "@/constants/homepage";

export function WhyFamiliesSection() {
  return (
    <section id="why-families" className="bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
            A Child&apos;s First Memory of Korea
          </h2>
          <div className="mx-auto mt-6 max-w-4xl space-y-4 text-left sm:text-center">
            <p className="text-gray-500 md:text-lg leading-relaxed">
              For many children, visiting Korea is their first encounter with a
              new culture, unfamiliar traditions, and different ways of seeing
              the world.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              At LALLA, we believe those first experiences matter.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              Through hands-on art, children don&apos;t just learn about
              Korea—they create, explore, and express their own memories of it.
            </p>
            <p className="text-gray-500 md:text-lg leading-relaxed">
              When children paint, sculpt, and create together, those moments
              become their own personal story of Korea—one they carry home long
              after the visit.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {PHILOSOPHY_PHOTOS.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[3/4]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
