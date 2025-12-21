"use client";

import { CASTS } from "@/lib/constants";
import MoviePlayerAndInfo from "@/components/movies/MoviePlayerAndInfo";
import MovieScenes from "@/components/movies/MovieScenes";

const CastsInfo = () => {
  return (
    <section className="gap-vertical-md flex flex-col">
      <h3 className="section-intro-text">Cast</h3>

      <div className="gap-horizontal-md flex">
        {CASTS.map((cast, index) => {
          const isLast = index === CASTS.length - 1;

          return (
            <p key={cast} className="active-text">
              {cast}
              {!isLast && <span className="text-secondary">,</span>}
            </p>
          );
        })}
      </div>
    </section>
  );
};

const MovieViewPage = () => {
  return (
    <>
      <div className="gap-vertical-lg flex flex-col">
        <MoviePlayerAndInfo />
        <CastsInfo />
        <MovieScenes />
      </div>
    </>
  );
};

export default MovieViewPage;
