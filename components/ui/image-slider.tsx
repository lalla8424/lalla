"use client";

import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  image: string;
  caption?: string;
}

interface ImageSliderProps {
  slides: Slide[];
  autoAdvanceInterval?: number;
}

export function ImageSlider({
  slides,
  autoAdvanceInterval = 5000,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const count = slides.length;

  const goTo = (index: number) => {
    if (count === 0) return;
    setCurrent(((index % count) + count) % count);
  };

  useEffect(() => {
    if (count <= 1 || autoAdvanceInterval <= 0) return;

    const intervalId = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % count);
    }, autoAdvanceInterval);

    return () => window.clearInterval(intervalId);
  }, [count, autoAdvanceInterval]);

  if (count === 0) return null;

  const slide = slides[current];
  const hasCaptions = slides.some((item) => item.caption);

  return (
    <div className="relative z-10 overflow-hidden rounded-xl shadow-lg">
      <div className="relative aspect-[16/9] w-full bg-gray-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={slide.image}
          src={slide.image}
          alt={slide.caption ?? "Lalla Kids Art studio"}
          className="h-full w-full object-cover object-center transition-opacity duration-500"
          draggable={false}
        />
        {slide.caption ? (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <p className="text-sm md:text-base">{slide.caption}</p>
          </div>
        ) : null}
      </div>

      {count > 1 ? (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="absolute left-3 top-1/2 z-30 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2.5 text-white shadow-md transition-colors hover:bg-black/70"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 pointer-events-none" />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="absolute right-3 top-1/2 z-30 -translate-y-1/2 cursor-pointer rounded-full bg-black/50 p-2.5 text-white shadow-md transition-colors hover:bg-black/70"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 pointer-events-none" />
          </button>

          <div
            className={`absolute left-0 right-0 z-30 flex justify-center gap-2 ${
              hasCaptions ? "bottom-12" : "bottom-4"
            }`}
          >
            {slides.map((item, index) => (
              <button
                key={item.image}
                type="button"
                onClick={() => goTo(index)}
                className={`h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
                  index === current
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === current}
              />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}
