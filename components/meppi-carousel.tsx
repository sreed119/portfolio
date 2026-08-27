"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const slides = [1, 2, 3, 4].map((number) => ({
  src: `/images/meppiCarousel${number}.jpg`,
  alt: `Mitsubishi Electric Power Products project image ${number}`,
}));

export default function MeppiCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);

  const showSlide = (direction: number) => {
    setActiveSlide((currentSlide) =>
      (currentSlide + direction + slides.length) % slides.length,
    );
  };

  return (
    <div className="meppi-carousel" aria-label="Mitsubishi Electric project images">
      <div className="meppi-carousel-viewport">
        <div
          className="meppi-carousel-track"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div className="meppi-carousel-slide" key={slide.src}>
              <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 700px) 100vw, 80vw" />
            </div>
          ))}
        </div>
      </div>
      <div className="meppi-carousel-controls">
        <button type="button" onClick={() => showSlide(-1)} aria-label="Previous project image">
          <ChevronLeft size={18} />
        </button>
        <div className="meppi-carousel-dots" aria-label="Choose project image">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === activeSlide ? "is-active" : ""}
              key={slide.src}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show project image ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
            />
          ))}
        </div>
        <button type="button" onClick={() => showSlide(1)} aria-label="Next project image">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}