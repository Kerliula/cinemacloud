"use client";

import { useState } from "react";
import { Pagination } from "@/components/ui";
import { ListPageProps } from "@/types/ui";
import MoviesList from "@/components/movies/MoviesList";
import MoviesSorter from "@/components/movies/MoviesSorter";
import MoviesFilter from "@/components/movies/MoviesFilter";

const ListPage = ({
  title,
  itemsList,
  showFilter = true,
  showSorter = true,
  showPagination = true,
}: ListPageProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  const totalPages = Math.ceil(itemsList.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentItems = itemsList.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <h1 className="section-intro-text">{title}</h1>
      <div className="gap-horizontal-lg flex items-center">
        {showSorter && <MoviesSorter />}
        {showFilter && <MoviesFilter />}
      </div>
      <MoviesList
        moviesList={currentItems}
        layout="vertical-grid"
        showTitle={false}
      />
      {showPagination && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default ListPage;
