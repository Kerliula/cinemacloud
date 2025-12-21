"use client";

import { useState } from "react";
import { slides } from "@/lib/constants";
import { HeroTitle } from "./HeroTitle";
import { SliderDots } from "./SliderDots";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui";
import { MovieTags } from "@/components/movies/MovieTags";

const HeroButtons = () => {
  return (
    <div className="gap-horizontal-lg gap-vertical-lg flex flex-col xl:flex-row">
      <Button size="md" variant="primary">
        Play
      </Button>
      <Button size="md" variant="secondary">
        Add to List
      </Button>
    </div>
  );
};

export const Hero = ({ className }: { className?: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = slides?.[currentSlide] ?? null;

  if (!slide) {
    console.warn("Hero: No slide data available for index", currentSlide);
    return null;
  }

  return (
    <div className={cn("gap-vertical-md relative flex flex-col", className)}>
      <HeroTitle title={slide.title} description={slide.description} />
      <MovieTags year={slide.year} genres={slide.genres} />
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
