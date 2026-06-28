/**
 * @file program-details.tsx
 * @description Art Experience and Weekly Art Program detail content for standalone pages.
 */

import React from "react";
import Link from "next/link";
import {
  BookOpen,
  Clock,
  Coins,
  Hammer,
  LayoutGrid,
  Layers,
  Leaf,
  Monitor,
  Package,
  Pencil,
  Sparkles,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ART_EXPERIENCE_OPTIONS,
  ART_EXPERIENCE_SCHEDULE,
  PHOTOBOOK_PRICE,
  WEEKLY_PROGRAM_SCHEDULE,
} from "@/constants/homepage";

const WEEKLY_EXPERIENCES = [
  { label: "Projection Mural Art", icon: Monitor },
  { label: "Drawing Adventures", icon: Pencil },
  { label: "Hands-on Making", icon: Hammer },
  { label: "Mixed Media", icon: Layers },
  { label: "Eco-friendly Materials", icon: Leaf },
  { label: "Canvas Collage Art", icon: LayoutGrid },
];

interface QuickInfoItem {
  icon: React.ElementType;
  label: string;
  value: string;
}

function QuickInfoCards({
  items,
  columns = 4,
}: {
  items: QuickInfoItem[];
  columns?: 3 | 4;
}) {
  return (
    <div
      className={`grid grid-cols-2 gap-3 ${
        columns === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"
      }`}
    >
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-gray-100 bg-gray-50/80 px-3 py-3"
        >
          <item.icon className="mb-2 h-4 w-4 text-[#C9A800]" aria-hidden="true" />
          <p className="text-[11px] font-medium uppercase tracking-wide text-gray-400">
            {item.label}
          </p>
          <p className="mt-0.5 text-sm font-semibold text-gray-900">{item.value}</p>
        </div>
      ))}
    </div>
  );
}

function ScheduleChips({
  schedule,
}: {
  schedule: Record<string, string[]>;
}) {
  return (
    <div className="space-y-4">
      {Object.entries(schedule).map(([day, times]) => (
        <div key={day}>
          <p className="mb-2 text-sm font-semibold text-[#C9A800]">{day}</p>
          <div className="flex flex-wrap gap-2">
            {times.map((time) => (
              <span
                key={`${day}-${time}`}
                className="rounded-full border border-[#FFD700]/50 bg-[#FFD700]/15 px-3 py-1.5 text-sm font-medium text-gray-900"
              >
                {time}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgramCard({ children }: { children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
      {children}
    </article>
  );
}

export function ArtExperienceDetail() {
  return (
    <ProgramCard>
      <div className="space-y-6">
        <QuickInfoCards
          items={[
            { icon: Clock, label: "Duration", value: "90 mins" },
            { icon: Coins, label: "Price", value: "55,000 KRW" },
            { icon: Users, label: "Best For", value: "Visitors in Seoul" },
            { icon: Package, label: "Materials", value: "Included" },
          ]}
        />
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900">Experience Options</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {ART_EXPERIENCE_OPTIONS.map((option) => (
              <div
                key={option}
                className="rounded-xl border border-[#FFD700]/30 bg-[#FFD700]/5 px-4 py-3 text-sm font-medium text-gray-800"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          <p className="inline-block rounded-full bg-[#FFD700] px-2.5 py-0.5 text-sm font-semibold text-black">
            Schedule
          </p>
          <ScheduleChips schedule={ART_EXPERIENCE_SCHEDULE} />
        </div>
        <Button
          asChild
          className="h-11 w-full bg-[#FFD700] font-semibold text-black hover:bg-[#FFC400] sm:w-auto sm:px-8"
        >
          <Link href="/#book-now">Book This Experience</Link>
        </Button>
      </div>
    </ProgramCard>
  );
}

export function WeeklyProgramDetail() {
  return (
    <ProgramCard>
      <div className="space-y-6">
        <QuickInfoCards
          columns={3}
          items={[
            { icon: Clock, label: "Duration", value: "70 mins" },
            { icon: Sparkles, label: "Program", value: "4 weeks" },
            { icon: BookOpen, label: "Frequency", value: "1 class / week" },
          ]}
        />
        <div className="space-y-3">
          <p className="text-sm font-semibold text-gray-900">
            What Your Child Will Experience
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {WEEKLY_EXPERIENCES.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-2 rounded-xl border border-gray-100 bg-gray-50/80 p-3"
              >
                <Icon className="h-4 w-4 text-[#C9A800]" aria-hidden="true" />
                <span className="text-xs font-medium leading-snug text-gray-800">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-gray-100 bg-gray-50/60 p-4">
          <div className="space-y-1 text-sm text-gray-600">
            <p>
              Program Fee{" "}
              <span className="font-semibold text-gray-900">190,000 KRW</span>
            </p>
            <p className="text-xs text-gray-500">
              4 weeks · 4 sessions · materials included
            </p>
          </div>
          <div className="mt-3 space-y-1 border-t border-gray-200 pt-3 text-sm text-gray-600">
            <p className="text-xs font-medium text-gray-500">Optional add-on</p>
            <p>
              Art Photobook{" "}
              <span className="font-semibold text-gray-900">
                {PHOTOBOOK_PRICE}
              </span>
            </p>
            <p className="text-xs text-gray-500">
              Curated photos from your child&apos;s sessions
            </p>
          </div>
        </div>
        <div className="space-y-3">
          <p className="inline-block rounded-full bg-[#FFD700] px-2.5 py-0.5 text-sm font-semibold text-black">
            Schedule
          </p>
          <ScheduleChips schedule={WEEKLY_PROGRAM_SCHEDULE} />
        </div>
        <Button
          asChild
          className="h-11 w-full bg-[#FFD700] font-semibold text-black hover:bg-[#FFC400] sm:w-auto sm:px-8"
        >
          <Link href="/#book-now">Book This Program</Link>
        </Button>
      </div>
    </ProgramCard>
  );
}
