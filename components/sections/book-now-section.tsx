/**
 * @file book-now-section.tsx
 * @description Booking form for art experience reservations.
 */

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { buildBookingMailto } from "@/constants/homepage";

const PROGRAM_OPTIONS = [
  "Art Experience",
  "Weekly Art Program",
  "Private Family Experience",
  "Summer Art Camp",
  "School Workshops",
];

export function BookNowSection() {
  const [form, setForm] = useState({
    parentName: "",
    childAge: "",
    program: "Art Experience",
    preferredDate: "",
    preferredTime: "",
    numberOfChildren: "1",
    email: "",
    whatsapp: "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      "Booking Request",
      "",
      `Parent Name: ${form.parentName}`,
      `Child's Age: ${form.childAge}`,
      `Preferred Program: ${form.program}`,
      `Preferred Date: ${form.preferredDate}`,
      `Preferred Time: ${form.preferredTime}`,
      `Number of Children: ${form.numberOfChildren}`,
      `Email: ${form.email}`,
      `WhatsApp: ${form.whatsapp || "N/A"}`,
      "",
      `Special Requests: ${form.specialRequests || "None"}`,
    ].join("\n");

    window.location.href = buildBookingMailto(form.program, body);
  };

  return (
    <section id="book-now" className="bg-white py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            Book Now
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Book an Art Experience
          </h2>
          <p className="mt-4 text-gray-500 md:text-lg">
            Choose the experience that best fits your visit, and we will help you
            plan a creative session for your child.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="parentName">
                  Parent Name
                </label>
                <input
                  id="parentName"
                  required
                  value={form.parentName}
                  onChange={(e) =>
                    setForm({ ...form, parentName: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="childAge">
                    Child&apos;s Age
                  </label>
                  <input
                    id="childAge"
                    required
                    value={form.childAge}
                    onChange={(e) =>
                      setForm({ ...form, childAge: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="numberOfChildren">
                    Number of Children
                  </label>
                  <input
                    id="numberOfChildren"
                    type="number"
                    min={1}
                    value={form.numberOfChildren}
                    onChange={(e) =>
                      setForm({ ...form, numberOfChildren: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="program">
                  Preferred Program
                </label>
                <select
                  id="program"
                  value={form.program}
                  onChange={(e) =>
                    setForm({ ...form, program: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                >
                  {PROGRAM_OPTIONS.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="preferredDate">
                    Preferred Date
                  </label>
                  <input
                    id="preferredDate"
                    type="date"
                    value={form.preferredDate}
                    onChange={(e) =>
                      setForm({ ...form, preferredDate: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium" htmlFor="preferredTime">
                    Preferred Time
                  </label>
                  <input
                    id="preferredTime"
                    placeholder="e.g. Tuesday 2:00 PM"
                    value={form.preferredTime}
                    onChange={(e) =>
                      setForm({ ...form, preferredTime: e.target.value })
                    }
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="whatsapp">
                  WhatsApp (optional)
                </label>
                <input
                  id="whatsapp"
                  value={form.whatsapp}
                  onChange={(e) =>
                    setForm({ ...form, whatsapp: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="specialRequests">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  rows={3}
                  value={form.specialRequests}
                  onChange={(e) =>
                    setForm({ ...form, specialRequests: e.target.value })
                  }
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="mt-6 h-12 w-full bg-[#FFD700] text-base font-semibold text-black hover:bg-[#FFC400]"
            >
              Send Booking Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
