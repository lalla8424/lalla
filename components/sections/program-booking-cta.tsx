/**
 * @file program-booking-cta.tsx
 * @description Booking call-to-action placed at the end of program detail pages.
 */

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProgramBookingCtaProps {
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function ProgramBookingCta({
  primaryLabel,
  primaryHref = "/#book-now",
  secondaryLabel = "View All Programs",
  secondaryHref = "/#choose-experience",
}: ProgramBookingCtaProps) {
  return (
    <div className="space-y-4 border-t border-gray-100 pt-8">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button
          asChild
          size="lg"
          className="bg-[#FFD700] font-semibold text-black hover:bg-[#FFC400]"
        >
          <Link href={primaryHref}>{primaryLabel}</Link>
        </Button>
        {secondaryLabel && secondaryHref ? (
          <Button asChild variant="outline" size="lg" className="font-semibold">
            <Link href={secondaryHref}>{secondaryLabel}</Link>
          </Button>
        ) : null}
      </div>
    </div>
  );
}
