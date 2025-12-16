import { cn } from "@/lib/utils";

interface HeroTagsProps {
  year: string;
  genres: string[];
}

const GenreTag = ({ genre }: { genre: string }) => (
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

export const HeroTags = ({ year, genres }: HeroTagsProps) => (
  <div className="flex items-center gap-4">
    <GenreTag genre={year} />
    {genres.map((genre, index) => (
      <GenreTag key={`${genre}-${index}`} genre={genre} />
    ))}
  </div>
);
