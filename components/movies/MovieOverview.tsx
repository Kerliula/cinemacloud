import Title from "@/components/ui/Title";
import { Clock, Calendar, Film, TriangleAlert, Bookmark } from "lucide-react";
import { MovieTags } from "./MovieTags";
import { MoviePlayerAndInfoProps } from "@/types/ui";
import { Button } from "../ui";
import MoviePlayer from "./MoviePlayer";
import React from "react";

const INFO_ICON_SIZE = 20;

const Divider = () => (
  <div className="hidden h-6 w-px bg-neutral-700 md:block"></div>
);

const InfoBox = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="gap-horizontal-sm flex items-center">
      <div className="text-primary">{icon}</div>
      <span className="text-secondary">{text}</span>
    </div>
  );
};

const MovieDetails = ({
  movie,
}: {
  movie: MoviePlayerAndInfoProps["movie"];
}) => {
  const infoItems = [
    { icon: Clock, text: movie.duration },
    { icon: Calendar, text: movie.year },
    { icon: Film, text: movie.director },
  ];

  return (
    <div className="gap-vertical-lg flex flex-1 flex-col justify-between">
      <div className="gap-vertical-md flex flex-col">
        <Title>{movie.title}</Title>
        <MovieTags year={movie.year} genres={movie.genres} />
        <div className="gap-horizontal-sm gap-vertical-md md:gap-horizontal-md flex flex-col md:flex-row md:items-center">
          {infoItems.map(({ icon: Icon, text }, i) => (
            <React.Fragment key={i}>
              <InfoBox icon={<Icon size={INFO_ICON_SIZE} />} text={text} />
              {i < infoItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="gap-vertical-md flex flex-col">
        <h3 className="section-intro-text">Description</h3>
        <p className="text-secondary line-clamp-4 leading-relaxed md:line-clamp-6">
          {movie.description}
        </p>
      </div>
      <div className="gap-horizontal-lg flex">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          icon={<Bookmark size={INFO_ICON_SIZE} />}
        />
        <Button
          variant="secondary"
          size="sm"
          icon={<TriangleAlert size={INFO_ICON_SIZE} />}
        >
          Report
        </Button>
      </div>
    </div>
  );
};

const MovieOverview = ({ movie }: MoviePlayerAndInfoProps) => {
  return (
    <div className="gap-horizontal-lg gap-vertical-lg grid grid-cols-1 xl:grid-cols-2">
      <MoviePlayer src="/trailers/s.mp4" poster={movie.poster} />
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieOverview;
