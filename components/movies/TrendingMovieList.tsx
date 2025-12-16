import MovieItem from "./MovieItem";
import { Movie } from "@/types/movie";
import { cn } from "@/lib/utils";

interface TrendingMovieListProps {
  className?: string;
  moviesList: Movie[];
}

export default function TrendingMovieList({
  className,
  moviesList,
}: TrendingMovieListProps) {
  return (
    <div className={cn("gap-vertical-sm flex flex-col", className)}>
      <h2 className="section-intro-text uppercase text-shadow-md">
        Trending Movies
      </h2>
      <ul className="scrollbar-hide gap-horizontal-md flex justify-between">
        {moviesList.map((movie) => (
          <li key={movie.id}>
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
