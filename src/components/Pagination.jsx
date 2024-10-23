import React from 'react';

const Pagination = ({ page, setPage }) => {
  const handleNext = () => setPage(page + 1);
  const handlePrevious = () => setPage(Math.max(1, page - 1));

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={page === 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
