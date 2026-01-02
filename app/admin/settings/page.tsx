"use client";

import { Input, Select } from "@/components/form";
import Button from "@/components/admin/Button";
import { Plus, Trash2, Save, Upload } from "lucide-react";
import { slides as initialSlides, moviesList } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useHeroSlides } from "@/hooks/useHeroSlides";

const MAX_SLIDES = 3;

const AdminSettingsPage = () => {
  const {
    slides,
    addSlide,
    removeSlide,
    updateSlide,
    selectMovie,
    canAddMore,
  } = useHeroSlides({
    initialSlides,
    maxSlides: MAX_SLIDES,
  });

  const handleSave = () => {
    console.log("Saving slides:", slides);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <h1 className="section-admin-intro-text">Settings - Slides</h1>
        <Button
          variant="primary"
          size="md"
          className="w-fit"
          Icon={Save}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </div>

      <div className="gap-vertical-md flex flex-col">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="rounded-lg border border-white/10 bg-black/40 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">
                Slide {index + 1}
              </h3>
              <button
                onClick={() => removeSlide(index)}
                className={cn(
                  "padding-md rounded text-white/60 transition-colors",
                  "hover:bg-red-600/20 hover:text-red-400"
                )}
                title="Remove Slide"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="gap-vertical-md flex flex-col">
              <Select
                label="Select Movie (Optional)"
                options={[
                  { value: "", label: "-- Select a movie --" },
                  ...moviesList.map((movie) => ({
                    value: movie.id.toString(),
                    label: movie.title,
                  })),
                ]}
                value={slide.movieId?.toString() || ""}
                onChange={(e) => selectMovie(index, e.target.value)}
              />

              <div className="gap-vertical-md flex flex-col">
                <Input
                  label="Background Image URL"
                  placeholder="Enter background image URL"
                  value={slide.background || ""}
                  onChange={(e) =>
                    updateSlide(index, "background", e.target.value)
                  }
                  icon={<Upload size={18} />}
                />

                {slide.background && (
                  <div className="relative h-32 w-full overflow-hidden rounded-lg">
                    <Image
                      src={slide.background}
                      alt="Background preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="secondary"
          size="md"
          className="w-fit"
          Icon={Plus}
          onClick={addSlide}
          disabled={!canAddMore}
        >
          Add New Slide ({slides.length}/{MAX_SLIDES})
        </Button>
      </div>
    </>
  );
};

export default AdminSettingsPage;
