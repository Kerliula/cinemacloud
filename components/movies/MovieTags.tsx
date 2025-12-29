import { cn } from "@/lib/utils";

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

export const MovieTags = ({ tags }: { tags?: string[] }) => (
  <div className="gap-horizontal-md flex items-center">
    {tags?.map((genre, index) => (
      <Tag key={`${genre}-${index}`} genre={genre} />
    ))}
  </div>
);
