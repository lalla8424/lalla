"use client";

import React from "react";
import { PageLoadingSpinner } from "../components/ui/loading-spinner";
import { HeroSection } from "../components/sections/hero-section";
import { AboutSection } from "../components/sections/about-section";
import { GallerySection } from "../components/sections/gallery-section";
import { TeacherSection } from "../components/sections/teacher-section";
import { ProgramsSection } from "../components/sections/programs-section";
import { VisitSection } from "../components/sections/visit-section";

export default function Home() {
  const [mounted, setMounted] = React.useState(false);

  // Client-side rendering mount check
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading screen during server-side rendering
  if (!mounted) {
    return <PageLoadingSpinner />;
  }

  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <TeacherSection />
      <ProgramsSection />
      <VisitSection />
    </>
  );
}
