import Title from "@/components/ui/Title";
import { Clock, Calendar, Film } from "lucide-react";
import Image from "next/image";
import { MovieTags } from "./MovieTags";
import { slides } from "@/lib/constants";

const INFO_ICON_SIZE = 20;

const movie = {
  ...slides[0],
  rating: 8.5,
  duration: "107 min",
  director: "Don Hall, Carlos López Estrada",
  cast: ["Kelly Marie Tran", "Awkwafina", "Gemma Chan"],
};

const Divider = () => <div className="h-6 w-px bg-neutral-700"></div>;
const InfoBox = ({ icon, text }: { icon: React.ReactNode; text: string }) => {
  return (
    <div className="gap-horizontal-sm flex items-center">
      <div className="text-primary">{icon}</div>
      <span className="text-secondary">{text}</span>
    </div>
  );
};

const MoviePlayerAndInfo = () => {
  return (
    <div className="gap-horizontal-lg flex">
      {/* Left side - Movie Player */}
      <iframe
        className="aspect-video flex-1 rounded-md"
        src="https://www.youtube.com/embed/ZDeJn6S3_Ww?si=rBkA6lSE-qXQxLPA"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {/* Right side - Movie Details */}
      <div className="gap-vertical-lg flex flex-1 flex-col justify-between">
        <div className="gap-vertical-md flex flex-col">
          <Title>RAYA AND THE LAST DRAGON</Title>
          <MovieTags year={movie.year} genres={movie.genres} />
        </div>

        {/* Movie Info Section */}
        <div className="gap-horizontal-md items-around flex">
          <div className="gap-horizontal-sm flex items-center">
            <Image src="/imdb.png" alt="IMDB Logo" width={40} height={25} />
            <span className="text-primary text-lg font-semibold">
              {movie.rating}{" "}
              <span className="text-secondary text-sm">/ 10</span>
            </span>
          </div>
          <Divider />
          <InfoBox
            icon={<Clock size={INFO_ICON_SIZE} />}
            text={movie.duration}
          />
          <Divider />
          <InfoBox
            icon={<Calendar size={INFO_ICON_SIZE} />}
            text={movie.year}
          />
          <Divider />
          <InfoBox
            icon={<Film size={INFO_ICON_SIZE} />}
            text={movie.director}
          />
        </div>
        <div className="gap-vertical-md flex flex-col">
          <h3 className="section-intro-text">Description</h3>
          <p className="text-secondary leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            venenatis velit sit amet tortor mollis, ut finibus nibh lobortis.
            Nunc convallis dui ac magna porttitor pretium. Quisque bibendum urna
            sed blandit pretium. Nam luctus justo erat, ac lobortis augue
            suscipit eu. Cras efficitur tincidunt massa, ac varius justo. Morbi
            sapien mi, dapibus ac turpis non, porttitor sagittis risus. Fusce
            molestie tempor metus, ut egestas diam pretium quis. Aenean auctor,
            nisl vel tincidunt semper, nisl erat placerat ante, id laoreet
            lectus nibh a nisi. Sed semper laoreet fringilla. Donec eu leo
            dignissim lacus luctus mattis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePlayerAndInfo;
