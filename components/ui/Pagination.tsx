import { Button } from "./index";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          variant={i === currentPage ? "primary" : "secondary"}
          size="sm"
          onClick={() => onPageChange(i)}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="gap-horizontal-sm flex items-center justify-center">
      <Button
        variant="secondary"
        size="sm"
        disabled={currentPage === 1}
        onClick={handlePrevious}
      >
        Previous
      </Button>
      {renderPageNumbers()}
      <Button
        variant="secondary"
        size="sm"
        disabled={currentPage === totalPages}
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}
