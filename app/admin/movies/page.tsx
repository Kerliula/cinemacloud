"use client";

import CountBadge from "@/components/ui/CountBadge";
import Button from "@/components/admin/Button";
import { FilePlusCorner } from "lucide-react";
import { Input } from "@/components/form";
import MovieTable from "@/components/admin/MovieTable";
import Pagination from "@/components/admin/Pagination";
import { moviesList } from "@/lib/constants";
import { Movie } from "@/types/movie";
import { useState } from "react";
import { useRouter } from "next/navigation";

const ITEMS_PER_PAGE = 5;

const AdminMoviesListPage = () => {
  const router = useRouter();

  const [movies] = useState<Movie[]>(moviesList);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedMovies = filteredMovies.slice(startIndex, endIndex);

  const handleAddMovie = () => {};

  const handleEditMovie = (movie: Movie) => {
    router.push(`/admin/movies/${movie.id}`);
  };

  const handleDeleteMovie = (movie: Movie) => {};

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-row items-center justify-between">
        <div className="gap-horizontal-md flex flex-row items-center">
          <h1 className="section-admin-intro-text">Movies</h1>
          <CountBadge count={filteredMovies.length} />
        </div>
        <Button
          variant="primary"
          size="md"
          className="w-fit"
          Icon={FilePlusCorner}
          onClick={handleAddMovie}
        >
          Add Movie
        </Button>
      </div>
      <Input
        placeholder="Search movies..."
        className="w-full"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <MovieTable
        movies={paginatedMovies}
        onEdit={handleEditMovie}
        onDelete={handleDeleteMovie}
      />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default AdminMoviesListPage;
