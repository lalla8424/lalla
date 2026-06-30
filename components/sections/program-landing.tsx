/**
 * @file program-landing.tsx
 * @description Shared layout for standalone program pages (Summer Camp, School Workshops).
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { CreativeKeepsakesSection } from "@/components/sections/creative-keepsakes-section";
import { PhotobookAddOnSection } from "@/components/sections/photobook-add-on-section";
import { ProgramBookingCta } from "@/components/sections/program-booking-cta";

export interface ProgramHighlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProgramLandingProps {
  badge: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  intro: string[];
  highlights: ProgramHighlight[];
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export function ProgramLanding({
  badge,
  title,
  subtitle,
  heroImage,
  heroAlt,
  intro,
  highlights,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
}: ProgramLandingProps) {
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
          src={heroImage}
          alt={heroAlt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container relative z-10 flex min-h-[40vh] items-end px-4 pb-12 md:min-h-[50vh] md:px-6 md:pb-16">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-black">
              {badge}
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-lg text-white/90 md:text-xl">{subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-gray-600 md:text-lg leading-relaxed">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map(({ icon: Icon, title: itemTitle, description }) => (
              <div
                key={itemTitle}
                className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6"
              >
                <Icon className="mb-3 h-6 w-6 text-[#C9A800]" aria-hidden="true" />
                <h2 className="font-bold text-gray-900">{itemTitle}</h2>
                <p className="mt-2 text-sm text-gray-500">{description}</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-12">
            <CreativeKeepsakesSection />
            <PhotobookAddOnSection />
            <ProgramBookingCta
              primaryLabel={ctaLabel}
              primaryHref={ctaHref}
              secondaryLabel={secondaryCtaLabel}
              secondaryHref={secondaryCtaHref}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
