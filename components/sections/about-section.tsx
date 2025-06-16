"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const featureSlides = [
  {
    id: 1,
    number: "01",
    title: "LYTART: Light-Inspired Interactive Art",
    description: "Lytart is Lalla's original, trademark-registered program that fuses media art with children's art education. Using beam projection, children explore stencil, collage, drawing, and sensory art in a large-scale, interactive environment. It's a hands-on journey where light becomes the canvas, and creativity knows no bounds.",
    type: "video",
    videoId: "MKCg3RNmOVQ",
    alt: "LYTART program demonstration video"
  },
  {
    id: 2,
    number: "02",
    title: "Cultural Connection",
    description: "Through shared art experiences, kids from diverse backgrounds connect beyond language, engaging hands-on with Korean heritage and global cultures. They build empathy, curiosity, and respect, learning to celebrate cultural differences in meaningful, creative ways.",
    type: "image",
    image: "/cultural.jpg",
    alt: "Children exploring Korean cultural art"
  },
  {
    id: 3,
    number: "03",
    title: "Eco Art Practice",
    description: "We minimise waste and rethink materials—using our own safe, natural clay recipes and eco paints from Natural Earth Paint. From design to curriculum, sustainability shapes everything we do.",
    type: "video",
    videoId: "tS9Wmmx4jfE",
    alt: "Eco Art Practice demonstration video"
  },
  {
    id: 4,
    number: "04",
    title: "Eco Art Practice",
    description: "We minimise waste and rethink materials—using our own safe, natural clay recipes and eco paints from Natural Earth Paint. From design to curriculum, sustainability shapes everything we do.",
    type: "video",
    videoId: "Bskd29NV-qk",
    alt: "Eco Art Practice additional video"
  }
];

export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    // 현재 슬라이드가 영상이면 20초, 이미지면 5초
    const currentSlideType = featureSlides[currentIndex].type;
    const slideInterval = currentSlideType === "video" ? 20000 : 5000;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === featureSlides.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]); // currentIndex를 dependency에 추가

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // 10초 후 자동 재생 재개
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? featureSlides.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === featureSlides.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentSlide = featureSlides[currentIndex];

  return (
    <section id="about" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-[#FFD700] px-3 py-1 text-sm font-medium text-white">
              About Us
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-normal sm:text-5xl leading-tight max-w-4xl">
                At Lalla kids art,
              </h2>
              <h2 className="text-2xl font-bold tracking-normal sm:text-4xl leading-tight max-w-4xl">
                art becomes a language<br />
                for kids to think, feel and express!
              </h2>
            </div>
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

        {/* Split-Screen Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col md:flex-row min-h-[500px]">
              {/* Media Section - Left Side */}
              <div className="relative md:w-1/2 h-64 md:h-auto">
                {currentSlide.type === "video" ? (
                  // YouTube Video Embed
                  <div className="relative w-full h-full">
                    <iframe
                      key={currentSlide.videoId}
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${currentSlide.videoId}?autoplay=1&mute=1&loop=1&playlist=${currentSlide.videoId}&controls=1&showinfo=0&rel=0`}
                      title={currentSlide.alt}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  // Regular Image
                  <Image
                    src={currentSlide.image}
                    alt={currentSlide.alt}
                    fill
                    className="object-cover transition-opacity duration-700"
                    priority
                  />
                )}
                
                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 z-10"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-3 rounded-full transition-all duration-200 z-10"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Content Section - Right Side */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-[#FFD700]/10">
                <div className="space-y-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFD700] text-white rounded-xl text-lg font-bold">
                    {currentSlide.number}
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                    {currentSlide.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {currentSlide.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
              {featureSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-[#FFD700] scale-125' 
                      : 'bg-white bg-opacity-50 hover:bg-opacity-80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            {featureSlides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#FFD700] scale-110' 
                    : 'opacity-70 hover:opacity-100 hover:scale-105'
                }`}
              >
                {slide.type === "video" ? (
                  // Video thumbnail
                  <Image
                    src={
                      slide.videoId === "Bskd29NV-qk"
                        ? "/4.JPG"
                        : `https://img.youtube.com/vi/${slide.videoId}/maxresdefault.jpg`
                    }
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                ) : (
                  // Image thumbnail
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{slide.number}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
