"use client";

import { useState } from "react";
import { slides } from "@/lib/constants";
import { HeroTitle } from "./HeroTitle";
import { HeroTags } from "./HeroTags";
import { HeroButtons } from "./HeroButtons";
import { SliderDots } from "./SliderDots";
import { cn } from "@/lib/utils";

export const Hero = ({ className }: { className?: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides?.[currentSlide] ?? null;

  if (!slide) {
    console.warn("Hero: No slide data available for index", currentSlide);
    return null;
  }

  return (
    <div className={cn("relative flex flex-col gap-8", className)}>
      <HeroTitle title={slide.title} description={slide.description} />
      <HeroTags year={slide.year} genres={slide.genres} />
      <HeroButtons />
      <SliderDots
        slidesLength={slides.length}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
};

export default Hero;
