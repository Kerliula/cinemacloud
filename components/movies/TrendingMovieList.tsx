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
      <h2 className="section-intro-text">Trending Movies</h2>
      <ul className="scrollbar-hide gap-horizontal-lg flex justify-around overflow-x-auto">
        {moviesList.map((movie) => (
          <li key={movie.id} className="flex-shrink-0">
            <MovieItem {...movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}
