import MovieItem from "./MovieItem";
import { cn } from "@/lib/utils";
import { TrendingMovieListProps } from "@/types/ui";

export default function MoviesList({
  className,
  moviesList,
  title,
  justify,
}: TrendingMovieListProps) {
  return (
    <div className={cn("gap-vertical-sm flex flex-col", className)}>
      <h2 className="section-intro-text">{title}</h2>
      <ul
        className={cn(
          "scrollbar-hide flex overflow-x-auto",
          "gap-3 md:gap-4 lg:gap-6",
          "pb-2 md:pb-3",
          "-mx-4 px-4 md:mx-0 md:px-0",
          justify === "start" && "justify-start",
          justify === "center" && "justify-center",
          justify === "end" && "justify-end",
          justify === "between" && "justify-between",
          justify === "around" && "justify-around"
        )}
      >
        {moviesList.map((movie) => (
          <li key={movie.id} className="flex-shrink-0">
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
