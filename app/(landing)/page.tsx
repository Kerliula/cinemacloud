import { Hero } from "@/components/ui/Hero/Hero";
import { moviesList } from "@/lib/constants";
import TrendingMovieList from "@/components/movies/TrendingMovieList";

const Page = () => {
  return (
    <>
      {/* mt-auto pushes content to the bottom, keeping spacing consistent
      despite the hero’s dynamic height */}
      <Hero className="mt-auto" />
      <TrendingMovieList className="mt-auto" moviesList={moviesList} />
    </>
  );
};

export default Page;
