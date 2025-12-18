import { Hero } from "@/components/ui/Hero/Hero";
import { moviesList } from "@/lib/constants";
import TrendingMovieList from "@/components/movies/TrendingMovieList";

const Page = () => {
  const SECTION_CLASS = "flex-1 justify-center";

  return (
    <>
      <Hero className={SECTION_CLASS} />
      <TrendingMovieList className={SECTION_CLASS} moviesList={moviesList} />
    </>
  );
};

export default Page;
