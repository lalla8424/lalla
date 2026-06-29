import type { Metadata } from "next";
import { PrivateFamilyEventsPage } from "@/components/sections/private-family-events-page";

export const metadata: Metadata = {
  title: "Private Family & Events | Lalla Kids Art",
  description:
    "Private creative art experiences in Seoul for families, birthdays, friends, and private groups. From 220,000 KRW for 2 hours.",
};

export default function PrivateFamilyEventsRoute() {
  return <PrivateFamilyEventsPage />;
}
