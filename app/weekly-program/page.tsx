import type { Metadata } from "next";
import { WeeklyProgramPage } from "@/components/sections/weekly-program-page";

export const metadata: Metadata = {
  title: "Weekly Art Program | Lalla Kids Art",
  description:
    "4-week creative art program in Seoul for families living in Korea. Drawing, murals, mixed media, and eco-friendly materials.",
};

export default function WeeklyProgramRoute() {
  return <WeeklyProgramPage />;
}
