import { Hero } from "@/components/ui/Hero/Hero";
import { moviesList } from "@/lib/constants";
import HorizontalMoviesList from "@/components/movies/MoviesList";

const Page = () => {
  return (
    <>
      {/* mt-auto pushes content to the bottom, keeping spacing consistent
      despite the hero’s dynamic height */}
      <Hero className="mt-auto" />
      <HorizontalMoviesList
        className="mt-auto"
        moviesList={moviesList}
        title="Trending Movies"
        justify="between"
      />
    </>
  );
};

export default Page;
