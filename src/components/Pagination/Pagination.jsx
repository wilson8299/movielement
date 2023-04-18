import React from "react";
import { Paginate } from "./Pagination.style";

const Pagination = ({ handlePageClick, pageCount, forcePage = null }) => {
  return (
    <Paginate
      breakLabel="..."
      nextLabel="Next >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={4}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel="< Previous"
      renderOnZeroPageCount={null}
      forcePage={forcePage}
    />
  );
};

export default Pagination;
