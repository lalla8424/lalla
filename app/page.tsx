import React from "react";
import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { ExperiencePreviewSection } from "../components/sections/experience-preview-section";
import { ChooseExperienceSection } from "../components/sections/choose-experience-section";
import { LovedByFamiliesSection } from "../components/sections/loved-by-families-section";
import { OurImpactSection } from "../components/sections/our-impact-section";
import { WhyFamiliesSection } from "../components/sections/why-families-section";
import { PhotobookSection } from "../components/sections/photobook-section";
import { TeacherSection } from "../components/sections/teacher-section";
import { GallerySection } from "../components/sections/gallery-section";
import { FaqSection } from "../components/sections/faq-section";
import { BookNowSection } from "../components/sections/book-now-section";
import { StickyBookingCta } from "../components/sections/sticky-booking-cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperiencePreviewSection />
      <ChooseExperienceSection />
      <LovedByFamiliesSection />
      <OurImpactSection />
      <WhyFamiliesSection />
      <PhotobookSection />
      <FaqSection />
      <TeacherSection />
      <GallerySection />
      <BookNowSection />
      <StickyBookingCta />
      <div className="h-16 md:hidden" aria-hidden="true" />
    </>
  );
}
