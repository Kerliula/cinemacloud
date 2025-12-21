import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SCENES_IMG = [
  "/scenes/1.png",
  "/scenes/2.png",
  "/scenes/3.png",
  "/scenes/4.png",
  "/scenes/2.png",
  "/scenes/3.png",
  "/scenes/2.png",
  "/scenes/3.png",
  "/scenes/3.png",
  "/scenes/2.png",
  "/scenes/3.png",
];

const MovieScenes = () => {
  const scenesScrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (scenesScrollRef.current) {
        setShowArrows(
          scenesScrollRef.current.scrollWidth >
            scenesScrollRef.current.clientWidth
        );
      }
    };

    const timeoutId = setTimeout(checkOverflow, 100); // Delay to ensure images are loaded
    const handleResize = () => checkOverflow();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollScenes = (direction: "left" | "right") => {
    if (scenesScrollRef.current) {
      const scrollAmount = 400;
      scenesScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="gap-vertical-md flex flex-col">
      <h3 className="section-intro-text">Scenes</h3>
      <div className="relative">
        {showArrows && (
          <button
            onClick={() => scrollScenes("left")}
            className={cn(
              "absolute top-1/2 left-2 z-10 -translate-y-1/2",
              "rounded-full bg-black/50 p-2 text-white",
              "transition-all hover:bg-black/70"
            )}
            aria-label="Previous scenes"
          >
            <ChevronLeft size={24} />
          </button>
        )}
        <div
          ref={scenesScrollRef}
          className="gap-horizontal-md scrollbar-hide flex overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {SCENES_IMG.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Scene ${index + 1}`}
              width={200}
              height={120}
              className="flex-shrink-0 rounded-md"
            />
          ))}
        </div>
        {showArrows && (
          <button
            onClick={() => scrollScenes("right")}
            className={cn(
              "absolute top-1/2 right-2 z-10 -translate-y-1/2",
              "rounded-full bg-black/50 p-2 text-white",
              "transition-all hover:bg-black/70"
            )}
            aria-label="Next scenes"
          >
            <ChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default MovieScenes;
