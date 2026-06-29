/**
 * @file choose-experience-section.tsx
 * @description Program selection cards to help visitors choose the right experience.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHOOSE_PROGRAMS } from "@/constants/homepage";

export function ChooseExperienceSection() {
  return (
    <section
      id="choose-experience"
      className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            Programs
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Choose Your Experience
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            Find the session that fits your family&apos;s visit or stay in Seoul.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CHOOSE_PROGRAMS.map((program) => (
            <article
              key={program.id}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">
                  {program.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    <Clock className="h-3 w-3" />
                    {program.duration}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                    <Users className="h-3 w-3" />
                    {program.bestFor}
                  </span>
                  {program.price && (
                    <span className="rounded-full bg-[#FFD700]/20 px-2.5 py-1 text-xs font-semibold text-gray-900">
                      {program.price}
                    </span>
                  )}
                </div>
                <p className="mt-3 whitespace-pre-line text-xs text-gray-500">
                  {program.includes}
                </p>
                <Button
                  asChild
                  className="mt-5 w-full bg-[#FFD700] font-semibold text-black hover:bg-[#FFC400]"
                >
                  <Link href={program.href}>{program.cta}</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
