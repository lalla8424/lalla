/**
 * @file art-experience-page.tsx
 * @description Standalone Art Experience program details page.
 */

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ArtExperienceDetail } from "@/components/programs/program-details";

export function ArtExperiencePage() {
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
              Art Experience
            </h1>
            <p className="mt-4 text-gray-500 md:text-lg">
              A one-time creative art session for visitors and first-time
              families in Seoul.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl">
            <ArtExperienceDetail />
          </div>
        </div>
      </section>
    </div>
  );
}
