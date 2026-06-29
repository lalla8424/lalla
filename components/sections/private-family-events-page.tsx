/**
 * @file private-family-events-page.tsx
 * @description Private Family & Events — dedicated program landing page.
 */

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Cake, Clock, Coins, Package, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACTIVITIES = [
  "Projection Mural Art",
  "Eco Clay & Eco Paint",
  "Drawing & Painting",
  "Space Installation Art",
  "Korean & World Cultures Through Art",
];

const PERFECT_FOR = [
  "International families visiting Seoul",
  "Birthday parties and celebrations",
  "Friends and small private groups",
  "Siblings and multi-age gatherings",
];

const INCLUDED = [
  "2-hour private studio session",
  "All art materials included",
  "English-friendly facilitation",
  "Tailored activities for your group",
  "A creative experience designed around your occasion",
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
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A800]" aria-hidden="true" />
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
                Every experience is tailored to your group&apos;s age, interests,
                and occasion.
              </p>
            </div>

            {/* Pricing */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Pricing</h2>
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3">
                    <Clock className="h-5 w-5 text-[#C9A800]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Duration
                      </p>
                      <p className="text-sm font-semibold text-gray-900">2 Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3">
                    <Coins className="h-5 w-5 text-[#C9A800]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Starting from
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        220,000 KRW
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50/80 px-4 py-3">
                    <Cake className="h-5 w-5 text-[#C9A800]" aria-hidden="true" />
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                        Occasions
                      </p>
                      <p className="text-sm font-semibold text-gray-900">
                        Birthdays &amp; private groups
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-gray-600 md:text-lg"
                  >
                    <Package className="mt-1 h-5 w-5 shrink-0 text-[#C9A800]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Booking CTA */}
            <div className="flex flex-col gap-3 border-t border-gray-100 pt-8 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-[#FFD700] font-semibold text-black hover:bg-[#FFC400]"
              >
                <Link href="/#book-now">Book Private Experience</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-semibold">
                <Link href="/#choose-experience">View All Programs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
