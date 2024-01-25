// Pagination.tsx

import React, { useState } from 'react';

interface PaginationProps {
  items: any[]; // Replace 'any[]' with the actual type of your items
  itemsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = ({ items, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPaginationNumbers = () => {
    const paginationNumbers = [];

    if (totalPages <= 3) {
      // If there are 3 or fewer pages, display all page numbers
      for (let i = 1; i <= totalPages; i++) {
        paginationNumbers.push(
          <button
            key={i}
            className={`mr-2 px-3 py-1 border ${
              currentPage === i ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // Display first 3 pages
      for (let i = 1; i <= 3; i++) {
        paginationNumbers.push(
          <button
            key={i}
            className={`mr-2 px-3 py-1 border ${
              currentPage === i ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      // Display ellipsis
      paginationNumbers.push(<span key="ellipsis">...</span>);

      // Display last page
      paginationNumbers.push(
        <button
          key={totalPages}
          className={`mr-2 px-3 py-1 border ${
            currentPage === totalPages ? 'bg-blue-500 text-white' : 'bg-white'
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return paginationNumbers;
  };

  return (
    <div>
      {/* Render your current items here */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{/* Render your item content here */}</li>
        ))}
      </ul>

      {/* Render pagination buttons */}
      <div className="flex mt-4">{renderPaginationNumbers()}</div>
    </div>
  );
};

export default Pagination;
