/**
 * @file our-impact-section.tsx
 * @description Credibility section — animated statistics, country chips, partners, workshops.
 *
 * @dependencies
 * - @/constants/homepage: stats, countries, organizations, workshop photos
 * - lucide-react: stat icons
 */

"use client";

import React from "react";
import Image from "next/image";
import { Globe, Heart, Layers, Monitor, Users, LucideIcon } from "lucide-react";
import {
  ALSO_SERVING,
  COUNTRY_CHIPS,
  IMPACT_STATS,
  PARTNER_ORGANIZATIONS,
  WORKSHOP_PHOTO,
} from "@/constants/homepage";

const STAT_ICONS: Record<string, LucideIcon> = {
  monitor: Monitor,
  layers: Layers,
  users: Users,
  heart: Heart,
  globe: Globe,
};

function PartnerLogo({ src }: { src: string }) {
  const [hidden, setHidden] = React.useState(false);
  if (hidden) return null;

  return (
    <Image
      src={src}
      alt=""
      width={96}
      height={40}
      className="max-h-8 w-auto max-w-[6rem] shrink-0 object-contain opacity-90"
      onError={() => setHidden(true)}
    />
  );
}

function PartnerCard({
  name,
  description,
  logo,
}: {
  name: string;
  description: string;
  logo?: string;
}) {
  return (
    <div className="flex h-full items-center justify-between gap-3 rounded-lg bg-[#F2F1E8] px-3.5 py-3">
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold leading-tight text-gray-900">{name}</p>
        <p className="mt-1 text-[11px] leading-snug text-gray-600">{description}</p>
      </div>
      {logo ? <PartnerLogo src={logo} /> : null}
    </div>
  );
}

function StatCard({
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
  const Icon = STAT_ICONS[icon] ?? Globe;

  return (
    <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
      <Icon className="mb-4 h-8 w-8 text-[#C9A800]" aria-hidden="true" />
      <p className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
        {value}
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
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>

        {/* Families We've Welcomed */}
        <div className="mx-auto mt-14 max-w-5xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Families We&apos;ve Welcomed So Far
          </h3>
          <p className="mt-4 text-gray-500 md:text-lg">
            International families living in and visiting Korea — and we&apos;re
            excited to welcome even more cultures and communities in the years
            ahead.
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
        <div className="mx-auto mt-14 max-w-6xl">
          <h3 className="text-center text-xl font-bold text-gray-900 sm:text-2xl">
            Trusted by Schools &amp; Organizations
          </h3>
          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
            {PARTNER_ORGANIZATIONS.map((org) => (
              <PartnerCard
                key={org.name}
                name={org.name}
                description={org.description}
                logo={org.logo}
              />
            ))}
          </div>

          <div className="mt-4 rounded-lg bg-[#F2F1E8] px-4 py-3">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
              <span className="text-xs font-bold italic text-gray-900">
                {ALSO_SERVING.label}:
              </span>
              {ALSO_SERVING.communities.map((community, index) => (
                <React.Fragment key={community}>
                  {index > 0 ? (
                    <span className="text-[10px] text-gray-400" aria-hidden="true">
                      ·
                    </span>
                  ) : null}
                  <span className="text-[11px] leading-snug text-gray-600">
                    {community}
                  </span>
                </React.Fragment>
              ))}
              <span className="text-[10px] text-gray-400" aria-hidden="true">
                ·
              </span>
              <span className="text-[11px] italic leading-snug text-gray-500">
                {ALSO_SERVING.note}
              </span>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl">
            <Image
              src={WORKSHOP_PHOTO.src}
              alt={WORKSHOP_PHOTO.alt}
              width={1900}
              height={1396}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
