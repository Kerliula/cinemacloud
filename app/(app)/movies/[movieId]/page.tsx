"use client";

import { slides } from "@/lib/constants";
import MovieOverview from "@/components/movies/MovieOverview";
import MovieScenes from "@/components/movies/MovieScenes";
import MovieCastList from "@/components/movies/MovieCastList";
import { RECOMMENDED_MOVIES } from "@/lib/constants";
import MoviesList from "@/components/movies/MoviesList";

const MovieViewPage = () => {
  const movie = {
    ...slides[0],
    rating: 8.5,
    duration: "107 min",
    director: "Don Hall, Carlos López Estrada",
    cast: ["Kelly Marie Tran", "Awkwafina", "Gemma Chan"],
    src: "https://example.com/video.mp4",
    poster: "/path/to/poster.jpg",
    scenes: [
      "/scenes/1.png",
      "/scenes/2.png",
      "/scenes/3.png",
      "/scenes/4.png",
      "/scenes/2.png",
      "/scenes/1.png",
      "/scenes/2.png",
      "/scenes/3.png",
      "/scenes/4.png",
      "/scenes/2.png",
    ],
  };

  return (
    <div className="gap-vertical-lg flex flex-col">
      <MovieOverview movie={movie} />
      <MovieCastList casts={movie.cast} />
      <MovieScenes scenes={movie.scenes} />
      <MoviesList
        title="Recommended Movies"
        moviesList={RECOMMENDED_MOVIES}
        justify="start"
      />
    </div>
  );
};

export default MovieViewPage;
