import { cn } from "@/lib/utils";

interface SliderDotsProps {
  slidesLength: number;
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const SliderDots = ({
  slidesLength,
  currentSlide,
  setCurrentSlide,
}: SliderDotsProps) => (
  <div className="absolute top-1/2 right-0 flex -translate-y-1/2 flex-col gap-2">
    {Array.from({ length: slidesLength }).map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className="transition-base relative h-3 w-3"
        aria-label={`Go to slide ${index + 1}`}
      >
        <div
          className={cn(
            "transition-base h-full w-full rounded-full",
            currentSlide === index
              ? "bg-white shadow-lg shadow-white/50"
              : "bg-gray-500 hover:bg-gray-300"
          )}
        />
        {currentSlide === index && (
          <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-white opacity-75" />
        )}
      </button>
    ))}
  </div>
);
