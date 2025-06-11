import React from "react";

export function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              About Us
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight max-w-4xl">
              At Lalla kids art,<br />
              art becomes a language<br />
              for kids to think, feel and express!
            </h2>
          </div>
          <div className="space-y-6 max-w-4xl">
            <p className="text-gray-500 md:text-lg lg:text-xl leading-relaxed">
              We're more than just an art class — we're a space where kids are free to explore, express, and enjoy being exactly who they are. Whether they're splashing paint, building with clay, or dreaming up new worlds, our studio is designed to nurture their imagination every step of the way.
            </p>
            <p className="text-gray-500 md:text-lg lg:text-xl leading-relaxed">
              We believe every child is an artist, and every creative moment is a chance to grow — in confidence, in curiosity, and in joy.
            </p>
            <p className="text-gray-500 md:text-lg lg:text-xl leading-relaxed">
              Our programs blend hands-on art with storytelling, music, and culture, creating meaningful experiences that kids remember (and parents love).
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-4xl items-stretch gap-6 py-12 sm:grid-cols-1 md:grid-cols-2">
          <div className="bg-[#FFD700]/40 border border-[#FFD700]/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-[#FFD700] bg-white rounded-lg">
                  01
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Creative Exploration</h3>
                <p className="text-gray-800 leading-relaxed">
                  We nurture bold, open-ended creativity across media—from clay to walls to digital light.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFD700]/40 border border-[#FFD700]/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-[#FFD700] bg-white rounded-lg">
                  02
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Connection</h3>
                <p className="text-gray-800 leading-relaxed">
                  Through art, kids explore Korean heritage and global stories in meaningful, hands-on ways.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFD700]/40 border border-[#FFD700]/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-[#FFD700] bg-white rounded-lg">
                  03
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Whole-Child Growth</h3>
                <p className="text-gray-800 leading-relaxed">
                  Art builds more than skill—it develops focus, empathy, and confident self-expression.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FFD700]/40 border border-[#FFD700]/50 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 text-sm font-bold text-[#FFD700] bg-white rounded-lg">
                  04
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eco Art Practice</h3>
                <p className="text-gray-800 leading-relaxed">
                  We minimise waste and rethink materials—using our own safe, natural clay recipes and eco paints from Natural Earth Paint. From design to curriculum, sustainability shapes everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
