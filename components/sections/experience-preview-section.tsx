/**
 * @file experience-preview-section.tsx
 * @description Experience preview — what children do at LALLA with experience cards.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { EXPERIENCE_PREVIEW_CARDS } from "@/constants/homepage";

export function ExperiencePreviewSection() {
  return (
    <section id="experience-preview" className="bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            Experiences
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Explore Our Creative Experiences
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            Children paint, build, draw, explore materials, and discover
            cultures through hands-on art experiences.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE_PREVIEW_CARDS.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <article>
                <div
                  className={`relative aspect-[5/2] ${
                    "imageFit" in card && card.imageFit === "contain"
                      ? "bg-transparent"
                      : ""
                  }`}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className={
                      "imageFit" in card && card.imageFit === "contain"
                        ? "object-contain object-center transition-transform duration-300 group-hover:scale-[1.02]"
                        : "imagePosition" in card && card.imagePosition
                          ? "object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                          : "object-cover object-left-top transition-transform duration-300 group-hover:scale-[1.02]"
                    }
                    style={
                      "imagePosition" in card && card.imagePosition
                        ? { objectPosition: card.imagePosition }
                        : undefined
                    }
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900">{card.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">{card.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
