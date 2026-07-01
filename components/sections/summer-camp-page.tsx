/**
 * @file summer-camp-page.tsx
 * @description Creative Summer Camp — dedicated seasonal program landing page.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ExpandableImage } from "@/components/ui/expandable-image";
import { PhotobookAddOnSection } from "@/components/sections/photobook-add-on-section";
import { ProgramBookingCta } from "@/components/sections/program-booking-cta";
import { formatMenuPrice, cn } from "@/lib/utils";

const CAMP_KEY_POINTS = [
  {
    label: "Schedule",
    value: "Every Wednesday",
    detail: "10:30 AM – 1:30 PM · 3 hours",
    featured: true,
  },
  {
    label: "Season",
    value: "July – August",
    detail: "Weekly sessions throughout summer",
  },
  {
    label: "Booking",
    value: "Flexible",
    detail: "Join one session or book multiple weeks",
  },
] as const;

const WHATS_INCLUDED = [
  "3-hour creative experience",
  "Approximately 30-minute lunch break",
  "2.5 hours of guided art activities",
  "Small group learning",
  "All art materials included",
  "One personalised keepsake included",
  "Please bring your own lunch.",
];

const TAKE_HOME = [
  "One personalised keepsake",
  "Your child's original artwork",
  "Creative memories made in Korea",
];

const WEEKLY_PROGRAMS = [
  {
    title: "Week 1 — Under the Sea",
    mainProjectTitle: "Projection Mural Art",
    mainProjectDescription:
      "Explore coral reefs, jellyfish, tropical fish and ocean creatures while creating a large collaborative projection mural.",
    creativeMaking: "Jellyfish Mobile",
    keepsakeTitle: "Custom T-shirt",
    keepsakeDescription:
      "Transform your child's underwater artwork into a wearable T-shirt.",
    activityImage: "/sea.png",
    activityAlt: "Under the Sea projection mural art activity",
    keepsakeImages: [
      {
        src: "/jellyfish.jpg",
        alt: "Jellyfish mobile creative making activity",
        className: "flex-[1.4]",
      },
      {
        src: "/t_shirt.png",
        alt: "Custom T-shirt keepsake from underwater artwork",
        className: "flex-1",
      },
    ],
  },
  {
    title: "Week 2 — Korean Paper Art",
    mainProjectTitle: "Joomchi Art",
    mainProjectDescription:
      "Discover traditional Korean paper techniques through layering, texture, tearing and mixed media.",
    mainProjectHighlight:
      "A hallmark of Joomchi: layers are bonded using water alone — no glue.",
    keepsakeTitle: "Custom Tumbler",
    keepsakeDescription:
      "Create a personalised tumbler inspired by your own Joomchi artwork.",
    activityImage: "/joomchi.jpg",
    activityAlt: "Joomchi Korean paper art activity",
    keepsakeImages: [
      {
        src: "/tumbler.png",
        alt: "Custom tumbler keepsake from Joomchi artwork",
      },
      {
        src: "/tumblr2.png",
        alt: "Custom tumbler design detail from Joomchi artwork",
      },
    ],
    keepsakeImagesFit: "contain",
  },
  {
    title: "Week 3 — Dream Landscapes",
    mainProjectTitle: "Oil Pastel Landscapes",
    mainProjectDescription:
      "Create beautiful auroras, sunsets, mountains, lakes and dreamy skies using oil pastels.",
    keepsakeTitle: "Custom Bucket Hat",
    keepsakeDescription:
      "Decorate your own bucket hat using spray fabric dye, stencil techniques and a personalised artwork patch.",
    activityImage: "/IMG_0366.jpg",
    activityAlt: "Oil pastel dream landscape art activity",
    imageRowAspect: "aspect-[8/3]",
    keepsakeImages: [
      {
        src: "/b1.png",
        alt: "Custom bucket hat keepsake from landscape artwork",
      },
      {
        src: "/b2.png",
        alt: "Custom bucket hat design detail from landscape artwork",
      },
    ],
    keepsakeImagesFit: "contain",
  },
  {
    title: "Week 4 — Korean Ink & Nature Art",
    mainProjectTitle: "Irworobongdo Mural & Traditional Ink Painting",
    mainProjectImage: "/iwoll.png",
    mainProjectImageAlt: "Irworobongdo sun, moon and five peaks motif reference",
    mainProjectDescription:
      "Create a collaborative Irworobongdo mural — Korea's sun, moon and five peaks motif.",
    mainProjectHighlight:
      "Ground ink, traditional brush and watercolour for nature-inspired artwork.",
    keepsakeTitle: "Custom Tote Bag",
    keepsakeDescription:
      "Personalise a custom tote bag with your artwork, using fabric painting, pattern stamping, collage and botanical transfer techniques.",
    activityImage: "/illwol.png",
    activityAlt: "Irworobongdo mural and traditional Korean ink painting activity",
    keepsakeImage: "/ink.png",
    keepsakeAlt: "Traditional Korean ink painting and custom tote bag artwork",
  },
] as const;

export function SummerCampPage() {
  return (
    <div className="bg-white">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <Link
          href="/#choose-experience"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to programs
        </Link>
      </div>

      <section className="relative min-h-[40vh] md:min-h-[50vh]">
        <Image
          src="/summer.jpg"
          alt="Children at Lalla Creative Summer Camp"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container relative z-10 flex min-h-[40vh] items-end px-4 pb-12 md:min-h-[50vh] md:px-6 md:pb-16">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-black">
              Seasonal Program
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
              Creative Summer Camp
            </h1>
            <p className="mt-3 text-lg text-white/90 md:text-xl">
              Every Wednesday | 10:30 AM – 1:30 PM (3 hours)
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Overview & Pricing */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60">
                {CAMP_KEY_POINTS.map((point, index) => (
                  <div
                    key={point.label}
                    className={cn(
                      "px-5 py-4 md:px-6 md:py-5",
                      index > 0 && "border-t border-gray-100",
                      point.featured && "bg-white/70",
                    )}
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#C9A800] md:text-sm">
                      {point.label}
                    </p>
                    <p
                      className={cn(
                        "mt-1 font-semibold text-gray-900",
                        point.featured ? "text-xl md:text-2xl" : "text-lg md:text-xl",
                      )}
                    >
                      {point.value}
                    </p>
                    <p className="mt-0.5 text-sm text-gray-600 md:text-base">
                      {point.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
                  <p className="text-sm font-semibold text-gray-900">
                    Early Bird
                  </p>
                  <p className="mt-1 text-sm text-gray-600">
                    Book by{" "}
                    <span className="font-semibold text-gray-900">July 10</span>
                  </p>
                  <p className="mt-2 tabular-nums text-lg font-bold text-gray-900">
                    ₩{formatMenuPrice(93000)}{" "}
                    <span className="text-sm font-medium text-gray-600">
                      per session
                    </span>
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Save ₩{formatMenuPrice(12000)}
                  </p>
                </div>
                <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
                  <p className="text-sm font-semibold text-gray-900">Regular</p>
                  <p className="mt-1 text-sm text-gray-600">
                    From{" "}
                    <span className="font-semibold text-gray-900">July 11</span>
                  </p>
                  <p className="mt-2 tabular-nums text-lg font-bold text-gray-900">
                    ₩{formatMenuPrice(105000)}{" "}
                    <span className="text-sm font-medium text-gray-600">
                      per session
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Limited to only 5 children each Wednesday. Early Bird pricing
                ends on July 10.
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What&apos;s Included
              </h2>
              <ul className="space-y-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                {WHATS_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-700 md:text-lg"
                  >
                    <span className="text-gray-900" aria-hidden="true">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Weekly Programs */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Weekly Programs
              </h2>
              {WEEKLY_PROGRAMS.map((week) => (
                <article
                  key={week.title}
                  className="space-y-4 border-t border-gray-100 pt-8 first:border-t-0 first:pt-0"
                >
                  <h3 className="text-xl font-bold text-[#C9A800]">
                    {week.title}
                  </h3>

                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[#C9A800]">
                        Main Project
                      </p>
                      <p className="font-medium text-gray-900 md:text-lg">
                        {week.mainProjectTitle}
                      </p>
                      {"mainProjectImage" in week && week.mainProjectImage ? (
                        <div className="pt-1">
                          <Image
                            src={week.mainProjectImage}
                            alt={week.mainProjectImageAlt}
                            width={160}
                            height={120}
                            className="h-auto w-28 rounded-lg border border-gray-100 object-contain sm:w-32"
                          />
                        </div>
                      ) : null}
                      <p className="text-gray-600 md:text-lg leading-relaxed">
                        {week.mainProjectDescription}
                      </p>
                      {"mainProjectHighlight" in week &&
                      week.mainProjectHighlight ? (
                        <p className="font-medium text-gray-900 md:text-lg leading-relaxed">
                          {week.mainProjectHighlight}
                        </p>
                      ) : null}
                    </div>

                    {"creativeMaking" in week && week.creativeMaking ? (
                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-gray-900">
                          Creative Making
                        </p>
                        <p className="text-gray-700 md:text-lg">
                          {week.creativeMaking}
                        </p>
                      </div>
                    ) : null}

                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-[#C9A800]">
                        Personalised Keepsake
                      </p>
                      <p className="font-medium text-gray-900 md:text-lg">
                        {week.keepsakeTitle}
                      </p>
                      <p className="text-gray-600 md:text-lg leading-relaxed">
                        {week.keepsakeDescription}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60">
                      <ExpandableImage
                        src={week.activityImage}
                        alt={week.activityAlt}
                        containerClassName={cn(
                          "w-full",
                          "imageRowAspect" in week && week.imageRowAspect
                            ? week.imageRowAspect
                            : "aspect-[8/3]",
                          week.activityImageFit === "contain" && "bg-white/90",
                        )}
                        imageClassName={
                          week.activityImageFit === "contain"
                            ? "object-contain object-center"
                            : "object-cover"
                        }
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                    </div>
                    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60">
                      {"keepsakeImages" in week && week.keepsakeImages ? (
                        <div
                          className={cn(
                            "flex w-full items-stretch",
                            "imageRowAspect" in week && week.imageRowAspect
                              ? week.imageRowAspect
                              : "aspect-[8/3]",
                            week.keepsakeImagesFit === "contain"
                              ? "gap-1.5 p-1.5 sm:gap-2 sm:p-2"
                              : "gap-px",
                          )}
                        >
                          {week.keepsakeImages.map((image) => (
                            <ExpandableImage
                              key={image.src}
                              src={image.src}
                              alt={image.alt}
                              containerClassName={cn(
                                "relative h-full min-w-0 overflow-hidden",
                                week.keepsakeImagesFit === "contain" &&
                                  "rounded-lg bg-white/90",
                                image.className ?? "flex-1",
                              )}
                              imageClassName={
                                week.keepsakeImagesFit === "contain"
                                  ? "object-contain object-center"
                                  : "object-cover object-center"
                              }
                              sizes="(max-width: 640px) 50vw, 25vw"
                            />
                          ))}
                        </div>
                      ) : (
                        <ExpandableImage
                          src={week.keepsakeImage}
                          alt={week.keepsakeAlt}
                          containerClassName={cn(
                            "w-full",
                            "imageRowAspect" in week && week.imageRowAspect
                              ? week.imageRowAspect
                              : "aspect-[8/3]",
                          )}
                          imageClassName="object-cover"
                          sizes="(max-width: 640px) 100vw, 50vw"
                        />
                      )}
                    </div>
                  </div>
                  <p className="text-center text-xs font-medium text-gray-500 md:text-sm">
                    Activity → Keepsake
                  </p>
                </article>
              ))}
            </div>

            {/* What You'll Take Home */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What You&apos;ll Take Home
              </h2>
              <ul className="space-y-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                {TAKE_HOME.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-700 md:text-lg"
                  >
                    <span className="text-gray-900" aria-hidden="true">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <PhotobookAddOnSection />

            <ProgramBookingCta
              primaryLabel="Book Your Summer Camp Spot"
              secondaryLabel=""
              secondaryHref=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
