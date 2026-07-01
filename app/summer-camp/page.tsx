import type { Metadata } from "next";
import { SummerCampPage } from "@/components/sections/summer-camp-page";

export const metadata: Metadata = {
  title: "Creative Summer Camp | Lalla Kids Art",
  description:
    "Creative Summer Camp in Seoul — weekly art sessions July to August. Projection mural, Joomchi, oil pastels, traditional ink painting, and personalised keepsakes for children.",
};

export default function SummerCampRoute() {
  return <SummerCampPage />;
}
