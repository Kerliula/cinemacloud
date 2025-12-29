import MovieItem from "./MovieItem";
import { cn } from "@/lib/utils";
import { TrendingMovieListProps } from "@/types/ui";

export default function MoviesList({
  className,
  showTitle = true,
  moviesList,
  title,
  justify,
  layout = "horizontal",
}: TrendingMovieListProps) {
  const isHorizontal = layout === "horizontal";

  const justifyMap: Record<string, string> = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
  };

  const containerClass = cn("gap-vertical-sm flex flex-col", className);

  const horizontalListClass = cn(
    "scrollbar-hide flex overflow-x-auto",
    "gap-3 md:gap-4 lg:gap-6",
    "pb-2 md:pb-3",
    "-mx-4 px-4 md:mx-0 md:px-0",
    justify && justifyMap[justify]
  );

  const gridClass =
    "grid gap-4 grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6";

  const renderHorizontalItem = (movie: any) => (
    <li key={movie.id} className="flex-shrink-0">
      <MovieItem {...movie} />
    </li>
  );

  const renderGridItem = (movie: any) => (
    <MovieItem key={movie.id} {...movie} />
  );

  return (
    <div className={containerClass}>
      {showTitle && <h2 className="section-intro-text">{title}</h2>}

      {isHorizontal ? (
        <ul className={horizontalListClass}>
          {moviesList.map(renderHorizontalItem)}
        </ul>
      ) : (
        <div className={gridClass}>{moviesList.map(renderGridItem)}</div>
      )}
    </div>
  );
}
