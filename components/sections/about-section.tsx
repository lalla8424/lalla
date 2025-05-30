import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              About Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Philosophy
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              At Lalla Kids Art, we believe in nurturing creativity and
              self-expression in children through art. Our programs are designed
              to provide a safe and inspiring environment where kids can explore
              their artistic potential while developing essential life skills.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
          <div className="rounded-full bg-[#FFD700]/10 p-8 text-center flex flex-col items-center justify-center aspect-square">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]">
              <span className="text-2xl font-bold text-white">1</span>
            </div>
            <h3 className="text-xl font-bold">Creative Freedom</h3>
            <p className="text-sm text-gray-500 mt-2">
              We encourage children to express themselves freely without
              constraints.
            </p>
          </div>
          <div className="rounded-full bg-[#FFD700]/10 p-8 text-center flex flex-col items-center justify-center aspect-square">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]">
              <span className="text-2xl font-bold text-white">2</span>
            </div>
            <h3 className="text-xl font-bold">Global Perspective</h3>
            <p className="text-sm text-gray-500 mt-2">
              Our multicultural environment helps children develop a global
              mindset.
            </p>
          </div>
          <div className="rounded-full bg-[#FFD700]/10 p-8 text-center flex flex-col items-center justify-center aspect-square">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFD700]">
              <span className="text-2xl font-bold text-white">3</span>
            </div>
            <h3 className="text-xl font-bold">Skill Development</h3>
            <p className="text-sm text-gray-500 mt-2">
              Beyond art, we focus on building confidence, patience, and
              problem-solving skills.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
