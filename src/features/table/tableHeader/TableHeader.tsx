import { useEffect, useState } from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from 'common';
import { setSort } from 'state/reducers/table/table-reducer';

/* const headerTitles: HeaderTitlesType = [
  { id: 1, titleRu: 'Дата', titleEng: 'date' },
  { id: 2, titleRu: 'Название', titleEng: 'name' },
  { id: 3, titleRu: 'Количество', titleEng: 'number' },
  { id: 4, titleRu: 'Расстояние', titleEng: 'distance' },
]; */

export type HeaderTitlesType = HeaderTitleType[];
export type HeaderTitleType = {
  id: number;
  titleRu: string;
  titleEng: string;
};

export const TableHeader = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [upDown, setUpDown] = useState<boolean>(false);

  const onSort = (value: string): void => {
    setUpDown(!upDown);
    const sorted = +upDown + value;

    dispatch(setSort(sorted));
  };

  useEffect(() => {}, []);

  return (
    <tr>
      <th>Дата</th>
      <th onClick={() => onSort('name')}>Название</th>
      <th onClick={() => onSort('number')}>Количество</th>
      <th onClick={() => onSort('distance')}>Расстояние</th>

      {/* {headerTitles.map(({ id, titleRu, titleEng }) => (
        <th
          key={id}
          onClick={() => requestSort(titleEng)}
          // @ts-ignore
          className={getClassNamesFor(titleEng)}
        >
          {titleRu}
        </th>
      ))} */}
    </tr>
  );
};
