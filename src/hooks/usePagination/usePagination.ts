import { useState } from 'react';

import { UsePaginationProps, UsePaginationReturn } from './types';

export const usePagination = ({
  contentPerPage,
  count,
}: UsePaginationProps): UsePaginationReturn => {
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(count / contentPerPage);
  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

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
    setPage: setPageSafe,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
