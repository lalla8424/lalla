/**
 * @file faq-section.tsx
 * @description FAQ accordion for booking confidence.
 */

"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS } from "@/constants/homepage";

export function FaqSection() {
  return (
    <section id="faq" className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
            FAQ
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
            Questions Before You Book
          </h2>
        </div>

        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-gray-100 bg-white px-6 shadow-sm"
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
    </section>
  );
}
