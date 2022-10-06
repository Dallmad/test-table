export type UsePaginationProps = {
  contentPerPage: number;
  count: number;
};
export type UsePaginationReturn = {
  page: number;
  totalPages: number;
  firstContentIndex: number;
  lastContentIndex: number;
  setPage: (page: number) => void;
};