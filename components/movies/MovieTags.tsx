import { cn } from "@/lib/utils";

interface HeroTagsProps {
  year: string;
  genres: string[];
}

const Tag = ({ genre }: { genre: string }) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full px-3.5 py-1.5 text-xs font-semibold",
      "glass-dark",
      "text-primary",
      "hover-scale"
    )}
  >
    {genre}
  </span>
);

export const MovieTags = ({ year, genres }: HeroTagsProps) => (
  <div className="gap-horizontal-md flex items-center">
    <Tag genre={year} />
    {genres.map((genre, index) => (
      <Tag key={`${genre}-${index}`} genre={genre} />
    ))}
  </div>
);
