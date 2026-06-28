/**
 * @file school-workshops-page.tsx
 * @description School Workshops collaboration landing page — on-site or off-site.
 */

import React from "react";
import { Building2, Handshake, MapPin, School, Users } from "lucide-react";
import { ProgramLanding } from "./program-landing";

export function SchoolWorkshopsPage() {
  return (
    <ProgramLanding
      badge="Collaboration"
      title="School Workshops"
      subtitle="Partner with LALLA for custom creative art programs at our studio or yours."
      heroImage="/cultural.jpg"
      heroAlt="School workshop at Lalla Kids Art"
      intro={[
        "We collaborate with international schools, embassies, homeschool groups, and organizations to deliver engaging art workshops for children.",
        "Programs can be held at our studio in Yaksu, Seoul — or we can bring materials and facilitators to your school or venue.",
        "Workshops are tailored to your group size, age range, and learning goals, from one-off cultural art days to multi-session programs.",
      ]}
      highlights={[
        {
          icon: School,
          title: "International Schools",
          description:
            "Curriculum-aligned creative sessions for students ages 4–15.",
        },
        {
          icon: Building2,
          title: "Embassies & Organizations",
          description:
            "Cultural art experiences for families and community groups.",
        },
        {
          icon: MapPin,
          title: "Visit Our Studio",
          description:
            "Groups are welcome at LALLA for immersive projection mural and eco art sessions.",
        },
        {
          icon: Users,
          title: "We Come to You",
          description:
            "On-site workshops at your school or venue — we handle materials and setup.",
        },
        {
          icon: Handshake,
          title: "Flexible Collaboration",
          description:
            "One-day events, weekly programs, or custom partnerships — let's plan together.",
        },
      ]}
      ctaLabel="Request a Collaboration"
      ctaHref="/#book-now"
      secondaryCtaLabel="Contact Us"
      secondaryCtaHref="mailto:lallartlab@gmail.com?subject=School%20Workshop%20Collaboration%20Inquiry"
    />
  );
}
