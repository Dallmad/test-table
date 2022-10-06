import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { ReturnComponentType } from 'common';
import { setSort } from 'state';

export const TableHeader = (): ReturnComponentType => {
  const dispatch = useDispatch();

  const [upDown, setUpDown] = useState<boolean>(false);

  const onSort = (value: string): void => {
    setUpDown(!upDown);
    const sorted = +upDown + value;

    dispatch(setSort(sorted));
  };

  return (
    <tr>
      <th>Дата</th>
      <th onClick={() => onSort('name')}>Название</th>
      <th onClick={() => onSort('number')}>Количество</th>
      <th onClick={() => onSort('distance')}>Расстояние</th>
    </tr>
  );
};
