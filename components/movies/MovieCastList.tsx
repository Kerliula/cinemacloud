const MovieCastList = ({ casts }: { casts: string[] }) => {
  return (
    <section className="gap-vertical-md flex flex-col">
      <h3 className="section-intro-text">Cast</h3>

      <div className="gap-horizontal-md flex flex-wrap">
        {casts.map((cast, index) => {
          const isLast = index === casts.length - 1;

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

export default MovieCastList;
