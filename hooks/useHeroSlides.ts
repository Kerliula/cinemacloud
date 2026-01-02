import { useState } from "react";
import { Slide } from "@/types/ui";
import { moviesList } from "@/lib/constants";

interface UseHeroSlidesOptions {
  initialSlides: Slide[];
  maxSlides: number;
}

export const useHeroSlides = ({
  initialSlides,
  maxSlides,
}: UseHeroSlidesOptions) => {
  const [slides, setSlides] = useState<Slide[]>(
    initialSlides.slice(0, maxSlides)
  );

  const addSlide = () => {
    if (slides.length >= maxSlides) return;

    setSlides((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        year: new Date().getFullYear().toString(),
        genres: [],
      },
    ]);
  };

  const removeSlide = (index: number) => {
    setSlides((prev) => prev.filter((_, i) => i !== index));
  };

  const updateSlide = (
    index: number,
    field: keyof Slide,
    value: string | string[]
  ) => {
    setSlides((prev) =>
      prev.map((slide, i) =>
        i === index ? { ...slide, [field]: value } : slide
      )
    );
  };

  const selectMovie = (index: number, movieId: string) => {
    const movie = moviesList.find((m) => m.id === Number(movieId));
    if (!movie) return;

    setSlides((prev) =>
      prev.map((slide, i) =>
        i === index
          ? {
              ...slide,
              movieId: movie.id,
              title: movie.title,
              year: movie.release_date || new Date().getFullYear().toString(),
            }
          : slide
      )
    );
  };

  return {
    slides,
    addSlide,
    removeSlide,
    updateSlide,
    selectMovie,
    canAddMore: slides.length < maxSlides,
  };
};
