import Image from "next/image";
import { Star, Play } from "lucide-react";
import { Movie } from "@/types/movie";
import { cn } from "@/lib/utils";
import { Clock, Calendar, Film } from "lucide-react";

const InfoBox = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="gap-horizontal-xs flex items-center">
      <div className="text-primary">{icon}</div>
      <span className="text-secondary text-sm">{text}</span>
    </div>
  );
};

const RatingBadge = ({ vote_average }: { vote_average: number }) => {
  const STAR_SIZE = 12;

  return (
    <div
      className={cn(
        "glass-medium w-fit rounded-full",
        "border border-amber-400/30",
        "bg-gradient-to-r from-amber-500/10 to-yellow-500/10",
        "shadow-lg backdrop-blur-md"
      )}
    >
      <div className="flex items-center gap-1 px-2 py-0.5">
        <Star
          width={STAR_SIZE}
          height={STAR_SIZE}
          className="fill-amber-400 text-amber-400 drop-shadow-sm"
        />
        <span className="text-primary text-xs font-bold tracking-wide">
          {vote_average?.toFixed(1)}
        </span>
      </div>
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
      ? new Date(release_date).getFullYear().toString()
      : "Unknown";

  return (
    <div className="flex">
      <div className="hover-scale relative flex flex-shrink-0 cursor-pointer">
        <Image
          src={poster_path || PLACEHOLDER_POSTER_URL}
          alt={title}
          width={170}
          height={255}
          className={cn(
            `h-[200px] w-[153px] xl:h-[255px] xl:w-[170px]`,
            "rounded-lg object-cover shadow-lg transition-transform duration-300 hover:scale-105"
          )}
        />

        <div className="absolute top-2 right-2 z-10">
          <RatingBadge vote_average={vote_average} />
        </div>

        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/90 via-black/20 to-transparent">
          <div className="absolute right-0 bottom-0 left-0 p-3">
            <h3 className="mb-2 truncate text-lg font-medium text-white text-shadow-md">
              {title}
            </h3>
            <div className="flex items-center gap-2">
              <InfoBox icon={<Calendar size={15} />} text={releaseYear} />
              <InfoBox icon={<Clock size={15} />} text={"103 min"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
