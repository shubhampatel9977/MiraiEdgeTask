import React from "react";
import Icons from "../../assets/Icons";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  entriesPerPage: number;
  totalEntries: number;
  setPageLimit: (value: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  entriesPerPage,
  totalEntries,
  setPageLimit,
}) => {
  const pageNumbers: (number | string)[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  let renderPageNumbers: (number | string)[] = [];

  if (totalPages <= 2) {
    renderPageNumbers = pageNumbers;
  } else {
    if (currentPage === 1) {
      renderPageNumbers = [1, 2, "..."];
    } else if (currentPage === totalPages) {
      renderPageNumbers = ["...", totalPages - 1, totalPages];
    } else {
      renderPageNumbers = [currentPage - 1, currentPage, "..."];
    }
  }

  const startIndex = (currentPage - 1) * entriesPerPage + 1;
  let endIndex = currentPage * entriesPerPage;
  if (endIndex > totalEntries) {
    endIndex = totalEntries;
  }

  const handleEllipsisClick = (index: number) => {
    if (index === 0) {
      onPageChange(1);
    } else {
      onPageChange(totalPages);
    }
  };

  return (
    <div className="flex justify-between items-center p-2">
      <p className="text-gray-800 dark:text-gray-200">
        Showing {startIndex} - {endIndex} of {totalEntries}
      </p>
      <div className="flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-2">
          <p className="text-gray-800 dark:text-gray-200">Page:</p>
          <select
            onChange={(e) => setPageLimit(Number(e.target.value))}
            defaultValue={"5"}
            className="rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          {currentPage !== 1 && (
            <button onClick={() => onPageChange(currentPage - 1)}>
              <Icons.leftIcons />
            </button>
          )}
          <div>
            {renderPageNumbers.map((number, index) => (
              <button
                key={index}
                className={
                  currentPage === number
                    ? "bg-white dark:bg-gray-900 rounded text-gray-800 dark:text-gray-200 py-1 px-3 mx-2"
                    : "px-2 mx-2 text-gray-800 dark:text-gray-200"
                }
                onClick={() =>
                  number === "..."
                    ? handleEllipsisClick(index)
                    : onPageChange(number as number)
                }
              >
                {number}
              </button>
            ))}
          </div>
          {currentPage !== totalPages && totalPages !== 0 && (
            <button onClick={() => onPageChange(currentPage + 1)}>
              <Icons.rightIcons />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;