import React from "react";

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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Art Specialists
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our team of experienced educators is passionate about nurturing
              creativity in children.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
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
                  <p className="font-medium">Ms. Sarah</p>
                  <p className="text-sm text-gray-500">Art Director</p>
                  <p className="mt-2 text-sm">
                    With over 10 years of experience in early childhood art
                    education, I'm passionate about helping children discover
                    their creative potential.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
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
              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
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
                  <p className="font-medium">Ms. Mina</p>
                  <p className="text-sm text-gray-500">Painting Instructor</p>
                  <p className="mt-2 text-sm">
                    I love introducing children to the world of colors and
                    textures. My classes focus on creative expression through
                    various painting techniques.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full md:w-1/2">
                <div className="w-28 h-28 rounded-full bg-white p-2 shadow-lg flex-shrink-0">
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
