import type { Metadata } from "next";
import { SummerCampPage } from "@/components/sections/summer-camp-page";

export const metadata: Metadata = {
  title: "Summer Art Camp | Lalla Kids Art",
  description:
    "Seasonal creative art camp in Seoul for international families and visiting children. Projection mural art, eco materials, and cultural experiences.",
};

export default function SummerCampRoute() {
  return <SummerCampPage />;
}
