"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import MoviesList from "@/components/movies/MoviesList";
import CountBadge from "@/components/ui/CountBadge";
import Input from "@/components/ui/Input";
import { Pagination } from "@/components/ui";
import { moviesList } from "@/lib/constants";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const [value, setValue] = useState(query);
  const isSearchDone = query.length > 0;
  // For demo, filter movies that contain the query in title
  const searchResults = isSearchDone
    ? moviesList.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
    : [];
  const totalPages = Math.ceil(searchResults.length / 20);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value.trim()) {
      router.push(`/search?q=${encodeURIComponent(value.trim())}`);
    }
  };

  return (
    <>
      <div className="gap-horizontal-sm flex items-center">
        <h1 className="section-intro-text">Search</h1>
        <CountBadge count={searchResults.length} />
      </div>
      <Input
        colorMode="medium"
        placeholder="Search for movies, TV shows, actors, and more..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onSubmit={handleSubmit}
      />

      {!isSearchDone && (
        <p className="text-secondary text-sm">Enter a search term above.</p>
      )}

      {isSearchDone && searchResults.length === 0 && (
        <p className="text-secondary text-sm">
          No results found for &quot;{query}&quot;.
        </p>
      )}

      {isSearchDone && searchResults.length > 0 && (
        <>
          <MoviesList
            moviesList={searchResults.slice(0, 20)}
            layout="vertical-grid"
            showTitle={false}
          />
          {totalPages > 1 && (
            <Pagination
              currentPage={1}
              totalPages={totalPages}
              onPageChange={() => {}}
            />
          )}
        </>
      )}
    </>
  );
};

export default SearchPage;
