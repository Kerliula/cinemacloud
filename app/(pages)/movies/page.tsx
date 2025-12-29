"use client";

import { moviesList } from "@/lib/constants";
import ListPage from "@/components/ui/ListPage";

const MoviesListPage = () => {
  return <ListPage title="Movies" itemsList={moviesList} />;
};

export default MoviesListPage;
