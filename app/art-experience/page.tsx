import type { Metadata } from "next";
import { ArtExperiencePage } from "@/components/sections/art-experience-page";

export const metadata: Metadata = {
  title: "Art Experience | Lalla Kids Art",
  description:
    "90-minute creative art session in Seoul for visitors and first-time families. Projection mural art, eco painting, and eco clay.",
};

export default function ArtExperienceRoute() {
  return <ArtExperiencePage />;
}
