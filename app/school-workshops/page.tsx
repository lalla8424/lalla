import type { Metadata } from "next";
import { SchoolWorkshopsPage } from "@/components/sections/school-workshops-page";

export const metadata: Metadata = {
  title: "School Workshops | Lalla Kids Art",
  description:
    "Collaborate with LALLA for custom art workshops at our Seoul studio or at your school. International schools, embassies, and organizations welcome.",
};

export default function SchoolWorkshopsRoute() {
  return <SchoolWorkshopsPage />;
}
