import React from "react";
import { MapPin, Clock, Navigation } from "lucide-react";
import { ImageSlider } from "../ui/image-slider";

export function VisitSection() {
  return (
    <>
      {/* Text Content Section */}
      <section className="bg-white py-0 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          {/* Main Title */}
          {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-2" style={{ fontFamily: 'Oleo Script, cursive' }}>
            Lalla art lab for kids
          </h1> */}
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
                Come visit our art studio in the heart of Seoul. We'd love to
                show you around!
              </p>
            </div>
          </div>
          <div className="max-w-5xl mx-auto mb-16">
            <ImageSlider
              slides={[
                { image: "/l_a.JPG", caption: "Studio View 1" },
                { image: "/l_i.jpg", caption: "Studio View 2" },
                { image: "/l_c.jpeg", caption: "Studio View 3" },
                { image: "/l_d.jpeg", caption: "Studio View 4" },
                { image: "/l_e.jpeg", caption: "Studio View 5" },
                { image: "/l_f.png", caption: "Studio View 6" },
                { image: "/l_g.jpg", caption: "Studio View 7" },
                { image: "/l_h.JPG", caption: "Studio View 8" },
                { image: "/l_i.JPG", caption: "Studio View 9" },
              ]}
              autoAdvanceInterval={3000}
            />
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold">Studio Address</h3>
                  <p className="text-gray-500 mt-1">
                    2F, 7 Dongho-ro 10-gil, Jung-gu
                    <br />
                    Seoul, South Korea
                    <br />
                    (Korean: 서울 중구 동호로10길 7 2층)
                    <br />
                    100m from Exit 4 of Yaksu Station (Line 3 / Line 6)
                  </p>
                  <div className="mt-2 mb-1">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#FF9800" }}
                    >
                      For any inquiry, feel free to contact us!
                    </span>
                  </div>
                  <div className="flex gap-3 mt-1">
                    <a
                      href="https://wa.me/821012345678"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[#FFD700] text-white text-xs font-medium shadow hover:bg-[#FFD700]/90 transition-colors min-w-[80px] justify-center"
                      aria-label="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 13.487c-.263-.131-1.558-.77-1.799-.858-.241-.088-.417-.131-.593.132-.175.263-.676.858-.828 1.033-.151.175-.304.197-.567.066-.263-.132-1.111-.409-2.117-1.304-.782-.696-1.31-1.556-1.464-1.819-.151-.263-.016-.405.115-.536.118-.117.263-.304.395-.456.132-.151.175-.263.263-.438.088-.175.044-.329-.022-.462-.066-.132-.593-1.433-.813-1.963-.214-.514-.432-.444-.593-.452l-.504-.009c-.175 0-.462.066-.705.329-.241.263-.926.905-.926 2.205 0 1.3.948 2.557 1.08 2.732.132.175 1.868 2.857 4.533 3.89.634.218 1.127.348 1.513.446.636.162 1.215.139 1.673.084.511-.06 1.558-.637 1.779-1.253.22-.616.22-1.144.154-1.253-.066-.109-.241-.175-.504-.307z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.752 16.654A9.718 9.718 0 0023 12.012C23 6.486 18.523 2 12.998 2 7.477 2 3 6.486 3 12.012c0 1.77.464 3.428 1.274 4.866L2.25 22l5.252-2.007a9.956 9.956 0 004.496 1.019h.004c5.523 0 9.998-4.486 9.998-10.012 0-.34-.018-.678-.048-1.012z"
                        />
                      </svg>
                      WhatsApp
                    </a>
                    <a
                      href="https://www.instagram.com/lalla_kids_art/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[#FFD700] text-white text-xs font-medium shadow hover:bg-[#FFD700]/90 transition-colors min-w-[80px] justify-center"
                      aria-label="Instagram"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <rect
                          width="18"
                          height="18"
                          x="3"
                          y="3"
                          rx="4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <circle cx="17" cy="7" r="1" fill="currentColor" />
                      </svg>
                      Instagram
                    </a>
                    <a
                      href="mailto:lallartlab@gmail.com"
                      className="flex items-center gap-1 px-2 py-1 rounded bg-[#FFD700] text-white text-xs font-medium shadow hover:bg-[#FFD700]/90 transition-colors min-w-[80px] justify-center"
                      aria-label="Email"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M3 7l9 6 9-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      Email
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-[#FFD700] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
                  <div className="grid grid-cols-2 gap-2 text-gray-500">
                    <div>Tuesday – Friday</div>
                    <div>10:00 AM – 6:00 PM</div>
                    <div>Saturday</div>
                    <div>10:00 AM – 7:00 PM</div>
                    <div>Monday, Sunday, Public holiday</div>
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
                        Yaksu Station (Line 3 – Orange, Line 6 – Brown), Exit 4.
                        2-minute walk.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-medium">Parking:</span>
                      <span>
                        No on-site parking. We recommend using public transport.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-gray-100">
              <iframe
                title="Lalla Art Lab Location"
                src="https://www.google.com/maps?q=2F,+7+Dongho-ro+10-gil,+Jung-gu,+Seoul,+South+Korea&output=embed"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
