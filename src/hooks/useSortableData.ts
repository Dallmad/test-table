import { useMemo, useState } from 'react';

export const useSortableData = (items: any, config = null): any => {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    const sortableItems = [...items];

    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        // @ts-ignore
        if (a[sortConfig.key] < b[sortConfig.key]) {
          // @ts-ignore
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        // @ts-ignore
        if (a[sortConfig.key] > b[sortConfig.key]) {
          // @ts-ignore
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }

        return 0;
      });
    }

    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: any): any => {
    let direction = 'ascending';

    // @ts-ignore
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    // @ts-ignore
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort };
};
