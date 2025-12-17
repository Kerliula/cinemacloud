import Image from "next/image";
import { Star } from "lucide-react";
import { Movie } from "@/types/movie";
import { cn } from "@/lib/utils";

const RatingBadge = ({ vote_average }: { vote_average: number }) => {
  const STAR_SIZE = 11;

  return (
    <div
      className={cn(
        "gap-horizontal-xs flex items-center",
        "glass-medium rounded-full",
        "px-1.5 py-0.5 md:px-2.5 md:py-1"
      )}
    >
      <Star
        width={STAR_SIZE}
        height={STAR_SIZE}
        className="fill-amber-400 text-amber-400"
      />
      <span className="text-primary text-xs font-semibold md:text-sm">
        {vote_average.toFixed(1)}
      </span>
    </div>
  );
};

export default function MovieItem({
  poster_path,
  title,
  release_date,
  vote_average,
}: Movie) {
  const PLACEHOLDER_POSTER_URL = "/placeholder-poster.png";

  const releaseYear =
    release_date && !isNaN(new Date(release_date).getTime())
      ? new Date(release_date).getFullYear()
      : "Unknown";

  return (
    <div className="gap-vertical-xs flex flex-col">
      <Image
        src={poster_path || PLACEHOLDER_POSTER_URL}
        alt={title}
        width={170}
        height={255}
        className={cn(
          `h-[200px] w-[133px] xl:h-[255px] xl:w-[170px]`,
          "rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        )}
      />
      <h3 className="truncate text-xs font-medium text-white text-shadow-md md:text-sm">
        {title}
      </h3>
      <div className="flex items-center justify-between text-xs text-shadow-md">
        <p className="font-medium text-gray-300">{releaseYear}</p>
        <RatingBadge vote_average={vote_average} />
      </div>
    </div>
  );
}
