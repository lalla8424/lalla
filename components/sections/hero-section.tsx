import React from "react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-top h-96 sm:h-[450px] md:h-[600px] lg:h-[800px] w-full"
      style={{
        backgroundImage: `url('/bg_lalla_.png?v=${Date.now()}')`,
      }}
    >
      {/* Floating Art Sticker 1 */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 md:top-2/5 md:left-1/3 lg:top-1/2 lg:left-1/4 z-10 rotate-15 hover:rotate-3 transition-transform duration-300">
        <Image
          src="/sticker1.png"
          alt="Art Sticker"
          width={80}
          height={80}
          className="w-14 h-14 md:w-18 md:h-18 lg:w-20 lg:h-20 drop-shadow-lg"
        />
      </div>

      {/* Floating Art Sticker 3 */}
      <div className="absolute top-1/4 right-1/4 transform translate-x-[calc(50%+40px)] md:top-1/3 md:right-1/5 lg:top-1/4 lg:right-1/3 z-10 rotate-[-8deg] hover:rotate-[-15deg] transition-transform duration-300">
        <Image
          src="/sticker3.png"
          alt="Art Sticker 3"
          width={60}
          height={60}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 drop-shadow-lg"
        />
      </div>

      {/* Floating Art Sticker 4 - Top Left (Rainbow) - 두 배 크기 */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 lg:top-12 lg:left-12 z-10 rotate-[-12deg] hover:rotate-[-5deg] transition-transform duration-300">
        <Image
          src="/sticker4.png"
          alt="Art Sticker 4"
          width={140}
          height={140}
          className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 drop-shadow-lg"
        />
      </div>

      {/* Floating Art Sticker 2 - Center Bottom */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 md:bottom-24 lg:bottom-32 z-10 rotate-[10deg] hover:rotate-[18deg] transition-transform duration-300">
        <Image
          src="/sticker2.png"
          alt="Art Sticker 2"
          width={65}
          height={65}
          className="w-12 h-12 md:w-16 md:h-16 lg:w-18 lg:h-18 drop-shadow-lg"
        />
      </div>
    </section>
  );
}
