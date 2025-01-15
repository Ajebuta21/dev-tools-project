import React, { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const EllipsisPagination = ({ totalPages }: { totalPages: number }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePages = () => {
    const pages = [];

    // Always include the first page
    if (currentPage > 2) {
      pages.push(1);
    }
    if (currentPage > 3) {
      pages.push("...");
    }

    // Include current page and its neighbors
    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    // Add ellipses and last page
    if (currentPage < totalPages - 2) {
      pages.push("...");
    }
    if (currentPage < totalPages - 1) {
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex items-center gap-2 text-primary text-xs">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-7 h-7 rounded-full flex items-center justify-center disabled:opacity-50 text-lg hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        <RxCaretLeft />
      </button>
      {generatePages().map((page, index, pages) =>
        page === "..." ? (
          <span key={index} className="px-3 py-1">
            ...
          </span>
        ) : (
          <button
            key={index}
            onClick={() => handlePageChange(page as number)}
            className={`rounded-full flex items-center justify-center hover:bg-primary/50 transition-all ease-in-out duration-500 ${
              currentPage === page ? "bg-primary text-white w-8 h-8" : "w-7 h-7"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-7 h-7 rounded-full flex items-center justify-center disabled:opacity-50 text-lg hover:bg-primary/50 transition-all ease-in-out duration-500"
      >
        <RxCaretRight />
      </button>
    </div>
  );
};

export default EllipsisPagination;
