import { useState } from 'react';

export const usePagination = ({
  contentPerPage,
  count,
}: UsePaginationProps): UsePaginationReturn => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean): void => {
    setPage(state => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }

        return state + 1;
      }
      if (state === 1) {
        return state;
      }

      return state - 1;
    });
  };

  const setPageSafe = (num: number): void => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};

type UsePaginationProps = {
  contentPerPage: number;
  count: number;
};
type UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};
