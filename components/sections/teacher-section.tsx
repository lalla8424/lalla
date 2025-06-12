import React from "react";
import Image from "next/image";

export function TeacherSection() {
  return (
    <section
      id="teacher"
      className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32 relative"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Meet Our Creative Team
            </div>
            <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
              Loving what we do – and who we do it for.
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We're passionate art lovers and educators who enjoy making creativity fun and meaningful for kids every day.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-10 w-full md:w-1/2">
                <div className="w-36 h-36 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/IMG_8763.JPG"
                      alt="Ms. Sarah - Art Director"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Sono Kim</p>
                  <p className="text-sm text-gray-500">Director</p>
                  <p className="mt-2 text-sm">
                    With 15 years of experience as an art director and communication designer, Sono studied Fine Art and Communication Design in New Zealand and Australia. She specializes in painting, advertising design, and holds children's art education certifications.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-10 w-full md:w-1/2">
                <div className="w-36 h-36 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFD700]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FFD700]">
                        Teacher
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mr. David</p>
                  <p className="text-sm text-gray-500">Sculpture Specialist</p>
                  <p className="mt-2 text-sm">
                    Specializing in 3D art forms, I help children explore
                    spatial concepts and develop fine motor skills through
                    hands-on sculpture projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-10 w-full md:w-1/2">
                <div className="w-36 h-36 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/alice.jpeg?v=2"
                      alt="Alice hyun-kyung Choi - Art Instructor"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover rounded-full scale-110 object-center"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-medium">Alice hyun-kyung Choi</p>
                  <p className="text-sm text-gray-500">Instructor</p>
                  <p className="mt-2 text-sm">
                    She graduated from the Department of Sculpture at Seoul National University. Curious about cultures and new experiences, she once worked as a flight attendant. Now a florist and artist, she enjoys working with natural materials, loves flowers and finds joy in creating with kids.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-10 w-full md:w-1/2">
                <div className="w-36 h-36 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#FFD700]/20 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="text-sm font-bold text-[#FFD700]">
                        Teacher
                      </div>
                      <div className="text-xs">Photo</div>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="font-medium">Mr. Jun</p>
                  <p className="text-sm text-gray-500">Craft Specialist</p>
                  <p className="mt-2 text-sm">
                    With a background in traditional Korean crafts, I enjoy
                    teaching children how to create beautiful objects using both
                    traditional and modern techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-auto"
        >
          <path
            d="M0,80 C240,0 480,0 720,40 C960,80 1200,80 1440,0 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
