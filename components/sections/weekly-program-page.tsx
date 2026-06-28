/**
 * @file weekly-program-page.tsx
 * @description Standalone Weekly Art Program details page.
 */

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WeeklyProgramDetail } from "@/components/programs/program-details";

export function WeeklyProgramPage() {
  return (
    <div className="bg-white">
      <div className="container px-4 py-8 md:px-6 md:py-10">
        <Link
          href="/#choose-experience"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to programs
        </Link>
      </div>

      <section className="pb-16 md:pb-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Program Details
            </div>
            <h1 className="mt-4 text-3xl font-bold tracking-normal text-gray-900 sm:text-5xl">
              Weekly Art Program
            </h1>
            <p className="mt-4 text-gray-500 md:text-lg">
              Creative Kids Art Adventure — drawing, projection murals,
              sculpture, mixed media, and eco-friendly materials.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <WeeklyProgramDetail />
          </div>
        </div>
      </section>
    </div>
  );
}
