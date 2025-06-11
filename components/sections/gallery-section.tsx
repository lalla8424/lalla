"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/gallery1.jpg",
    alt: "Kids creating colorful paintings",
    title: "Creative Expression"
  },
  {
    id: 2,
    src: "/gallery/gallery2.jpg", 
    alt: "Clay sculpting workshop",
    title: "Hands-on Learning"
  },
  {
    id: 3,
    src: "/gallery/gallery3.jpg",
    alt: "Group art project",
    title: "Collaborative Art"
  },
  {
    id: 4,
    src: "/gallery/gallery4.jpg",
    alt: "Digital art creation",
    title: "Digital Creativity"
  },
  {
    id: 5,
    src: "/gallery/gallery5.jpg",
    alt: "Art exhibition",
    title: "Showcasing Talent"
  }
];

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // 4초마다 자동 슬라이드

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // 5초 후 자동 재생 재개
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  return (
    <section className="bg-white py-8 md:py-12 lg:pb-20">
      <div className="container px-4 md:px-6">
        {/* Main Slideshow */}
        <div className="relative max-w-7xl mx-auto mb-8">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Title Overlay */}
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
              <p className="text-sm font-medium">{galleryImages[currentIndex].title}</p>
            </div>

            {/* Progress Dots */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-white' 
                      : 'bg-white bg-opacity-50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-end space-x-2 md:space-x-4 max-w-7xl mx-auto mb-8 md:mb-12">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => goToSlide(index)}
              className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden transition-all duration-200 ${
                index === currentIndex 
                  ? 'ring-4 ring-[#FFD700] scale-110' 
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
} 