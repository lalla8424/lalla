/**
 * @file experience-page.tsx
 * @description Dedicated landing page for a single creative experience type.
 */

import React from "react";
import { ProgramLanding } from "./program-landing";
import { EXPERIENCE_PAGES } from "@/constants/homepage";

interface ExperiencePageProps {
  slug: string;
}

export function ExperiencePage({ slug }: ExperiencePageProps) {
  const experience = EXPERIENCE_PAGES[slug];
  if (!experience) return null;

  return (
    <ProgramLanding
      badge={experience.badge}
      title={experience.title}
      subtitle={experience.subtitle}
      heroImage={experience.heroImage}
      heroAlt={experience.heroAlt}
      intro={experience.intro}
      highlights={[]}
      ctaLabel="Book an Art Experience"
      ctaHref="/art-experience"
      secondaryCtaLabel="View All Programs"
      secondaryCtaHref="/#choose-experience"
    />
  );
}
