import { Hero } from "@/components/ui/Hero/Hero";
import { moviesList } from "@/lib/constants";
import TrendingMovieList from "@/components/movies/TrendingMovieList";

const Page = () => {
  return (
    <main className="padding-page-y flex h-screen flex-col">
      {/* mt-auto is used in both, to push the Hero and TrendingMovieList to the bottom of the page
        since Hero text height may vary and we want consistent spacing. */}
      <Hero className="mt-auto" />
      <TrendingMovieList className="mt-auto" moviesList={moviesList} />
    </main>
  );
};

export default Page;
