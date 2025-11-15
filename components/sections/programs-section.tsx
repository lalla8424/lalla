import React from "react";
import { ImageSlider } from "../ui/image-slider";

// Slide data
const slides: { image: string }[] = [
  { image: "/art.jpg" },
  { image: "/art3.jpg" },
  { image: "/art4.JPG" },
  { image: "/art5.jpg" },
  { image: "/art6.JPG" },
  { image: "/art7.JPG" },
  { image: "/art9.jpg" },
  { image: "/art10.JPG" },
  { image: "/art11.JPG" },
  { image: "/art12.JPG" },
  { image: "/art13.jpg" },
  { image: "/art15.JPG" },
  { image: "/art16.JPG" },
  { image: "/art17.JPG" },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              Join our program!
            </div>
            <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
              Our Art Classes
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From playful painting to cultural storytelling, our classes are
              designed to grow with your child – building skills, confidence,
              and creativity in a warm, encouraging space.
            </p>
          </div>
        </div>

        {/* Image Slider */}
        <ImageSlider slides={slides} />

        {/* Program Summaries under the slider */}
        <div className="mx-auto max-w-6xl mt-10 rounded-2xl bg-white border border-gray-100 shadow-sm p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 leading-7">
            {/* Weekly Art Program */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold">Weekly Art Program</h3>
              <p className="font-semibold">Creative Kids Art Adventure</p>
              <p className="text-gray-500">(Kindy ~ Lower Primary)</p>
              <p>
                A fun, hands-on art program designed to spark your child's imagination and
                creativity! Kids explore art through picture books, storytelling, basic drawing,
                sculpture, installation art, beam projection murals, and eco-friendly materials.
              </p>
              <p className="font-semibold">[ What We Do ]</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Digital Story Walls – Create magical murals with light projection technology</li>
                <li>Drawing Adventures – Learn to draw through fun games, activities and creative challenges</li>
                <li>Hands-on Making – Build sculptures, create installations, and bring artwork to life</li>
                <li>Mixed Media Fun – Combine painting, collage, and drawing to create amazing layered artworks</li>
                <li>♻️ Earth-friendly materials & story-based creative play</li>
              </ul>
              <p className="font-semibold">[ Program Cost ]</p>
              <ul className="list-disc pl-5">
                <li>4-week program (1 class per week / total of 4 sessions): 190,000 KRW for 70mins (includes all materials)</li>
                <li>Optional Art Photobook: 40,000 KRW (includes photos from 10 sessions, professionally designed)</li>
              </ul>
              <p className="font-semibold mt-3">Schedule (Multiple selection available)</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tuesday 2:00–3:10 PM</li>
                <li>Tuesday 5:00–6:10 PM</li>
                <li>Wednesday 2:00–3:10 PM</li>
                <li>Wednesday 4:00-5:10 PM</li>
                <li>Thursday 2:00–3:10 PM</li>
                <li>Thursday 5:00–6:10 PM</li>
                <li>Saturday 5:30–6:30 PM</li>
              </ul>
            </div>

            {/* Trial Art Class */}
            <div className="space-y-3">
              <h3 className="text-xl md:text-2xl font-bold">Trial Art Class</h3>
              <p>
                Curious about our art classes? Give it a go with a fun one-off session! Kids can
                explore eco painting, clay, beam projection mural painting or eco-crafts with
                recycled materials. Perfect for first-timers keen to try our studio. All materials included.
              </p>
              <p className="font-semibold">[ Program Cost ]</p>
              <p>50,000 KRW for 90 mins</p>
              <p className="font-semibold">Choose Activity</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Beam Projection Mural Painting + Eco Painting</li>
                <li>Beam Projection Mural Painting + Eco Clay</li>
              </ul>
              <p className="font-semibold">Schedule (Multiple selection available)</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Tuesday 11:00–12:30</li>
                <li>Tuesday 12:00–1:30</li>
                <li>Wednesday 11:00–12:30</li>
                <li>Wednesday 12:00–1:30</li>
                <li>Thursday 11:00–12:30</li>
                <li>Thursday 12:00–1:30</li>
                <li>Friday 11:00–12:30</li>
                <li>Friday 12:00–1:30</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Email reservation CTA */}
        <div className="flex justify-center mt-6">
          <a
            href={
              "mailto:lallartlab@gmail.com?subject=" +
              encodeURIComponent("Booking Inquiry - Lalla Art Lab") +
              "&body=" +
              encodeURIComponent(
                [
                  "Please include the following details in your email:",
                  "",
                  "Parent/Guardian Name:",
                  "Child's Name:",
                  "Child's Age:",
                  "Phone Number:",
                  "Program Type: (8-week program or 4-week program / One off trial session)",
                  "",
                  "Preferred Schedule time(s):",
                  "",
                  "If you have any other questions, feel free to ask.",
                  "Mobile 010.2397.8424",
                ].join("\n")
              )
            }
            className="inline-flex items-center rounded-md bg-[#FFD700] px-6 py-3 text-sm md:text-base font-semibold text-black shadow hover:bg-[#FFC400] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FFD700]"
          >
            Book Now via Email
          </a>
        </div>

        {/* Removed booking forms as requested */}
      </div>
    </section>
  );
}
