"use client";

import { moviesList } from "@/lib/constants";
import ListPage from "@/components/ui/ListPage";

const FavoritesPage = () => {
  return (
    <ListPage
      title="Your Favorites"
      itemsList={moviesList}
      showFilter={false}
      showSorter={false}
      showPagination={false}
    />
  );
};

export default FavoritesPage;
