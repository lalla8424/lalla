/**
 * @file sticky-booking-cta.tsx
 * @description Mobile sticky booking CTA for conversion.
 */

"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyBookingCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#FFD700]/30 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden">
      <Button
        asChild
        className="h-12 w-full bg-[#FFD700] text-base font-semibold text-black hover:bg-[#FFC400]"
      >
        <Link href="/#book-now">Book an Art Experience</Link>
      </Button>
    </div>
  );
}
