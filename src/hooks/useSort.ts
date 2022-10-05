import { useMemo } from 'react';

import { TableType } from 'state/reducers/table/table-reducer';

export const useSort = (sort: string, table: TableType): TableType => {
  return useMemo(() => {
    const sortableItems: TableType = [...table];

    if (sort === '0name') {
      sortableItems.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;

        return 0;
      });
    } else if (sort === '0number') {
      sortableItems.sort((a, b) => {
        if (a.number > b.number) return 1;
        if (a.number < b.number) return -1;

        return 0;
      });
    } else if (sort === '0distance') {
      sortableItems.sort((a, b) => {
        if (a.distance > b.distance) return -1;
        if (a.distance < b.distance) return 1;

        return 0;
      });
    } else if (sort === '1name') {
      sortableItems.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

        return 0;
      });
    } else if (sort === '1distance') {
      sortableItems.sort((a, b) => {
        if (a.distance > b.distance) return 1;
        if (a.distance < b.distance) return -1;

        return 0;
      });
    } else {
      sortableItems.sort((a, b) => {
        if (a.number > b.number) return -1;
        if (a.number < b.number) return 1;

        return 0;
      });
    }

    return sortableItems;
  }, [sort, table]);
};
