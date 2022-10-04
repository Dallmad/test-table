import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { ReturnComponentType } from 'common';
import { useSortableData } from 'hooks/useSortableData';
import { AppRootStateType } from 'state';
import { setSort, TableType } from 'state/reducers/table/table-reducer';

const headerTitles: HeaderTitlesType = [
  { id: 1, titleRu: 'Дата', titleEng: 'date' },
  { id: 2, titleRu: 'Название', titleEng: 'name' },
  { id: 3, titleRu: 'Количество', titleEng: 'number' },
  { id: 4, titleRu: 'Расстояние', titleEng: 'distance' },
];

export type HeaderTitlesType = HeaderTitleType[];
export type HeaderTitleType = {
  id: number;
  titleRu: string;
  titleEng: string;
};

export const TableHeader = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const table = useSelector<AppRootStateType, TableType>(state => state.table);

  const { items, requestSort, sortConfig } = useSortableData(table);
  const getClassNamesFor = (name: string): void => {
    if (!sortConfig) {
      return;
    }

    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  useEffect(() => {
    dispatch(setSort(items));
    console.log(items);
  }, [items]);

  return (
    <tr>
      {headerTitles.map(({ id, titleRu, titleEng }) => (
        <th
          key={id}
          onClick={() => requestSort(titleEng)}
          // @ts-ignore
          className={getClassNamesFor(titleEng)}
        >
          {titleRu}
        </th>
      ))}
    </tr>
  );
};
