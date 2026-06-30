/**
 * @file private-family-events-page.tsx
 * @description Private Family & Events — dedicated program landing page.
 */

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CreativeKeepsakesSection } from "@/components/sections/creative-keepsakes-section";
import { PhotobookAddOnSection } from "@/components/sections/photobook-add-on-section";
import {
  ArrowLeft,
  Clock,
  Coins,
  Package,
  UserPlus,
  Users,
} from "lucide-react";

const ACTIVITIES = [
  "Projection Mural Art",
  "Eco Clay & Eco Paint",
  "Drawing & Painting",
  "Space Installation Art",
  "Korean & World Cultures Through Art",
];

const PERFECT_FOR = [
  "International Families Visiting Seoul",
  "Birthday Parties & Celebrations",
  "Friends & Private Groups",
  "Siblings & Multi-age Families",
];

const INCLUDED = [
  "Exclusive use of the studio",
  "2-hour private creative experience",
  "Personalised activity planning",
  "English-friendly instruction",
  "All art materials provided",
  "Aprons and equipment",
  "Studio setup and cleanup",
];

const PRICING_ITEMS = [
  { label: "Duration", value: "2 Hours", icon: Clock },
  { label: "Starting From", value: "290,000 KRW", icon: Coins },
  { label: "Includes", value: "Up to 3 Children", icon: Package },
  { label: "Maximum Capacity", value: "Up to 10 Children", icon: Users },
  {
    label: "Additional Child",
    value: "+43,000 KRW per child",
    icon: UserPlus,
  },
];

const PRICING_NOTES = [
  "Every private experience is personalised for your group.",
  "Additional hours are available upon request.",
  "Sunday bookings are available with an additional fee.",
  "Decorations, catering, special event setups, or customised requests may require additional charges.",
  "Final pricing depends on selected activities and event requirements.",
];

const HOW_IT_WORKS = [
  "Fill in details & choose activities",
  "Send your booking email",
  "Receive your quote",
  "Confirm your booking",
];

const FAQ_ITEMS = [
  {
    question: "How many children can join?",
    answer:
      "Up to 10 children can join a private session. We recommend groups of up to 4 children for the most personalised experience. Additional children beyond your confirmed group size are quoted individually.",
  },
  {
    question: "Can adults participate?",
    answer:
      "Yes. Parents and caregivers are welcome to stay and observe. We may invite an adult to join briefly when helpful for younger children.",
  },
  {
    question: "Can we combine multiple activities?",
    answer:
      "Yes. You can mix and match from our activity menu to create a personalised 2-hour experience for your group.",
  },
  {
    question: "Can siblings of different ages join together?",
    answer:
      "Yes. We tailor activities so siblings and multi-age families can create together in the same session.",
  },
  {
    question: "Can we celebrate birthdays?",
    answer:
      "Yes. Private Family & Events is perfect for birthday parties and celebrations. Share your plans when you enquire and we will personalise the session for your occasion.",
  },
  {
    question: "Can we extend the session?",
    answer:
      "Extra hours are available upon request. Let us know when booking and we will provide a quote.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking at least 1–2 weeks in advance. For weekends, holidays, or special event setups, earlier booking is encouraged.",
  },
];

export function PrivateFamilyEventsPage() {
  return (
    <div className="bg-white">
      <div className="container px-4 py-8 md:px-6 md:py-10">
        <Link
          href="/#choose-experience"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to programs
        </Link>
      </div>

      <section className="relative min-h-[40vh] md:min-h-[50vh]">
        <Image
          src="/l_d.jpeg"
          alt="Private family art experience at Lalla Kids Art"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="container relative z-10 flex min-h-[40vh] items-end px-4 pb-12 md:min-h-[50vh] md:px-6 md:pb-16">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-black">
              Private Experience
            </span>
            <h1 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
              Private Family &amp; Events
            </h1>
            <p className="mt-3 text-lg text-white/90 md:text-xl">
              A personalised creative art experience for families, birthdays,
              friends, and private groups in Seoul.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-12">
            {/* Introduction */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              <div className="space-y-4 text-gray-600 md:text-lg leading-relaxed">
                <p>
                  Perfect for families, birthdays, friends, and private groups
                  looking for a personalised creative art experience in Seoul.
                </p>
                <p>
                  Enjoy the studio exclusively for your group with activities
                  chosen to match your occasion, ages, and interests — from
                  projection mural art to eco clay, drawing, installation, and
                  cultural art experiences.
                </p>
                <p>
                  Every private experience is personalised for your group.
                  Whether you&apos;re celebrating a birthday, travelling in
                  Korea, or gathering with friends and family, we&apos;ll design
                  an art experience based on your children&apos;s ages,
                  interests, and preferred activities.
                </p>
              </div>
            </div>

            {/* Perfect For */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Perfect For</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {PERFECT_FOR.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-4 text-sm text-gray-700"
                  >
                    <Users
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A800]"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Choose Your Activities */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Choose Your Activities
              </h2>
              <ul className="space-y-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                {ACTIVITIES.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-center gap-2 text-gray-700 md:text-lg"
                  >
                    <span className="text-[#C9A800]" aria-hidden="true">
                      •
                    </span>
                    {activity}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500 md:text-lg leading-relaxed">
                Mix and match activities to create your own personalised
                experience.
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap gap-4">
                  {PRICING_ITEMS.map(({ label, value, icon: Icon }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3"
                    >
                      <Icon
                        className="h-5 w-5 text-[#C9A800]"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                          {label}
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-sm font-semibold text-gray-700 md:text-base">
                Please Note
              </p>
              <ul className="space-y-2 text-sm text-gray-500 md:text-base leading-relaxed">
                {PRICING_NOTES.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <span className="text-[#C9A800]" aria-hidden="true">
                      •
                    </span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What&apos;s Included
              </h2>
              <ul className="space-y-2 rounded-2xl border border-gray-100 bg-gray-50/60 p-6">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-gray-700 md:text-lg"
                  >
                    <span className="text-[#C9A800]" aria-hidden="true">
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <CreativeKeepsakesSection />

            <PhotobookAddOnSection intro="Turn your private session into a keepsake your family will treasure." />

            {/* How It Works */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">How It Works</h2>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
                {HOW_IT_WORKS.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-50/60 px-3 py-3"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFD700]/20 text-xs font-bold text-gray-900">
                      {index + 1}
                    </span>
                    <p className="text-xs font-medium leading-snug text-gray-700 sm:text-sm">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
              <Accordion
                type="single"
                collapsible
                className="rounded-2xl border border-gray-100 bg-white px-4 shadow-sm md:px-6"
              >
                {FAQ_ITEMS.map((item, index) => (
                  <AccordionItem key={item.question} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-500">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Booking CTA */}
            <div className="space-y-4 border-t border-gray-100 pt-8">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#FFD700] font-semibold text-black hover:bg-[#FFC400]"
                >
                  <Link href="/#book-now">Book Private Experience</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="font-semibold"
                >
                  <Link href="/#choose-experience">View All Programs</Link>
                </Button>
              </div>
              <p className="text-gray-500 md:text-lg leading-relaxed">
                Have something special in mind? We&apos;re happy to create a
                personalised art experience just for your family or group.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
