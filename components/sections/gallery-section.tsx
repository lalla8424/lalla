/**
 * @file gallery-section.tsx
 * @description Studio photos, location, hours, and contact — visit information.
 */

"use client";

import React from "react";
import { Clock, MapPin, Navigation } from "lucide-react";
import { ImageSlider } from "../ui/image-slider";
import { STUDIO_SLIDES } from "@/constants/homepage";

export function GallerySection() {
  return (
    <section id="visit-studio" className="bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            Visit Us
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Visit Our Studio
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            Explore our creative space inside and out, and find everything you
            need to plan your visit.
          </p>
        </div>

        <div className="relative z-10 mx-auto mt-12 max-w-5xl">
          <ImageSlider slides={STUDIO_SLIDES} autoAdvanceInterval={4000} />
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          <h3 className="mb-6 text-center text-lg font-semibold text-gray-800 md:text-xl">
            Location &amp; Contact
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="mailto:lallartlab@gmail.com"
              className="rounded-md bg-[#FFD700] px-4 py-2 text-sm font-semibold text-black hover:bg-[#FFC400]"
            >
              Email
            </a>
            <a
              href="https://wa.me/821023978424"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#FFD700] px-4 py-2 text-sm font-semibold text-black hover:bg-[#FFC400]"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/lalla_kids_art/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#FFD700] px-4 py-2 text-sm font-semibold text-black hover:bg-[#FFC400]"
            >
              Instagram DM
            </a>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-[#FFD700]" />
              <div>
                <h4 className="font-bold">Studio Address</h4>
                <p className="mt-1 text-sm text-gray-500">
                  2F, 7 Dongho-ro 10-gil, Jung-gu, Seoul
                  <br />
                  서울 중구 동호로10길 7 2층
                  <br />
                  Yaksu Station (Line 3 / 6), Exit 4 — 2 min walk
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 flex-shrink-0 text-[#FFD700]" />
              <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Tue–Fri 10:00 AM – 6:00 PM
                  <br />
                  Sat 10:00 AM – 7:00 PM
                  <br />
                  Mon, Sun &amp; public holidays: Closed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Navigation className="mt-1 h-5 w-5 flex-shrink-0 text-[#FFD700]" />
              <div>
                <h4 className="font-bold">Nearest Subway</h4>
                <p className="mt-1 text-sm text-gray-500">
                  Yaksu Station, Exit 4 — 2-minute walk
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Lalla Art Lab Location"
              src="https://www.google.com/maps?q=2F,+7+Dongho-ro+10-gil,+Jung-gu,+Seoul,+South+Korea&output=embed"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
