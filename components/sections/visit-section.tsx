import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";

export function VisitSection() {
  return (
    <>
      {/* Text Content Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Main Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2" style={{ fontFamily: 'Oleo Script, cursive' }}>
            Lalla art lab for kids
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-lg md:text-xl lg:text-2xl text-black mb-6" style={{ fontFamily: 'Raleway, sans-serif', fontWeight: '400' }}>
            – Where Every Child is a Creator
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 italic font-light leading-relaxed">
            Discover our creative art lab designed to inspire, nurture, and engage young artists from all backgrounds.
          </p>
        </div>
      </section>

      <section
        id="visit"
        className="bg-[#FFD700]/5 py-12 md:py-24 lg:py-32 relative"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
                Visit Us
              </div>
              <h2 className="text-3xl font-bold tracking-normal sm:text-5xl">
                Our Location
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Come visit our art studio in the heart of Seoul. We'd love to show
                you around!
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Studio Address</h3>
                  <p className="text-gray-500 mt-1">
                    123 Itaewon-ro, Yongsan-gu
                    <br />
                    Seoul, South Korea
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-500">
                    <div>Monday - Friday</div>
                    <div>9:00 AM - 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM - 4:00 PM</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Navigation className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Getting Here</h3>
                  <ul className="space-y-2 text-gray-500">
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Subway:</span>
                      <span>
                        Itaewon Station (Line 6), Exit 3. 5-minute walk.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Bus:</span>
                      <span>
                        Routes 110, 421, 740 stop directly in front of the
                        building.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Parking:</span>
                      <span>
                        Limited parking available on-site. Please call ahead to
                        reserve a spot.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-100">
              {/* This would be replaced with an actual map */}
              <div className="w-full h-full flex items-center justify-center bg-gray-200">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-[#FFD700] mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">
                    Google Maps integration would be here
                  </p>
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
    </>
  );
}
