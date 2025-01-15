export const NumberedPaginationCode = `
import React, { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const NumberedPagination = ({ totalPages }) => {
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
    <div className="flex items-center border border-primary rounded text-primary text-sm h-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-8 h-8 disabled:opacity-50 flex items-center justify-center text-lg"
      >
        <RxCaretLeft />
      </button>
      {generatePages().map((page, index, pages) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && handlePageChange(page)}
          className={\`w-8 h-8 border-l border-primary transition-all ease-in-out duration-500 \${
            currentPage === page ? "bg-primary text-white" : ""
          } \${page === "..." ? "cursor-default" : ""} \${
            typeof page === "number" && page === pages[pages.length - 1]
              ? "border-r"
              : ""
          }\`}
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-8 h-8 disabled:opacity-50 flex items-center justify-center text-lg"
      >
        <RxCaretRight />
      </button>
    </div>
  );
};

export default NumberedPagination;
`;
