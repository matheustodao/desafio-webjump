/* eslint-disable no-else-return */
import { useState } from 'react';

export default function usePagination({ contentPerPage, lenghtContent }) {
  const [page, setPage] = useState(1);
  const [perPage] = useState(contentPerPage ?? 1);
  const totalPages = Math.ceil(lenghtContent / perPage);
  const lastItemContent = page * perPage;
  const firstItemContent = lastItemContent - perPage;

  function changePage(direction) {
    setPage((prevState) => {
      if (direction) {
        if (prevState === totalPages) {
          return prevState;
        }

        return prevState + 1;
      } else {
        if (prevState === 1) {
          return prevState;
        }
        return prevState - 1;
      }
    });
  }

  function setPageSAFE(num) {
    if (num > totalPages) {
      setPage(totalPages);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  }

  return {
    totalPages,
    nextPage: () => changePage(true),
    setPage: (num) => setPageSAFE(num),
    prevPage: () => changePage(false),
    firstItemContent,
    lastItemContent,
    page,
  };
}
