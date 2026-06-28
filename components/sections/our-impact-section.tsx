/**
 * @file our-impact-section.tsx
 * @description Credibility section — animated statistics, country chips, partners, workshops.
 *
 * @dependencies
 * - @/constants/homepage: stats, countries, organizations, workshop photos
 * - lucide-react: stat icons
 */

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Globe, Heart, Layers, Monitor, Users, LucideIcon } from "lucide-react";
import {
  COUNTRY_CHIPS,
  IMPACT_STATS,
  PARTNER_ORGANIZATIONS,
  WORKSHOP_PHOTOS,
} from "@/constants/homepage";

const STAT_ICONS: Record<string, LucideIcon> = {
  monitor: Monitor,
  layers: Layers,
  users: Users,
  heart: Heart,
  globe: Globe,
};

function AnimatedStat({
  value,
  suffix,
  label,
  icon,
}: {
  value: number;
  suffix: string;
  label: string;
  icon: keyof typeof STAT_ICONS;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1500;
          const start = performance.now();

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.round(value * eased));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  const Icon = STAT_ICONS[icon] ?? Globe;

  return (
    <div
      ref={ref}
      className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm"
    >
      <Icon className="mb-4 h-8 w-8 text-[#C9A800]" aria-hidden="true" />
      <p className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-3 max-w-[14rem] text-sm font-medium leading-snug text-gray-500">
        {label}
      </p>
    </div>
  );
}

export function OurImpactSection() {
  return (
    <section id="our-impact" className="bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            Impact
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Our Impact
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMPACT_STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Families We've Welcomed */}
        <div className="mx-auto mt-20 max-w-5xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Families We&apos;ve Welcomed
          </h3>
          <p className="mt-4 text-gray-500 md:text-lg">
            Welcoming international families living in and visiting Korea.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {COUNTRY_CHIPS.map((country) => (
              <span
                key={country.name}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-800 shadow-sm"
              >
                <span aria-hidden="true">{country.flag}</span>
                {country.name}
              </span>
            ))}
          </div>
        </div>

        {/* Trusted by Schools & Organizations */}
        <div className="mx-auto mt-20 max-w-5xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Trusted by Schools &amp; Organizations
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {PARTNER_ORGANIZATIONS.map((org) => (
              <span
                key={org}
                className="rounded-2xl border border-gray-100 bg-white px-6 py-4 text-sm font-semibold text-gray-700 shadow-sm md:text-base"
              >
                {org}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {WORKSHOP_PHOTOS.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
