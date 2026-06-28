/**
 * @file summer-camp-page.tsx
 * @description Summer Art Camp standalone landing page content.
 */

import React from "react";
import { Calendar, Globe, Palette, Sun } from "lucide-react";
import { ProgramLanding } from "./program-landing";

export function SummerCampPage() {
  return (
    <ProgramLanding
      badge="Seasonal Program"
      title="Summer Art Camp"
      subtitle="Creative holiday sessions for international families and visiting children in Seoul."
      heroImage="/art11.JPG"
      heroAlt="Children at Lalla Summer Art Camp"
      intro={[
        "Our Summer Art Camp offers hands-on creative sessions during school holidays — designed for international families, travelers, and children spending summer in Seoul.",
        "Each camp day blends projection mural art, eco-friendly materials, drawing, and cultural storytelling in a warm, English-friendly studio setting.",
        "Schedules and themes are announced seasonally. Contact us for the latest dates, age groups, and availability.",
      ]}
      highlights={[
        {
          icon: Sun,
          title: "Holiday Schedule",
          description:
            "Runs during school breaks with flexible weekly or daily options.",
        },
        {
          icon: Palette,
          title: "Creative Activities",
          description:
            "Projection murals, eco painting, clay, mixed media, and creative making.",
        },
        {
          icon: Globe,
          title: "International Families",
          description:
            "English-friendly sessions welcoming visitors and Seoul residents alike.",
        },
        {
          icon: Calendar,
          title: "Seasonal Themes",
          description:
            "Each camp explores culture, stories, and traditions through immersive art.",
        },
      ]}
      ctaLabel="Inquire About Summer Camp"
      ctaHref="/#book-now"
      secondaryCtaLabel="View All Programs"
      secondaryCtaHref="/#choose-experience"
    />
  );
}
