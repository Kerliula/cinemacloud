"use client";

import CountBadge from "@/components/ui/CountBadge";
import Button from "@/components/admin/Button";
import { Edit2, FilePlusCorner, Trash2 } from "lucide-react";
import { Input } from "@/components/form";
import Table from "@/components/ui/Table";
import Pagination from "@/components/admin/Pagination";
import { moviesList } from "@/lib/constants";
import { Movie } from "@/types/movie";
import { UsersColumnDef } from "@/types/ui";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 5;

const AdminMoviesListPage = () => {
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const columns: UsersColumnDef<Movie>[] = [
    {
      key: "poster_path",
      header: "Poster",
      render: (movie) => <MovieCover movie={movie} />,
      className: "padding-lg",
    },
    {
      key: "title",
      header: "Title",
      className: "padding-lg text-sm font-medium text-white",
    },
    {
      key: "release_date",
      header: "Release Date",
      render: (movie) => movie.release_date || "N/A",
      className: "padding-lg text-sm text-white/70",
    },
    {
      key: "vote_average",
      header: "Rating",
      render: (movie) => (
        <div className="flex items-center gap-1">
          <span className="text-sm font-semibold text-yellow-500">
            {movie.vote_average.toFixed(1)}
          </span>
          <span className="text-xs text-white/40">/10</span>
        </div>
      ),
      className: "padding-lg",
    },
    {
      key: "actions",
      header: "Actions",
      render: (movie) => <MovieTableActions movie={movie} />,
      className: "padding-lg",
    },
  ];

  return (
    <>
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
      <Table columns={columns} data={paginatedMovies} />
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

const MovieCover = ({ movie }: { movie: Movie }) => {
  return (
    <>
      {movie.poster_path ? (
        <div className="relative h-16 w-11 overflow-hidden rounded">
          <Image
            src={movie.poster_path}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex h-16 w-11 items-center justify-center rounded",
            "bg-white/10 text-xs text-white/40"
          )}
        >
          No Image
        </div>
      )}
    </>
  );
};

const MovieTableActions = ({ movie }: { movie: Movie }) => {
  const router = useRouter();

  const handleEditMovie = (movie: Movie) => {
    router.push(`/admin/movies/${movie.id}`);
  };

  const handleDeleteMovie = (movie: Movie) => {};
  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleEditMovie(movie)}
        className={cn(
          "padding-md rounded text-white/60 transition-colors",
          "hover:bg-green-600/20 hover:text-green-400"
        )}
        title="Edit"
      >
        <Edit2 size={16} />
      </button>
      <button
        onClick={() => handleDeleteMovie(movie)}
        className={cn(
          "padding-md rounded text-white/60 transition-colors",
          "hover:bg-red-600/20 hover:text-red-400"
        )}
        title="Delete"
      >
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default AdminMoviesListPage;
