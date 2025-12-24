import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useHorizontalScroll } from "@/hooks/useHorizontalScroll";
import { MovieScenesProps } from "@/types/ui";
import { useState } from "react";
import ImageViewer from "@/components/ImageViewer";

const ArrowButton = ({
  direction,
  onClick,
  show,
}: {
  direction: "left" | "right";
  onClick: () => void;
  show: boolean;
}) => {
  if (!show) return null;

  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2",
        direction === "left" ? "left-2" : "right-2",
        "rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/70",
        "opacity-0 group-hover:opacity-100 focus:opacity-100 focus:ring-2 focus:ring-white focus:outline-none"
      )}
      aria-label={`Scroll to ${direction} scenes`}
    >
      {direction === "left" ? (
        <ChevronLeft size={24} />
      ) : (
        <ChevronRight size={24} />
      )}
    </button>
  );
};

const MovieScenes = ({
  scenes,
  scrollAmount = 400,
  imageWidth = 200,
  imageHeight = 100,
}: MovieScenesProps) => {
  const { scrollRef, showArrows, canScrollLeft, canScrollRight, scroll } =
    useHorizontalScroll();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (scenes.length === 0) {
    return null;
  }

  return (
    <>
      {selectedImage && (
        <ImageViewer
          src={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <section className="gap-vertical-md flex flex-col">
        <h3 className="section-intro-text">Scenes</h3>
        <div className="group relative">
          <ArrowButton
            direction="left"
            onClick={() => scroll("left", scrollAmount)}
            show={showArrows && canScrollLeft}
          />
          {/* Scenes */}
          <div
            ref={scrollRef}
            className="gap-horizontal-md scrollbar-hide flex snap-x snap-mandatory overflow-x-auto"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {scenes.map((src, index) => (
              <div key={index} className="relative snap-start">
                <Image
                  src={src}
                  alt={`Scene ${index + 1}`}
                  width={imageWidth}
                  height={imageHeight}
                  className={`h-[${imageHeight}px] cursor-pointer rounded-md object-cover`}
                  loading={index < 3 ? "eager" : "lazy"}
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
          </div>
          <ArrowButton
            direction="right"
            onClick={() => scroll("right", scrollAmount)}
            show={showArrows && canScrollRight}
          />
        </div>
      </section>
    </>
  );
};

export default MovieScenes;
